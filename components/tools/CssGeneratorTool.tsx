'use client';

import React, { useState } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  Sliders,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

interface StylePreset {
  name: string;
  gradientType: 'linear' | 'radial';
  angle: number;
  color1: string;
  stop1: number;
  color2: string;
  stop2: number;
  hasMidColor: boolean;
  midColor: string;
  midStop: number;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;
  shadowSpread: number;
  shadowColor: string;
  shadowOpacity: number;
  shadowInset: boolean;
  borderRadius: number;
}

const PRESETS: StylePreset[] = [
  {
    name: 'Cyber Cyan Glow',
    gradientType: 'linear',
    angle: 135,
    color1: '#06b6d4',
    stop1: 0,
    color2: '#2563eb',
    stop2: 100,
    hasMidColor: false,
    midColor: '#0ea5e9',
    midStop: 50,
    shadowX: 0,
    shadowY: 20,
    shadowBlur: 35,
    shadowSpread: -5,
    shadowColor: '#06b6d4',
    shadowOpacity: 0.35,
    shadowInset: false,
    borderRadius: 20,
  },
  {
    name: 'Glassmorphism Card',
    gradientType: 'linear',
    angle: 180,
    color1: '#1e293b',
    stop1: 0,
    color2: '#0f172a',
    stop2: 100,
    hasMidColor: false,
    midColor: '#334155',
    midStop: 50,
    shadowX: 0,
    shadowY: 10,
    shadowBlur: 25,
    shadowSpread: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowInset: false,
    borderRadius: 16,
  },
  {
    name: 'Deep Neo Elevation',
    gradientType: 'linear',
    angle: 145,
    color1: '#1e1b4b',
    stop1: 0,
    color2: '#0f172a',
    stop2: 100,
    hasMidColor: true,
    midColor: '#312e81',
    midStop: 45,
    shadowX: 0,
    shadowY: 25,
    shadowBlur: 50,
    shadowSpread: -12,
    shadowColor: '#4338ca',
    shadowOpacity: 0.4,
    shadowInset: false,
    borderRadius: 24,
  },
  {
    name: 'Emerald Aurora',
    gradientType: 'linear',
    angle: 120,
    color1: '#059669',
    stop1: 0,
    color2: '#0284c7',
    stop2: 100,
    hasMidColor: false,
    midColor: '#10b981',
    midStop: 50,
    shadowX: 0,
    shadowY: 15,
    shadowBlur: 30,
    shadowSpread: -3,
    shadowColor: '#059669',
    shadowOpacity: 0.3,
    shadowInset: false,
    borderRadius: 18,
  },
];

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '').trim();
  let r = 0, g = 0, b = 0;
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16) || 0;
    g = parseInt(clean[1] + clean[1], 16) || 0;
    b = parseInt(clean[2] + clean[2], 16) || 0;
  } else if (clean.length === 6) {
    r = parseInt(clean.substring(0, 2), 16) || 0;
    g = parseInt(clean.substring(2, 4), 16) || 0;
    b = parseInt(clean.substring(4, 6), 16) || 0;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function CssGeneratorTool() {
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState('#06b6d4');
  const [stop1, setStop1] = useState(0);
  const [color2, setColor2] = useState('#2563eb');
  const [stop2, setStop2] = useState(100);
  const [hasMidColor, setHasMidColor] = useState(false);
  const [midColor, setMidColor] = useState('#0ea5e9');
  const [midStop, setMidStop] = useState(50);

  // Shadow parameters
  const [shadowX, setShadowX] = useState(0);
  const [shadowY, setShadowY] = useState(20);
  const [shadowBlur, setShadowBlur] = useState(35);
  const [shadowSpread, setShadowSpread] = useState(-5);
  const [shadowColor, setShadowColor] = useState('#06b6d4');
  const [shadowOpacity, setShadowOpacity] = useState(0.35);
  const [shadowInset, setShadowInset] = useState(false);

  // Radius
  const [borderRadius, setBorderRadius] = useState(20);
  const [copied, setCopied] = useState(false);
  const [canvasTheme, setCanvasTheme] = useState<'dark' | 'light'>('dark');

  // Compute CSS strings
  const gradientCss = gradientType === 'linear'
    ? hasMidColor
      ? `linear-gradient(${angle}deg, ${color1} ${stop1}%, ${midColor} ${midStop}%, ${color2} ${stop2}%)`
      : `linear-gradient(${angle}deg, ${color1} ${stop1}%, ${color2} ${stop2}%)`
    : hasMidColor
      ? `radial-gradient(circle, ${color1} ${stop1}%, ${midColor} ${midStop}%, ${color2} ${stop2}%)`
      : `radial-gradient(circle, ${color1} ${stop1}%, ${color2} ${stop2}%)`;

  const shadowRgba = hexToRgba(shadowColor, shadowOpacity);
  const shadowCss = `${shadowInset ? 'inset ' : ''}${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowRgba}`;

  const generatedCss = `/* Generated Modern CSS Styles */
background: ${gradientCss};
box-shadow: ${shadowCss};
border-radius: ${borderRadius}px;`;

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(generatedCss);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const applyPreset = (preset: StylePreset) => {
    setGradientType(preset.gradientType);
    setAngle(preset.angle);
    setColor1(preset.color1);
    setStop1(preset.stop1);
    setColor2(preset.color2);
    setStop2(preset.stop2);
    setHasMidColor(preset.hasMidColor);
    setMidColor(preset.midColor);
    setMidStop(preset.midStop);
    setShadowX(preset.shadowX);
    setShadowY(preset.shadowY);
    setShadowBlur(preset.shadowBlur);
    setShadowSpread(preset.shadowSpread);
    setShadowColor(preset.shadowColor);
    setShadowOpacity(preset.shadowOpacity);
    setShadowInset(preset.shadowInset);
    setBorderRadius(preset.borderRadius);
  };

  const resetDefaults = () => {
    applyPreset(PRESETS[0]);
  };

  return (
    <div className="space-y-10">
      {/* Privacy Guarantee & Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            <strong className="text-white font-medium">100% Client-Side Privacy:</strong> All CSS styling properties are computed in your browser without telemetry.
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
            onClick={resetDefaults}
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            title="Reset default values"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Controls + Live Canvas */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Controls Column (7 cols) */}
        <div className="space-y-6 lg:col-span-7">
          {/* Section 1: Gradient Parameters */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-cyan-400" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">Gradient Properties</h2>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setGradientType('linear')}
                  className={`rounded-md px-2.5 py-1 font-medium transition ${
                    gradientType === 'linear'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Linear
                </button>
                <button
                  type="button"
                  onClick={() => setGradientType('radial')}
                  className={`rounded-md px-2.5 py-1 font-medium transition ${
                    gradientType === 'radial'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Radial
                </button>
              </div>
            </div>

            {/* Angle Slider (if linear) */}
            {gradientType === 'linear' && (
              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="gradient-angle" className="font-semibold text-slate-200">Angle Direction</label>
                  <span className="font-mono text-cyan-400">{angle}°</span>
                </div>
                <input
                  id="gradient-angle"
                  aria-label="Gradient angle slider"
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="mt-2 w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            )}

            {/* Stops grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Color 1 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-200">Start Color</span>
                  <span className="font-mono text-cyan-400">{stop1}%</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    aria-label="Start color picker"
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="h-9 w-10 cursor-pointer rounded border border-slate-700 bg-transparent p-0"
                  />
                  <input
                    type="text"
                    aria-label="Start color hex code"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-white"
                  />
                </div>
                <input
                  aria-label="Start color position slider"
                  type="range"
                  min="0"
                  max="100"
                  value={stop1}
                  onChange={(e) => setStop1(Number(e.target.value))}
                  className="mt-3 w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Color 2 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-200">End Color</span>
                  <span className="font-mono text-cyan-400">{stop2}%</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    aria-label="End color picker"
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="h-9 w-10 cursor-pointer rounded border border-slate-700 bg-transparent p-0"
                  />
                  <input
                    type="text"
                    aria-label="End color hex code"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-white"
                  />
                </div>
                <input
                  aria-label="End color position slider"
                  type="range"
                  min="0"
                  max="100"
                  value={stop2}
                  onChange={(e) => setStop2(Number(e.target.value))}
                  className="mt-3 w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Optional Middle Stop Toggle */}
            <div className="flex items-center justify-between pt-1">
              <label htmlFor="toggle-mid-stop" className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  id="toggle-mid-stop"
                  type="checkbox"
                  checked={hasMidColor}
                  onChange={(e) => setHasMidColor(e.target.checked)}
                  className="rounded border-slate-700 text-cyan-400 focus:ring-cyan-400"
                />
                <span>Include middle color stop</span>
              </label>
            </div>

            {hasMidColor && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-200">Middle Color Stop</span>
                  <span className="font-mono text-cyan-400">{midStop}%</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    aria-label="Middle color picker"
                    type="color"
                    value={midColor}
                    onChange={(e) => setMidColor(e.target.value)}
                    className="h-9 w-10 cursor-pointer rounded border border-slate-700 bg-transparent p-0"
                  />
                  <input
                    type="text"
                    aria-label="Middle color hex code"
                    value={midColor}
                    onChange={(e) => setMidColor(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-white"
                  />
                </div>
                <input
                  aria-label="Middle color position slider"
                  type="range"
                  min="0"
                  max="100"
                  value={midStop}
                  onChange={(e) => setMidStop(Number(e.target.value))}
                  className="mt-3 w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Section 2: Box Shadow Controls */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-cyan-400" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">Box Shadow &amp; Radius</h2>
              </div>
              <label htmlFor="toggle-inset" className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  id="toggle-inset"
                  type="checkbox"
                  checked={shadowInset}
                  onChange={(e) => setShadowInset(e.target.checked)}
                  className="rounded border-slate-700 text-cyan-400 focus:ring-cyan-400"
                />
                <span>Inset shadow</span>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* X Offset */}
              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="shadow-x" className="text-slate-300">X Offset</label>
                  <span className="font-mono text-cyan-400">{shadowX}px</span>
                </div>
                <input
                  id="shadow-x"
                  aria-label="Shadow X offset slider"
                  type="range"
                  min="-50"
                  max="50"
                  value={shadowX}
                  onChange={(e) => setShadowX(Number(e.target.value))}
                  className="mt-2 w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Y Offset */}
              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="shadow-y" className="text-slate-300">Y Offset</label>
                  <span className="font-mono text-cyan-400">{shadowY}px</span>
                </div>
                <input
                  id="shadow-y"
                  aria-label="Shadow Y offset slider"
                  type="range"
                  min="-50"
                  max="50"
                  value={shadowY}
                  onChange={(e) => setShadowY(Number(e.target.value))}
                  className="mt-2 w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Blur */}
              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="shadow-blur" className="text-slate-300">Blur Radius</label>
                  <span className="font-mono text-cyan-400">{shadowBlur}px</span>
                </div>
                <input
                  id="shadow-blur"
                  aria-label="Shadow blur radius slider"
                  type="range"
                  min="0"
                  max="100"
                  value={shadowBlur}
                  onChange={(e) => setShadowBlur(Number(e.target.value))}
                  className="mt-2 w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Spread */}
              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="shadow-spread" className="text-slate-300">Spread Radius</label>
                  <span className="font-mono text-cyan-400">{shadowSpread}px</span>
                </div>
                <input
                  id="shadow-spread"
                  aria-label="Shadow spread radius slider"
                  type="range"
                  min="-20"
                  max="50"
                  value={shadowSpread}
                  onChange={(e) => setShadowSpread(Number(e.target.value))}
                  className="mt-2 w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Shadow Color & Opacity */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <span className="text-xs font-semibold text-slate-200">Shadow Tint</span>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    aria-label="Shadow tint color picker"
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                    className="h-9 w-10 cursor-pointer rounded border border-slate-700 bg-transparent p-0"
                  />
                  <input
                    type="text"
                    aria-label="Shadow tint hex code"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-white"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex justify-between text-xs">
                  <label htmlFor="shadow-opacity" className="font-semibold text-slate-200">Shadow Opacity</label>
                  <span className="font-mono text-cyan-400">{Math.round(shadowOpacity * 100)}%</span>
                </div>
                <input
                  id="shadow-opacity"
                  aria-label="Shadow opacity slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={shadowOpacity}
                  onChange={(e) => setShadowOpacity(Number(e.target.value))}
                  className="mt-4 w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Border Radius */}
            <div className="pt-2">
              <div className="flex justify-between text-xs">
                <label htmlFor="border-radius" className="font-semibold text-slate-200">Border Radius</label>
                <span className="font-mono text-cyan-400">{borderRadius}px</span>
              </div>
              <input
                id="border-radius"
                aria-label="Border radius slider"
                type="range"
                min="0"
                max="64"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="mt-2 w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Live Preview & CSS Output (5 cols) */}
        <div className="space-y-6 lg:col-span-5">
          {/* Live Preview Box */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Live Visual Preview</h3>
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setCanvasTheme('dark')}
                  className={`rounded px-2 py-0.5 font-medium transition ${
                    canvasTheme === 'dark' ? 'bg-slate-800 text-white' : 'text-slate-400'
                  }`}
                >
                  Dark bg
                </button>
                <button
                  type="button"
                  onClick={() => setCanvasTheme('light')}
                  className={`rounded px-2 py-0.5 font-medium transition ${
                    canvasTheme === 'light' ? 'bg-slate-200 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Light bg
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div
              className={`mt-6 flex min-h-[280px] items-center justify-center rounded-2xl p-6 transition-colors ${
                canvasTheme === 'dark' ? 'bg-[#080d1a]' : 'bg-[#e2e8f0]'
              }`}
            >
              <div
                style={{
                  background: gradientCss,
                  boxShadow: shadowCss,
                  borderRadius: `${borderRadius}px`,
                }}
                className="flex h-44 w-full max-w-[260px] flex-col items-center justify-center p-5 text-center text-white transition-all duration-150"
              >
                <span className="rounded-full bg-black/25 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">
                  Surface Element
                </span>
                <span className="mt-2 text-sm font-bold drop-shadow">Interactive Box</span>
              </div>
            </div>
          </div>

          {/* Generated Code Output */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">CSS Output</h3>
              <button
                type="button"
                onClick={copyCss}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 shadow-md shadow-cyan-950/30"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied CSS' : 'Copy CSS'}</span>
              </button>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-800/90 bg-slate-950 p-4 font-mono text-xs text-cyan-200/90 leading-relaxed">
              <code>{generatedCss}</code>
            </pre>
            <p aria-live="polite" className="mt-2 text-right text-[11px] text-slate-400">
              {copied ? 'Copied to clipboard.' : 'Ready for any CSS stylesheet, CSS module or inline style.'}
            </p>
          </div>
        </div>
      </div>

      {/* Technical Engineering Reference */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">CSS Performance &amp; Stacking Best Practices</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3 text-xs text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">GPU Compositing</h4>
            <p className="mt-1.5 text-slate-400">
              Heavy blur radii (&gt; 40px) on large viewport elements can trigger excessive CPU paint cycles during scroll. Prefer subtle blurs or GPU-accelerated layered pseudo-elements.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">Multi-Layer Elevation</h4>
            <p className="mt-1.5 text-slate-400">
              Realistic physical lighting is achieved by combining a tight dark ambient shadow with a broader, softer directional blur.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">Color Interpolation</h4>
            <p className="mt-1.5 text-slate-400">
              Modern browsers interpolate CSS gradients in sRGB or OKLCH. Using contrasting hue pairs often benefits from an explicit intermediate stop to avoid muddy gray mid-tones.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Looking for bespoke UI component libraries or animation engineering?
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resources/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Explore Motion &amp; UI Libraries</span>
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
