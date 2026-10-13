'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState(
    "Hi Zelvori team, I'd like to discuss a new software project."
  );

  const rawPhone = (siteConfig.contact.whatsapp || '+919162530999').replace(/[^0-9]/g, '');
  const formattedPhone = '+91 91625 30999';

  // Handle ESC key to dismiss card
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const presetTopics = [
    { label: '🚀 Custom Web / Mobile App', msg: "Hi Zelvori team, I'm looking to build a custom web or mobile application." },
    { label: '⚡ Enterprise ERP / CRM Software', msg: "Hello, I want to discuss custom ERP / CRM business software for my company." },
    { label: '🔒 Security & Code Audit', msg: "Hi Zelvori, I need an application security and architecture audit for our codebase." },
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside
      aria-label="WhatsApp Business Desk Quick Action"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none"
    >
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Zelvori WhatsApp Chat Window"
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 liquid-glass-dock rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl shadow-emerald-950/40 animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Card Header */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              {/* WhatsApp Avatar with verified badge */}
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                {/* Verified green badge */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center text-slate-950 shadow">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-semibold text-white">Zelvori Engineering Desk</h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Business Desk</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Business Phone Badge */}
          <div className="mt-2.5 px-3 py-1.5 bg-slate-900/60 rounded-lg border border-white/5 flex items-center justify-between text-xs text-slate-300">
            <span className="text-slate-400">Official WhatsApp:</span>
            <a
              href={`https://wa.me/${rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-cyan-300 hover:text-cyan-200 font-semibold underline underline-offset-2"
            >
              {formattedPhone}
            </a>
          </div>

          {/* Quick Starter Topics */}
          <div className="mt-3 space-y-1.5">
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              Select inquiry type:
            </p>
            <div className="space-y-1">
              {presetTopics.map((topic, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(topic.msg)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/15 border border-white/5 hover:border-emerald-400/40 text-xs text-slate-200 transition-all flex items-center justify-between group"
                >
                  <span className="truncate">{topic.label}</span>
                  <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Field */}
          <div className="mt-3">
            <label htmlFor="wa-custom-msg" className="sr-only">
              Custom WhatsApp message
            </label>
            <div className="flex items-center gap-2">
              <input
                id="wa-custom-msg"
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your project requirement..."
                className="flex-1 px-3 py-2 bg-slate-950/80 border border-white/10 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400/60 transition-colors"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend(customMessage);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => handleSend(customMessage)}
                aria-label="Send custom message on WhatsApp"
                className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Security & Response Guarantee footer */}
          <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              End-to-End Encrypted
            </span>
            <span>Direct Lead Engineer</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Dock Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Chat with Zelvori Engineering Desk on WhatsApp (+91 91625 30999)"
        data-phone={rawPhone}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full liquid-glass-dock border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'ring-2 ring-emerald-400/50' : ''
        }`}
      >
        {/* Direct static crawler & non-JS fallback */}
        <a
          href={`https://wa.me/${rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
        >
          Chat with Zelvori on WhatsApp +91 9162530999
        </a>
        {/* Pulsing online ambient glow */}
        <span
          className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/20 blur-sm pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shrink-0">
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>

        {/* Text and Status Indicator */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
              WhatsApp Desk
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] text-emerald-400 font-mono hidden sm:inline">
            Direct · +91 91625 30999
          </span>
        </div>
      </button>
    </aside>
  );
}
