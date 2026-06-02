import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;
const ROUTES = ['/', '/menu', '/gallery', '/about', '/feedback'];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

// Backup the original SPA shell before prerendering overwrites it
const SPA_SHELL_BACKUP = path.join(DIST, '__spa_shell.html');

// Simple static file server — always uses the clean SPA shell for fallback
function createStaticServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    // Directory → index.html (only for non-prerendered dirs like assets/)
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // SPA fallback — use the clean backup, not the (possibly prerendered) index.html
    if (!fs.existsSync(filePath)) {
      filePath = SPA_SHELL_BACKUP;
    }

    const ext = path.extname(filePath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': `${mime}; charset=utf-8` });
    res.end(fs.readFileSync(filePath));
  });
}

// Remove duplicate tags that exist in the original HTML template.
// react-helmet-async's DOM-manipulation behavior differs per tag type:
//   - <title>  — PREPENDED at top of <head> (browsers use the first <title>)
//   - <meta>   — APPENDED to end of <head> (we need the LAST occurrence of
//                each name/property since helmet's is appended after the
//                template's fallback)
//   - <link rel="canonical"> — APPENDED
//   - <link rel="alternate" hreflang> — APPENDED
// The template ships with fallback SEO for JS-disabled crawlers, so we have
// to dedupe both ends.
function cleanHtml(html) {
  // Keep FIRST <title> (helmet prepends its per-route title).
  let titleCount = 0;
  html = html.replace(/<title>[^<]*<\/title>/g, (match) => {
    titleCount++;
    return titleCount === 1 ? match : '';
  });

  // For each name/property key, keep only the LAST <meta> occurrence —
  // helmet appends its per-route meta after the template's fallbacks, so the
  // last one is always the page-specific (correct) one.
  const metaByKey = new Map();
  const metaMatches = [...html.matchAll(/<meta\s+[^>]*>/g)];
  metaMatches.forEach((m) => {
    const key = m[0].match(/(?:name|property)="([^"]+)"/);
    if (key) metaByKey.set(key[1], m.index);
  });
  html = html.replace(/<meta\s+[^>]*>/g, (match, offset) => {
    const key = match.match(/(?:name|property)="([^"]+)"/);
    if (!key) return match; // charset / viewport etc. — keep as-is
    return metaByKey.get(key[1]) === offset ? match : '';
  });

  // Keep the LAST <link rel="canonical"> only.
  const canonMatches = [...html.matchAll(/<link\s+rel="canonical"[^>]*>/g)];
  if (canonMatches.length > 1) {
    const lastOffset = canonMatches[canonMatches.length - 1].index;
    html = html.replace(/<link\s+rel="canonical"[^>]*>/g, (match, offset) =>
      offset === lastOffset ? match : ''
    );
  }

  // Keep the LAST of each hreflang alternate (helmet appends per-route ones).
  const altMap = new Map();
  const altMatches = [...html.matchAll(/<link\s+rel="alternate"[^>]*hreflang="([^"]+)"[^>]*>/g)];
  altMatches.forEach((m) => altMap.set(m[1], m.index));
  html = html.replace(/<link\s+rel="alternate"[^>]*hreflang="([^"]+)"[^>]*>/g, (match, lang, offset) =>
    altMap.get(lang) === offset ? match : ''
  );

  return html;
}

async function prerender() {
  console.log('Starting prerender...');

  // Backup the clean SPA shell before any route overwrites index.html
  fs.copyFileSync(path.join(DIST, 'index.html'), SPA_SHELL_BACKUP);

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Rendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for the loading screen to finish (350ms first load + transition)
    await new Promise((r) => setTimeout(r, 1000));

    let html = await page.content();
    await page.close();

    // Clean up duplicate tags from template vs helmet
    html = cleanHtml(html);

    // Determine output path
    const outputDir = route === '/'
      ? DIST
      : path.join(DIST, route);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputFile, html, 'utf-8');
    console.log(`  → ${path.relative(DIST, outputFile)}`);
  }

  await browser.close();
  server.close();

  // Clean up the backup
  fs.unlinkSync(SPA_SHELL_BACKUP);

  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
