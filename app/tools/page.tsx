import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Palette,
  Sliders,
  Code2,
  Share2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Lock,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Developer Lab & Browser Tools',
  description:
    'Free, privacy-first developer utilities built for web builders: SEO Meta Preview, WCAG Color Contrast Checker, CSS Gradient & Shadow Generator, JSON Formatter & Validator, and Social Card Previewer.',
  alternates: {
    canonical: 'https://zelvori.software/tools/',
  },
  openGraph: {
    title: 'Free Developer Lab & Browser Tools | Zelvori',
    description:
      'Free, privacy-first developer utilities built for web builders: SEO Meta Preview, WCAG Color Contrast Checker, CSS Gradient & Shadow Generator, JSON Formatter & Validator, and Social Card Previewer.',
    url: 'https://zelvori.software/tools/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Dev Lab — Free Developer Utilities',
        type: 'image/png',
      },
    ],
  },
};

interface ToolCard {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
}

const TOOLS: ToolCard[] = [
  {
    slug: 'seo-meta-preview',
    title: 'SEO Meta Preview',
    category: 'SEO & Search',
    description:
      'Simulate real-time Google search snippet display on desktop and mobile. Inspect title and description lengths, prevent character cutoffs, and generate clean HTML meta tags.',
    icon: Search,
    features: [
      'SERP snippet rendering',
      'Character length guidance',
      'Canonical tag generator',
      'XSS-safe escaped HTML output',
    ],
    cta: 'Open SEO Previewer',
  },
  {
    slug: 'color-contrast',
    title: 'WCAG Color Contrast Checker',
    category: 'Accessibility & Design',
    description:
      'Calculate sRGB relative luminance and contrast ratios under the W3C WCAG 2.1 specification. Verify AA and AAA compliance for body text, large headings, and UI controls.',
    icon: Palette,
    features: [
      'Accurate W3C contrast ratio',
      'AA and AAA pass/fail matrix',
      'Live typography sandbox',
      'Color swap & CSS export',
    ],
    cta: 'Check Color Contrast',
  },
  {
    slug: 'css-generator',
    title: 'CSS Gradient & Shadow Generator',
    category: 'Styling & Visuals',
    description:
      'Design modern multi-stop linear/radial CSS gradients, layered box shadows, and smooth border radii with interactive sliders and instant visual feedback.',
    icon: Sliders,
    features: [
      'Linear & radial gradient stops',
      'X/Y/Blur/Spread shadow controls',
      'Dark & light preview canvas',
      'Copyable production CSS',
    ],
    cta: 'Open CSS Generator',
  },
  {
    slug: 'json-formatter',
    title: 'JSON Formatter & Validator',
    category: 'Data & Formats',
    description:
      'Format, beautify and validate JSON payloads with configurable 2-space, 4-space, tab or minified indentation. Provides exact line/column syntax error diagnostics.',
    icon: Code2,
    features: [
      'RFC 8259 syntax validation',
      'Exact line/column error locator',
      'Minification & size stats',
      'Safe text-only parsing (no eval)',
    ],
    cta: 'Format & Validate JSON',
  },
  {
    slug: 'social-preview',
    title: 'Open Graph / Social Card Preview',
    category: 'Social & Metadata',
    description:
      'Preview how your links appear when shared across Facebook, LinkedIn, X (Twitter), Slack and WhatsApp. Generate standard OpenGraph and Twitter card meta tags.',
    icon: Share2,
    features: [
      '1200×630 feed card simulation',
      'Local image reachability check',
      'Twitter card markup generator',
      'Social crawler caching guidance',
    ],
    cta: 'Preview Social Cards',
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Header / Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0d1424] via-[#070b14] to-[#070b14] px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Zap className="h-3.5 w-3.5 text-cyan-400" />
            <span>Zelvori Dev Lab · Free Browser Utilities</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Practical browser tools for{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              web engineering.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Five free, privacy-first developer utilities to help developers, designers, freelancers, founders and students build better web applications with zero friction.
          </p>

          {/* Privacy Guarantee Pill */}
          <div className="mx-auto mt-6 inline-flex max-w-xl items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 px-4 py-2.5 text-xs text-emerald-200">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>
              <strong>100% Client-Side Privacy:</strong> All calculations, formatting and simulations run in your local browser memory. No telemetry, no backend database, and no server requests.
            </span>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:mt-20 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-800/80 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Available Developer Tools</h2>
            <p className="mt-1 text-sm text-slate-400">
              Select a utility below to use it instantly without registration, API keys, or subscriptions.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400">5 UTILITIES ACTIVE</span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <article
                key={tool.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] font-mono text-slate-400">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {tool.description}
                  </p>

                  <ul className="mt-5 space-y-1.5 border-t border-slate-800/80 pt-4 text-[11px] text-slate-300">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4">
                  <Link
                    href={`/tools/${tool.slug}/`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs font-semibold text-cyan-300 transition group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-200"
                  >
                    <span>{tool.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Cross-Link Context Banner: Resources + Build Prompt Studio */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-24 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#0b1220] to-cyan-950/30 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                <Sparkles className="h-4 w-4" /> Comprehensive Ecosystem
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Explore the Developer Resource Hub &amp; Prompt Studio
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                In addition to interactive browser tools, Zelvori curates free open-source libraries, UI kits, motion frameworks, learning guides, and our browser-based architectural prompt generator.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/resources/"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <span>Explore Developer Resources</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/stories/"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-500/40"
                >
                  <span>Read Industry Transformation Stories</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-xs text-slate-300 space-y-4">
              <h3 className="font-semibold text-white uppercase tracking-wider text-[11px] text-cyan-300">
                When Do Teams Need Custom Engineering?
              </h3>
              <p className="leading-relaxed text-slate-400">
                Browser tools provide fast answers for discrete styling, SEO tags and JSON payloads. When your product reaches operational scale—requiring microservice APIs, PostgreSQL RLS databases, bespoke ERP workflows, automated payment reconciliations or full security audits—Zelvori partners with your team from discovery to deployment.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  <span>Schedule Project Discovery with Zelvori</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
