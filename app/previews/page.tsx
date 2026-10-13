import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Briefcase,
  Bot,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive Service Previews — Test Architecture Before Engagement',
  description:
    'Experience distinct, interactive sandboxes for all 7 Zelvori engineering services. Test real responsive viewports, mobile journeys, e-commerce checkouts, and AI pipelines.',
  alternates: {
    canonical: 'https://zelvori.software/previews/',
  },
  openGraph: {
    title: 'Interactive Service Previews | Zelvori',
    description:
      'Experience distinct, interactive sandboxes for all 7 Zelvori engineering services before engaging our team.',
    url: 'https://zelvori.software/previews/',
  },
};

const previewItems = [
  {
    slug: 'web-development',
    title: 'Web Application Development',
    subtitle: 'Responsive Multi-Device Viewport Sandbox',
    desc: 'Test real-time desktop, tablet, and mobile viewport resizing with responsive navigation, SSR analytics telemetry, and interactive client components.',
    icon: Monitor,
    badge: 'Responsive Next.js 15',
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Application Engineering',
    subtitle: 'Interactive Smartphone Mockup & User Journey',
    desc: 'Tap through a complete cross-platform mobile user journey including home activity feeds, appointment scheduling, and biometric profile settings.',
    icon: Smartphone,
    badge: 'React Native & Flutter',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Platforms',
    subtitle: 'Headless Storefront, Cart & Sandbox Checkout',
    desc: 'Browse product catalogs, filter hardware categories, adjust live cart quantities, and trigger a safe simulated payment gateway flow.',
    icon: ShoppingCart,
    badge: 'Headless Storefront',
  },
  {
    slug: 'business-software',
    title: 'Bespoke Business Software (ERP/CRM)',
    subtitle: 'Multi-Module Enterprise Operations Dashboard',
    desc: 'Switch between commercial CRM pipelines, employee HRMS rosters, and warehouse inventory tracking using structured synthetic records.',
    icon: Briefcase,
    badge: 'PostgreSQL + RBAC',
  },
  {
    slug: 'ai-automation',
    title: 'AI Workflow Automation',
    subtitle: 'Simulated 4-Stage Human-in-the-Loop Pipeline',
    desc: 'Trigger an inbound inquiry pipeline, inspect structured LLM schema extractions, test human approval gates, and verify automated webhook dispatches.',
    icon: Bot,
    badge: 'Zod Validation Pipeline',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software & Architecture',
    subtitle: 'Tailored System Architecture Blueprint Builder',
    desc: 'Configure target platform models, persistence engines, and enterprise auth layers to generate a complete technical blueprint and sprint roadmap.',
    icon: Cpu,
    badge: 'Architecture Configurator',
  },
  {
    slug: 'application-security',
    title: 'Application Security & Engineering',
    subtitle: 'Sanitized Security Audit & Code Remediation Dashboard',
    desc: 'Inspect sample severity categories (High/Medium/Low), CWE classifications, and verified code-level remediation guidelines based on OWASP benchmarks.',
    icon: ShieldCheck,
    badge: 'Remediation Dashboard',
  },
];

export default function PreviewsGalleryPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Interactive Architecture Sandboxes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Test Working Prototypes Before Committing.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We believe client trust begins with tangible software. Rather than static slide decks, explore interactive demonstrations of all seven Zelvori engineering practices.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            🔒 <strong>Demonstration Sandbox Notice:</strong> All preview environments run locally in your browser using synthetic demonstration datasets. No live customer servers or third-party databases are modified.
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.slug}
                className="p-6 sm:p-7 rounded-3xl bg-[#0b1120] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-5 shadow-xl hover:shadow-cyan-950/20 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium mt-0.5 font-mono">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <Link
                    href={`/previews/${item.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 text-slate-200 border border-slate-700/80 text-xs font-semibold transition-all group-hover:border-cyan-500/50"
                  >
                    <span>Launch Live Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-cyan-950/50 via-[#0b1120] to-indigo-950/40 border border-cyan-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to architect your custom project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a direct consultation with our senior technical leads to map your specifications.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg whitespace-nowrap transition-all"
          >
            <span>Start Technical Discovery</span>
            <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
