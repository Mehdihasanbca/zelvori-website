'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  FileText,
  Code,
  Terminal,
  RotateCcw,
} from 'lucide-react';

interface Finding {
  id: string;
  title: string;
  severity: 'High' | 'Medium' | 'Low' | 'Info';
  component: string;
  cwe: string;
  description: string;
  remediation: string;
}

const mockFindings: Finding[] = [
  {
    id: 'SEC-01',
    title: 'Missing Strict-Transport-Security (HSTS) with Preload Flag',
    severity: 'Medium',
    component: 'Edge Reverse Proxy / HTTP Headers',
    cwe: 'CWE-319: Cleartext Transmission of Sensitive Information',
    description: 'The production origin server does not enforce HSTS with max-age >= 31536000 and includeSubDomains, allowing potential SSL-stripping on initial user requests.',
    remediation: 'Configure middleware or web server headers:\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload',
  },
  {
    id: 'SEC-02',
    title: 'Excessive Object Exposure in Public User Profile API',
    severity: 'High',
    component: 'REST API /v1/users/:id',
    cwe: 'CWE-213: Exposure of Sensitive Information Due to Incompatible Policies',
    description: 'The API serializer returns internal database attributes (password_hash_salt, internal_role_flags) in the JSON payload returned to unauthenticated callers.',
    remediation: 'Implement a strict response DTO serializer via Zod/Pydantic to whitelist only public profile attributes before dispatch.',
  },
  {
    id: 'SEC-03',
    title: 'Permissive Cross-Origin Resource Sharing (CORS) Configuration',
    severity: 'Medium',
    component: 'API Gateway Headers',
    cwe: 'CWE-942: Permissive Cross-Domain Policy with Untrusted Domains',
    description: 'Access-Control-Allow-Origin dynamically echoes incoming origin headers without strict origin regex matching, permitting cross-site credentialed requests.',
    remediation: 'Replace wildcard origin reflection with an explicit whitelist of verified client domains in middleware.',
  },
  {
    id: 'SEC-04',
    title: 'Deprecate Weak TLS 1.0/1.1 Protocols on Ingress Load Balancer',
    severity: 'Low',
    component: 'Cloud Load Balancer SSL Profile',
    cwe: 'CWE-326: Inadequate Encryption Strength',
    description: 'Legacy cipher suites are permitted for backwards compatibility, failing modern PCI-DSS and NIST SP 800-52r2 benchmarks.',
    remediation: 'Update cloud ingress SSL policy to Modern profile restricting handshakes to TLS 1.2 and TLS 1.3 only.',
  },
];

export function AppSecurityPreview() {
  const [selectedFinding, setSelectedFinding] = useState<Finding>(mockFindings[1]);
  const [activeFilter, setActiveFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const filteredFindings = mockFindings.filter((f) => {
    if (activeFilter === 'All') return true;
    return f.severity === activeFilter;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner & Control */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-semibold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Sanitized Security Assessment Dashboard</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Interactive demonstration showing how Zelvori delivers actionable, code-level remediation reports.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedFinding(mockFindings[1]);
            setActiveFilter('All');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset View</span>
        </button>
      </div>

      {/* Prominent Truthful Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-600/40 text-xs text-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>DEMONSTRATION REPORT NOTICE:</strong> All findings, CVE/CWE classifications, and code remediation snippets presented below are synthetic demonstration artifacts. This is an architectural showcase of Zelvori&apos;s reporting format and does not represent an audit of any actual client system or an accredited third-party penetration test.
        </div>
      </div>

      {/* Metrics Severity Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 font-mono">CRITICAL SEVERITY</span>
          <div className="text-2xl font-bold text-slate-500 font-mono mt-1">0</div>
          <span className="text-[10px] text-emerald-400 font-medium">Zero zero-day exploits found</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 font-mono">HIGH SEVERITY</span>
          <div className="text-2xl font-bold text-rose-400 font-mono mt-1">1</div>
          <span className="text-[10px] text-rose-300 font-medium">Excessive object exposure</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 font-mono">MEDIUM SEVERITY</span>
          <div className="text-2xl font-bold text-amber-400 font-mono mt-1">2</div>
          <span className="text-[10px] text-amber-300 font-medium">Headers &amp; CORS configs</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 font-mono">LOW SEVERITY</span>
          <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">1</div>
          <span className="text-[10px] text-cyan-300 font-medium">TLS profile upgrade</span>
        </div>
      </div>

      {/* Two-Column Report Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Finding Selector List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Findings ({filteredFindings.length})
            </span>
            <div className="flex gap-1 text-[10px]">
              {(['All', 'High', 'Medium', 'Low'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setActiveFilter(lvl)}
                  className={`px-2 py-0.5 rounded transition-all font-mono ${
                    activeFilter === lvl
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filteredFindings.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFinding(f)}
                className={`w-full p-3.5 rounded-xl text-left border transition-all space-y-1.5 ${
                  selectedFinding.id === f.id
                    ? 'bg-slate-900 border-cyan-400 shadow-md'
                    : 'bg-[#0b1120] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-cyan-400 font-bold">{f.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded font-bold ${
                      f.severity === 'High'
                        ? 'bg-rose-950 text-rose-300 border border-rose-800/60'
                        : f.severity === 'Medium'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                        : 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                    }`}
                  >
                    {f.severity.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs font-semibold text-white leading-snug line-clamp-2">
                  {f.title}
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate">{f.component}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Detailed Finding Remediation Card */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-3xl bg-[#0a0f1d] border border-slate-800 space-y-5 shadow-2xl h-full">
            <div className="space-y-2 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400">{selectedFinding.id}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    selectedFinding.severity === 'High'
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : selectedFinding.severity === 'Medium'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  }`}
                >
                  {selectedFinding.severity.toUpperCase()} PRIORITY
                </span>
              </div>
              <h4 className="text-lg font-bold text-white leading-snug">{selectedFinding.title}</h4>
              <p className="text-[11px] text-slate-400 font-mono">{selectedFinding.cwe}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300 uppercase font-mono tracking-wider">
                Vulnerability Overview &amp; Impact
              </div>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                {selectedFinding.description}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>Actionable Code Remediation</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/70 border border-slate-800 text-[11px] font-mono text-cyan-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {selectedFinding.remediation}
              </pre>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80">
              <span>Standard: OWASP Top 10 · NIST CSF 2.0</span>
              <span className="text-emerald-400 font-semibold">Ready for Engineering Patch</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
