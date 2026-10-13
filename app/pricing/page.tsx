import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Clock,
  Sparkles,
  Server,
  CreditCard,
  Globe2,
  Cpu,
  FileCode,
  FileText,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparent Engineering Pricing & Packages',
  description:
    'Clear, fixed-scope software engineering packages with zero hidden fees. Inclusions, explicit limits, direct pass-through costs, and 30-day warranty.',
  alternates: {
    canonical: 'https://zelvori.software/pricing/',
  },
};

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  deliverables: string[];
  exclusions: string[];
  revisions: string;
  warranty: string;
  ctaText: string;
  serviceSlug: string;
}

interface PracticePricing {
  practiceId: string;
  practiceTitle: string;
  serviceSlug: string;
  previewSlug: string;
  tagline: string;
  tiers: PricingTier[];
}

const practicesPricing: PracticePricing[] = [
  {
    practiceId: 'web-development',
    practiceTitle: 'Web Application Development',
    serviceSlug: 'web-development',
    previewSlug: 'web-development',
    tagline: 'Modern Next.js 15, React, and TypeScript web platforms built for speed, SEO, and conversions.',
    tiers: [
      {
        name: 'Landing Page Sprint',
        price: '₹14,900',
        duration: '3–5 Business Days',
        deliverables: [
          '1 bespoke single-page Next.js web application (up to 6 scroll sections)',
          'Fully responsive design (mobile, tablet, ultra-wide)',
          'Interactive client contact brief builder',
          '95+ Google Lighthouse speed & performance score',
          'Complete on-page SEO meta tags & OpenGraph assets',
        ],
        exclusions: [
          'Multi-page dynamic routing',
          'Headless CMS integration',
          'User authentication & member database',
          'Shopping cart & payment gateway checkout',
        ],
        revisions: '2 rounds within agreed scope',
        warranty: '14 calendar days bug-fix support',
        ctaText: 'Scope Landing Page',
        serviceSlug: 'web-development',
      },
      {
        name: 'Core Business Platform',
        price: '₹39,900',
        duration: '7–12 Business Days',
        popular: true,
        deliverables: [
          'Up to 5 bespoke pages (Home, About, Services, Case Studies, Contact)',
          'Structured schema markup (Schema.org JSON-LD)',
          'Custom interactive UI components & subtle micro-animations',
          'Production static export or Vercel/Cloudflare deployment setup',
          'Full source code repository handover with documentation',
        ],
        exclusions: [
          'Backend user login / member dashboards',
          'Automated recurring subscription billing',
          'Multi-lingual internationalization (i18n)',
        ],
        revisions: '2 rounds within agreed scope',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Business Platform',
        serviceSlug: 'web-development',
      },
      {
        name: 'Growth Web Platform',
        price: '₹69,900+',
        duration: '14–21 Business Days',
        deliverables: [
          'Up to 10 bespoke high-performance pages',
          'Dynamic blog or portfolio CMS collection with markdown/MDX',
          'Advanced multi-parameter filtering & search',
          'Newsletter & CRM webhook integration',
          'Deep performance audit & Core Web Vitals optimization',
        ],
        exclusions: [
          'Custom enterprise ERP backend',
          'Real-time WebSocket data engines',
        ],
        revisions: '3 rounds within agreed scope',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Growth Platform',
        serviceSlug: 'web-development',
      },
    ],
  },
  {
    practiceId: 'mobile-apps',
    practiceTitle: 'Mobile Application Engineering',
    serviceSlug: 'mobile-apps',
    previewSlug: 'mobile-apps',
    tagline: 'High-fidelity mobile experiences engineered with Flutter or React Native for iOS and Android.',
    tiers: [
      {
        name: 'Clickable Mobile Prototype',
        price: '₹14,900',
        duration: '4–6 Business Days',
        deliverables: [
          'High-fidelity interactive mobile prototype (up to 8 core user screens)',
          'Design tokens, typography scale, and color system',
          'Clickable user journeys for investor pitches & stakeholder sign-off',
          'Exported asset bundle (SVG icons, splash screens, spec sheets)',
        ],
        exclusions: [
          'Production native code (Dart / React Native)',
          'Backend API integration or database setup',
          'App Store or Google Play Store submission',
        ],
        revisions: '2 rounds within agreed scope',
        warranty: 'Design asset guarantee',
        ctaText: 'Scope Mobile Prototype',
        serviceSlug: 'mobile-apps',
      },
      {
        name: 'Cross-Platform MVP',
        price: '₹1,49,000+',
        duration: '4–6 Weeks',
        popular: true,
        deliverables: [
          'Production cross-platform application (iOS & Android)',
          'Up to 10 production application screens with fluid navigation',
          'Secure token-based user authentication (JWT / OAuth / Supabase)',
          'RESTful / GraphQL backend API integration',
          'Push notification triggers & offline state caching',
          'Store build configuration (.ipa / .aab bundle outputs)',
        ],
        exclusions: [
          'Apple Developer Account ($99/yr) & Google Play Console ($25) fees',
          'Paid third-party SDK licenses or mapping API overages',
          'Continuous post-warranty feature additions',
        ],
        revisions: 'Iterative weekly milestone sign-offs',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Mobile MVP',
        serviceSlug: 'mobile-apps',
      },
    ],
  },
  {
    practiceId: 'ecommerce',
    practiceTitle: 'E-Commerce Solutions',
    serviceSlug: 'ecommerce',
    previewSlug: 'ecommerce',
    tagline: 'Lightning-fast digital storefronts designed for zero cart abandonment and verified checkouts.',
    tiers: [
      {
        name: 'Starter Online Store',
        price: '₹49,900',
        duration: '10–14 Business Days',
        deliverables: [
          'Product catalog support for up to 50 active SKUs',
          'Category filters, instant search, and product detail layouts',
          'Slide-over cart drawer with real-time price & tax calculation',
          'Razorpay or Stripe payment gateway checkout integration',
          'Automated order confirmation email dispatches',
        ],
        exclusions: [
          'Multi-warehouse logistics ERP synchronization',
          'Automated recurring subscription renewals',
          'Automated multi-country cross-border tax calculation',
        ],
        revisions: '2 rounds within agreed scope',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Starter Store',
        serviceSlug: 'ecommerce',
      },
      {
        name: 'Growth E-Commerce Storefront',
        price: '₹89,900+',
        duration: '3–4 Weeks',
        popular: true,
        deliverables: [
          'Product catalog support for up to 250 active SKUs',
          'Discount code, coupon rule engine & banner notifications',
          'Customer order history portal and account profile management',
          'Automated low-inventory notifications & abandoned cart webhooks',
          'Verified customer reviews widget and Schema.org product review markup',
          'Conversion analytics tracking setup (GA4 Enhanced Ecommerce & Meta Pixel)',
        ],
        exclusions: [
          'Bespoke shipping carrier hardware integration',
          'Multi-currency banking settlement reconciliation',
        ],
        revisions: '3 rounds within agreed scope',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Growth Store',
        serviceSlug: 'ecommerce',
      },
    ],
  },
  {
    practiceId: 'business-software',
    practiceTitle: 'Business Software & Internal Tools',
    serviceSlug: 'business-software',
    previewSlug: 'business-software',
    tagline: 'Custom CRM pipelines, HRMS modules, and operations portals that replace messy spreadsheets.',
    tiers: [
      {
        name: 'Discovery & Dashboard Prototype',
        price: '₹14,900',
        duration: '4–7 Business Days',
        deliverables: [
          'Detailed systems architecture and relational data model (ERD)',
          'User persona workflow maps for up to 3 organizational roles',
          'Interactive clickable dashboard UI prototype with realistic synthetic data',
          'Formal technical milestone roadmap and phased estimate document',
        ],
        exclusions: [
          'Production database deployment or migration',
          'Live production API connections',
        ],
        revisions: '2 rounds within agreed scope',
        warranty: 'Architecture document sign-off',
        ctaText: 'Scope Software Discovery',
        serviceSlug: 'business-software',
      },
      {
        name: 'Single Production Module',
        price: '₹1,49,000+',
        duration: '4–6 Weeks',
        popular: true,
        deliverables: [
          '1 fully functional production module (CRM Pipeline OR HRMS OR Inventory Ops)',
          'Granular Role-Based Access Control (Admin, Manager, Auditor)',
          'PostgreSQL relational schema with database migration scripts',
          'Tamper-evident audit trail logging for all sensitive modifications',
          'CSV / PDF reporting exports and responsive desktop/tablet portal',
        ],
        exclusions: [
          'Multi-tenant enterprise SaaS infrastructure partitioning',
          'Legacy on-premise mainframe reverse-engineering',
        ],
        revisions: 'Iterative sprint reviews',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Production Module',
        serviceSlug: 'business-software',
      },
    ],
  },
  {
    practiceId: 'ai-automation',
    practiceTitle: 'AI & Workflow Automation',
    serviceSlug: 'ai-automation',
    previewSlug: 'ai-automation',
    tagline: 'Deterministic, schema-locked LLM pipelines and automated integrations with human-in-the-loop oversight.',
    tiers: [
      {
        name: 'Single Workflow Pilot',
        price: '₹19,900',
        duration: '5–8 Business Days',
        deliverables: [
          '1 automated pipeline (e.g. Lead triage → Structured extraction → CRM dispatch)',
          'Zod / Pydantic schema validation preventing LLM hallucinations',
          'Human-in-the-loop review threshold for low-confidence classifications',
          'Discord / Slack / Email alert trigger integration',
          'Detailed operational runbook and credential security checklist',
        ],
        exclusions: [
          'Multi-agent autonomous swarm architectures',
          'Proprietary model fine-tuning or custom weight training',
          'Upstream LLM token costs (client connects own API key)',
        ],
        revisions: '2 rounds of prompt and threshold tuning',
        warranty: '14 calendar days bug-fix support',
        ctaText: 'Scope Single Workflow',
        serviceSlug: 'ai-automation',
      },
      {
        name: 'Multi-Workflow Suite (3 Workflows)',
        price: '₹49,900+',
        duration: '2–3 Weeks',
        popular: true,
        deliverables: [
          '3 connected business workflows (e.g. Document parsing + CRM sync + follow-up dispatch)',
          'Robust fallback mechanisms and automated retry policies',
          'Audit logging of all pipeline inputs, token usage, and system outputs',
          'Configurable human approval review interface',
          'Monitoring dashboard displaying throughput, error rates, and latency',
        ],
        exclusions: [
          'Proprietary LLM server hosting / on-prem GPU cluster operations',
          'Direct customer service voice synthesis bots',
        ],
        revisions: 'Iterative integration testing rounds',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Workflow Suite',
        serviceSlug: 'ai-automation',
      },
    ],
  },
  {
    practiceId: 'custom-software',
    practiceTitle: 'Custom Software Engineering',
    serviceSlug: 'custom-software',
    previewSlug: 'custom-software',
    tagline: 'Tailored full-stack platforms engineered from first principles with resilient modular architecture.',
    tiers: [
      {
        name: 'Architecture & Discovery Sprint',
        price: '₹14,900',
        duration: '5 Business Days',
        deliverables: [
          'Formal Software Architecture Document (SAD) & System Requirements Spec',
          'Relational database schema blueprints (PostgreSQL ERD)',
          'OpenAPI / Swagger REST endpoint specifications',
          'Component hierarchy & state management architecture',
          'Fixed-scope milestone delivery roadmap with risk analysis',
        ],
        exclusions: [
          'Production code deployment',
          'Third-party cloud infrastructure hosting',
        ],
        revisions: 'Full review sprint meeting & sign-off',
        warranty: 'Architectural specification sign-off',
        ctaText: 'Scope Architecture Sprint',
        serviceSlug: 'custom-software',
      },
      {
        name: 'Focused Custom MVP',
        price: '₹1,99,000+',
        duration: '6–8 Weeks',
        popular: true,
        deliverables: [
          'End-to-end bespoke web & API application built with Next.js/Node/Go',
          'Relational PostgreSQL / MySQL database with automated migrations',
          'Secure authentication, session management, and role-based permissions',
          'Core business logic engine tailored precisely to your operational workflow',
          'Automated unit & integration test coverage for core domain logic',
          'GitHub Actions CI/CD deployment pipeline configuration',
        ],
        exclusions: [
          'Unbounded scope variations without change orders',
          'Enterprise single-sign-on (SSO / SAML 2.0) unless pre-scoped',
        ],
        revisions: 'Bi-weekly milestone demonstrations',
        warranty: '30 calendar days bug-fix support',
        ctaText: 'Scope Custom MVP',
        serviceSlug: 'custom-software',
      },
    ],
  },
  {
    practiceId: 'application-security',
    practiceTitle: 'Application Security & Engineering Review',
    serviceSlug: 'application-security',
    previewSlug: 'application-security',
    tagline: 'Pragmatic, evidence-based code audits and architectural reviews that fix actual vulnerabilities before launch.',
    tiers: [
      {
        name: 'Baseline Security Review',
        price: '₹14,900',
        duration: '3–5 Business Days',
        deliverables: [
          'Static Application Security Testing (SAST) of repository codebase',
          'Direct and transitive dependency vulnerability audit with remediation paths',
          'HTTP security headers, TLS configuration, and transport posture review',
          'Architectural threat modeling assessment for primary data flows',
          'Prioritized remediation report with exact code patch recommendations',
        ],
        exclusions: [
          'Active black-box penetration testing or network exploit attempts',
          '24/7 Security Operations Center (SOC) monitoring',
          'Formal ISO 27001 / SOC 2 Type II compliance certification',
        ],
        revisions: '1 review call to walk through technical findings',
        warranty: 'Report verification & patch guidance',
        ctaText: 'Scope Baseline Review',
        serviceSlug: 'application-security',
      },
      {
        name: 'Deep Code & Auth Assessment',
        price: '₹39,900+',
        duration: '7–10 Business Days',
        popular: true,
        deliverables: [
          'Comprehensive manual code review of authentication & authorization paths',
          'Business logic vulnerability analysis (IDOR, role escalation, session fixation)',
          'OWASP Top 10 mitigation verification with custom unit test assertions',
          'API input validation, SQLi/NoSQLi prevention, and SSRF audit',
          'Re-test verification of implemented code patches within 14 days of report',
        ],
        exclusions: [
          'Physical social engineering or phishing assessments',
          'Third-party cloud infrastructure root compromise testing',
        ],
        revisions: 'Includes 1 re-test round of remediated findings',
        warranty: 'Patch verification sign-off',
        ctaText: 'Scope Deep Assessment',
        serviceSlug: 'application-security',
      },
    ],
  },
];

