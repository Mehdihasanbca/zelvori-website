import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  ShieldCheck,
  Lock,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Mail,
  MessageSquare,
  FileCode2,
  Terminal,
  Activity,
  KeyRound,
  FileCheck2,
  Scale,
  Users,
  Eye,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { SecurityArchitectureDiagram } from '@/components/security/SecurityArchitectureDiagram';
import { SecurityControlsMatrix } from '@/components/security/SecurityControlsMatrix';
import { SecurityProfilesComparison } from '@/components/security/SecurityProfilesComparison';
import { IndustrySecurityTabs } from '@/components/security/IndustrySecurityTabs';
import { EvidencePackGrid } from '@/components/security/EvidencePackGrid';

export const metadata: Metadata = {
  title: 'Security & Trust Centre | Defensive Architecture & Evidence',
  description:
    'Explore Zelvori’s layered security architecture, defensible controls matrix, secure SDLC gates, data handling principles, and client evidence packs. No unsubstantiated claims.',
  alternates: {
    canonical: 'https://zelvori.software/security/',
  },
  openGraph: {
    title: 'Security & Trust Centre | Defensive Architecture & Evidence | Zelvori',
    description:
      'Security is designed into delivery, not added as a marketing claim. Explore our reference architecture, controls matrix, and project evidence pack.',
    url: 'https://zelvori.software/security/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Security & Trust Centre — Defensive Architecture and Evidence',
        type: 'image/png',
      },
    ],
  },
};

const SDLC_GATES = [
  {
    gate: 'G0',
    title: 'Discovery & Threat Modelling',
    work: 'Stakeholder discovery interviews, current operational process mapping, data classification, and explicit in-scope/out-of-scope risk boundaries.',
    dod: 'Signed Project Brief, named risk owner, baseline assumptions register, and data inventory.',
    badge: 'Discovery',
  },
  {
    gate: 'G1',
    title: 'Architecture & Data-Flow Review',
    work: 'User journey mapping, data-flow diagrams, trust boundary definition, role/permission matrix, and third-party integration risk assessment.',
    dod: 'Client approves architecture diagrams, role definitions, data flows, and primary threat mitigations.',
    badge: 'Design',
  },
  {
    gate: 'G2',
    title: 'Build & Defensive Hardening',
    work: 'Iterative module development, mandatory pull-request code reviews, strict input schema parsing, branch protection, and zero secrets in git.',
    dod: 'Clean PR reviews, passing unit & integration tests, controlled staging environments, zero unvetted test data.',
    badge: 'Implementation',
  },
  {
    gate: 'G3',
    title: 'Security Verification & QA',
    work: 'Static application security testing (SAST), dependency scans, negative access-control tests, backup restore rehearsals, and abuse-case evaluations.',
    dod: 'Zero unresolved critical/high vulnerabilities; written risk acceptance logs; documented evidence of passing tests.',
    badge: 'Verification',
  },
  {
    gate: 'G4',
    title: 'Realistic UAT & Handover',
    work: 'Role-based User Acceptance Testing (UAT), data migration rehearsals, administrator training, rollback runbook verification, and release checklists.',
    dod: 'Formal client sign-off, backup/recovery verification, known limitations log, and incident escalation contacts.',
    badge: 'Launch',
  },
  {
    gate: 'G5',
    title: 'Operate & Maintain',
    work: 'Scheduled security patch updates, dependency vulnerability monitoring, periodic backup restoration drills, and privileged access reviews.',
    dod: 'Agreed maintenance cadence, contract-defined support windows, and documented post-incident review procedures.',
    badge: 'Operations',
  },
];

