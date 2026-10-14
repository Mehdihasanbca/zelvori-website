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

function decodeHtmlEntities(value) {
  const namedEntities = {
    amp: '&',
    quot: '"',
    apos: "'",
    lt: '<',
    gt: '>',
    nbsp: ' ',
  };

  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, token) => {
    if (token.startsWith('#')) {
      const codePoint = token[1].toLowerCase() === 'x'
        ? Number.parseInt(token.slice(2), 16)
        : Number.parseInt(token.slice(1), 10);
      if (Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff) {
        return String.fromCodePoint(codePoint);
      }
      return entity;
    }
    return namedEntities[token.toLowerCase()] ?? entity;
  });
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

  // Check meta description count and recommended snippet length (25-160 characters)
  const metas = [...content.matchAll(/<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/gi)].map((match) => match[0]);
  if (metas.length !== 1) {
    issues.push(rel + ': Expected 1 meta description, found ' + metas.length);
  } else {
    const descriptionContent = metas[0].match(/\bcontent=["']([^"']*)["']/i)?.[1];
    if (descriptionContent === undefined) {
      issues.push(rel + ': Meta description has no content attribute');
    } else {
      const description = decodeHtmlEntities(descriptionContent).trim();
      const descriptionLength = Array.from(description).length;
      if (descriptionLength < 25 || descriptionLength > 160) {
        issues.push(rel + ': Meta description has ' + descriptionLength + ' characters; expected 25-160');
      }
    }
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
  console.log('✅ SEO METADATA VERIFIED! Exactly 1 title, 1 canonical, and 1 meta description (25-160 characters) per page; no duplicate title suffixes or sitemap URLs.');
  process.exit(0);
}
