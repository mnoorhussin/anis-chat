/**
 * Generates all brand raster assets from the source mark:
 *   favicon-16/32/48.png, favicon.ico, apple-touch-icon.png,
 *   icon-192/512 (maskable), and a 1200x630 OG image.
 *
 * Brand: “Dar” — warm paper, warm ink, saffron i‘jām dots.
 * The mark is the three-dot cluster of ث/ش: Arabic-native, a typing
 * indicator, and the pause before a considered answer.
 *
 * Run: node scripts/generate-assets.mjs
 */
import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'node:fs';

const INK = '#231A10';
const PAPER = '#FAF4E8';
const SAFFRON = '#E3A84E';
const OASIS = '#0F6B5C';
const MUTED = '#6B5D4A';

/** The dots alone (transparent bg), drawn in a 40x40 box. */
function dots(fill = SAFFRON) {
  return `
    <circle cx="20" cy="12.5" r="5.4" fill="${fill}"/>
    <circle cx="11.6" cy="27" r="5.4" fill="${fill}"/>
    <circle cx="28.4" cy="27" r="5.4" fill="${fill}"/>`;
}

/** Ink tile + saffron dots, drawn in a 40x40 box (matches favicon.svg). */
function mark() {
  return `
    <rect x="1" y="1" width="38" height="38" rx="10.5" fill="${INK}"/>
    <circle cx="20" cy="13.5" r="4.6" fill="${SAFFRON}"/>
    <circle cx="12.8" cy="26" r="4.6" fill="${SAFFRON}"/>
    <circle cx="27.2" cy="26" r="4.6" fill="${SAFFRON}"/>`;
}

const faviconSvg = Buffer.from(
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">${mark()}</svg>`,
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
       <g transform="translate(${off} ${off}) scale(${scale})">${dots()}</g>
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

// --- OG image (1200x630) — paper, ink, Arabic leads ---
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${PAPER}"/>

  <!-- double manuscript rule, top -->
  <rect x="80" y="56" width="1040" height="1.5" fill="${INK}" opacity="0.35"/>
  <rect x="80" y="61" width="1040" height="1" fill="${INK}" opacity="0.15"/>

  <!-- brand lockup, top-right (RTL page) -->
  <g transform="translate(1040 92)">
    <g transform="scale(1.6)">${mark()}</g>
  </g>
  <text x="1016" y="138" text-anchor="end" font-family="Amiri" font-size="52" font-weight="700" fill="${INK}">أنيس</text>

  <!-- headline, right-aligned -->
  <text x="1120" y="330" text-anchor="end" font-family="Amiri" font-size="80" font-weight="700" fill="${INK}">أنيس لعملائك، في كل وقت</text>

  <!-- subhead -->
  <text x="1120" y="420" text-anchor="end" font-family="IBM Plex Sans Arabic" font-size="34" fill="${MUTED}">يجيب من محتوى شركتك، ويحوّل لفريقك عند الحاجة — بلغة عميلك أيًّا كانت</text>

  <!-- footer tag -->
  <text x="1120" y="560" text-anchor="end" font-family="IBM Plex Sans Arabic" font-size="24" font-weight="500" fill="${OASIS}">anis.chat · دعم عملاء ذكي، عربيّ أولًا</text>

  <!-- oversized dots, bottom-left, cropped -->
  <g transform="translate(-40 430) scale(6)" opacity="0.16">${dots(INK)}</g>

  <!-- double rule, bottom -->
  <rect x="80" y="592" width="1040" height="1" fill="${INK}" opacity="0.15"/>
</svg>`;

const resvg = new Resvg(og, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    loadSystemFonts: true,
    // resvg needs TTF; these are converted from the shipped woff2 by
    // `python3 -m fontTools` (see scripts/.fonts, gitignored).
    fontFiles: [
      'scripts/.fonts/amiri-arabic-700-normal.ttf',
      'scripts/.fonts/ibm-plex-sans-arabic-arabic-400-normal.ttf',
      'scripts/.fonts/ibm-plex-sans-arabic-arabic-500-normal.ttf',
    ],
    defaultFontFamily: 'Amiri',
  },
});
writeFileSync('public/og-image.png', resvg.render().asPng());

console.log('✓ brand assets regenerated (favicons, ico, tiles, og-image)');
