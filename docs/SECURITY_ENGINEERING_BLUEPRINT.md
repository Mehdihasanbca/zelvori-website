# Zelvori Security Engineering Blueprint
> Version 1.0.0 — Production Reference Architecture & Control Mapping  
> Maintained by Zelvori Engineering (`hello@zelvori.software`)

---

## 1. Executive Summary & Purpose

The **Zelvori Security Engineering Blueprint** establishes an authoritative, reproducible baseline for engineering secure digital products. Whether engineering bespoke B2B SaaS platforms, mobile applications, cloud integrations, or intelligent AI workflows, security is treated as an architectural invariant—designed in from day one rather than retrofitted post-launch.

### 1.1 Architectural Scope & Hosting Boundaries
- **Public Corporate Website (`zelvori.software`)**: A statically compiled Next.js application hosted on GitHub Pages. It has zero runtime backend databases, session state, or API endpoints. This blueprint documents controls implemented directly on this repository as well as architectural standards enforced for client application builds.
- **Client Application Builds**: Dynamic web, mobile, and API backends built by Zelvori deployed onto managed cloud infrastructure (AWS, Google Cloud, Cloudflare, etc.). These systems implement the complete defense-in-depth controls documented across Layers A through H.

### 1.2 Truth-in-Advertising & Compliance Disclaimer
> [!IMPORTANT]
> This blueprint maps technical controls to established industry standards (**NIST CSF 2.0**, **NIST SSDF SP 800-218**, **OWASP Top 10:2025**, and **OWASP API Security Top 10:2023**). These mappings serve as technical guidance and architectural benchmarks. Zelvori does not claim to hold ISO 27001 or SOC 2 certifications, does not operate an accredited 24/7 SOC, and does not claim to deliver 100% hack-proof or zero-risk software.

---

## 2. Defensive Engineering Layers (Layers A – H)

```
+-----------------------------------------------------------------------------------+
|                        ZELVORI DEFENSE-IN-DEPTH ARCHITECTURE                      |
+-----------------------------------------------------------------------------------+
|  [Layer H] AI & Model Security (Prompt Isolation, RAG Authorization, Sanitization)|
+-----------------------------------------------------------------------------------+
|  [Layer G] Backup & Disaster Recovery (Encrypted Snapshots, PITR, Runbooks)       |
+-----------------------------------------------------------------------------------+
|  [Layer F] Detection & Audit Logging (Structured Events, PII Scrubbing, Alerts)   |
+-----------------------------------------------------------------------------------+
|  [Layer E] Secure Development Lifecycle (SAST, SCA, Pre-commit Secret Scans, SBOM)|
+-----------------------------------------------------------------------------------+
|  [Layer D] Infrastructure & Operations (Cloud KMS, Zero Trust, Network Isolation) |
+-----------------------------------------------------------------------------------+
|  [Layer C] Application & API Defenses (Zod Schemas, Parameterized Queries, CSP)   |
+-----------------------------------------------------------------------------------+
|  [Layer B] Data Protection & Privacy (TLS 1.3, KMS Envelope Encryption, Masking)  |
+-----------------------------------------------------------------------------------+
|  [Layer A] Identity & Access (OAuth 2.1, Passkeys/TOTP, Postgres RLS, RBAC/ABAC)  |
+-----------------------------------------------------------------------------------+
```

---

### Layer A: Identity & Access Management (IAM)

#### A.1 Authentication Architecture
- **Modern Hashing**: All password stores require Argon2id or bcrypt (cost factor $\ge 12$). Plaintext or fast hashes (MD5, SHA-1, unkeyed SHA-256) are strictly forbidden.
- **MFA & Passkeys**: Support hardware-backed FIDO2 / WebAuthn passkeys as primary or step-up authentication, with Time-based One-Time Password (TOTP, RFC 6238) fallback.
- **Session Lifecycle**:
  - Secure session storage utilizing cryptographically random session IDs ($\ge 128$ bits of entropy).
  - Browser cookies must enforce `Secure`, `HttpOnly`, and `SameSite=Lax` (or `SameSite=Strict` for sensitive flows).
  - Server-side session revocation: Support explicit user sign-out, session invalidation on password change, and absolute session timeouts (max 7–14 days).

#### A.2 Authorization & Access Control
- **Role-Based & Attribute-Based Access Control (RBAC/ABAC)**: Authorization checks are enforced strictly on the server/API layer, never delegated to client frontend state.
- **Multi-Tenant Isolation**: Multi-tenant database architectures enforce tenant boundaries at the database engine level (e.g., PostgreSQL Row-Level Security `USING (tenant_id = current_setting('app.current_tenant_id'))`).
- **Object-Level Authorization**: Every data modification endpoint validates that the authenticated subject owns or has explicit permission to access the target entity ID (preventing Broken Object-Level Authorization - BOLA).

---

### Layer B: Data Protection & Privacy

