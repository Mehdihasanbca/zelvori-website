import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Palette } from 'lucide-react';
import { ColorContrastTool } from '@/components/tools/ColorContrastTool';

export const metadata: Metadata = {
  title: 'WCAG Color Contrast Checker & Ratio Calculator',
  description:
    'Check WCAG 2.1 contrast ratios for text and interface elements, and review Level AA or AAA accessibility thresholds.',
  alternates: {
    canonical: 'https://zelvori.software/tools/color-contrast/',
  },
  openGraph: {
    title: 'WCAG Color Contrast Checker & Ratio Calculator | Zelvori',
    description:
      'Calculate sRGB relative luminance and WCAG 2.1 contrast ratios. Verify Level AA and Level AAA compliance for body text, headings, and graphical user interface elements.',
    url: 'https://zelvori.software/tools/color-contrast/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'WCAG Color Contrast Checker — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

export default function ColorContrastPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-cyan-400 font-medium">Color Contrast Checker</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Palette className="h-3.5 w-3.5 text-cyan-400" />
            <span>Accessibility Analysis</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            WCAG 2.1 Color Contrast Checker
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Test foreground and background color combinations against the W3C Web Content Accessibility Guidelines. Evaluate AA and AAA compliance for normal text, large headings, and UI components with real-time visual rendering.
          </p>
        </div>
      </section>

      {/* Interactive Tool Container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ColorContrastTool />
      </section>
    </main>
  );
}
