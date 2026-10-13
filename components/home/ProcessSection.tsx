'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const processDeepDives = [
  {
    artifacts: ['Technical Architecture Document', 'Data Model & ERD Schema', 'Sprint Milestone Roadmap'],
    checkpoint: 'Engineering Scope Signoff',
  },
  {
    artifacts: ['Component Design System', 'Clickable Prototype Validation', 'OpenAPI 3.0 Contract Specification'],
    checkpoint: 'UI/UX & Contract Approval',
  },
  {
    artifacts: ['Bi-Weekly Staging Releases', 'Automated Integration Tests', 'PR Code Review Logs'],
    checkpoint: 'Sprint Verification Demos',
  },
  {
    artifacts: ['SOC2/OWASP Security Audit', 'Multi-Region Cloud Deployment', 'Telemetry & Health Probes'],
    checkpoint: 'Zero-Downtime Production Go-Live',
  },
  {
    artifacts: ['100% Repository & IP Handover', 'SLA Response & Performance Tuning', 'Continuous Feature Scaling'],
    checkpoint: 'Long-Term Strategic Advisory',
  },
];

export function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 lg:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
            Predictable, transparent execution from kickoff to evolution.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
            We operate in disciplined, structured phases to de-risk engineering, eliminate scope ambiguities, and deliver verifiable working software at every sprint milestone.
          </p>
        </div>

        {/* Desktop Process Step Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {siteConfig.process.map((item, idx) => {
            const isSelected = selectedStep === idx;

            return (
              <button
                key={item.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0f172a] to-[#0b1120] border-cyan-400/80 shadow-lg shadow-cyan-950/30'
                    : 'bg-[#0b1120] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-2xl font-bold font-mono transition-colors ${
                        isSelected ? 'text-cyan-300' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/80'
                          : 'text-slate-400 bg-slate-900 border border-slate-800'
                      }`}
                    >
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs text-cyan-400/90 font-medium mt-1">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-cyan-300 font-medium' : 'text-slate-400'}>
                    {isSelected ? 'Currently Viewing' : 'Click to inspect'}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1 text-cyan-400' : 'text-slate-400'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Deep-Dive Console */}
        <div className="p-6 sm:p-8 bg-[#0b1120] border border-cyan-500/30 rounded-2xl shadow-xl shadow-cyan-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">
                Phase {siteConfig.process[selectedStep].step} · Deep Dive
              </div>
              <h3 className="text-2xl font-bold text-white">
                {siteConfig.process[selectedStep].name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {siteConfig.process[selectedStep].description}
              </p>
              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium">Checkpoint: </span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">
                  {processDeepDives[selectedStep].checkpoint}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Verifiable Engineering Artifacts Delivered
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {processDeepDives[selectedStep].artifacts.map((art) => (
                  <div
                    key={art}
                    className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <div className="text-xs font-bold text-slate-100">{art}</div>
                    <div className="text-[10px] text-slate-400">Client Verified</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
