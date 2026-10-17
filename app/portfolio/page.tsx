import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
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
  HardDrive,
} from 'lucide-react';
import { PortfolioFilterGrid } from '@/components/portfolio/PortfolioFilterGrid';

export const metadata: Metadata = {
  title: 'Engineered Systems & Enterprise Portfolio',
  description:
    "Explore Zelvori's production software portfolio: HealthOS Hospital ERP, ZelvoriERP School System, AVC RecruitOS, and international client architectures.",
  alternates: {
    canonical: 'https://zelvori.software/portfolio/',
  },
  openGraph: {
    title: 'Engineered Systems & Enterprise Portfolio | Zelvori',
    description:
      'Real production platforms engineered by Zelvori: HealthOS clinical ERP, ZelvoriERP campus OS, AVC RecruitOS monolith, and international web portals.',
    url: 'https://zelvori.software/portfolio/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Enterprise Software Portfolio & Production Systems',
        type: 'image/png',
      },
    ],
  },
};

const PORTFOLIO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zelvori Enterprise Software Portfolio',
  description:
    'Production software systems and digital platforms engineered by Zelvori across healthcare, education, human resources, and international web architecture.',
  url: 'https://zelvori.software/portfolio/',
  itemListElement: [
    {
      '@type': 'SoftwareApplication',
      position: 1,
      name: 'HealthOS — Enterprise Hospital Management Platform',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web, Cloud & LAN',
      description:
        'Multi-tenant Hospital Management ERP with OPD/IPD wards, eMAR, pharmacy POS, and Google Workspace automation.',
    },
    {
      '@type': 'SoftwareApplication',
      position: 2,
      name: 'ZelvoriERP — Institutional Campus & School Operating System',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows Standalone & Web',
      description:
        'High-governance school management system with student lifecycle, fee engine, and offline Windows packaging.',
    },
    {
      '@type': 'SoftwareApplication',
      position: 3,
      name: 'AVC RecruitOS — Modular Monolith Talent & ATS Platform',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web & Desktop',
      description:
        'High-concurrency applicant tracking system with 14 bounded contexts and Tauri desktop staff client.',
    },
    {
      '@type': 'WebSite',
      position: 4,
      name: 'Grand View Ceramic & Marble — International Architectural Portal',
      description:
        'Zero-runtime dependency international architectural portal deployed for Abu Dhabi enterprise.',
    },
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PORTFOLIO_SCHEMA) }}
      />

      {/* Hero Header with Apple-inspired radial specular glow */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/15 to-emerald-500/10 blur-[140px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-cyan-400 font-semibold">Portfolio</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems // Verified Architectures</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Engineered platforms in active production.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the real-world software platforms engineered by Zelvori: from clinical hospital ERPs and campus operating systems to recruitment modular monoliths and international luxury web portals.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            <div className="p-4 rounded-2xl liquid-glass-dock border-white/10">
              <div className="text-[11px] font-mono uppercase text-slate-400">Data Sovereignty</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">100% Owned</div>
              <div className="text-[11px] text-emerald-400 mt-0.5">Zero SaaS Per-Seat Tax</div>
            </div>
            <div className="p-4 rounded-2xl liquid-glass-dock border-white/10">
              <div className="text-[11px] font-mono uppercase text-slate-400">Database Engine</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">PostgreSQL 16</div>
              <div className="text-[11px] text-cyan-400 mt-0.5">ACID Transactions</div>
            </div>
            <div className="p-4 rounded-2xl liquid-glass-dock border-white/10">
              <div className="text-[11px] font-mono uppercase text-slate-400">Deployment Models</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">Cloud & LAN</div>
              <div className="text-[11px] text-sky-400 mt-0.5">Offline-First Capable</div>
            </div>
            <div className="p-4 rounded-2xl liquid-glass-dock border-white/10">
              <div className="text-[11px] font-mono uppercase text-slate-400">Test Governance</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">Full Coverage</div>
              <div className="text-[11px] text-cyan-400 mt-0.5">Playwright & PHPUnit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Portfolio Filter & Systems Showcase */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilterGrid />
        </div>
      </section>

      {/* Cross-Link to Scope Builder & Discovery */}
      <section className="py-16 border-t border-white/10 bg-[#060a12]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl liquid-glass-card border-cyan-500/30 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Architecture Configurator</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to architect a tailored platform for your organization?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Use our live Architecture & Scope Configurator to select your technology stack, database layer, and security requirements to calculate estimated delivery sprints and export a structured project brief.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/tools/scope-builder/"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
              >
                <span>Launch Interactive Scope Builder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs sm:text-sm text-center transition"
              >
                <span>Book Direct Engineering Discovery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
