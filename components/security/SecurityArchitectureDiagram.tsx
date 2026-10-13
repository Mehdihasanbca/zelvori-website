'use client';

import React, { useState } from 'react';
import {
  Users,
  Globe,
  KeyRound,
  ShieldCheck,
  Cpu,
  Database,
  Lock,
  Layers,
  ArrowDown,
  Info,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface ArchitectureLayer {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  components: string[];
  responsibilities: string;
  securityGate: string;
  threatsMitigated: string[];
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'layer-1',
    number: '01',
    title: 'User & Administrator Channels',
    subtitle: 'Client Interfaces & Partner APIs',
    icon: Users,
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
    badge: 'Channel Boundary',
    components: ['Web Browsers (Desktop & Mobile)', 'Native iOS & Android Apps', 'Internal Admin Consoles', 'Partner Integration Clients'],
    responsibilities: 'Renders application UI, handles user input, and manages local session credentials securely. Never stores private backend secrets or unvetted credentials.',
    securityGate: 'Trusted-device/session expectations; zero client-side secrets; safe local storage & secure cookie flags (HttpOnly, Secure, SameSite).',
    threatsMitigated: ['Session hijacking', 'Credential leakage in front-end bundles', 'Cross-site scripting (XSS) DOM manipulation'],
  },
  {
    id: 'layer-2',
    number: '02',
    title: 'Edge & Traffic Controls',
    subtitle: 'Perimeter Inspection & CDN Isolation',
    icon: Globe,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-400',
    badge: 'Perimeter Boundary',
    components: ['TLS 1.3 Termination', 'Anycast CDN & Asset Caching', 'Web Application Firewall (WAF)', 'DDoS Mitigation & Rate Limiting'],
    responsibilities: 'Terminates encrypted traffic, filters volumetric floods, blocks known malicious bot signatures, and enforces HTTP response security headers.',
    securityGate: 'Strict TLS ciphers; HTTP security headers (HSTS, CSP, Referrer-Policy); request size limits; rate limiting per IP and client fingerprint.',
    threatsMitigated: ['Volumetric DDoS attacks', 'Malformed request floods', 'Insecure protocol downgrade attacks'],
  },
  {
    id: 'layer-3',
    number: '03',
    title: 'Identity & Policy Boundary',
    subtitle: 'Authentication & Tenant Context',
    icon: KeyRound,
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-400',
    badge: 'Zero-Trust Gate',
    components: ['OIDC / OAuth 2.0 Identity Provider', 'Multi-Factor Authentication (MFA)', 'Session Token Verification', 'Tenant & Org Scope Injection'],
    responsibilities: 'Authenticates user identity, enforces mandatory MFA for administrative workflows, issues signed short-lived tokens, and binds every request to an authenticated tenant scope.',
    securityGate: 'Server-side authorization on every request; MFA enforced for privileged roles; secure password hashing (Argon2/bcrypt); session revocation.',
    threatsMitigated: ['Credential stuffing', 'Privilege escalation', 'Cross-tenant authentication bypasses'],
  },
  {
    id: 'layer-4',
    number: '04',
    title: 'Application & API Boundary',
    subtitle: 'Input Validation & Authorisation Gates',
    icon: ShieldCheck,
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400',
    badge: 'Enforcement Boundary',
    components: ['Strict Schema Validation (Zod/JSON Schema)', 'Object-Level Access Control (BOLA/IDOR prevention)', 'Output Encoding & Entity Escaping', 'Idempotency Key Handler'],
    responsibilities: 'Inspects every incoming payload against strict schemas, checks user permissions against target records, prevents duplicate command execution, and encodes outbound data.',
    securityGate: 'Fail-closed input parsing; object-level permission check before database queries; RFC 8259 JSON compliance; zero eval or shell execution.',
    threatsMitigated: ['SQL / NoSQL Injection', 'Broken Object Level Authorisation (BOLA)', 'Double-charge payment race conditions'],
  },
  {
    id: 'layer-5',
    number: '05',
    title: 'Domain Modules & Business Workflows',
    subtitle: 'Core Enterprise Logic & State Machines',
    icon: Cpu,
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-400',
    badge: 'Domain Boundary',
    components: ['Patient / Encounter Records (Healthcare)', 'Legal Matters & Deadlines (Law)', 'Order & Stock State Machines (Commerce)', 'Quotation & Approval Pipelines (CRM/ERP)'],
    responsibilities: 'Executes business rules using deterministic state machines, records domain events, enforces segregation of duties, and ensures critical state changes require explicit authority.',
    securityGate: 'Explicit state transition guards; immutable domain audit events; approval thresholds for financial/sensitive operations.',
    threatsMitigated: ['State manipulation bypasses', 'Unauthorized workflow skip', 'Silent business data alteration'],
  },
  {
    id: 'layer-6',
    number: '06',
    title: 'Private Data Services & Integrations',
    subtitle: 'Isolated Storage & Scoped Gateways',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
    badge: 'Storage & Adapter Boundary',
    components: ['PostgreSQL Relational DB (Private VPC)', 'Encrypted Object Storage (S3/GCS)', 'Webhook Signature Verification', 'Payment & AI Adapter Sandboxes'],
    responsibilities: 'Stores structured data and media with at-rest encryption, isolates database instances from public subnets, and verifies digital signatures on third-party integration events.',
    securityGate: 'Private network placement; AES-256 / cloud KMS encryption at rest; per-integration API scopes; webhook replay protection; automated backups.',
    threatsMitigated: ['Direct database exposure to internet', 'Unverified webhook spoofing', 'Data exfiltration from storage buckets'],
  },
];

