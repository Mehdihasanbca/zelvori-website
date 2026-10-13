import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service — Zelvori Software',
  description:
    'Terms of Service governing the use of the Zelvori Software website and professional digital engineering engagements.',
  alternates: {
    canonical: 'https://zelvori.software/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Governance & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: October 2026 · Zelvori Software (https://zelvori.software)
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing the website https://zelvori.software or engaging Zelvori Software for digital engineering, product development, or technical advisory services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              2. Nature of Professional Services
            </h2>
            <p>
              Zelvori Software provides specialized digital product development services, including website and web application development, iOS and Android mobile app development, custom e-commerce engineering, bespoke business systems (CRM, HRMS, ERP), custom integrations, and AI workflow automation. Specific deliverables, sprint schedules, milestones, and payment terms for client projects are formally defined in bilateral Master Services Agreements (MSAs) or Statements of Work (SOWs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              3. Intellectual Property Ownership
            </h2>
            <p>
              Our founding philosophy is client ownership:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong className="text-slate-200">Client Deliverables:</strong> Upon receipt of agreed milestone payments, all custom source code, design assets, database structures, and project documentation created specifically for the client transfer entirely to the client.
              </li>
              <li>
                <strong className="text-slate-200">Pre-Existing Open Source:</strong> Standard open-source libraries, packages, or utilities incorporated into projects remain subject to their respective open-source licenses (such as MIT, Apache 2.0).
              </li>
              <li>
                <strong className="text-slate-200">Website Property:</strong> The Zelvori Software brand mark, wordmark, website copy, visual layouts, and logos are the proprietary property of Zelvori Software and may not be reproduced without prior written permission.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              4. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide timely feedback, designated point-of-contact availability, and required third-party credentials or API keys necessary for project completion. Delays caused by client unavailability or third-party dependency outages may adjust delivery timelines accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              5. Warranties & Quality Assurance
            </h2>
            <p>
              Zelvori Software warrants that all engineering work will be performed in a professional, workmanlike manner adhering to current industry standards for security, code maintainability, and architectural discipline. Following production release, projects include an agreed post-launch warranty period to remediate any verifiable defects or bugs within the agreed scope.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, in no event will Zelvori Software be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or related to the use of our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white">
              7. Governing Inquiries
            </h2>
            <p>
              For legal notices or questions regarding these Terms of Service, please contact:
            </p>
            <div className="p-4 bg-[#0b1120] border border-slate-800 rounded-xl text-xs space-y-1">
              <div className="font-semibold text-slate-200">Zelvori Software — Legal & Operations</div>
              <div className="text-cyan-400 font-mono">{siteConfig.contact.email}</div>
              <div className="text-slate-400">Website: https://zelvori.software</div>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            ← Return to Home
          </Link>
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
