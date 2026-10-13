'use client';

import React, { useState } from 'react';
import {
  Search,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Globe,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

interface SeoPreset {
  name: string;
  title: string;
  url: string;
  description: string;
  siteName: string;
}

const PRESETS: SeoPreset[] = [
  {
    name: 'SaaS Platform',
    title: 'CloudOps — Automated Infrastructure & CI/CD Pipelines',
    url: 'https://cloudops.example.com/features/ci-cd',
    description:
      'Ship code 10x faster with managed Kubernetes clusters, zero-downtime deployment workflows, and real-time observability telemetry built for modern engineering teams.',
    siteName: 'CloudOps Inc.',
  },
  {
    name: 'E-Commerce Store',
    title: 'Minimalist Titanium Mechanical Keyboard — Limited Edition',
    url: 'https://store.example.com/products/titanium-keyboard-v2',
    description:
      'Precision CNC-machined titanium mechanical keyboard with hotswappable switches, gasket mount acoustic dampening, and programmable VIA firmware. Free international shipping.',
    siteName: 'AeroPeripherals',
  },
  {
    name: 'Engineering Guide',
    title: 'Understanding PostgreSQL Row-Level Security (RLS) in Next.js',
    url: 'https://blog.example.com/postgres-rls-guide',
    description:
      'A deep dive into multi-tenant database architectures using PostgreSQL Row-Level Security, Supabase Auth policies, and edge runtime connection pools.',
    siteName: 'Engineering Journal',
  },
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function SeoMetaPreviewTool() {
  const [title, setTitle] = useState(
    'High-Performance Web Applications & Engineering | Zelvori'
  );
  const [url, setUrl] = useState('https://zelvori.software/services/web-development/');
  const [description, setDescription] = useState(
    'Zelvori engineers scalable web applications, custom business ERPs, e-commerce storefronts, and cloud automation with enterprise-grade security and clean architecture.'
  );
  const [siteName, setSiteName] = useState('Zelvori');
  const [copied, setCopied] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const titleLength = title.length;
  const descLength = description.length;

  const titleGuidance =
    titleLength < 30
      ? 'Short (under 30 chars). Aim for 50–60 characters to optimize search snippet visibility.'
      : titleLength <= 60
      ? 'Optimal (50–60 chars). Most search engines display the full title on desktop viewports.'
      : 'Long (over 60 chars). Search engines will likely truncate with an ellipsis on smaller screens.';

  const descGuidance =
    descLength < 70
      ? 'Short (under 70 chars). Consider expanding to 140–160 characters for context.'
      : descLength <= 160
      ? 'Optimal (140–160 chars). Fits nicely within standard search snippet display limits.'
      : 'Long (over 160 chars). Search engines will typically cut off remaining text with an ellipsis.';

  const parsedUrl = (() => {
    try {
      const u = new URL(url.startsWith('http') ? url : `https://${url}`);
      return {
        domain: u.hostname,
        path: u.pathname.replace(/^\//, '').split('/').filter(Boolean),
      };
    } catch {
      return {
        domain: 'example.com',
        path: ['page'],
      };
    }
  })();

  const generatedHtml = `<!-- Standard Primary Meta Tags -->
<title>${escapeHtml(title)}</title>
<meta name="title" content="${escapeHtml(title)}" />
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${escapeHtml(url)}" />
${siteName ? `<meta name="application-name" content="${escapeHtml(siteName)}" />\n` : ''}<!-- Search Engine Robots Directive -->
<meta name="robots" content="index, follow" />`;

  const copyTags = async () => {
    try {
      await navigator.clipboard.writeText(generatedHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const applyPreset = (preset: SeoPreset) => {
    setTitle(preset.title);
    setUrl(preset.url);
    setDescription(preset.description);
    setSiteName(preset.siteName);
  };

  const handleReset = () => {
    setTitle('');
    setUrl('');
    setDescription('');
    setSiteName('');
  };

  return (
    <div className="space-y-10">
      {/* Privacy Guarantee & Preset Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            <strong className="text-white font-medium">100% Client-Side Privacy:</strong> Your text is never sent to a server or external API.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Presets:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => applyPreset(p)}
              className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {p.name}
            </button>
          ))}
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            title="Reset fields"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Form Controls */}
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white">Metadata Parameters</h2>
            <p className="mt-1 text-xs text-slate-400">
              Configure search engine index metadata. Character counts provide guidance rather than a guarantee of search-result rendering.
            </p>
          </div>

          {/* Page Title */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="seo-title" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Page Title <span className="text-cyan-400">*</span>
              </label>
              <span
                className={`text-xs font-mono ${
                  titleLength > 60
                    ? 'text-amber-400 font-semibold'
                    : titleLength >= 50
                    ? 'text-emerald-400'
                    : 'text-slate-400'
                }`}
              >
                {titleLength} / 60 chars
              </span>
            </div>
            <input
              id="seo-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Acme Cloud — Scalable Cloud Solutions"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
            />
            <p className="mt-1.5 text-xs text-slate-400">{titleGuidance}</p>
          </div>

          {/* Page URL / Canonical */}
          <div>
            <label htmlFor="seo-url" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Canonical URL <span className="text-cyan-400">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <Globe className="h-4 w-4" />
              </div>
              <input
                id="seo-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/services/web-development"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              The canonical link tag tells crawlers the authoritative address of this content.
            </p>
          </div>

          {/* Meta Description */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="seo-description" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Meta Description <span className="text-cyan-400">*</span>
              </label>
              <span
                className={`text-xs font-mono ${
                  descLength > 160
                    ? 'text-amber-400 font-semibold'
                    : descLength >= 140
                    ? 'text-emerald-400'
                    : 'text-slate-400'
                }`}
              >
                {descLength} / 160 chars
              </span>
            </div>
            <textarea
              id="seo-description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a clear, compelling summary of the page content for search engine snippets..."
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
            />
            <p className="mt-1.5 text-xs text-slate-400">{descGuidance}</p>
          </div>

          {/* Optional Site Name */}
          <div>
            <label htmlFor="seo-site-name" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Site / Brand Name (Optional)
            </label>
            <input
              id="seo-site-name"
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="e.g. Zelvori"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        {/* Right Column: Previews and Code */}
        <div className="space-y-6">
          {/* SERP Search Preview Panel */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-cyan-400" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Live Search Result Simulation
                </h2>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`rounded-md px-2.5 py-1 font-medium transition ${
                    deviceView === 'desktop'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`rounded-md px-2.5 py-1 font-medium transition ${
                    deviceView === 'mobile'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Mobile
                </button>
              </div>
            </div>

            {/* Simulated Search Snippet */}
            <div className="mt-5 rounded-2xl border border-slate-800/80 bg-[#161a23] p-5">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] text-cyan-300 font-bold">
                  {parsedUrl.domain.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium text-slate-300">{siteName || parsedUrl.domain}</span>
                <span className="text-slate-600">›</span>
                <span className="truncate text-slate-400 font-mono text-[11px]">
                  https://{parsedUrl.domain}{parsedUrl.path.length > 0 ? `/${parsedUrl.path.join('/')}` : ''}
                </span>
              </div>

              {/* Title Link */}
              <h3 className="mt-2 text-lg font-medium text-[#8ab4f8] hover:underline cursor-pointer leading-snug line-clamp-2">
                {title || 'Untitled Page — Enter Title'}
              </h3>

              {/* Snippet Description */}
              <p className="mt-2 text-xs leading-relaxed text-[#bdc1c6] line-clamp-3">
                {description ||
                  'No description entered. Search engines will extract an automatic snippet from the body content when missing.'}
              </p>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-950/60 p-3 text-[11px] text-slate-400 border border-slate-800/60">
              <AlertCircle className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
              <p>
                Display simulation is approximate. Google, Bing and other engines may dynamically rewrite titles or select in-page text based on the specific query searched.
              </p>
            </div>
          </div>

          {/* Generated HTML Code Box */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Generated HTML Tags</h3>
                <p className="text-xs text-slate-400 mt-0.5">Copy and place inside your document’s &lt;head&gt; element.</p>
              </div>
              <button
                type="button"
                onClick={copyTags}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 shadow-md shadow-cyan-950/30"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied HTML' : 'Copy HTML'}</span>
              </button>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-800/90 bg-slate-950 p-4 font-mono text-xs text-cyan-200/90 leading-relaxed">
              <code>{generatedHtml}</code>
            </pre>
            <p aria-live="polite" className="mt-2 text-right text-[11px] text-slate-400">
              {copied ? 'Copied to clipboard.' : 'Plain text HTML snippet. Safe for Next.js, Astro, Nuxt or static sites.'}
            </p>
          </div>
        </div>
      </div>

      {/* Explanatory Technical Reference & Contextual Links */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">How Modern Search Metadata Works</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3 text-xs text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">1. Title Tag Engineering</h4>
            <p className="mt-1.5 text-slate-400">
              The title tag remains the most critical on-page signal for click-through rate and relevancy. Place key keywords toward the beginning, keep it under 60 characters, and end with your brand moniker.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">2. Meta Description Purpose</h4>
            <p className="mt-1.5 text-slate-400">
              Descriptions do not directly influence search ranking algorithms, but they function as your organic ad copy. Compelling descriptions improve search snippet click-through rates.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">3. Canonical Tag Protection</h4>
            <p className="mt-1.5 text-slate-400">
              The canonical link specifies the master version of a page, preventing duplicate content dilution caused by tracking parameters, session IDs, or multiple path variations.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Looking for comprehensive technical web engineering or SEO audits?
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services/web-development/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Explore Web Development Practice</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300"
            >
              <span>Discuss a Custom Build with Zelvori</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
