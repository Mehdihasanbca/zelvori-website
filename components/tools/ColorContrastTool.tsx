'use client';

import React, { useState } from 'react';
import {
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ShieldCheck,
  RotateCcw,
  AlertTriangle,
  Info,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

interface ColorPreset {
  name: string;
  fg: string;
  bg: string;
}

const PRESETS: ColorPreset[] = [
  { name: 'Cyber Cyan on Dark', fg: '#38bdf8', bg: '#0b1329' },
  { name: 'High Contrast Emerald', fg: '#10b981', bg: '#051910' },
  { name: 'Ultra High White on Slate', fg: '#ffffff', bg: '#020617' },
  { name: 'Accessible Light Mode', fg: '#0f172a', bg: '#f8fafc' },
  { name: 'Borderline Muted (AA Large only)', fg: '#94a3b8', bg: '#1e293b' },
];

// Official W3C relative luminance from sRGB:
// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
  }
  return null;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function calculateContrastRatio(fgHex: string, bgHex: string): number | null {
  const fgRgb = hexToRgb(fgHex);
  const bgRgb = hexToRgb(bgHex);
  if (!fgRgb || !bgRgb) return null;

  const lum1 = getLuminance(...fgRgb);
  const lum2 = getLuminance(...bgRgb);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

export function ColorContrastTool() {
  const [foreground, setForeground] = useState('#38bdf8');
  const [background, setBackground] = useState('#0b1329');
  const [copied, setCopied] = useState(false);

  const ratio = calculateContrastRatio(foreground, background);
  const formattedRatio = ratio ? ratio.toFixed(2) : '—';

  // WCAG thresholds
  // Normal text (< 18pt or < 14pt bold): AA = 4.5, AAA = 7.0
  // Large text (>= 18pt or >= 14pt bold): AA = 3.0, AAA = 4.5
  // UI components & graphical elements: 3.0
  const passAaNormal = ratio !== null && ratio >= 4.5;
  const passAaaNormal = ratio !== null && ratio >= 7.0;
  const passAaLarge = ratio !== null && ratio >= 3.0;
  const passAaaLarge = ratio !== null && ratio >= 4.5;
  const passUiComponents = ratio !== null && ratio >= 3.0;

  const handleSwap = () => {
    const temp = foreground;
    setForeground(background);
    setBackground(temp);
  };

  const handleCopyCss = async () => {
    const css = `/* Color Contrast Pair (Ratio: ${formattedRatio}:1) */
color: ${foreground};
background-color: ${background};`;
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-10">
      {/* Privacy Guarantee & Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            <strong className="text-white font-medium">100% Client-Side Privacy:</strong> All color conversions and luminance calculations run in your browser.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Presets:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => {
                setForeground(p.fg);
                setBackground(p.bg);
              }}
              className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Controls & Calculations */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Color Pickers and Ratios */}
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white">Color Inputs</h2>
            <p className="mt-1 text-xs text-slate-400">
              Select foreground and background hex values to compute the sRGB relative luminance contrast ratio.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Foreground */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <label htmlFor="fg-color-hex" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Foreground (Text)
              </label>
              <div className="mt-3 flex items-center gap-3">
                <input
                  id="fg-color-picker"
                  aria-label="Foreground color picker"
                  type="color"
                  value={foreground.startsWith('#') && foreground.length === 7 ? foreground : '#38bdf8'}
                  onChange={(e) => setForeground(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-slate-700 bg-transparent p-0"
                />
                <input
                  id="fg-color-hex"
                  type="text"
                  value={foreground}
                  onChange={(e) => setForeground(e.target.value)}
                  placeholder="#38bdf8"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Background */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <label htmlFor="bg-color-hex" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Background (Surface)
              </label>
              <div className="mt-3 flex items-center gap-3">
                <input
                  id="bg-color-picker"
                  aria-label="Background color picker"
                  type="color"
                  value={background.startsWith('#') && background.length === 7 ? background : '#0b1329'}
                  onChange={(e) => setBackground(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-slate-700 bg-transparent p-0"
                />
                <input
                  id="bg-color-hex"
                  type="text"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  placeholder="#0b1329"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handleSwap}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition"
            >
              <ArrowLeftRight className="h-3.5 w-3.5" />
              <span>Swap Foreground &amp; Background</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCss}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-300 transition shadow-md shadow-cyan-950/20"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied CSS' : 'Copy CSS rules'}</span>
            </button>
          </div>

          {/* Large Ratio Score Banner */}
          <div className="rounded-2xl border border-slate-800 bg-[#111726] p-6 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Calculated Contrast Ratio
            </span>
            <div className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white font-mono">
              {formattedRatio} <span className="text-2xl text-slate-500 font-normal">: 1</span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              {ratio === null
                ? 'Invalid hex color input. Please enter valid 3 or 6 character hex codes.'
                : ratio >= 7
                ? 'Excellent contrast. Exceeds WCAG AAA requirements for all text sizes.'
                : ratio >= 4.5
                ? 'Good contrast. Meets WCAG AA for normal text and AAA for large text.'
                : ratio >= 3.0
                ? 'Acceptable for large text (18pt+ / 14pt bold) and non-text UI components.'
                : 'Insufficient contrast. Fails WCAG 2.1 AA requirements.'}
            </p>
          </div>

          {/* WCAG Compliance Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              WCAG 2.1 Contrast Thresholds
            </h3>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {/* Normal AA */}
              <div
                className={`flex items-center justify-between rounded-xl border p-3.5 text-xs ${
                  passAaNormal
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-500/30 bg-red-950/20 text-red-300'
                }`}
              >
                <div>
                  <div className="font-semibold">Normal Text (AA)</div>
                  <div className="text-[11px] opacity-75">Req: 4.5:1</div>
                </div>
                {passAaNormal ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-red-400">
                    <XCircle className="h-4 w-4" /> FAIL
                  </span>
                )}
              </div>

              {/* Normal AAA */}
              <div
                className={`flex items-center justify-between rounded-xl border p-3.5 text-xs ${
                  passAaaNormal
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-500/30 bg-red-950/20 text-red-300'
                }`}
              >
                <div>
                  <div className="font-semibold">Normal Text (AAA)</div>
                  <div className="text-[11px] opacity-75">Req: 7.0:1</div>
                </div>
                {passAaaNormal ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-red-400">
                    <XCircle className="h-4 w-4" /> FAIL
                  </span>
                )}
              </div>

              {/* Large AA */}
              <div
                className={`flex items-center justify-between rounded-xl border p-3.5 text-xs ${
                  passAaLarge
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-500/30 bg-red-950/20 text-red-300'
                }`}
              >
                <div>
                  <div className="font-semibold">Large Text (AA)</div>
                  <div className="text-[11px] opacity-75">Req: 3.0:1 (18pt / 14pt bold)</div>
                </div>
                {passAaLarge ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-red-400">
                    <XCircle className="h-4 w-4" /> FAIL
                  </span>
                )}
              </div>

              {/* Large AAA */}
              <div
                className={`flex items-center justify-between rounded-xl border p-3.5 text-xs ${
                  passAaaLarge
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-500/30 bg-red-950/20 text-red-300'
                }`}
              >
                <div>
                  <div className="font-semibold">Large Text (AAA)</div>
                  <div className="text-[11px] opacity-75">Req: 4.5:1</div>
                </div>
                {passAaaLarge ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-red-400">
                    <XCircle className="h-4 w-4" /> FAIL
                  </span>
                )}
              </div>

              {/* UI Components */}
              <div
                className={`sm:col-span-2 flex items-center justify-between rounded-xl border p-3.5 text-xs ${
                  passUiComponents
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-500/30 bg-red-950/20 text-red-300'
                }`}
              >
                <div>
                  <div className="font-semibold">Graphical Objects &amp; UI Components</div>
                  <div className="text-[11px] opacity-75">Req: 3.0:1 (Icons, borders, input controls)</div>
                </div>
                {passUiComponents ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-red-400">
                    <XCircle className="h-4 w-4" /> FAIL
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Render Sandbox */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Live Visual Rendering Sandbox</h3>
            <p className="mt-1 text-xs text-slate-400">
              Preview how headings, body text, badges and buttons appear with your chosen colors.
            </p>

            {/* Simulated Canvas */}
            <div
              className="mt-5 rounded-2xl p-6 sm:p-8 transition-colors duration-200 border border-slate-800/90 shadow-inner"
              style={{
                backgroundColor: background,
                color: foreground,
              }}
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider border"
                style={{
                  borderColor: foreground,
                  color: foreground,
                }}
              >
                Interactive Preview Badge
              </span>

              <h4 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Large Display Heading (24px+)
              </h4>

              <p className="mt-3 text-sm leading-relaxed opacity-95">
                This is regular 14px–16px body copy rendered on your chosen background surface. When evaluating typography, also consider ambient glare, mobile brightness and user eye strain.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  tabIndex={-1}
                  className="rounded-xl px-4 py-2 text-xs font-semibold shadow"
                  style={{
                    backgroundColor: foreground,
                    color: background,
                  }}
                >
                  Primary Action Button
                </button>

                <div
                  className="rounded-xl border px-4 py-2 text-xs font-medium"
                  style={{
                    borderColor: foreground,
                    color: foreground,
                  }}
                >
                  Outlined Element
                </div>
              </div>
            </div>

            {/* Mandatory WCAG Compliance Disclaimer */}
            <div className="mt-5 rounded-2xl border border-amber-500/25 bg-amber-950/20 p-4 text-xs text-amber-200/90 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-300">Important Accessibility Caveat</h4>
                  <p className="mt-1 text-amber-200/80">
                    A passing contrast ratio is necessary, but <strong>does not describe a color pair as fully WCAG-compliant on its own</strong>. Complete accessibility also requires readable font sizes, adequate line spacing, focus indicators, keyboard access, screen-reader semantics, and avoiding color as the sole conveyor of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Guide */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">Understanding WCAG Contrast Standards</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3 text-xs text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">Level AA (Minimum)</h4>
            <p className="mt-1.5 text-slate-400">
              The international benchmark for public and commercial websites. Requires at least 4.5:1 for normal text and 3.0:1 for large text (18pt or 14pt bold).
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">Level AAA (Enhanced)</h4>
            <p className="mt-1.5 text-slate-400">
              Intended for specialized readability, healthcare platforms, and high-legibility document portals. Demands 7.0:1 for standard text and 4.5:1 for large text.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">Graphical Objects &amp; UI</h4>
            <p className="mt-1.5 text-slate-400">
              WCAG 2.1 added criterion 1.4.11 requiring 3:1 contrast for input borders, checkboxes, navigation icons and active focus rings against adjacent colors.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Need an enterprise accessibility audit or design system engineering?
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services/application-security/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Explore Security &amp; Compliance Engineering</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300"
            >
              <span>Schedule Architecture Review</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