const PRIVACY_DISCOVERY_QUESTIONS = [
  {
    question: '1. What data is genuinely needed?',
    explanation: 'We apply strict data minimisation. Never collect fields for hypothetical future features.',
  },
  {
    question: '2. Where is it processed and stored?',
    explanation: 'Explicit network placement in private cloud subnets with geographic data residency rules.',
  },
  {
    question: '3. Who can access it and how is it revoked?',
    explanation: 'Role-based access, least privilege, and audited offboarding processes for departing personnel.',
  },
  {
    question: '4. How long is data retained?',
    explanation: 'Documented retention schedules with automated purging scripts for expired transactions.',
  },
  {
    question: '5. How are deletions, exports, and backups handled?',
    explanation: 'Soft-delete lifecycles, structured CSV/JSON customer exports, and air-gapped backup storage.',
  },
  {
    question: '6. Which external subprocessors receive data?',
    explanation: 'Audited integration boundaries for payment, SMS, email, or AI providers with scoped API tokens.',
  },
  {
    question: '7. How are incidents and regulatory notices handled?',
    explanation: 'Defined response workflows aligned with applicable data protection requirements (e.g. DPDP Rules 2025).',
  },
  {
    question: '8. How are AI and automated workflows restricted?',
    explanation: 'Strict isolation ensuring customer documents are never leaked to public training corpuses.',
  },
];

