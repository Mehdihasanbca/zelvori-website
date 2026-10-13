'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem, siteConfig } from '@/lib/site-config';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Layers,
  Cpu,
  Mail,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://zelvori.software/services/${service.slug}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: `https://zelvori.software/services/${service.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Zelvori',
          url: 'https://zelvori.software',
          email: 'hello@zelvori.software',
        },
        areaServed: 'Worldwide',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://zelvori.software/services/${service.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://zelvori.software',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://zelvori.software/#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortTitle,
            item: `https://zelvori.software/services/${service.slug}`,
          },
        ],
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `https://zelvori.software/services/${service.slug}#faq`,
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="py-12 lg:py-20 relative overflow-hidden">
      {/* Top ambient radial spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-indigo-600/05 to-transparent blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* JSON-LD Schema for the service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28 relative z-10">
        
        {/* Breadcrumbs & Header Section */}
        <div>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/#services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-200 font-medium">{service.shortTitle}</span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{service.badge} · Specialized Practice</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-300 font-medium">
              “{service.tagline}”
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl pt-1">
              {service.description}
            </p>

            {/* Top CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all whitespace-nowrap"
              >
                <span>Request Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/previews/${service.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-xl transition-all whitespace-nowrap shadow-md shadow-cyan-950/30"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive Preview</span>
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                  `Inquiry: ${service.title}`
                )}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Engineering Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Practice Preview Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Sandbox Simulator</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Test This Practice in Real-Time
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Explore dynamic simulated interfaces, state transitions, responsive views, and code architecture for {service.title} in our dedicated sandbox.
            </p>
          </div>
          <Link
            href={`/previews/${service.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shrink-0 shadow-lg shadow-cyan-950/40"
          >
            <span>Open {service.shortTitle} Preview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Deliverables & Scope Grid */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800/90 shadow-2xl">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Deliverables & Scope
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              What We Build & Deliver
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every deliverable is written with type safety, comprehensive test suites, and 100% transferrable intellectual property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="p-5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-slate-700 rounded-2xl flex items-start gap-3.5 transition-colors card-shine"
              >
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Banner */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-semibold text-slate-200">Core Technologies:</span>
              <span className="font-mono text-cyan-300">{service.technologies.join(' · ')}</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Source Code Transferred</span>
            </div>
          </div>
        </div>

        {/* Strategic Business Use Cases */}
        <div>
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Strategic Applications
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Real-World Business Use Cases
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How organizations deploy this service to unlock speed, expand market reach, and eliminate operating friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="p-7 bg-[#0b1120] hover:bg-[#0d1629] border border-slate-800 rounded-2xl flex flex-col justify-between transition-all duration-300 card-shine"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    USE CASE 0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2.5">
                    {uc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  Production Validated Pattern
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Approach for this Service */}
        <div className="p-8 sm:p-12 bg-[#060a12] border border-slate-800 rounded-3xl">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Methodology
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Our Technical Delivery Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-bold">01. ARCHITECTURE</div>
              <p className="text-sm text-slate-200 font-semibold">Specification & Schema</p>
              <p className="text-xs text-slate-400 leading-relaxed">Data models, API contracts, and user flows documented and agreed upfront.</p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-bold">02. ITERATION</div>
              <p className="text-sm text-slate-200 font-semibold">Bi-Weekly Sprints</p>
              <p className="text-xs text-slate-400 leading-relaxed">Live testable staging deployments every two weeks with transparent progress.</p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-bold">03. SECURITY</div>
              <p className="text-sm text-slate-200 font-semibold">Hardened Audit & QA</p>
              <p className="text-xs text-slate-400 leading-relaxed">Automated unit/integration tests, role permissions, and performance benchmarks.</p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-bold">04. HANDOVER</div>
              <p className="text-sm text-slate-200 font-semibold">Clean Transfer & SLA</p>
              <p className="text-xs text-slate-400 leading-relaxed">Complete repository transfer, architecture docs, and SLA maintenance options.</p>
            </div>
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Service FAQs
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={faq.question}
                    className={`bg-[#0b1120] border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/20' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <h3 className="m-0 p-0 text-left font-normal">
                      <button
                        id={`service-faq-btn-${service.slug}-${idx}`}
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        aria-expanded={isOpen}
                        aria-controls={`service-faq-panel-${service.slug}-${idx}`}
                      >
                        <span className="text-sm sm:text-base font-semibold">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 border-cyan-500/40 text-cyan-300' : 'text-slate-400'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`service-faq-panel-${service.slug}-${idx}`}
                        aria-labelledby={`service-faq-btn-${service.slug}-${idx}`}
                        className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Services Navigation Bar */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-5">
            Explore Other Engineering Services
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {siteConfig.services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-4 bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all flex items-center justify-between group card-shine"
                >
                  <span className="truncate">{s.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
          </div>
        </div>

        {/* Dedicated Service CTA Banner */}
        <div className="p-8 sm:p-14 bg-gradient-to-r from-cyan-950/50 via-[#0b1120] to-indigo-950/40 border border-cyan-500/30 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to engineer your {service.shortTitle.toLowerCase()}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Schedule a consultation with our senior technical leads to map your product specifications and receive an estimated timeline.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/contact?service=${service.slug}`}
              className="px-7 py-4 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/25 whitespace-nowrap transition-all"
            >
              Start Project Inquiry
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
