// Dev-only visual check: rasterize the logo SVG onto light + dark swatches
// so we can eyeball the mark without the (broken) browser screenshot tool.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');
const out = process.env.OUT || 'scripts/.preview';

const mark = await sharp(svg, { density: 500 }).resize(128, 128, { fit: 'contain', background: '#00000000' }).png().toBuffer();

const card = (bg) =>
  sharp({ create: { width: 190, height: 190, channels: 4, background: bg } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toBuffer();

const light = await card('#FBFBFD');
const dark = await card('#0A0A0F');
const grad = await card('#5A5AF0');

await sharp({ create: { width: 590, height: 190, channels: 4, background: '#7d7d8a' } })
  .composite([
    { input: light, left: 5, top: 0 },
    { input: dark, left: 200, top: 0 },
    { input: grad, left: 395, top: 0 },
  ])
  .png()
  .toFile(`${out}.png`);

console.log('rendered', `${out}.png`);
