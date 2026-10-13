'use client';

import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCcw,
  ExternalLink,
  Menu,
  X,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
} from 'lucide-react';

export function WebDevPreview() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');
  const [ctaTriggered, setCtaTriggered] = useState(false);

  const stats = {
    '7d': { visitors: '14,290', conversion: '4.8%', latency: '82ms' },
    '30d': { visitors: '68,450', conversion: '5.2%', latency: '79ms' },
    '90d': { visitors: '215,800', conversion: '5.6%', latency: '76ms' },
  };

  const currentStats = stats[timeframe];

  return (
    <div className="space-y-6">
      {/* Device Toolbar Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">
            Viewport:
          </span>
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === 'desktop'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === 'tablet'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet (768px)</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === 'mobile'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (375px)</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="hidden sm:inline">Framework: Next.js 15 App Router</span>
          <button
            type="button"
            onClick={() => {
              setTimeframe('30d');
              setCtaTriggered(false);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Reset Preview State"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Simulated Device Frame Container */}
      <div className="flex justify-center transition-all duration-300 p-2 sm:p-6 bg-slate-950/60 rounded-3xl border border-slate-800/80 min-h-[580px]">
        <div
          className={`transition-all duration-300 bg-[#0a0f1d] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
            device === 'desktop'
              ? 'w-full max-w-5xl'
              : device === 'tablet'
              ? 'w-[768px] max-w-full'
              : 'w-[375px] max-w-full'
          }`}
        >
          {/* Simulated Browser Chrome Bar */}
          <div className="h-9 bg-slate-900/90 border-b border-slate-800 px-4 flex items-center justify-between text-[11px] text-slate-400 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 font-mono text-[10px] text-slate-400 flex items-center gap-1.5 max-w-[220px] truncate">
              <span className="text-emerald-400 font-bold">🔒</span>
              <span className="truncate">https://nova-analytics.demo/dashboard</span>
            </div>
            <div className="text-[10px] text-cyan-400 font-mono">100 FPS</div>
          </div>

          {/* Web App Content Area */}
          <div className="p-4 sm:p-8 flex-1 overflow-y-auto space-y-6">
            {/* Embedded Header */}
            <header className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                  N
                </div>
                <span className="font-bold text-white text-sm tracking-tight">Nova Analytics</span>
              </div>

              {device !== 'mobile' ? (
                <nav className="flex items-center gap-5 text-xs text-slate-300 font-medium">
                  <span className="text-cyan-400 font-semibold cursor-pointer">Overview</span>
                  <span className="hover:text-white cursor-pointer">Funnels</span>
                  <span className="hover:text-white cursor-pointer">Cohorts</span>
                  <span className="hover:text-white cursor-pointer">Settings</span>
                </nav>
              ) : (
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300"
                  aria-label="Toggle demo mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              )}
            </header>

            {/* Mobile Drawer if open */}
            {device === 'mobile' && mobileMenuOpen && (
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-200">
                <div className="p-1.5 text-cyan-400 font-semibold">Overview (Active)</div>
                <div className="p-1.5 hover:bg-slate-800 rounded">Funnels</div>
                <div className="p-1.5 hover:bg-slate-800 rounded">Cohorts</div>
                <div className="p-1.5 hover:bg-slate-800 rounded">Settings</div>
              </div>
            )}

            {/* App Hero / Title & Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Production Analytics Dashboard</h3>
                <p className="text-xs text-slate-400">Real-time telemetry and edge latency distribution.</p>
              </div>

              {/* Timeframe pill selector */}
              <div className="flex items-center p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs self-start">
                {(['7d', '30d', '90d'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeframe(t)}
                    className={`px-2.5 py-1 rounded-md transition-all font-mono text-[11px] ${
                      timeframe === t
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Unique Visitors</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white mt-1 font-mono">{currentStats.visitors}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">+14.2% vs previous period</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Goal Conversion</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white mt-1 font-mono">{currentStats.conversion}</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">SSR optimized checkout flow</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>TTFB Latency</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white mt-1 font-mono">{currentStats.latency}</div>
                <div className="text-[10px] text-amber-300 mt-0.5">Edge-cached static payload</div>
              </div>
            </div>

            {/* Simulated Interactive Action Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Next.js Component Verification</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Test click handlers, client state updates, and accessible keyboard focus within this sandbox.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCtaTriggered(true)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow whitespace-nowrap transition-all"
              >
                <span>Trigger Interactive Action</span>
              </button>
            </div>

            {/* Feedback Alert if Action Triggered */}
            {ctaTriggered && (
              <div
                role="status"
                className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-xs text-emerald-200 flex items-center justify-between"
              >
                <span>✓ Interactive action successfully handled! Client state synchronized with zero page reload.</span>
                <button
                  type="button"
                  onClick={() => setCtaTriggered(false)}
                  className="text-emerald-400 font-bold ml-2 underline"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
