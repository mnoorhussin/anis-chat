// Console-error + basic health check for a page. Usage: node scripts/check.mjs /en/
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find(existsSync);
const path = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : '/en/';
const base = 'http://localhost:4321';

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('console: ' + m.text());
});
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('requestfailed', (r) => errors.push('reqfail: ' + r.url() + ' ' + (r.failure()?.errorText || '')));

await page.goto(base + path, { waitUntil: 'load', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 800));

const stats = await page.evaluate(() => ({
  sections: [...document.querySelectorAll('section[id]')].map((s) => s.id),
  starFill: (() => {
    const s = document.querySelector('figure svg[fill="currentColor"]');
    return s ? getComputedStyle(s).fill : 'no-star';
  })(),
  h1: document.querySelector('h1')?.textContent?.trim().slice(0, 40),
  emptyLinks: [...document.querySelectorAll('a[href="#"]')].length,
}));

console.log(JSON.stringify({ path, errors, stats }, null, 2));
await browser.close();
