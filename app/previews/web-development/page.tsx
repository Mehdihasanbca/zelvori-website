import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WebDevPreview } from '@/components/previews/WebDevPreview';
import { PreviewNoticeBanner } from '@/components/previews/PreviewNoticeBanner';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Application Development Preview',
  description: 'Interactive responsive multi-viewport simulator demonstrating Next.js 15 SSR analytics dashboard layout and component state.',
  alternates: {
    canonical: 'https://zelvori.software/previews/web-development/',
  },
};

export default function WebDevPreviewPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/previews" className="hover:text-cyan-400">Previews</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 font-medium">Web Development</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Interactive Practice Preview
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Web Application Development Simulation
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Switch between desktop, tablet, and mobile frames to evaluate responsive design execution, fast SSR load times, and fluid UI interactions.
          </p>
        </div>

        <PreviewNoticeBanner practiceName="Web Application Development" />

        {/* Live Interactive Sandbox */}
        <WebDevPreview />

        {/* Action Link to Full Practice & Quote */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Interested in this architecture for your product?</div>
            <p className="text-xs text-slate-400">Review full deliverables or request a formal project scope.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/services/web-development"
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
            >
              Practice Details
            </Link>
            <Link
              href="/contact?service=web-development"
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl"
            >
              Request Project Scope
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
