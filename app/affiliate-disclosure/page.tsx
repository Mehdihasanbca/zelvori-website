import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'Zelvori's affiliate disclosure explains referral relationships, commission transparency and how hosting recommendations are presented.',
  alternates: {
    canonical: 'https://zelvori.software/affiliate-disclosure/',
  },
  openGraph: {
    title: 'Affiliate Disclosure | Zelvori',
    description:
      'Learn about Zelvori's affiliate relationships, referral commissions and transparent hosting recommendations.',
    url: 'https://zelvori.software/affiliate-disclosure/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Affiliate Disclosure',
        type: 'image/png',
      },
    ],
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Advertising &amp; Material Connection Transparency
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              Review Draft — Subject to Final Owner Approval
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 · Official Brand: Zelvori (https://zelvori.software) · Contact: hello@zelvori.software
          </p>
        </div>

        {/* Primary Transparency Notice */}
        <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-xs text-slate-200 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-cyan-300">Material Connection Disclosure:</strong> We aim to make affiliate relationships clear and visible with reference to applicable advertising-disclosure guidance, including ASCI guidance. This statement describes our disclosure approach and is not a certification or a guarantee of legal compliance. Certain external links on this website are affiliate links. If you purchase products through these links, Zelvori may earn a referral commission at no additional cost to you.
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span> What Are Affiliate Links?
            </h2>
            <p>
              An affiliate link is a specialized tracking URL provided by a third-party commercial vendor. When you click an affiliate link on <Link href="/" className="text-cyan-400 hover:underline">zelvori.software</Link>, your web browser navigates directly to the third-party provider&apos;s website with a referral tracking parameter (such as <code className="text-cyan-300 font-mono">tid1=zelvori</code>).
            </p>
            <p>
              If you choose to purchase hosting or related digital services on that provider&apos;s platform, the provider may pay Zelvori a small referral commission as part of their marketing programme.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span> Our Partnership with Hostycare
            </h2>
            <p>
              Zelvori participates in the official affiliate programme of <strong>Hostycare</strong> (<a href="https://hostycare.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">hostycare.com <ExternalLink className="w-3 h-3" /></a>).
            </p>
            <p>
              We provide an educational hosting catalog and plan comparison at <Link href="/hosting/hostycare/" className="text-cyan-400 hover:underline">/hosting/hostycare/</Link> to assist developers, startups, and clients seeking budget-friendly shared hosting, WordPress hosting, WooCommerce setups, or virtual private servers (VPS).
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2 text-xs">
              <p className="text-slate-200 font-semibold">Key Facts Regarding Hostycare Referrals:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><strong className="text-slate-300">&ldquo;At No Additional Cost to You&rdquo;:</strong> You do not pay any extra surcharge or premium by clicking our affiliate link. In many instances, affiliate links provide access to promotional discounts or standard introductory rates offered directly by Hostycare.</li>
                <li><strong className="text-slate-300">Third-Party Execution:</strong> All hosting accounts, domain registrations, cPanel logins, billing renewals, and uptime performance are hosted and fulfilled directly by Hostycare, not by Zelvori.</li>
                <li><strong className="text-slate-300">Separate Commercial Terms:</strong> When you purchase hosting, your transaction is governed exclusively by Hostycare&apos;s independent Terms of Service, Acceptable Use Policy, and Privacy Policy.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span> Advertising Standards Council of India (ASCI) Alignment
            </h2>
            <p>
              The Advertising Standards Council of India (ASCI) establishes guidelines for transparent advertising and clear material connection disclosures:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>We place visible disclosures directly adjacent to prominent affiliate call-to-action buttons, not solely hidden in the website footer or subpages.</li>
              <li>All outgoing affiliate links are labeled with appropriate security attributes (<code className="text-slate-300 font-mono">rel=&quot;noopener noreferrer sponsored&quot;</code>) in accordance with search engine standards.</li>
              <li>We make only evidence-based, verifiable hosting claims supported by official provider documentation, avoiding unsubstantiated superlatives (such as &ldquo;best host in the world&rdquo; or fabricated user review ratings).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span> Editorial Independence &amp; Engineering Honesty
            </h2>
            <p>
              Zelvori&apos;s core business is custom digital product engineering, enterprise software architectures, and cybersecurity. Hosting affiliate commissions represent a secondary referral stream.
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs text-slate-300 space-y-2">
              <p>
                Our architectural recommendations remain grounded in engineering fit. While shared hosting or entry-level cloud hosting (such as Hostycare) is well-suited for blogs, small business landing pages, and standard WordPress sites, complex multi-tenant enterprise platforms, high-volume marketplaces, or clinical healthcare applications may require dedicated cloud infrastructure (such as AWS, GCP, or private Kubernetes clusters). We will never recommend an unsuitable hosting plan merely to earn an affiliate commission.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span> Questions Regarding Affiliate Relationships
            </h2>
            <p>
              If you have any questions regarding our referral partnerships or wish to verify any technical recommendation, please contact our engineering desk at <a href="mailto:hello@zelvori.software" className="text-cyan-400 underline font-mono">hello@zelvori.software</a>.
            </p>
          </section>
        </div>

        {/* Footer Navigation Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/refund-policy/" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
            <Link href="/disclaimer/" className="hover:text-cyan-400 transition-colors">Disclaimer</Link>
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
