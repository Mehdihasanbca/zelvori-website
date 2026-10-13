import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Database,
  Lock,
  Workflow,
  Sparkles,
  HelpCircle,
  Clock,
  Compass,
  FileCode2,
} from 'lucide-react';
import { SolutionsFilterGrid } from '@/components/solutions/SolutionsFilterGrid';
import { CompetitivePositioningTable } from '@/components/solutions/CompetitivePositioningTable';

export const metadata: Metadata = {
  title: 'Industry Solutions & Architecture Blueprints | Zelvori',
  description:
    'Production-ready reference architectures and delivery blueprints for 9 major industries. Zero SaaS per-seat tax, complete database sovereignty, and transparent milestone engineering.',
  alternates: {
    canonical: 'https://zelvori.software/solutions/',
  },
  openGraph: {
    title: 'Industry Solutions & Architecture Blueprints | Zelvori',
    description:
      'Production-ready reference architectures and delivery blueprints for 9 major industries. Zero SaaS per-seat tax, complete database sovereignty, and transparent milestone engineering.',
    url: 'https://zelvori.software/solutions/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Industry Solutions & Architecture Blueprints',
        type: 'image/png',
      },
    ],
  },
};

const FIVE_CORE_QUESTIONS = [
  {
    number: '01',
    question: 'Who is this for?',
    answer:
      'Growing businesses, clinic owners, law partners, e-commerce founders, and operations leaders who have outgrown generic no-code templates or are bleeding cash on SaaS per-seat licenses.',
    tag: 'Target Audience',
  },
  {
    number: '02',
    question: 'What problem does it solve?',
    answer:
      'Replaces fragile plugin spaghetti, vendor lock-in, and unpredictable SaaS subscription inflation with modular, secure, high-performance web systems tailored to your exact workflows.',
    tag: 'Core Value',
  },
  {
    number: '03',
    question: 'What is the architecture?',
    answer:
      'A 6-tier cloud-native stack: edge CDN caching, Next.js application gateway, deterministic state machines, isolated SQL database, and resilient external API circuit breakers.',
    tag: 'Zero-Trust Stack',
  },
  {
    number: '04',
    question: 'How is it delivered?',
    answer:
      'Structured 3-phase roadmaps: MVP (4–8 weeks), Growth expansion, and Enterprise scale. Every phase features verifiable acceptance criteria and anti-scope-creep boundaries.',
    tag: 'Delivery Lifecycle',
  },
  {
    number: '05',
    question: 'Why choose Zelvori?',
    answer:
      'You own 100% of the intellectual property and code repository. No per-user subscription fees, no platform commission tax, and total database sovereignty in your own cloud account.',
    tag: 'The Zelvori Advantage',
  },
];

const DELIVERY_PHASES = [
  {
    step: 'Phase 01',
    title: 'Architecture Blueprint & Scope Freeze',
    timeline: 'Weeks 1–2',
    description:
      'We model your exact user personas, database schemas, RBAC permissions, and third-party API dependencies before writing production code. No ambiguous requirements.',
  },
  {
    step: 'Phase 02',
    title: 'Core Engine & MVP Implementation',
    timeline: 'Weeks 3–8',
    description:
      'We build the working application using the Zelvori Core Framework SDK, automated tests, and edge-cached UI. You test working builds every single sprint.',
  },
  {
    step: 'Phase 03',
    title: 'Security Audits & Hardening Gate',
    timeline: 'Week 9',
    description:
      'Automated OWASP top-10 vulnerability scans, data encryption verification, offline recovery drills, and strict role segregation checks prior to live cutover.',
  },
  {
    step: 'Phase 04',
    title: 'Production Handover & Full IP Transfer',
    timeline: 'Cutover & Beyond',
    description:
      'Full source code repository transfer to your GitHub account, deployment scripts in your cloud provider, operational documentation, and ongoing SLA maintenance options.',
  },
];

