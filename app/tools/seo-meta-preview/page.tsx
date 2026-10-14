import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Search, Zap } from 'lucide-react';
import { SeoMetaPreviewTool } from '@/components/tools/SeoMetaPreviewTool';

export const metadata: Metadata = {
  title: 'SEO Meta Preview & Search Snippet Simulator',
  description:
    'Preview SEO title and meta description lengths, simulate search snippets, and generate copy-ready HTML meta tags in your browser.',
  alternates: {
    canonical: 'https://zelvori.software/tools/seo-meta-preview/',
  },
  openGraph: {
    title: 'SEO Meta Preview & Search Snippet Simulator | Zelvori',
    description:
      'Free browser-based SEO snippet previewer. Test title and meta description character lengths, view real-time Google search snippet simulations, and generate valid HTML meta tags.',
    url: 'https://zelvori.software/tools/seo-meta-preview/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'SEO Meta Preview — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

export default function SeoMetaPreviewPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-cyan-400 font-medium">SEO Meta Preview</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Search className="h-3.5 w-3.5 text-cyan-400" />
            <span>Search Snippet Simulator</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            SEO Meta Preview &amp; Search Tag Generator
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Visualize how your title and description appear in desktop and mobile search engine results. Verify recommended length limits, check canonical paths, and generate safe, copyable HTML meta tags instantly.
          </p>
        </div>
      </section>

      {/* Interactive Tool Container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SeoMetaPreviewTool />
      </section>
    </main>
  );
}
