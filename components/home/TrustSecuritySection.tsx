'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  FileCode2,
  Database,
  Cpu,
  RefreshCw,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Layers,
  Terminal,
} from 'lucide-react';

type ControlClassification =
  | 'CORE ENGINEERING PRACTICE'
  | 'PROJECT-LEVEL CONTROL'
  | 'INFRASTRUCTURE EXTENSION'
  | 'SCOPED SECURITY ASSESSMENT';

interface SecurityPillar {
  id: string;
  title: string;
  classification: ControlClassification;
  summary: string;
  scope: string;
  technicalControls: string[];
  verificationMethod: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: SecurityPillar[] = [
  {
    id: 'threat-modeling',
    title: 'Security-by-Design & Threat Modeling',
    classification: 'CORE ENGINEERING PRACTICE',
    summary:
      'We identify architectural trust boundaries, data flows, and potential abuse cases during discovery before writing implementation code.',
    scope: 'Applied to all custom systems, API architectures, and data-flow specifications.',
    technicalControls: [
      'STRIDE / PASTA architectural threat decomposition',
      'Trust boundary identification across client, API gateway, and datastores',
      'Data classification schema (Public, Internal, Confidential, Restricted)',
    ],
    verificationMethod: 'Architectural RFC reviews and security design checklists before sprint launch.',
    icon: ShieldCheck,
  },
  {
    id: 'identity-access',
    title: 'Least-Privilege Identity & Access Control',
    classification: 'PROJECT-LEVEL CONTROL',
    summary:
      'Defensive authentication and authorization frameworks ensuring users and service identities access only what their role strictly requires.',
    scope: 'Configured for B2B portals, SaaS backends, and multi-tenant systems.',
    technicalControls: [
      'Row-Level Security (PostgreSQL RLS) enforcing tenant isolation at query runtime',
      'OAuth 2.1 & OpenID Connect with short-lived access tokens and refresh rotation',
      'Hardware-backed WebAuthn / Passkeys and Time-based One-Time Passwords (TOTP)',
    ],
    verificationMethod: 'Automated integration tests asserting multi-tenant data boundaries and unauthorized role rejection.',
    icon: KeyRound,
  },
  {
    id: 'data-protection',
    title: 'Data Protection & Sensitive Data Minimization',
    classification: 'CORE ENGINEERING PRACTICE',
    summary:
      'We practice strict privacy-by-design, collecting only necessary data fields and isolating sensitive payloads with cryptographic controls.',
    scope: 'Standard engineering discipline across all storage and transport layers.',
    technicalControls: [
      'TLS 1.2/1.3 enforced for all transport connections with modern cipher suites',
      'Envelope encryption at rest via cloud KMS (AWS KMS, GCP Cloud KMS)',
      'Zero plaintext secrets, API keys, or certificates committed to source repositories',
    ],
    verificationMethod: 'Automated pre-commit secret scanners (TruffleHog / GitGuardian patterns) and storage audit rules.',
    icon: Database,
  },
  {
    id: 'supply-chain',
    title: 'Dependency & Supply-Chain Hardening',
    classification: 'CORE ENGINEERING PRACTICE',
    summary:
      'Continuous software composition analysis (SCA) to verify open-source package integrity and eliminate vulnerable transitive dependencies.',
    scope: 'Standard in all codebases and CI/CD automated build pipelines.',
    technicalControls: [
      'Reproducible builds locked via deterministic package lockfiles (`npm ci`)',
      'Automated vulnerability scanning (GitHub Dependabot, Trivy, and npm audit)',
      'Aggressive removal of unused transitive packages to minimize runtime attack surface',
    ],
    verificationMethod: 'CI pipeline gating on high/critical CVEs and software bill-of-materials (SBOM) tracking.',
    icon: FileCode2,
  },
  {
    id: 'app-api-defense',
    title: 'Application & API Defensive Engineering',
    classification: 'SCOPED SECURITY ASSESSMENT',
    summary:
      'Systematic code and API reviews targeting the OWASP Top 10:2025 and OWASP API Security Top 10:2023 vectors.',
    scope: 'Available as a scoped security review or incorporated into active product engineering.',
    technicalControls: [
      'Strict runtime input validation using type schemas (Zod, Pydantic, OpenAPI)',
      'Parameterized query builders preventing SQL/NoSQL injection by design',
      'Broken Object-Level Authorization (BOLA) and Broken Object Property checks',
    ],
    verificationMethod: 'Static application security testing (SAST) and targeted API security test suites.',
    icon: Terminal,
  },
  {
    id: 'backup-recovery',
    title: 'Resilience, Backup & Recovery Planning',
    classification: 'PROJECT-LEVEL CONTROL',
    summary:
      'Documented business continuity objectives (RTO / RPO) paired with automated, immutable snapshots and restore validation.',
    scope: 'Architected for client cloud hosting environments (AWS, GCP, Cloudflare).',
    technicalControls: [
      'Automated point-in-time recovery (PITR) for operational databases',
      'Air-gapped and cross-region encrypted backup retention policies',
      'Documented runbooks for disaster recovery and critical incident communication',
    ],
    verificationMethod: 'Periodic scheduled restore drills and disaster recovery dry runs.',
    icon: RefreshCw,
  },
  {
    id: 'ai-guardrails',
    title: 'Privacy-Aware AI Engineering & Guardrails',
    classification: 'CORE ENGINEERING PRACTICE',
    summary:
      'Defensive architectures for generative AI integrations: prompt-injection mitigation, tenant-isolated vector retrieval, and output sanitization.',
    scope: 'Standard in all AI-enabled applications, RAG pipelines, and automated agent workflows.',
    technicalControls: [
      'Strict server-side authorization checks prior to vector similarity retrieval',
      'System prompt boundary isolation and output schema validation',
      'Sensitive data scrubbing to prevent PII exposure in model completion logs',
    ],
    verificationMethod: 'Adversarial prompt injection test suites and retrieval permission unit assertions.',
    icon: Cpu,
  },
];

const classificationBadgeStyles: Record<ControlClassification, string> = {
  'CORE ENGINEERING PRACTICE': 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30',
  'PROJECT-LEVEL CONTROL': 'text-sky-300 bg-sky-950/60 border-sky-500/30',
  'INFRASTRUCTURE EXTENSION': 'text-amber-300 bg-amber-950/60 border-amber-500/30',
  'SCOPED SECURITY ASSESSMENT': 'text-indigo-300 bg-indigo-950/60 border-indigo-500/30',
};

export function TrustSecuritySection() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(pillars[0].id);

