import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { ArrowRight, Check, Rocket, TrendingUp, Building } from 'lucide-react';

const audienceIcons = [Rocket, TrendingUp, Building];
const audienceMetrics = [
  { label: 'Time-to-Market', val: '4–8 Weeks' },
  { label: 'Operational Gain', val: 'Eliminate 60% Manual Entry' },
  { label: 'Governance', val: 'SOC2 / Multi-Tenant RBAC' },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#060a12] border-t border-slate-800/80 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Engagement models aligned to your business stage.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether validating an early hypothesis, breaking through scaling bottlenecks, or modernizing enterprise software, we provide the architectural precision your scale demands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {siteConfig.solutions.map((sol, idx) => {
            const Icon = audienceIcons[idx % audienceIcons.length];
            const metric = audienceMetrics[idx % audienceMetrics.length];

            return (
              <div
                key={sol.audience}
                className="group p-8 bg-[#0b1120] hover:bg-[#0d1629] border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl flex flex-col justify-between transition-all duration-300 card-shine"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">
                      TIER 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    {sol.audience}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {sol.summary}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    {sol.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">{metric.label}</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5 font-mono">{metric.val}</div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Consult Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
