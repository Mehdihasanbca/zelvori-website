'use client';

import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
} from 'lucide-react';

export type ControlStatus =
  | 'Verified in this repository'
  | 'Partially implemented'
  | 'Design requirement'
  | 'Requires deployment or provider configuration'
  | 'Client/project dependent';

export interface SecurityControlItem {
  id: string;
  area: string;
  category: 'Application' | 'Identity' | 'Infrastructure' | 'Governance';
  intendedProtection: string;
  status: ControlStatus;
  verification: string;
  limitations: string;
}

const SECURITY_CONTROLS: SecurityControlItem[] = [
  {
    id: 'ctrl-1',
    area: 'Identity, Authentication & MFA',
    category: 'Identity',
    intendedProtection:
      'Ensure every user identity is verified before granting access. Mandatory multi-factor authentication (TOTP/WebAuthn) for administrative or privileged accounts.',
    status: 'Requires deployment or provider configuration',
    verification:
      'Documented in Master Plan Reference Architecture (Layer 3). Requires integration with managed identity provider (e.g., Supabase Auth, Clerk, Auth0) or hardened OAuth 2.0 / OIDC service.',
    limitations:
      'Current static website at zelvori.software does not process user accounts. Production client applications must configure an identity provider, enforce MFA on privileged roles, and budget for authentication infrastructure.',
  },
  {
    id: 'ctrl-2',
    area: 'Server-Side Authorisation & RBAC/ABAC',
    category: 'Identity',
    intendedProtection:
      'Enforce role-based and attribute-based permissions on every mutation and query on the server side. Prevent horizontal privilege escalation (IDOR/BOLA).',
    status: 'Design requirement',
    verification:
      'Specified in G1/G2 architecture gates and negative access-control test suites. Role permission matrix defined prior to coding.',
    limitations:
      'Front-end navigation hiding alone is not authorization. Every backend API endpoint must independently verify tenant context and caller permissions on every request.',
  },
  {
    id: 'ctrl-3',
    area: 'Tenant & Customer Data Isolation',
    category: 'Identity',
    intendedProtection:
      'Prevent cross-tenant data leakage in multi-tenant SaaS environments. Isolate databases, schemas, or enforce row-level security (RLS).',
    status: 'Design requirement',
    verification:
      'Tested with negative cross-tenant retrieval queries during G3 security verification. Architecture specifies tenant_id scopes and database isolation models.',
    limitations:
      'Tenant ID alone in a WHERE clause is not a complete security boundary without rigorous row-level security or separate schemas. Higher-assurance applications may require dedicated databases.',
  },
  {
    id: 'ctrl-4',
    area: 'Input Validation & Output Encoding',
    category: 'Application',
    intendedProtection:
      'Defend against Cross-Site Scripting (XSS), injection attacks, and malformed payloads through schema parsing and character escaping.',
    status: 'Verified in this repository',
    verification:
      'Implemented in @zelvori/core/security (escapeHtml, sanitizeUrl, RFC 8259 safeJsonParse). Verified with 7 passing test suites in packages/core/tests/sdk.test.mjs. Scanned across all 33 static pages with verify-security.mjs.',
    limitations:
      'HTML entity escaping in client code does not replace server-side parameterized queries (SQL injection defense) or strict backend input schema validation (Zod/Pydantic).',
  },
  {
    id: 'ctrl-5',
    area: 'API Security & Rate Limiting',
    category: 'Application',
    intendedProtection:
      'Prevent brute-force abuse, credential stuffing, scraping, and denial-of-service through token bucket rate limiting and CORS origin lockdowns.',
    status: 'Design requirement',
    verification:
      'Standard pattern in Zelvori backend blueprints: Redis-backed or edge token bucket rate limiters, explicit CORS allowlists, and idempotency keys on payment/mutation endpoints.',
    limitations:
      'Static GitHub Pages site cannot enforce dynamic API rate limits. Requires reverse proxy (Cloudflare, AWS CloudFront, or backend gateway) on client deployments.',
  },
  {
    id: 'ctrl-6',
    area: 'Data Minimisation & Retention',
    category: 'Governance',
    intendedProtection:
      'Collect only strictly necessary operational fields. Enforce scheduled retention and automated data purging workflows.',
    status: 'Partially implemented',
    verification:
      'Verified zero private data collected on zelvori.software: static contact forms generate client-side mailto links with zero server-side transmission or third-party tracking cookies. Production project data retention schedules defined in SOW.',
    limitations:
      'Client applications storing sensitive records must implement database purge cron jobs, soft-delete lifecycles, and legally reviewed retention periods.',
  },
  {
    id: 'ctrl-7',
    area: 'Encryption in Transit & At Rest',
    category: 'Infrastructure',
    intendedProtection:
      'Ensure data cannot be intercepted over the network (TLS 1.3) or accessed via physical disk exfiltration (AES-256 / Cloud KMS).',
    status: 'Partially implemented',
    verification:
      'TLS 1.3 verified across 100% of routes on https://zelvori.software via GitHub Pages CDN with HSTS. Backend client databases require cloud KMS (AWS KMS, GCP KMS) at-rest volume encryption.',
    limitations:
      'TLS in transit does not prevent data exposure if application authorization is broken. Encryption at rest must be paired with strict database IAM and key rotation.',
  },
  {
    id: 'ctrl-8',
    area: 'Secret & Key Management',
    category: 'Infrastructure',
    intendedProtection:
      'Prevent private credentials, API keys, database passwords, or payment provider secrets from ever entering source repositories or browser bundles.',
    status: 'Verified in this repository',
    verification:
      'Automated secret scans run on every build via scripts/verify-security.mjs. Verified zero API keys, payment secret keys, or cloud credentials in repository and static export.',
    limitations:
      'Server-side applications require cloud-native secret stores (AWS Secrets Manager, HashiCorp Vault, Doppler). Environment variables in Docker files must be avoided.',
  },
  {
    id: 'ctrl-9',
    area: 'Security Headers & Content Security Policy',
    category: 'Application',
    intendedProtection:
      'Harden browsers against clickjacking, MIME sniffing, and script injection via strict HTTP response headers.',
    status: 'Partially implemented',
    verification:
      'Referrer-Policy: strict-origin-when-cross-origin, X-Content-Type-Options: nosniff verified on exported pages. @zelvori/core/security exports buildCspHeader helper for backend deployments.',
    limitations:
      'GitHub Pages static hosting does not support custom server response headers (e.g., custom CSP response header injection). Full CSP header enforcement requires custom reverse proxy or server hosting.',
  },
  {
    id: 'ctrl-10',
    area: 'Dependency & Software Supply Chain Checks',
    category: 'Application',
    intendedProtection:
      'Mitigate vulnerabilities in third-party libraries through package lockfiles, automated dependency audits, and minimal dependency count.',
    status: 'Verified in this repository',
    verification:
      'package-lock.json strictly enforced via npm ci in CI/CD pipeline. Zero unvetted dependencies in @zelvori/core (pure TypeScript). Regular npm audit scans integrated into build gates.',
    limitations:
      'Third-party npm packages can introduce zero-day vulnerabilities at any time. Ongoing maintenance agreements require periodic vulnerability patching and lockfile updates.',
  },
  {
    id: 'ctrl-11',
    area: 'Logging, Monitoring & Audit Trails',
    category: 'Governance',
    intendedProtection:
      'Record security-relevant events (logins, permission changes, data exports) while preventing sensitive data (passwords, PHI, card details) from leaking into logs.',
    status: 'Design requirement',
    verification:
      'Specified in G3 security review and logging standards: structured JSON logs, sensitive field redactor, centralized telemetry (Grafana, CloudWatch, Datadog), and CERT-In log retention alignment where applicable.',
    limitations:
      'Static frontend produces only browser console logs. Backend client applications must provision centralized log storage and configure real-time alert triggers.',
  },
  {
    id: 'ctrl-12',
    area: 'Backup & Disaster Recovery (RPO/RTO)',
    category: 'Infrastructure',
    intendedProtection:
      'Ensure business continuity and protect against ransomware or catastrophic host failure through automated encrypted backups and tested recovery drills.',
    status: 'Design requirement',
    verification:
      'Master Plan Appendix B mandates at least one successful backup restoration rehearsal prior to production handover. Defined Recovery Point Objective (RPO) and Recovery Time Objective (RTO) in SOW.',
    limitations:
      'A backup job that has never been restored is not proof of recoverability. Periodic restore drills must be scheduled and funded under a maintenance agreement.',
  },
  {
    id: 'ctrl-13',
    area: 'Incident Response & Vulnerability Handling',
    category: 'Governance',
    intendedProtection:
      'Establish a clear escalation pathway, containment runbook, and disclosure inbox for security researchers and clients.',
    status: 'Partially implemented',
    verification:
      'Vulnerability disclosure channel active at hello@zelvori.software. Incident severity definitions, containment procedures, and client notification trees documented in Master Plan.',
    limitations:
      '24/7 on-call incident response requires dedicated staffing and a managed operations SLA agreed in the project contract.',
  },
  {
    id: 'ctrl-14',
    area: 'Secure Development Lifecycle (SDLC) & Code Review',
    category: 'Governance',
    intendedProtection:
      'Integrate security checks from discovery through deployment: threat modeling, peer code review, automated static tests, and release gating.',
    status: 'Verified in this repository',
    verification:
      'Enforced on main branch: branch protection, mandatory PR verification, automated ESLint, 223 security regression checks (verify-security.mjs), and 162 QA checks (qa-audit.mjs).',
    limitations:
      'Automated static checks verify source code hygiene and static exports, but do not replace scoped penetration testing for high-risk financial or healthcare backends.',
  },
];