  const activePillar = pillars.find((p) => p.id === selectedPillarId) || pillars[0];
  const IconComponent = activePillar.icon;

  return (
    <section id="security" className="py-24 lg:py-32 relative scroll-mt-20 overflow-hidden">
      {/* Background radial lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-cyan-500/05 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Trust & Defensive Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Security engineered into every layer, from design to release.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            We do not rely on marketing claims or unverified badges. We build with evidence-based defensive controls, structured threat modeling, and disciplined least privilege.
          </p>
        </div>

        {/* Classification Legend */}
        <div className="p-4 sm:p-5 liquid-glass-card rounded-2xl">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
            Control Classification Standard
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-slate-300 font-medium">Core Practice:</span>
              <span className="text-slate-400">Included in all builds</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0" />
              <span className="text-slate-300 font-medium">Project Control:</span>
              <span className="text-slate-400">Architected per app</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
              <span className="text-slate-300 font-medium">Infra Extension:</span>
              <span className="text-slate-400">Requires cloud service</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0" />
              <span className="text-slate-300 font-medium">Scoped Review:</span>
              <span className="text-slate-400">Custom engagement</span>
            </div>
          </div>
        </div>

        {/* Interactive Pillar Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Pillar Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {pillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              const PillarIcon = pillar.icon;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'liquid-glass-card border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                      : 'liquid-glass-card hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 mt-0.5 border ${
                      isSelected
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
                        : 'bg-white/[0.04] border-white/10 text-slate-400'
                    }`}
                  >
                    <PillarIcon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {pillar.title}
                      </span>
                    </div>
                    <span
                      className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${
                        classificationBadgeStyles[pillar.classification]
                      }`}
                    >
                      {pillar.classification}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 liquid-glass-card border-cyan-500/40 rounded-3xl space-y-6 relative overflow-hidden card-shine">
            <div
              className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/05 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Pillar Header */}
            <div className="space-y-3 border-b border-slate-800 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activePillar.title}
                  </h3>
                </div>
                <span
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                    classificationBadgeStyles[activePillar.classification]
                  }`}
                >
                  {activePillar.classification}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activePillar.summary}
              </p>
            </div>

            {/* Scope of Application */}
            <div className="space-y-1.5">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Scope & Applicability
              </div>
              <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                {activePillar.scope}
              </p>
            </div>

            {/* Technical Controls Enforced */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Technical Controls & Design Patterns
              </div>
              <div className="space-y-2">
                {activePillar.technicalControls.map((control) => (
                  <div
                    key={control}
                    className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60"
                  >
                    <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{control}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Method */}
            <div className="space-y-1.5">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Evidence & Verification Protocol
              </div>
              <p className="text-xs text-emerald-400/90 font-mono bg-emerald-950/30 border border-emerald-500/20 p-3 rounded-xl">
                {activePillar.verificationMethod}
              </p>
            </div>

            {/* Actions link to service */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-[11px] text-slate-400">
                Aligned with NIST CSF 2.0, NIST SSDF & OWASP ASVS.
              </div>
              <Link
                href="/services/application-security"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Application Security Service Specs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Honest Architecture Transparency Callout */}
        <div className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4 text-xs text-slate-400">
          <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-cyan-400 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-slate-200">
              Architectural Transparency & Scope Boundary
            </div>
            <p className="leading-relaxed">
              This public corporate website (zelvori.software) is statically pre-rendered with zero runtime server-side databases, API endpoints, or user authentication sessions. The controls, threat models, and architectural patterns described above represent our engineering standards for custom client applications and backend systems, not active cloud servers on this static site.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
