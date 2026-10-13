'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  Server,
  Smartphone,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
  Layers,
  Database,
  Terminal,
  Activity,
  Laptop,
  Tablet,
} from 'lucide-react';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'interfaces' | 'automation'>('architecture');
  const [selectedNode, setSelectedNode] = useState<string>('gateway');
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
      {/* Background radial spotlights & tech grid */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/08 to-transparent blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-[450px] h-[350px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Subtle editorial kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Zelvori</span>
              <span className="text-slate-500" aria-hidden="true">/</span>
              <span className="text-slate-400 font-medium tracking-normal normal-case">Digital Product Development Partner</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.08] text-balance">
              Engineering Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                Digital Reality.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl text-balance">
              We engineer high-performance web applications, native mobile apps, bespoke business software, and intelligent workflow automation for ambitious founders and global enterprises.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
              >
                <span>Schedule Project Discovery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 whitespace-nowrap"
              >
                <span>Explore 6 Core Services</span>
              </Link>
            </div>

            {/* Trust and Engineering Markers */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-300">100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium text-slate-300">TypeScript & Cloud Native</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-medium text-slate-300">Global Sprint Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: World-Class Interactive Software Console */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Outer decorative glow halo */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Console Box */}
              <div className="relative glass-panel rounded-2xl border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Console Window Header */}
                <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                      zelvori // engineering-console
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      SYSTEM ARCHITECTURE
                    </span>
                  </div>
                </div>

                {/* Interactive Tab Switcher */}
                <div className="p-3 bg-[#080d1a] border-b border-slate-800/70 flex items-center justify-between gap-2 overflow-x-auto">
                  <div className="flex items-center gap-1 p-0.5 bg-slate-900/90 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                        activeTab === 'architecture'
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      01. Architecture Topology
                    </button>
                    <button
                      onClick={() => setActiveTab('interfaces')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                        activeTab === 'interfaces'
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      02. Cross-Platform UI
                    </button>
                    <button
                      onClick={() => setActiveTab('automation')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                        activeTab === 'automation'
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      03. AI Data Fabric
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 hidden sm:block">
                    v2.4-STABLE
                  </span>
                </div>

                {/* Tab 1: Architecture Topology */}
                {activeTab === 'architecture' && (
                  <div className="p-5 space-y-4">
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>Click any tier to inspect architectural specifications:</span>
                      <span className="font-mono text-cyan-400 text-[11px]">Active: {selectedNode.toUpperCase()}</span>
                    </div>

                    {/* Nodes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Node 1: Client Layer */}
                      <button
                        onClick={() => setSelectedNode('clients')}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedNode === 'clients'
                            ? 'bg-cyan-950/40 border-cyan-400/80 shadow-md shadow-cyan-950/30'
                            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-[10px] font-mono text-slate-400">EDGE</span>
                        </div>
                        <div className="text-xs font-bold text-slate-100">Clients & Web</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Next.js · React Native</div>
                      </button>

                      {/* Node 2: API Gateway */}
                      <button
                        onClick={() => setSelectedNode('gateway')}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedNode === 'gateway'
                            ? 'bg-cyan-950/40 border-cyan-400/80 shadow-md shadow-cyan-950/30'
                            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Server className="w-4 h-4 text-sky-400" />
                          <span className="text-[10px] font-mono text-slate-400">GATEWAY</span>
                        </div>
                        <div className="text-xs font-bold text-slate-100">API & Microservices</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">TypeScript · RBAC</div>
                      </button>

                      {/* Node 3: Storage & Intelligence */}
                      <button
                        onClick={() => setSelectedNode('data')}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedNode === 'data'
                            ? 'bg-cyan-950/40 border-cyan-400/80 shadow-md shadow-cyan-950/30'
                            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Database className="w-4 h-4 text-indigo-400" />
                          <span className="text-[10px] font-mono text-slate-400">DATA & AI</span>
                        </div>
                        <div className="text-xs font-bold text-slate-100">Postgres & LLMs</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">ACID · Vector Sync</div>
                      </button>
                    </div>

                    {/* Detailed Active Node Inspector Box */}
                    <div className="p-4 bg-slate-950/90 border border-slate-800/90 rounded-xl space-y-2.5">
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
                        <span className="font-semibold text-slate-200">
                          {selectedNode === 'clients' && 'Client Presentation Architecture'}
                          {selectedNode === 'gateway' && 'Business Logic & Secure API Fabric'}
                          {selectedNode === 'data' && 'Database & Intelligent Pipeline Tier'}
                        </span>
                        <span className="font-mono text-emerald-400 text-[11px]">
                          {selectedNode === 'clients' && 'SUB-SECOND FCP'}
                          {selectedNode === 'gateway' && 'HIGH AVAILABILITY'}
                          {selectedNode === 'data' && 'ACID COMPLIANT'}
                        </span>
                      </div>

                      <div className="text-xs text-slate-300 leading-relaxed">
                        {selectedNode === 'clients' &&
                          'Server-rendered Next.js components paired with cross-platform React Native mobile binaries. Zero layout shifts, optimized image pipelines, and fluid 60fps animations.'}
                        {selectedNode === 'gateway' &&
                          'Decoupled microservice gateways with strict TypeScript schema contracts, cryptographically signed session tokens, granular role-based access control, and distributed rate limiting.'}
                        {selectedNode === 'data' &&
                          'PostgreSQL transactional schemas with foreign-key guarantees, Redis caching queues, and private semantic vector indexes that never leak company data to public LLM training sets.'}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-slate-400">
                        <span>ROUTING: LOW-LATENCY EDGE</span>
                        <span>·</span>
                        <span>SECURITY: RBAC & ZERO TRUST</span>
                        <span>·</span>
                        <span>OWNERSHIP: 100% REPOSITORY TRANSFER</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Cross-Platform UI */}
                {activeTab === 'interfaces' && (
                  <div className="p-5 space-y-4">
                    {/* Viewport Selector */}
                    <div className="flex items-center justify-between text-xs pb-1">
                      <span className="text-slate-400">Multi-Device Responsive Preview:</span>
                      <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800">
                        <button
                          onClick={() => setDevicePreview('desktop')}
                          className={`p-1.5 rounded ${devicePreview === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'}`}
                          title="Desktop View"
                        >
                          <Laptop className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDevicePreview('tablet')}
                          className={`p-1.5 rounded ${devicePreview === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'}`}
                          title="Tablet View"
                        >
                          <Tablet className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDevicePreview('mobile')}
                          className={`p-1.5 rounded ${devicePreview === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'}`}
                          title="Mobile View"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Simulated SaaS Dashboard Interface */}
                    <div className={`p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-3 transition-all duration-300 mx-auto ${
                      devicePreview === 'mobile' ? 'max-w-[280px]' : devicePreview === 'tablet' ? 'max-w-[380px]' : 'w-full'
                    }`}>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                        <span className="font-semibold text-white">Operations Console</span>
                        <span className="text-cyan-400 font-mono">Q3 Performance</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">Total Volume</div>
                          <div className="text-sm font-bold text-white mt-0.5">$842,500</div>
                          <div className="text-[10px] text-emerald-400 mt-1">↑ +24.8% MoM</div>
                        </div>
                        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <div className="text-[10px] text-slate-400">Active Workflows</div>
                          <div className="text-sm font-bold text-white mt-0.5">14,290</div>
                          <div className="text-[10px] text-cyan-400 mt-1">99.98% Accuracy</div>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1 text-[11px]">
                        <div className="flex items-center justify-between text-slate-300 p-1.5 bg-slate-900/60 rounded border border-slate-800/60">
                          <span className="truncate">Enterprise ERP Sync</span>
                          <span className="text-emerald-400 shrink-0 font-mono">Synced</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 p-1.5 bg-slate-900/60 rounded border border-slate-800/60">
                          <span className="truncate">Client Portal Ingestion</span>
                          <span className="text-cyan-400 shrink-0 font-mono">0.4s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: AI Data Fabric */}
                {activeTab === 'automation' && (
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Real-time Document & Workflow Extraction:</span>
                      <span className="text-emerald-400 font-mono text-[11px]">PIPELINE ACTIVE</span>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="text-slate-200">contract_master_v3.pdf</span>
                        </div>
                        <span className="text-cyan-400 text-[11px]">Extracted 42 Fields</span>
                      </div>

                      <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-400" />
                          <span className="text-slate-200">Stripe Webhook Dispatch</span>
                        </div>
                        <span className="text-sky-300 text-[11px]">Automated Reconciliation</span>
                      </div>

                      <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="text-slate-200">Vector Knowledge Indexing</span>
                        </div>
                        <span className="text-indigo-300 text-[11px]">Zero Training Leakage</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Deterministic Schema: Zod & Pydantic</span>
                      <span className="text-slate-300">Human-In-The-Loop Fallbacks</span>
                    </div>
                  </div>
                )}

                {/* Console Footer Status Strip */}
                <div className="px-5 py-3 bg-[#080d19] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Engineered by Zelvori Senior Leads</span>
                  </div>
                  <span className="text-slate-300 font-mono">100% CODE OWNERSHIP</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
