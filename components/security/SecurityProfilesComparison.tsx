'use client';

import React, { useState } from 'react';
import {
  Shield,
  Briefcase,
  Lock,
  Layers,
  CheckCircle2,
  XCircle,
  FileCheck,
  ArrowRight,
  Info,
} from 'lucide-react';

interface SecurityProfile {
  id: string;
  level: string;
  name: string;
  typicalFit: string;
  icon: React.ElementType;
  badge: string;
  color: string;
  includedBaseline: string[];
  notImplied: string[];
  deliverables: string[];
}

const PROFILES: SecurityProfile[] = [
  {
    id: 'foundation',
    level: 'LEVEL 1',
    name: 'Foundation Profile',
    typicalFit: 'Public marketing websites, brochure sites, agency portfolios, content hubs.',
    icon: Shield,
    badge: 'Standard Baseline',
    color: 'border-slate-700 bg-slate-900/60 text-slate-300',
    includedBaseline: [
      'HTTPS / Strict TLS configuration with automatic SSL renewal',
      'Security response headers (Referrer-Policy, nosniff, framing protection)',
      'CMS / Admin role hardening and strong password enforcement',
      'Zero client-side secrets and zero tracking telemetry leaks',
      'Dependency vulnerability checks and lockfile pinning',
      'Automated build verification and static export regression QA',
    ],
    notImplied: [
      'No claim that it can store regulated patient or legal records',
      'No 24/7 active security monitoring or on-call response team',
      'No external penetration test unless separately contracted and scoped',
      'No server-side multi-tenant authorization without dedicated backend',
    ],
    deliverables: [
      'Secure Configuration Checklist',
      'Automated Build & Dependency Scan Summary',
      'Static Release Verification Report',
    ],
  },
  {
    id: 'business-app',
    level: 'LEVEL 2',
    name: 'Business Application Profile',
    typicalFit: 'Company CRMs, customer portals, staff dashboards, booking and workflow systems.',
    icon: Briefcase,
    badge: 'Authenticated Workflows',
    color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
    includedBaseline: [
      'Project threat model and trust boundary mapping prior to build',
      'Authentication architecture (OIDC/OAuth) with optional MFA for staff',
      'Server-side Role-Based Access Control (RBAC) on all API endpoints',
      'Tenant context injection on every query to prevent IDOR/BOLA',
      'Structured application logging with sensitive field redactors',
      'Documented daily automated database backup and restore plan',
      'Automated integration tests and negative access-control test suite',
    ],
    notImplied: [
      'No claim of formal ISO 27001, SOC 2, or PCI DSS certification',
      'No guarantee of 100% breach prevention or zero zero-day exposure',
      'No multi-region automatic disaster recovery failover without cloud budget',
    ],
    deliverables: [
      'Threat Model & Trust Boundary Brief',
      'Role/Permission Matrix with Negative Test Evidence',
      'Automated Test & Scan Summary',
      'Documented Backup & Recovery Plan',
    ],
  },
  {
    id: 'sensitive-data',
    level: 'LEVEL 3',
    name: 'Sensitive-Data System Profile',
    typicalFit: 'Healthcare clinics, legal case management, financial workflows, confidential HR portals.',
    icon: Lock,
    badge: 'High Confidentiality',
    color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300',
    includedBaseline: [
      'Data Protection Impact Assessment (DPIA) aligned with Indian DPDP Rules 2025',
      'Mandatory Multi-Factor Authentication (MFA) for all administrative and privileged roles',
      'Database volume encryption at rest via cloud KMS with customer-managed keys',
      'Append-only tamper-evident audit trails for viewing, changing, and exporting records',
      'Rigorous subprocessor security review (for SMS, email, AI, or storage providers)',
      'Pre-launch disaster recovery rehearsal with verified database restore drill',
      'Scoped independent penetration testing or external security audit option',
    ],
    notImplied: [
      'No "compliant by default" claim; applicable laws, contracts, and policies require legal sign-off',
      'Software does not act as clinical authority or provide legal advice',
      'No end-to-end encryption claim if server needs to process plain text in memory',
    ],
    deliverables: [
      'Data Classification Map & Retention Schedule',
      'Subprocessor & Vendor Security Assessment',
      'Audit Trail Specification & Sample Redacted Event Log',
      'Verified Backup Restore Drill Evidence Report',
      'Incident Response & Escalation Plan',
    ],
  },
  {
    id: 'enterprise',
    level: 'LEVEL 4',
    name: 'Enterprise / High-Availability Profile',
    typicalFit: 'Multi-vendor marketplaces, high-volume commerce, multi-region services, mission-critical platforms.',
    icon: Layers,
    badge: 'Mission-Critical & Scale',
    color: 'border-purple-500/40 bg-purple-950/20 text-purple-300',
    includedBaseline: [
      'Formal capacity planning, load-testing benchmarks, and latency budgets',
      'Centralized telemetry, Prometheus metrics, and real-time anomaly alerts',
      'Formal incident response on-call rotation and severity escalation matrix',
      'Software Bill of Materials (SBOM) and OpenSSF Scorecard supply-chain review',
      'Disaster recovery exercises with defined RPO and RTO thresholds',
      'Automated idempotency, stock concurrency locks, and payment reconciliation jobs',
      'Quarterly privileged access reviews and supplier governance reviews',
    ],
    notImplied: [
      'No 99.99% uptime SLA unless 24/7 operations staffing and multi-region infrastructure are funded',
      'No immediate Amazon/Zomato global logistics scale without years of operational buildout',
    ],
    deliverables: [
      'Comprehensive Architecture Decision Records (ADRs)',
      'Full Software Bill of Materials (SBOM)',
      'Observability & Alerting Playbook',
      'Disaster Recovery (DR) Exercise Results',
      'Vendor Handover & Cloud Ownership Runbook',
    ],
  },
];

export function SecurityProfilesComparison() {
  const [activeTab, setActiveTab] = useState<string>('business-app');

  const activeProfile = PROFILES.find((p) => p.id === activeTab) || PROFILES[1];

  return (
    <div className="space-y-8">
      {/* Tab Selectors */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" role="tablist">
        {PROFILES.map((profile) => {
          const isActive = profile.id === activeTab;
          const Icon = profile.icon;

          return (
            <button
              key={profile.id}
              type="button"
              onClick={() => setActiveTab(profile.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-[10px] font-mono text-cyan-400 font-bold">
                  {profile.level}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-cyan-300' : 'text-slate-500'
                  }`}
                />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
                  {profile.name}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {profile.badge}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Profile Detail Box */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                {activeProfile.level} PROFILE
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeProfile.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">
              {activeProfile.name}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400/90 font-medium max-w-2xl">
              Typical Fit: {activeProfile.typicalFit}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Included Baseline */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Included Engineering Baseline</span>
            </h5>
            <ul className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {activeProfile.includedBaseline.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Is Explicitly Excluded */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>Explicitly Excluded / Not Implied</span>
            </h5>
            <ul className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {activeProfile.notImplied.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
                  <span className="text-amber-400 font-bold shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="border-t border-slate-800 pt-6">
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span>Standard Evidence & Delivery Artefacts</span>
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeProfile.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/90 p-3 rounded-lg text-xs text-slate-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Notice */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-[11px] text-slate-400 leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong>Commercial & Operational Note:</strong> These profiles represent Zelvori’s proposed engineering frameworks, 
            not certifications, warranties, or regulatory guarantees. Final technical controls, hosting infrastructure, 
            support windows, and evidence deliverables are tailored to client requirements and documented in the final Statement of Work.
          </div>
        </div>
      </div>
    </div>
  );
}
