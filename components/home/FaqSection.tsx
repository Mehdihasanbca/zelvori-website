'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Clear answers about working with Zelvori.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Have questions about technology stacks, IP agreements, or delivery methodology? Here is how we operate.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`liquid-glass-card rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-cyan-500/50 shadow-lg shadow-cyan-950/20' : 'hover:border-slate-700'
                }`}
              >
                <h3 className="m-0 p-0 text-left font-normal">
                  <button
                    id={`homepage-faq-btn-${index}`}
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-expanded={isOpen}
                    aria-controls={`homepage-faq-panel-${index}`}
                  >
                    <span className="text-sm sm:text-base font-semibold leading-relaxed">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 border-cyan-500/40 text-cyan-300' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`homepage-faq-panel-${index}`}
                    aria-labelledby={`homepage-faq-btn-${index}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
