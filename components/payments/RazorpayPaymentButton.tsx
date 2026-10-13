import React from 'react';
import Link from 'next/link';

interface RazorpayPaymentButtonProps {
  className?: string;
}

/**
 * Safe fallback for legacy imports.
 *
 * Fixed-amount Razorpay embeds are intentionally not rendered here. Customers
 * must receive a project-specific payment link after their quotation is approved.
 */
export function RazorpayPaymentButton({ className = '' }: RazorpayPaymentButtonProps) {
  return (
    <div
      className={'rounded-2xl border border-amber-500/30 bg-amber-950/30 p-5 text-sm text-slate-200 ' + className}
      role="note"
    >
      <p className="font-semibold text-amber-200">Project-specific payment link required</p>
      <p className="mt-2 leading-relaxed text-slate-300">
        A fixed-amount payment button is not available here. Request a Razorpay
        Payment Link that matches your approved Zelvori quotation.
      </p>
      <Link
        href="/payments/"
        className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
      >
        Request a project advance link
      </Link>
    </div>
  );
}
