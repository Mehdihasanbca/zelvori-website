import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server,
  Cpu,
  Shield,
  Zap,
  Globe,
  Mail,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Layers,
  HardDrive,
  Headphones,
  FileCheck2,
  Workflow,
  ShoppingBag,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hostycare Hosting Recommendations & Setup Guide',
  description:
    'Explore verified hosting options recommended by Zelvori for small business websites, WordPress, e-commerce, and cloud VPS deployments with transparent affiliate disclosure.',
  alternates: {
    canonical: 'https://zelvori.software/hosting/hostycare/',
  },
  openGraph: {
    title: 'Hostycare Hosting Recommendations & Setup Guide | Zelvori',
    description:
      'Curated web hosting solutions, cloud VPS options, and professional deployment setup for modern digital platforms.',
    url: 'https://zelvori.software/hosting/hostycare/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Hosting Recommendations with Hostycare',
        type: 'image/png',
      },
    ],
  },
};

// 12 Verified Hostycare Affiliate Links with Structured Tracking
const HOSTYCARE_LINKS = {
  cloudHosting:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-15.html?tid1=zelvori&tid2=hostycare_page&tid3=cloud_hosting',
  sharedHosting:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-17.html?tid1=zelvori&tid2=hostycare_page&tid3=shared_hosting',
  ecommerce:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-20.html?tid1=zelvori&tid2=hostycare_page&tid3=ecommerce',
  emailHosting:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-21.html?tid1=zelvori&tid2=hostycare_page&tid3=email_hosting',
  fastVps:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-22.html?tid1=zelvori&tid2=hostycare_page&tid3=fast_vps',
  domain:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-24.html?tid1=zelvori&tid2=hostycare_page&tid3=domain',
  generalWeb:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-26.html?tid1=zelvori&tid2=hostycare_page&tid3=general_web',
  managedWp:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-28.html?tid1=zelvori&tid2=hostycare_page&tid3=managed_wp',
  managedVps:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-29.html?tid1=zelvori&tid2=hostycare_page&tid3=managed_vps',
  vps:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-32.html?tid1=zelvori&tid2=hostycare_page&tid3=vps',
  woocommerce:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-35.html?tid1=zelvori&tid2=hostycare_page&tid3=woocommerce',
  wordpress:
    'https://affiliate.hostycare.com/mehdihasanbca-0-1-36.html?tid1=zelvori&tid2=hostycare_page&tid3=wordpress',
};