export function SecurityControlsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', 'Application', 'Identity', 'Infrastructure', 'Governance'];

  const filteredControls = useMemo(() => {
    return SECURITY_CONTROLS.filter((ctrl) => {
      const matchesCategory = selectedCategory === 'All' || ctrl.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        ctrl.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ctrl.intendedProtection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ctrl.verification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ctrl.status.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getStatusBadge = (status: ControlStatus) => {
    switch (status) {
      case 'Verified in this repository':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Verified in this repo</span>
          </span>
        );
      case 'Partially implemented':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Partially implemented</span>
          </span>
        );
      case 'Design requirement':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <FileCode className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Design requirement</span>
          </span>
        );
      case 'Requires deployment or provider configuration':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30">
            <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Provider configuration</span>
          </span>
        );
      case 'Client/project dependent':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Project dependent</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              {cat} {cat === 'All' ? `(${SECURITY_CONTROLS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search controls, evidence, status..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60"
          />
        </div>
      </div>

      {/* Control Items List */}
      <div className="space-y-3">
        {filteredControls.map((ctrl) => {
          const isExpanded = expandedId === ctrl.id;

          return (
            <div
              key={ctrl.id}
              className={`rounded-xl border transition-all duration-200 ${
                isExpanded
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-xl'
                  : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700/90 hover:bg-slate-900/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : ctrl.id)}
                className="w-full p-4 sm:p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-xl"
                aria-expanded={isExpanded}
              >
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                      {ctrl.category}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-100">
                      {ctrl.area}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 sm:line-clamp-2">
                    {ctrl.intendedProtection}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                  {getStatusBadge(ctrl.status)}
                  <div className="p-1 rounded bg-slate-800/60 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 border-t border-slate-800/80 pt-4 space-y-4 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Intended Protection */}
                    <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Intended Protection & Security Objective
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {ctrl.intendedProtection}
                      </p>
                    </div>

                    {/* Verification & Evidence */}
                    <div className="bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-500/20 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3" />
                        Verification / Evidence in Place
                      </span>
                      <p className="text-emerald-200/90 leading-relaxed">
                        {ctrl.verification}
                      </p>
                    </div>
                  </div>

                  {/* Remaining Limitations or Prerequisites */}
                  <div className="bg-amber-950/20 p-3.5 rounded-xl border border-amber-500/20 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" />
                      Scope Boundaries & Remaining Prerequisites
                    </span>
                    <p className="text-amber-200/90 leading-relaxed">
                      {ctrl.limitations}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredControls.length === 0 && (
          <div className="text-center py-12 bg-slate-950/50 rounded-2xl border border-slate-800 text-slate-400 text-xs">
            No security controls match the query “{searchQuery}”.
          </div>
        )}
      </div>
    </div>
  );
}
