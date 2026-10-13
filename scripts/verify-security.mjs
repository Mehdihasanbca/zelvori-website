import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');

console.log('🔒 [ZELVORI] Starting automated security & static regression verification...\n');

if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

let errors = 0;
let checks = 0;

function assert(condition, message) {
  checks++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. CNAME & Custom Domain
const cnamePath = path.join(outDir, 'CNAME');
assert(fs.existsSync(cnamePath), 'out/CNAME exists');
if (fs.existsSync(cnamePath)) {
  const cnameContent = fs.readFileSync(cnamePath, 'utf8').trim();
  assert(cnameContent === 'zelvori.software', `CNAME contains "zelvori.software" (found "${cnameContent}")`);
}

// 2. SEO & LLM discovery assets
const requiredFiles = ['robots.txt', 'sitemap.xml', 'llms.txt', 'favicon.svg'];
for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(outDir, file)), `out/${file} exists`);
}

// 3. Expected Route Inventory (12 core routes)
const expectedRoutes = [
  '',
  'about',
  'contact',
  'privacy',
  'terms',
  'services/web-development',
  'services/mobile-apps',
  'services/ecommerce',
  'services/business-software',
  'services/ai-automation',
  'services/custom-software',
  'services/application-security',
];

for (const route of expectedRoutes) {
  const routeHtml = path.join(outDir, route, 'index.html');
  assert(fs.existsSync(routeHtml), `Route /${route}/ index.html generated`);
}

// 4. Scan all HTML files for security controls & secrets
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`\n🔍 Scanned ${htmlFiles.length} exported HTML pages for security properties...\n`);

for (const file of htmlFiles) {
  const relativeName = path.relative(outDir, file);
  const content = fs.readFileSync(file, 'utf8');

  // Check Referrer Policy Meta
  assert(
    content.includes('name="referrer" content="strict-origin-when-cross-origin"'),
    `[${relativeName}] Enforces strict-origin-when-cross-origin referrer meta`
  );

  // Check JSON-LD safety (ensure no raw unescaped script tag injection in json-ld)
  const jsonLdMatches = content.match(/<script type="application\/ld\+json">(.*?)<\/script>/gs);
  if (jsonLdMatches) {
    for (const match of jsonLdMatches) {
      const inner = match.replace('<script type="application/ld+json">', '').replace('</script>', '');
      assert(
        !inner.includes('</script>'),
        `[${relativeName}] JSON-LD script block has no unescaped script breakouts`
      );
    }
  }

  // Check External Links for noopener noreferrer
  const linkMatches = content.matchAll(/<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/gi);
  for (const match of linkMatches) {
    const fullTag = match[0];
    const url = match[1];
    if (!url.startsWith('https://zelvori.software') && !url.startsWith('mailto:')) {
      assert(
        fullTag.includes('rel="noopener noreferrer"'),
        `[${relativeName}] External link to ${url} enforces rel="noopener noreferrer"`
      );
    }
  }

  // Check for accidentally leaked secrets or env vars
  assert(
    !content.includes('AIzaSy') && !content.includes('ghp_') && !content.includes('AKIA'),
    `[${relativeName}] No cloud API keys or tokens present in static HTML`
  );
}

// 5. Check Sitemap consistency with canonical URLs
const sitemapContent = fs.readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8');
assert(
  sitemapContent.includes('https://zelvori.software/services/application-security/'),
  'sitemap.xml includes application-security service'
);

console.log(`\n========================================`);
console.log(`Total Checks Executed: ${checks}`);
console.log(`Total Failures: ${errors}`);
console.log(`========================================\n`);

if (errors > 0) {
  console.error(`❌ Verification failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('🎉 All security regression tests & static route verifications passed!');
  process.exit(0);
}
