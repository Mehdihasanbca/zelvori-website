import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Project Advance Payments',
  description:
    'Request a project-specific Zelvori Razorpay Payment Link after your quotation and advance amount have been approved.',
  alternates: {
    canonical: 'https://zelvori.software/payments/',
  },
};

const requestSubject = 'Zelvori project advance payment link request';
const requestBody = [
  'Hello Zelvori Team,',
  '',
  'Please issue a project-specific Razorpay Payment Link for my approved quotation.',
  '',
  'Customer / company name:',
  'Quotation or SOW reference:',
  'Project name:',
  'Agreed advance amount (INR):',
  'Customer contact email / phone:',
  '',
  'Please ensure the payment link amount matches the agreed quotation.',
].join('\n');

export default function PaymentsPage() {
  const requestHref =
    'mailto:' +
    siteConfig.contact.email +
    '?subject=' +
    encodeURIComponent(requestSubject) +
    '&body=' +
    encodeURIComponent(requestBody);

  return (
    <main className="py-12 sm:py-16 lg:py-24 space-y-14 lg:space-y-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-1.5 text-xs font-mono tracking-wide text-cyan-300">
          <ShieldCheck className="h-4 w-4" />
          <span>Quotation-Based Project Payments</span>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Project Advance
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Payment Requests
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Every Zelvori engagement has its own approved scope and payment milestones.
          Request a dedicated Razorpay Payment Link for the amount agreed in your
          quotation. This page does not collect money through a fixed-amount button.
        </p>
        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <a
            href={requestHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition-colors hover:bg-cyan-300"
          >
            <Mail className="h-4 w-4" />
            Request Project Advance Link
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/pricing/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            Review Services & Pricing
          </Link>
        </div>
        <p className="text-xs text-slate-400">
          Contact: <a className="text-cyan-300 underline underline-offset-4" href={'mailto:' + siteConfig.contact.email}>{siteConfig.contact.email}</a>
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <article className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold text-white">1. Approve the quotation</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Confirm the deliverables, project reference, total price, and payment
            milestone in writing before requesting an advance.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
            <Wallet className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold text-white">2. Receive your own link</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Zelvori will prepare or share a customer-specific Razorpay Payment Link
            for the agreed amount and quotation reference.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold text-white">3. Verify before kickoff</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Check the merchant name and amount before paying. Zelvori verifies payment
            status in its Razorpay Dashboard before marking the advance as received.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <LockKeyhole className="h-4 w-4" />
              Project-specific links only
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              No one-size-fits-all advance amount
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              The advance may differ by project. The ₹11,970 payment button shown in
              the merchant dashboard is a fixed-amount button and must not be treated
              as the universal checkout for every customer. Use a separate Live Mode
              Payment Link for each approved quote and its agreed amount.
            </p>
            <a
              href={requestHref}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-950/50"
            >
              Request the correct payment link
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <aside className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-200">
              <AlertTriangle className="h-4 w-4" />
              Before you pay
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
              <li>• The merchant name should identify Zelvori.</li>
              <li>• The amount and reference must match your approved quotation.</li>
              <li>• Do not pay an unexpected or mismatched amount; contact Zelvori first.</li>
              <li>• A browser redirect or screenshot alone is not proof of settlement. Payment status must be verified in the merchant dashboard.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Need to arrange your project advance?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Email the approved quotation reference and agreed advance amount. Do not
          include card numbers, UPI PINs, passwords, or other payment credentials.
        </p>
        <a
          href={requestHref}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          <Mail className="h-4 w-4" />
          Email Zelvori
        </a>
      </section>
    </main>
  );
}
