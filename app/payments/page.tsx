import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CreditCard,
  FileCheck2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Lock,
  Building2,
  Clock,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Receipt,
  AlertCircle,
} from 'lucide-react';
import { RazorpayPaymentButton, DEFAULT_RAZORPAY_BUTTON_ID } from '@/components/payments/RazorpayPaymentButton';

export const metadata: Metadata = {
  title: 'Payment Verification & Secure Settlements',
  description:
    'Zelvori client payment guidance. Official Razorpay Payment integration, quotation verification, milestone settlements, and secure payment procedures.',
  alternates: {
    canonical: 'https://zelvori.software/payments/',
  },
};

export default function PaymentsPage() {
  return (
    <div className="py-12 lg:py-24 space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified Commercial Settlements</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
          Secure Client Payments &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Invoice Settlement Information
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Zelvori processes client milestone settlements through RBI-regulated payment infrastructure. Learn how project quotations, milestone invoices, and official Razorpay Payment integrations are issued and verified.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-950/50 flex items-center gap-2"
          >
            <span>Request an Itemized Quotation / Link</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="#settlement-desk"
            className="px-6 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
          >
            Access Payment Gateway Section
          </a>
        </div>
      </section>

      {/* Critical Verification Guardrails */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Quotation Match Required</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Payments are accepted exclusively against an agreed written quotation or formal Statement of Work (SOW). Never initiate funds transfer without a validated SOW reference.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Dedicated Client Links</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Custom project amounts are issued via client-specific Razorpay Payment Links (<code className="text-cyan-300">https://rzp.io/l/...</code>). Links display your exact company name, invoice ID, and milestone description.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Verified Settlements</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              All transactions generate immediate Razorpay digital tax receipts. Milestone completion and code repository transfers are confirmed directly upon settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Process Detailed Walkthrough */}
      <section id="payment-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Operational Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            The 4-Step Milestone Settlement Process
          </h2>
          <p className="text-sm text-slate-400">
            How Zelvori coordinates transparent milestone invoicing with zero hidden surcharges or surprise fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-cyan-400/80 font-mono">01</span>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                  Sprint Kickoff
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Scope &amp; SOW Agreement</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We agree on deliverables, screens, modules, and schedule. You receive an itemized Statement of Work with exact milestone payment stages (e.g. 50% deposit, 50% launch).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-cyan-400/80 font-mono">02</span>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                  Invoice Issuance
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Secure Link Generation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zelvori generates an official Razorpay Payment Link or Tax Invoice referencing your specific quotation number, issued from our verified merchant dashboard.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-cyan-400/80 font-mono">03</span>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                  Client Settlement
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Payment Verification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You pay securely through official Razorpay checkout using UPI (GPay, PhonePe, Paytm), NetBanking, Corporate Cards, or NEFT/RTGS with instant receipt generation.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-cyan-400/80 font-mono">04</span>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                  Final Handover
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">IP &amp; Repository Transfer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upon milestone settlement, source code repositories, cloud configurations, schemas, and 30-day warranty support are transferred to your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Razorpay Payment Section */}
      <section id="settlement-desk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Payment Section
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Official Razorpay Payment Gateway Integration
          </h2>
          <p className="text-sm text-slate-400">
            Secure client payment settlement portal utilizing the official Razorpay Payment Button integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Payment Embed Container */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Online Payment Terminal</h3>
                  <p className="text-xs text-slate-400">Encrypted Gateway Checkout</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Razorpay v1 API
              </span>
            </div>

            {/* Embedded Component */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                <span>Payment Form Embed:</span>
                <span className="text-[11px] font-mono text-cyan-400">ID: {DEFAULT_RAZORPAY_BUTTON_ID}</span>
              </div>
              
              <RazorpayPaymentButton buttonId={DEFAULT_RAZORPAY_BUTTON_ID} />
            </div>

            {/* Crucial Instructions */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-[11px] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Important Client Payment Instructions</span>
              </div>
              <ul className="space-y-2 text-slate-300 text-[12px] leading-relaxed list-disc list-inside">
                <li>
                  <strong>Pay only against an approved quotation or invoice:</strong> Do not complete this payment unless you have received and agreed to a written quotation, SOW, or retainer schedule from Zelvori.
                </li>
                <li>
                  <strong>Verify reference &amp; amount before paying:</strong> If the payment amount, quotation reference, or invoice ID does not match your agreed scope, <em>do not make the payment</em>. Contact our desk immediately.
                </li>
                <li>
                  <strong>Retain your receipt and payment ID:</strong> Upon successful transaction, Razorpay will issue an instant Payment ID (<code className="text-cyan-300">pay_xxxxxxxxxxxx</code>). Please retain the confirmation email or PDF receipt for accounting and project onboarding.
                </li>
              </ul>
            </div>
          </div>

          {/* Operational Safety & Verification Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Payment Mode &amp; Safety Notice</span>
              </div>
              
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  <strong>Mode Status:</strong> This button (<code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">{DEFAULT_RAZORPAY_BUTTON_ID}</code>) is confirmed in <strong>Razorpay Test / Sandbox Mode</strong>. You can safely test the checkout flow using Razorpay test credentials without debiting actual bank funds.
                </p>
                <p>
                  <strong>Live Invoices &amp; Settlements:</strong> Real commercial client projects and milestone deposits are processed via client-specific Live Payment Links (<code className="text-cyan-300">https://rzp.io/l/...</code>) issued directly to authorized client contacts, or via a Live Mode button once enabled.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Dedicated Invoice Link</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Receipt className="w-4 h-4 text-emerald-400" />
                <span>GST &amp; Tax Invoicing</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Indian businesses requiring input tax credit (ITC) must supply their GSTIN and registered trade legal name during quotation signoff to receive compliant GST tax invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Security Disclosures & FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Security &amp; Fraud Prevention
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Payment Security Rules &amp; Verification
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>How do I verify a payment link is genuine?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official Razorpay links always originate from the verified domain <code className="text-cyan-300">https://rzp.io/l/...</code> or <code className="text-cyan-300">https://pages.razorpay.com/...</code>. The merchant name will clearly state <strong>Zelvori</strong> and the description will match your approved quotation or SOW reference number.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Are credit cards or bank details stored by Zelvori?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No. Zelvori operates a static architecture and never collects, handles, or stores raw payment credentials. All transactions are processed under Razorpay&apos;s PCI-DSS Level 1 certified vault with end-to-end encryption.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>What payment methods are supported?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Domestic India clients can pay via UPI (Google Pay, PhonePe, Paytm, BHIM), NetBanking across 50+ banks, Debit/Credit Cards (Visa, Mastercard, RuPay), and NEFT/RTGS virtual bank transfers. International clients are invoiced via bespoke wire transfer agreements or international card gateways.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>How is payment confirmation acknowledged?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Razorpay sends automated instant email and SMS receipts. In addition, our engineering lead issues a written acknowledgment within 1 business day confirming milestone activation and the repository staging branch URL.
            </p>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Settle a Project Milestone?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Contact our engineering desk with your invoice or quotation reference to receive your client-specific secure payment link.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-950/50"
            >
              Request Payment Link via Desk
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors"
            >
              Review Engineering Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
