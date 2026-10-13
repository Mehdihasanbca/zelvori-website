'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Clock,
  ArrowRight,
  Users,
  Database,
  Lock,
  Workflow,
  Sparkles,
  Server,
  Cloud,
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Scale,
  Briefcase,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Video,
  GraduationCap,
  Truck,
  Check,
  AlertCircle,
  FileText,
} from 'lucide-react';
import type { SolutionBlueprint } from '@/lib/solutions-data';
import { IndustryArchitectureDiagram } from './IndustryArchitectureDiagram';

interface SolutionBlueprintViewProps {
  blueprint: SolutionBlueprint;
}

const SLUG_ICON_MAP: Record<string, React.ElementType> = {
  healthcare: Stethoscope,
  legal: Scale,
  'business-operations': Briefcase,
  marketplace: Store,
  'food-delivery': UtensilsCrossed,
  ecommerce: ShoppingBag,
  creators: Video,
  education: GraduationCap,
  logistics: Truck,
};

const NAV_SECTIONS = [
  { id: 'overview', label: '1. Overview & Problem' },
  { id: 'personas', label: '2. Target Personas' },
  { id: 'use-cases', label: '3. Core Use Cases' },
  { id: 'modules', label: '4. Core Engine Modules' },
  { id: 'rbac', label: '5. Roles & Access Control' },
  { id: 'architecture', label: '6. 6-Tier Architecture' },
  { id: 'data-privacy', label: '7. Data Classification' },
  { id: 'security', label: '8. Security Controls' },
  { id: 'integrations', label: '9. External Integrations' },
  { id: 'roadmap', label: '10. Phased Roadmap' },
  { id: 'acceptance', label: '11. Acceptance Criteria' },
  { id: 'deployment', label: '12. Deployment & Ops' },
  { id: 'risks', label: '13. Risks & Assumptions' },
  { id: 'ecosystem', label: '14. Connected Ecosystem' },
  { id: 'inquiry', label: '15. Scope Consultation' },
];