const HOSTING_TIERS = [
  {
    id: 'shared',
    title: 'Shared Web Hosting',
    subtitle: 'Cost-effective hosting for brochure sites and portfolios',
    badge: 'Starter Friendly',
    description:
      'Ideal for introductory websites, personal portfolios, static landing pages, and early-stage small business web presences with moderate visitor volume.',
    features: [
      'cPanel or DirectAdmin control interface',
      'NVMe SSD high-speed file storage',
      'Free automated SSL certificate setup',
      '1-click script & CMS installer',
      'DDoS network filtering',
    ],
    primaryLink: HOSTYCARE_LINKS.sharedHosting,
    primaryLabel: 'View Shared Hosting Plans',
    secondaryLink: HOSTYCARE_LINKS.generalWeb,
    secondaryLabel: 'Explore General Web Plans',
    recommendedFor: 'Landing pages, static portfolios, local shops',
  },
  {
    id: 'wordpress',
    title: 'WordPress & WooCommerce Cloud',
    subtitle: 'Optimized runtime for CMS & digital store operations',
    badge: 'Popular for CMS',
    description:
      'Tuned for WordPress CMS execution, database caching, dynamic WooCommerce transactions, product catalog indexing, and administrative dashboards.',
    features: [
      'Pre-configured PHP & MySQL environment',
      'Server-level caching & opcode acceleration',
      'Automatic security updates & staging options',
      'Optimized database query throughput',
      'Direct WooCommerce order workflow support',
    ],
    primaryLink: HOSTYCARE_LINKS.wordpress,
    primaryLabel: 'View WordPress Hosting',
    secondaryLink: HOSTYCARE_LINKS.woocommerce,
    secondaryLabel: 'View WooCommerce Store Plans',
    altLink: HOSTYCARE_LINKS.managedWp,
    altLabel: 'Managed WordPress Cloud',
    recommendedFor: 'Content blogs, WooCommerce merchants, publishing hubs',
  },
  {
    id: 'cloud-vps',
    title: 'Cloud VPS & Compute Servers',
    subtitle: 'Dedicated resources for custom applications and APIs',
    badge: 'High Performance',
    description:
      'Virtual Private Servers offering root or administrative access, dedicated RAM and CPU slices, and scalable NVMe bandwidth for custom full-stack applications.',
    features: [
      'Dedicated vCPU and memory allocation',
      'Full root SSH access for custom daemon deployment',
      'Support for Node.js, Python, Go, and Docker runtimes',
      'Enterprise-grade network peering',
      'Managed and self-managed operational options',
    ],
    primaryLink: HOSTYCARE_LINKS.fastVps,
    primaryLabel: 'View Fast VPS Instances',
    secondaryLink: HOSTYCARE_LINKS.vps,
    secondaryLabel: 'Standard VPS Plans',
    altLink: HOSTYCARE_LINKS.managedVps,
    altLabel: 'Fully Managed VPS Services',
    recommendedFor: 'Custom React/Node apps, mobile APIs, CRM/ERP backends',
  },
  {
    id: 'domain-email',
    title: 'Domains & Business Email',
    subtitle: 'Brand identity, DNS routing, and professional mailboxes',
    badge: 'Identity & Communication',
    description:
      'Secure your brand domain name and establish professional corporate mailboxes (`you@yourcompany.com`) with spam filtering and reliable deliverability.',
    features: [
      'Domain registration & DNS management tools',
      'Professional branded email addresses',
      'Webmail interface + IMAP/POP3/SMTP client support',
      'Anti-spam and SPF/DKIM record integration',
      'Seamless pointing to any hosting provider',
    ],
    primaryLink: HOSTYCARE_LINKS.domain,
    primaryLabel: 'Search & Register Domains',
    secondaryLink: HOSTYCARE_LINKS.emailHosting,
    secondaryLabel: 'View Business Email Hosting',
    recommendedFor: 'New business launches, rebrands, company communications',
  },
];

const FAQS = [
  {
    question: 'Who owns the hosting account and domain name?',
    answer:
      'You maintain 100% direct ownership. When you register hosting or a domain with Hostycare via our links, the account is created directly in your name with Hostycare billing. Zelvori does not act as a reseller and does not lock your infrastructure to our agency.',
  },
  {
    question: 'How does Zelvori benefit if I purchase hosting through these links?',
    answer:
      'Zelvori participates in the Hostycare affiliate referral program. If you choose to purchase an eligible hosting package through our verified links, we may earn a referral commission at no additional cost to you. This supports our free developer tools and open technical research.',
  },
  {
    question: 'Which hosting tier should I choose for my project?',
    answer:
      'For simple brochure websites and landing pages, Shared Web Hosting is usually sufficient. For blogs, marketing sites, and e-commerce stores running on WordPress, our recommendation is WordPress or WooCommerce Cloud. For custom software, REST APIs, or Next.js/Node backends, Cloud VPS provides the dedicated isolation required.',
  },
  {
    question: 'Can Zelvori set up and configure the hosting server for me?',
    answer:
      'Yes. While hosting billing remains directly between you and Hostycare, Zelvori offers professional setup, deployment, DNS configuration, SSL provisioning, and Git CI/CD automation as part of our web development and delivery services.',
  },
  {
    question: 'What if my organization requires AWS, Google Cloud, or Azure instead?',
    answer:
      'Zelvori is technology-agnostic. We architect projects on whatever infrastructure best serves the client’s operational scale, budget, and compliance mandates. We regularly deploy on Vercel, AWS, Cloudflare, Google Cloud, and enterprise private servers alongside traditional web hosting.',
  },
  {
    question: 'Can I upgrade my hosting plan as my website traffic grows?',
    answer:
      'Yes. Hostycare provides frictionless upgrade paths from shared environments to cloud VPS or dedicated servers as your bandwidth and compute requirements expand.',
  },
];

