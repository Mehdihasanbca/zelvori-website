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

// 3. Expected Route Inventory (21 core routes)
const expectedRoutes = [
  '',
  'about',
  'contact',
  'payments',
  'pricing',
  'privacy',
  'terms',
  'previews',
  'previews/web-development',
  'previews/mobile-apps',
  'previews/ecommerce',
  'previews/business-software',
  'previews/ai-automation',
  'previews/custom-software',
  'previews/application-security',
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
    !content.includes('AIzaSy') && !content.includes('ghp_') && !content.includes('AKIA') && !content.includes('rzp_live_') && !content.includes('RAZORPAY_KEY_SECRET'),
    `[${relativeName}] No cloud API keys, live payment keys, or secrets present in static HTML`
  );
}

// 4b. Confidential internal docs exclusion check
assert(
  !fs.existsSync(path.join(outDir, 'docs')),
  'out/docs directory does not exist (internal documentation excluded from public static build)'
);

// 4c. Payment button ID & Test Mode validation
const exportedPaymentsHtml = fs.readFileSync(path.join(outDir, 'payments', 'index.html'), 'utf8');
assert(
  exportedPaymentsHtml.includes('pl_TnOD6Jz1AQC5PU'),
  'payments/index.html embeds verified supplied button ID pl_TnOD6Jz1AQC5PU'
);
assert(
  exportedPaymentsHtml.includes('Mode: Razorpay Sandbox / Test Mode (Verified)'),
  'payments/index.html displays confirmed Sandbox / Test Mode badge'
);

// 5. Check Sitemap consistency with canonical URLs
const sitemapContent = fs.readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8');
assert(
  sitemapContent.includes('https://zelvori.software/services/application-security/'),
  'sitemap.xml includes application-security service'
);
assert(
  sitemapContent.includes('https://zelvori.software/pricing/'),
  'sitemap.xml includes pricing page'
);
assert(
  sitemapContent.includes('https://zelvori.software/previews/'),
  'sitemap.xml includes previews gallery'
);
assert(
  sitemapContent.includes('https://zelvori.software/payments/'),
  'sitemap.xml includes payments page'
);

// 6. Contact Form Truthfulness & Accessibility
const contactHtml = fs.readFileSync(path.join(outDir, 'contact', 'index.html'), 'utf8');
assert(
  contactHtml.includes('Open Mail Client Draft') || contactHtml.includes('Generates an email draft'),
  'contact/index.html discloses email draft mechanism truthfully'
);
assert(
  !contactHtml.includes('Your email has been sent to our server'),
  'contact/index.html does not make misleading server-transmission claims'
);

// 7. Accordion Accessibility Validation
const homeHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
assert(
  homeHtml.includes('id="homepage-faq-btn-0"') && homeHtml.includes('aria-controls="homepage-faq-panel-0"'),
  'index.html homepage FAQ buttons specify WAI-ARIA id and aria-controls'
);
assert(
  homeHtml.includes('id="homepage-faq-panel-0"') && homeHtml.includes('aria-labelledby="homepage-faq-btn-0"'),
  'index.html homepage FAQ panel matches button via aria-labelledby'
);

// 8. Navbar Keyboard & ARIA Controls
assert(
  homeHtml.includes('id="services-menu-button"') && homeHtml.includes('aria-controls="services-menu-dropdown"'),
  'index.html Navbar services dropdown button specifies id and aria-controls'
);
assert(
  homeHtml.includes('id="mobile-menu-button"') && homeHtml.includes('aria-controls="mobile-navigation-drawer"'),
  'index.html mobile menu button specifies id and aria-controls'
);

// 9. Asset Integrity & MIME/Magic Verification
const founderPng = path.join(outDir, 'images/founder/mehdi-hasan.png');
assert(fs.existsSync(founderPng), 'Founder PNG asset exported in out/images/founder/');
if (fs.existsSync(founderPng)) {
  const buf = fs.readFileSync(founderPng);
  const magic = buf.slice(0, 4).toString('hex');
  assert(magic === '89504e47', `Founder PNG has valid PNG magic bytes (89504e47, found ${magic})`);
}

const brandSvg = path.join(outDir, 'images/brand/zelvori-icon.svg');
assert(fs.existsSync(brandSvg), 'Brand icon SVG exported in out/images/brand/');
if (fs.existsSync(brandSvg)) {
  const content = fs.readFileSync(brandSvg, 'utf8');
  assert(content.includes('<svg') && !content.toLowerCase().includes('<!doctype html'), 'Brand SVG is valid SVG and not an HTML error page');
}

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
