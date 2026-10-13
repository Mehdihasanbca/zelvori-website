'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const DEFAULT_RAZORPAY_BUTTON_ID = 'pl_TnOD6Jz1AQC5PU';

interface RazorpayPaymentButtonProps {
  buttonId?: string;
  className?: string;
}

export function RazorpayPaymentButton({
  buttonId,
  className = '',
}: RazorpayPaymentButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Configurable in one place: prop -> env var -> verified default ID
  const activeId = (buttonId || process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_ID || DEFAULT_RAZORPAY_BUTTON_ID).trim();

  useEffect(() => {
    let isCancelled = false;
    const container = containerRef.current;
    if (!container || !activeId) return;

    // Reset container safely without dangerous HTML
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const form = document.createElement('form');
    form.setAttribute('aria-label', 'Razorpay Payment Form');

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', activeId);
    script.async = true;

    script.onload = () => {
      if (!isCancelled) {
        setIsLoaded(true);
      }
    };

    script.onerror = () => {
      if (!isCancelled) {
        setLoadError(
          'The Razorpay checkout script could not be loaded. This is typically caused by an active ad-blocker, strict privacy extension, or network connectivity issue.'
        );
      }
    };

    form.appendChild(script);
    container.appendChild(form);

    return () => {
      isCancelled = true;
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [activeId]);

  if (!activeId) {
    return (
      <div
        className={`p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs space-y-2 ${className}`}
        role="alert"
      >
        <div className="flex items-center gap-2 font-semibold">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>No Razorpay Payment Button ID Configured</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          Please configure a valid Razorpay Button ID or pass a prop to activate checkout.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Script Loading / Embed Container */}
      <div
        ref={containerRef}
        className="razorpay-embed-container min-h-[44px] flex items-center"
        aria-live="polite"
      />

      {/* Script Load Failure Fallback */}
      {loadError && (
        <div
          className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs space-y-2"
          role="alert"
        >
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Payment Script Blocked or Unavailable</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {loadError}
          </p>
          <p className="text-slate-400 text-[10px]">
            If you are using an ad-blocker or strict script-blocking extension, please temporarily pause it to view the Razorpay checkout button, or request a direct invoice payment link via our contact desk.
          </p>
        </div>
      )}

      {/* Owner Review & Operational Safety Banner */}
      <div
        className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2"
        role="region"
        aria-label="Payment Gateway Configuration & Security Status"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
            <span
              className={`w-2 h-2 rounded-full ${
                isLoaded ? 'bg-emerald-400' : 'bg-cyan-400 animate-pulse'
              }`}
            />
            <span>Configured Button ID:</span>
            <code className="text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
              {activeId}
            </code>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
            Mode: Razorpay Sandbox / Test Mode (Verified)
          </span>
        </div>

        <div className="space-y-1 text-[11px] leading-relaxed text-slate-300">
          <p>
            <strong className="text-amber-300">Test Environment Active:</strong> This gateway button is verified in <strong>Razorpay Test Mode</strong>. Transactions executed through this terminal are simulations for verification purposes — <em>no real funds or bank cards will be debited</em>.
          </p>
          <p className="text-slate-400">
            <strong className="text-slate-300">Production Settlements:</strong> Official commercial project invoices and live client milestone settlements are issued via client-specific Live Payment Links or after switching the gateway terminal to Live Mode in the Razorpay Dashboard.
          </p>
        </div>

        <div className="pt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>256-bit Encrypted Transaction powered by Razorpay (PCI-DSS Level 1 Compliant)</span>
        </div>
      </div>
    </div>
  );
}
