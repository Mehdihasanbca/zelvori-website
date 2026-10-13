import React from 'react';
import { siteConfig } from '@/lib/site-config';
import {
  Compass,
  Palette,
  Terminal,
  Network,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';

const capabilityIcons = [
  Compass,
  Palette,
  Terminal,
  Network,
  ShieldCheck,
  RefreshCw,
];

const capabilityDetails = [
  { artifact: 'System Blueprints & RFCs', metric: 'De-Risked Architecture' },
  { artifact: 'Design Tokens & Design Systems', metric: 'WCAG AA Compliant' },
  { artifact: 'Strict TypeScript & Polyglot APIs', metric: 'Compile-Time Type Safety' },
  { artifact: 'Event-Driven Webhooks & Messaging', metric: 'Sub-15ms Latency' },
  { artifact: 'Automated CI/CD Test Matrices', metric: 'Zero-Downtime Deploy' },
  { artifact: 'Kubernetes, Cloud Run & Observability', metric: '24/7 SLA Telemetry' },
];

export function CapabilitiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#060a12] border-y border-slate-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-1/3 w-[500px] h-[350px] bg-indigo-600/08 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Holistic engineering rigor from day one.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Successful digital platforms require more than isolated code. We integrate strategic foresight, human-centered UI systems, strict QA, and proactive maintenance into a unified discipline.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.capabilities.map((cap, idx) => {
            const Icon = capabilityIcons[idx % capabilityIcons.length];
            const detail = capabilityDetails[idx % capabilityDetails.length];

            return (
              <div
                key={cap.title}
                className="group p-7 bg-[#0b1120] hover:bg-[#0d1629] border border-slate-800/90 hover:border-slate-700 rounded-2xl flex flex-col justify-between transition-all duration-300 card-shine"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-cyan-100 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-cyan-400/90 truncate max-w-[170px]">
                    {detail.artifact}
                  </span>
                  <span className="text-slate-400 font-medium shrink-0">
                    {detail.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