const passThroughCosts = [
  {
    category: 'Domain Registration',
    provider: 'Name.com / Cloudflare / GoDaddy',
    estimatedCost: '₹800 – ₹1,500 / year (typical .com / .software)',
    billingModel: 'Billed directly to client credit card. Client maintains 100% legal registrant ownership.',
  },
  {
    category: 'Application Hosting',
    provider: 'Vercel / Cloudflare Pages / AWS / Hetzner',
    estimatedCost: '₹0 (Free tier) to ₹1,800 / month (Pro plans)',
    billingModel: 'Direct account with host. Zelvori configures deployment pipelines without hosting markups.',
  },
  {
    category: 'Database & Backend',
    provider: 'Supabase / Neon / AWS RDS / DigitalOcean',
    estimatedCost: '₹0 to ₹2,500 / month depending on storage & compute',
    billingModel: 'Client provisions or links credit card directly to their cloud database console.',
  },
  {
    category: 'Payment Gateways',
    provider: 'Razorpay / Cashfree / Stripe',
    estimatedCost: 'Standard 2% transaction fee (no monthly software fee)',
    billingModel: 'Merchant payout settlements flow directly into the client\'s verified corporate bank account.',
  },
  {
    category: 'AI / LLM API Tokens',
    provider: 'Google Gemini / OpenAI / Anthropic',
    estimatedCost: 'Usage-based (e.g. ₹0.10 – ₹5 per 1,000 tokens)',
    billingModel: 'Client supplies developer API keys. Zero token surcharge or proxy markup.',
  },
  {
    category: 'Mobile App Developer Fees',
    provider: 'Apple Developer / Google Play Console',
    estimatedCost: 'Apple: $99/year (~₹8,300) | Google: $25 one-time (~₹2,100)',
    billingModel: 'Paid directly to Apple and Google for organizational publisher verification.',
  },
];

