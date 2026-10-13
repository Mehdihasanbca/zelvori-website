import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import {
  Code2,
  ShieldCheck,
  Zap,
  Globe2,
  ArrowRight,
  Compass,
  Cpu,
  Workflow,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Zelvori Software — Engineering Ideas Into Digital Reality',
  description:
    'Learn about Zelvori Software: our engineering standards, collaboration model, and mission to deliver production-grade digital products for global businesses.',
  alternates: {
    canonical: 'https://zelvori.software/about/',
  },
  openGraph: {
    title: 'About Zelvori Software — Engineering Ideas Into Digital Reality',
    description:
      'We are an international digital product development partner committed to architectural rigor, clean codebases, and client ownership.',
    url: 'https://zelvori.software/about/',
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            About the Company
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            We partner with businesses to turn technical ambition into enduring software.
          </h1>
          <p className="text-lg text-cyan-300 font-medium">
            “{siteConfig.tagline}”
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            Zelvori Software was founded on a straightforward principle: great digital products are built through direct engineering accountability, clean architecture, and honest collaboration—not bloated agency overhead or disposable prototypes.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-base font-bold text-white">
              Type-Safe Architecture
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We build with modern TypeScript across full stacks, enforcing strict schema validation and compile-time correctness to prevent production runtime errors.
            </p>
          </div>

          <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
            </div>
            <h2 className="text-base font-bold text-white">
              Absolute IP Ownership
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every line of code, git commit, database schema, and design asset belongs unconditionally to our clients. No lock-ins or proprietary licensing.
            </p>
          </div>

          <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-base font-bold text-white">
              Rapid Sprint Cadence
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Two-week sprint delivery with live staging previews ensures you see verifiable working software and make informed product decisions early.
            </p>
          </div>

          <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-cyan-300" />
            </div>
            <h2 className="text-base font-bold text-white">
              Global Collaboration
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We collaborate with distributed startups and enterprises across timezones, maintaining transparent communication channels and disciplined handovers.
            </p>
          </div>
        </div>

        {/* Narrative Section: What We Believe */}
        <div className="p-8 sm:p-12 bg-[#060a12] border border-slate-800 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Engineering Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Why we reject disposable agency code.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Too many development shops treat projects as one-off tasks, delivering opaque codebases that must be completely rewritten when real customer scale arrives.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              <p>
                At Zelvori Software, we treat every system as a long-term commercial asset. We architect database schemas with relational integrity, construct frontend components using predictable design systems, and decouple business logic through well-documented APIs.
              </p>
              <p>
                Whether building a consumer mobile app, a multi-tenant SaaS application, an e-commerce platform, or an internal ERP workflow, our objective is to leave you with software that your own engineers can maintain, scale, and build upon for years to come.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  Pragmatic Scoping
                </span>
                <span className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-sky-400" />
                  Continuous Testing
                </span>
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Modern Tooling
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Ecosystem */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tools & Frameworks We Master
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              We select battle-tested, active open-source tools with thriving ecosystems to protect your product from vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl space-y-1">
              <div className="text-cyan-400 text-[11px] font-bold">FRONTEND</div>
              <div className="text-slate-200">Next.js · React · TypeScript</div>
              <div className="text-slate-400 text-[10px]">Tailwind CSS · Motion</div>
            </div>

            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl space-y-1">
              <div className="text-sky-400 text-[11px] font-bold">MOBILE</div>
              <div className="text-slate-200">React Native · Flutter</div>
              <div className="text-slate-400 text-[10px]">iOS Swift · Android Kotlin</div>
            </div>

            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl space-y-1">
              <div className="text-indigo-400 text-[11px] font-bold">BACKEND & API</div>
              <div className="text-slate-200">Node.js · Python · Go</div>
              <div className="text-slate-400 text-[10px]">REST · GraphQL · gRPC</div>
            </div>

            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl space-y-1">
              <div className="text-cyan-300 text-[11px] font-bold">DATA & INFRA</div>
              <div className="text-slate-200">PostgreSQL · Redis · Docker</div>
              <div className="text-slate-400 text-[10px]">Cloud Run · AWS · Temporal</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0c1324] to-[#070b14] border border-slate-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Discuss an upcoming product or platform with our team.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct technical consultations with senior engineering leads.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 rounded-lg shadow-sm whitespace-nowrap transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
