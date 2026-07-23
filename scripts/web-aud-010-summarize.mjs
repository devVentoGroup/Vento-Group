import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] || 'artifacts/web-aud-010';
const reportsDir = path.join(root, 'lighthouse');
const output = {
  generatedAt: new Date().toISOString(),
  reports: [],
  aggregate: {},
};

const files = fs.existsSync(reportsDir)
  ? fs.readdirSync(reportsDir).filter((name) => name.endsWith('.json')).sort()
  : [];

function numeric(audit) {
  return audit && typeof audit.numericValue === 'number' ? audit.numericValue : null;
}

for (const file of files) {
  const full = path.join(reportsDir, file);
  const lhr = JSON.parse(fs.readFileSync(full, 'utf8'));
  const audits = lhr.audits || {};
  const categories = lhr.categories || {};
  const items = audits['network-requests']?.details?.items || [];

  const bytesByType = {};
  for (const item of items) {
    const type = item.resourceType || 'Other';
    bytesByType[type] = (bytesByType[type] || 0) + (item.transferSize || 0);
  }

  const jsItems = items.filter((item) => item.resourceType === 'Script');
  const imageItems = items.filter((item) => item.resourceType === 'Image');
  const mediaItems = items.filter((item) => item.resourceType === 'Media');

  output.reports.push({
    file,
    url: lhr.finalDisplayedUrl || lhr.finalUrl || lhr.requestedUrl,
    requestedUrl: lhr.requestedUrl,
    fetchTime: lhr.fetchTime,
    formFactor: lhr.configSettings?.formFactor,
    scores: {
      performance: categories.performance?.score ?? null,
      accessibility: categories.accessibility?.score ?? null,
      bestPractices: categories['best-practices']?.score ?? null,
      seo: categories.seo?.score ?? null,
    },
    metrics: {
      fcpMs: numeric(audits['first-contentful-paint']),
      lcpMs: numeric(audits['largest-contentful-paint']),
      cls: numeric(audits['cumulative-layout-shift']),
      tbtMs: numeric(audits['total-blocking-time']),
      speedIndexMs: numeric(audits['speed-index']),
      inpProxyMs: numeric(audits['interaction-to-next-paint']) ?? numeric(audits['experimental-interaction-to-next-paint']),
      ttiMs: numeric(audits['interactive']),
      serverResponseMs: numeric(audits['server-response-time']),
    },
    transfer: {
      totalBytes: items.reduce((sum, item) => sum + (item.transferSize || 0), 0),
      requestCount: items.length,
      bytesByType,
      javascriptBytes: jsItems.reduce((sum, item) => sum + (item.transferSize || 0), 0),
      imageBytes: imageItems.reduce((sum, item) => sum + (item.transferSize || 0), 0),
      videoBytes: mediaItems.reduce((sum, item) => sum + (item.transferSize || 0), 0),
      javascriptRequests: jsItems.length,
      imageRequests: imageItems.length,
      videoRequests: mediaItems.length,
    },
    opportunities: {
      unusedJavascriptBytes: numeric(audits['unused-javascript']),
      unminifiedJavascriptBytes: numeric(audits['unminified-javascript']),
      offscreenImagesBytes: numeric(audits['offscreen-images']),
      modernImageFormatsBytes: numeric(audits['modern-image-formats']),
      efficientAnimatedContentBytes: numeric(audits['efficient-animated-content']),
      usesLongCacheTtlBytes: numeric(audits['uses-long-cache-ttl']),
      totalByteWeight: numeric(audits['total-byte-weight']),
      mainThreadWorkMs: numeric(audits['mainthread-work-breakdown']),
      bootupTimeMs: numeric(audits['bootup-time']),
    },
    cachePolicy: (audits['uses-long-cache-ttl']?.details?.items || []).map((item) => ({
      url: item.url,
      cacheLifetimeMs: item.cacheLifetimeMs ?? null,
      cacheHitProbability: item.cacheHitProbability ?? null,
      transferSize: item.totalBytes ?? item.transferSize ?? null,
    })),
    largestResources: [...items]
      .sort((a, b) => (b.transferSize || 0) - (a.transferSize || 0))
      .slice(0, 15)
      .map((item) => ({
        url: item.url,
        resourceType: item.resourceType,
        transferSize: item.transferSize || 0,
        statusCode: item.statusCode,
        mimeType: item.mimeType,
      })),
  });
}

for (const formFactor of ['mobile', 'desktop']) {
  const reports = output.reports.filter((item) => item.formFactor === formFactor);
  const avg = (selector) => {
    const values = reports.map(selector).filter((v) => typeof v === 'number');
    return values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
  };
  output.aggregate[formFactor] = {
    reportCount: reports.length,
    performanceScoreAvg: avg((r) => r.scores.performance),
    lcpMsAvg: avg((r) => r.metrics.lcpMs),
    clsAvg: avg((r) => r.metrics.cls),
    tbtMsAvg: avg((r) => r.metrics.tbtMs),
    totalBytesAvg: avg((r) => r.transfer.totalBytes),
    javascriptBytesAvg: avg((r) => r.transfer.javascriptBytes),
    imageBytesAvg: avg((r) => r.transfer.imageBytes),
    videoBytesAvg: avg((r) => r.transfer.videoBytes),
  };
}

fs.mkdirSync(root, { recursive: true });
fs.writeFileSync(path.join(root, 'summary.json'), JSON.stringify(output, null, 2));
console.log(JSON.stringify(output.aggregate, null, 2));