const agencyComparison = [
  {
    criteria: 'Scope & Deliverables',
    traditionalAgency: 'Vague estimates that lead to scope creep and surprise add-on invoices.',
    freelancer: 'Unpredictable scope boundaries and ad-hoc communication.',
    zelvori: 'Fixed Statement of Work (SOW) with line-item screen counts, limits, and exclusions.',
  },
  {
    criteria: 'Infrastructure & Hosting',
    traditionalAgency: 'Marked up 200–400% on monthly retainers, locking you into their servers.',
    freelancer: 'Unmanaged personal server setups with zero documentation.',
    zelvori: 'Direct pass-through. You own all cloud accounts, domain registrations, and API keys.',
  },
  {
    criteria: 'Progress Verification',
    traditionalAgency: 'Static screenshots and progress reports with weeks of radio silence.',
    freelancer: 'Local screenshots without staged testing environments.',
    zelvori: 'Interactive preview prototypes, staged preview branches, and weekly verified milestones.',
  },
  {
    criteria: 'Intellectual Property',
    traditionalAgency: 'Proprietary themes with restricted license keys and code lock-in.',
    freelancer: 'Ambiguous IP ownership and informal GitHub transfers.',
    zelvori: '100% full IP ownership, unencumbered source code, design files, and documentation.',
  },
  {
    criteria: 'Post-Launch Warranty',
    traditionalAgency: 'Immediate billing of expensive hourly maintenance retainers.',
    freelancer: 'Disappears or takes weeks to respond to post-launch regressions.',
    zelvori: 'Complimentary 30-day bug-fix warranty on all agreed specifications.',
  },
];

