'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  HardDrive,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Activity,
  GraduationCap,
  Users,
  Compass,
  FileCode2,
  AlertCircle,
} from 'lucide-react';

interface PortfolioItem {
  id: string;
  category: string;
  filterKey: 'healthcare' | 'education' | 'talent' | 'global';
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  serviceSlug: string;
  technologies: string[];
  keyModules: string[];
  architecturalHighlights: { label: string; detail: string }[];
  metrics: { label: string; value: string }[];
  deploymentSpecs: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'healthos',
    category: 'Healthcare & Clinical ERP',
    filterKey: 'healthcare',
    badge: 'Enterprise Clinical Suite',
    title: 'HealthOS — Multi-Tenant Hospital Management Platform',
    tagline: 'Comprehensive hospital operations platform covering OPD/IPD beds, eMAR, pharmacy POS, and Google Workspace automation.',
    overview:
      'HealthOS is an enterprise-grade Hospital Management System engineered to digitize the entire clinical lifecycle. From emergency patient registration and triage to inpatient bed telemetry, digital prescription dispensing, laboratory order dispatch, and TPA billing reconciliation, HealthOS provides sovereign, role-based workflows for healthcare institutions.',
    challenge:
      'Hospitals and specialty clinics frequently suffer from fragmented administration: OPD paper queues, disparate pharmacy registers, delayed eMAR reconciliation between nursing desks and pharmacies, and heavy per-seat licensing penalties from legacy proprietary vendors.',
    solution:
      'Engineered a unified Next.js 16 and PostgreSQL 16 platform with strictly enforced role-based access control (Doctor, Nurse, Receptionist, Pharmacist, Accountant). Features real-time bed telemetry, sub-second prescription routing, and bidirectional Google Workspace and WhatsApp integrations for automated patient appointment reminders.',
    serviceSlug: 'web-development',
    technologies: [
      'Next.js 16 (App Router)',
      'TypeScript',
      'PostgreSQL 16 (Pooled)',
      'Tailwind CSS',
      'Google Workspace OAuth2',
      'WhatsApp Web Messaging',
      'Biometric RD Service',
    ],
    keyModules: [
      'Patient Registration & Emergency Triage Tracking',
      'OPD Consultation & Electronic Medical Records (EMR)',
      'IPD Ward, Bed Allocation & Transfer Telemetry',
      'Electronic Medication Administration Record (eMAR)',
      'Integrated Pharmacy POS, Inventory & Batch Expiry Tracking',
      'Laboratory & Radiology Order Dispatch and Report Generation',
      'Multi-tier Billing, TPA Insurance & Audited Financial Statements',
    ],
    architecturalHighlights: [
      { label: 'Database Tenancy', detail: 'Native PostgreSQL 16 schema isolation with zero-mock data policies.' },
      { label: 'Authentication', detail: 'Cryptographic JWTs in HTTP-only cookies with bcrypt password hashing.' },
      { label: 'Operational Mode', detail: 'Dual deployment: Cloud-hosted on VPC or sovereign offline local LAN.' },
    ],
    metrics: [
      { label: 'Database Engine', value: 'PostgreSQL 16' },
      { label: 'Security Model', value: 'Role-Based RBAC' },
      { label: 'Deployment', value: 'LAN & Cloud' },
    ],
    deploymentSpecs: 'Deployable on local hospital LAN server or secure sovereign cloud with automated backup dumps.',
  },
  {
    id: 'zelvorierp',
    category: 'Education & Institutional ERP',
    filterKey: 'education',
    badge: 'Campus Operating System',
    title: 'ZelvoriERP — School & Institutional Operating System',
    tagline: 'High-governance educational ERP with student lifecycle management, audited fee ledger, and native offline installer.',
    overview:
      'ZelvoriERP is a high-governance institutional management engine engineered for schools, colleges, and multi-branch educational organizations. It centralizes student admissions, academic year promotions, audited financial fee ledgers, teacher-class allocations, and comprehensive examination gradebooks without ongoing per-student subscription fees.',
    challenge:
      'Schools struggle with unreliable internet connections, complex multi-academic-year student transitions, fee reconciliation errors in spreadsheets, and fear of sensitive minor data being stored on public cloud servers with vendor lock-in.',
    solution:
      'Architected a modular Laravel and PostgreSQL system with a custom standalone Windows installer (`ZelvoriERP.cmd`) powered by FrankenPHP. Supports multi-school tenant isolation, immutable fee collection ledgers with audited reversals, and role-based portals for administrators, teachers, and guardians.',
    serviceSlug: 'business-software',
    technologies: [
      'Laravel 11',
      'PHP / FrankenPHP',
      'Vite & Tailwind CSS',
      'PostgreSQL',
      'OpenAPI 3.1 Standard',
      'Windows Native Packaging',
      'Automated PHPUnit Suites',
    ],
    keyModules: [
      'Student Master & Multi-Year Academic Lifecycle Tracking',
      'Guardian-Child Verified Access & Communication Portal',
      'Non-Destructive Fee Collection Ledger with Audited Reversals',
      'Teacher, Class & Subject Allocation Management Matrix',
      'Daily Attendance with RFID / Biometric Integration Readiness',
      'Examination Gradebook, Tabulation Sheets & Report Card Printing',
      'Multi-School Institutional Isolation with Centralized Governance',
    ],
    architecturalHighlights: [
      { label: 'Ledger Integrity', detail: 'Non-destructive accounting model: fee adjustments require audited reversals.' },
      { label: 'Packaging', detail: 'Windows-native offline installer powered by FrankenPHP for zero cloud dependency.' },
      { label: 'API Platform', detail: 'Strict OpenAPI 3.1 contracts with event webhooks and plugin SDK security.' },
    ],
    metrics: [
      { label: 'Multi-Tenancy', value: 'School Isolated' },
      { label: 'Ledger Model', value: 'Audited Reversals' },
      { label: 'Runtime Engine', value: 'Native Windows' },
    ],
    deploymentSpecs: 'Packaged with FrankenPHP for zero-dependency Windows desktop/LAN installation or cloud Docker containers.',
  },
  {
    id: 'recruitos',
    category: 'HR Tech & Enterprise SaaS',
    filterKey: 'talent',
    badge: 'Modular Monolith ATS',
    title: 'AVC RecruitOS — Enterprise Talent & ATS Platform',
    tagline: 'High-concurrency recruitment management system with 14 bounded contexts and Tauri desktop staff client.',
    overview:
      'AVC RecruitOS is an enterprise-scale talent acquisition and recruitment CRM engineered on a strict Modular Monolith architecture. It powers high-volume staffing agencies and corporate talent teams with candidate pipeline Kanban stages, automated resume screening, client contract management, and a high-performance Tauri desktop application.',
    challenge:
      'Fast-paced recruiting agencies lose candidates in cluttered inboxes and slow browser SaaS tabs, with disconnected tracking between recruiter candidate notes, client job requisitions, and placement billing.',
    solution:
      'Constructed a high-concurrency FastAPI backend divided into 14 explicit bounded contexts. Paired with a responsive React web CRM and a native Tauri desktop app for internal recruiting staff, delivering instant keystroke response times and automated candidate status pipelines.',
    serviceSlug: 'ai-automation',
    technologies: [
      'FastAPI (Python)',
      'React / Vite',
      'Tauri Desktop (Rust)',
      'PostgreSQL',
      'Modular Monolith Arch',
      'REST SDK & CLI Tooling',
      'Tailwind CSS',
    ],
    keyModules: [
      '14 Bounded Contexts: Candidates, Jobs, Placements, CRM, Invoicing',
      'Dynamic Drag-and-Drop Candidate Kanban Pipeline',
      'Structured Resume Parsing & Skills Extraction Engine',
      'Recruiter Performance Metrics & Activity Telemetry Hub',
      'Interview Scheduling & Candidate Feedback Scoring Workflows',
      'Client Company Account Management & Placement Billing Records',
      'Native Tauri Desktop CRM Client for Low-Latency Recruiter Desks',
    ],
    architecturalHighlights: [
      { label: 'Domain Isolation', detail: '14 bounded contexts with strict interface boundaries preventing coupling.' },
      { label: 'Client Strategy', detail: 'Dual interface: Public edge web portal + Native desktop Tauri staff client.' },
      { label: 'Data Model', detail: 'High-throughput transactional PostgreSQL with async Python FastAPI workers.' },
    ],
    metrics: [
      { label: 'Bounded Contexts', value: '14 Isolated Domains' },
      { label: 'Staff Client', value: 'Tauri Desktop' },
      { label: 'Backend Core', value: 'FastAPI Python' },
    ],
    deploymentSpecs: 'Docker containerized backend with scalable Postgres cluster; distributed Tauri binaries for staff workstations.',
  },
  {
    id: 'grandview',
    category: 'Global Enterprise Web Architecture',
    filterKey: 'global',
    badge: 'International Architectural Portal',
    title: 'Grand View Ceramic & Marble — International Digital Showcase',
    tagline: 'Ultra-fast, zero-runtime dependency international architectural showcase engineered for Abu Dhabi luxury commercial sector.',
    overview:
      'Grand View Ceramic and Marble is a premium international digital marketing and project portfolio portal engineered for a premier Abu Dhabi stone contracting firm. Built with zero runtime dependencies, the platform presents luxury architectural stone installations, project galleries, and multilingual commercial project inquiries with sub-second page loads across GCC networks.',
    challenge:
      'International commercial clients in the GCC expect immediate, stutter-free visual fidelity and instant catalog browsing on mobile devices, where bloated CMS templates with heavy JavaScript runtimes fail performance and accessibility standards.',
    solution:
      'Engineered a pure static web architecture with zero runtime JavaScript bloat, smooth CSS motion choreography, verified automated accessibility testing (Axe-Core), and automated Playwright E2E verification suites to guarantee 100% reliable rendering on luxury client devices.',
    serviceSlug: 'custom-software',
    technologies: [
      'Vanilla JavaScript (Zero Runtime)',
      'Static HTML5 / CSS Motion UI',
      'Playwright E2E Test Suite',
      'Axe-Core Accessibility Audit',
      'Multilingual i18n Architecture',
      'Edge CDN Optimization',
    ],
    keyModules: [
      'Zero-Runtime Dependency Static Architecture with Sub-Second LCP',
      'Luxury Commercial Stone Catalog & Project Portfolio Gallery',
      'Interactive Architectural Material Specifications & Texture Zoom',
      'Multilingual Architecture Optimized for UAE & GCC Clients',
      'Automated Cross-Browser & Accessibility Regression Testing Suite',
      'Instant Lead Generation & WhatsApp Commercial Inquiry Routing',
    ],
    architecturalHighlights: [
      { label: 'Runtime Footprint', detail: 'Zero runtime dependencies in browser: pure static compilation.' },
      { label: 'Quality Assurance', detail: 'Automated Axe-Core accessibility and Playwright cross-browser test suites.' },
      { label: 'Edge Distribution', detail: 'Optimized for Middle East edge networks with sub-800ms Largest Contentful Paint.' },
    ],
    metrics: [
      { label: 'Edge Speed', value: 'Sub-0.8s LCP' },
      { label: 'Accessibility', value: 'Axe-Core 100%' },
      { label: 'Market Region', value: 'Abu Dhabi / UAE' },
    ],
    deploymentSpecs: 'Ultra-lightweight static artifact deployable to global edge CDNs with zero server maintenance.',
  },
];

