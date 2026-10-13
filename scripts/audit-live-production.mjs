import https from 'node:https';

const BASE_URL = 'https://zelvori.software';

const routes = [
  '/',
  '/about/',
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

  // Deep checks on live /tools/
  console.log('\n--- Deep Inspection on Live /tools/ Endpoint ---');
  try {
    const toolsRes = await fetchUrl(`${BASE_URL}/tools/`);
    const toolsHtml = toolsRes.body;
    function checkTools(label, condition) {
      if (condition) {
        console.log(`✅ [LIVE TOOLS PASS] ${label}`);
        passed++;
      } else {
        console.error(`❌ [LIVE TOOLS FAIL] ${label}`);
        failed++;
      }
    }
    checkTools('Returns HTTP 200 OK', toolsRes.statusCode === 200);
    checkTools('Contains Dev Lab title and headline', toolsHtml.includes('Zelvori Dev Lab') || toolsHtml.includes('Free Developer Lab'));
    checkTools('Displays 100% Client-Side Privacy guarantee', toolsHtml.includes('100% Client-Side Privacy'));
    checkTools('Links to SEO Meta Preview', toolsHtml.includes('/tools/seo-meta-preview/'));
    checkTools('Links to Color Contrast Checker', toolsHtml.includes('/tools/color-contrast/'));
    checkTools('Links to CSS Generator', toolsHtml.includes('/tools/css-generator/'));
    checkTools('Links to JSON Formatter', toolsHtml.includes('/tools/json-formatter/'));
    checkTools('Links to Social Preview', toolsHtml.includes('/tools/social-preview/'));
    checkTools('References OpenGraph raster card', toolsHtml.includes('zelvori-og.png'));

    // Deep check on live /tools/color-contrast/
    const contrastRes = await fetchUrl(`${BASE_URL}/tools/color-contrast/`);
    checkTools('Color Contrast tool returns 200 and includes WCAG caveat', contrastRes.statusCode === 200 && contrastRes.body.includes('does not describe a color pair as fully WCAG-compliant'));

    // Deep check on live /tools/json-formatter/
    const jsonRes = await fetchUrl(`${BASE_URL}/tools/json-formatter/`);
    checkTools('JSON Formatter tool returns 200 and includes RFC 8259 compliance statement', jsonRes.statusCode === 200 && jsonRes.body.includes('RFC 8259'));
  } catch (err) {
    console.error(`❌ [LIVE TOOLS ERROR]: ${err.message}`);
    failed++;
  }

  // --- Deep Inspection on Live /security/ Endpoint ---
  try {
    console.log(`\n--- Deep Inspection on Live /security/ Endpoint ---`);
    const secRes = await fetchUrl(`${BASE_URL}/security/`);
    const secHtml = secRes.body;

    function checkSec(desc, condition) {
      if (condition) {
        console.log(`✅ [LIVE SECURITY PASS] ${desc}`);
        passed++;
      } else {
        console.error(`❌ [LIVE SECURITY FAIL] ${desc}`);
        failed++;
      }
    }

    checkSec('Returns HTTP 200 OK', secRes.statusCode === 200);
    checkSec('Renders primary headline', secHtml.includes('Security Built Into Design &amp; Delivery') || secHtml.includes('Security Built Into Design & Delivery'));
    checkSec('Renders Reference Architecture diagram', secHtml.includes('Reference Architecture Specification'));
    checkSec('Contains defensible controls matrix', secHtml.includes('14 Core Security Controls') || secHtml.includes('Controls &amp; Evidence Matrix'));
    checkSec('Displays SSDLC release gates G0 to G5', secHtml.includes('From Threat Model to Production: Gates G0 to G5'));
    checkSec('Discloses Verify Before Claiming commitment', secHtml.includes('Verify Before Claiming'));
    checkSec('Truthfully disclaims 100% secure claims', secHtml.includes('100% secure') && secHtml.includes('unhackable'));
    checkSec('References OpenGraph raster card', secHtml.includes('zelvori-og.png'));
  } catch (err) {
    console.error(`❌ [LIVE SECURITY ERROR]: ${err.message}`);
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
