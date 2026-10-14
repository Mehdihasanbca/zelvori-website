import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Zelvori Technical & Commercial Disclaimer. Clarifies indicative estimates, third-party platform dependencies, reference architectures, and outcome expectations.',
  alternates: {
    canonical: 'https://zelvori.software/disclaimer/',
  },
  openGraph: {
    title: 'Disclaimer | Zelvori',
    description:
      'Grounded, defensible disclaimer clarifying technical boundaries, reference architectures, third-party integrations, and commercial expectations.',
    url: 'https://zelvori.software/disclaimer/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Disclaimer',
        type: 'image/png',
      },
    ],
  },
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Technical &amp; Commercial Disclosures
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              Review Draft — Subject to Final Owner Approval
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Disclaimer
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 · Official Brand: Zelvori (https://zelvori.software) · Contact: hello@zelvori.software
          </p>
        </div>

        {/* Executive Disclaimer Callout */}
        <div className="p-4 rounded-xl border border-slate-800/80 liquid-glass-readable text-xs text-slate-300 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Core Principle:</strong> Zelvori believes in engineering honesty over marketing hype. We provide clear technical specifications, transparent security controls, and realistic delivery boundaries rather than unverifiable promises or guaranteed commercial outcomes.
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span> Indicative Estimates &amp; Scoping Boundaries
            </h2>
            <p>
              Any pricing calculators, package tiers (e.g. on <Link href="/pricing/" className="text-cyan-400 hover:underline">/pricing/</Link>), timeline estimates, or technical discussions presented on this website or in preliminary exploratory calls are <strong>indicative and non-binding</strong>.
            </p>
            <p className="text-slate-400">
              Final commercial terms, sprint timelines, deliverable specifications, and payment schedules are confirmed exclusively within a mutually approved and signed Statement of Work (SOW) or Master Services Agreement (MSA).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span> Reference Architectures vs. Live Enterprise Operations
            </h2>
            <p>
              Our website features 9 comprehensive industry blueprints at <Link href="/solutions/" className="text-cyan-400 hover:underline">/solutions/</Link> (covering Healthcare, Legal, CRM/ERP, Marketplaces, Food Delivery, E-Commerce, Media, Education, and Field Logistics) and interactive technical demonstrations at <Link href="/previews/" className="text-cyan-400 hover:underline">/previews/</Link>.
            </p>
            <div className="p-4 rounded-xl liquid-glass-card space-y-2 text-xs">
              <p className="text-slate-200 font-semibold">Important Architectural Distinctions:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>These blueprints represent <strong>reference engineering designs and proven architectural patterns</strong>. They illustrate what can be built through phased milestones; they do not represent active, live client implementations or pre-certified off-the-shelf software packages.</li>
                <li>Interactive sandbox previews (e.g. ecommerce mock checkout) run in simulated demonstration modes with synthetic data and do not process live transactions or store customer records.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span> No Guarantees of Business or Financial Outcomes
            </h2>
            <p>
              While Zelvori adheres to disciplined modern software engineering, web standards, and Core Web Vitals best practices, we explicitly make <strong>no guarantees regarding</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Commercial Revenue &amp; Profitability:</strong> We cannot guarantee sales volumes, user adoption, venture capital funding, or business profitability resulting from software we build.</li>
              <li><strong className="text-slate-200">Search Engine Rankings:</strong> We implement clean semantic HTML, schema metadata, and fast page loads, but search rankings depend on third-party search engine algorithms, domain authority, and client content strategy.</li>
              <li><strong className="text-slate-200">100% Uptime or Absolute Security:</strong> As stated in our <Link href="/security/" className="text-cyan-400 hover:underline">Security &amp; Trust Centre</Link>, no software system can honestly be guaranteed as &ldquo;100% secure&rdquo; or &ldquo;unhackable&rdquo;. We engineer layered defense-in-depth controls to mitigate risk, but cannot promise zero vulnerability.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span> Third-Party Services, Cloud Providers &amp; APIs
            </h2>
            <p>
              Client software solutions frequently integrate third-party platforms (e.g. cloud hosts such as AWS/GCP, payment gateways such as Razorpay/Stripe, messaging APIs such as Twilio/WhatsApp, and hosting providers such as Hostycare):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Third-party providers operate under their own independent terms of service, billing policies, and service level agreements (SLAs).</li>
              <li>Zelvori is not liable for service outages, network latency, API deprecations, pricing changes, or account suspensions imposed by third-party providers outside our direct control.</li>
              <li>Clients are responsible for maintaining active subscriptions, paying usage-based provider fees, and complying with third-party acceptable use policies.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span> Regulatory Compliance &amp; Legal Advice Disclaimer
            </h2>
            <p>
              Zelvori engineers software with architectural safeguards (encryption, audit logging, role separation) aligned with standards such as the Indian DPDP Act, ABDM, and international privacy guidelines.
            </p>
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-950/10 text-xs text-amber-200/90 leading-relaxed">
              <strong>Non-Legal Advice Notice:</strong> Zelvori is a software engineering partner, not a law firm or accredited compliance certification body. Architectural recommendations and technical whitepapers do not constitute formal legal, tax, medical, or regulatory compliance advice. Clients must retain qualified legal or compliance counsel to verify statutory obligations for their specific industry operations.
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">06.</span> Statutory Rights
            </h2>
            <p className="text-xs text-slate-400">
              Nothing in this disclaimer is intended to contradict express commitments made in a signed Statement of Work, or to exclude or limit statutory legal rights that cannot be disclaimed under applicable law.
            </p>
          </section>
        </div>

        {/* Footer Navigation Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/refund-policy/" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
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
