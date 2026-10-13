import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const width = 1200;
const height = 630;

const svgCard = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#070b14"/>
      <stop offset="50%" stop-color="#0b1220"/>
      <stop offset="100%" stop-color="#050810"/>
    </linearGradient>

    <radialGradient id="cyanGlow" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#070b14" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="indigoGlow" cx="80%" cy="70%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#070b14" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="textGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>

    <linearGradient id="zTop" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#21D4E8"/>
      <stop offset="100%" stop-color="#2478F2"/>
    </linearGradient>
    <linearGradient id="zDiag" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2478F2"/>
      <stop offset="100%" stop-color="#21D4E8"/>
    </linearGradient>
    <linearGradient id="zBottom" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2478F2"/>
      <stop offset="100%" stop-color="#28BFD1"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#cyanGlow)"/>
  <rect width="${width}" height="${height}" fill="url(#indigoGlow)"/>

  <!-- Subtle border -->
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="24" fill="none" stroke="#1e293b" stroke-width="2" stroke-opacity="0.8"/>

  <!-- Logo Container -->
  <g transform="translate(100, 100)">
    <rect x="0" y="0" width="100" height="100" rx="22" fill="#0B1220" stroke="rgba(33, 212, 232, 0.4)" stroke-width="2"/>
    <g transform="translate(12, 16) scale(0.42)">
      <path d="M18 14 H154 Q160 14 156 20 L127 53 H60 Q54 53 59 47 L80 25 H18 Q10 25 13 19 Q14 14 18 14 Z" fill="url(#zTop)" />
      <path d="M148 20 L176 20 Q182 20 179 26 L91 124 Q88 128 82 128 H51 Q44 128 49 122 L137 24 Q141 20 148 20 Z" fill="url(#zDiag)" />
      <path d="M54 89 H121 Q127 89 132 94 L157 117 Q162 123 154 123 H29 Q22 123 27 116 L44 96 Q48 89 54 89 Z" fill="url(#zBottom)" />
    </g>
    <text x="124" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="44" fill="#ffffff" letter-spacing="4">ZELVORI</text>
  </g>

  <!-- Tagline & Headline -->
  <g transform="translate(100, 260)">
    <text x="0" y="40" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="54" fill="#ffffff" letter-spacing="-1">
      Engineering Ideas Into
    </text>
    <text x="0" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="54" fill="url(#textGrad)" letter-spacing="-1">
      Digital Reality.
    </text>
    <text x="0" y="155" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="22" fill="#94a3b8" letter-spacing="0">
      International Digital Product Development Partner
    </text>
  </g>

  <!-- Capability Badges Footer -->
  <g transform="translate(100, 490)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="170" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="85" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">Web &amp; SaaS</text>

    <!-- Pill 2 -->
    <rect x="185" y="0" width="150" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="260" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">Mobile Apps</text>

    <!-- Pill 3 -->
    <rect x="350" y="0" width="160" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="430" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">E-Commerce</text>

    <!-- Pill 4 -->
    <rect x="525" y="0" width="175" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="612" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">Bespoke ERP/CRM</text>

    <!-- Pill 5 -->
    <rect x="715" y="0" width="165" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="797" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">AI Automation</text>

    <!-- Pill 6 -->
    <rect x="895" y="0" width="160" height="42" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <text x="975" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#38bdf8" text-anchor="middle">App Security</text>
  </g>

  <!-- Domain Tag -->
  <g transform="translate(100, 565)">
    <text x="0" y="0" font-family="monospace" font-weight="600" font-size="14" fill="#64748b">https://zelvori.software</text>
  </g>
</svg>
`;

async function generate() {
  const outPath = path.resolve('public/images/brand/zelvori-og.png');
  await sharp(Buffer.from(svgCard))
    .png({ quality: 95 })
    .toFile(outPath);
  console.log(`Generated branded OpenGraph image at: ${outPath} (${width}x${height})`);
}

generate().catch(err => {
  console.error('Failed to generate OG image:', err);
  process.exit(1);
});
