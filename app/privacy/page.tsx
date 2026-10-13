import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertCircle, ExternalLink, Mail, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zelvori',
  description:
    'Privacy Policy for Zelvori. Learn how we handle client enquiries, mailto workflows, DPDP compliance considerations, and outbound affiliate links.',
  alternates: {
    canonical: 'https://zelvori.software/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy | Zelvori',
    description:
      'Grounded privacy policy covering email communications, zero-tracking static architecture, DPDP Act 2023 alignment, and third-party affiliate redirects.',
    url: 'https://zelvori.software/privacy/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Privacy Policy',
        type: 'image/png',
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Governance &amp; Privacy Transparency
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              Review Draft — Subject to Final Owner Approval
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 · Official Brand: Zelvori (https://zelvori.software) · Contact: hello@zelvori.software
          </p>
        </div>

        {/* Legal Disclaimer Callout */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Notice to Visitors &amp; Legal Counsel:</strong> This Privacy Policy accurately reflects the actual technical implementation of the Zelvori website as a static GitHub Pages site with client-side mailto workflows. Official registration particulars and final statutory determinations under the Digital Personal Data Protection Act, 2023 are subject to formal legal review.
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span> Scope &amp; Commitment
            </h2>
            <p>
              Zelvori (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the digital engineering website located at <Link href="/" className="text-cyan-400 hover:underline">https://zelvori.software</Link>. We design and engineer secure digital products, web applications, and custom software systems.
            </p>
            <p>
              We believe privacy must be engineered into systems from the ground up, not merely claimed in marketing copy. This Privacy Policy details what information is collected, how it is handled, how our client-side enquiry workflows operate, and your rights under applicable data protection frameworks.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span> Information We Genuinely Collect
            </h2>
            <p>
              Because our website is engineered using a static architecture, our data collection is strictly minimal:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5">
                <h3 className="font-semibold text-slate-200">A. Project Enquiries via Mailto (Client-Side Only)</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  When you use our Project Inquiry Builder at <Link href="/contact/" className="text-cyan-400 hover:underline">/contact/</Link>, your inputs (name, email, company, selected service, estimated budget, message) are compiled into a standard <code className="text-cyan-300 font-mono">mailto:</code> link on your own device. The form does <strong>not</strong> transmit your details to any Zelvori server or web database. Your email client opens a pre-composed message, and data is only transmitted to us if you choose to click send in your email application.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5">
                <h3 className="font-semibold text-slate-200">B. Direct Email Communications</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  If you contact our engineering desk directly at <code className="text-cyan-300 font-mono">hello@zelvori.software</code>, we retain your email address and message thread solely for answering your technical inquiry, assessing project feasibility, and executing commercial agreements.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5">
                <h3 className="font-semibold text-slate-200">C. Standard Infrastructure Access Logs</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Like all websites hosted on cloud content delivery networks (GitHub Pages and any upstream CDN), standard network access logs (such as visitor IP addresses, browser user-agent headers, and request timestamps) may be processed transiently by the infrastructure provider for DDoS mitigation, edge security, and network diagnostics. Zelvori does not correlate infrastructure logs with individual user identities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span> Cookies, Tracking Pixels &amp; Telemetry
            </h2>
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Tracking Architecture</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The Zelvori website does <strong>not</strong> set tracking cookies, use third-party analytics pixels (such as Google Analytics or Meta Pixel), or run behavioral session recorders (such as Hotjar or Clarity). You do not need to accept cookie banners because we do not set tracking cookies on your device.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span> Outbound Affiliate Links &amp; Hostycare Referrals
            </h2>
            <p>
              Our website includes educational hosting recommendations and referral links to third-party web hosting providers, specifically Hostycare (<Link href="/hosting/hostycare/" className="text-cyan-400 hover:underline">/hosting/hostycare/</Link> and <Link href="/affiliate-disclosure/" className="text-cyan-400 hover:underline">/affiliate-disclosure/</Link>).
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2 text-xs">
              <p className="text-slate-300">
                <strong>When you click an affiliate link:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>You leave the Zelvori website and navigate to Hostycare&apos;s external domain (<code className="text-slate-300 font-mono">hostycare.com</code> or <code className="text-slate-300 font-mono">affiliate.hostycare.com</code>).</li>
                <li>The destination URL contains referral campaign parameters (such as <code className="text-cyan-300 font-mono">tid1=zelvori</code>) to credit Zelvori with any qualifying purchase.</li>
                <li>Zelvori does not receive your payment credentials, credit card numbers, billing address, or account passwords from Hostycare.</li>
                <li>All subsequent interactions, account creation, data storage, and hosting payments are governed entirely by Hostycare&apos;s independent Privacy Policy and Terms of Service.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span> Digital Personal Data Protection Act (DPDP Act, 2023) Assessment
            </h2>
            <p>
              As an India-founded digital product engineering partner, Zelvori is monitoring the implementation of India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the draft <strong>Digital Personal Data Protection Rules, 2025</strong> published by the Ministry of Electronics and Information Technology (MeitY).
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2 text-xs text-slate-300">
              <p className="font-semibold text-slate-200">Our Current Data Fiduciary Approach:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li><strong className="text-slate-300">Specified Purpose:</strong> Contact details are processed only to respond to project enquiries or execute agreed engineering contracts.</li>
                <li><strong className="text-slate-300">Data Minimisation:</strong> We do not ask for personal identification numbers, government IDs, or sensitive financial data on our public site.</li>
                <li><strong className="text-slate-300">Withdrawal of Consent:</strong> You may request the deletion of your email contact records at any time by writing to our designated address.</li>
                <li><strong className="text-slate-300">Legal Review Status:</strong> Full statutory enforcement dates, Data Protection Board notifications, and formal consent manager integrations are subject to ongoing MeitY commencement schedules and independent legal counsel review.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">06.</span> Client Confidentiality &amp; Project Data Isolation
            </h2>
            <p>
              When a client enters a formal engagement with Zelvori:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 pl-5">
              <li>All proprietary source code, application schemas, and business workflows are protected under bilateral Non-Disclosure Agreements (NDAs).</li>
              <li>Client source code is hosted exclusively in client-approved, access-restricted repositories (e.g. client GitHub/GitLab orgs).</li>
              <li>Production secrets, database credentials, and cloud API keys are never committed to public version control or stored on the public marketing site.</li>
              <li>Detailed architecture controls and SSDLC gates are documented in our <Link href="/security/" className="text-cyan-400 hover:underline">Security &amp; Trust Centre</Link>.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">07.</span> Data Retention &amp; Deletion
            </h2>
            <p>
              Email correspondence regarding exploratory enquiries that do not advance to a signed contract is purged after 12 months, or sooner upon written request. Contractual and financial records for paid projects are retained only as required by statutory accounting and tax regulations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">08.</span> Privacy Inquiries &amp; Grievance Redressal
            </h2>
            <p>
              To exercise your data privacy rights, request deletion of your email correspondence, or raise questions regarding our data handling:
            </p>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Mail className="w-4 h-4" />
                <span>Zelvori Privacy Desk</span>
              </div>
              <p className="text-slate-300">
                Email: <a href="mailto:hello@zelvori.software" className="text-cyan-400 underline font-mono">hello@zelvori.software</a>
              </p>
              <p className="text-slate-400">
                Response Window: Typical reply within 24–48 business hours.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-4">
            <Link href="/terms/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
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