export function PortfolioFilterGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.filterKey === activeFilter);

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 p-1.5 liquid-glass-dock rounded-2xl w-fit overflow-x-auto max-w-full">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          All Platforms ({PORTFOLIO_ITEMS.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('healthcare')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'healthcare'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Healthcare & Clinical (1)
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('education')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'education'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          School & Campus ERP (1)
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('talent')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'talent'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          HR Tech & SaaS (1)
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('global')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'global'
              ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          International Web (1)
        </button>
      </div>

      {/* Portfolio Items Stack */}
      <div className="space-y-16">
        {filteredItems.map((item, idx) => (
          <article
            key={item.id}
            id={item.id}
            className="p-8 sm:p-10 lg:p-12 rounded-3xl liquid-glass-card border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden group scroll-mt-28"
          >
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  SYSTEM {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-600">/</span>
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-medium">
                  {item.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                  {item.badge}
                </span>
              </div>

              {/* Metric Chips */}
              <div className="flex items-center gap-2">
                {item.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="hidden sm:block px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-right"
                  >
                    <span className="text-[10px] text-slate-400 font-mono block">{m.label}</span>
                    <span className="text-xs font-bold text-cyan-300 font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8">
              {/* Left Column: Narrative & Technical Solution (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-cyan-200/90 leading-snug">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.overview}
                </p>

                {/* Challenge & Solution Accordion-style layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Operational Challenge</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Engineered Solution</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Core Modules Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Production Modules Delivered</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.keyModules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Engineering Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Highlights & CTAs (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl liquid-glass-dock border-white/10 space-y-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Architectural Governance</span>
                  </h4>

                  <div className="space-y-3">
                    {item.architecturalHighlights.map((arch) => (
                      <div key={arch.label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                        <div className="text-xs font-semibold text-slate-200">
                          {arch.label}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {arch.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deployment note */}
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300/90 leading-relaxed flex items-start gap-2">
                    <HardDrive className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.deploymentSpecs}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 space-y-2.5">
                    <Link
                      href={`/tools/scope-builder/?archetype=${item.id}`}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Configure Scope for Similar System</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/contact?service=${item.serviceSlug}`}
                      className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs text-center border border-slate-700 transition flex items-center justify-center gap-1.5"
                    >
                      <span>Request Technical Walkthrough</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Transparency Note */}
      <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>
          <strong>Commercial & Architectural Notice:</strong> All platforms documented above represent production-engineered systems built by Zelvori. Custom enterprise implementations are tailored to client workflow specifications, data residency requirements, and deployment targets (on-premise local LAN or dedicated cloud).
        </span>
      </div>
    </div>
  );
}
