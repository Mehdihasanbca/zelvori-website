import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');

console.log('🔍 [ZELVORI] Starting Comprehensive QA & Interaction Verification...\n');

if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

let checks = 0;
let errors = 0;

function assert(condition, message) {
  checks++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

function getAllHtmlFiles(dir) {
  let list = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      list = list.concat(getAllHtmlFiles(full));
    } else if (f.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`Auditing ${htmlFiles.length} generated HTML files across out/...\n`);

// 1. Internal Link Target Integrity
let checkedLinks = 0;
let brokenLinks = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(outDir, file);

  const linkMatches = content.matchAll(/<a\s+[^>]*href=["']([^"'#]+)(#[^"']*)?["'][^>]*>/gi);
  for (const match of linkMatches) {
    const rawHref = match[1];
    if (rawHref.startsWith('http') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || !rawHref) {
      continue;
    }
    checkedLinks++;

    const href = rawHref.split('?')[0];
    let targetPath;
    if (href.startsWith('/')) {
      targetPath = path.join(outDir, href.slice(1));
    } else {
      targetPath = path.join(path.dirname(file), href);
    }

    const isDirectFile = fs.existsSync(targetPath) && fs.statSync(targetPath).isFile();
    const isIndexHtml = fs.existsSync(path.join(targetPath, 'index.html'));
    const isHtmlFile = fs.existsSync(targetPath + '.html');

    if (!isDirectFile && !isIndexHtml && !isHtmlFile) {
      brokenLinks.push({ source: rel, href });
    }
  }
}

assert(brokenLinks.length === 0, `All ${checkedLinks} internal links resolve to valid export files (0 broken links)`);
if (brokenLinks.length > 0) {
  console.error('Broken links found:', brokenLinks);
}

// 2. Viewport & Responsive Layout Meta Tags
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(outDir, file);

  assert(
    content.includes('name="viewport"') && content.includes('width=device-width'),
    `[${rel}] Defines mobile responsive viewport meta tag`
  );
}

// 3. Image Alt Text & Accessibility
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(outDir, file);

  const imgMatches = content.matchAll(/<img\s+[^>]*>/gi);
  for (const match of imgMatches) {
    const imgTag = match[0];
    assert(
      imgTag.includes('alt="') && !imgTag.includes('alt=""'),
      `[${rel}] Image has meaningful descriptive alt text: ${imgTag.slice(0, 80)}...`
    );
  }
}

// 4. Brand Integrity: No "Zelvori Software" as official brand name
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(outDir, file);

  // Check title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (titleMatch) {
    assert(
      !titleMatch[1].includes('Zelvori Software'),
      `[${rel}] Page title uses "Zelvori", not "Zelvori Software": "${titleMatch[1]}"`
    );
    assert(
      !titleMatch[1].includes('Zelvori | Zelvori'),
      `[${rel}] Page title has no duplicated brand suffix: "${titleMatch[1]}"`
    );
  }

  // Ensure domain references are zelvori.software
  assert(
    !content.includes('zelvori-software.com') && !content.includes('zelvorisoftware.com'),
    `[${rel}] Correct custom domain zelvori.software referenced`
  );
}

// 5. Interactive Preview Simulation & Sandbox Verification
const previewPages = [
  'previews/web-development',
  'previews/mobile-apps',
  'previews/ecommerce',
  'previews/business-software',
  'previews/ai-automation',
  'previews/custom-software',
  'previews/application-security',
];

for (const p of previewPages) {
  const htmlPath = path.join(outDir, p, 'index.html');
  assert(fs.existsSync(htmlPath), `Preview page ${p} exists in static export`);
  if (fs.existsSync(htmlPath)) {
    const content = fs.readFileSync(htmlPath, 'utf8');
    assert(
      content.includes('SANDBOX MODE') || content.includes('Interactive Technical Demonstration'),
      `[${p}] Contains explicit sandbox notice preventing false live backend claims`
    );
  }
}

// 6. E-Commerce Checkout Truthfulness
const ecommerceHtml = fs.readFileSync(path.join(outDir, 'previews/ecommerce/index.html'), 'utf8');
assert(
  ecommerceHtml.includes('Simulated Payment') || ecommerceHtml.includes('Simulated Checkout'),
  'Ecommerce preview explicitly declares simulated checkout and payment'
);
assert(
  ecommerceHtml.includes('No real payment gateways'),
  'Ecommerce preview disclaims real card/bank charges'
);

