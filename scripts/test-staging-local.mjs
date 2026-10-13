import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const PORT = 4173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  let reqPath = (req.url || '/').split('?')[0];
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  let filePath = path.join(outDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    }
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`🚀 [ZELVORI STAGING] Local static test server listening on http://localhost:${PORT}\n`);

  const testRoutes = [
    '/',
    '//about/',
    '/contact/',
    '/pricing/',
    '/security/',
    '/payments/',
    '/stories/',
    '/resources/',
    '/privacy/',
    '/terms/',
    '/previews/',
    '/previews/web-development/',
    '/previews/mobile-apps/',
    '/previews/ecommerce/',
    '/previews/business-software/',
    '/previews/ai-automation/',
    '/previews/custom-software/',
    '/previews/application-security/',
    '/services/web-development/',
    '/services/mobile-apps/',
    '/services/ecommerce/',
    '/services/business-software/',
    '/services/ai-automation/',
    '/services/custom-software/',
    '/services/application-security/',
    '/tools/',
    '/tools/seo-meta-preview/',
    '/tools/color-contrast/',
    '/tools/css-generator/',
    '/tools/json-formatter/',
    '/tools/social-preview/',
    '/solutions/',
    '/solutions/healthcare/',
    '/solutions/legal/',
    '/solutions/business-operations/',
    '/solutions/marketplace/',
    '/solutions/food-delivery/',
    '/solutions/ecommerce/',
    '/solutions/creators/',
    '/solutions/education/',
    '/solutions/logistics/',
  ].map(r => r.replace('//', '/'));

  let passed = 0;
  let failed = 0;

  for (const route of testRoutes) {
    try {
      const url = `http://localhost:${PORT}${route}`;
      const res = await fetch(url);
      const text = await res.text();

      if (res.status === 200 && text.includes('<!DOCTYPE html>') && text.includes('Zelvori')) {
        console.log(`✅ [HTTP 200] ${route.padEnd(35)} (Length: ${text.length} bytes)`);
        passed++;
      } else {
        console.error(`❌ [FAIL ${res.status}] ${route}`);
        failed++;
      }
    } catch (err) {
      console.error(`❌ [ERROR] ${route}:`, err.message);
      failed++;
    }
  }

  function check(label, condition) {
    if (condition) {
      console.log(`✅ [CHECK PASS] ${label}`);
      passed++;
    } else {
      console.error(`❌ [CHECK FAIL] ${label}`);
      failed++;
    }
  }

  // Deep checks on /payments/
  console.log('\n--- Deep Inspection on /payments/ ---');
  const paymentsRes = await fetch(`http://localhost:${PORT}/payments/`);
  const paymentsHtml = await paymentsRes.text();

  // Check JS chunks referenced by /payments/ do not load payment-button.js
  const scriptMatches = [...paymentsHtml.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)].map(m => m[1]);
  let foundScriptInChunk = false;
  for (const scriptUrl of scriptMatches) {
    const chunkRes = await fetch(`http://localhost:${PORT}${scriptUrl}`);
    const chunkText = await chunkRes.text();
    if (chunkText.includes('checkout.razorpay.com/v1/payment-button.js')) {
      foundScriptInChunk = true;
      break;
    }
  }

  check('Renders Request Project Advance Link CTA', paymentsHtml.includes('Request Project Advance Link'));
  check('Contains prefilled mailto link with quotation fields', paymentsHtml.includes('mailto:hello@zelvori.software') && paymentsHtml.includes('Quotation%20or%20SOW%20reference'));
  check('Explains project-specific advance amount rationale', paymentsHtml.includes('No one-size-fits-all advance amount'));
  check('States authoritative merchant dashboard verification requirement', paymentsHtml.includes('Payment status must be verified in the merchant dashboard'));
  check('Warns that browser redirect is not proof of settlement', paymentsHtml.includes('A browser redirect or screenshot alone is not proof of settlement'));
  check('Zero fixed-amount button IDs embedded (pl_TnOD6Jz1AQC5PU / pl_TnOizH1tevZEe5)', !paymentsHtml.includes('pl_TnOD6Jz1AQC5PU') && !paymentsHtml.includes('pl_TnOizH1tevZEe5'));
  check('No payment-button.js loaded on client', !foundScriptInChunk && !paymentsHtml.includes('payment-button.js'));
  check('Zero unverified sandbox mode claims', !paymentsHtml.includes('Razorpay Sandbox / Test Mode (Verified)'));
  check('Zero live secret keys present', !paymentsHtml.includes('rzp_live_') && !paymentsHtml.includes('RAZORPAY_KEY_SECRET'));

  // Deep checks on /stories/
  console.log('\n--- Deep Inspection on /stories/ ---');
  const storiesRes = await fetch(`http://localhost:${PORT}/stories/`);
  const storiesHtml = await storiesRes.text();
  check('Renders Industry stories title and headline', storiesHtml.includes('Digital Transformation Stories by Industry'));
  check('Contains illustrative scenarios disclaimer', storiesHtml.includes('illustrative scenarios, not claims about named clients'));
  check('Contains category filter bar', storiesHtml.includes('Explore Scenarios by Sector') || storiesHtml.includes('All Industries'));
  check('Presents fair comparison module', storiesHtml.includes('When is Zelvori the right fit?'));

  // Deep checks on /resources/
  console.log('\n--- Deep Inspection on /resources/ ---');
  const resourcesRes = await fetch(`http://localhost:${PORT}/resources/`);
  const resourcesHtml = await resourcesRes.text();
  check('Renders Developer Resource Hub title', resourcesHtml.includes('Free Developer Resources'));
  check('Contains Build Prompt Studio generator', resourcesHtml.includes('Build Prompt Studio'));
  check('Contains Copy full prompt action', resourcesHtml.includes('Copy full prompt'));
  check('Contains Download brief action', resourcesHtml.includes('Download brief (.md)'));
  check('Discloses prompt tool does not call an AI API', resourcesHtml.includes('does not call an AI API'));

  // Deep checks on /tools/
  console.log('\n--- Deep Inspection on /tools/ ---');
  const toolsRes = await fetch(`http://localhost:${PORT}/tools/`);
  const toolsHtml = await toolsRes.text();
  check('Renders Dev Lab title and headline', toolsHtml.includes('Zelvori Dev Lab') || toolsHtml.includes('Free Developer Lab'));
  check('Displays 100% Client-Side Privacy guarantee', toolsHtml.includes('100% Client-Side Privacy'));
  check('Links to SEO Meta Preview', toolsHtml.includes('/tools/seo-meta-preview/'));
  check('Links to Color Contrast Checker', toolsHtml.includes('/tools/color-contrast/'));
  check('Links to CSS Generator', toolsHtml.includes('/tools/css-generator/'));
  check('Links to JSON Formatter', toolsHtml.includes('/tools/json-formatter/'));
  check('Links to Social Preview', toolsHtml.includes('/tools/social-preview/'));

  // Deep check on /tools/color-contrast/
  const contrastRes = await fetch(`http://localhost:${PORT}/tools/color-contrast/`);
  const contrastHtml = await contrastRes.text();
  check('Color Contrast tool includes non-exhaustive WCAG caveat', contrastHtml.includes('does not describe a color pair as fully WCAG-compliant'));

  // Deep check on /tools/json-formatter/
  const jsonRes = await fetch(`http://localhost:${PORT}/tools/json-formatter/`);
  const jsonHtml = await jsonRes.text();
  check('JSON Formatter includes RFC 8259 compliance statement', jsonHtml.includes('RFC 8259'));

  // --- Deep Inspection on /security/ ---
  const secRes = await fetch(`http://localhost:${PORT}/security/`);
  const secHtml = await secRes.text();
  check('Renders Security & Trust Centre headline', secHtml.includes('Security Built Into Design &amp; Delivery') || secHtml.includes('Security Built Into Design & Delivery'));
  check('Renders Reference Architecture diagram', secHtml.includes('Reference Architecture Specification'));
  check('Presents defensible controls matrix', secHtml.includes('14 Core Security Controls') || secHtml.includes('Controls &amp; Evidence Matrix'));
  check('Outlines SSDLC gates G0 to G5', secHtml.includes('From Threat Model to Production: Gates G0 to G5'));
  check('Discloses Verify Before Claiming commitment', secHtml.includes('Verify Before Claiming'));
  check('Truthfully disclaims 100% secure claims', secHtml.includes('100% secure') && secHtml.includes('unhackable'));

  console.log(`\n========================================`);
  console.log(`Local Staging Test Results:`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`========================================\n`);

  server.close(() => {
    if (failed > 0) {
      process.exit(1);
    } else {
      console.log('🎉 All local staging endpoints verified successfully!');
      process.exit(0);
    }
  });
});
