import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');

function getAllHtml(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(getAllHtml(full));
    else if (f.endsWith('.html')) res.push(full);
  }
  return res;
}

const htmlFiles = getAllHtml(outDir);
let issues = [];

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(outDir, f);

  // Check title count and duplicate suffix
  const titles = content.match(/<title>([^<]*)<\/title>/gi) || [];
  if (titles.length !== 1) {
    issues.push(`${rel}: Expected 1 <title>, found ${titles.length}`);
  }
  if (titles.length > 0) {
    const t = titles[0];
    if (t.includes('Zelvori | Zelvori')) {
      issues.push(`${rel}: Duplicate title suffix found: ${t}`);
    }
  }

  // Check canonical count
  const canons = content.match(/<link rel=["']canonical["'][^>]*>/gi) || [];
  if (canons.length !== 1) {
    issues.push(`${rel}: Expected 1 canonical link, found ${canons.length}`);
  }

  // Check meta description count
  const metas = content.match(/<meta name=["']description["'][^>]*>/gi) || [];
  if (metas.length !== 1) {
    issues.push(`${rel}: Expected 1 meta description, found ${metas.length}`);
  }
}

// Check sitemap duplicates
const sitemap = fs.readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const uniqueLocs = new Set(locs);
if (locs.length !== uniqueLocs.size) {
  issues.push(`Duplicate URLs found in sitemap: ${locs.length} total vs ${uniqueLocs.size} unique`);
}

console.log(`Audited ${htmlFiles.length} pages and ${locs.length} sitemap URLs.`);
if (issues.length > 0) {
  console.error(`❌ Issues found:\n${issues.join('\n')}`);
  process.exit(1);
} else {
  console.log('✅ ZERO DUPLICATES VERIFIED! Exactly 1 title, 1 canonical, 1 meta description per page, 0 duplicate suffixes, 0 duplicate sitemap entries.');
  process.exit(0);
}