export function SolutionBlueprintView({ blueprint }: SolutionBlueprintViewProps) {
  const Icon = SLUG_ICON_MAP[blueprint.slug] || Briefcase;
  const [activeSection, setActiveSection] = useState<string>('overview');

  return (
    <div className="w-full space-y-12">
      {/* 1. Header & Breadcrumb */}
      <div className="space-y-6 pt-4 border-b border-slate-800 pb-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-200 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/solutions/" className="hover:text-slate-200 transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-cyan-400 font-medium">{blueprint.shortTitle}</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Industry Blueprint
              </span>
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                {blueprint.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Zero-Trust Ready
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {blueprint.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {blueprint.tagline}
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm space-y-3 shrink-0 w-full sm:w-auto">
            <div className="text-xs text-slate-400">MVP Delivery Timeline</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              {blueprint.roadmap[0]?.timeframeNote || '6–8 Weeks'}
            </div>
            <a
              href="#inquiry"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Request Custom Scope
            </a>
          </div>
        </div>

        {/* 5 Core Questions Answer Box */}
        <div className="p-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-blue-950/20 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Executive Blueprint Orientation (The 5 Core Answers)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-200">1. Who is this for?</span>
              <p className="text-slate-400 leading-relaxed">{blueprint.targetPersonas[0]?.role} & leadership.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-200">2. Core Problem?</span>
              <p className="text-slate-400 leading-relaxed">{blueprint.operationalProblem.slice(0, 75)}...</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-200">3. Architecture?</span>
              <p className="text-slate-400 leading-relaxed">6-tier isolated stack with zero-trust RBAC.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-200">4. Delivery Model?</span>
              <p className="text-slate-400 leading-relaxed">Phased MVP, growth milestones, 100% code handover.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-200">5. Why Zelvori?</span>
              <p className="text-slate-400 leading-relaxed">Zero SaaS per-seat tax; dedicated cloud database.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Anchor Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Desktop Navigation */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-2 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1">
            Blueprint Sections
          </div>
          <nav className="space-y-1 text-xs">
            {NAV_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveSection(sec.id)}
                className={`block px-3 py-2 rounded-lg transition-all ${
                  activeSection === sec.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {sec.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Blueprint Body */}
        <div className="lg:col-span-9 space-y-12">
          {/* SECTION 1: Overview & Problem */}
          <section id="overview" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 01</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Solution Overview & Operational Bottleneck
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  Architectural Overview
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {blueprint.overview}
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-950/10 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  Operational Bottleneck
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {blueprint.operationalProblem}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Target Personas */}
          <section id="personas" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 02</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Target User Personas & Responsibilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blueprint.targetPersonas.map((p) => (
                <div
                  key={p.role}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-cyan-400">{p.role}</h4>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Core Use Cases */}
          <section id="use-cases" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 03</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Primary Operational Use Cases & Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {blueprint.mainUseCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{uc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Core Engine Modules & Excluded Scope */}
          <section id="modules" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 04</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Core Engine Modules & Non-Included V1 Guardrails
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  Included Engine Modules (V1 Scope)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {blueprint.coreModules.map((mod) => (
                    <li key={mod} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/20 bg-rose-950/10 space-y-3">
                <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Explicitly Excluded from V1 (Scope Guardrails)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {blueprint.excludedFromV1.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-400">
                      <span className="text-rose-400 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 5: Roles & Access Control */}
          <section id="rbac" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 05</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Role-Based Access Control (RBAC) & Privilege Separation
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 uppercase font-mono tracking-wider text-slate-400">
                    <th className="py-3 px-4 font-semibold">Role</th>
                    <th className="py-3 px-4 font-semibold">Access Level</th>
                    <th className="py-3 px-4 font-semibold">Can View</th>
                    <th className="py-3 px-4 font-semibold">Can Edit</th>
                    <th className="py-3 px-4 font-semibold">Security Restrictions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {blueprint.rolePermissions.map((rp) => (
                    <tr key={rp.role} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-100">
                        {rp.role}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300">
                          {rp.accessLevel}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{rp.canView.join(', ')}</td>
                      <td className="py-3.5 px-4 text-slate-300">{rp.canEdit.join(', ')}</td>
                      <td className="py-3.5 px-4 text-amber-300 font-mono">{rp.restrictions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6: 6-Tier Architecture Blueprint */}
          <section id="architecture" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 06</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                6-Tier Zero-Trust Reference Architecture
              </h2>
            </div>

            <IndustryArchitectureDiagram blueprint={blueprint} />
          </section>

          {/* SECTION 7: Data Classification & Privacy */}
          <section id="data-privacy" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 07</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Data Classification & Privacy Handling
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 uppercase font-mono tracking-wider text-slate-400">
                    <th className="py-3 px-4 font-semibold">Data Class</th>
                    <th className="py-3 px-4 font-semibold">Real-World Examples</th>
                    <th className="py-3 px-4 font-semibold">Storage & Encryption Handling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {blueprint.dataClassification.map((dc) => (
                    <tr key={dc.dataClass} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-100">
                        {dc.dataClass}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{dc.examples}</td>
                      <td className="py-3.5 px-4 font-mono text-cyan-300">{dc.handling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 8: Security Controls */}
          <section id="security" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 08</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Defensible Security Controls & Safeguards
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 uppercase font-mono tracking-wider text-slate-400">
                    <th className="py-3 px-4 font-semibold">Security Control</th>
                    <th className="py-3 px-4 font-semibold">Target Protection</th>
                    <th className="py-3 px-4 font-semibold">Implementation Status</th>
                    <th className="py-3 px-4 font-semibold">Prerequisite / Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {blueprint.securityControls.map((sc) => (
                    <tr key={sc.control} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-100">
                        {sc.control}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{sc.protection}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          {sc.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono">{sc.evidenceOrPrereq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 9: External Integrations */}
          <section id="integrations" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 09</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                External Ecosystem Integrations & Security Boundaries
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 uppercase font-mono tracking-wider text-slate-400">
                    <th className="py-3 px-4 font-semibold">Service Provider</th>
                    <th className="py-3 px-4 font-semibold">Integration Type</th>
                    <th className="py-3 px-4 font-semibold">Integration Method</th>
                    <th className="py-3 px-4 font-semibold">Security Boundary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {blueprint.externalIntegrations.map((item) => (
                    <tr key={item.service} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-100">{item.service}</td>
                      <td className="py-3.5 px-4 text-slate-300">{item.type}</td>
                      <td className="py-3.5 px-4 font-mono text-cyan-300">{item.integrationMethod}</td>
                      <td className="py-3.5 px-4 font-mono text-amber-300">{item.securityBoundary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 10: Phased Roadmap */}
          <section id="roadmap" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 10</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Phased Implementation Roadmap & Anti-Scope Creep Guardrails
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {blueprint.roadmap.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                        {phase.phase}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {phase.timeframeNote}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100">{phase.title}</h4>

                    <div className="space-y-1.5 text-xs">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                        Included Scope:
                      </span>
                      <ul className="space-y-1">
                        {phase.scope.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                        Architecture Maturity:
                      </span>
                      <span className="text-slate-300">{phase.architectureMaturity}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/20 text-[11px] text-rose-300">
                      <span className="font-semibold block text-[10px] uppercase">Explicitly Excluded:</span>
                      {phase.notIncluded.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11: Acceptance Criteria */}
          <section id="acceptance" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 11</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Definition of Done & Verifiable Acceptance Criteria
              </h2>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {blueprint.acceptanceCriteria.map((criterion, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 12: Deployment & Ops */}
          <section id="deployment" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 12</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Deployment Host, Database Isolation & Maintenance
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" /> Recommended Host
                </span>
                <p className="text-slate-200 font-medium">{blueprint.deploymentAndOps.recommendedHost}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-indigo-400" /> Database Isolation
                </span>
                <p className="text-slate-200 font-medium">{blueprint.deploymentAndOps.databaseIsolation}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" /> Backup Cadence
                </span>
                <p className="text-slate-200 font-medium">{blueprint.deploymentAndOps.backupCadence}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-amber-400" /> Maintenance Duties
                </span>
                <p className="text-slate-200 font-medium">{blueprint.deploymentAndOps.maintenanceDuties}</p>
              </div>
            </div>
          </section>

          {/* SECTION 13: Risks & Assumptions */}
          <section id="risks" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 13</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Project Risks, Mitigations & Ownership
              </h2>
            </div>

            <div className="space-y-3">
              {blueprint.risksAndAssumptions.map((r, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 text-rose-400 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{r.risk}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-5">
                      <strong className="text-slate-200">Mitigation:</strong> {r.mitigation}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400 shrink-0">
                    Owner: {r.owner}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 14: Connected Ecosystem */}
          <section id="ecosystem" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Section 14</span>
              <span className="text-slate-400">•</span>
              <h2 className="text-xl font-bold text-slate-100">
                Connected Zelvori Engineering Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href={`/services/${blueprint.relatedServiceSlug}/`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900 transition-all space-y-2 group"
              >
                <div className="text-[10px] font-mono uppercase text-cyan-400">Core Service</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-cyan-300">
                  {blueprint.relatedServiceTitle}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  View Service Specs <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <Link
                href={`/stories/#${blueprint.relatedStoryAnchor}`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900 transition-all space-y-2 group"
              >
                <div className="text-[10px] font-mono uppercase text-emerald-400">Field Story</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-emerald-300">
                  {blueprint.relatedStoryTitle}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <Link
                href={`/tools/`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900 transition-all space-y-2 group"
              >
                <div className="text-[10px] font-mono uppercase text-indigo-400">Interactive Lab</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-indigo-300">
                  Dev Lab Utilities
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  Test In Browser <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <Link
                href={`/security/`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900 transition-all space-y-2 group"
              >
                <div className="text-[10px] font-mono uppercase text-purple-400">Trust Centre</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-purple-300">
                  Security Architecture
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  Review Controls <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </section>

          {/* SECTION 15: Inquiry & Consultation CTA */}
          <section id="inquiry" className="scroll-mt-24">
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-blue-950/40 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  Commission {blueprint.shortTitle} Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every Zelvori engagement begins with an architecture consultation to tailor data models, compliance constraints, and integration roadmaps to your business operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Schedule Solution Architecture Call
                </Link>
                <Link
                  href="/payments/"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 font-semibold text-sm hover:bg-slate-800 transition-all"
                >
                  Request Project Advance Link
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> 100% Client Codebase Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Dedicated Database Sovereignty
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Transparent Milestone Roadmap
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
