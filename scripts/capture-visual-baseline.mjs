import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.VISUAL_BASE_URL || 'https://www.ventogroup.co';
const outDir = process.env.VISUAL_OUT_DIR || 'artifacts/web-aud-009';

const routes = [
  { key: 'home', path: '/' },
  { key: 'restaurantes', path: '/restaurantes' },
  { key: 'restaurante-vento-cafe', path: '/restaurantes/vento-cafe' },
  { key: 'restaurante-saudo', path: '/restaurantes/saudo' },
  { key: 'restaurante-molka', path: '/restaurantes/molka' },
  { key: 'empleos', path: '/empleos' },
  { key: 'servicios', path: '/servicios' },
  { key: 'ecosistema', path: '/ecosistema' },
  { key: 'eventos', path: '/eventos' },
  { key: 'not-found', path: '/ruta-inexistente-web-aud-009' },
];

const viewports = [
  { key: 'desktop', width: 1440, height: 1000 },
  { key: 'tablet', width: 834, height: 1112 },
  { key: 'mobile', width: 390, height: 844 },
];

const report = {
  generated_at: new Date().toISOString(),
  base_url: baseURL,
  routes: [],
  menus: [],
  footers: [],
  console_errors: [],
};

await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    const requestedURL = new URL(route.path, baseURL).toString();
    let response = null;
    let navigationError = null;
    try {
      response = await page.goto(requestedURL, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(route.key === 'home' ? 4000 : 1200);
    } catch (error) {
      navigationError = error instanceof Error ? error.message : String(error);
    }

    const filename = `${viewport.key}__${route.key}.png`;
    await page.screenshot({ path: path.join(outDir, filename), fullPage: true });

    const bodyText = await page.locator('body').innerText().catch(() => '');
    const placeholders = await page.locator('.placeholder').allTextContents().catch(() => []);
    const internalCopy = bodyText
      .split('\n')
      .map((value) => value.trim())
      .filter(Boolean)
      .filter((value) => /completa|diseña esta sección|por definir|media pendiente|bloque editable|integra esta lista/i.test(value));

    const entry = {
      viewport: viewport.key,
      route: route.path,
      requested_url: requestedURL,
      final_url: page.url(),
      status: response?.status() ?? null,
      title: await page.title().catch(() => ''),
      screenshot: filename,
      viewport_size: viewport,
      navigation_error: navigationError,
      placeholder_count: placeholders.length,
      placeholders,
      internal_copy: [...new Set(internalCopy)],
      body_text_length: bodyText.length,
    };
    report.routes.push(entry);
    if (errors.length) report.console_errors.push({ viewport: viewport.key, route: route.path, errors });

    const footer = page.locator('footer').first();
    if (await footer.count()) {
      await footer.scrollIntoViewIfNeeded().catch(() => {});
      await page.waitForTimeout(250);
      const footerFile = `${viewport.key}__${route.key}__footer.png`;
      await footer.screenshot({ path: path.join(outDir, footerFile) }).catch(() => {});
      report.footers.push({ viewport: viewport.key, route: route.path, screenshot: footerFile });
    }

    await page.close();
  }

  const menuPage = await context.newPage();
  await menuPage.goto(baseURL, { waitUntil: 'networkidle', timeout: 60000 });
  await menuPage.waitForTimeout(4000);
  const menuButton = menuPage.getByRole('button', { name: /menu/i }).first();
  if (await menuButton.count()) {
    await menuButton.click();
    await menuPage.waitForTimeout(350);
    const menuFile = `${viewport.key}__menu-open.png`;
    await menuPage.screenshot({ path: path.join(outDir, menuFile), fullPage: false });
    report.menus.push({ viewport: viewport.key, screenshot: menuFile });
  }
  await menuPage.close();
  await context.close();
}

await browser.close();
await fs.writeFile(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ outDir, captures: report.routes.length, menus: report.menus.length, footers: report.footers.length }, null, 2));
