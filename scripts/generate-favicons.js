#!/usr/bin/env node

import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pngTargets = [
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
];

const icoSizes = [16, 32, 48];

const transparentBackground = { r: 0, g: 0, b: 0, alpha: 0 };

async function generateFavicons() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  await mkdir(publicDir, { recursive: true });

  const logoPath = path.join(publicDir, 'Logo.png');

  // Normalize the logo to a 512x512 transparent PNG to use as the master asset.
  const masterPng = await sharp(logoPath)
    .resize(512, 512, {
      fit: 'contain',
      background: transparentBackground,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  const base64Png = masterPng.toString('base64');
  const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><image href="data:image/png;base64,${base64Png}" width="512" height="512" preserveAspectRatio="xMidYMid meet"/></svg>`;
  await writeFile(path.join(publicDir, 'favicon.svg'), masterSvg);

  await Promise.all(
    pngTargets.map(async ({ name, size }) => {
      const buffer = await sharp(masterPng)
        .resize(size, size, {
          fit: 'contain',
          background: transparentBackground,
        })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();
      await writeFile(path.join(publicDir, name), buffer);
    }),
  );

  const icoBuffers = await Promise.all(
    icoSizes.map((size) =>
      sharp(masterPng)
        .resize(size, size, {
          fit: 'contain',
          background: transparentBackground,
        })
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
