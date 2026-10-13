import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, RefreshCw, CheckCircle2, ArrowRight, DollarSign, Mail, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description:
    'Zelvori Refund and Cancellation Policy. Explains advance project deposits, milestone billing, partial refund calculations, and dispute workflows.',
  alternates: {
    canonical: 'https://zelvori.software/refund-policy/',
  },
  openGraph: {
    title: 'Refund & Cancellation Policy | Zelvori',
    description:
      'Transparent, fair policy on software project advances, milestone acceptances, cancellation scenarios, and unexpended deliverable refunds.',
    url: 'https://zelvori.software/refund-policy/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Refund & Cancellation Policy',
        type: 'image/png',
      },
    ],
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Commercial Terms &amp; Client Protection
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              Review Draft — Subject to Final Owner Approval
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 · Official Brand: Zelvori (https://zelvori.software) · Contact: hello@zelvori.software
          </p>
        </div>

        {/* Executive Principle Callout */}
        <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-xs text-slate-200 leading-relaxed flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-cyan-300">Fairness Principle:</strong> Zelvori does not enforce unfair blanket clauses claiming deposits are non-refundable under any circumstance. We bill transparently against engineering milestones, verifiable hours, and accepted deliverables.
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span> Scope of this Policy
            </h2>
            <p>
              This policy governs cancellations and refunds for custom software development, web engineering, mobile applications, and technical consulting services delivered by Zelvori.
            </p>
            <p className="text-slate-400">
              Because custom software involves dedicated engineering capacity and sprint reservations, refund determinations depend on the specific project phase and work completed at the time of cancellation.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span> Advance Payments &amp; Project Deposits
            </h2>
            <p>
              In accordance with our live advance payment workflow (<Link href="/payments/" className="text-cyan-400 hover:underline">/payments/</Link>), project advances are collected via customer-specific Razorpay Payment Links after quotation approval.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-semibold text-slate-200">A. Cancellation Prior to Project Kick-Off</h3>
                <p className="text-slate-400 leading-relaxed">
                  If a client requests cancellation in writing prior to the project kick-off date and before any architecture discovery, wireframing, or engineering sprints have commenced, the advance deposit will be refunded in full, minus non-recoverable payment gateway processing fees (typically 2–3% imposed by payment processors).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-semibold text-slate-200">B. Cancellation During Discovery &amp; Blueprinting (Phase 01)</h3>
                <p className="text-slate-400 leading-relaxed">
                  If cancellation is requested while architecture discovery, data modeling, or UI wireframing is in progress, the refund will be calculated by deducting the verified hours and technical deliverables already completed at our agreed consulting rate. Any unexpended portion of the advance will be promptly returned.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span> Milestone Payments &amp; Accepted Deliverables
            </h2>
            <p>
              Our projects operate on structured phased milestones (e.g. Phase 01 Architecture, Phase 02 Core MVP, Phase 03 Hardening, Phase 04 Production Release):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong className="text-slate-200">Accepted Milestones:</strong> Once a sprint milestone has been demonstrated in staging, reviewed by the client, and formally signed off (or source code handed over), payments allocated to that milestone are <strong>non-refundable</strong>.
              </li>
              <li>
                <strong className="text-slate-200">In-Flight Milestones:</strong> If work is cancelled mid-sprint, Zelvori will invoice only for completed work items and unreleased code up to the date of cancellation. Any remaining balance paid in advance for unstarted milestones will be refunded.
              </li>
              <li>
                <strong className="text-slate-200">Third-Party Pass-Through Expenses:</strong> Non-cancellable third-party expenses pre-approved by the client (such as domain registrations, dedicated cloud hosting reservations, SSL certificates, or specialized third-party API licenses) are strictly non-refundable once purchased.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span> Defect Remediation vs. Refunds
            </h2>
            <p>
              If a client identifies verifiable defects, errors, or discrepancies between delivered software and agreed SOW acceptance criteria during User Acceptance Testing (UAT) or the post-launch warranty period:
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs text-slate-300 space-y-2">
              <p>
                Our primary remedy is <strong>prompt engineering remediation</strong> at no additional cost. Zelvori will debug, rectify, and re-test non-conforming features until acceptance criteria are satisfied. A refund is considered only if Zelvori is genuinely unable or unwilling to remediate verified defects within a reasonable cure period (typically 14 business days).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span> Refund Request Workflow &amp; Timelines
            </h2>
            <p>
              To request a project cancellation or review an eligible refund:
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2 text-xs">
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-400">
                <li>Submit a written cancellation notice from the client&apos;s primary authorized email to <a href="mailto:hello@zelvori.software" className="text-cyan-400 underline font-mono">hello@zelvori.software</a>.</li>
                <li>Include the Project Quotation ID, payment reference transaction ID, and explicit reason for cancellation.</li>
                <li>Our engineering desk will prepare a transparent reconciliation statement within <strong>3–5 business days</strong> showing total fees received, hours and milestones completed, pass-through costs incurred, and any refundable balance.</li>
                <li>Upon mutual agreement on the reconciliation statement, approved refunds are initiated via our merchant dashboard (Razorpay) to the original payment source within <strong>5–7 business days</strong>.</li>
              </ol>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">06.</span> Statutory Rights &amp; Owner Review Note
            </h2>
            <p className="text-xs text-slate-400">
              Nothing in this policy limits or excludes statutory consumer rights under applicable Indian commercial law that cannot be legally waived. This policy represents our operational draft and will be confirmed against project-specific client agreements.
            </p>
          </section>
        </div>

        {/* Footer Navigation Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/disclaimer/" className="hover:text-cyan-400 transition-colors">Disclaimer</Link>
            <Link href="/affiliate-disclosure/" className="hover:text-cyan-400 transition-colors">Affiliate Disclosure</Link>
          </div>
          <Link href="/" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium">
            <span>Return to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
