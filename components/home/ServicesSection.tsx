import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Building2,
  Cpu,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-cyan-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-sky-400" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5 text-indigo-400" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-300" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-300" />,
  Layers: <Layers className="w-5 h-5 text-indigo-300" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative scroll-mt-20">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/05 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with refined typographic rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Core Engineering Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Specialized digital products built for scale.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Every engagement is led by senior engineers. We deliver modular architectures, complete code ownership, and enterprise-grade performance.
          </p>
        </div>

        {/* 6 Clickable Service Cards with layered depth and hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const icon = iconMap[service.iconName] || <Globe className="w-5 h-5 text-cyan-400" />;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative p-7 bg-[#0b1120] hover:bg-[#0d1527] border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between overflow-hidden card-shine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {/* Top ambient highlight on card */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/05 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar of card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/30 transition-all duration-300">
                      {icon}
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                      0{index + 1} · CORE
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1.5 text-xs text-cyan-400/90 font-medium">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400 truncate max-w-[190px]">
                    {service.technologies.slice(0, 3).join(' · ')}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
