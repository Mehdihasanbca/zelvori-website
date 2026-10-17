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
  graphicType: 'healthcare' | 'education' | 'talent' | 'global';
}

const projects: Project[] = [
  {
    id: '01',
    category: 'Healthcare & Clinical ERP',
    discipline: 'Full-Stack Clinical Engineering',
    title: 'HealthOS — Enterprise Hospital Management Platform',
    tagline: 'Multi-tenant clinical operations suite covering OPD/IPD beds, eMAR, pharmacy POS, and Google Workspace automation.',
    description:
      'Production-engineered hospital management system built for high-reliability medical workflows. Features end-to-end patient lifecycle tracking, integrated pharmacy inventory, laboratory test dispatch, billing/TPA insurance workflows, and zero-mock transactional PostgreSQL 16 persistence with offline LAN/cloud hybrid deployment.',
    serviceSlug: 'web-development',
    technologies: ['Next.js 16', 'TypeScript', 'PostgreSQL 16', 'Tailwind CSS', 'Google Workspace API', 'WhatsApp Web'],
    capabilitiesDemonstrated: [
      'Multi-role clinical workflow: Doctor OPD/IPD, eMAR, Nurse vitals, and Pharmacy POS',
      'One-click Google Workspace integration (Calendar/Sheets/Docs) & WhatsApp patient notifications',
      'Strict HIPAA & DPDP compliance baseline with cryptographic audit logs and HTTP-only JWTs',
    ],
    metrics: [
      { label: 'Database Engine', value: 'PostgreSQL 16' },
      { label: 'Access Control', value: 'Strict RBAC' },
      { label: 'Deployment', value: 'Cloud & LAN' },
    ],
    graphicType: 'healthcare',
  },
  {
    id: '02',
    category: 'Educational Enterprise Software',
    discipline: 'Modular Institution Engineering',
    title: 'ZelvoriERP — School & Campus Operating System',
    tagline: 'High-governance educational ERP with student lifecycle management, audited fee ledger, and native offline installer.',
    description:
      'Enterprise campus operating system designed for schools, colleges, and educational groups. Provides complete multi-school isolation, student academic history, non-destructive fee collection with audited ledger reversals, and standalone Windows-native packaging via FrankenPHP with zero third-party cloud lock-in.',
    serviceSlug: 'business-software',
    technologies: ['Laravel', 'Vite', 'PostgreSQL', 'FrankenPHP', 'OpenAPI / REST', 'Tailwind CSS'],
    capabilitiesDemonstrated: [
      'Multi-school tenant isolation with student academic lifecycle and teacher-class allocations',
      'Non-destructive financial ledger with audited fee reversals and receipt generation',
      'Native Windows offline packaging (FrankenPHP) and zero-SaaS per-seat operational independence',
    ],
    metrics: [
      { label: 'Multi-Tenancy', value: 'School Isolated' },
      { label: 'Ledger Model', value: 'Audited Reversals' },
      { label: 'Runtime Engine', value: 'Native Windows' },
    ],
    graphicType: 'education',
  },
  {
    id: '03',
    category: 'HR Tech & Enterprise SaaS',
    discipline: 'FastAPI & Desktop Monolith',
    title: 'AVC RecruitOS — Enterprise Talent & ATS Platform',
    tagline: 'High-concurrency recruitment management system with 14 bounded contexts and Tauri desktop staff client.',
    description:
      'Comprehensive talent acquisition and recruitment CRM engineered on a strict Modular Monolith architecture. Features 14 isolated domain contexts for candidate pipeline management, Kanban-driven stage progression, automated resume screening, and a cross-platform Tauri desktop application for internal recruiting teams.',
    serviceSlug: 'ai-automation',
    technologies: ['FastAPI (Python)', 'React / Vite', 'Tauri Desktop', 'PostgreSQL', 'REST SDK', 'Tailwind CSS'],
    capabilitiesDemonstrated: [
      'Strict Modular Monolith backend with 14 bounded contexts powering talent lifecycle operations',
      'High-performance cross-platform Tauri desktop client engineered for internal recruiting staff',
      'Dynamic Kanban candidate pipeline tracking, automated resume parsing, and interview workflows',
    ],
    metrics: [
      { label: 'Architecture', value: '14 Bounded Contexts' },
      { label: 'Staff Client', value: 'Tauri Desktop' },
      { label: 'Backend Core', value: 'FastAPI Python' },
    ],
    graphicType: 'talent',
  },
  {
    id: '04',
    category: 'Global Enterprise Web Architecture',
    discipline: 'Zero-Runtime Client Engineering',
    title: 'Grand View Ceramic & Marble — International Architectural Portal',
    tagline: 'Ultra-fast, zero-runtime dependency international digital showcase engineered for Abu Dhabi luxury commercial sector.',
    description:
      'High-performance international digital marketing platform engineered for a prestigious Abu Dhabi luxury marble and ceramic contractor. Built with a zero-runtime dependency architecture, verified automated accessibility testing (Axe-Core), smooth motion choreography, and sub-second edge page delivery across GCC networks.',
    serviceSlug: 'custom-software',
    technologies: ['Vanilla JS / Static HTML', 'Playwright E2E', 'Axe-Core a11y', 'CSS Motion UI', 'i18n Architecture'],
    capabilitiesDemonstrated: [
      'Pure static architecture with zero browser runtime overhead delivering sub-second edge rendering',
      'Automated accessibility and cross-browser regression test suites verified via Axe-Core and Playwright',
      'Localized international architectural presentation tailored for luxury commercial developers in UAE',
    ],
    metrics: [
      { label: 'Performance', value: 'Sub-0.8s LCP' },
      { label: 'Accessibility', value: 'Axe-Core 100%' },
      { label: 'Market Region', value: 'Abu Dhabi / GCC' },
    ],
    graphicType: 'global',
  },
];

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'healthcare') return p.graphicType === 'healthcare';
          if (activeFilter === 'education') return p.graphicType === 'education';
          if (activeFilter === 'talent') return p.graphicType === 'talent';
          if (activeFilter === 'global') return p.graphicType === 'global';
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
              <span>Production Systems // Real Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Engineered software platforms in active production.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Real-world enterprise systems engineered by Zelvori: from hospital clinical ERPs and school operating systems to recruitment platforms and international client portals.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 p-1 liquid-glass-dock rounded-xl mb-12 w-fit overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Platforms ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('healthcare')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'healthcare'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Healthcare & ERP
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('education')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'education'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            School & Campus OS
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('talent')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'talent'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            HR Tech & ATS
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('global')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'global'
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            International Client Web
          </button>
        </div>

        {/* Selected Work Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 lg:p-12 liquid-glass-card rounded-3xl transition-all duration-300 shadow-2xl relative overflow-hidden group card-shine hover:border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Column: Project Case Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono text-cyan-400 font-bold">
                      SYSTEM {project.id}
                    </span>
                    <span className="text-slate-500">/</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-medium">
                      {project.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {project.discipline}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Architectural Milestones Delivered:
                    </div>
                    <ul className="space-y-2">
                      {project.capabilitiesDemonstrated.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Engineered With:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${project.serviceSlug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition group/link"
                    >
                      <span>Explore {project.discipline} Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-slate-600 hidden sm:inline">·</span>
                    <Link
                      href={`/contact?service=${project.serviceSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
                    >
                      <span>Request Architecture Walkthrough &rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: High-Fidelity SVG Architectural Visual */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-slate-800/90 bg-[#070b14] p-5 shadow-2xl overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                    
                    {/* Abstract Graphic Container */}
                    <div className="h-60 sm:h-72 w-full relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-[#0a0f1e] to-slate-900 border border-slate-800/80">
                      
                      {/* 1. HealthOS Graphic */}
                      {project.graphicType === 'healthcare' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="healthGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#06b6d4" stopOpacity="0.8" />
                              <stop offset="0.5" stopColor="#10b981" stopOpacity="0.7" />
                              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.8" />
                            </linearGradient>
                            <linearGradient id="healthGlow" x1="200" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#10b981" stopOpacity="0.25" />
                              <stop offset="1" stopColor="#070b14" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Floor Grid */}
                          <path d="M50 220 L200 280 L350 220 L200 160 Z" fill="url(#healthGlow)" stroke="#1e293b" strokeWidth="1" />
                          <path d="M100 200 L200 240 L300 200 L200 160 Z" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                          {/* Clinical Ward Pods */}
                          <rect x="90" y="110" width="55" height="75" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          <rect x="175" y="75" width="50" height="110" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                          <rect x="255" y="115" width="55" height="70" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                          {/* EMR / Vitals Pulse Beam */}
                          <path d="M70 145 L115 145 L125 125 L135 165 L145 135 L155 145 L200 145 L210 115 L220 175 L230 145 L330 145" stroke="url(#healthGrad)" strokeWidth="2.5" />
                          {/* Station Nodes */}
                          <circle cx="117" cy="145" r="4.5" fill="#06b6d4" />
                          <circle cx="200" cy="145" r="5" fill="#10b981" />
                          <circle cx="282" cy="145" r="4.5" fill="#3b82f6" />
                          {/* Telemetry Badge */}
                          <rect x="145" y="25" width="130" height="26" rx="6" fill="#0b1120" stroke="#10b981" strokeWidth="1" />
                          <text x="155" y="42" fill="#34d399" fontSize="10" fontFamily="monospace">EMR: POSTGRES 16</text>
                        </svg>
                      )}

                      {/* 2. ZelvoriERP Education Graphic */}
                      {project.graphicType === 'education' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="campusSweep" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          {/* Institutional concentric boundaries */}
                          <circle cx="200" cy="150" r="105" stroke="#1e293b" strokeWidth="1" />
                          <circle cx="200" cy="150" r="75" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                          <circle cx="200" cy="150" r="45" stroke="#334155" strokeWidth="1" />
                          <circle cx="200" cy="150" r="105" fill="url(#campusSweep)" />
                          {/* Interconnected Academic Hubs */}
                          <line x1="200" y1="150" x2="125" y2="95" stroke="#06b6d4" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="275" y2="105" stroke="#38bdf8" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="225" y2="225" stroke="#818cf8" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="115" y2="195" stroke="#06b6d4" strokeWidth="1.5" />
                          {/* Academic Nodes */}
                          <circle cx="200" cy="150" r="7" fill="#38bdf8" />
                          <circle cx="125" cy="95" r="5" fill="#22d3ee" />
                          <circle cx="275" cy="105" r="5" fill="#818cf8" />
                          <circle cx="225" cy="225" r="5" fill="#22d3ee" />
                          <circle cx="115" cy="195" r="5" fill="#38bdf8" />
                          {/* Status Tag */}
                          <rect x="235" y="65" width="125" height="24" rx="5" fill="#0b1120" stroke="#38bdf8" strokeWidth="1" />
                          <text x="245" y="81" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">CAMPUS: WIN / LAN</text>
                        </svg>
                      )}

                      {/* 3. AVC RecruitOS Graphic */}
                      {project.graphicType === 'talent' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="talentGrad" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0f172a" />
                              <stop offset="1" stopColor="#080d19" />
                            </linearGradient>
                          </defs>
                          {/* Kanban Columns */}
                          <rect x="65" y="60" width="80" height="175" rx="6" fill="url(#talentGrad)" stroke="#1e293b" />
                          <rect x="160" y="60" width="80" height="175" rx="6" fill="url(#talentGrad)" stroke="#334155" />
                          <rect x="255" y="60" width="80" height="175" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          {/* Candidate Cards */}
                          <rect x="75" y="75" width="60" height="28" rx="4" fill="#1e293b" />
                          <rect x="75" y="112" width="60" height="28" rx="4" fill="#1e293b" />
                          <rect x="170" y="75" width="60" height="28" rx="4" fill="#1e293b" />
                          <rect x="265" y="75" width="60" height="32" rx="4" fill="#0e7490" fillOpacity="0.4" stroke="#22d3ee" strokeDasharray="2 2" />
                          {/* Pipeline Transition Path */}
                          <path d="M135 89 L170 89" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                          <path d="M230 89 L265 89" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 2" />
                          <circle cx="170" cy="89" r="4" fill="#38bdf8" />
                          <circle cx="265" cy="89" r="4" fill="#818cf8" />
                          {/* Monolith Context Tag */}
                          <rect x="120" y="250" width="160" height="24" rx="4" fill="#0b1120" stroke="#1e293b" />
                          <text x="130" y="266" fill="#a7f3d0" fontSize="9" fontFamily="monospace">FASTAPI: 14 CONTEXTS</text>
                        </svg>
                      )}

                      {/* 4. Grand View Global Web Graphic */}
                      {project.graphicType === 'global' && (
                        <svg viewBox="0 0 400 300" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Geometric Architectural Polygonal Grid */}
                          <polygon points="120,80 200,40 280,80 200,120" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                          <polygon points="120,80 200,120 200,180 120,140" fill="#091122" stroke="#38bdf8" strokeWidth="1.2" />
                          <polygon points="280,80 200,120 200,180 280,140" fill="#070c17" stroke="#818cf8" strokeWidth="1.2" />
                          {/* Edge CDN Nodes */}
                          <circle cx="80" cy="170" r="16" fill="#0f172a" stroke="#22d3ee" />
                          <circle cx="320" cy="170" r="16" fill="#0f172a" stroke="#818cf8" />
                          <line x1="96" y1="170" x2="160" y2="150" stroke="#1e293b" strokeDasharray="3 2" />
                          <line x1="304" y1="170" x2="240" y2="150" stroke="#1e293b" strokeDasharray="3 2" />
                          <circle cx="200" cy="120" r="4.5" fill="#22d3ee" />
                          {/* GCC Distribution Tag */}
                          <rect x="130" y="220" width="140" height="24" rx="5" fill="#0b1120" stroke="#1e293b" />
                          <text x="140" y="236" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">UAE EDGE: SUB-0.8S</text>
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

        {/* Bottom Hub Invitation Link */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl liquid-glass-dock border-cyan-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Looking for full architectural deep-dives & blueprints?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse our comprehensive portfolio directory detailing data models, offline packaging, and enterprise security tiers.
            </p>
          </div>
          <Link
            href="/portfolio/"
            className="px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-cyan-950/40"
          >
            <span>Explore Full Portfolio Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
