/**
 * Independent screenshot tool (the in-app browser capture worker is broken this
 * session). Drives system Chrome via puppeteer-core.
 *
 * Usage:
 *   node scripts/shot.mjs <path> [--dark] [--ar] [--w 1280] [--h 900]
 *                                [--full] [--mobile] [--out name]
 * Examples:
 *   node scripts/shot.mjs /en/            --out home-en
 *   node scripts/shot.mjs /ar/ --dark     --out home-ar-dark
 *   node scripts/shot.mjs /en/ --mobile --full --out home-en-mobile
 */
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(existsSync);

const args = process.argv.slice(2);
const path = args[0] && !args[0].startsWith('--') ? args[0] : '/en/';
const flag = (n) => args.includes(`--${n}`);
const val = (n, d) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};

const dark = flag('dark');
const mobile = flag('mobile');
const full = flag('full');
const width = mobile ? 390 : parseInt(val('w', '1320'), 10);
const height = mobile ? 844 : parseInt(val('h', '920'), 10);
const out = val('out', 'shot');
const base = process.env.BASE || 'http://localhost:4321';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 2 });
if (dark) {
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
}
await page.goto(base + path, { waitUntil: 'load', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);
// Optional: scroll to an element selector or a Y pixel before capture.
const sel = val('sel', '');
const scrollY = parseInt(val('scroll', '0'), 10);
// Force scroll-reveal visible + hide the Astro dev toolbar for clean captures.
await page.evaluate(() => {
  document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-revealed'));
  document.querySelector('astro-dev-toolbar')?.remove();
  document.querySelector('[data-cookie-consent]')?.remove();
});
// Hide the fixed navbar for element captures so it doesn't overlap mid-page sections.
if (sel) await page.evaluate(() => {
  const nav = document.querySelector('[data-navbar]');
  if (nav) nav.style.display = 'none';
});
if (scrollY) await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await new Promise((r) => setTimeout(r, 400));

const file = `scripts/.shots/${out}.png`;
if (sel) {
  const el = await page.$(sel);
  if (!el) throw new Error(`selector not found: ${sel}`);
  await el.screenshot({ path: file });
} else {
  await page.screenshot({ path: file, fullPage: full });
}
console.log('✓', file, `(${sel ? 'el ' + sel : width + 'x' + height}${full ? ' full' : ''}${dark ? ' dark' : ''})`);
await browser.close();
