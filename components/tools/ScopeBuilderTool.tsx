'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  Layers,
  ShieldCheck,
  Cpu,
  Clock,
  Check,
  Copy,
  Download,
  ArrowRight,
  Database,
  Lock,
  Workflow,
  Sparkles,
  CreditCard,
  MessageSquare,
  Bot,
  Server,
  Cloud,
  FileText,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

interface ProjectTypeOption {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  baseWeeks: number;
  icon: React.ElementType;
  defaultStack: string[];
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'saas',
    name: 'B2B / Multi-Tenant SaaS Platform',
    shortName: 'SaaS Platform',
    tagline: 'High-conversion Next.js 15 web platform with tenant isolation, auth, and billing.',
    baseWeeks: 4,
    icon: Layers,
    defaultStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile App (iOS & Android)',
    shortName: 'Mobile App',
    tagline: 'Native performance with React Native, offline-first sync, and push notifications.',
    baseWeeks: 5,
    icon: Compass,
    defaultStack: ['React Native / Expo', 'TypeScript', 'Node.js API', 'PostgreSQL', 'Secure Storage'],
  },
  {
    id: 'ecommerce',
    name: 'High-Volume Headless E-Commerce',
    shortName: 'E-Commerce',
    tagline: 'Sub-second catalog storefront, delta inventory sync, and multi-currency checkout.',
    baseWeeks: 4,
    icon: CreditCard,
    defaultStack: ['Next.js App Router', 'TypeScript', 'Shopify Plus / Medusa', 'Stripe', 'Redis'],
  },
  {
    id: 'business-software',
    name: 'Enterprise ERP, CRM & Operations Backbone',
    shortName: 'Business ERP/CRM',
    tagline: 'Tailored operational software with audit logging, multi-branch inventory, and custom approval workflows.',
    baseWeeks: 6,
    icon: Workflow,
    defaultStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'BullMQ Queue', 'Docker'],
  },
  {
    id: 'ai-automation',
    name: 'AI Integration & Intelligent Workflow Agents',
    shortName: 'AI Automation',
    tagline: 'RAG knowledge base, automated document extraction, and function-calling LLM workflows.',
    baseWeeks: 4,
    icon: Bot,
    defaultStack: ['Python / TypeScript', 'FastAPI', 'LangChain', 'pgvector', 'Next.js UI'],
  },
  {
    id: 'custom-platform',
    name: 'Custom Distributed Microservices & APIs',
    shortName: 'Distributed Platform',
    tagline: 'High-concurrency distributed backend, message queues, and resilient API gateways.',
    baseWeeks: 5,
    icon: Cpu,
    defaultStack: ['Go / Node.js', 'Next.js', 'PostgreSQL', 'Redis Pub/Sub', 'Kubernetes'],
  },
];

interface CapabilityFeature {
  id: string;
  category: 'Identity & Access' | 'Data & Storage' | 'Monetization' | 'Real-Time' | 'AI & Automation' | 'Security';
  name: string;
  description: string;
  addedWeeks: number;
}

