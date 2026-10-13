'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Scale,
  Briefcase,
  ShoppingCart,
  Truck,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Info,
} from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  badge: string;
  summary: string;
  keyControls: string[];
  regulatoryRealities: string[];
  relatedStoryHref: string;
  relatedStoryLabel: string;
  relatedServiceHref: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: Stethoscope,
    badge: 'Clinical Workflows',
    summary:
      'Patient encounters, scheduling, and health records require strict least privilege, separate appointment vs medical record boundaries, and clinical owner review.',
    keyControls: [
      'Role-specific workspaces (reception, doctor, nurse, lab, billing, pharmacy)',
      'Encounter-level access rules and canonical patient identity mapping',
      'Clinical data excluded from ordinary logs and unencrypted notifications',
      'Tested downtime, manual fallback workflows, and database restore drills',
      'Clinical owners must sign off on clinical rules, alert thresholds, and discharge reports',
    ],
    regulatoryRealities: [
      'Digital Personal Data Protection (DPDP) Rules 2025 compliance requires deployment-specific review with legal counsel',
      'ABDM interoperability requires accredited M1/M2/M3 adapter certification and cannot be claimed from software design alone',
      'Software is an administrative tool; it never replaces qualified clinical judgment or medical authority',
    ],
    relatedStoryHref: '/stories/#healthcare',
    relatedStoryLabel: 'Read Clinic Workflow Story',
    relatedServiceHref: '/services/business-software',
  },
  {
    id: 'legal',
    name: 'Law Firms & Legal Practices',
    icon: Scale,
    badge: 'Privileged Material',
    summary:
      'Matter-level access boundaries, ethical walls, expiring client portals, and strict restrictions preventing privileged documents from leaking to unapproved AI tools.',
    keyControls: [
      'Matter-level authorization; users on Matter A cannot search, view, or guess URLs for Matter B',
      'Multi-factor authentication mandatory for privileged staff and partners',
      'Expiring, revocable secure links for external counsel and clients',
      'Document version integrity metadata, download auditing, and legal-hold preservation',
      'Zero public AI tools: privileged files are never submitted to public LLMs or unapproved APIs',
    ],
    regulatoryRealities: [
      'Client-lawyer confidentiality is protected by professional ethics and law; technical controls must support firm policy',
      'File hashes prove tamper-evidence, but do not alone establish chain of custody without operational logs',
      'Software assists docketing and reminders; it does not replace counsel’s professional responsibility for court deadlines',
    ],
    relatedStoryHref: '/stories/#legal',
    relatedStoryLabel: 'Read Legal Practice Workflow Story',
    relatedServiceHref: '/services/custom-software',
  },
  {
    id: 'business-software',
    name: 'CRM, ERP & HRMS',
    icon: Briefcase,
    badge: 'Enterprise Operations',
    summary:
      'Unifying leads, quotations, inventory, and payroll requires canonical IDs, segregation of duties for financial transactions, and granular export controls.',
    keyControls: [
      'Canonical customer, contact, product, and employee records with deduplication',
      'Segregation of duties: creators of purchase orders cannot self-approve payouts',
      'Explicit state machines for quotations, purchase orders, leave, and expenses',
      'Scoped export permissions to prevent bulk data exfiltration by departing staff',
      'Audit logging on status transitions, permission grants, and financial modifications',
    ],
    regulatoryRealities: [
      'Tax, payroll, and statutory deductions require accounting-level reconciliation and legal review',
      'Employee personal data processing must align with applicable data protection principles and employee consent terms',
      'ERP migrations require rehearsal with synthetic data; cutover plans must accommodate rollback',
    ],
    relatedStoryHref: '/stories/#growing-business',
    relatedStoryLabel: 'Read Growing Business Story',
    relatedServiceHref: '/services/business-software',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Marketplaces',
    icon: ShoppingCart,
    badge: 'Payments & Inventory',
    summary:
      'Handling buyers, sellers, orders, and payments requires hosted payment checkout handoffs, stock concurrency locks, and idempotency to eliminate double-charges.',
    keyControls: [
      'Hosted payment provider checkout handoff (PCI DSS v4.0.1 scope minimisation)',
      'Zero storage of raw credit card numbers, CVVs, or bank credentials',
      'Idempotent order commands and atomic stock reservation during checkout',
      'Explicit order state machine (Placed → Paid → Fulfilled → Completed / Refunded)',
      'Seller onboarding risk review, catalog moderation, and abuse throttling',
    ],
    regulatoryRealities: [
      'Using a PCI-DSS certified gateway (e.g. Razorpay, Stripe) does not eliminate merchant operational compliance (SAQ-A applies)',
      'Marketplace payouts, commission ledgers, and GST reconciliation require formal financial design and accounting sign-off',
      'Architectures are inspired by modern commerce platforms, but scale must be budgeted for real business volume',
    ],
    relatedStoryHref: '/stories/#ecommerce',
    relatedStoryLabel: 'Read D2C Brand Story',
    relatedServiceHref: '/services/ecommerce',
  },
  {
    id: 'logistics',
    name: 'Field Service & Logistics',
    icon: Truck,
    badge: 'Mobile & Offline',
    summary:
      'Mobile devices in the field require offline sync conflict handling, lost device token revocation, and strict location privacy boundaries.',
    keyControls: [
      'Immediate token revocation when mobile devices are lost or technicians leave',
      'Deterministic offline queue conflict resolution when connectivity restores',
      'Location privacy minimization: precise GPS coordinates retained only as necessary for job dispatch',
      'Tamper-evident proof-of-work photo uploads and customer signature capture',
      'Zero sensitive customer details stored permanently in unencrypted device storage',
    ],
    regulatoryRealities: [
      'Employee location tracking requires workplace privacy disclosures and operational consent',
      'Cellular network dead zones must be handled gracefully without silent data loss',
      'Proof-of-delivery timestamps must use verified server time, not mutable device clocks',
    ],
    relatedStoryHref: '/stories/#field-service',
    relatedStoryLabel: 'Read Field Service Story',
    relatedServiceHref: '/services/mobile-apps',
  },
  {
    id: 'education',
    name: 'Education & Creators',
    icon: GraduationCap,
    badge: 'Learner Privacy',
    summary:
      'Protecting students, minors, and digital creators with robust account recovery, guardian/staff access controls, and content copyright protection.',
    keyControls: [
      'Heightened privacy protections for learner and minor data where applicable',
      'Role segregation between students, parents/guardians, instructors, and admins',
      'Expiring signed URLs for digital assets, course videos, and downloads',
      'Consent tracking for marketing communications and community forums',
      'Clean export and account deletion workflows for graduating cohorts',
    ],
    regulatoryRealities: [
      'Processing minor data requires verifiable parental/guardian consent under applicable data protection laws',
      'Educational assessment platforms must prevent unauthorized sharing without intrusive surveillance spyware',
      'Content ownership and licensing terms must remain clearly documented for creator assets',
    ],
    relatedStoryHref: '/stories/#creators',
    relatedStoryLabel: 'Read Creator Platform Story',
    relatedServiceHref: '/services/web-development',
  },
];