export default function HostycareHostingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Breadcrumb & Status */}
      <div className="border-b border-neutral-900 bg-neutral-900/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              Zelvori
            </Link>
            <span>/</span>
            <span className="text-neutral-300 font-medium">Hosting Recommendations</span>
            <span>/</span>
            <span className="text-emerald-400">Hostycare</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Partner Links
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-800/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <Server className="h-3.5 w-3.5" />
            Infrastructure Recommendations & Setup Guide
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Launch Your Website with the{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Right Hosting
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
            Reliable infrastructure is the operational foundation of every fast, secure web
            application. Explore Hostycare’s hosting tiers vetted for small business websites,
            WordPress platforms, e-commerce stores, and cloud VPS deployments.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={HOSTYCARE_LINKS.cloudHosting}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 rounded-xl liquid-glass-btn-primary px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all shadow-lg shadow-emerald-500/20"
            >
              Browse Cloud Hosting on Hostycare
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-xl liquid-glass-btn-secondary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:text-white"
            >
              Request Zelvori Setup Assistance
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Prominent Affiliate Disclosure (ASCI & FTC Alignment) */}
          <div className="mt-8 mx-auto max-w-3xl rounded-xl border border-emerald-500/30 liquid-glass-readable p-4 text-left sm:p-5">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <span className="font-semibold text-emerald-300">Affiliate Disclosure & Transparency Note: </span>
                Zelvori is an independent digital product engineering studio. Some links on this page are
                affiliate referral links. If you purchase hosting services through these links, Zelvori may
                earn a referral commission at <strong className="text-white">no additional cost to you</strong>.
                We recommend hosting infrastructure based on technical fit, storage performance, and budget
                proportionality. For full disclosure terms, please consult our{' '}
                <Link href="/affiliate-disclosure/" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300">
                  Affiliate Disclosure Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights (Provider-Stated Features) */}
      <section className="border-b border-neutral-900 bg-neutral-900/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            <div className="rounded-xl liquid-glass-card p-4 text-center">
              <HardDrive className="mx-auto h-6 w-6 text-emerald-400 mb-2" />
              <h3 className="text-sm font-semibold text-white">NVMe SSD Storage</h3>
              <p className="mt-1 text-xs text-neutral-400">High-speed IOPS for quick page loads</p>
            </div>
            <div className="rounded-xl liquid-glass-card p-4 text-center">
              <Shield className="mx-auto h-6 w-6 text-teal-400 mb-2" />
              <h3 className="text-sm font-semibold text-white">Automated SSL</h3>
              <p className="mt-1 text-xs text-neutral-400">Compliant HTTPS encryption included</p>
            </div>
            <div className="rounded-xl liquid-glass-card p-4 text-center">
              <Zap className="mx-auto h-6 w-6 text-amber-400 mb-2" />
              <h3 className="text-sm font-semibold text-white">DDoS Protection</h3>
              <p className="mt-1 text-xs text-neutral-400">Network-level traffic filtering</p>
            </div>
            <div className="rounded-xl liquid-glass-card p-4 text-center">
              <Headphones className="mx-auto h-6 w-6 text-indigo-400 mb-2" />
              <h3 className="text-sm font-semibold text-white">24/7 Tech Support</h3>
              <p className="mt-1 text-xs text-neutral-400">Ticket & live support from Hostycare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Tiers & Recommendations Grid */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Curated Hosting Categories
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl mx-auto">
              Select the hosting category that matches your application requirements, anticipated traffic,
              and operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {HOSTING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="flex flex-col justify-between rounded-2xl liquid-glass-card p-6 sm:p-8 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                      {tier.badge}
                    </span>
                    <span className="text-xs text-neutral-400">
                      Target: {tier.recommendedFor}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    {tier.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-emerald-400/90">
                    {tier.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 border-t border-neutral-800/80 pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Provider-Stated Features
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={tier.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl liquid-glass-btn-primary px-4 py-2.5 text-xs font-semibold text-neutral-950 transition"
                    >
                      {tier.primaryLabel}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href={tier.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl liquid-glass-btn-secondary px-4 py-2.5 text-xs font-semibold text-neutral-200 transition hover:text-white"
                    >
                      {tier.secondaryLabel}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {tier.altLink && (
                    <div className="mt-3 text-center">
                      <a
                        href={tier.altLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-emerald-400 transition"
                      >
                        Also available: {tier.altLabel}
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Verified Affiliate Links Directory */}
      <section className="border-t border-neutral-900 bg-neutral-900/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Quick Reference Directory: Verified Hostycare Services
            </h2>
            <p className="mt-2 text-xs text-neutral-400 max-w-2xl mx-auto">
              Direct links with verified Zelvori tracking identifiers for specific infrastructure requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Cloud Hosting', link: HOSTYCARE_LINKS.cloudHosting, desc: 'High-availability compute' },
              { name: 'Shared Web Hosting', link: HOSTYCARE_LINKS.sharedHosting, desc: 'Cost-effective entry plans' },
              { name: 'General Web Hosting', link: HOSTYCARE_LINKS.generalWeb, desc: 'Standard PHP / static stacks' },
              { name: 'WordPress Hosting', link: HOSTYCARE_LINKS.wordpress, desc: 'Optimized WP core runtime' },
              { name: 'Managed WordPress Cloud', link: HOSTYCARE_LINKS.managedWp, desc: 'Managed caching & updates' },
              { name: 'WooCommerce Hosting', link: HOSTYCARE_LINKS.woocommerce, desc: 'Online store transactions' },
              { name: 'E-commerce Solutions', link: HOSTYCARE_LINKS.ecommerce, desc: 'High concurrency catalogs' },
              { name: 'Fast VPS', link: HOSTYCARE_LINKS.fastVps, desc: 'High-frequency NVMe VPS' },
              { name: 'Standard VPS', link: HOSTYCARE_LINKS.vps, desc: 'Isolated virtual instances' },
              { name: 'Managed VPS', link: HOSTYCARE_LINKS.managedVps, desc: 'Sysadmin-managed virtual server' },
              { name: 'Business Email Hosting', link: HOSTYCARE_LINKS.emailHosting, desc: 'Custom domain mailboxes' },
              { name: 'Domain Registration', link: HOSTYCARE_LINKS.domain, desc: 'TLD search and DNS tools' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col justify-between rounded-xl liquid-glass-card p-4 transition-all hover:border-emerald-500/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-emerald-400">
                    <span>{item.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-500 group-hover:text-emerald-400 transition" />
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-400">{item.desc}</p>
                </div>
                <div className="mt-3 text-[10px] font-medium text-emerald-500/80 flex items-center gap-1">
                  <span>Visit Hostycare</span>
                  <ArrowRight className="h-2.5 w-2.5 transition group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Zelvori Setup Assistance Service Section */}
      <section className="border-t border-neutral-900 bg-neutral-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl liquid-glass-readable border border-emerald-500/20 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 mb-4">
                <Workflow className="h-3.5 w-3.5" />
                Optional Engineering Add-on
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need Zelvori to Configure and Deploy Your Infrastructure?
              </h2>
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Purchasing hosting is step one. Configuring DNS records, setting up TLS certificates,
                hardening server SSH policies, wiring automated Git deploy hooks, and tuning database
                concurrency require rigorous engineering.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom DNS & Cloudflare setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Zero-downtime Git CI/CD pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Automated daily offsite backups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Staging environments & rollbacks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl liquid-glass-card p-5">
                <h3 className="text-sm font-semibold text-white">Direct Client Sovereignty</h3>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  You retain complete account ownership and billing authority with Hostycare. Zelvori connects via
                  delegated credentials or temporary SSH keys during the deployment phase.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact/"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl liquid-glass-btn-primary px-4 py-3 text-xs font-semibold text-neutral-950 transition"
                  >
                    Discuss Hosting Setup with Zelvori
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-t border-neutral-900 bg-neutral-900/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Clear answers regarding infrastructure selection, billing ownership, and affiliate transparency.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl liquid-glass-card p-5 transition hover:border-emerald-500/40"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                    <p className="mt-2 text-xs text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-neutral-400">
            Have a specialized architecture question?{' '}
            <Link href="/contact/" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300">
              Contact our engineering team
            </Link>{' '}
            for a grounded technical discussion.
          </div>
        </div>
      </section>
    </main>
  );
}
