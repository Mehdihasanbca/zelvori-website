import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, FileCheck, ArrowRight, Shield, Layers, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service governing the use of the Zelvori website, technical project proposals, and professional software engineering engagements.',
  alternates: {
    canonical: 'https://zelvori.software/terms/',
  },
  openGraph: {
    title: 'Terms of Service | Zelvori',
    description:
      'Clear, defensible terms distinguishing general website browsing from signed project agreements, intellectual property ownership, and liability boundaries.',
    url: 'https://zelvori.software/terms/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Terms of Service',
        type: 'image/png',
      },
    ],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Commercial Governance &amp; Engagement Rules
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              Review Draft — Subject to Final Owner Approval
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 · Official Brand: Zelvori (https://zelvori.software) · Contact: hello@zelvori.software
          </p>
        </div>

        {/* Legal Disclaimer Callout */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Contracting Notice:</strong> These website terms govern general use of <code className="text-amber-300 font-mono">zelvori.software</code> and exploratory project proposals. Paid engineering engagements require a mutually signed bilateral Service Agreement / Statement of Work (SOW) defining precise milestones, acceptance criteria, and payment terms.
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span> Agreement &amp; Contracting Parties
            </h2>
            <p>
              By accessing the website at <Link href="/" className="text-cyan-400 hover:underline">https://zelvori.software</Link> or requesting technical architecture proposals from Zelvori, you agree to these Terms of Service.
            </p>
            <p className="text-slate-400">
              Formal business registration, contracting entity details, and governing jurisdiction will be explicitly set out in client-specific project agreements. These website terms establish baseline operational and intellectual property principles.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span> Nature of Services &amp; Scope Formalization
            </h2>
            <p>
              Zelvori provides specialized digital product engineering services, including custom web application development, mobile applications, enterprise ERP/CRM business software, e-commerce architectures, and application security hardening.
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2 text-xs">
              <p className="text-slate-200 font-semibold">Distinction Between Website Content and Project Contracts:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Information, architecture diagrams, and cost calculators on this website are illustrative guidelines and technical reference blueprints, not binding fixed-price offers.</li>
                <li>Commercial fees, deliverable dates, and sprint schedules are only formalized upon written approval of a tailored Project Proposal and mutual signature of an agreed Statement of Work (SOW).</li>
                <li>Any modifications to project scope after SOW execution require written mutual approval via a formal Change Request.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span> Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              We believe in unambiguous, defensible intellectual property rights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-cyan-300">A. Bespoke Client Deliverables</h3>
                <p className="text-slate-400 leading-relaxed">
                  Upon receipt of full payment for agreed milestone deliverables, 100% of the bespoke source code, custom schemas, and project documentation created specifically for the client transfers entirely to the client.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-cyan-300">B. Reusable Zelvori Core Framework</h3>
                <p className="text-slate-400 leading-relaxed">
                  Zelvori retains ownership of its pre-existing foundational SDKs, reusable scaffolding tools (such as <code className="text-cyan-300 font-mono">@zelvori/core</code>), and proprietary delivery utilities. Clients receive a perpetual, non-exclusive, royalty-free license to use and modify such embedded components within their deliverables.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-cyan-300">C. Third-Party &amp; Open Source</h3>
                <p className="text-slate-400 leading-relaxed">
                  Standard third-party libraries, frameworks (such as Next.js, React, Tailwind CSS), and open-source packages incorporated into deliverables remain subject to their respective licenses (MIT, Apache 2.0, etc.).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 text-xs">
                <h3 className="font-bold text-cyan-300">D. Zelvori Brand Property</h3>
                <p className="text-slate-400 leading-relaxed">
                  The Zelvori brand mark, logos, website copy, and proprietary documentation on <code className="text-cyan-300 font-mono">zelvori.software</code> remain the exclusive property of Zelvori.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span> Client Dependencies &amp; Project Timelines
            </h2>
            <p>
              Successful software delivery is a collaborative engineering partnership. Estimated delivery timelines depend on:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Timely supply of business requirements, brand assets, and content materials by the client.</li>
              <li>Designated client technical point-of-contact availability for milestone review and UAT feedback within agreed turnaround windows (typically 5 business days).</li>
              <li>Provisioning of necessary third-party developer accounts, cloud hosting credentials, or payment gateway sandbox keys.</li>
            </ul>
            <p className="text-slate-400">
              Delays resulting from client dependency bottlenecks or uncommunicated scope changes will automatically extend estimated delivery milestones.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span> Payments, Milestones &amp; Advance Links
            </h2>
            <p>
              In alignment with our payment policy (<Link href="/payments/" className="text-cyan-400 hover:underline">/payments/</Link>):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Advance payments are collected exclusively via project-specific Razorpay Payment Links generated in live mode following written quotation approval.</li>
              <li>We do not collect unverified advance amounts via fixed-price embedded website buttons.</li>
              <li>Milestone payments correspond to agreed sprint deliverables, UAT demonstrations, and source code handovers.</li>
              <li>Cancellations, partial refunds, and unexpended hours are governed by our <Link href="/refund-policy/" className="text-cyan-400 hover:underline">Refund &amp; Cancellation Policy</Link>.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">06.</span> Third-Party Services &amp; Affiliate Referrals
            </h2>
            <p>
              Our website links to external third-party tools, repositories, and hosting partners (including Hostycare). Zelvori is not responsible for external provider server availability, third-party API deprecations, pricing changes, or data practices.
            </p>
            <p className="text-slate-400">
              For complete disclosures regarding referral commissions and external hosting recommendations, please review our <Link href="/affiliate-disclosure/" className="text-cyan-400 hover:underline">Affiliate Disclosure</Link>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">07.</span> Warranties, QA &amp; Limitation of Liability
            </h2>
            <p>
              Zelvori warrants that all engineering work will be performed with professional skill, adherence to agreed technical specifications, and current software security best practices. Following production deployment, projects typically include an agreed defect-warranty window (specified in the SOW) to rectify verified discrepancies.
            </p>
            <p className="text-slate-400">
              To the maximum extent permitted by applicable law, Zelvori shall not be liable for indirect, consequential, punitive, or loss-of-profit damages. Our total liability for any claim arising from a project shall not exceed the total fees actually received by Zelvori under the applicable Statement of Work.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">08.</span> Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              In the event of an operational or contractual question, parties agree to first engage in good-faith executive consultation. Project-specific agreements will specify the precise governing law, state, and arbitration framework agreed between the parties.
            </p>
          </section>
        </div>

        {/* Footer Navigation Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy/" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
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
