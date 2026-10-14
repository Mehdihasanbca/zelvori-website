import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { FounderSection } from '@/components/home/FounderSection';
import {
  Code2,
  ShieldCheck,
  Zap,
  Globe2,
  ArrowRight,
  Compass,
  Cpu,
  Workflow,
  Download,
  Palette,
  Layers,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Ideas Into Digital Reality',
  description:
    'Learn about Zelvori: our engineering standards, collaboration model, and mission to deliver production-grade digital products for global businesses.',
  alternates: {
    canonical: 'https://zelvori.software/about/',
  },
  openGraph: {
    title: 'About Zelvori — Engineering Ideas Into Digital Reality',
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
            Zelvori was founded on a straightforward principle: great digital products are built through direct engineering accountability, clean architecture, and honest collaboration—not bloated agency overhead or disposable prototypes.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 liquid-glass-card rounded-2xl space-y-3">
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

          <div className="p-6 liquid-glass-card rounded-2xl space-y-3">
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

          <div className="p-6 liquid-glass-card rounded-2xl space-y-3">
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

          <div className="p-6 liquid-glass-card rounded-2xl space-y-3">
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

        {/* Founder Story & Profile */}
        <FounderSection />

        {/* Narrative Section: What We Believe */}
        <div className="p-8 sm:p-12 liquid-glass-readable border border-slate-800/80 rounded-3xl">
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
                At Zelvori, we treat every system as a long-term commercial asset. We architect database schemas with relational integrity, construct frontend components using predictable design systems, and decouple business logic through well-documented APIs.
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
            <div className="p-4 liquid-glass-card rounded-xl space-y-1">
              <div className="text-cyan-400 text-[11px] font-bold">FRONTEND</div>
              <div className="text-slate-200">Next.js · React · TypeScript</div>
              <div className="text-slate-400 text-[10px]">Tailwind CSS · Motion</div>
            </div>

            <div className="p-4 liquid-glass-card rounded-xl space-y-1">
              <div className="text-sky-400 text-[11px] font-bold">MOBILE</div>
              <div className="text-slate-200">React Native · Flutter</div>
              <div className="text-slate-400 text-[10px]">iOS Swift · Android Kotlin</div>
            </div>

            <div className="p-4 liquid-glass-card rounded-xl space-y-1">
              <div className="text-indigo-400 text-[11px] font-bold">BACKEND & API</div>
              <div className="text-slate-200">Node.js · Python · Go</div>
              <div className="text-slate-400 text-[10px]">REST · GraphQL · gRPC</div>
            </div>

            <div className="p-4 liquid-glass-card rounded-xl space-y-1">
              <div className="text-cyan-300 text-[11px] font-bold">DATA & INFRA</div>
              <div className="text-slate-200">PostgreSQL · Redis · Docker</div>
              <div className="text-slate-400 text-[10px]">Cloud Run · AWS · Temporal</div>
            </div>
          </div>
        </div>

        {/* Brand Identity, Logo System & Cinematic Lab */}
        <div className="p-8 sm:p-12 liquid-glass rounded-3xl border border-white/10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Brand Identity &amp; Logo System</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Zelvori Brand Experience &amp; Cinema — Visual Mark, Wordmark &amp; Media Suite
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Zelvori mark unites a precision-engineered geometric &ldquo;Z&rdquo; symbol, dual kinetic cyan-to-velocity-blue linear gradients, and a bespoke letter-spaced typography lockup anchored by our official promise: <em>&ldquo;Ideas Into Digital Reality&rdquo;</em>.
            </p>
          </div>

          {/* Official Logo System Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Official Brand Logo Lockups &amp; Vector Assets</span>
              </h3>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                Official Bundle Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Horizontal Dark Logo (Primary) */}
              <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-300 font-mono">PRIMARY DARK LOGO</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/10">1200 × 250</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0B1220] border border-cyan-500/20 flex items-center justify-center min-h-[90px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brand/zelvori-logo-dark.svg"
                      alt="Zelvori Primary Dark Logo"
                      className="h-12 w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Full horizontal lockup with geometric Z mark, stylized wordmark, accent rule, and tagline on deep navy canvas.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <a
                    href="/images/brand/zelvori-logo-dark.svg"
                    download="zelvori-logo-dark.svg"
                    className="flex-1 py-1.5 px-3 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-cyan-400" />
                    <span>SVG Vector</span>
                  </a>
                  <a
                    href="/images/brand/zelvori-logo-dark.png"
                    download="zelvori-logo-dark.png"
                    className="flex-1 py-1.5 px-3 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-indigo-400" />
                    <span>PNG (2.4K)</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Horizontal Light Logo (Transparent) */}
              <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300 font-mono">LIGHT TRANSPARENT LOGO</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/10">1200 × 250</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-300/40 flex items-center justify-center min-h-[90px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brand/zelvori-logo-light.svg"
                      alt="Zelvori Light Transparent Logo"
                      className="h-12 w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Transparent background vector lockup for light paper deliverables, invoices, white decks, and client reports.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <a
                    href="/images/brand/zelvori-logo-light.svg"
                    download="zelvori-logo-light.svg"
                    className="flex-1 py-1.5 px-3 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-cyan-400" />
                    <span>SVG Vector</span>
                  </a>
                  <a
                    href="/images/brand/zelvori-logo-light.png"
                    download="zelvori-logo-light.png"
                    className="flex-1 py-1.5 px-3 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-indigo-400" />
                    <span>PNG (2.4K)</span>
                  </a>
                </div>
              </div>

              {/* Card 3: Standalone App Icon & Favicon */}
              <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-300 font-mono">APP ICON &amp; FAVICON</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/10">512 × 512</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#070b14] border border-cyan-500/20 flex items-center justify-center gap-4 min-h-[90px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brand/zelvori-icon.svg"
                      alt="Zelvori App Icon"
                      className="h-14 w-14 object-contain rounded-xl shadow-lg shadow-cyan-900/30"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brand/favicon-512.png"
                      alt="Zelvori Favicon"
                      className="h-10 w-10 object-contain rounded-lg border border-white/10"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Square geometric icon badge with squircle contour for iOS/Android home screens, app icons, and browser favicons.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <a
                    href="/images/brand/zelvori-icon.svg"
                    download="zelvori-icon.svg"
                    className="flex-1 py-1.5 px-2 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <Download className="w-3 h-3 text-cyan-400" />
                    <span>Icon SVG</span>
                  </a>
                  <a
                    href="/images/brand/favicon-512.png"
                    download="favicon-512.png"
                    className="flex-1 py-1.5 px-2 rounded-lg liquid-glass-btn-secondary text-[11px] font-medium text-center text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <Download className="w-3 h-3 text-indigo-400" />
                    <span>512px PNG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Color Architecture */}
          <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <Palette className="w-4 h-4 text-cyan-400" />
              <span>Official Brand Color Architecture</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#0B1220] border border-white/10" />
                <div className="text-[11px] font-bold text-white">Midnight Navy</div>
                <div className="text-[10px] font-mono text-cyan-400">#0B1220</div>
                <div className="text-[9px] text-slate-400">Canvas Base</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#0E1728] border border-white/10" />
                <div className="text-[11px] font-bold text-white">Ink Obsidian</div>
                <div className="text-[10px] font-mono text-cyan-400">#0E1728</div>
                <div className="text-[9px] text-slate-400">Elevated Shell</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#21D4E8] shadow-sm shadow-cyan-400/40" />
                <div className="text-[11px] font-bold text-white">Electric Cyan</div>
                <div className="text-[10px] font-mono text-cyan-400">#21D4E8</div>
                <div className="text-[9px] text-slate-400">Primary Accent</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#2478F2] shadow-sm shadow-blue-500/40" />
                <div className="text-[11px] font-bold text-white">Velocity Blue</div>
                <div className="text-[10px] font-mono text-blue-400">#2478F2</div>
                <div className="text-[9px] text-slate-400">Kinetic Gradient</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#28BFD1] shadow-sm shadow-teal-400/40" />
                <div className="text-[11px] font-bold text-white">Signal Teal</div>
                <div className="text-[10px] font-mono text-teal-400">#28BFD1</div>
                <div className="text-[9px] text-slate-400">Tertiary Spectrum</div>
              </div>
            </div>
          </div>

          {/* Brand Cinema & Commercial Ads */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Motion Architecture &amp; Brand Cinema
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reel card */}
              <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-300 font-mono">BRAND TECH REEL</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">2.74 MB MP4</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  3D procedural visualization of distributed nodes, quantum logic flows, and reactive network topology.
                </p>
                <video
                  src="/videos/brand-reel.mp4"
                  controls
                  playsInline
                  className="w-full rounded-xl border border-white/10 aspect-video object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Ads card */}
              <div className="p-6 liquid-glass-card rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-300 font-mono">COMMERCIAL ADS FILM</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">3.99 MB MP4</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Motion showcase of multi-device software interfaces, mobile native UI, and real-time client dashboards.
                </p>
                <video
                  src="/videos/brand-ads.mp4"
                  controls
                  playsInline
                  className="w-full rounded-xl border border-white/10 aspect-video object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Wallpaper asset link */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Official Zelvori 4K Wallpaper (1.54 MB PNG) available for high-resolution displays.
            </div>
            <a
              href="/images/brand/zelvori-futuristic-tech-wallpaper.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl liquid-glass-pill text-xs font-semibold text-cyan-300 hover:text-white transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download 4K Wallpaper</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 liquid-glass-readable border border-cyan-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
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
            className="px-6 py-3.5 text-xs font-semibold text-slate-900 liquid-glass-btn-primary rounded-xl shadow-sm whitespace-nowrap transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
