import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Compass, Lock } from 'lucide-react';

export function FounderSection() {
  const principles = [
    {
      title: 'Clear Scope',
      desc: 'Explicit deliverables, limits, and transparent costs agreed before writing code.',
      icon: Compass,
    },
    {
      title: 'Practical Solutions',
      desc: 'Architectures engineered around real user workflows, avoiding unnecessary complexity.',
      icon: Terminal,
    },
    {
      title: 'Privacy-Conscious Development',
      desc: 'Defensive data handling, credential hygiene, and client data minimization.',
      icon: Lock,
    },
    {
      title: 'Transparent Communication',
      desc: 'Direct discussions with engineering leads, accompanied by working staged previews.',
      icon: CheckCircle2,
    },
    {
      title: 'Documented Handover',
      desc: 'Unconditional repository, schema, and intellectual property transfer upon final settlement.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#070b14] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/05 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/05 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-400/30 via-slate-800/80 to-indigo-500/20 shadow-2xl shadow-cyan-950/30">
                <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-900">
                  <Image
                    src="/images/founder/mehdi-hasan.png"
                    alt="Mehdi Hasan — Founder & Software Engineer at Zelvori"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-102"
                    priority={false}
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Founder Tag Card */}
              <div className="mt-4 p-4 rounded-2xl liquid-glass-card shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">Mehdi Hasan</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">Founder &amp; Software Engineer</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10">
                    Zelvori
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Principles Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Founder Profile &amp; Engineering Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Building software around real problems.
              </h2>
            </div>

            {/* Founder narrative */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Zelvori is built around a simple belief: technology should solve real problems, make work easier, and help businesses move forward with confidence.
              </p>
              <p>
                As Founder and Software Engineer, I focus on turning practical business needs into thoughtful digital solutions—from websites and mobile applications to business software, automation, and application security.
              </p>
              <p>
                My approach is built on understanding the problem before writing the code, communicating clearly throughout the project, and making the scope, costs, and deliverables understandable from the beginning.
              </p>
              <p>
                At Zelvori, the goal is not simply to deliver software. It is to build useful digital experiences with clarity, care, and a strong engineering foundation.
              </p>
            </div>

            {/* Engineering Principles */}
            <div className="pt-2 border-t border-white/10 space-y-4">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Core Engineering Principles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {principles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="p-3.5 rounded-xl liquid-glass-card hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">{p.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-5.5">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing Line & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10">
              <blockquote className="text-xs sm:text-sm font-medium text-cyan-300 italic">
                “Clear thinking. Thoughtful engineering. Digital solutions that work for your business.”
              </blockquote>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold liquid-glass-btn-primary rounded-xl whitespace-nowrap transition-all shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