#### B.1 Data in Transit & at Rest
- **Transport Security**: TLS 1.2 minimum, TLS 1.3 preferred. Deprecate legacy SSL 3.0, TLS 1.0, and TLS 1.1 across all gateways. Enforce HTTP Strict Transport Security (`HSTS`) with `max-age=31536000; includeSubDomains; preload` on production services.
- **Storage Encryption**: Managed datastores (Amazon RDS, Cloud SQL, S3, GCS) must have encryption-at-rest enabled by default via customer-managed or cloud-provider KMS keys (AES-256 / ChaCha20-Poly1305).
- **Secrets Isolation**: Encryption keys, private keys, and application secrets are stored in managed secret vaults (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault) and injected into ephemeral container runtimes via environment variables or secret volumes. Secrets are never checked into Git.

#### B.2 Privacy-by-Design & Data Minimization
- **Collection Minimization**: Collect only data strictly necessary for application functionality.
- **Data Masking**: Redact payment card information (PCI-DSS compliance), passwords, government IDs, and sensitive health information from application logs, error messages, and support interfaces.
- **Lifecycle Management**: Implement documented data retention schedules and automated purging for transient data, debug traces, and expired tokens.

---

### Layer C: Application & API Defenses

#### C.1 Input Validation & Query Safety
- **Schema-First Validation**: Validate all untrusted input (request parameters, query strings, headers, request bodies, webhook payloads) using strict type schemas (Zod, Pydantic, Yup, Joi). Strip unknown fields.
- **Parameterized Queries**: All database interactions must use parameterized SQL queries or trusted Object-Relational Mappers (Prisma, Drizzle, SQLAlchemy) to prevent SQL Injection (SQLi).
- **Output Encoding & Sanitization**: Protect against Cross-Site Scripting (XSS) by using context-aware output encoding (React JSX auto-escaping, DOMPurify for HTML sinks). Avoid `dangerouslySetInnerHTML` unless input is cryptographically verified or sanitized, and escape inline JSON payloads (`replace(/</g, '\\u003c')`).

#### C.2 API Security Architecture
- **BOLA / BFLA Prevention**: Re-validate user authorization on every nested sub-resource route (`/api/organizations/:orgId/projects/:projectId`).
- **Rate Limiting & Throttling**: Apply token bucket or sliding-window rate limiters (via Redis or Cloudflare edge) on authentication endpoints, password resets, sensitive transactions, and public endpoints.
- **Safe Error Responses**: Production error handlers return generic status messages and correlation request IDs (`500 Internal Server Error, Reference ID: req_9a8f21`) while suppressing internal stack traces, database schema details, and server versions.

---

### Layer D: Infrastructure & Operational Security

#### D.1 Network & Cloud Configuration
- **Secure-by-Default Infrastructure**: Cloud resources must reside within private Virtual Private Clouds (VPCs) without public IP addresses unless explicitly exposed through an Application Load Balancer or API Gateway.
- **No Public Admin Portals**: Administrative tools (pgAdmin, Redis Commander, internal dashboards) must require private VPN/Tailscale access or zero-trust identity-aware proxies (Cloudflare Access, Google Identity-Aware Proxy).
- **Edge Protection**: Front public APIs with reputable Web Application Firewalls (Cloudflare, AWS WAF) configured for DDoS mitigation, bot protection, and GeoIP anomaly controls.

#### D.2 IAM Least Privilege
- **Service Identity Hardening**: Service accounts, container task roles (ECS/EKS IAM roles, Cloud Run service accounts), and CI/CD runners receive minimal necessary IAM permissions.
- **Short-Lived OIDC Tokens**: CI/CD deployment pipelines (GitHub Actions) authenticate to cloud providers using OpenID Connect (OIDC) rather than long-lived static cloud access keys.

---

### Layer E: Secure Software Development Lifecycle (SSDLC)

#### E.1 Automated Continuous Verification
- **Software Composition Analysis (SCA)**: Automated vulnerability scanning of open-source libraries on every PR (`npm audit`, Snyk, Dependabot, Trivy).
- **Static Application Security Testing (SAST)**: Automated linting and static analysis (ESLint security rules, CodeQL, Semgrep) detecting dangerous patterns, prototype pollution, and command injection sinks.
- **Secret Scanning**: Pre-commit hooks and repository-level scanners (GitGuardian, TruffleHog) preventing credentials or tokens from being committed.
- **Software Bill of Materials (SBOM)**: Generate CycloneDX or SPDX SBOM artifacts for production software builds.

#### E.2 Artifact Integrity
- **Deterministic Builds**: Build from committed package lockfiles (`npm ci`) to guarantee deterministic dependencies.
- **Test the Artifact**: Run integration tests and security scans against the generated release build, not merely the development server.

---

### Layer F: Detection, Audit & Incident Readiness

#### F.1 Audit Logging Standards
- **Structured Audit Events**: Emit structured JSON logs containing timestamp, event type, actor ID, target entity ID, IP address, and outcome (`SUCCESS` / `FAILURE`).
- **Redaction Rules**: Application loggers must execute pre-serialization filters stripping fields named `password`, `token`, `secret`, `authorization`, `credit_card`, `ssn`.
- **Log Immutability**: Ship audit logs to centralized, append-only storage (AWS CloudWatch, Datadog, GCP Cloud Logging) with restricted access and retention locks.

