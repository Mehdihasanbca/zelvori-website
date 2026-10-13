'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Shield,
  FileText,
  ArrowLeftRight,
  CheckCircle2,
  Terminal,
  Zap,
} from 'lucide-react';

const automationScenarios = [
  {
    id: 'document',
    title: 'Document & Invoice OCR',
    subtitle: 'Unstructured PDF → Validated SQL Record',
    input: 'vendor_invoice_oct2026.pdf (12 Pages, Multi-Currency)',
    execution: 'Extracting line items, vendor tax IDs, itemized totals',
    output: '✓ 34 Line Items Validated (100% Schema Match via Zod)',
    destination: 'PostgreSQL // general_ledger_entries',
    latency: '1.2s total processing',
  },
  {
    id: 'triage',
    title: 'Client Inbound Ticket Triage',
    subtitle: 'Email Inbound → Intent Classification & SLA Routing',
    input: 'support_ticket_#8914: "API webhook returning 401 on renew"',
    execution: 'Semantic classification: Authentication / High Severity',
    output: '✓ Categorized & Priority Escalated to Tier-3 On-Call Lead',
    destination: 'Slack Alert + Internal Helpdesk Desk',
    latency: '0.4s triage dispatch',
  },
  {
    id: 'erp',
    title: 'Legacy ERP & CRM Synchronization',
    subtitle: 'On-Premise Database ↔ Modern Cloud Storefront',
    input: 'Warehouse Inventory Trigger (15,000 SKUs updated)',
    execution: 'Differential delta change-data-capture stream (CDC)',
    output: '✓ Zero Data Drift; E-commerce & Store Stock Synchronized',
    destination: 'REST & GraphQL Storefront APIs',
    latency: 'Sub-second real-time sync',
  },
];

export function AiAutomationSection() {
  const [activeScenario, setActiveScenario] = useState<string>('document');
  const current = automationScenarios.find((s) => s.id === activeScenario)!;

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0c1426] via-[#091122] to-[#070c17] border border-slate-800/90 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Radial ambient lighting */}
          <div
            className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Feature Spotlight // Intelligent Systems</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                Custom software & AI automation that eliminates operational drag.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Generic SaaS forces your business into cookie-cutter molds. We engineer proprietary software architectures, document extraction pipelines, and private AI integrations that replace manual busywork with deterministic code.
              </p>

              {/* 4 Architectural Safeguards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>Intelligent Document Extraction</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Convert invoices, receipts, and technical contracts into verified database records with zero manual transcription.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
                    <Shield className="w-4 h-4 text-sky-400" />
                    <span>Private Enterprise RAG</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Query proprietary technical documentation with zero-data-retention agreements—your data is never used to train public models.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                    <ArrowLeftRight className="w-4 h-4 text-indigo-400" />
                    <span>Legacy System Bridges</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Connect older on-premise ERP platforms with modern web interfaces via secure, event-driven webhooks.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span>Deterministic Schema Checks</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict Zod/Pydantic validation guarantees every output meets your database types before writing to disk.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-md transition-all whitespace-nowrap"
                >
                  <span>Explore AI Automation Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services/custom-software"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Custom ERP & Integrations</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Simulator Console */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-white">Live Pipeline Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                    DETERMINISTIC
                  </span>
                </div>

                {/* Scenario Toggle Selector */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
                  {automationScenarios.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScenario(s.id)}
                      className={`px-2.5 py-2 text-[11px] font-medium rounded-lg transition-all text-center truncate ${
                        activeScenario === s.id
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s.title.split(' ')[0]} Flow
                    </button>
                  ))}
                </div>

                {/* Scenario Terminal Display */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800/90 space-y-1">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>01. INGESTION PAYLOAD</span>
                      <span className="text-cyan-400">STAGE 1</span>
                    </div>
                    <div className="text-slate-200 text-xs truncate">
                      {current.input}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800/90 space-y-1">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>02. EXECUTION & PARSING</span>
                      <span className="text-sky-300">STAGE 2</span>
                    </div>
                    <div className="text-slate-300 text-xs">
                      {current.execution}
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800/90 space-y-1">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>03. VERIFIED MUTATION</span>
                      <span className="text-emerald-400">STAGE 3</span>
                    </div>
                    <div className="text-emerald-300 text-xs">
                      {current.output}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-0.5">
                      Target: {current.destination}
                    </div>
                  </div>
                </div>

                {/* Simulator Footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Benchmark: {current.latency}</span>
                  </div>
                  <span className="text-slate-300 font-mono">100% REPRODUCIBLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