export default function SecurityTrustCentrePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Security & Trust Centre | Zelvori',
    url: 'https://zelvori.software/security/',
    description:
      'Defensive software architecture, security controls matrix, secure SDLC gates, and client evidence packs by Zelvori.',
    publisher: {
      '@type': 'Organization',
      name: 'Zelvori',
      url: 'https://zelvori.software',
      logo: 'https://zelvori.software/images/brand/zelvori-og.png',
    },
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-800/80 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Defensive Architecture & Evidence</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Security Built Into Design & Delivery. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Not Added as an Afterthought.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              At <strong>Zelvori</strong>, security and privacy are engineering requirements, not marketing slogans. 
              We turn real-world business workflows into scalable digital products backed by defensible architecture, 
              verified controls, and honest operational boundaries.
            </p>
          </div>

          {/* Core Philosophy Notice */}
          <div className="max-w-3xl bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Our Security Philosophy & Grounding Reality</span>
            </div>
            <p>
              No software system can honestly be described as “100% secure,” “unhackable,” or “zero risk.” 
              Real security is an ongoing engineering discipline: threat modelling before code, enforcing least-privilege 
              boundaries, validating inputs, maintaining private backups, and validating controls through test evidence. 
              We distinguish what is verified in code from what requires cloud deployment or client operational governance.
            </p>
          </div>

          {/* Quick Indicator Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-4xl">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="font-mono text-cyan-400 font-bold">ZERO SECRETS</div>
              <div className="text-slate-400 text-[11px]">Enforced in source code & CI</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="font-mono text-cyan-400 font-bold">6 ARCH LAYERS</div>
              <div className="text-slate-400 text-[11px]">Strict trust boundary gates</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="font-mono text-cyan-400 font-bold">14 CONTROL AREAS</div>
              <div className="text-slate-400 text-[11px]">Defensible status matrix</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="font-mono text-cyan-400 font-bold">6 SDLC GATES</div>
              <div className="text-slate-400 text-[11px]">G0 to G5 release criteria</div>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Reference Architecture
            </a>
            <a href="#controls" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Controls Matrix
            </a>
            <a href="#privacy-data" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Privacy & Data Handling
            </a>
            <a href="#sdlc" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Secure SDLC Gates
            </a>
            <a href="#profiles" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Project Profiles
            </a>
            <a href="#industries" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Industry Realities
            </a>
            <a href="#evidence" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors">
              ↓ Evidence Pack
            </a>
          </div>
        </div>
      </section>

      {/* Section B: Security Architecture */}
      <section id="architecture" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Section B • Reference Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Layered Security Architecture for Modern Web Products
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Every system we engineer respects clear trust boundaries. Incoming requests pass through edge inspection, 
              identity verification, schema validation, and domain-level authorization before reaching private data services.
            </p>
          </div>

          <SecurityArchitectureDiagram />
        </div>
      </section>

      {/* Section C: Controls & Verification Matrix */}
      <section id="controls" className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Section C • Controls & Evidence Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              14 Core Security Controls & Defensible Statuses
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              We never claim a control is verified without evidence from code, configuration, or operational records. 
              Inspect our current evaluation across application security, identity, cloud infrastructure, and operations.
            </p>
          </div>

          <SecurityControlsMatrix />
        </div>
      </section>

      {/* Section D: Privacy & Data Handling */}
      <section id="privacy-data" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Section D • Privacy & Data Governance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Practical Data Protection: What We Assess for Every Project
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Privacy is not a legal disclaimer added after launch. It begins with the fundamental decision of what data 
              we choose not to collect in the first place.
            </p>
          </div>

          {/* Architecture Boundary Callout */}
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  Visible Architecture Boundary: Static Website vs. Production Applications
                </h3>
                <span className="text-xs text-cyan-400/90 font-mono">
                  Clear separation of responsibilities & attack surfaces
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The public website you are viewing at <strong>zelvori.software</strong> is an exported static site hosted on 
              GitHub Pages. It operates with <strong>zero server-side database</strong>, zero user accounts, and zero secret handling. 
              Our contact actions generate standard client-side email drafts with zero tracking cookies or external analytics pixels.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In contrast, <strong>production client applications</strong> that process sensitive customer, patient, or financial records 
              are engineered with dedicated backend runtimes, private VPC databases, strict KMS encryption, server-side authorization, 
              and isolated integration adapters. We never run sensitive business logic on a static host.
            </p>
          </div>

          {/* 8 Practical Assessment Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRIVACY_DISCOVERY_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2"
              >
                <h4 className="text-xs font-bold text-cyan-300">
                  {item.question}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Secure SDLC Gates */}
      <section id="sdlc" className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>Section E • Secure Development Lifecycle (SSDLC)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Threat Model to Production: Gates G0 to G5
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              We apply NIST SP 800-218 (Secure Software Development Framework) and OWASP best practices. 
              Each stage has explicit work performed and a measurable Definition of Done before release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SDLC_GATES.map((g) => (
              <div
                key={g.gate}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      {g.gate}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {g.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{g.title}</h3>
                  <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <span className="font-semibold text-slate-200 block mb-1">Activities:</span>
                    {g.work}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] text-emerald-300 leading-relaxed">
                    <span className="font-semibold block mb-0.5 text-emerald-400">Definition of Done:</span>
                    {g.dod}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section F: Project Security Levels */}
      <section id="profiles" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Section F • Project Security Levels</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Configurable Security Profiles: Match Controls to Risk
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              We do not sell a one-size-fits-all “secure software” package. A public marketing website requires different 
              controls and budgets than an enterprise healthcare or financial platform.
            </p>
          </div>

          <SecurityProfilesComparison />
        </div>
      </section>

      {/* Section G: Industry-Specific Considerations */}
      <section id="industries" className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Section G • Industry Realities & Guardrails</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sector Realities: Why Security Controls Differ by Industry
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Every vertical presents unique legal risks, operational failure modes, and regulatory boundaries. 
              We design specific mitigations without making unsubstantiated compliance promises.
            </p>
          </div>

          <IndustrySecurityTabs />
        </div>
      </section>

      {/* Section H: Evidence Pack & Checklist */}
      <section id="evidence" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Section H • Customer Evidence Pack</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Clients Receive: 9 Standard Verification Artefacts
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Real trust is evidenced in writing. Clients receive tangible architecture diagrams, access control matrices, 
              restore drill records, and SBOM outputs to support their internal audits and board reviews.
            </p>
          </div>

          <EvidencePackGrid />
        </div>
      </section>

      {/* Section I: Clear Call to Action */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Section I • Direct Engagement</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Plan a Security-Sensitive Digital Engagement
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are architecting a multi-tenant business portal, a legal matter system, or a clinical workflow, 
              we begin with honest discovery and clear threat boundaries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Discuss a Security-Sensitive Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                'Request Security Architecture Discovery — Zelvori'
              )}&body=${encodeURIComponent(
                'Hello Zelvori Engineering Desk,\n\nWe are looking to scope a digital application and would like to schedule a security architecture discovery session.\n\nProject Overview:\nKey Data Types Handled:\nTarget Delivery Timeline:\n\nThank you,\n[Name / Organization]'
              )}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Request Security Architecture Review</span>
            </a>

            <Link
              href="/services/application-security"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium text-sm hover:text-cyan-400 transition-colors"
            >
              <span>Application Security Practice</span>
            </Link>
          </div>

          {/* Contact Details */}
          <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div>
              Engineering Desk: <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:underline">{siteConfig.contact.email}</a>
            </div>
            <div>
              Direct WhatsApp: <a href="https://wa.me/919934212978" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">+91 99342 12978</a>
            </div>
            <div>
              Domain Verification: <span className="text-slate-300 font-mono">https://zelvori.software/</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