#### F.2 Incident Triage Protocol
- Document triage severity matrix (P1 Critical through P4 Low).
- Define primary security point of contact, containment procedures (credential revocation, IP blocking, database point-in-time recovery), and external disclosure protocols.

---

### Layer G: Backup, Resilience & Disaster Recovery

#### G.1 Backup Procedures
- **Immutable Snapshots**: Automated daily database backups with point-in-time recovery (PITR) retained for 30 days in an isolated, access-restricted storage container.
- **Restore Drills**: Scheduled restoration verification drills testing backup readability and recovery time.
- **Objectives**: Document target Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for each workload.

---

### Layer H: AI Application Security & Guardrails

#### H.1 Generative AI & LLM Defenses
- **Prompt Injection Defense**: Treat model prompt construction with clear structural delimitations between system instructions, retrieved knowledge context, and user input.
- **RAG Server-Side Authorization**: Vector databases must never return document embeddings to which the querying user does not have direct read permission. Permissions are enforced on the retrieval query before vector similarity scoring.
- **Output Sanitization**: Validate structured LLM completions (JSON schemas) before executing state-changing tools or rendering content to users.
- **Human-in-the-Loop Controls**: Require human confirmation for destructive operations, financial transactions, or automated email dispatches triggered by AI agents.
- **Zero Training Leakage**: Use enterprise API agreements guaranteeing client prompts and data are not used for upstream public foundation model training.

---

## 3. Industry Framework Control Mapping

The following matrix illustrates how the Zelvori Blueprint layers map to recognized cybersecurity benchmarks:

| Blueprint Layer | NIST CSF 2.0 | NIST SSDF (SP 800-218) | OWASP Top 10:2025 | OWASP API Security Top 10:2023 |
| :--- | :--- | :--- | :--- | :--- |
| **Layer A: Identity & Access** | `PR.AC-01`, `PR.AC-04`, `PR.AC-06` | `PW.1.1`, `PW.1.2` | `A01:2025 Broken Access Control` | `API1:2023 Broken Object Level Auth`, `API2:2023 Broken Auth` |
| **Layer B: Data Protection** | `PR.DS-01`, `PR.DS-02`, `PR.DS-10` | `PW.3.1`, `PW.3.2` | `A02:2025 Cryptographic Failures` | `API3:2023 Broken Object Property Level Auth` |
| **Layer C: App & API Defenses** | `PR.PS-01`, `PR.PS-05` | `PW.4.1`, `PW.5.1` | `A03:2025 Injection`, `A07:2025 Identification & Auth Failures` | `API4:2023 Unrestricted Resource Consumption`, `API5:2023 BFLA` |
| **Layer D: Infrastructure** | `PR.IP-01`, `PR.IP-03`, `DE.CM-01` | `PO.1.2`, `PO.2.1` | `A05:2025 Security Misconfiguration` | `API8:2023 Security Misconfiguration` |
| **Layer E: Secure SDLC** | `GV.SC-06`, `PR.PS-06` | `PO.3.1`, `PS.1.1`, `PW.8.1`, `RV.1.1` | `A06:2025 Vulnerable & Outdated Components` | `API9:2023 Improper Inventory Management` |
| **Layer F: Detection & Audit** | `DE.AE-02`, `DE.AE-03`, `RS.AN-03` | `RV.2.1`, `RV.3.1` | `A09:2025 Security Logging & Monitoring Failures` | `API10:2023 Unsafe Consumption of APIs` |
| **Layer G: Backup & Recovery** | `RC.RP-01`, `RC.RP-03` | `PO.5.1` | `A08:2025 Software & Data Integrity Failures` | `API6:2023 Unrestricted Access to Sensitive Business Flows` |
| **Layer H: AI Security** | `PR.AT-01`, `RS.MA-01` | `PW.6.1`, `PW.9.1` | `OWASP GenAI Top 10 (LLM01 Prompt Injection, LLM02 Sensitive Data)` | `API7:2023 Server Side Request Forgery` |

---

## 4. Engineering Verification Checklist

Before releasing any digital application, the lead security engineer executes this verification checklist:

1. [ ] **Lockfile Gated**: Clean `npm ci` build with automated vulnerability audit review.
2. [ ] **Zero Secrets in Code**: Pre-commit secret scanning executed across all commits and branches.
3. [ ] **Database Authorization**: Query boundaries enforced via ORM / parameterized queries and database RLS.
4. [ ] **Input Schemas Active**: All HTTP endpoints enforce strict request validation schemas.
5. [ ] **CORS & Referrer**: Strict cross-origin resource sharing and referrer policy (`strict-origin-when-cross-origin`) applied.
6. [ ] **Transport TLS**: HTTPS enforced with HSTS headers on dynamic backends.
7. [ ] **Audit Trail Configured**: Critical user and system events emitted as structured audit logs without sensitive field leaks.
8. [ ] **Recovery Plan Documented**: Backup frequency, encryption keys, and restoration steps written and verified.

---

*Document reference: `docs/SECURITY_ENGINEERING_BLUEPRINT.md` — Zelvori Software Engineering Standards.*
