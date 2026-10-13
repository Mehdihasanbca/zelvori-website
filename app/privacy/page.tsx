import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zelvori',
  description:
    'Privacy Policy for Zelvori. Learn how we handle project inquiries, protect confidential client information, and ensure data privacy.',
  alternates: {
    canonical: 'https://zelvori.software/privacy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Governance & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: October 2026 · Zelvori (https://zelvori.software)
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              1. Overview & Commitment
            </h2>
            <p>
              Zelvori (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website https://zelvori.software. We respect your personal privacy and are committed to protecting the confidential information you share with us. This Privacy Policy explains what information we collect when you visit our website or contact our engineering desk, how that data is used, and your rights regarding that information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              2. Information We Collect
            </h2>
            <p>
              We collect information exclusively when you voluntarily provide it to us to inquire about our software engineering services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong className="text-slate-200">Contact Information:</strong> Your name, business email address, company name, and communication preferences.
              </li>
              <li>
                <strong className="text-slate-200">Project Specifications:</strong> Descriptions of your technical requirements, estimated timelines, preferred engagement models, and scope details provided through our project inquiry builder.
              </li>
              <li>
                <strong className="text-slate-200">Technical Server Logs:</strong> Standard access logs collected by hosting infrastructure (such as IP addresses, browser user agent, and timestamp) solely for network security and operational diagnostics.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              3. How We Use Your Information
            </h2>
            <p>
              We use information collected through our website strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>To evaluate project feasibility and prepare technical scope estimates.</li>
              <li>To communicate with you regarding your inquiry via email.</li>
              <li>To fulfill mutual obligations under client contracts and non-disclosure agreements (NDAs).</li>
              <li>To ensure the integrity, availability, and security of our digital services.</li>
            </ul>
            <p className="text-slate-400">
              We never sell, rent, trade, or monetize your contact details or project specifications to third-party advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              4. Client Data & Intellectual Property Confidentiality
            </h2>
            <p>
              When clients engage Zelvori for custom development, all proprietary software code, business requirements, trade secrets, and customer data are governed by strict bilateral Non-Disclosure Agreements (NDAs). Client code repositories and project workspaces are isolated in private, role-restricted environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website is engineered with static architecture. We do not employ third-party tracking pixels, behavioural retargeting cookies, or intrusive telemetry trackers. Any cookies used are strictly essential for website operation and security headers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              6. Data Retention
            </h2>
            <p>
              We retain inquiry communication records only as long as necessary to address your project request or comply with applicable legal, accounting, and reporting obligations. You may request deletion of your inquiry details at any time by contacting our engineering desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              7. Contact & Privacy Inquiries
            </h2>
            <p>
              If you have any questions or requests concerning this Privacy Policy, please email our team at:
            </p>
            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl text-xs space-y-1">
              <div className="font-semibold text-slate-200">Zelvori — Privacy & Compliance</div>
              <div className="text-cyan-400 font-mono">{siteConfig.contact.email}</div>
              <div className="text-slate-400">Website: https://zelvori.software</div>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            ← Return to Home
          </Link>
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
