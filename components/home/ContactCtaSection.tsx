import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Mail, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export function ContactCtaSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-18 bg-gradient-to-br from-[#0c1527] via-[#091122] to-[#070c17] border border-cyan-500/30 rounded-3xl relative overflow-hidden shadow-2xl shadow-cyan-950/20">
          {/* Ambient radial lighting */}
          <div
            className="absolute -bottom-20 right-1/4 w-[500px] h-[350px] bg-cyan-500/12 blur-[140px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Ready to Build?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Let&apos;s transform your technical vision into digital reality.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              Whether you need to architect a new web platform, engineer a mobile app, or automate high-volume business workflows, our senior engineering team is ready to evaluate your specifications.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 whitespace-nowrap"
              >
                <span>Schedule Project Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Turnaround: {siteConfig.contact.responseWindow}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mutual Non-Disclosure Agreement on Request</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Senior Tech Lead Scoping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
