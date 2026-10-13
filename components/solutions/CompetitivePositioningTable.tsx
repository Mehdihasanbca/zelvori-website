'use client';

import React, { useState } from 'react';
import { Check, X, AlertTriangle, ShieldCheck, Zap, DollarSign, Database, Lock } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  category: string;
  description: string;
  diyBuilders: { rating: 'low' | 'med' | 'high'; text: string };
  genericSaas: { rating: 'low' | 'med' | 'high'; text: string };
  openSource: { rating: 'low' | 'med' | 'high'; text: string };
  zelvori: { rating: 'high'; text: string; highlight?: boolean };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Time to First Launch',
    category: 'Speed',
    description: 'How quickly a functional version can be in users hands',
    diyBuilders: { rating: 'high', text: '1–3 weeks (template limits)' },
    genericSaas: { rating: 'high', text: '2–4 weeks (config setup)' },
    openSource: { rating: 'med', text: '4–8 weeks (plugin assembly)' },
    zelvori: { rating: 'high', text: '4–8 weeks (production-grade custom MVP)', highlight: true },
  },
  {
    dimension: 'Total Cost of Ownership (Year 2+)',
    category: 'Economics',
    description: 'Long-term operational costs as transaction volume scales',
    diyBuilders: { rating: 'low', text: 'Rising app store & transaction % fees' },
    genericSaas: { rating: 'low', text: 'Expensive per-seat licensing penalties' },
    openSource: { rating: 'med', text: 'Unpredictable plugin maintenance costs' },
    zelvori: { rating: 'high', text: 'Flat infrastructure costs; zero per-seat tax', highlight: true },
  },
  {
    dimension: 'Workflow Adaptability',
    category: 'Customization',
    description: 'Ability to match your exact business logic and proprietary rules',
    diyBuilders: { rating: 'low', text: 'Rigid templates; hacky workarounds' },
    genericSaas: { rating: 'med', text: 'Limited to vendor plugin marketplace' },
    openSource: { rating: 'med', text: 'Plugin collisions & fragile hooks' },
    zelvori: { rating: 'high', text: '100% custom domain logic & state machines', highlight: true },
  },
  {
    dimension: 'Data Ownership & Sovereignty',
    category: 'Governance',
    description: 'Complete control over client databases, backups, and hosting territory',
    diyBuilders: { rating: 'low', text: 'Proprietary silo; difficult exports' },
    genericSaas: { rating: 'low', text: 'Multi-tenant cloud; limited access' },
    openSource: { rating: 'high', text: 'Self-hosted but complex maintenance' },
    zelvori: { rating: 'high', text: 'Dedicated database in client cloud account', highlight: true },
  },
  {
    dimension: 'High-Volume Scalability',
    category: 'Performance',
    description: 'Handling peak traffic bursts, large catalogs, and complex queries',
    diyBuilders: { rating: 'low', text: 'Hard throttle limits during peak sales' },
    genericSaas: { rating: 'med', text: 'API rate limits & tier up-charges' },
    openSource: { rating: 'med', text: 'Requires manual database caching tuning' },
    zelvori: { rating: 'high', text: 'Cloud-native auto-scaling & edge caching', highlight: true },
  },
  {
    dimension: 'Security & Access Control',
    category: 'Security',
    description: 'Role-based access, field-level encryption, and audit logging',
    diyBuilders: { rating: 'low', text: 'Basic roles; no field encryption' },
    genericSaas: { rating: 'high', text: 'Good security, but multi-tenant' },
    openSource: { rating: 'low', text: 'Frequent plugin CVE vulnerabilities' },
    zelvori: { rating: 'high', text: 'Zero-trust RBAC, encrypted logs, verified SDK', highlight: true },
  },
  {
    dimension: 'Vendor Lock-in & Portability',
    category: 'Strategy',
    description: 'Freedom to change hosts, modify code, or hire internal engineers',
    diyBuilders: { rating: 'low', text: 'Total lock-in; code cannot be moved' },
    genericSaas: { rating: 'low', text: 'High lock-in; proprietary formats' },
    openSource: { rating: 'high', text: 'Portable code with high tech debt risk' },
    zelvori: { rating: 'high', text: '100% client code ownership & clean repo', highlight: true },
  },
];

export function CompetitivePositioningTable() {
  const [activeTab, setActiveTab] = useState<'all' | 'Economics' | 'Customization' | 'Governance' | 'Security'>('all');

  const filteredData = activeTab === 'all' 
    ? COMPARISON_DATA 
    : COMPARISON_DATA.filter((row) => row.category === activeTab);

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Filter Matrix:</span>
        {(['all', 'Economics', 'Customization', 'Governance', 'Security'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {tab === 'all' ? 'All Dimensions' : tab}
          </button>
        ))}
      </div>

      {/* Comparison Table for Desktop */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/70 text-xs uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6 font-semibold">Strategic Dimension</th>
              <th className="py-4 px-6 font-semibold">DIY Builders (Wix / Shopify)</th>
              <th className="py-4 px-6 font-semibold">Generic SaaS (Salesforce / Zoho)</th>
              <th className="py-4 px-6 font-semibold">Open Source (Woo / Odoo)</th>
              <th className="py-4 px-6 font-semibold text-cyan-400 bg-cyan-950/30 border-l border-cyan-500/20">
                Zelvori Engineered Architecture
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredData.map((row) => (
              <tr key={row.dimension} className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-semibold text-slate-200">{row.dimension}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{row.description}</div>
                </td>
                <td className="py-4 px-6 text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-slate-400 text-xs">•</span>
                    <span>{row.diyBuilders.text}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-slate-400 text-xs">•</span>
                    <span>{row.genericSaas.text}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-slate-400 text-xs">•</span>
                    <span>{row.openSource.text}</span>
                  </div>
                </td>
                <td className="py-4 px-6 bg-cyan-950/20 border-l border-cyan-500/20 font-medium text-cyan-300">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{row.zelvori.text}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet Card Layout */}
      <div className="lg:hidden space-y-4">
        {filteredData.map((row) => (
          <div
            key={row.dimension}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-4 backdrop-blur-sm"
          >
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-slate-800 text-cyan-400 mb-2">
                {row.category}
              </span>
              <h4 className="text-base font-semibold text-slate-100">{row.dimension}</h4>
              <p className="text-xs text-slate-400 mt-1">{row.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
              <div className="flex justify-between items-start p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-400 font-medium shrink-0 mr-2">DIY Builders:</span>
                <span className="text-slate-300 text-right">{row.diyBuilders.text}</span>
              </div>
              <div className="flex justify-between items-start p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-400 font-medium shrink-0 mr-2">Generic SaaS:</span>
                <span className="text-slate-300 text-right">{row.genericSaas.text}</span>
              </div>
              <div className="flex justify-between items-start p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-400 font-medium shrink-0 mr-2">Open Source:</span>
                <span className="text-slate-300 text-right">{row.openSource.text}</span>
              </div>
              <div className="flex justify-between items-start p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-300">
                <span className="font-semibold text-cyan-400 shrink-0 mr-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Zelvori Architecture:
                </span>
                <span className="font-medium text-right">{row.zelvori.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Takeaway Callout */}
      <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>The Zelvori Strategic Decision Formula</span>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Use DIY tools when validating ideas under ₹50,000. Switch to Zelvori custom architecture when monthly SaaS fees exceed ₹30,000/month, proprietary workflows require custom rules, or customer data privacy and ownership become a non-negotiable legal requirement.
          </p>
        </div>
        <a
          href="/contact/"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
        >
          Discuss Your Tradeoffs
        </a>
      </div>
    </div>
  );
}
