import https from 'node:https';

const BASE_URL = 'https://zelvori.software';

const routes = [
  '/',
  '/about/',
  '/contact/',
  '/pricing/',
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
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Zelvori-Live-Auditor/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function audit() {
  console.log(`🌐 [ZELVORI PRODUCTION LIVE AUDIT] Inspecting ${BASE_URL} over HTTPS...\n`);
  
  let passed = 0;
  let failed = 0;

  for (const route of routes) {
    const fullUrl = `${BASE_URL}${route}`;
    try {
      const res = await fetchUrl(fullUrl);
      const { statusCode, headers, body } = res;
      
      const is200 = statusCode === 200;
      const hasBrand = body.includes('Zelvori');
      const hasCanonical = body.includes(`rel="canonical"`) && body.includes(fullUrl);
      const noBadBrand = !body.includes('<title>Zelvori Software') && !body.includes('title="Zelvori Software');
      const hasStrictReferrer = body.includes('strict-origin-when-cross-origin');

      if (is200 && hasBrand && hasCanonical) {
        console.log(`✅ [HTTP ${statusCode}] ${route.padEnd(35)} (Length: ${body.length}b, CDN Server: ${headers.server || 'github/fastly'})`);
        passed++;
      } else {
        console.error(`❌ [FAIL] ${route} -> Status: ${statusCode}, HasBrand: ${hasBrand}, HasCanonical: ${hasCanonical}`);
        failed++;
      }
    } catch (err) {
      console.error(`❌ [ERROR] ${route}: ${err.message}`);
      failed++;
    }
  }

  // Deep checks on live /payments/
  console.log('\n--- Deep Inspection on Live /payments/ Endpoint ---');
  try {
    const payRes = await fetchUrl(`${BASE_URL}/payments/`);
    const html = payRes.body;

    function check(label, condition) {
      if (condition) {
        console.log(`✅ [LIVE PAYMENT PASS] ${label}`);
        passed++;
      } else {
        console.error(`❌ [LIVE PAYMENT FAIL] ${label}`);
        failed++;
      }
    }

    check('Returns HTTP 200 OK', payRes.statusCode === 200);
    check('Presents Request Project Advance Link CTA', html.includes('Request Project Advance Link'));
    check('Prefilled mailto link with customer & quotation fields', html.includes('mailto:hello@zelvori.software') && html.includes('Quotation%20or%20SOW%20reference'));
    check('Includes quotation approval milestone requirement', html.includes('approved quotation'));
    check('Requires merchant dashboard payment verification', html.includes('Payment status must be verified in the merchant dashboard'));
    check('Warns browser redirect is not proof of settlement', html.includes('A browser redirect or screenshot alone is not proof of settlement'));
    check('Zero fixed button IDs embedded', !html.includes('pl_TnOD6Jz1AQC5PU') && !html.includes('pl_TnOizH1tevZEe5'));
    check('No razorpay payment-button.js script tag', !html.includes('payment-button.js'));
    check('Zero unverified sandbox mode claims on public page', !html.includes('Razorpay Sandbox / Test Mode (Verified)'));
    check('Zero API secrets present in HTML', !html.includes('rzp_live_') && !html.includes('RAZORPAY_KEY_SECRET') && !html.includes('AIzaSy'));

  } catch (err) {
    console.error(`❌ [LIVE PAYMENT ERROR]: ${err.message}`);
    failed++;
  }

  // Deep checks on live /stories/
  console.log('\n--- Deep Inspection on Live /stories/ Endpoint ---');
  try {
    const storiesRes = await fetchUrl(`${BASE_URL}/stories/`);
    const storiesHtml = storiesRes.body;
    function checkStories(label, condition) {
      if (condition) {
        console.log(`✅ [LIVE STORIES PASS] ${label}`);
        passed++;
      } else {
        console.error(`❌ [LIVE STORIES FAIL] ${label}`);
        failed++;
      }
    }
    checkStories('Returns HTTP 200 OK', storiesRes.statusCode === 200);
    checkStories('Contains illustrative scenario disclaimer', storiesHtml.includes('illustrative scenarios, not claims about named clients'));
    checkStories('Contains fair comparison section', storiesHtml.includes('When is Zelvori the right fit?'));
    checkStories('References OpenGraph raster card', storiesHtml.includes('zelvori-og.png'));
  } catch (err) {
    console.error(`❌ [LIVE STORIES ERROR]: ${err.message}`);
    failed++;
  }

  // Deep checks on live /resources/
  console.log('\n--- Deep Inspection on Live /resources/ Endpoint ---');
  try {
    const resourcesRes = await fetchUrl(`${BASE_URL}/resources/`);
    const resourcesHtml = resourcesRes.body;
    function checkResources(label, condition) {
      if (condition) {
        console.log(`✅ [LIVE RESOURCES PASS] ${label}`);
        passed++;
      } else {
        console.error(`❌ [LIVE RESOURCES FAIL] ${label}`);
        failed++;
      }
    }
    checkResources('Returns HTTP 200 OK', resourcesRes.statusCode === 200);
    checkResources('Contains Build Prompt Studio', resourcesHtml.includes('Build Prompt Studio'));
    checkResources('Contains Copy full prompt action', resourcesHtml.includes('Copy full prompt'));
    checkResources('Discloses no external AI API called', resourcesHtml.includes('does not call an AI API'));
    checkResources('References OpenGraph raster card', resourcesHtml.includes('zelvori-og.png'));
  } catch (err) {
    console.error(`❌ [LIVE RESOURCES ERROR]: ${err.message}`);
    failed++;
  }

  console.log(`\n========================================`);
  console.log(`Live Production Audit Results:`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('🎉 Live production deployment verified 100% healthy!');
    process.exit(0);
  }
}

audit();
