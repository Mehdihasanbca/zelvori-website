'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Check, X, ExternalLink } from 'lucide-react';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    try {
      const stored = localStorage.getItem('zelvori_privacy_consent');
      if (!stored) {
        // Small delay to ensure hydration settles cleanly before displaying
        timer = setTimeout(() => setIsVisible(true), 800);
      }
    } catch {
      // localStorage may be restricted in sandboxed iframes or private modes
    }

    const handleOpen = () => setIsVisible(true);
    window.addEventListener('zelvori-open-cookie-banner', handleOpen);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('zelvori-open-cookie-banner', handleOpen);
    };
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('zelvori_privacy_consent', 'all');
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('zelvori_privacy_consent', 'essential');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#080d1a]/95 backdrop-blur-2xl p-5 shadow-2xl shadow-cyan-950/40 text-slate-100">
        {/* Top ambient highlight line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleEssentialOnly}
          aria-label="Close and continue with essential preferences"
          className="absolute top-3.5 right-3.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="space-y-2.5 pr-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono font-semibold tracking-wider text-cyan-400">
                Privacy &amp; Cookies
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
                AdSense &amp; Essential
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Zelvori uses essential browser storage to remember your settings and, subject to your choices, third-party advertising cookies (such as Google AdSense) to deliver relevant content and support our independent engineering publication.
            </p>

            <div className="text-[11px] text-slate-400">
              Read our full disclosures and opt-out controls in our{' '}
              <Link
                href="/privacy/#advertising-cookies"
                className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </Link>.
            </div>

            {/* Action Buttons */}
            <div className="pt-1.5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All</span>
              </button>

              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-3.5 py-2 text-xs font-medium rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Essential Only</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
