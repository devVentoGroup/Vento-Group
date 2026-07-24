import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE_URL = process.env.BASE_URL ?? "https://www.ventogroup.co";
const OUTPUT_DIR = process.argv[2] ?? "artifacts/web-aud-011";

const routes = [
  { name: "home", route: "/" },
  { name: "restaurants", route: "/restaurantes" },
  { name: "vento-cafe", route: "/restaurantes/vento-cafe" },
  { name: "saudo", route: "/restaurantes/saudo" },
  { name: "molka", route: "/restaurantes/molka" },
  { name: "jobs", route: "/empleos" },
  { name: "services", route: "/servicios" },
  { name: "ecosystem", route: "/ecosistema" },
  { name: "events", route: "/eventos" },
  { name: "not-found", route: "/ruta-inexistente-web-aud-011" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function ensureDirs() {
  for (const dir of ["axe", "keyboard", "screen-reader", "reduced-motion", "screenshots"]) {
    await fs.mkdir(path.join(OUTPUT_DIR, dir), { recursive: true });
  }
}

async function settle(page) {
  await page.waitForLoadState("domcontentloaded").catch(() => undefined);
  await page.waitForLoadState("networkidle", { timeout: 12000 }).catch(() => undefined);
  await sleep(3800);
}

async function collectDocumentStructure(page) {
  return page.evaluate(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    };

    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((element) => ({
      level: Number(element.tagName.slice(1)),
      text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 240),
      visible: visible(element),
      ariaHidden: element.getAttribute("aria-hidden"),
    }));

    const headingJumps = [];
    const visibleHeadings = headings.filter((heading) => heading.visible && heading.ariaHidden !== "true");
    for (let index = 1; index < visibleHeadings.length; index += 1) {
      const previous = visibleHeadings[index - 1];
      const current = visibleHeadings[index];
      if (current.level > previous.level + 1) {
        headingJumps.push({ previous, current });
      }
    }

    const images = [...document.querySelectorAll("img")].map((image) => ({
      src: image.currentSrc || image.getAttribute("src"),
      altPresent: image.hasAttribute("alt"),
      alt: image.getAttribute("alt"),
      role: image.getAttribute("role"),
      ariaHidden: image.getAttribute("aria-hidden"),
      visible: visible(image),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
    }));

    const landmarks = {
      header: document.querySelectorAll("header").length,
      nav: document.querySelectorAll("nav").length,
      main: document.querySelectorAll("main").length,
      footer: document.querySelectorAll("footer").length,
      aside: document.querySelectorAll("aside").length,
      form: document.querySelectorAll("form").length,
    };

    const unlabeledControls = [...document.querySelectorAll("button,input,select,textarea")]
      .filter((element) => visible(element))
      .map((element) => {
        const id = element.getAttribute("id");
        const label = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`) : null;
        const accessibleText = [
          element.getAttribute("aria-label"),
          element.getAttribute("aria-labelledby"),
          element.getAttribute("title"),
          label?.textContent,
          element.textContent,
          element.getAttribute("placeholder"),
        ]
          .filter(Boolean)
          .join(" ")
          .trim();
        return {
          tag: element.tagName.toLowerCase(),
          type: element.getAttribute("type"),
          id,
          accessibleText,
        };
      })
      .filter((control) => !control.accessibleText);

    return {
      lang: document.documentElement.lang,
      title: document.title,
      headings,
      visibleHeadingCount: visibleHeadings.length,
      h1Count: visibleHeadings.filter((heading) => heading.level === 1).length,
      headingJumps,
      images,
      missingAltCount: images.filter((image) => image.visible && !image.altPresent).length,
      emptyAltCount: images.filter((image) => image.visible && image.altPresent && image.alt === "").length,
      landmarks,
      unlabeledControls,
      skipLinks: [...document.querySelectorAll('a[href^="#"]')]
        .filter((element) => /saltar|skip/i.test(element.textContent ?? ""))
        .map((element) => ({ text: element.textContent?.trim(), href: element.getAttribute("href") })),
    };
  });
}

async function describeFocusedElement(page) {
  return page.evaluate(() => {
    const element = document.activeElement;
    if (!(element instanceof HTMLElement)) return null;
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const text = (element.innerText || element.getAttribute("aria-label") || element.getAttribute("title") || "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 160);
    return {
      tag: element.tagName.toLowerCase(),
      id: element.id || null,
      className: element.className || null,
      text,
      href: element.getAttribute("href"),
      role: element.getAttribute("role"),
      ariaLabel: element.getAttribute("aria-label"),
      ariaExpanded: element.getAttribute("aria-expanded"),
      tabindex: element.getAttribute("tabindex"),
      focusVisible: element.matches(":focus-visible"),
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
      outlineColor: style.outlineColor,
      boxShadow: style.boxShadow,
      visible: style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0,
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    };
  });
}

async function collectKeyboardBaseline(page, routeName, viewportName) {
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    document.body.setAttribute("tabindex", "-1");
    document.body.focus();
  });

  const sequence = [];
  for (let index = 0; index < 45; index += 1) {
    await page.keyboard.press("Tab");
    const descriptor = await describeFocusedElement(page);
    sequence.push(descriptor);
    if (descriptor?.tag === "body") break;
  }

  const signature = (item) => item ? `${item.tag}|${item.id ?? ""}|${item.href ?? ""}|${item.text ?? ""}` : "null";
  const signatures = sequence.map(signature);
  const repeatedConsecutive = signatures.filter((value, index) => index > 0 && value === signatures[index - 1]).length;
  const invisibleFocused = sequence.filter((item) => item && !item.visible).length;
  const missingVisibleIndicator = sequence.filter((item) => {
    if (!item || !item.visible) return false;
    const hasOutline = item.outlineStyle !== "none" && item.outlineWidth !== "0px";
    const hasShadow = item.boxShadow && item.boxShadow !== "none";
    return !item.focusVisible || (!hasOutline && !hasShadow);
  }).length;

  if (sequence.length > 0) {
    await page.screenshot({
      path: path.join(OUTPUT_DIR, "screenshots", `${viewportName}-${routeName}-keyboard-focus.png`),
      fullPage: false,
    }).catch(() => undefined);
  }

  return {
    sequence,
    uniqueFocusTargets: new Set(signatures).size,
    repeatedConsecutive,
    invisibleFocused,
    missingVisibleIndicator,
  };
}

async function collectMenuKeyboardBaseline(page, viewportName) {
  const menuButton = page.getByRole("button", { name: /^menu$/i }).first();
  if (!(await menuButton.count())) return { available: false };

  await menuButton.focus();
  const before = await describeFocusedElement(page);
  await page.keyboard.press("Enter");
  await sleep(300);

  const openState = await menuButton.getAttribute("aria-expanded");
  const overlayHidden = await page.locator("#site-overlay-menu").getAttribute("aria-hidden").catch(() => null);
  const openFocused = await describeFocusedElement(page);
  const tabSequence = [];
  for (let index = 0; index < 15; index += 1) {
    await page.keyboard.press("Tab");
    tabSequence.push(await describeFocusedElement(page));
  }

  await page.screenshot({
    path: path.join(OUTPUT_DIR, "screenshots", `${viewportName}-home-menu-keyboard-open.png`),
    fullPage: false,
  }).catch(() => undefined);

  await page.keyboard.press("Escape");
  await sleep(250);
  const closedState = await menuButton.getAttribute("aria-expanded");
  const focusAfterEscape = await describeFocusedElement(page);

  return {
    available: true,
    before,
    openState,
    overlayHidden,
    openFocused,
    tabSequence,
    closedState,
    focusAfterEscape,
    focusReturnedToTrigger: focusAfterEscape?.id === before?.id && focusAfterEscape?.text === before?.text,
  };
}

async function collectReducedMotion(browser, route) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const response = await page.goto(`${BASE_URL}${route.route}`, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => null);
  await sleep(600);
  const early = await page.evaluate(() => ({
    mediaMatches: matchMedia("(prefers-reduced-motion: reduce)").matches,
    activeAnimations: document.getAnimations().filter((animation) => animation.playState === "running").length,
    totalAnimations: document.getAnimations().length,
    smoothScroll: getComputedStyle(document.documentElement).scrollBehavior,
  }));
  await sleep(3600);
  const late = await page.evaluate(() => {
    const animations = document.getAnimations().map((animation) => {
      const effect = animation.effect;
      const target = effect && "target" in effect ? effect.target : null;
      const timing = effect?.getComputedTiming?.();
      return {
        playState: animation.playState,
        duration: timing?.duration ?? null,
        iterations: timing?.iterations ?? null,
        target: target instanceof Element ? `${target.tagName.toLowerCase()}.${[...target.classList].slice(0, 3).join(".")}` : null,
      };
    });
    return {
      mediaMatches: matchMedia("(prefers-reduced-motion: reduce)").matches,
      activeAnimations: animations.filter((animation) => animation.playState === "running").length,
      totalAnimations: animations.length,
      animations: animations.slice(0, 100),
      bodyClasses: document.body.className,
    };
  });
  await context.close();
  return {
    status: response?.status() ?? null,
    early,
    late,
  };
}

async function auditRoute(browser, route, viewport) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    isMobile: viewport.isMobile,
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const response = await page.goto(`${BASE_URL}${route.route}`, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => null);
  await settle(page);

  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa", "best-practice"])
    .analyze();

  const structure = await collectDocumentStructure(page);
  const keyboard = await collectKeyboardBaseline(page, route.name, viewport.name);
  let ariaSnapshot = null;
  try {
    ariaSnapshot = await page.locator("body").ariaSnapshot({ timeout: 10000 });
  } catch (error) {
    ariaSnapshot = `ARIA_SNAPSHOT_ERROR: ${error instanceof Error ? error.message : String(error)}`;
  }

  await fs.writeFile(
    path.join(OUTPUT_DIR, "axe", `${viewport.name}-${route.name}.json`),
    JSON.stringify(axe, null, 2),
  );
  await fs.writeFile(
    path.join(OUTPUT_DIR, "keyboard", `${viewport.name}-${route.name}.json`),
    JSON.stringify(keyboard, null, 2),
  );
  await fs.writeFile(
    path.join(OUTPUT_DIR, "screen-reader", `${viewport.name}-${route.name}.txt`),
    ariaSnapshot ?? "",
  );

  await context.close();

  return {
    route: route.route,
    routeName: route.name,
    viewport: viewport.name,
    requestedUrl: `${BASE_URL}${route.route}`,
    finalUrl: page.url(),
    status: response?.status() ?? null,
    redirected: page.url() !== `${BASE_URL}${route.route}`,
    axe: {
      violations: axe.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
        nodeCount: violation.nodes.length,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          html: node.html,
          failureSummary: node.failureSummary,
        })),
      })),
      passes: axe.passes.length,
      incomplete: axe.incomplete.length,
      inapplicable: axe.inapplicable.length,
    },
    structure,
    keyboard: {
      uniqueFocusTargets: keyboard.uniqueFocusTargets,
      repeatedConsecutive: keyboard.repeatedConsecutive,
      invisibleFocused: keyboard.invisibleFocused,
      missingVisibleIndicator: keyboard.missingVisibleIndicator,
    },
    consoleErrors,
  };
}

async function main() {
  await ensureDirs();
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of viewports) {
    for (const route of routes) {
      console.log(`Auditing ${viewport.name} ${route.route}`);
      results.push(await auditRoute(browser, route, viewport));
    }
  }

  const menu = {};
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
    });
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded", timeout: 45000 });
    await settle(page);
    menu[viewport.name] = await collectMenuKeyboardBaseline(page, viewport.name);
    await context.close();
  }

  const reducedMotion = {};
  for (const route of routes) {
    console.log(`Reduced motion ${route.route}`);
    reducedMotion[route.name] = await collectReducedMotion(browser, route);
  }

  await browser.close();

  const violationCounts = new Map();
  for (const result of results) {
    for (const violation of result.axe.violations) {
      const current = violationCounts.get(violation.id) ?? { routes: new Set(), nodes: 0, impact: violation.impact, help: violation.help };
      current.routes.add(`${result.viewport}:${result.routeName}`);
      current.nodes += violation.nodeCount;
      violationCounts.set(violation.id, current);
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    routeCount: routes.length,
    viewportCount: viewports.length,
    audits: results.length,
    results,
    menu,
    reducedMotion,
    violationSummary: [...violationCounts.entries()].map(([id, value]) => ({
      id,
      impact: value.impact,
      help: value.help,
      auditCount: value.routes.size,
      nodeCount: value.nodes,
      audits: [...value.routes],
    })),
  };

  await fs.writeFile(path.join(OUTPUT_DIR, "summary.json"), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify({
    audits: summary.audits,
    uniqueViolations: summary.violationSummary.length,
    violations: summary.violationSummary,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
