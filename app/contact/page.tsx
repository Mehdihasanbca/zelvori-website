import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Clock, ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Engineering Desk — Zelvori Software',
  description:
    'Start a project engagement with Zelvori Software. Submit your requirements or email hello@zelvori.software for technical consultation and project estimates.',
  alternates: {
    canonical: 'https://zelvori.software/contact',
  },
  openGraph: {
    title: 'Contact Engineering Desk — Zelvori Software',
    description:
      'Discuss your software, mobile application, or automation requirements with Zelvori Software senior leads.',
    url: 'https://zelvori.software/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Let&apos;s evaluate your technical project.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Fill out the project inquiry builder below or email us directly. We review all technical requirements and reply within 24 business hours with initial architectural recommendations.
          </p>
        </div>

        {/* Content Split: Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Direct Engineering Desk
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Primary Contact</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Response Turnaround</div>
                    <div className="text-xs font-medium text-slate-200">
                      {siteConfig.contact.responseWindow}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Confidentiality</div>
                    <div className="text-xs font-medium text-slate-200">
                      Mutual NDA executed prior to deep architectural audit
                    </div>
                  </div>
                </div>
              </div>

              {siteConfig.contact.whatsapp && (
                <div className="pt-3 border-t border-slate-800">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Engagement Options */}
            <div className="p-6 bg-[#0b1120] border border-slate-800 rounded-2xl space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Collaboration Models
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                  <span className="font-semibold text-slate-200 block mb-0.5">
                    Fixed-Scope Delivery
                  </span>
                  <span className="text-slate-400">
                    Clear deliverables, milestones, and predetermined timelines for well-defined scopes and MVPs.
                  </span>
                </div>

                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                  <span className="font-semibold text-slate-200 block mb-0.5">
                    Dedicated Engineering Squad
                  </span>
                  <span className="text-slate-400">
                    Agile monthly retainer providing senior full-stack developers for continuous product scaling.
                  </span>
                </div>

                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                  <span className="font-semibold text-slate-200 block mb-0.5">
                    Architecture & Code Review
                  </span>
                  <span className="text-slate-400">
                    In-depth technical feasibility study, security audit, and architectural roadmap for legacy systems.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
