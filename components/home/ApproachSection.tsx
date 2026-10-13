import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Key, Users2, ShieldAlert } from 'lucide-react';

export function ApproachSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#060a12] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Architectural discipline over disposable code.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Many agencies rush prototypes that quickly collapse under scale or trap clients in opaque technical debt. Zelvori operates like a dedicated internal engineering team—prioritizing strict schema contracts, comprehensive documentation, and direct accountability.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read our engineering values & standards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3 card-shine">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Key className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                100% Code & IP Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                You own all repository branches, database schemas, and documentation from day one. Zero hidden vendor lock-in or recurring IP licensing fees.
              </p>
            </div>

            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3 card-shine">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Users2 className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                Direct Senior Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Work directly with the senior developers who architect and write your software. No layers of non-technical middlemen or miscommunication.
              </p>
            </div>

            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3 card-shine">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                Type-Safe & Modular Stacks
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We write strict TypeScript across frontend and backend tiers. Clean interfaces ensure your future internal hires can easily adopt the codebase.
              </p>
            </div>

            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3 card-shine">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="text-base font-bold text-white">
                Security & Data Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Granular Role-Based Access Control (RBAC), end-to-end encryption in transit and at rest, and automated dependency vulnerability scans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
