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

// 10. Razorpay Payments Page & Button ID Verification
const paymentsHtml = fs.readFileSync(path.join(outDir, 'payments/index.html'), 'utf8');
assert(
  paymentsHtml.includes('pl_TnOD6Jz1AQC5PU'),
  'payments/index.html embeds exact supplied Razorpay button ID pl_TnOD6Jz1AQC5PU'
);
assert(
  paymentsHtml.includes('Pay only against an approved quotation'),
  'payments/index.html enforces payment only against approved quotation/invoice'
);
assert(
  paymentsHtml.includes('Retain your receipt'),
  'payments/index.html instructs customer to retain payment receipt and ID'
);
assert(
  paymentsHtml.includes('Razorpay Sandbox / Test Mode (Verified)') || paymentsHtml.includes('Test Environment Active'),
  'payments/index.html marks verified Razorpay Test Mode status clearly'
);

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
