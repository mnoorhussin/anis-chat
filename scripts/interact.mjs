// End-to-end interaction test for the vanilla-JS features.
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find(existsSync);
const b = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1320, height: 900 });
await p.goto('http://localhost:4321/en/', { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 500));

const results = {};

// Cookie consent: reject first (so the fixed banner doesn't overlap later clicks)
results.cookieVisibleBefore = await p.evaluate(() => !document.querySelector('[data-cookie-consent]').hidden);
await p.click('[data-cc-reject]');
results.cookieHiddenAfter = await p.evaluate(() => document.querySelector('[data-cookie-consent]').hidden);
results.consentStored = await p.evaluate(() => localStorage.getItem('anis-consent'));

// Theme toggle
results.themeBefore = await p.evaluate(() => document.documentElement.getAttribute('data-theme'));
await p.click('[data-theme-toggle]');
results.themeAfter = await p.evaluate(() => document.documentElement.getAttribute('data-theme'));

// Pricing toggle: read Pro price monthly → annual
results.priceMonthly = await p.$eval('[data-pricing]', (el) =>
  el.querySelector('[data-price-monthly]').textContent.trim(),
);
await p.click('[data-bill="annual"]');
results.billingAfter = await p.$eval('[data-pricing]', (el) => el.getAttribute('data-billing'));
results.annualVisible = await p.evaluate(() => {
  const a = document.querySelector('[data-price-annual]');
  return getComputedStyle(a).display !== 'none';
});
results.annualPriceText = await p.$eval('[data-pricing]', (el) =>
  el.querySelector('[data-price-annual]').textContent.trim(),
);
results.monthlyHidden = await p.evaluate(
  () => getComputedStyle(document.querySelector('[data-price-monthly]')).display === 'none',
);

// FAQ: open the second item
const faqDetails = await p.$$('#faq details');
results.faqCount = faqDetails.length;
await p.click('#faq details:nth-of-type(2) summary');
results.faq2Open = await p.$eval('#faq details:nth-of-type(2)', (d) => d.open);

// Lead form validation: submit empty-invalid email
await p.type('#final-cta-email', 'not-an-email');
await p.click('form[data-source="final-cta"] [type="submit"]');
await new Promise((r) => setTimeout(r, 200));
results.leadValidationShown = await p.evaluate(() => {
  const s = document.querySelector('form[data-source="final-cta"] [data-lead-status]');
  return !s.classList.contains('hidden') && s.textContent.length > 0;
});

// Mobile menu
await p.setViewport({ width: 390, height: 844 });
await new Promise((r) => setTimeout(r, 200));
await p.click('[data-menu-btn]');
results.mobileMenuOpen = await p.evaluate(() => !document.querySelector('[data-mobile-menu]').hidden);

console.log(JSON.stringify(results, null, 2));
await b.close();
