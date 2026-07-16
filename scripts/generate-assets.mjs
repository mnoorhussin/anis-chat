/**
 * Generates all brand raster assets from the source mark:
 *   favicon-16/32/48.png, favicon.ico, apple-touch-icon.png,
 *   icon-192/512 (maskable), and a 1200x630 OG image.
 *
 * Run: node scripts/generate-assets.mjs
 */
import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'node:fs';

const IRIS = '#5A5AF0';
const AQUA = '#37E0C8';
const INK = '#0A0A0F';

/** The mark, drawn in a 40x40 box. `id` keeps gradient ids unique per use. */
function mark(id) {
  return `
    <defs>
      <linearGradient id="${id}" x1="4" y1="6" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stop-color="${IRIS}"/><stop offset="1" stop-color="${AQUA}"/>
      </linearGradient>
    </defs>
    <rect x="3" y="6" width="27" height="24" rx="9.5" fill="url(#${id})"/>
    <path d="M11 26 L8 34 L20 29 Z" fill="url(#${id})"/>
    <circle cx="35" cy="7" r="3.9" fill="${IRIS}"/>`;
}

const faviconSvg = Buffer.from(
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">${mark('g')}</svg>`,
);

/** A padded icon tile on an ink background (for apple-touch & PWA). */
function tileSvg(size, padRatio) {
  const inner = size * (1 - padRatio * 2);
  const scale = inner / 40;
  const off = size * padRatio;
  const r = Math.round(size * 0.22);
  return Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
       <rect width="${size}" height="${size}" rx="${r}" fill="${INK}"/>
       <g transform="translate(${off} ${off}) scale(${scale})">${mark('t')}</g>
     </svg>`,
  );
}

async function png(svgBuf, size, file) {
  await sharp(svgBuf, { density: 500 })
    .resize(size, size, { fit: 'contain', background: '#00000000' })
    .png()
    .toFile(`public/${file}`);
}

// --- favicons (transparent) ---
await png(faviconSvg, 16, 'favicon-16x16.png');
await png(faviconSvg, 32, 'favicon-32x32.png');
await png(faviconSvg, 48, 'favicon-48x48.png');

// --- favicon.ico (16/32/48) ---
const ico = await pngToIco([
  'public/favicon-16x16.png',
  'public/favicon-32x32.png',
  'public/favicon-48x48.png',
]);
writeFileSync('public/favicon.ico', ico);

// --- apple-touch + PWA tiles ---
await sharp(tileSvg(180, 0.18), { density: 400 }).png().toFile('public/apple-touch-icon.png');
await sharp(tileSvg(192, 0.2), { density: 400 }).png().toFile('public/icon-192.png');
await sharp(tileSvg(512, 0.2), { density: 400 }).png().toFile('public/icon-512.png');

// --- OG image (1200x630) ---
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="${IRIS}"/><stop offset="1" stop-color="${AQUA}"/>
    </linearGradient>
    <radialGradient id="glowIris" cx="16%" cy="8%" r="55%">
      <stop stop-color="${IRIS}" stop-opacity="0.42"/><stop offset="100%" stop-color="${IRIS}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowAqua" cx="92%" cy="100%" r="55%">
      <stop stop-color="${AQUA}" stop-opacity="0.34"/><stop offset="100%" stop-color="${AQUA}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <rect width="1200" height="630" fill="url(#glowIris)"/>
  <rect width="1200" height="630" fill="url(#glowAqua)"/>

  <!-- brand lockup -->
  <g transform="translate(80 70)">
    <g transform="scale(1.5)">${mark('ogm')}</g>
    <text x="82" y="42" font-family="Satoshi, 'Segoe UI', Arial, sans-serif" font-size="38" font-weight="700" fill="#FBFBFD" letter-spacing="-1">anis.chat</text>
  </g>

  <!-- headline -->
  <text x="80" y="330" font-family="Satoshi, 'Segoe UI', Arial, sans-serif" font-size="86" font-weight="700" fill="#FBFBFD" letter-spacing="-3">Never leave a</text>
  <text x="80" y="428" font-family="Satoshi, 'Segoe UI', Arial, sans-serif" font-size="86" font-weight="700" letter-spacing="-3"><tspan fill="url(#brand)">customer waiting</tspan><tspan fill="#FBFBFD">.</tspan></text>

  <!-- subhead -->
  <text x="82" y="500" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="30" font-weight="400" fill="#A6A6B5">The AI companion that answers your customers 24/7 — in every language.</text>

  <!-- footer tag -->
  <text x="80" y="580" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="22" font-weight="500" fill="#71717F">Native Arabic &amp; English · Live in minutes</text>

  <!-- decorative oversized bubble, right -->
  <g transform="translate(880 150) scale(9)" opacity="0.9">${mark('ogbig')}</g>
</svg>`;

let fontFiles = [];
try {
  fontFiles = ['public/fonts/satoshi-variable.woff2', 'public/fonts/inter-latin-wght-normal.woff2'];
} catch {}

const resvg = new Resvg(og, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    loadSystemFonts: true,
    fontFiles,
    defaultFontFamily: 'Segoe UI',
  },
});
writeFileSync('public/og-image.png', resvg.render().asPng());

console.log('✓ brand assets generated');
