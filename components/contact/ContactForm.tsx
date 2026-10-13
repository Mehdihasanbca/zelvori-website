'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { Mail, Send, Copy, Check, Info } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: siteConfig.services[0].title,
    timeline: 'Within 1-2 months',
    budget: 'Flexible / To be estimated',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (validationError) setValidationError('');
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.service} — ${formData.company || formData.name}`
    );
    const bodyContent = `Hello Zelvori Team,

I would like to discuss a project engagement with the following details:

--- CLIENT INFORMATION ---
Name: ${formData.name}
Email: ${formData.email}
Company / Organization: ${formData.company || 'N/A'}

--- PROJECT SPECIFICATIONS ---
Service Requested: ${formData.service}
Target Timeline: ${formData.timeline}
Scope / Budget Range: ${formData.budget}

--- PROJECT OVERVIEW ---
${formData.message}

Thank you,
${formData.name}
`;
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
  };

  const getFormattedSummary = () => {
    return `Project Inquiry for Zelvori (${siteConfig.contact.email})
Client Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Service: ${formData.service}
Timeline: ${formData.timeline}
Scope: ${formData.budget}

Project Overview:
${formData.message}`;
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill in your name, email, and a brief description of your project.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    setValidationError('');
    setSubmitted(true);

    const mailtoUrl = generateMailtoUrl();
    window.location.href = mailtoUrl;
  };

  const handleCopySummary = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please provide your name, email, and project overview before copying.');
      return;
    }

    try {
      await navigator.clipboard.writeText(getFormattedSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative top ambient light */}
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/05 blur-2xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Interactive Inquiry Builder</span>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Project Specification Form
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
          Specify your product requirements below. This tool prepares a structured project brief formatted for immediate review by our senior engineering leads.
        </p>
      </div>

      {validationError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-800 text-xs text-red-200">
          {validationError}
        </div>
      )}

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-cyan-950/60 border border-cyan-800 text-xs space-y-2">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
            <Check className="w-4 h-4 text-cyan-400" />
            <span>Email Client Dispatched</span>
          </div>
          <p className="text-slate-300">
            Your email client has opened with your pre-formatted project specifications. If it didn&apos;t open automatically, you can copy the summary below and email it directly to{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 underline font-semibold">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      )}

      <form onSubmit={handleLaunchEmail} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-2">
              Your Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Chen"
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-2">
              Work Email <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@company.com"
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-slate-300 mb-2">
              Company / Venture Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Technologies"
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-medium text-slate-300 mb-2">
              Core Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            >
              {siteConfig.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.shortTitle}
                </option>
              ))}
              <option value="Multi-Service / Custom Platform">
                Multi-Service / Custom Platform
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="timeline" className="block text-xs font-medium text-slate-300 mb-2">
              Target Delivery Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            >
              <option value="Urgent (1-4 weeks)">Urgent (1-4 weeks)</option>
              <option value="Within 1-2 months">Within 1-2 months</option>
              <option value="Within 3-6 months">Within 3-6 months</option>
              <option value="Flexible / Discovery Phase">Flexible / Discovery Phase</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-medium text-slate-300 mb-2">
              Engagement Model
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            >
              <option value="Fixed Milestone Project">Fixed Milestone Project</option>
              <option value="Dedicated Engineering Squad (Monthly Retainer)">Dedicated Engineering Squad (Monthly Retainer)</option>
              <option value="Technical Advisory & Architecture Audit">Technical Advisory & Architecture Audit</option>
              <option value="Flexible / To be estimated">Flexible / To be estimated</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-2">
            Project Overview & Goals <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your technical objectives: What are you building? Who will use it? Any required integrations or performance constraints?"
            className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-md transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Send className="w-4 h-4" />
            <span>Launch Email Client</span>
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Brief Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Formatted Brief</span>
              </>
            )}
          </button>
        </div>

        {/* Honest Static Disclosure */}
        <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            Delivered directly to <strong className="text-slate-200">{siteConfig.contact.email}</strong>. No middleman databases or third-party CRM trackers.
          </span>
        </div>
      </form>
    </div>
  );
}