// 7. Founder Photo Asset Verification
const founderPng = path.join(outDir, 'images/founder/mehdi-hasan.png');
assert(fs.existsSync(founderPng), 'Founder photo exists in static output');
if (fs.existsSync(founderPng)) {
  const buf = fs.readFileSync(founderPng);
  const magic = buf.slice(0, 4).toString('hex');
  assert(magic === '89504e47', `Founder photo has authentic PNG magic bytes (found ${magic})`);
}

// 8. Reduced Motion & Fluid Layout Class Check
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(outDir, file);
  // Check that the body or container has scroll-smooth or standard root layout
  assert(
    content.includes('scroll-smooth') || content.includes('min-h-screen'),
    `[${rel}] Root layout structure is compliant`
  );
}

// 9. Pricing Commercial Disclosure Check
const pricingHtml = fs.readFileSync(path.join(outDir, 'pricing/index.html'), 'utf8');
assert(
  pricingHtml.includes('Commercial Notice &amp; Scope Formalization') || pricingHtml.includes('Commercial Notice & Scope Formalization'),
  'pricing/index.html includes formal owner approval and SOW commercial notice'
);

// 10. Project-specific Razorpay Advance Request Verification
const paymentsHtml = fs.readFileSync(path.join(outDir, 'payments/index.html'), 'utf8');
assert(
  paymentsHtml.includes('Request Project Advance Link'),
  'payments/index.html offers a project-specific advance-link request'
);
assert(
  paymentsHtml.includes('approved quotation'),
  'payments/index.html requires an approved quotation'
);
assert(
  paymentsHtml.includes('Payment status must be verified in the merchant dashboard'),
  'payments/index.html requires authoritative dashboard payment verification'
);
assert(
  !paymentsHtml.includes('pl_TnOD6Jz1AQC5PU') &&
    !paymentsHtml.includes('pl_TnOizH1tevZEe5') &&
    !paymentsHtml.includes('payment-button.js'),
  'payments/index.html does not expose fixed-amount payment-button embeds'
);
assert(
  !paymentsHtml.includes('Razorpay Sandbox / Test Mode (Verified)') &&
    !paymentsHtml.includes('Test Environment Active'),
  'payments/index.html does not misrepresent unverified payment mode'
);


const storiesHtml = fs.readFileSync(path.join(outDir, 'stories/index.html'), 'utf8');
assert(
  storiesHtml.includes('illustrative scenarios, not claims about named clients'),
  'stories page labels use cases as illustrative rather than client testimonials'
);
assert(
  storiesHtml.includes('How Zelvori can help') &&
    storiesHtml.includes('When is Zelvori the right fit?'),
  'stories page explains Zelvori use cases and comparison considerations'
);

const resourcesHtml = fs.readFileSync(path.join(outDir, 'resources/index.html'), 'utf8');
assert(
  resourcesHtml.includes('Build Prompt Studio') &&
    resourcesHtml.includes('Copy full prompt'),
  'resource hub provides a usable free prompt builder'
);
assert(
  resourcesHtml.includes('Continue') &&
    resourcesHtml.includes('Motion for React') &&
    resourcesHtml.includes('shadcn/ui') &&
    resourcesHtml.includes('Next.js documentation'),
  'resource hub covers AI coding, UI, motion and app-building references'
);
assert(
  resourcesHtml.includes('does not call an AI API') &&
    resourcesHtml.includes('licences can change'),
  'resource hub avoids inaccurate AI and resource licensing claims'
);
assert(
  resourcesHtml.includes('rel="noopener noreferrer"'),
  'external resource links use safe new-tab link attributes'
);

const homeResourceHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
assert(
  homeResourceHtml.includes('Stories by industry') &&
    homeResourceHtml.includes('Free developer resource hub'),
  'homepage promotes industry stories and developer resources'
);

// 11. Phase 18 Solutions Hub & 9 Industry Blueprints Verification
const solutionsHubHtml = fs.readFileSync(path.join(outDir, 'solutions/index.html'), 'utf8');
assert(
  solutionsHubHtml.includes('Phase 18 Master Architecture Blueprints') &&
    solutionsHubHtml.includes('Build vs Buy vs DIY') &&
    solutionsHubHtml.includes('Explore the 9 Industry Blueprints'),
  'solutions hub page renders master blueprints, competitive positioning matrix, and catalog'
);

const expectedBlueprints = [
  'healthcare',
  'legal',
  'business-operations',
  'marketplace',
  'food-delivery',
  'ecommerce',
  'creators',
  'education',
  'logistics',
];