export function SecurityArchitectureDiagram() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-3');

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-5 flex items-start gap-4">
        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
          <Info className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <div className="font-semibold text-slate-100 flex items-center gap-2">
            <span>Reference Architecture Specification</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Pattern v1.0
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            This diagram illustrates Zelvori’s standard reference architecture for serious, multi-tenant digital products. 
            It represents our <strong>security-by-design blueprint</strong>. It is not an assertion that every prospective client application 
            already operates all six layers—actual components, hosting targets, and threat mitigations are explicitly defined, threat-modeled, and budgeted in each project’s Statement of Work (SOW).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Diagram Flow (Left / Top on Mobile) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Request & Data Flow Layers
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Click any layer to inspect controls
            </span>
          </div>

          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const isSelected = layer.id === selectedLayerId;
            const IconComponent = layer.icon;

            return (
              <div key={layer.id} className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedLayerId(layer.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? `bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50`
                      : `bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60`
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold">
                          {layer.number}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {layer.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border hidden sm:inline-block ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {layer.badge}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-cyan-400 shadow-sm shadow-cyan-400' : 'bg-slate-700'
                      }`}
                    />
                  </div>
                </button>

                {/* Arrow between layers */}
                {index < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Cross-Cutting Layer */}
          <div className="pt-2">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-mono text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>Cross-Cutting Operations & Observability</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Cloud KMS Secret Vaults • Append-Only Audit Logging • Centralized Telemetry & Prometheus Alerts • Automated Daily Encrypted Backups • Documented Incident Runbooks
              </p>
            </div>
          </div>
        </div>

        {/* Layer Deep-Dive Detail Card (Right Column) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    LAYER {selectedLayer.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedLayer.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  {selectedLayer.title}
                </h3>
                <p className="text-xs text-cyan-400/90 font-medium">
                  {selectedLayer.subtitle}
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Primary Responsibilities
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                {selectedLayer.responsibilities}
              </p>
            </div>

            {/* Typical Components */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architectural Components
              </h5>
              <ul className="space-y-1.5">
                {selectedLayer.components.map((comp, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Gate & Acceptance Criteria */}
            <div className="space-y-2 border-t border-slate-800/80 pt-4">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Security & Reliability Gate</span>
              </h5>
              <div className="text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl leading-relaxed">
                {selectedLayer.securityGate}
              </div>
            </div>

            {/* Threats Mitigated */}
            <div className="space-y-2 border-t border-slate-800/80 pt-4">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Threats Directly Mitigated</span>
              </h5>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedLayer.threatsMitigated.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
