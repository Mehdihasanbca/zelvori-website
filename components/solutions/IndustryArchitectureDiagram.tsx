'use client';

import React, { useState } from 'react';
import {
  Users,
  Globe,
  Server,
  Cpu,
  Database,
  Share2,
  ShieldCheck,
  Lock,
  ArrowDown,
  Layers,
  ArrowRight,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import type { SolutionBlueprint } from '@/lib/solutions-data';

interface IndustryArchitectureDiagramProps {
  blueprint: SolutionBlueprint;
}

const TIER_ICONS = [
  Users,    // Layer 01: Client & Touchpoints
  Globe,    // Layer 02: Edge & Security
  Server,   // Layer 03: Application & Gateway
  Cpu,      // Layer 04: Business Logic & State Machines
  Database, // Layer 05: Data & Storage
  Share2,   // Layer 06: External Integrations
];

const TIER_COLORS = [
  { border: 'border-cyan-500/40', bg: 'bg-cyan-500/10', text: 'text-cyan-400', badge: 'bg-cyan-950/60 text-cyan-300' },
  { border: 'border-blue-500/40', bg: 'bg-blue-500/10', text: 'text-blue-400', badge: 'bg-blue-950/60 text-blue-300' },
  { border: 'border-indigo-500/40', bg: 'bg-indigo-500/10', text: 'text-indigo-400', badge: 'bg-indigo-950/60 text-indigo-300' },
  { border: 'border-purple-500/40', bg: 'bg-purple-500/10', text: 'text-purple-400', badge: 'bg-purple-950/60 text-purple-300' },
  { border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-400', badge: 'bg-emerald-950/60 text-emerald-300' },
  { border: 'border-amber-500/40', bg: 'bg-amber-500/10', text: 'text-amber-400', badge: 'bg-amber-950/60 text-amber-300' },
];

export function IndustryArchitectureDiagram({ blueprint }: IndustryArchitectureDiagramProps) {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'layers' | 'flow'>('layers');

  const activeLayer = blueprint.architectureLayers[selectedTierIndex] || blueprint.architectureLayers[0];
  const activeColor = TIER_COLORS[selectedTierIndex] || TIER_COLORS[0];
  const ActiveIcon = TIER_ICONS[selectedTierIndex] || Users;

  return (
    <div className="w-full space-y-6">
      {/* Control Bar: Mode Toggle and Summary */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100">
              {blueprint.shortTitle} Reference Architecture
            </h4>
            <p className="text-xs text-slate-400">
              6-Tier Zero-Trust Architecture with Explicit Boundary Enforcement
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setViewMode('layers')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'layers'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Tier Stack View
          </button>
          <button
            onClick={() => setViewMode('flow')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'flow'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Security Gates View
          </button>
        </div>
      </div>

      {viewMode === 'layers' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive 6-Tier Stack Visualizer */}
          <div className="lg:col-span-7 space-y-3">
            {blueprint.architectureLayers.map((layer, idx) => {
              const isSelected = selectedTierIndex === idx;
              const Icon = TIER_ICONS[idx] || Users;
              const color = TIER_COLORS[idx] || TIER_COLORS[0];

              return (
                <div key={layer.number} className="relative group">
                  <button
                    onClick={() => setSelectedTierIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? `${color.border} ${color.bg} shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-500/30`
                        : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg border ${
                            isSelected
                              ? `${color.border} ${color.bg} ${color.text}`
                              : 'border-slate-800 bg-slate-800/60 text-slate-400 group-hover:text-slate-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                              Layer {layer.number}
                            </span>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                                isSelected ? color.badge : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {layer.boundary}
                            </span>
                          </div>
                          <h5 className="text-sm font-semibold text-slate-100 mt-0.5">
                            {layer.name}
                          </h5>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-medium ${
                            isSelected ? color.text : 'text-slate-400 group-hover:text-slate-300'
                          }`}
                        >
                          {isSelected ? 'Inspecting' : 'Inspect Tier'}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Component badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {layer.components.slice(0, 3).map((comp) => (
                        <span
                          key={comp.name}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950/60 text-slate-300 border border-slate-800/80"
                        >
                          {comp.name}
                        </span>
                      ))}
                      {layer.components.length > 3 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-950/60 text-slate-400 border border-slate-800/80">
                          +{layer.components.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Flow connector line between tiers */}
                  {idx < blueprint.architectureLayers.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-3 bg-slate-800 flex items-center justify-center">
                        <ArrowDown className="w-2.5 h-2.5 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Tier Deep-Dive Inspector */}
          <div className="lg:col-span-5 sticky top-24 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${activeColor.border} ${activeColor.bg} ${activeColor.text}`}>
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Layer {activeLayer.number} Boundary
                  </div>
                  <h4 className="text-base font-bold text-slate-100">{activeLayer.name}</h4>
                  <div className="text-xs text-slate-400 mt-0.5">{activeLayer.boundary}</div>
                </div>
              </div>
            </div>

            {/* Components Section */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                Architecture Components
              </span>
              <ul className="space-y-2">
                {activeLayer.components.map((comp) => (
                  <li
                    key={comp.name}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{comp.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {comp.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{comp.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Gate for Layer */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Mandatory Security Gate
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {activeLayer.securityGate}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Security Gates Pipeline View */
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-6 shadow-2xl">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-cyan-400" />
              6-Layer Boundary Security Gates
            </h4>
            <p className="text-xs text-slate-400">
              Zero-Trust enforcement points for {blueprint.title}
            </p>
          </div>

          <div className="space-y-3">
            {blueprint.architectureLayers.map((layer, idx) => {
              const Icon = TIER_ICONS[idx] || Users;
              const color = TIER_COLORS[idx] || TIER_COLORS[0];

              return (
                <div
                  key={layer.number}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                      {layer.number}
                    </span>
                    <div className={`p-2 rounded-lg border ${color.border} ${color.bg} ${color.text}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-200">
                        {layer.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        ({layer.boundary})
                      </span>
                    </div>
                    <p className="text-xs text-emerald-300 font-mono leading-relaxed">
                      {layer.securityGate}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {layer.components.length} components
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-cyan-300">Zero-Trust Boundary Assurance:</strong> Every layer independently validates JWT signatures, tenant org parameters, and request schemas. Data never bypasses the application policy boundary directly into storage.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
