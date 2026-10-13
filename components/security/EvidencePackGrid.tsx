'use client';

import React from 'react';
import {
  FileCheck2,
  FileCode2,
  GitBranch,
  ShieldCheck,
  Database,
  Users,
  AlertCircle,
  Key,
  Layers,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

interface EvidenceArtifact {
  number: string;
  title: string;
  icon: React.ElementType;
  whatItContains: string;
  recommendedStatus: string;
  badge: string;
}

const EVIDENCE_ARTIFACTS: EvidenceArtifact[] = [
  {
    number: '01',
    title: 'Security Scope Statement',
    icon: FileCheck2,
    whatItContains:
      'Explicit boundary definitions: what components were built, what was excluded, testing methodology, target deployment environment, and research cut-off date.',
    recommendedStatus: 'Required for every commercial project',
    badge: 'Mandatory',
  },
  {
    number: '02',
    title: 'Architecture & Data-Flow Diagrams',
    icon: Layers,
    whatItContains:
      'Trust boundary diagrams, data store mappings, integration gateways, identity checkpoints, and network isolation topology. Scales in depth with workload risk.',
    recommendedStatus: 'Required for all applications',
    badge: 'Architecture',
  },
  {
    number: '03',
    title: 'Data Inventory & Retention Schedule',
    icon: Database,
    whatItContains:
      'Structured classification of collected data fields, processing purpose, storage geography, retention schedules, and automated deletion/purge mechanisms.',
    recommendedStatus: 'Required where customer data is processed',
    badge: 'Data Protection',
  },
  {
    number: '04',
    title: 'Role & Permission Matrix',
    icon: Users,
    whatItContains:
      'User personas mapped to permissions; tenant/matter/patient boundaries; negative access-control test logs proving unauthorized callers cannot read foreign records.',
    recommendedStatus: 'Required for authenticated business apps',
    badge: 'Access Control',
  },
  {
    number: '05',
    title: 'Test & Security Scan Summary',
    icon: ShieldCheck,
    whatItContains:
      'Automated SAST scans, dependency vulnerability logs, unit test pass rates, edge cases evaluated, and remediation status for discovered vulnerabilities.',
    recommendedStatus: 'Required for production releases',
    badge: 'Verification',
  },
  {
    number: '06',
    title: 'Software Bill of Materials (SBOM)',
    icon: FileCode2,
    whatItContains:
      'Machine-readable inventory of all direct and transitive dependencies, exact semantic versions, open-source licenses (SPDX), and vulnerability triage.',
    recommendedStatus: 'Recommended; required for enterprise contracts',
    badge: 'Supply Chain',
  },
  {
    number: '07',
    title: 'Backup/Restore & RPO/RTO Report',
    icon: Database,
    whatItContains:
      'Documented backup locations, encryption status, retention cadence, and evidence of at least one successful test restoration rehearsal prior to go-live.',
    recommendedStatus: 'Required for all production data stores',
    badge: 'Resilience',
  },
  {
    number: '08',
    title: 'Incident Response & Support Runbook',
    icon: AlertCircle,
    whatItContains:
      'Designated escalation contacts, severity definitions (P1-P4), containment steps, regulator/customer notification decision process, and support hours.',
    recommendedStatus: 'Required before production handover',
    badge: 'Operations',
  },
  {
    number: '09',
    title: 'Ownership & Handover Documentation',
    icon: Key,
    whatItContains:
      'Documented handover of source code repositories, domain DNS, cloud accounts, database instances, secret rotation procedures, and zero retained vendor lock-in.',
    recommendedStatus: 'Required in contract and handover',
    badge: 'Governance',
  },
];

export function EvidencePackGrid() {
  return (
    <div className="space-y-8">
      {/* Evidence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EVIDENCE_ARTIFACTS.map((artifact) => {
          const Icon = artifact.icon;

          return (
            <div
              key={artifact.number}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 space-y-4 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">
                      {artifact.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {artifact.badge}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-100">
                  {artifact.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {artifact.whatItContains}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/70">
                <span className="text-[11px] font-medium text-cyan-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{artifact.recommendedStatus}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Notice Box */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>The Zelvori “Verify Before Claiming” Principle</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We will never provide fabricated certifications, fake audit badges, or boilerplate compliance seals. 
            When you engage Zelvori, you receive real architecture briefs, real negative test records, and verifiable 
            recovery evidence produced specifically for your deployment.
          </p>
        </div>

        <a
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
            'Request Sample Security Evidence Pack Template — Zelvori'
          )}&body=${encodeURIComponent(
            'Hello Zelvori Engineering Desk,\n\nWe are planning a digital product engagement and would like to review your standard Security Scope Statement and Architecture Decision Record templates.\n\nProject Scope:\nTarget Timeline:\n\nThank you,\n[Name / Company]'
          )}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors shrink-0 shadow-lg shadow-cyan-500/20"
        >
          <Mail className="w-4 h-4" />
          <span>Request Sample Evidence Templates</span>
        </a>
      </div>
    </div>
  );
}
