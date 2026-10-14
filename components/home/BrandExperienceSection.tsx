'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Film, Sparkles, Download, Maximize2, Cpu, ShieldCheck, Terminal, Layers, ArrowRight } from 'lucide-react';
import { BrandVideoModal } from '@/components/ui/BrandVideoModal';

export function BrandExperienceSection() {
  const [activeTab, setActiveTab] = useState<'reel' | 'ads'>('reel');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = {
    reel: {
      id: 'reel',
      title: 'Zelvori 3D Tech Architecture Reel',
      subtitle: 'Cybernetic Visual Synthesis · Core Infrastructure & Reactive Topology',
      src: '/videos/brand-reel.mp4',
      size: '2.74 MB',
      duration: '10s 60fps',
      badge: 'Brand Architecture Reel',
      description: 'An abstract exploration of distributed cloud systems, neural data pathways, and high-assurance architecture engineered by Zelvori.',
    },
    ads: {
      id: 'ads',
      title: 'Zelvori Commercial & Ads Film',
      subtitle: 'Cross-Platform Product Motion · Web, Mobile & Enterprise Workflows',
      src: '/videos/brand-ads.mp4',
      size: '3.99 MB',
      duration: '14s 60fps',
      badge: 'Commercial Film',
      description: 'Dynamic motion reel showcasing consumer mobile interfaces, SaaS analytics consoles, and cloud automation suites built for clients worldwide.',
    },
  };

  const current = videos[activeTab];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" id="brand-experience">
      {/* Background Ambient Glow & Tech Grid */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-teal-500/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Cinematic Lab</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 normal-case font-medium">Brand Experience &amp; Motion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Where Architecture Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
              Cinematic Motion.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            We don&apos;t just architect backend resilience and clean codebases—we craft high-impact visual narratives and digital identities that command respect.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Video Player Dock */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl video-glow">
              <div className="liquid-glass rounded-[calc(1.5rem-2px)] overflow-hidden">
                {/* Cinema Dock Window Bar */}
                <div className="px-4 py-3 bg-[#090e1c]/90 border-b border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
                      Zelvori Cinema Dock
                    </span>
                  </div>

                  {/* Switcher Buttons */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveTab('reel')}
                      className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                        activeTab === 'reel'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Brand Tech Reel
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ads')}
                      className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                        activeTab === 'ads'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Commercial Ads
                    </button>
                  </div>
                </div>

                {/* Video Playback Canvas */}
                <div className="relative aspect-video bg-black group overflow-hidden">
                  <video
                    key={current.src}
                    src={current.src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Fullscreen Overlay Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Open Fullscreen Cinema Modal"
                    className="absolute bottom-4 right-4 p-2 rounded-xl liquid-glass-pill text-white/90 hover:text-white opacity-80 hover:opacity-100 transition-all flex items-center gap-2 text-xs font-medium backdrop-blur-md"
                  >
                    <Maximize2 className="w-4 h-4 text-cyan-300" />
                    <span className="hidden sm:inline">Cinema Modal</span>
                  </button>
                </div>

                {/* Dock Footer Info */}
                <div className="p-4 sm:p-5 bg-[#090e1c]/95 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{current.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{current.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 text-[11px]">
                      {current.size}
                    </span>
                    <span className="text-slate-500">|</span>
                    <span className="text-emerald-400">{current.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Cards & Wallpaper Download */}
          <div className="lg:col-span-5 space-y-5">
            {/* Feature 1: Official Brand Mark & Logo Suite */}
            <div className="p-5 sm:p-6 rounded-2xl liquid-glass liquid-glass-interactive space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-cyan-400">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Official Brand Mark &amp; Logo Suite</h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  Vector SVG + PNG
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered with the geometric Z mark, kinetic velocity gradients, and bespoke wordmark lockup across light, dark, and monochrome environments.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href="/images/brand/zelvori-logo-dark.svg"
                  download="zelvori-logo-dark.svg"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg liquid-glass-btn-secondary text-xs font-medium text-cyan-300 hover:text-white transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download SVG Logo</span>
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors py-1 px-2.5"
                >
                  <span>Explore Logo Suite</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Feature 2: High-Res Wallpaper Showcase */}
            <div className="p-5 sm:p-6 rounded-2xl liquid-glass liquid-glass-interactive space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-indigo-400">
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Official 4K Wallpaper</h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  1.54 MB PNG
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download the official Zelvori futuristic tech wallpaper featuring luminescent cybernetic grid nodes and deep obsidian hues.
              </p>
              <div className="pt-1">
                <a
                  href="/images/brand/zelvori-futuristic-tech-wallpaper.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl liquid-glass-pill text-xs font-semibold text-cyan-300 hover:text-white transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Zelvori Tech Wallpaper</span>
                </a>
              </div>
            </div>

            {/* Feature 3: Fullscreen Modal Trigger CTA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Interactive Cinema Lab</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Experience in Fullscreen Theater Mode
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch our Apple Glassmorphism cinema player to experience high-bitrate video playback with seamless switching.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Cinema Player (MP4)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Brand Video Modal */}
      <BrandVideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialVideo={activeTab}
      />
    </section>
  );
}
