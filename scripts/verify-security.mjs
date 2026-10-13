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

// 3. Expected Route Inventory (24 core routes)
const expectedRoutes = [
  '',
  'about',
  'contact',
  'payments',
  'pricing',
  'stories',
  'resources',
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

// 4c. Project-specific payment workflow validation
const exportedPaymentsHtml = fs.readFileSync(path.join(outDir, 'payments', 'index.html'), 'utf8');
assert(
  exportedPaymentsHtml.includes('Request Project Advance Link'),
  'payments/index.html provides a project-specific advance-link request action'
);
assert(
  exportedPaymentsHtml.includes('No one-size-fits-all advance amount'),
  'payments/index.html explains that project advance amounts vary'
);
assert(
  !exportedPaymentsHtml.includes('pl_TnOD6Jz1AQC5PU') &&
    !exportedPaymentsHtml.includes('pl_TnOizH1tevZEe5') &&
    !exportedPaymentsHtml.includes('payment-button.js'),
  'payments/index.html does not embed either fixed-amount Razorpay button'
);
assert(
  !exportedPaymentsHtml.includes('Razorpay Sandbox / Test Mode (Verified)') &&
    !exportedPaymentsHtml.includes('confirmed in Razorpay Test'),
  'payments/index.html makes no unverified claim about Razorpay environment mode'
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
assert(
  sitemapContent.includes('https://zelvori.software/stories/'),
  'sitemap.xml includes industry stories page'
);
assert(
  sitemapContent.includes('https://zelvori.software/resources/'),
  'sitemap.xml includes developer resource hub'
);


const storiesHtml = fs.readFileSync(path.join(outDir, 'stories', 'index.html'), 'utf8');
assert(
  storiesHtml.includes('illustrative scenarios, not claims about named clients'),
  'stories page labels its scenarios as illustrative, not client testimonials'
);
assert(
  ['Legal practices', 'Doctors &amp; clinics', 'Freelancers &amp; consultants', 'Brands &amp; retailers', 'Creators &amp; personal brands'].every((term) => storiesHtml.includes(term)),
  'stories page represents key professional and business audiences'
);

const resourcesHtml = fs.readFileSync(path.join(outDir, 'resources', 'index.html'), 'utf8');
assert(
  resourcesHtml.includes('Build Prompt Studio'),
  'resource hub includes the free browser-based Build Prompt Studio'
);
assert(
  resourcesHtml.includes('Continue') &&
    resourcesHtml.includes('Motion for React') &&
    resourcesHtml.includes('React Bits') &&
    resourcesHtml.includes('MDN Learn Web Development'),
  'resource hub lists coding, animation and learning resources'
);
assert(
  resourcesHtml.includes('does not call an AI API') && resourcesHtml.includes('licences can change'),
  'resource hub states prompt generator limitations and variable resource licensing'
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
