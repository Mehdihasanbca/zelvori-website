# Zelvori — Razorpay Payment Gateway Readiness Audit & Architectural Blueprint

**Document Version:** 1.0 (Q4 2026)  
**Author:** Principal Application Security Architect & Technical Lead  
**Scope:** `D:\zelvori-digital-architect\zelvori-website`  
**Status:** Audit Complete · Implementation Blueprint (Uncommitted Local Reference)

---

## 1. Executive Summary & Current State Determination

### Question: Is Razorpay genuinely integrated or only simulated?
**Definitive Finding:** **Razorpay is currently 100% simulated.**  
There is **no active live or sandbox Razorpay SDK integration**, no API key configured, no server-side order generation, no signature verification routine, and no webhook receiver anywhere in the codebase.

### Evidence from Repository Inspection:
1. **Package Dependencies:** Neither `razorpay`, `@razorpay/checkout-js`, nor any payment processing client library is listed in `package.json`.
2. **Environment & Secrets:** No `.env`, `.env.local`, or configuration file contains `RAZORPAY_KEY_ID` or `RAZORPAY_KEY_SECRET`. No secrets exist in the build pipeline.
3. **E-Commerce Preview Component (`components/previews/EcommercePreview.tsx`):**
   - The checkout button calls `handleSimulatedCheckout()`, which merely triggers local React component state (`setCheckoutSuccess(true)` followed by a 2.5-second `setTimeout`).
   - Payment method is displayed as *"Synthetic Token (Test Mode)"*.
   - A persistent banner clearly states: *"Simulated Checkout & Storefront Sandbox: Real-time cart calculations with simulated payment. No real payment gateways or bank accounts are connected."*
4. **Pricing Page (`app/pricing/page.tsx`):**
   - Package CTA buttons do not initiate checkout; they link to `/contact?service=[slug]` to request a written project proposal and formal Statement of Work (SOW).
   - Razorpay is cited solely as a market example in the pass-through costs disclosure table (*"Razorpay / Cashfree / Stripe: standard 2% transaction fee"*).
5. **Contact Page (`components/contact/ContactForm.tsx`):**
   - Submitting the form generates a local `mailto:` client draft and copyable clipboard payload. It contains no payment integration.

---

## 2. Fundamental Architectural Reality: Static Hosting vs Server Secrets

### The Critical Static Export Constraint
The Zelvori website is built with Next.js 15 configured with `output: 'export'`, resulting in a 100% static site hosted on **GitHub Pages**.
- **No Node.js Runtime in Production:** Static HTML, JavaScript, and CSS are served directly from GitHub Pages' content delivery network. Standard Next.js API Routes (`app/api/.../route.ts`) **do not execute** on GitHub Pages.
- **GitHub Actions Secrets Misconception:** GitHub Actions Secrets (e.g. `RAZORPAY_KEY_SECRET`) are available **only inside the transient GitHub Actions runner virtual machine** during `npm run build`. They do not exist at runtime on GitHub Pages.
- **Critical Security Warning:** If a developer embeds `RAZORPAY_KEY_SECRET` into client-side Next.js code using `NEXT_PUBLIC_` prefixes, the secret is permanently compiled into public JavaScript bundles, allowing anyone with browser DevTools to drain or compromise the merchant account. **Under no circumstances may `RAZORPAY_KEY_SECRET` be bundled into the static export.**

---

## 3. Required Backend Architecture for Secure Programmatic Checkout

For a production-grade, tamper-proof Razorpay integration, the following 5-phase architecture is strictly required:

```
[Client Browser]                       [Secure Serverless Backend]                   [Razorpay API]
       |                                           |                                       |
       | 1. POST /api/payments/create-order        |                                       |
       |    { packageId: "core-website" }          |                                       |
       |------------------------------------------>|                                       |
       |                                           | 2. Look up server-side price catalog  |
       |                                           |    (Never trust client prices)        |
       |                                           | 3. Call orders.create (paise, INR)    |
       |                                           |-------------------------------------->|
       |                                           | 4. Return order_id + status: "created"|
       |                                           |<--------------------------------------|
       | 5. Return { order_id, key_id, amount }    |                                       |
       |<------------------------------------------|                                       |
       |                                           |                                       |
       | 6. Launch Checkout Modal (rzp.open())     |                                       |
       |    User enters UPI / Card / NetBanking    |                                       |
       |    Returns { payment_id, order_id, sig }  |                                       |
       |                                           |                                       |
       | 7. POST /api/payments/verify              |                                       |
       |    { payment_id, order_id, signature }    |                                       |
       |------------------------------------------>|                                       |
       |                                           | 8. Verify HMAC-SHA256 signature       |
       |                                           |    order_id + "|" + payment_id        |
       | 9. Payment Confirmation Screen            |                                       |
       |<------------------------------------------|                                       |
       |                                           |                                       |
       |                                           | 10. Webhook: payment.captured         |
       |                                           |     X-Razorpay-Signature validation   |
       |                                           |<--------------------------------------|
       |                                           | 11. Idempotent fulfillment & DB log   |
```

### 1. Server-Side Order Generation
- The frontend requests an order by sending a canonical identifier (e.g., `package_slug: "landing-page"`).
- The backend looks up the price in its own database/catalog (e.g., ₹14,900 = `1490000` paise). **Never accept payment amounts calculated or submitted by the client browser.**
- Backend uses `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to call `POST https://api.razorpay.com/v1/orders`.
- The order is logged in the database with status `CREATED`.

### 2. Client-Side Modal Execution
- Client loads Razorpay's checkout script (`https://checkout.razorpay.com/v1/checkout.js`).
- Client passes `key_id` (public), `order_id` (generated by server), `amount`, and prefill details.