const CAPABILITIES: CapabilityFeature[] = [
  // Identity
  {
    id: 'auth-basic',
    category: 'Identity & Access',
    name: 'Session Auth & Passwordless Sign-In',
    description: 'PKCE-compliant magic links, password hashing (Argon2), and secure session tokens.',
    addedWeeks: 0.5,
  },
  {
    id: 'auth-rbac',
    category: 'Identity & Access',
    name: 'Granular Role-Based Permissions (RBAC)',
    description: 'Hierarchical role matrices, team seat invitations, and admin permission gates.',
    addedWeeks: 1.0,
  },
  {
    id: 'auth-sso',
    category: 'Identity & Access',
    name: 'Enterprise SSO (OAuth2 / SAML)',
    description: 'Single Sign-On integration with Google Workspace, Microsoft Azure AD, or Okta.',
    addedWeeks: 1.0,
  },

  // Data & Storage
  {
    id: 'db-relational',
    category: 'Data & Storage',
    name: 'ACID Relational Store & Migrations',
    description: 'Normalized PostgreSQL schema, connection pooling, and automated schema migrations.',
    addedWeeks: 0.5,
  },
  {
    id: 'db-multitenant',
    category: 'Data & Storage',
    name: 'Multi-Tenant Row-Level Security (RLS)',
    description: 'Cryptographic or tenant-isolated database policies preventing cross-tenant leakage.',
    addedWeeks: 1.5,
  },
  {
    id: 'db-vault',
    category: 'Data & Storage',
    name: 'Encrypted Document & Media Vault',
    description: 'S3/GCS private pre-signed uploads with server-side AES-256 encryption.',
    addedWeeks: 1.0,
  },

  // Monetization
  {
    id: 'pay-recurring',
    category: 'Monetization',
    name: 'Recurring Subscriptions & Invoicing',
    description: 'Stripe Billing or Razorpay Subscriptions with automated pro-rations and dunning.',
    addedWeeks: 1.0,
  },
  {
    id: 'pay-split',
    category: 'Monetization',
    name: 'Marketplace Split Payouts & Escrow',
    description: 'Automated commission deductions, seller payouts, and escrow release triggers.',
    addedWeeks: 1.5,
  },

  // Real-Time
  {
    id: 'rt-websockets',
    category: 'Real-Time',
    name: 'Live WebSockets & Presence Sync',
    description: 'Bidirectional state synchronization, collaborative editors, or real-time status feeds.',
    addedWeeks: 1.0,
  },
  {
    id: 'rt-notifications',
    category: 'Real-Time',
    name: 'Omnichannel Alerts (Email / Push / WhatsApp)',
    description: 'Multi-provider transactional delivery (Resend, Firebase Cloud Messaging, WhatsApp Desk).',
    addedWeeks: 0.5,
  },

  // AI & Automation
  {
    id: 'ai-rag',
    category: 'AI & Automation',
    name: 'Vector Database & RAG Knowledge Pipeline',
    description: 'Context-grounded query retrieval using pgvector / Pinecone with chunked embeddings.',
    addedWeeks: 1.5,
  },
  {
    id: 'ai-extraction',
    category: 'AI & Automation',
    name: 'Automated Document & Invoice Extraction',
    description: 'OCR processing, structured JSON schema parsing, and confidence scoring validation.',
    addedWeeks: 1.0,
  },

  // Security
  {
    id: 'sec-zerotrust',
    category: 'Security',
    name: '6-Tier Zero-Trust Architecture & Edge WAF',
    description: 'Cloudflare / Edge reverse proxy, strict Content Security Policy (CSP), and rate limiting.',
    addedWeeks: 0.5,
  },
  {
    id: 'sec-audit',
    category: 'Security',
    name: 'Immutable Audit Trail & STRIDE Review',
    description: 'Tamper-evident system event logging and formal STRIDE threat modeling documentation.',
    addedWeeks: 1.0,
  },
];

interface CloudTarget {
  id: string;
  name: string;
  description: string;
}

const CLOUD_TARGETS: CloudTarget[] = [
  { id: 'aws', name: 'Amazon Web Services (AWS)', description: 'ECS Fargate, Aurora PostgreSQL & S3' },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', description: 'Cloud Run, Cloud SQL & Cloud Storage' },
  { id: 'vercel', name: 'Vercel Edge Network', description: 'Serverless Edge Functions + Managed Postgres' },
  { id: 'hostycare', name: 'Hostycare NVMe Cloud VPS', description: 'High-performance sovereign NVMe cloud instance' },
];

