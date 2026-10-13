import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AppSecurityPreview } from '@/components/previews/AppSecurityPreview';
import { PreviewNoticeBanner } from '@/components/previews/PreviewNoticeBanner';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Application Security Review Preview',
  description: 'Interactive security findings inspector: review sanitized vulnerability reports, CVSS scores, remediation code diffs, and verification steps.',
  alternates: {
    canonical: 'https://zelvori.software/previews/application-security/',
  },
};

export default function AppSecurityPreviewPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/previews" className="hover:text-cyan-400">Previews</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 font-medium">Application Security</span>
        </nav>

        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Interactive Practice Preview
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Security Findings &amp; Code Remediation Inspector
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Examine sample findings across OWASP Top 10 vulnerabilities, verify CVSS scores, inspect side-by-side vulnerable vs remediated code diffs, and run automated fix tests.
          </p>
        </div>

        <PreviewNoticeBanner practiceName="Application Security Engineering" />

        <AppSecurityPreview />

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Need a comprehensive security code review before launch?</div>
            <p className="text-xs text-slate-400">Read our clear security methodology and scope an audit with zero marketing exaggeration.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/services/application-security"
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
            >
              Practice Details
            </Link>
            <Link
              href="/contact?service=application-security"
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl"
            >
              Request Security Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
