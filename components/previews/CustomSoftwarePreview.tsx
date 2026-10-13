'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Database,
  Lock,
  Layers,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Terminal,
  RotateCcw,
} from 'lucide-react';

export function CustomSoftwarePreview() {
  const [platformType, setPlatformType] = useState<'b2b_saas' | 'logistics' | 'fintech'>('b2b_saas');
  const [dbLayer, setDbLayer] = useState<'postgres' | 'redis_hybrid' | 'timescale'>('postgres');
  const [authLayer, setAuthLayer] = useState<'rbac' | 'sso' | 'biometric'>('rbac');

  const configs = {
    b2b_saas: {
      title: 'B2B Multi-Tenant SaaS Platform',
      desc: 'Isolated tenant schemas, self-service team management, usage metering, and Stripe billing.',
      sprints: '4 Sprints (8 Weeks)',
      stack: ['Next.js 15 App Router', 'Node.js / Express', 'Stripe Billing'],
    },
    logistics: {
      title: 'Real-Time Logistics & Fleet Telemetry',
      desc: 'GPS waypoint ingestion, route optimization, driver dispatch mobile clients, and proof-of-delivery.',
      sprints: '5 Sprints (10 Weeks)',
      stack: ['React Native Mobile', 'Go / High-Throughput API', 'WebSockets'],
    },
    fintech: {
      title: 'Regulated Transaction & Audit Engine',
      desc: 'Double-entry ledger accounting, immutable event streams, KYC document parsing, and fraud rules.',
      sprints: '6 Sprints (12 Weeks)',
      stack: ['TypeScript / NestJS', 'Event Sourcing', 'HMAC Verification'],
    },
  };

  const currentConfig = configs[platformType];

  return (
    <div className="space-y-6">
      {/* Configuration Header */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-semibold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Interactive Custom Platform Architecture Builder</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Configure system parameters below to generate a tailored technical architecture blueprint.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setPlatformType('b2b_saas');
            setDbLayer('postgres');
            setAuthLayer('rbac');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Configuration</span>
        </button>
      </div>

      {/* 3 Step Configurator Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Selector 1: Platform Type */}
        <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <Layers className="w-4 h-4" />
            <span>1. Target Platform Model</span>
          </div>
          <div className="space-y-2">
            {[
              { id: 'b2b_saas', label: 'B2B SaaS Portal' },
              { id: 'logistics', label: 'Fleet Logistics Hub' },
              { id: 'fintech', label: 'Fintech Ledger Engine' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPlatformType(item.id as any)}
                className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                  platformType === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{item.label}</span>
                {platformType === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Selector 2: Database Layer */}
        <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
            <Database className="w-4 h-4" />
            <span>2. Persistence Engine</span>
          </div>
          <div className="space-y-2">
            {[
              { id: 'postgres', label: 'PostgreSQL + RLS' },
              { id: 'redis_hybrid', label: 'Postgres + Redis Cache' },
              { id: 'timescale', label: 'Timescale Time-Series' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setDbLayer(item.id as any)}
                className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                  dbLayer === item.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{item.label}</span>
                {dbLayer === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Selector 3: Security & Auth */}
        <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
            <Lock className="w-4 h-4" />
            <span>3. Identity &amp; Governance</span>
          </div>
          <div className="space-y-2">
            {[
              { id: 'rbac', label: 'Role-Based Access (RBAC)' },
              { id: 'sso', label: 'Enterprise SAML / SSO' },
              { id: 'biometric', label: 'Biometric + MFA Auth' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAuthLayer(item.id as any)}
                className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                  authLayer === item.id
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{item.label}</span>
                {authLayer === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Generated Architecture Blueprint Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-cyan-500/30 space-y-6 shadow-2xl relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
              Generated Architecture Specification
            </span>
            <h4 className="text-xl font-bold text-white mt-0.5">{currentConfig.title}</h4>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 font-mono">Estimated Roadmap:</span>
            <div className="text-sm font-bold text-cyan-300 font-mono">{currentConfig.sprints}</div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {currentConfig.desc}
        </p>

        {/* Technical Architecture Topology Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-mono">CORE FRAMEWORK</div>
            <div className="text-xs font-semibold text-white">{currentConfig.stack[0]}</div>
            <div className="text-[10px] text-slate-500">Zero-overhead server components</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-mono">DATA &amp; CACHE</div>
            <div className="text-xs font-semibold text-white">
              {dbLayer === 'postgres' ? 'PostgreSQL (ACID RLS)' : dbLayer === 'redis_hybrid' ? 'Postgres + Redis 7' : 'TimescaleDB Cluster'}
            </div>
            <div className="text-[10px] text-slate-500">Automated migrations &amp; schemas</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 font-mono">GOVERNANCE &amp; AUTH</div>
            <div className="text-xs font-semibold text-white">
              {authLayer === 'rbac' ? 'Granular RBAC Engine' : authLayer === 'sso' ? 'Okta / Azure SAML 2.0' : 'WebAuthn Biometrics'}
            </div>
            <div className="text-[10px] text-slate-500">Signed session tokens &amp; CSRF protection</div>
          </div>
        </div>

        {/* Milestone Delivery Sequence */}
        <div className="p-4 rounded-2xl bg-black/40 border border-slate-800/80 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Milestone Sequence</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="text-cyan-400 font-mono text-[10px] font-bold">M1: DISCOVERY</div>
              <div className="text-[11px] text-slate-200">Schema Blueprint</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="text-sky-400 font-mono text-[10px] font-bold">M2: FOUNDATION</div>
              <div className="text-[11px] text-slate-200">Database &amp; Auth Core</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="text-indigo-400 font-mono text-[10px] font-bold">M3: LOGIC</div>
              <div className="text-[11px] text-slate-200">Business Engine &amp; API</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="text-emerald-400 font-mono text-[10px] font-bold">M4: HANDOVER</div>
              <div className="text-[11px] text-slate-200">Audits &amp; Git Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
