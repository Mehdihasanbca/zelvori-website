import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// ESM Modular Subpath Imports
import {
  getContrastRatio,
  checkWcagCompliance,
  getWcagAccessibilityNotice,
  ZELVORI_COLORS,
} from '../dist/esm/theme/index.js';

import {
  escapeHtml,
  sanitizeUrl,
  safeJsonParse,
} from '../dist/esm/security/index.js';

import {
  generateOpenGraphTags,
  buildOrganizationJsonLd,
} from '../dist/esm/seo/index.js';

import {
  ZELVORI_BRAND,
  BRAND_MANIFEST,
  generateAdvancePaymentMailto,
} from '../dist/esm/config/index.js';

import {
  formatBytes,
  slugify,
  truncateText,
} from '../dist/esm/utils/index.js';

describe('@zelvori/core SDK Verification Suite', () => {
  // 1. Theme & WCAG Contrast
  test('contrast ratio calculation matches W3C sRGB relative luminance benchmarks', () => {
    // Pure black and pure white = 21:1
    const blackWhite = getContrastRatio('#000000', '#ffffff');
    assert.ok(blackWhite !== null);
    assert.strictEqual(Math.round(blackWhite), 21);

    // Identical colors = 1:1
    const same = getContrastRatio('#38bdf8', '#38bdf8');
    assert.ok(same !== null);
    assert.strictEqual(Math.round(same), 1);

    // Zelvori cyan on signature dark bg
    const cyanOnDark = getContrastRatio('#38bdf8', '#070b14');
    assert.ok(cyanOnDark !== null && cyanOnDark >= 9);

    const compliance = checkWcagCompliance('#38bdf8', '#070b14');
    assert.ok(compliance !== null);
    assert.strictEqual(compliance.passNormalAA, true);
    assert.strictEqual(compliance.passNormalAAA, true);
    assert.strictEqual(compliance.passLargeAA, true);
    assert.strictEqual(compliance.passLargeAAA, true);
    assert.strictEqual(compliance.passUiComponents, true);

    const notice = getWcagAccessibilityNotice();
    assert.ok(notice.includes('does not describe a color pair as fully WCAG-compliant on its own'));
  });

  // 2. Security & Sanitization
  test('security primitives prevent XSS and unsafe protocols', () => {
    const malicious = '<script>alert("xss")</script>&foo=bar';
    const escaped = escapeHtml(malicious);
    assert.ok(!escaped.includes('<script>'));
    assert.ok(escaped.includes('&lt;script&gt;'));
    assert.ok(escaped.includes('&amp;foo=bar'));

    // URL Sanitization
    assert.strictEqual(sanitizeUrl('javascript:alert(1)'), '#');
    assert.strictEqual(sanitizeUrl('data:text/html,<script>alert(1)</script>'), '#');
    assert.strictEqual(sanitizeUrl('https://zelvori.software/'), 'https://zelvori.software/');
    assert.strictEqual(sanitizeUrl('/tools/'), '/tools/');
    assert.strictEqual(sanitizeUrl('mailto:hello@zelvori.software'), 'mailto:hello@zelvori.software');
  });

  // 3. Safe JSON Diagnostics
  test('safe JSON parser handles valid and malformed payloads without eval', () => {
    const validJson = '{"status": "ok", "count": 42}';
    const validRes = safeJsonParse(validJson);
    assert.strictEqual(validRes.success, true);
    if (validRes.success) {
      assert.deepStrictEqual(validRes.data, { status: 'ok', count: 42 });
    }

    const invalidJson = '{\n  "name": "broken",\n  "trailing": true,\n}';
    const invalidRes = safeJsonParse(invalidJson);
    assert.strictEqual(invalidRes.success, false);
    if (!invalidRes.success) {
      assert.ok(invalidRes.error.message.length > 0);
      assert.ok(invalidRes.error.line !== undefined);
    }
  });

  // 4. SEO & Schema.org
  test('SEO modules generate compliant OpenGraph and Schema.org tags', () => {
    const ogTags = generateOpenGraphTags({
      title: 'Zelvori Platform',
      description: 'High-performance engineering',
      url: 'https://zelvori.software/',
      imageUrl: 'https://zelvori.software/images/brand/zelvori-og.png',
      siteName: 'Zelvori',
    });
    assert.ok(ogTags.includes('og:title'));
    assert.ok(ogTags.includes('og:image'));
    assert.ok(ogTags.includes('1200'));
    assert.ok(ogTags.includes('630'));

    const orgJsonLd = buildOrganizationJsonLd({
      name: 'Zelvori',
      url: 'https://zelvori.software',
      email: 'hello@zelvori.software',
    });
    assert.ok(orgJsonLd.includes('"@type": "Organization"'));
    assert.ok(orgJsonLd.includes('zelvori.software'));
  });

  // 5. Brand Manifest & Integrity
  test('brand manifest strictly enforces Zelvori brand naming', () => {
    assert.strictEqual(ZELVORI_BRAND.name, 'Zelvori');
    assert.strictEqual(BRAND_MANIFEST.name, 'Zelvori');
    assert.notStrictEqual(ZELVORI_BRAND.name, 'Zelvori Software');
    assert.strictEqual(ZELVORI_BRAND.domain, 'zelvori.software');
    assert.strictEqual(ZELVORI_BRAND.contact.primaryEmail, 'hello@zelvori.software');

    const mailto = generateAdvancePaymentMailto({
      clientName: 'Jane Doe',
      projectName: 'Fintech Portal',
      quotationRef: 'Q-2026-089',
      agreedAdvanceAmount: 50000,
    });
    assert.ok(mailto.startsWith('mailto:hello@zelvori.software'));
    assert.ok(mailto.includes('Q-2026-089'));
  });

  // 6. Utility Functions
  test('formatters handle bytes, currency, and slugification correctly', () => {
    assert.strictEqual(formatBytes(0), '0 Bytes');
    assert.strictEqual(formatBytes(1024), '1 KB');
    assert.strictEqual(formatBytes(1048576), '1 MB');

    assert.strictEqual(slugify('Hello World & Friends!'), 'hello-world-friends');
    assert.strictEqual(truncateText('Zelvori Digital Architecture', 10), 'Zelvori...');
  });

  // 7. CommonJS Dual Packaging & Interoperability
  test('CommonJS target loads synchronously via require without ESM errors', () => {
    const cjsCore = require('../dist/cjs/index.js');
    assert.ok(cjsCore !== null && typeof cjsCore === 'object');
    assert.strictEqual(cjsCore.BRAND_MANIFEST.name, 'Zelvori');
    assert.strictEqual(cjsCore.escapeHtml('<div>test</div>'), '&lt;div&gt;test&lt;/div&gt;');
    assert.strictEqual(typeof cjsCore.getContrastRatio, 'function');

    const legacyCjs = require('../dist/index.cjs');
    assert.strictEqual(legacyCjs.BRAND_MANIFEST.name, 'Zelvori');
  });
});