export function IndustrySecurityTabs() {
  const [activeId, setActiveId] = useState<string>('healthcare');

  const current = INDUSTRIES.find((ind) => ind.id === activeId) || INDUSTRIES[0];

  return (
    <div className="space-y-8">
      {/* Industry Pill Selectors */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4" role="tablist">
        {INDUSTRIES.map((ind) => {
          const isActive = ind.id === activeId;
          const Icon = ind.icon;

          return (
            <button
              key={ind.id}
              type="button"
              onClick={() => setActiveId(ind.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Industry Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {current.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">{current.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {current.summary}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={current.relatedServiceHref}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Explore Practice
            </Link>
            <Link
              href={current.relatedStoryHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
            >
              <span>{current.relatedStoryLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Controls */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Architectural Controls</span>
            </h5>
            <ul className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {current.keyControls.map((ctrl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{ctrl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Realities & Boundaries */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Regulatory Realities & Legal Boundaries</span>
            </h5>
            <ul className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {current.regulatoryRealities.map((reg, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
                  <span className="text-amber-400 font-bold shrink-0">!</span>
                  <span>{reg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Caveat */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 text-[11px] text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            Compliance is an ongoing organizational discipline, not a one-time software purchase. Zelvori engineers systems to facilitate regulatory compliance; final compliance requires domain policy adoption, staff training, and legal validation.
          </span>
        </div>
      </div>
    </div>
  );
}
