#!/usr/bin/env node

import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="18%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111C3A"/>
      <stop offset="100%" stop-color="#05070E"/>
    </linearGradient>
    <linearGradient id="mmGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9E7B7"/>
      <stop offset="100%" stop-color="#E4B93C"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="rgba(78,168,255,0.55)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <linearGradient id="accent" x1="30%" y1="10%" x2="70%" y2="90%">
      <stop offset="0%" stop-color="#9EE8FF"/>
      <stop offset="100%" stop-color="#4EA8FF"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <rect x="40" y="40" width="432" height="432" rx="100" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none"/>
  <circle cx="256" cy="200" r="160" fill="url(#glow)" opacity="0.45"/>
  <path d="M128 368V148h76l52 92 52-92h76v220h-52V232l-76 128-76-128v136z" fill="url(#mmGold)"/>
  <path d="M184 368L256 256 328 368 256 320Z" fill="url(#accent)" opacity="0.9"/>
</svg>`;

const pngTargets = [
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
];

const icoSizes = [16, 32, 48];

async function generateFavicons() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  await mkdir(publicDir, { recursive: true });

  const svgBuffer = Buffer.from(baseSvg, 'utf-8');

  await writeFile(path.join(publicDir, 'favicon.svg'), svgBuffer);

  await Promise.all(
    pngTargets.map(async ({ name, size }) => {
      const buffer = await sharp(svgBuffer)
        .resize(size, size)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();
      await writeFile(path.join(publicDir, name), buffer);
    }),
  );

  const icoBuffers = await Promise.all(
    icoSizes.map((size) =>
      sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer(),
    ),
  );

  const ico = await toIco(icoBuffers);
  await writeFile(path.join(publicDir, 'favicon.ico'), ico);

  return {
    pngTargets: pngTargets.map(({ name, size }) => `${name} (${size}x${size})`),
    icoSizes,
  };
}

try {
  const result = await generateFavicons();
  console.log('Favicons generated:', result);
} catch (error) {
  console.error('Failed to generate favicons');
  console.error(error);
  process.exitCode = 1;
}