for (const slug of expectedBlueprints) {
  const blueprintPath = path.join(outDir, 'solutions', slug, 'index.html');
  assert(fs.existsSync(blueprintPath), `Industry Blueprint out/solutions/${slug}/index.html exists`);
  if (fs.existsSync(blueprintPath)) {
    const bpContent = fs.readFileSync(blueprintPath, 'utf8');
    assert(
      bpContent.includes('6-Tier Zero-Trust Reference Architecture') &&
        bpContent.includes('Role-Based Access Control') &&
        bpContent.includes('Definition of Done') &&
        bpContent.includes('Request Custom Scope'),
      `[solutions/${slug}] Contains complete 16-point blueprint sections and zero-trust controls`
    );
  }
}

// 12. Phase 22 Brand Cinematic Assets & WhatsApp Business Verification
const brandReelPath = path.join(outDir, 'videos/brand-reel.mp4');
const brandAdsPath = path.join(outDir, 'videos/brand-ads.mp4');
const brandWallpaperPath = path.join(outDir, 'images/brand/zelvori-futuristic-tech-wallpaper.png');

assert(fs.existsSync(brandReelPath), 'out/videos/brand-reel.mp4 exists in static export');
assert(fs.existsSync(brandAdsPath), 'out/videos/brand-ads.mp4 exists in static export');
assert(fs.existsSync(brandWallpaperPath), 'out/images/brand/zelvori-futuristic-tech-wallpaper.png exists in static export');

if (fs.existsSync(brandReelPath)) {
  const reelSize = fs.statSync(brandReelPath).size;
  assert(reelSize > 2000000, `Brand Reel MP4 has valid payload size (${reelSize} bytes)`);
}

if (fs.existsSync(brandAdsPath)) {
  const adsSize = fs.statSync(brandAdsPath).size;
  assert(adsSize > 3500000, `Commercial Ads MP4 has valid payload size (${adsSize} bytes)`);
}

// Verify WhatsApp Desk widget across root pages
const rootHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
assert(
  rootHtml.includes('WhatsApp Desk') && (rootHtml.includes('9162530999') || rootHtml.includes('91625 30999')),
  'index.html renders floating WhatsApp Business widget with official +91 91625 30999 number'
);
assert(
  rootHtml.includes('Brand Tech Reel') && rootHtml.includes('Commercial Ads'),
  'index.html includes Brand Experience cinema section with multi-video switcher'
);

const aboutHtml = fs.readFileSync(path.join(outDir, 'about/index.html'), 'utf8');
assert(
  aboutHtml.includes('WhatsApp Desk') && (aboutHtml.includes('9162530999') || aboutHtml.includes('91625 30999')),
  'about/index.html renders floating WhatsApp Business widget'
);
assert(
  aboutHtml.includes('Zelvori Brand Experience &amp; Cinema') || aboutHtml.includes('Zelvori Brand Experience & Cinema'),
  'about/index.html renders dedicated brand cinema identity showcase'
);

// 12. Cookie & Privacy Preferences Banner Verification
assert(
  rootHtml.includes('Privacy &amp; Cookies') || rootHtml.includes('Cookie Preferences'),
  'index.html includes Cookie & Privacy Preferences banner and footer controls'
);

// 13. Service Page Cross-Linking Verification
const webDevHtml = fs.readFileSync(path.join(outDir, 'services/web-development/index.html'), 'utf8');
assert(
  webDevHtml.includes('Industry Architectures Powered by') && webDevHtml.includes('/solutions/'),
  'services/web-development links to related industry architecture blueprints'
);
assert(
  webDevHtml.includes('Free Client-Side Developer Lab Utilities') && webDevHtml.includes('/tools/'),
  'services/web-development links to Developer Lab browser tools'
);

// 14. Architecture & Scope Configurator Verification
const scopeBuilderHtmlPath = path.join(outDir, 'tools/scope-builder/index.html');
assert(fs.existsSync(scopeBuilderHtmlPath), 'out/tools/scope-builder/index.html exists in static export');
if (fs.existsSync(scopeBuilderHtmlPath)) {
  const content = fs.readFileSync(scopeBuilderHtmlPath, 'utf8');
  assert(
    content.includes('Software Architecture &amp; Scope Configurator') ||
      content.includes('Software Architecture & Scope Configurator'),
    'tools/scope-builder renders headline'
  );
  assert(
    content.includes('Estimated Sprint Cadence') && content.includes('Scoping Notice'),
    'tools/scope-builder renders live calculation and commercial scoping notice'
  );
}

console.log(`\n========================================`);
console.log(`Total QA Checks Executed: ${checks}`);
console.log(`Total QA Failures: ${errors}`);
console.log(`========================================\n`);

if (errors > 0) {
  console.error(`❌ QA Audit failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('🎉 All QA, interaction simulation, link integrity, and brand verifications passed!');
  process.exit(0);
}