### 3. Server-Side Cryptographic Signature Verification
Upon payment completion in the modal, Razorpay returns:
- `razorpay_payment_id`
- `razorpay_order_id`
- `razorpay_signature`

The backend computes:
$$\text{Expected Signature} = \text{HMAC-SHA256}(\text{order\_id} \parallel "|" \parallel \text{payment\_id}, \text{RAZORPAY\_KEY\_SECRET})$$

If the computed hash does not exactly match `razorpay_signature` using a timing-safe equality check (`crypto.timingSafeEqual`), the transaction is flagged as tampered and rejected.

### 4. Authoritative Webhook Validation & Network Failures
Relying solely on frontend redirection is an anti-pattern (users can close the browser tab before the verification payload finishes transmitting).
- Razorpay directly dispatches asynchronous HTTPS webhooks (`payment.captured`, `payment.failed`, `refund.processed`).
- The backend verifies `X-Razorpay-Signature` against the raw unparsed request body using `RAZORPAY_WEBHOOK_SECRET`.
- Only upon valid webhook signature verification is an order marked as permanently `PAID`.

### 5. Idempotency & Duplicate-Event Handling
Because webhooks operate under "at least once delivery", Razorpay may re-deliver the same webhook event multiple times during network retries.
- The webhook receiver checks an `idempotency_keys` table for `event.id`.
- If `event.id` has already been processed, the backend immediately responds with `200 OK` without duplicating database writes or re-sending confirmation emails.

### 6. Relational Database Schema (PostgreSQL / Supabase / Neon)
```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(32) UNIQUE NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    service_slug VARCHAR(64) NOT NULL,
    amount_paise BIGINT NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    razorpay_order_id VARCHAR(64) UNIQUE,
    status VARCHAR(32) NOT NULL DEFAULT 'CREATED', -- CREATED, PAID, FAILED, CANCELLED
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE RESTRICT,
    razorpay_payment_id VARCHAR(64) UNIQUE NOT NULL,
    payment_method VARCHAR(32), -- upi, card, netbanking
    amount_captured_paise BIGINT NOT NULL,
    status VARCHAR(32) NOT NULL,
    error_code VARCHAR(64),
    captured_at TIMESTAMPTZ
);

CREATE TABLE webhook_events (
    event_id VARCHAR(64) PRIMARY KEY,
    event_type VARCHAR(64) NOT NULL,
    processed_at TIMESTAMPTZ DEFAULT NOW(),
    payload JSONB NOT NULL
);
```

---

## 4. Evaluation of the Two Implementation Paths

### Path A: Hosted Razorpay Payment Links / Invoices (Recommended for Agency Model)
**Architecture:** Zero code changes to the static website. The founder logs into the Razorpay Dashboard (`dashboard.razorpay.com`), generates a Payment Link with the agreed SOW milestone amount, and sends the link (`https://rzp.io/l/...`) directly to the client via email/WhatsApp.

| Dimension | Path A Evaluation |
| :--- | :--- |
| **Backend Required** | **None.** Operates 100% seamlessly with existing GitHub Pages static hosting. |
| **Secret Key Risk** | **Zero.** Secret keys remain inside Razorpay's infrastructure; no secrets in code or CI. |
| **Maintenance Cost** | **₹0 / month.** No cloud servers, edge functions, or database subscriptions to maintain. |
| **Client Experience** | Professional hosted checkout supporting UPI (GPay, PhonePe, Paytm), NetBanking, Debit/Credit Cards, and EMI with automated Razorpay invoices and GST receipts. |
| **Alignment with Zelvori** | **Ideal.** Bespoke software projects require custom scopes, milestone approvals, and signed SOWs before payment. Instant automated card checkouts are inappropriate for high-value services. |

---

### Path B: Programmatic Serverless Checkout (For Instant Self-Serve Purchases)
**Architecture:** Deploy a separate, dedicated serverless API (e.g. Cloudflare Worker or Supabase Edge Function) providing 3 endpoints:
- `POST /api/create-order`
- `POST /api/verify-payment`
- `POST /api/webhooks/razorpay`

| Dimension | Path B Evaluation |
| :--- | :--- |
| **Backend Required** | Requires separate serverless host (Cloudflare Workers, Vercel Serverless, or AWS Lambda). |
| **Database Required** | Requires managed PostgreSQL instance (Supabase or Neon) with CORS configuration. |
| **Secret Key Risk** | Managed via secure environment secrets on the serverless host; never exposed to frontend. |
| **Maintenance Cost** | Low, but requires monitoring serverless logs, uptime, and database connection limits. |
| **Client Experience** | Instant modal overlay without leaving the domain. Best suited for high-volume, fixed-price self-serve products (e.g. digital downloads, fixed discovery sprint deposits). |

---

## 5. Immediate Safety Guardrails & Recommendations

1. **Keep Demo Labels Intact:**
   The current sandbox preview in [`components/previews/EcommercePreview.tsx`](file:///D:/zelvori-digital-architect/zelvori-website/components/previews/EcommercePreview.tsx) is properly and prominently labeled as a simulation (*"TEST MODE"*, *"Simulated Checkout & Storefront Sandbox"*). These labels must remain until a live integration is authorized and tested.
2. **Current Commercial Workflow:**
   Clients wishing to engage Zelvori for development packages should continue to be routed through `/contact?service=[slug]`. Once the scope is finalized and the Statement of Work is signed, **Path A (Razorpay Payment Links)** can be deployed immediately with zero architectural risk or code changes.
3. **Future Activation Protocol:**
   If automated milestone deposits are desired in the future, implement **Path B** using an isolated serverless API repository rather than coupling sensitive backend secrets into the public static GitHub repository.
