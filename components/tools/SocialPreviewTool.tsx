'use client';

import React, { useState, useEffect } from 'react';
import {
  Share2,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  Globe,
  ImageIcon,
  AlertCircle,
  ExternalLink,
  Twitter,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';

interface SocialPreset {
  name: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  siteName: string;
  twitterHandle: string;
}

const PRESETS: SocialPreset[] = [
  {
    name: 'Zelvori Enterprise Platform',
    title: 'Zelvori — High-Performance Digital Product Architecture & Custom Engineering',
    description:
      'International digital product partner engineering scalable web applications, mobile platforms, enterprise ERP/CRM business software and intelligent automation.',
    url: 'https://zelvori.software/',
    imageUrl: 'https://zelvori.software/images/brand/zelvori-og.png',
    siteName: 'Zelvori',
    twitterHandle: '@zelvori',
  },
  {
    name: 'SaaS Architecture Launch',
    title: 'PulseTelemetry — Distributed Tracing and Real-Time Edge Analytics',
    description:
      'Monitor distributed microservices with millisecond latency, automated anomaly detection, and unified OpenTelemetry dashboards for site reliability teams.',
    url: 'https://pulsetelemetry.example.com/',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80',
    siteName: 'PulseTelemetry',
    twitterHandle: '@pulsetelemetry',
  },
  {
    name: 'Design System & UI Kit',
    title: 'Aura UI — Modern Accessible Primitives for React and Tailwind CSS',
    description:
      'A refined collection of unstyled, accessible React components crafted for speed, comprehensive keyboard navigation and seamless theming.',
    url: 'https://auraui.example.com/',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80',
    siteName: 'Aura Design',
    twitterHandle: '@auraui',
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

export function SocialPreviewTool() {
  const [title, setTitle] = useState(
    'Zelvori — High-Performance Digital Product Architecture & Custom Engineering'
  );
  const [description, setDescription] = useState(
    'International digital product partner engineering scalable web applications, mobile platforms, enterprise ERP/CRM business software and intelligent automation.'
  );
  const [url, setUrl] = useState('https://zelvori.software/');
  const [imageUrl, setImageUrl] = useState('https://zelvori.software/images/brand/zelvori-og.png');
  const [siteName, setSiteName] = useState('Zelvori');
  const [twitterHandle, setTwitterHandle] = useState('@zelvori');
  const [copied, setCopied] = useState(false);
  const [platformView, setPlatformView] = useState<'facebook' | 'twitter'>('facebook');
  const [imageLoaded, setImageLoaded] = useState<boolean | null>(null);

  // Local test of image URL rendering in browser
  useEffect(() => {
    let active = true;
    if (!imageUrl.trim()) {
      return;
    }
    const img = new Image();
    img.onload = () => {
      if (active) setImageLoaded(true);
    };
    img.onerror = () => {
      if (active) setImageLoaded(false);
    };
    img.src = imageUrl;
    return () => {
      active = false;
    };
  }, [imageUrl]);

  const parsedDomain = (() => {
    try {
      const u = new URL(url.startsWith('http') ? url : `https://${url}`);
      return u.hostname;
    } catch {
      return 'zelvori.software';
    }
  })();

  const generatedTags = `<!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${escapeHtml(url)}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
${imageUrl ? `<meta property="og:image" content="${escapeHtml(imageUrl)}" />\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n` : ''}${siteName ? `<meta property="og:site_name" content="${escapeHtml(siteName)}" />\n` : ''}
<!-- Twitter / X Card Metadata -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${escapeHtml(url)}" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
${imageUrl ? `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />\n` : ''}${twitterHandle ? `<meta name="twitter:site" content="${escapeHtml(twitterHandle)}" />\n` : ''}`;

  const copyTags = async () => {
    try {
      await navigator.clipboard.writeText(generatedTags);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const applyPreset = (preset: SocialPreset) => {
    setTitle(preset.title);
    setDescription(preset.description);
    setUrl(preset.url);
    setImageUrl(preset.imageUrl);
    setSiteName(preset.siteName);
    setTwitterHandle(preset.twitterHandle);
  };

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setUrl('');
    setImageUrl('');
    setSiteName('');
    setTwitterHandle('');
  };

  return (
    <div className="space-y-10">
      {/* Privacy Guarantee & Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            <strong className="text-white font-medium">100% Client-Side Privacy:</strong> Preview generation and meta tag formatting occur locally in your browser.
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
            onClick={resetFields}
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            title="Reset form"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Form Controls */}
        <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white">Social Graph Parameters</h2>
            <p className="mt-1 text-xs text-slate-400">
              Provide Open Graph and Twitter Card values. Actual rendering varies by platform, scraper caching and viewport.
            </p>
          </div>

          {/* Title */}
          <div>
            <div className="flex justify-between text-xs">
              <label htmlFor="og-title" className="font-semibold uppercase tracking-wider text-slate-200">
                Card Title <span className="text-cyan-400">*</span>
              </label>
              <span className="font-mono text-slate-400">{title.length} chars</span>
            </div>
            <input
              id="og-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Acme — High-Performance Cloud Software"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <div className="flex justify-between text-xs">
              <label htmlFor="og-description" className="font-semibold uppercase tracking-wider text-slate-200">
                Card Description <span className="text-cyan-400">*</span>
              </label>
              <span className="font-mono text-slate-400">{description.length} chars</span>
            </div>
            <textarea
              id="og-description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a concise social summary for feed readers..."
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none resize-none"
            />
          </div>

          {/* Canonical Page URL */}
          <div>
            <label htmlFor="og-url" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Absolute Page URL <span className="text-cyan-400">*</span>
            </label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <Globe className="h-4 w-4" />
              </div>
              <input
                id="og-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/blog/my-post"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <div className="flex justify-between text-xs">
              <label htmlFor="og-image-url" className="font-semibold uppercase tracking-wider text-slate-200">
                Open Graph Image URL (1200×630 recommended)
              </label>
              {imageLoaded === true && (
                <span className="text-emerald-400 font-mono text-[11px]">✓ Image verified locally</span>
              )}
              {imageLoaded === false && (
                <span className="text-amber-400 font-mono text-[11px]">⚠ Unable to load image locally</span>
              )}
            </div>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <ImageIcon className="h-4 w-4" />
              </div>
              <input
                id="og-image-url"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/images/brand/og-banner.png"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Ensure your image is hosted on an accessible HTTPS server without blocking social crawler bots.
            </p>
          </div>

          {/* Secondary Brand & Twitter Handle */}
          <div className="grid gap-4 sm:grid-cols-2 pt-1">
            <div>
              <label htmlFor="og-site-name" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Site Name
              </label>
              <input
                id="og-site-name"
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="e.g. Zelvori"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="og-twitter-handle" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Twitter Handle
              </label>
              <input
                id="og-twitter-handle"
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                placeholder="e.g. @zelvori"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Previews & Code */}
        <div className="space-y-6">
          {/* Card Simulation Box */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Simulated Social Feed Card
                </h3>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setPlatformView('facebook')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
                    platformView === 'facebook'
                      ? 'bg-blue-500/20 text-blue-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Linkedin className="h-3 w-3" />
                  <span>OpenGraph</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlatformView('twitter')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
                    platformView === 'twitter'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Twitter className="h-3 w-3" />
                  <span>Twitter/X</span>
                </button>
              </div>
            </div>

            {/* Simulated Social Card */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-[#0c121e] shadow-xl">
              {/* Image Banner */}
              <div className="relative aspect-[1200/630] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {imageUrl && imageLoaded === true ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={imageUrl}
                    alt={title || 'Social card preview'}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center text-slate-500">
                    <ImageIcon className="h-10 w-10 text-slate-600 mb-2" />
                    <span className="text-xs font-mono">
                      {imageUrl
                        ? 'Testing local image load...'
                        : '1200 × 630 OpenGraph Image Placeholder'}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Metadata Bottom */}
              <div className="p-4 sm:p-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {parsedDomain}
                </div>
                <h4 className="mt-1 text-base font-bold text-white line-clamp-2 leading-snug">
                  {title || 'Enter a page title...'}
                </h4>
                <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {description || 'Enter a meta description to see how it previews in social feeds.'}
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-950/60 p-3 text-[11px] text-slate-400 border border-slate-800/60">
              <AlertCircle className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
              <p>
                <strong>Simulation notice:</strong> This preview is simulated and actual rendering varies by platform (X/Twitter, LinkedIn, Facebook, Slack). We do not claim to validate public reachability of an image URL unless tested directly.
              </p>
            </div>
          </div>

          {/* Generated HTML Tags */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Social Meta Tags</h3>
                <p className="text-xs text-slate-400 mt-0.5">Embed in your HTML &lt;head&gt; element.</p>
              </div>
              <button
                type="button"
                onClick={copyTags}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 shadow-md shadow-cyan-950/30"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied Tags' : 'Copy Meta Tags'}</span>
              </button>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-800/90 bg-slate-950 p-4 font-mono text-xs text-cyan-200/90 leading-relaxed">
              <code>{generatedTags}</code>
            </pre>
            <p aria-live="polite" className="mt-2 text-right text-[11px] text-slate-400">
              {copied ? 'Copied to clipboard.' : 'Includes OpenGraph 2.0 and Twitter Card specification tags.'}
            </p>
          </div>
        </div>
      </div>

      {/* Explanatory Technical Reference */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">Social Graph Architecture Guidelines</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3 text-xs text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">1. Ideal Dimensions</h4>
            <p className="mt-1.5 text-slate-400">
              Always export cards at 1200×630 pixels (1.91:1 ratio) in PNG or high-quality WebP. Keep critical titles within the central 1200×600 safe zone to prevent edge cropping.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">2. Crawler Caching</h4>
            <p className="mt-1.5 text-slate-400">
              Social crawlers (Facebook External Hit, Twitterbot, LinkedInBot) aggressively cache metadata. When updating an image, change its URL or purge cache using the platform debuggers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">3. WhatsApp &amp; Chat Apps</h4>
            <p className="mt-1.5 text-slate-400">
              Messaging apps often favour a square (1:1) thumbnail or require images under 300KB to preview immediately on cellular connections.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Need custom frontend architecture, social branding cards or web development?
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resources/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Explore Developer Resources</span>
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
