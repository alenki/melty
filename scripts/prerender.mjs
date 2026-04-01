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
// react-helmet-async injects its own tags but doesn't remove the originals
// from the static template, causing duplicates in the serialized DOM.
function cleanHtml(html) {
  // The template has <title>Melty</title> — helmet adds its own <title>.
  // Keep only the FIRST <title> (helmet injects at the top of <head>).
  let titleCount = 0;
  html = html.replace(/<title>[^<]*<\/title>/g, (match) => {
    titleCount++;
    return titleCount === 1 ? match : '';
  });

  // Remove duplicate meta tags — keep the first occurrence of each name/property.
  const seenMeta = new Set();
  html = html.replace(/<meta\s+[^>]*>/g, (match) => {
    const nameMatch = match.match(/(?:name|property)="([^"]+)"/);
    if (nameMatch) {
      const key = nameMatch[1];
      if (seenMeta.has(key)) return '';
      seenMeta.add(key);
    }
    return match;
  });

  // Remove duplicate canonical links — keep only the first.
  let canonicalCount = 0;
  html = html.replace(/<link\s+rel="canonical"[^>]*>/g, (match) => {
    canonicalCount++;
    return canonicalCount === 1 ? match : '';
  });

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

    // Wait for loading screen to finish (800ms first load + transition)
    await new Promise((r) => setTimeout(r, 2000));

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
