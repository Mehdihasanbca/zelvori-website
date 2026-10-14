import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Code2 } from 'lucide-react';
import { JsonFormatterTool } from '@/components/tools/JsonFormatterTool';

export const metadata: Metadata = {
  title: 'JSON Formatter, Validator & Minifier',
  description:
    'Format, validate, and minify JSON in your browser, with configurable indentation and clear syntax error locations.',
  alternates: {
    canonical: 'https://zelvori.software/tools/json-formatter/',
  },
  openGraph: {
    title: 'JSON Formatter, Validator & Minifier | Zelvori',
    description:
      'Free client-side JSON formatter, validator, and minifier. Parse and beautify payloads with 2-space, 4-space, or tab indentation, view exact syntax error positions, and copy formatted output.',
    url: 'https://zelvori.software/tools/json-formatter/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'JSON Formatter & Validator — Zelvori Dev Lab',
        type: 'image/png',
      },
    ],
  },
};

export default function JsonFormatterPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/tools/" className="hover:text-white transition">Dev Lab Tools</Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-cyan-400 font-medium">JSON Formatter</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300">
            <Code2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>Developer Payload Utility</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            JSON Formatter, Validator &amp; Minifier
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Format, beautify and validate JSON strings directly in browser memory. Detect line and column syntax errors with RFC 8259 compliance diagnostics and zero network calls.
          </p>
        </div>
      </section>

      {/* Interactive Tool Container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonFormatterTool />
      </section>
    </main>
  );
}
