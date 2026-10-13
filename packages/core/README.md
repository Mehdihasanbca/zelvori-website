# @zelvori/core

> **Official Core Framework & Architecture SDK for Zelvori Digital Products**

`@zelvori/core` is the foundational TypeScript framework SDK powering Zelvori web applications, enterprise client portals, security utilities, and developer tools. It provides zero-dependency mathematical and security primitives, design tokens, SEO metadata generators, quotation workflow engines, and accessible UI components.

---

## ⚡ Key Highlights

- **Zero Runtime Dependencies**: Ultra-lightweight core (under 27 kB packaged) with zero external runtime packages.
- **Dual Package Distribution**: Pure native ESM (`dist/esm`) and synchronous CommonJS (`dist/cjs`) with 100% TypeScript type definitions (`dist/types`).
- **W3C WCAG 2.1 Contrast Engine**: Exact relative luminance calculations and AA/AAA compliance thresholds.
- **Defensive Security Primitives**: XSS entity escaping, protocol-safe URL sanitization, RFC 8259 diagnostic JSON parsing with zero `eval`.
- **Automated SEO & Schema.org**: Ready-to-inject JSON-LD graph objects, Next.js metadata objects, and OpenGraph 2.0 tags.
- **Strict Brand Integrity**: Enforces Zelvori brand constants, official engineering taxonomy, and quotation-based advance payment link generators.

---

## 📦 Installation

```bash
# Using npm
npm install @zelvori/core

# Using pnpm
pnpm add @zelvori/core

# Using yarn
yarn add @zelvori/core
```

*Note: React (`>=18.0.0`) is an optional peer dependency only required if you import from `@zelvori/core/ui`.*

---

## 🧩 Modular Subpath Exports

`@zelvori/core` is organized into clean, tree-shakeable submodules:

| Subpath | Description | Peer Dependencies |
| :--- | :--- | :--- |
| `@zelvori/core` | Complete barrel export of all modules | Optional `react` |
| `@zelvori/core/theme` | Design tokens, WCAG contrast calculations, CSS generators | None |
| `@zelvori/core/security` | XSS escaping, URL sanitization, RFC 8259 parser, CSP headers | None |
| `@zelvori/core/seo` | OpenGraph, Twitter Cards, Schema.org Organization & Service | None |
| `@zelvori/core/config` | Zelvori brand constants, 7 practices taxonomy, quotation models | None |
| `@zelvori/core/utils` | Clipboard writer, byte formatting, currency, slugification | None |
| `@zelvori/core/ui` | Accessible React UI primitives (BrandLogo, Button, Card, Badge) | `react >= 18` |

---

## 🚀 Usage Guide

### 1. Theme & WCAG Contrast Calculation (`@zelvori/core/theme`)

Calculate color contrast ratios according to W3C sRGB relative luminance algorithms:

```typescript
import {
  getContrastRatio,
  checkWcagCompliance,
  getZelvoriCssVariables,
  ZELVORI_COLORS,
} from '@zelvori/core/theme';

// Calculate exact contrast ratio
const ratio = getContrastRatio('#38bdf8', '#070b14');
console.log(ratio); // 9.19

// Verify full WCAG AA & AAA compliance
const compliance = checkWcagCompliance('#38bdf8', '#070b14');
console.log(compliance.passNormalAA);  // true (>= 4.5:1)
console.log(compliance.passNormalAAA); // true (>= 7.0:1)

// Generate Zelvori CSS custom properties root string
const cssVars = getZelvoriCssVariables();
```

---

### 2. Defensive Security Primitives (`@zelvori/core/security`)

Prevent XSS attacks, sanitize untrusted URLs, and parse JSON with exact line/column error diagnostics without risking code execution:

```typescript
import {
  escapeHtml,
  sanitizeUrl,
  safeJsonParse,
  buildCspHeader,
} from '@zelvori/core/security';

// 1. Escape user-provided input
const safeHtml = escapeHtml('<script>alert("xss")</script>');
// Output: &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;

// 2. Protocol-safe URL sanitization (disallows javascript:, data:, etc.)
const safeHref = sanitizeUrl('javascript:alert(1)');
// Output: '#'

// 3. RFC 8259 JSON diagnostic parsing (zero eval)
const result = safeJsonParse('{\n  "invalid": true,\n}');
if (!result.success) {
  console.error(`Syntax error at line ${result.error.line}, column ${result.error.column}`);
}

// 4. Content-Security-Policy (CSP) string builder
const csp = buildCspHeader({
  enableGoogleFonts: true,
  enableRazorpay: true,
});
```

---

### 3. SEO & Schema.org JSON-LD (`@zelvori/core/seo`)

Generate search-engine-ready metadata and Schema.org structured data:

```typescript
import {
  buildOrganizationJsonLd,
  buildServiceJsonLd,
  createOpenGraphMetadata,
} from '@zelvori/core/seo';

// Schema.org Organization Graph
const orgSchema = buildOrganizationJsonLd({
  name: 'Zelvori',
  url: 'https://zelvori.software',
  email: 'hello@zelvori.software',
});

// Next.js App Router metadata object generator
export const metadata = {
  openGraph: createOpenGraphMetadata({
    title: 'Cloud Architecture & Web Engineering | Zelvori',
    description: 'Bespoke software architecture, security, and digital engineering.',
    url: 'https://zelvori.software/services/web-development/',
  }),
};
```

---

### 4. Brand Constants & Advance Payment Workflow (`@zelvori/core/config`)

Enforce Zelvori brand naming standards and generate quotation-based advance payment links:

```typescript
import {
  ZELVORI_BRAND,
  ZELVORI_PRACTICES,
  generateAdvancePaymentMailto,
  generateAdvancePaymentWhatsApp,
} from '@zelvori/core/config';

console.log(ZELVORI_BRAND.name); // 'Zelvori'
console.log(ZELVORI_BRAND.domain); // 'zelvori.software'

// Generate verified advance payment link request mailto
const mailtoUrl = generateAdvancePaymentMailto({
  clientName: 'Acme Corp',
  projectName: 'Custom ERP Portal',
  quotationRef: 'Q-2026-042',
  agreedAdvanceAmount: 75000,
});
```

---

### 5. String & Number Formatters (`@zelvori/core/utils`)

```typescript
import {
  formatBytes,
  formatCurrency,
  slugify,
  truncateText,
} from '@zelvori/core/utils';

formatBytes(1048576);            // "1 MB"
formatCurrency(50000, 'INR');     // "₹50,000"
slugify('Cloud Security & Auth'); // "cloud-security-auth"
truncateText('Zelvori Digital Architecture', 15); // "Zelvori Digital..."
```

---

### 6. React UI Primitives (`@zelvori/core/ui`)

```tsx
import React from 'react';
import { BrandLogo, Button, Card, Badge } from '@zelvori/core/ui';

export function Header() {
  return (
    <Card variant="cyber">
      <BrandLogo size="md" />
      <Badge variant="cyan">Phase 16 Active</Badge>
      <Button variant="primary" onClick={() => console.log('Initiated')}>
        Explore Platform
      </Button>
    </Card>
  );
}
```

---

## 🛡️ Brand Compliance Directive

Consumers of `@zelvori/core` must adhere to official Zelvori Brand Guidelines:
1. **Brand Name**: Strictly **Zelvori** (never "Zelvori Software", "Zelvori Inc", or "Zelvori Ltd").
2. **Domain**: `https://zelvori.software/`.
3. **Primary Colors**: Cyber Cyan (`#38bdf8`), Deep Slate Background (`#070b14`), Surface Slate (`#0f172a`).

---

## 🧪 Testing

Run the native test suite:

```bash
node --test tests/sdk.test.mjs
```

---

## 📄 License

MIT © 2026 [Zelvori](https://zelvori.software/)
