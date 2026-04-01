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

// Simple static file server
function createStaticServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    // Directory → index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // SPA fallback
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': `${mime}; charset=utf-8` });
    res.end(fs.readFileSync(filePath));
  });
}

async function prerender() {
  console.log('Starting prerender...');

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

    const html = await page.content();
    await page.close();

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
  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
