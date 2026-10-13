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
    '/about/',
    '/contact/',
    '/pricing/',
    '/payments/',
    '/previews/',
    '/previews/web-development/',
    '/previews/mobile-apps/',
    '/previews/ecommerce/',
    '/previews/business-software/',
    '/previews/ai-automation/',
    '/previews/custom-software/',
    '/previews/application-security/',
  ];

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

  // Deep checks on /payments/
  console.log('\n--- Deep Inspection on /payments/ ---');
  const paymentsRes = await fetch(`http://localhost:${PORT}/payments/`);
  const paymentsHtml = await paymentsRes.text();

  function check(label, condition) {
    if (condition) {
      console.log(`✅ [PAYMENT CHECK PASS] ${label}`);
      passed++;
    } else {
      console.error(`❌ [PAYMENT CHECK FAIL] ${label}`);
      failed++;
    }
  }

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
