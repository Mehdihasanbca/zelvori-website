import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Share2 } from 'lucide-react';
import { SocialPreviewTool } from '@/components/tools/SocialPreviewTool';

export const metadata: Metadata = {
  title: 'Open Graph & Twitter Social Card Previewer',
  description:
    'Preview social sharing cards for Facebook, LinkedIn, and X, check OpenGraph image dimensions, and generate meta tags.',
  alternates: {
    canonical: 'https://zelvori.software/tools/social-preview/',
  },
  openGraph: {
    title: 'Open Graph & Twitter Social Card Previewer | Zelvori',
    description:
      'Free social card generator and previewer. Simulate link sharing previews for Facebook, LinkedIn, and X (Twitter), test 1200×630 OpenGraph dimensions, and generate copyable meta tags.',
    url: 'https://zelvori.software/tools/social-preview/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Social Card Previewer — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

export default function SocialPreviewPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-cyan-400 font-medium">Social Card Preview</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Share2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>Social Graph Simulation</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Open Graph &amp; Social Card Previewer
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Test and visualize how links appear on social feeds. Simulate 1200×630 image banners, verify title/description crops, and export standard OpenGraph and Twitter card meta tags.
          </p>
        </div>
      </section>

      {/* Interactive Tool Container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SocialPreviewTool />
      </section>
    </main>
  );
}
