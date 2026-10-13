# Zelvori Internal Security Controls Matrix
> Version 1.0.0 — Internal Posture, Evidence Audit & Verification Matrix  
> Maintained by Zelvori Engineering (`hello@zelvori.software`)

This document serves as an actionable internal inventory of security controls implemented across the Zelvori digital estate. It distinguishes controls applied directly to the **Static Corporate Website (`zelvori.software`)** from controls engineered into **Client Application Projects**.

---

## Control Implementation Matrix

| Control Name | Threat Addressed | Scope | Status | Evidence / Verification Method | Known Limitations & Next Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Deterministic Dependency Locking** | Malicious dependency tampering, drift, supply-chain supply poisoning | Both | **Implemented** | `package-lock.json` committed; CI workflow strictly runs `npm ci --prefer-offline`. | Transitive vulnerabilities can still emerge; run periodic audits via `npm audit` and Dependabot. |
| **Unused Supply-Chain Pruning** | Unnecessary attack surface from bloated tooling dependencies | Both | **Implemented** | Removed `firebase-tools` (554 packages, 12 vulnerabilities eliminated). | Review devDependencies quarterly to prevent build-tool bloat. |
| **Zero Hardcoded Secrets** | Credential leakage in source code repositories | Both | **Implemented** | Automated regex & git grep scan across all tracked files; zero API keys or credentials committed. | Maintain `.gitignore` vigilance; install pre-commit GitGuardian hook. |
| **Safe Client-Side Referrer Policy** | Sensitive URL parameter and path leakage to external referrers | Both | **Implemented** | `<meta name="referrer" content="strict-origin-when-cross-origin" />` in root HTML layout. | Client-side hint; on custom servers, reinforce with HTTP response header. |
| **JSON-LD Script Breakout Defense** | XSS via premature `</script>` tag breakout in serialized JSON-LD | Both | **Implemented** | Serialization uses `JSON.stringify(...).replace(/</g, '\\u003c')` in `app/layout.tsx` and `ServicePageTemplate.tsx`. | Applies to current JSON-LD outputs; enforce across any future dynamic schema generators. |
| **Client Form Payload Boundary** | Browser memory exhaustion, payload bloat in client `mailto:` workflows | Static Website | **Implemented** | `maxLength` enforced on all contact inputs (name: 100, email/company: 120, message: 4000). | `mailto:` URLs are truncated by some desktop email clients if length exceeds 2000 chars; "Copy Summary" button provided as fallback. |
| **Secure Link Attributes** | Reverse tabnabbing (`window.opener` access) and referrer leakage | Both | **Implemented** | All external links specify `rel="noopener noreferrer"`. Verified in code review. | Maintain audit on any newly authored external anchor tags. |
| **Least-Privilege CI/CD Permissions** | Privilege escalation via compromised GitHub Actions runner | Both | **Implemented** | `.github/workflows/deploy.yml` sets explicit minimal permissions (`contents: read`, `pages: write`, `id-token: write`). | Audit any future third-party Action dependencies for SHA pinning. |
| **Static Export Attack Surface Reduction** | Server-side runtime injection (SQLi, SSRF, RCE, prototype pollution) | Static Website | **Implemented** | `output: 'export'` generates 100% static HTML/CSS/JS without backend server processes. | Site cannot process backend secrets; dynamic contact forms must rely on client email dispatch or external headless endpoints. |
| **Database Row-Level Security (RLS)** | Multi-tenant data leakage, cross-customer data exposure | Client Apps | **Implemented** (Client standard) | PostgreSQL RLS policy `USING (tenant_id = current_setting(...))`; automated integration tests. | Not applicable to static site (no database). Standard for client SaaS projects. |
| **Schema-Enforced Input Validation** | SQL Injection, NoSQL Injection, Type Coercion exploits | Client Apps | **Implemented** (Client standard) | Zod / Pydantic schemas validating all inbound API payloads and stripping unparsed attributes. | Not applicable to static site. Standard for client API projects. |
| **Dynamic HTTP Security Headers (HSTS, CSP)** | Clickjacking, MIME confusion, downgrade attacks | Both | **Partially Implemented** | Client-side `<meta>` referrer tag implemented. GitHub Pages does not support custom server HTTP headers. | To enforce full server-side HSTS and strict CSP, configure Cloudflare proxy or custom CDN reverse proxy in front of GitHub Pages if required in future. |
| **Subresource Integrity (SRI)** | Compromised third-party CDN scripts | Both | **Not Applicable** | Site bundles 100% of dependencies locally; zero external CDN `<script>` tags loaded. | If third-party CDN scripts (analytics, chat widgets) are added in future, SRI hashes must be enforced. |
| **Automated Secret Scanning in CI** | Accidental credential pushes in pull requests | Both | **Planned** | Currently verified via manual CLI scan; plan to add Secret Scanning action in GitHub workflow. | Add GitHub Secret Scanning or TruffleHog GitHub Action step to deployment pipeline. |
| **24/7 Security Operations Center (SOC)** | Real-time intrusion detection and active network monitoring | Both | **Not Applicable** | Zelvori is a digital product engineering agency, not a managed security service provider (MSSP). | Partner with dedicated MSSP / SOC providers when client compliance mandates continuous SOC monitoring. |
| **ISO 27001 / SOC 2 Formal Certification** | Formal enterprise compliance accreditation | Both | **Planned** (Long-term) | Technical controls aligned to NIST SSDF and OWASP benchmarks; formal third-party audit planned for enterprise roadmap. | Engage accredited external auditor when business scale mandates formal SOC 2 Type II report. |

---

## Action Items & Roadmap

1. **Short-Term (Completed in Phase 5)**:
   - [x] Eliminate `firebase-tools` supply-chain bloat (554 packages pruned).
   - [x] Enforce `npm ci --prefer-offline` in deployment workflow.
   - [x] Escape inline JSON-LD script blocks to prevent `<` script breakout.
   - [x] Restrict contact form input lengths.
   - [x] Add client-side `strict-origin-when-cross-origin` referrer policy.
   - [x] Refine all capability claims to remove unverified SLA/uptime metrics.
2. **Medium-Term**:
   - [ ] Add pre-commit GitGuardian or TruffleHog hook for contributor repositories.
   - [ ] Evaluate Cloudflare proxy integration for custom server-side security response headers (HSTS, Content-Security-Policy).
   - [ ] Maintain quarterly SCA audits across all active client repositories.

---

*Document reference: `docs/SECURITY_CONTROLS_MATRIX.md` — Zelvori Software Engineering Standards.*