const milestoneProcess = [
  {
    step: '01',
    name: 'Discovery & Fixed-Scope SOW',
    timeline: 'Days 1–3',
    description: 'We finalize page counts, user journeys, data models, and pass-through requirements. You receive a binding, transparent Statement of Work with zero ambiguity.',
  },
  {
    step: '02',
    name: 'Design Tokens & Interactive Preview',
    timeline: 'Week 1',
    description: 'We construct verified Figma or code components. You test interactive flows in a live sandbox before backend construction starts.',
  },
  {
    step: '03',
    name: 'Engineered Sprints & Staging Builds',
    timeline: 'Weeks 2–4',
    description: 'Feature development on dedicated feature branches. Bi-weekly preview deployments allow you to inspect progress on real devices.',
  },
  {
    step: '04',
    name: 'Security Audit & Final Launch',
    timeline: 'Launch Week',
    description: 'SAST code scan, Lighthouse optimization, DNS mapping to your production domain, and full repository transfer with 30 days warranty support.',
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 lg:py-24 space-y-20 lg:space-y-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Commercial Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
          Honest, Fixed-Scope Engineering. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Zero Hidden Surcharges.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Every Zelvori package has explicit limits, documented deliverables, and direct pass-through cloud costs. No inflated hosting markups, no hostage code.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#packages"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-950/50"
          >
            Explore Practice Packages
          </a>
          <a
            href="#pass-through"
            className="px-6 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
          >
            Third-Party Pass-Through Rules
          </a>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Explicit Line-Item Limits</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We define exact screen counts, database entities, revision rounds, and turnaround days upfront so both sides have perfect alignment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Zero Infrastructure Markup</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Domains, cloud servers, database instances, and AI API tokens are billed directly to your own accounts. You never pay a host middleman fee.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">30-Day Warranty &amp; Full IP</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You receive full Git repository rights, database DDL schemas, and a 30-day bug-fix guarantee against all written specifications upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Pricing Packages */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            India Launch Pricing (INR)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Practice Packages &amp; Commercial Scopes
          </h2>
          <p className="text-sm text-slate-400">
            Rates reflect introductory launch pricing for the Indian market. Every package can be customized or expanded based on your technical architecture requirements.
          </p>
        </div>

        <div className="space-y-16">
          {practicesPricing.map((practice) => (
            <div key={practice.practiceId} className="space-y-6">
              {/* Practice Header with Preview Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {practice.practiceTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {practice.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/previews/${practice.previewSlug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium hover:bg-cyan-900/50 transition-colors"
                  >
                    <span>Try Interactive Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/services/${practice.serviceSlug}`}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    Practice Specs
                  </Link>
                </div>
              </div>

              {/* Tiers Grid */}
              <div className={`grid grid-cols-1 ${practice.tiers.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                {practice.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                      tier.popular
                        ? 'bg-slate-900/90 border-cyan-500/40 shadow-xl shadow-cyan-950/20 relative'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-slate-200">{tier.name}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {tier.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Estimated: {tier.duration}</span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          What&apos;s Included
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {tier.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exclusions */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                          Explicit Limits &amp; Exclusions
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-400">
                          {tier.exclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <XCircle className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                              <span className="text-slate-400">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                        <div>
                          <span className="text-slate-500 block">Revisions:</span>
                          <span className="text-slate-300 font-medium">{tier.revisions}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Warranty:</span>
                          <span className="text-emerald-400 font-medium">{tier.warranty}</span>
                        </div>
                      </div>

                      <Link
                        href={`/contact?service=${tier.serviceSlug}`}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                          tier.popular
                            ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                            : 'bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700'
                        }`}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third-Party Pass-Through Costs Section */}
      <section id="pass-through" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Zero Markups Guaranteed
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Third-Party Infrastructure Pass-Through Rules
          </h2>
          <p className="text-sm text-slate-400">
            Many traditional agencies bundle hosting into opaque monthly fees with heavy markups. At Zelvori, you retain 100% direct ownership of every cloud account and pay suppliers at wholesale market rates.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Cost Category</th>
                <th className="py-3.5 px-4 sm:px-6">Common Providers</th>
                <th className="py-3.5 px-4 sm:px-6">Estimated Cost</th>
                <th className="py-3.5 px-4 sm:px-6">Billing &amp; Ownership Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {passThroughCosts.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400 font-mono text-xs">
                    {item.provider}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-cyan-300 font-medium">
                    {item.estimatedCost}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-slate-300 leading-relaxed">
                    {item.billingModel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* International Clients Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Globe2 className="w-4 h-4" />
            <span>Cross-Border Engagements</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            International Clients (US, UK, Europe &amp; Middle East)
          </h3>
          <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
            For clients based outside India, we provide bespoke Statements of Work in USD ($), EUR (€), or GBP (£). International rates account for cross-border invoicing compliance, GST export exemptions under Letter of Undertaking (LUT), tailored international wire settlements, and dedicated timezone coordination with our senior engineering team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors"
            >
              <span>Request International Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional Agency vs Zelvori */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            The Zelvori Standard
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            What Makes Zelvori Different
          </h2>
          <p className="text-sm text-slate-400">
            Compare our engineered methodology against standard agency practices and unpredictable freelancer arrangements.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Engineering Decision</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-400">Traditional Agency</th>
                <th className="py-3.5 px-4 sm:px-6 text-slate-400">Freelancer</th>
                <th className="py-3.5 px-4 sm:px-6 text-cyan-400 bg-cyan-950/20">Zelvori Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {agencyComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    {row.criteria}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400 text-xs leading-relaxed">
                    {row.traditionalAgency}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400 text-xs leading-relaxed">
                    {row.freelancer}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-200 text-xs font-medium leading-relaxed bg-cyan-950/10">
                    <span className="text-cyan-300 font-semibold">{row.zelvori}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Milestone Delivery Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Structured Execution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Milestone SOW &amp; Delivery Roadmap
          </h2>
          <p className="text-sm text-slate-400">
            How every engagement moves from formal specification to verified production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestoneProcess.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-cyan-400/80 font-mono">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                    {item.timeline}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Security Disclaimer Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200/90 text-xs leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-300 uppercase tracking-wider text-[11px]">
            <ShieldCheck className="w-4 h-4" />
            <span>Application Security Practice Boundary Disclosure</span>
          </div>
          <p>
            Zelvori Application Security services consist of static code analysis (SAST), dependency auditing, HTTP header hardening, architectural threat modeling, and OWASP Top 10 code remediation. These reviews do <strong>not</strong> constitute an active third-party network penetration test, CREST accreditation, 24/7 Security Operations Center (SOC) monitoring, or ISO/SOC 2 formal compliance certification.
          </p>
        </div>
      </section>

      {/* Commercial Terms & Owner Approval Disclosure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>Commercial Notice &amp; Scope Formalization</span>
          </div>
          <p>
            All listed package prices, effort timelines, and warranty terms represent baseline engineering benchmarks. Engagements are customized to client specifications and formalized under a signed Statement of Work (SOW) approved by the Zelvori project owner prior to project commencement.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Scope Your Next Product?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Tell us about your target timeline, features, and desired architecture. We provide a binding, line-item Statement of Work within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-950/50"
            >
              Request Project Proposal
            </Link>
            <Link
              href="/previews"
              className="px-6 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors"
            >
              Browse All Practice Previews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