export function ScopeBuilderTool() {
  const [selectedType, setSelectedType] = useState<string>('saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth-basic',
    'auth-rbac',
    'db-relational',
    'sec-zerotrust',
  ]);
  const [selectedCloud, setSelectedCloud] = useState<string>('gcp');
  const [copied, setCopied] = useState<boolean>(false);

  const currentProject = useMemo(() => {
    return PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];
  }, [selectedType]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalCalculatedWeeks = useMemo(() => {
    const featureWeeks = selectedFeatures.reduce((acc, featId) => {
      const feat = CAPABILITIES.find((c) => c.id === featId);
      return acc + (feat?.addedWeeks || 0);
    }, 0);
    return Math.round((currentProject.baseWeeks + featureWeeks) * 2) / 2;
  }, [currentProject, selectedFeatures]);

  const activeFeatures = useMemo(() => {
    return CAPABILITIES.filter((c) => selectedFeatures.includes(c.id));
  }, [selectedFeatures]);

  const sprintPhases = useMemo(() => {
    const total = totalCalculatedWeeks;
    const p1 = Math.max(1, Math.round(total * 0.2));
    const p2 = Math.max(2, Math.round(total * 0.45));
    const p3 = Math.max(1, Math.round(total * 0.25));
    const p4 = Math.max(1, total - (p1 + p2 + p3));

    return [
      {
        phase: 'Phase 01',
        title: 'Architecture, Schemas & Discovery',
        weeks: p1,
        deliverables: ['System Architecture Diagram', 'Entity-Relationship Schemas', 'API Contract Specs', 'STRIDE Threat Model'],
      },
      {
        phase: 'Phase 02',
        title: 'Core Engine & Primary MVP Flows',
        weeks: p2,
        deliverables: ['Primary User Authentication & RBAC', 'Core Business Logic Implementation', 'Interactive Staging Deployments', 'Unit & Integration Test Suites'],
      },
      {
        phase: 'Phase 03',
        title: 'Integrations, Security Gates & Scale',
        weeks: p3,
        deliverables: ['Third-Party API & Payment Gateways', 'Zero-Trust Security Controls', 'Performance Benchmarking', 'Vulnerability Scans'],
      },
      {
        phase: 'Phase 04',
        title: 'Production Verification & Handover',
        weeks: p4,
        deliverables: ['100% Repository Transfer', 'Deployment Runbooks & SLA Setup', 'DNS & Production Launch', 'Post-Launch 30-Day Warranty'],
      },
    ];
  }, [totalCalculatedWeeks]);

  const markdownBrief = useMemo(() => {
    const cloud = CLOUD_TARGETS.find((c) => c.id === selectedCloud);
    return [
      `# Project Technical Scoping Brief — Zelvori Architecture Lab`,
      `**Generated Date:** ${new Date().toISOString().split('T')[0]}`,
      `**Platform:** https://zelvori.software/tools/scope-builder/`,
      ``,
      `## 1. Project Classification`,
      `- **Type:** ${currentProject.name}`,
      `- **Core Architecture:** ${currentProject.tagline}`,
      `- **Target Infrastructure:** ${cloud?.name} (${cloud?.description})`,
      `- **Estimated Sprint Cadence:** ~${totalCalculatedWeeks} engineering weeks (Subject to final SOW)`,
      ``,
      `## 2. Recommended Baseline Stack`,
      currentProject.defaultStack.map((s) => `- ${s}`).join('\n'),
      ``,
      `## 3. Selected Functional Capabilities (${activeFeatures.length} features)`,
      activeFeatures
        .map((f) => `- **[${f.category}] ${f.name}**: ${f.description}`)
        .join('\n'),
      ``,
      `## 4. Indicative Phased Delivery Roadmap`,
      sprintPhases
        .map(
          (p) =>
            `### ${p.phase}: ${p.title} (~${p.weeks} weeks)\n` +
            p.deliverables.map((d) => `  - ${d}`).join('\n')
        )
        .join('\n\n'),
      ``,
      `## 5. Commercial & Technical Transparency Notice`,
      `This technical brief was synthesized using the client-side Zelvori Architecture Lab. Estimated durations are indicative technical guidelines. Formal commercial milestones, fixed fee quotations, and acceptance criteria are finalized under a bilateral Statement of Work (SOW).`,
      ``,
      `Engineering Contact: ${siteConfig.contact.email} | WhatsApp: ${siteConfig.contact.whatsapp}`,
    ].join('\n');
  }, [currentProject, selectedCloud, totalCalculatedWeeks, activeFeatures, sprintPhases]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdownBrief], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zelvori-project-scope-${currentProject.id}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setSelectedType('saas');
    setSelectedFeatures(['auth-basic', 'auth-rbac', 'db-relational', 'sec-zerotrust']);
    setSelectedCloud('gcp');
  };

  const mailtoInquiry = useMemo(() => {
    const subject = encodeURIComponent(`Project Architecture Brief: ${currentProject.shortName}`);
    const body = encodeURIComponent(
      `Hello Zelvori Engineering Desk,\n\nI have configured my technical project brief via your Architecture Lab:\n\n` +
        `- Project Type: ${currentProject.name}\n` +
        `- Target Cloud: ${selectedCloud.toUpperCase()}\n` +
        `- Selected Capabilities: ${activeFeatures.map((f) => f.name).join(', ')}\n` +
        `- Estimated Delivery Duration: ~${totalCalculatedWeeks} weeks\n\n` +
        `Please review the requirements and provide initial architectural feedback and consultation availability.\n\nBest regards.`
    );
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }, [currentProject, selectedCloud, activeFeatures, totalCalculatedWeeks]);

  return (
    <div className="space-y-12">
      {/* Configuration Matrix Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl liquid-glass-card border-cyan-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Interactive Engineering Configurator</h2>
            <p className="text-xs text-slate-400">100% Client-Side Evaluation · Zero Tracking · Instant Markdown Spec</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Configuration</span>
        </button>
      </div>

      {/* Main Grid: Controls vs Live Architecture Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Selectors (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Product Classification */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                STEP 01
              </span>
              <h3 className="text-lg font-bold text-white">Select Product Classification</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((pt) => {
                const isSelected = selectedType === pt.id;
                const IconComponent = pt.icon;

                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedType(pt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'border-cyan-400/80 bg-cyan-950/40 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/50'
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                        Base: ~{pt.baseWeeks} wks
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white mb-1">{pt.name}</div>
                      <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{pt.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 2: Architecture Capabilities */}
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  STEP 02
                </span>
                <h3 className="text-lg font-bold text-white">Select Technical Capabilities</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {selectedFeatures.length} of {CAPABILITIES.length} selected
              </span>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {['Identity & Access', 'Data & Storage', 'Monetization', 'Real-Time', 'AI & Automation', 'Security'].map(
                (category) => {
                  const items = CAPABILITIES.filter((c) => c.category === category);

                  return (
                    <div key={category} className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        {category}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {items.map((item) => {
                          const isChecked = selectedFeatures.includes(item.id);

                          return (
                            <div
                              key={item.id}
                              onClick={() => toggleFeature(item.id)}
                              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                isChecked
                                  ? 'border-cyan-500/60 bg-cyan-950/30 text-white'
                                  : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 text-slate-300'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                                  isChecked
                                    ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                                    : 'border-slate-700 bg-slate-800'
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>

                              <div className="space-y-0.5 flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold truncate">{item.name}</span>
                                  <span className="text-[10px] font-mono text-cyan-400 shrink-0">
                                    +{item.addedWeeks}w
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          {/* STEP 3: Infrastructure Target */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                STEP 03
              </span>
              <h3 className="text-lg font-bold text-white">Target Infrastructure Host</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CLOUD_TARGETS.map((target) => {
                const isSelected = selectedCloud === target.id;

                return (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setSelectedCloud(target.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'border-cyan-400/80 bg-cyan-950/30 text-white'
                        : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-700'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{target.name}</div>
                      <div className="text-[11px] text-slate-400">{target.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Column: Real-Time Scope & Architecture Dashboard (5 cols) */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          <div className="p-6 rounded-3xl liquid-glass-card border-cyan-500/40 shadow-2xl space-y-6">
            {/* Header Estimate Box */}
            <div className="space-y-3 pb-5 border-b border-white/10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Estimated Sprint Cadence
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-mono">
                  Calculated Live
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  ~{totalCalculatedWeeks}
                </span>
                <span className="text-base text-slate-300 font-medium">Engineering Weeks</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Projected across a structured 4-phase agile lifecycle with bi-weekly testable staging releases.
              </p>
            </div>

            {/* Baseline Architecture Stack */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recommended Stack</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {currentProject.defaultStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Phased Roadmap Timeline */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sprint Breakdown</span>
              </div>

              <div className="space-y-2">
                {sprintPhases.map((phase) => (
                  <div
                    key={phase.phase}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-cyan-400 font-semibold text-[11px]">
                        {phase.phase} · {phase.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 font-bold">
                        ~{phase.weeks} wks
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {phase.deliverables.slice(0, 2).join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Brief!' : 'Copy Spec'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .md</span>
                </button>
              </div>

              <a
                href={mailtoInquiry}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Email Brief to Engineering Desk</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href={`/contact?service=${currentProject.id}`}
                className="w-full py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-xs text-center transition flex items-center justify-center gap-1"
              >
                <span>Or open custom web inquiry form &rarr;</span>
              </Link>
            </div>

            {/* Transparency Note */}
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-[11px] text-amber-200/90 leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Scoping Notice:</strong> Estimations are indicative architectural guidelines. Formal commercial milestones and SOW deliverables are agreed during formal discovery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
