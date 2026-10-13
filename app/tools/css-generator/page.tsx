import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Sliders } from 'lucide-react';
import { CssGeneratorTool } from '@/components/tools/CssGeneratorTool';

export const metadata: Metadata = {
  title: 'CSS Gradient & Box Shadow Generator',
  description:
    'Interactive CSS generator for multi-stop linear and radial gradients, multi-layer box shadows, and smooth border radii. Live interactive visual canvas with instant copyable CSS.',
  alternates: {
    canonical: 'https://zelvori.software/tools/css-generator/',
  },
  openGraph: {
    title: 'CSS Gradient & Box Shadow Generator | Zelvori',
    description:
      'Interactive CSS generator for multi-stop linear and radial gradients, multi-layer box shadows, and smooth border radii. Live interactive visual canvas with instant copyable CSS.',
    url: 'https://zelvori.software/tools/css-generator/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'CSS Gradient & Shadow Generator — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

export default function CssGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-cyan-400 font-medium">CSS Generator</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Sliders className="h-3.5 w-3.5 text-cyan-400" />
            <span>Modern Visual Styles</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            CSS Gradient &amp; Box Shadow Generator
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Create high-performance gradients, glowing elevations, and refined card border radii with real-time controls. Toggle canvas surface themes and copy production-ready CSS styles instantly.
          </p>
        </div>
      </section>

      {/* Interactive Tool Container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CssGeneratorTool />
      </section>
    </main>
  );
}
