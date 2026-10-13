'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Play, Film, Sparkles, Volume2, ShieldCheck, Download } from 'lucide-react';

interface BrandVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideo?: 'reel' | 'ads';
}

export function BrandVideoModal({
  isOpen,
  onClose,
  initialVideo = 'reel',
}: BrandVideoModalProps) {
  const [userVideo, setUserVideo] = useState<'reel' | 'ads' | null>(null);
  const activeVideo = userVideo ?? initialVideo;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    setUserVideo(null);
    onClose();
  }, [onClose]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const videoMeta = {
    reel: {
      title: 'Zelvori 3D Tech Architecture Reel',
      subtitle: 'Futuristic Cybernetic Visualization & Neural Core Engineering',
      src: '/videos/brand-reel.mp4',
      size: '2.74 MB',
      duration: '~10s 60fps',
      aspect: '16:9',
      badge: 'Brand Architecture Reel',
    },
    ads: {
      title: 'Zelvori Commercial & Ads Film',
      subtitle: 'Full-Spectrum Web, Mobile & Enterprise Platform Motion Showcase',
      src: '/videos/brand-ads.mp4',
      size: '3.99 MB',
      duration: '~14s 60fps',
      aspect: '16:9',
      badge: 'Commercial Promo',
    },
  };

  const current = videoMeta[activeVideo];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Zelvori Brand Video Cinema Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
      onClick={handleClose}
    >
      {/* Modal Dialog Window */}
      <div
        className="relative w-full max-w-4xl liquid-glass rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden shadow-2xl shadow-cyan-500/10 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* macOS Style Frosted Glass Top Bar */}
        <div className="px-4 py-3 sm:px-6 bg-[#0a0f1e]/90 border-b border-white/10 flex items-center justify-between gap-3">
          {/* Traffic Lights & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <button
                type="button"
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors focus:outline-none"
                title="Close modal"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-semibold">Zelvori Cinema Lab</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">{current.badge}</span>
            </div>
          </div>

          {/* Video Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setUserVideo('reel')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                activeVideo === 'reel'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Brand Reel</span>
              <span className="text-[10px] text-slate-400 hidden md:inline">(2.7 MB)</span>
            </button>

            <button
              type="button"
              onClick={() => setUserVideo('ads')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                activeVideo === 'ads'
                  ? 'bg-gradient-to-r from-indigo-500/20 to-sky-500/20 text-indigo-300 border border-indigo-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Ads</span>
              <span className="text-[10px] text-slate-400 hidden md:inline">(4.0 MB)</span>
            </button>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close brand video modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative bg-black flex items-center justify-center aspect-video w-full overflow-hidden">
          <video
            ref={videoRef}
            key={current.src}
            src={current.src}
            controls
            autoPlay
            playsInline
            loop
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>

          {/* Subtle Watermark overlay in corner */}
          <div className="absolute top-3 left-4 pointer-events-none opacity-40 hover:opacity-90 transition-opacity">
            <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300 drop-shadow-md">
              Zelvori Studio
            </span>
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 sm:p-5 bg-[#0a0f1e]/95 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{current.title}</h3>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                1080p HD
              </span>
            </div>
            <p className="text-xs text-slate-400">{current.subtitle}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{current.size}</span>
              <span className="text-slate-600">·</span>
              <span>MP4 H.264</span>
            </div>

            <a
              href="/images/brand/zelvori-futuristic-tech-wallpaper.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg liquid-glass-pill text-[11px] font-medium text-cyan-300 hover:text-white transition-all"
            >
              <Download className="w-3 h-3" />
              <span>Get 4K Wallpaper</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
