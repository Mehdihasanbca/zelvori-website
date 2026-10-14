'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Code2, Cpu, Globe, Layers, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface Project {
  id: string;
  category: string;
  discipline: string;
  title: string;
  tagline: string;
  description: string;
  serviceSlug: string;
  technologies: string[];
  capabilitiesDemonstrated: string[];
  metrics: { label: string; value: string }[];
  graphicType: 'fintech' | 'fleet' | 'ai' | 'commerce';
}

const projects: Project[] = [
  {
    id: '01',
    category: 'SaaS Platform & Finance',
    discipline: 'Full-Stack Web Engineering',
    title: 'Multi-Tenant Treasury & Billing Infrastructure',
    tagline: 'High-throughput transactional web platform with automated ledger reconciliation.',
    description:
      'Representative architecture for a multi-tenant corporate treasury platform supporting dynamic tenant isolation, encrypted balance ledgers, and automated webhook subscriptions. Engineered with server-rendered Next.js frontends and transactional PostgreSQL backends.',
    serviceSlug: 'web-development',
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    capabilitiesDemonstrated: [
      'Multi-tenant database tenancy with row-level security (RLS)',
      'Sub-second payment reconciliation & idempotent webhook queues',
      'Granular Role-Based Access Control (RBAC) with cryptographic audit trails',
    ],
    metrics: [
      { label: 'Tenancy Isolation', value: 'Postgres RLS' },
      { label: 'Consistency', value: 'ACID Guaranteed' },
      { label: 'Rendering', value: 'Next.js SSR' },
    ],
    graphicType: 'fintech',
  },
  {
    id: '02',
    category: 'Mobile & Real-Time IoT',
    discipline: 'iOS & Android App Development',
    title: 'Global Fleet Telemetry & Dispatch Operations',
    tagline: 'Offline-first native mobile application with 60fps telemetry mapping.',
    description:
      'Representative engineering blueprint for cross-platform mobile dispatch logistics. Features encrypted offline caching, background GPS delta streaming, and automated bi-directional synchronization with cloud operations desks.',
    serviceSlug: 'mobile-apps',
    technologies: ['React Native', 'TypeScript', 'WebSockets', 'SQLite Local', 'Redis'],
    capabilitiesDemonstrated: [
      'Offline-first synchronization with conflict resolution state machines',
      'Smooth 60fps map rendering and battery-optimized GPS updates',
      'Instant push alerting and biometric device security authentication',
    ],
    metrics: [
      { label: 'Sync Pipeline', value: 'Delta Streaming' },
      { label: 'Target Refresh', value: '60 FPS Native' },
      { label: 'Local Store', value: 'Offline SQLite' },
    ],
    graphicType: 'fleet',
  },
  {
    id: '03',
    category: 'Enterprise AI & Automation',
    discipline: 'AI Integration & Pipelines',
    title: 'Intelligent Contract & Invoice Extraction Engine',
    tagline: 'Deterministic document parsing with zero-training private vector boundaries.',
    description:
      'Representative architecture for automated document ingestion converting unstructured PDFs into strictly validated PostgreSQL schemas. Uses high-accuracy optical extraction, confidence threshold validation, and human-in-the-loop review queues.',
    serviceSlug: 'ai-automation',
    technologies: ['Python', 'FastAPI', 'pgvector', 'Zod / Pydantic', 'Temporal'],
    capabilitiesDemonstrated: [
      'Zero-data-retention VPC architecture with enterprise privacy controls',
      'Strict schema validation ensuring type safety before database writes',
      'Automated background retry queues with exponential backoff telemetry',
    ],
    metrics: [
      { label: 'Schema Guard', value: 'Strict Validation' },
      { label: 'Data Boundary', value: 'Zero-Retention VPC' },
      { label: 'Review Flow', value: 'Human-in-the-Loop' },
    ],
    graphicType: 'ai',
  },
  {
    id: '04',
    category: 'Digital Commerce',
    discipline: 'Headless E-Commerce Architecture',
    title: 'Omnichannel Headless Storefront & Catalog Fabric',
    tagline: 'Ultra-fast modular e-commerce with real-time multi-warehouse inventory sync.',
    description:
      'Representative headless commerce storefront decoupled from the commerce engine. Delivers instant faceted search, localized multi-currency pricing, and bi-directional ERP inventory hooks that eliminate out-of-stock overselling.',
    serviceSlug: 'ecommerce',
    technologies: ['Next.js Commerce', 'GraphQL', 'Shopify Storefront', 'Meilisearch', 'Docker'],
    capabilitiesDemonstrated: [
      'Sub-second edge page transitions with static pre-rendering and dynamic cart hydration',
      'Automated stock delta synchronization across distributed fulfillment warehouses',
      'Multi-currency tax calculation and tokenized checkout security',
    ],
    metrics: [
      { label: 'Architecture', value: 'Headless API' },
      { label: 'Catalog State', value: 'Real-Time Sync' },
      { label: 'Edge Strategy', value: 'Static ISR' },
    ],
    graphicType: 'commerce',
  },
];

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'web') return p.serviceSlug === 'web-development';
          if (activeFilter === 'mobile') return p.serviceSlug === 'mobile-apps';
          if (activeFilter === 'ai') return p.serviceSlug === 'ai-automation';
          if (activeFilter === 'ecommerce') return p.serviceSlug === 'ecommerce';
          return true;
        });

  return (
    <section id="work" className="py-24 lg:py-32 relative scroll-mt-20 border-b border-slate-800/80">
      {/* Background radial lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[700px] h-[400px] bg-cyan-500/08 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Architectural Archetypes // Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Engineering breadth across digital tiers.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            A curated showcase of representative architectural implementations illustrating our engineering capabilities across web platforms, mobile binaries, enterprise systems, and intelligent automation.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 p-1 liquid-glass-dock rounded-xl mb-12 w-fit overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === 'web'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Web & SaaS
          </button>
          <button
            onClick={() => setActiveFilter('mobile')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === 'mobile'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Mobile & IoT
          </button>
          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === 'ai'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AI & Automation
          </button>
          <button
            onClick={() => setActiveFilter('ecommerce')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === 'ecommerce'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Headless Commerce
          </button>
        </div>

        {/* Selected Work Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 lg:p-12 liquid-glass-card rounded-3xl transition-all duration-300 shadow-2xl relative overflow-hidden group card-shine hover:border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Column: Project Case Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono text-cyan-400 font-bold">
                      ARCHETYPE {project.id}
                    </span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-400 font-medium">
                      {project.category}
                    </span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="text-sky-300 font-medium">
                      {project.discipline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-cyan-300 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Capabilities Demonstrated */}
                  <div className="space-y-2 pt-1 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Capabilities Demonstrated
                    </div>
                    {project.capabilitiesDemonstrated.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs font-mono text-slate-400 flex flex-wrap items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{project.technologies.join(' · ')}</span>
                    </div>

                    <Link
                      href={`/services/${project.serviceSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Service Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: High-Fidelity Abstract Technology Placeholder */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-slate-800/90 bg-[#070b14] p-5 shadow-2xl overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                    
                    {/* Abstract Graphic Container */}
                    <div className="h-60 sm:h-72 w-full relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-[#0a0f1e] to-slate-900 border border-slate-800/80">
                      
                      {/* 1. Fintech Graphic */}
                      {project.graphicType === 'fintech' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="fintechGrad1" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#06b6d4" stopOpacity="0.8" />
                              <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.6" />
                              <stop offset="1" stopColor="#6366f1" stopOpacity="0.8" />
                            </linearGradient>
                            <linearGradient id="gridGlow" x1="200" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#22d3ee" stopOpacity="0.25" />
                              <stop offset="1" stopColor="#070b14" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Isometric Grid Floor */}
                          <path d="M50 220 L200 280 L350 220 L200 160 Z" fill="url(#gridGlow)" stroke="#1e293b" strokeWidth="1" />
                          <path d="M100 200 L200 240 L300 200 L200 160 Z" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                          {/* Floating Transaction Pillars */}
                          <rect x="110" y="110" width="40" height="70" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          <rect x="180" y="70" width="40" height="110" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                          <rect x="250" y="120" width="40" height="60" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
                          {/* Dynamic Connection Waves */}
                          <path d="M130 110 C160 50, 200 50, 200 70" stroke="url(#fintechGrad1)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M200 70 C240 70, 270 90, 270 120" stroke="url(#fintechGrad1)" strokeWidth="2" />
                          {/* Live Data Vector Nodes */}
                          <circle cx="130" cy="110" r="4" fill="#22d3ee" />
                          <circle cx="200" cy="70" r="5" fill="#38bdf8" />
                          <circle cx="270" cy="120" r="4" fill="#818cf8" />
                          {/* Telemetry HUD overlays */}
                          <rect x="170" y="30" width="110" height="24" rx="5" fill="#0b1120" stroke="#1e293b" />
                          <text x="180" y="46" fill="#22d3ee" fontSize="10" fontFamily="monospace">TX_HASH: 0x98A1</text>
                        </svg>
                      )}

                      {/* 2. Fleet Telemetry Graphic */}
                      {project.graphicType === 'fleet' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          {/* Radar concentric rings */}
                          <circle cx="200" cy="150" r="100" stroke="#1e293b" strokeWidth="1" />
                          <circle cx="200" cy="150" r="70" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                          <circle cx="200" cy="150" r="40" stroke="#334155" strokeWidth="1" />
                          <circle cx="200" cy="150" r="100" fill="url(#radarSweep)" />
                          {/* Network Edge Nodes */}
                          <line x1="200" y1="150" x2="130" y2="100" stroke="#06b6d4" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="270" y2="110" stroke="#38bdf8" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="220" y2="220" stroke="#818cf8" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="120" y2="190" stroke="#06b6d4" strokeWidth="1.5" />
                          {/* Pulse Markers */}
                          <circle cx="200" cy="150" r="6" fill="#38bdf8" />
                          <circle cx="130" cy="100" r="4.5" fill="#22d3ee" />
                          <circle cx="270" cy="110" r="4.5" fill="#818cf8" />
                          <circle cx="220" cy="220" r="4.5" fill="#22d3ee" />
                          <circle cx="120" cy="190" r="4.5" fill="#38bdf8" />
                          {/* Geolocation Tag */}
                          <rect x="250" y="75" width="90" height="22" rx="4" fill="#0b1120" stroke="#1e293b" />
                          <text x="258" y="90" fill="#38bdf8" fontSize="9" fontFamily="monospace">PING: 14ms GPS</text>
                        </svg>
                      )}

                      {/* 3. AI Document Extraction Graphic */}
                      {project.graphicType === 'ai' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="docGrad" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0f172a" />
                              <stop offset="1" stopColor="#080d19" />
                            </linearGradient>
                          </defs>
                          {/* Layered Document Planes */}
                          <rect x="90" y="50" width="160" height="190" rx="8" fill="url(#docGrad)" stroke="#1e293b" />
                          <rect x="110" y="70" width="160" height="190" rx="8" fill="url(#docGrad)" stroke="#334155" />
                          <rect x="130" y="90" width="160" height="190" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          {/* Bounding box OCR coordinates */}
                          <rect x="150" y="115" width="120" height="14" rx="2" fill="#0e7490" fillOpacity="0.2" stroke="#22d3ee" strokeDasharray="2 2" />
                          <rect x="150" y="140" width="85" height="12" rx="2" fill="#0e7490" fillOpacity="0.2" stroke="#22d3ee" strokeDasharray="2 2" />
                          <rect x="150" y="165" width="110" height="12" rx="2" fill="#0e7490" fillOpacity="0.2" stroke="#22d3ee" strokeDasharray="2 2" />
                          {/* Neural Extraction Beam */}
                          <path d="M270 122 L330 90" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                          <path d="M235 146 L330 150" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 2" />
                          <circle cx="330" cy="90" r="5" fill="#38bdf8" />
                          <circle cx="330" cy="150" r="5" fill="#818cf8" />
                          <rect x="300" y="180" width="85" height="22" rx="4" fill="#0b1120" stroke="#1e293b" />
                          <text x="308" y="195" fill="#4ade80" fontSize="9" fontFamily="monospace">✓ SCHEMA: OK</text>
                        </svg>
                      )}

                      {/* 4. Headless Commerce Graphic */}
                      {project.graphicType === 'commerce' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Floating Faceted Polygonal Grid */}
                          <polygon points="120,80 200,40 280,80 200,120" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          <polygon points="120,80 200,120 200,180 120,140" fill="#091122" stroke="#38bdf8" strokeWidth="1.2" />
                          <polygon points="280,80 200,120 200,180 280,140" fill="#070c17" stroke="#818cf8" strokeWidth="1.2" />
                          {/* Secondary Floating Nodes */}
                          <circle cx="80" cy="170" r="16" fill="#0f172a" stroke="#22d3ee" />
                          <circle cx="320" cy="170" r="16" fill="#0f172a" stroke="#818cf8" />
                          <line x1="96" y1="170" x2="160" y2="150" stroke="#1e293b" strokeDasharray="3 2" />
                          <line x1="304" y1="170" x2="240" y2="150" stroke="#1e293b" strokeDasharray="3 2" />
                          <circle cx="200" cy="120" r="4.5" fill="#22d3ee" />
                          {/* Commerce Status Badge */}
                          <rect x="145" y="220" width="110" height="24" rx="5" fill="#0b1120" stroke="#1e293b" />
                          <text x="156" y="236" fill="#38bdf8" fontSize="10" fontFamily="monospace">SYNC: LIVE STOCK</text>
                        </svg>
                      )}
                    </div>

                    {/* Metric strip below graphic */}
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800/80 text-center">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="p-2 bg-slate-900/60 rounded-xl border border-slate-800/60">
                          <div className="text-[10px] text-slate-400 font-mono truncate">{m.label}</div>
                          <div className="text-xs font-bold text-cyan-300 font-mono mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
