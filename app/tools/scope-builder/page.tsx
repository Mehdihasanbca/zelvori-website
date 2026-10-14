import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Compass } from 'lucide-react';
import { ScopeBuilderTool } from '@/components/tools/ScopeBuilderTool';

export const metadata: Metadata = {
  title: 'Architecture & Scope Configurator',
  description:
    'Interactive software architecture and project scope configurator. Configure technical stacks, database layers, and security tiers to calculate estimated sprint timelines and export structured briefs.',
  alternates: {
    canonical: 'https://zelvori.software/tools/scope-builder/',
  },
  openGraph: {
    title: 'Architecture & Scope Configurator | Zelvori',
    description:
      'Interactive software architecture and project scope configurator. Configure technical stacks, database layers, and security tiers to calculate estimated sprint timelines and export structured briefs.',
    url: 'https://zelvori.software/tools/scope-builder/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Architecture & Scope Configurator — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Zelvori Architecture & Scope Configurator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  url: 'https://zelvori.software/tools/scope-builder/',
  description:
    'Free client-side software architecture, tech stack selection, and sprint timeline configurator for engineering leaders and founders.',
  provider: {
    '@type': 'Organization',
    name: 'Zelvori',
    url: 'https://zelvori.software/',
  },
};

export default function ScopeBuilderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
        {/* Breadcrumb Bar */}
        <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-cyan-400 font-medium">Architecture Configurator</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
              <Compass className="h-3.5 w-3.5 text-cyan-400" />
              <span>Architecture &amp; Scoping Studio</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Software Architecture &amp; Scope Configurator
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Select your application classification, technical capabilities, data persistence requirements, and deployment targets. Dynamically calculate sprint milestones, inspect architectural stack recommendations, and export a structured project brief.
            </p>
          </div>
        </section>

        {/* Interactive Tool Container */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScopeBuilderTool />
          </div>
        </section>
      </main>
    </>
  );
}