export default function SolutionsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industry Solutions & Architecture Blueprints | Zelvori',
    description:
      'Production-ready reference architectures and delivery blueprints for 9 major industries by Zelvori.',
    url: 'https://zelvori.software/solutions/',
    publisher: {
      '@type': 'Organization',
      name: 'Zelvori',
      url: 'https://zelvori.software',
      logo: 'https://zelvori.software/images/brand/zelvori-logo.png',
    },
    hasPart: [
      {
        '@type': 'TechArticle',
        name: 'Healthcare, Doctors & Clinics Solution Blueprint',
        url: 'https://zelvori.software/solutions/healthcare/',
      },
      {
        '@type': 'TechArticle',
        name: 'Lawyers, Law Firms & Legal Practice Solution Blueprint',
        url: 'https://zelvori.software/solutions/legal/',
      },
      {
        '@type': 'TechArticle',
        name: 'CRM, ERP & Business Operations Solution Blueprint',
        url: 'https://zelvori.software/solutions/business-operations/',
      },
      {
        '@type': 'TechArticle',
        name: 'Amazon & Flipkart-Style Multi-Vendor Marketplace Solution Blueprint',
        url: 'https://zelvori.software/solutions/marketplace/',
      },
      {
        '@type': 'TechArticle',
        name: 'Zomato-Style Food Ordering & Multi-Outlet Solution Blueprint',
        url: 'https://zelvori.software/solutions/food-delivery/',
      },
      {
        '@type': 'TechArticle',
        name: 'D2C Brands, Fashion & High-Volume E-Commerce Solution Blueprint',
        url: 'https://zelvori.software/solutions/ecommerce/',
      },
      {
        '@type': 'TechArticle',
        name: 'Creators, Media & Digital Subscriptions Solution Blueprint',
        url: 'https://zelvori.software/solutions/creators/',
      },
      {
        '@type': 'TechArticle',
        name: 'Education, Academies & EdTech Solution Blueprint',
        url: 'https://zelvori.software/solutions/education/',
      },
      {
        '@type': 'TechArticle',
        name: 'Field Service, Logistics & Fleet Operations Solution Blueprint',
        url: 'https://zelvori.software/solutions/logistics/',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Hero Section */}
          <section className="space-y-8 text-center max-w-4xl mx-auto pt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Phase 18 Master Architecture Blueprints</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Engineered Industry Solutions &{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Production Blueprints
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop stitching together disconnected SaaS plugins and paying escalating per-user taxes. Explore our comprehensive reference architectures for 9 sectors, designed for complete database sovereignty, zero-trust security, and high-velocity business workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#blueprints"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
              >
                Browse All 9 Blueprints
              </a>
              <Link
                href="/contact/"
                className="px-6 py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                Book Architecture Review
              </Link>
            </div>
          </section>

          {/* The 5 Core Questions Answer Cards */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Strategic Foundation
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                The 5 Core Questions Every Decision Maker Asks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {FIVE_CORE_QUESTIONS.map((q) => (
                <div
                  key={q.number}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {q.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {q.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-100">{q.question}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitive Positioning Matrix (Build vs Buy vs DIY) */}
          <section className="space-y-6 pt-6">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Build vs Buy vs DIY
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Competitive Positioning & Economic Trade-offs
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                Comparing DIY website builders, commercial SaaS suites, self-hosted open-source stacks, and Zelvori custom engineering.
              </p>
            </div>

            <CompetitivePositioningTable />
          </section>

          {/* The 9 Solution Blueprints Hub Grid */}
          <section id="blueprints" className="space-y-8 pt-8 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Architecture Catalog
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Explore the 9 Industry Blueprints
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                Each blueprint contains complete personas, data classification schemas, 6-tier architecture diagrams, RBAC models, circuit breaker integrations, and phased delivery milestones.
              </p>
            </div>

            <SolutionsFilterGrid />
          </section>

          {/* Delivery Lifecycle: How Zelvori Builds & Ships */}
          <section className="space-y-8 pt-8 border-t border-slate-800">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Engineering Discipline
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                How Zelvori Delivers Production Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                From initial schema blueprinting to automated security hardening gates and final intellectual property handover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {DELIVERY_PHASES.map((p, idx) => (
                <div
                  key={p.step}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3 relative group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {p.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {p.timeline}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100">{p.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Callout & Next Steps */}
          <section className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-blue-950/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Ready to Architect Your Custom Platform?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Schedule a confidential architecture walkthrough with a Zelvori principal engineer. We will review your data sovereignty constraints, transaction volume, and operational roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
              >
                Schedule Architecture Consultation
              </Link>
              <Link
                href="/payments/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                Request Project Advance Link
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <Link href="/security/" className="hover:text-slate-200 transition-colors">
                Security & Trust Centre
              </Link>
              <span>•</span>
              <Link href="/stories/" className="hover:text-slate-200 transition-colors">
                Client Field Stories
              </Link>
              <span>•</span>
              <Link href="/tools/" className="hover:text-slate-200 transition-colors">
                Zelvori Dev Lab
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
