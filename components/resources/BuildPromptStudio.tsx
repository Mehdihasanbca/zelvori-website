'use client';

import React, { useMemo, useState } from 'react';
import { Check, Copy, RotateCcw, Sparkles } from 'lucide-react';

const projectTypes = [
  'Business website',
  'Law firm website',
  'Clinic website',
  'Freelancer portfolio',
  'Creator / personal brand',
  'E-commerce store',
  'SaaS / web application',
  'Internal CRM / ERP tool',
  'Education / course portal',
  'Service request portal',
];

const goals = [
  'Explain services clearly and generate enquiries',
  'Make booking or appointment requests easier',
  'Sell products or digital services',
  'Organise internal operations and reporting',
  'Help users discover and use a web application',
  'Build a portfolio and strengthen credibility',
];

const stacks = [
  'Recommend a suitable stack based on requirements',
  'Next.js + React + TypeScript + Tailwind CSS',
  'React + Vite + TypeScript',
  'HTML + CSS + JavaScript (lightweight site)',
  'Flutter (mobile app)',
  'Existing stack — inspect before proposing replacements',
];

const features = [
  'Mobile-first responsive layout',
  'Clear navigation and strong calls to action',
  'Accessibility and keyboard navigation',
  'SEO metadata, sitemap and semantic HTML',
  'Fast loading and optimised assets',
  'Secure authentication and role-based access',
  'Admin dashboard and reporting',
  'Booking, enquiry or lead-management workflow',
  'Payment-provider integration (hosted checkout; no secrets in browser)',
  'API, CRM or third-party integrations',
  'Analytics with privacy-conscious configuration',
  'Documentation, tests and deployment instructions',
];

export function BuildPromptStudio() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [industry, setIndustry] = useState('Professional services');
  const [audience, setAudience] = useState('Potential customers and existing clients');
  const [goal, setGoal] = useState(goals[0]);
  const [stack, setStack] = useState(stacks[0]);
  const [style, setStyle] = useState('Premium, clear, modern and accessible');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    features[0],
    features[1],
    features[2],
    features[3],
    features[4],
  ]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    return [
      'PROJECT BRIEF — generated with Zelvori Build Prompt Studio',
      '',
      'Build type: ' + projectType,
      'Industry / context: ' + (industry.trim() || 'To be confirmed during discovery'),
      'Primary audience: ' + (audience.trim() || 'To be confirmed'),
      'Primary goal: ' + goal,
      'Preferred stack: ' + stack,
      'Visual direction: ' + style,
      '',
      'REQUIREMENTS',
      ...(selectedFeatures.length
        ? selectedFeatures.map((feature) => '- ' + feature)
        : ['- Recommend the minimum feature set that supports the primary goal.']),
      '',
      'WORKING METHOD',
      '- Start by summarising assumptions, user journeys, data needs, edge cases and acceptance criteria.',
      '- Recommend a simple architecture that fits the requirements; explain trade-offs before adding complexity.',
      '- Build reusable, maintainable components with responsive states, loading states, empty states and clear errors.',
      '- Include accessibility, privacy, validation, security and performance in the implementation—not as a final cosmetic pass.',
      '- Use synthetic demo data only. Never invent testimonials, client logos, measured results, certifications or compliance claims.',
      '- Never expose API keys, passwords, payment secrets or private tokens in client-side code.',
      '- For legal, clinical, financial or other regulated workflows, keep professional decisions with qualified people and identify requirements that need specialist review.',
      '- Provide installation steps, environment variable names without actual secret values, testing instructions and deployment notes.',
      '- Before finishing, run lint, build and available tests; list anything not actually verified.',
      '',
      'DELIVERABLES',
      '1. A concise implementation plan and file map.',
      '2. Working responsive UI for the primary user journey.',
      '3. Validation, accessibility and error/empty-state handling.',
      '4. Tests and honest verification results.',
      '5. A short handover explaining assumptions, limitations and next steps.',
      '',
      'Do not claim that a feature, integration, payment or deployment works unless it has been tested and verified.'
    ].join('\n');
  }, [projectType, industry, audience, goal, stack, style, selectedFeatures]);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((current) =>
      current.includes(feature)
        ? current.filter((item) => item !== feature)
        : [...current, feature]
    );
    setCopied(false);
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setProjectType(projectTypes[0]);
    setIndustry('Professional services');
    setAudience('Potential customers and existing clients');
    setGoal(goals[0]);
    setStack(stacks[0]);
    setStyle('Premium, clear, modern and accessible');
    setSelectedFeatures([features[0], features[1], features[2], features[3], features[4]]);
    setCopied(false);
  };

  return (
    <section id="prompt-studio" className="scroll-mt-28 rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/10 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-4 w-4" /> Free browser tool
          </div>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Build Prompt Studio</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Create a structured project brief to paste into your preferred AI coding assistant or share with a developer. It runs in your browser and does not call an AI API.
          </p>
        </div>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label htmlFor="studio-type" className="mb-2 block text-sm font-medium text-slate-200">What are you building?</label>
            <select id="studio-type" value={projectType} onChange={(event) => { setProjectType(event.target.value); setCopied(false); }} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400">
              {projectTypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="studio-industry" className="mb-2 block text-sm font-medium text-slate-200">Industry or context</label>
            <input id="studio-industry" value={industry} onChange={(event) => { setIndustry(event.target.value); setCopied(false); }} maxLength={100} placeholder="e.g. legal services, health clinic, fashion brand" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" />
          </div>
          <div>
            <label htmlFor="studio-audience" className="mb-2 block text-sm font-medium text-slate-200">Who will use it?</label>
            <input id="studio-audience" value={audience} onChange={(event) => { setAudience(event.target.value); setCopied(false); }} maxLength={120} placeholder="e.g. customers, staff, students" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" />
          </div>
          <div>
            <label htmlFor="studio-goal" className="mb-2 block text-sm font-medium text-slate-200">Main goal</label>
            <select id="studio-goal" value={goal} onChange={(event) => { setGoal(event.target.value); setCopied(false); }} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400">
              {goals.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="studio-stack" className="mb-2 block text-sm font-medium text-slate-200">Preferred technology</label>
            <select id="studio-stack" value={stack} onChange={(event) => { setStack(event.target.value); setCopied(false); }} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400">
              {stacks.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="studio-style" className="mb-2 block text-sm font-medium text-slate-200">Visual style</label>
            <select id="studio-style" value={style} onChange={(event) => { setStyle(event.target.value); setCopied(false); }} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400">
              {[
                'Premium, clear, modern and accessible',
                'Minimal, editorial and typography-led',
                'Bold, creative and motion-rich',
                'Professional, calm and trust-focused',
                'Commerce-first and product-led',
                'Data-dense, efficient and keyboard-friendly',
              ].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <fieldset className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <legend className="px-2 text-sm font-semibold text-slate-200">Choose useful requirements</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {features.map((feature) => {
                const checked = selectedFeatures.includes(feature);
                const id = 'studio-feature-' + features.indexOf(feature);
                return (
                  <label key={feature} htmlFor={id} className={'flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 text-xs leading-relaxed transition ' + (checked ? 'border-cyan-500/40 bg-cyan-950/30 text-cyan-100' : 'border-slate-800 text-slate-400 hover:border-slate-600')}>
                    <input id={id} type="checkbox" checked={checked} onChange={() => toggleFeature(feature)} className="mt-0.5 accent-cyan-400" />
                    <span>{feature}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4 text-xs leading-relaxed text-amber-100/80">
            <strong className="text-amber-200">Privacy reminder:</strong> Do not enter real patient, legal-case, customer, or employee personal data here. The text is generated from your selections in this page; only copy the brief to a tool you trust.
          </div>
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="studio-output" className="mb-2 block text-sm font-semibold text-slate-200">Your project prompt</label>
        <textarea id="studio-output" readOnly value={prompt} rows={15} className="w-full rounded-2xl border border-slate-700 bg-[#050812] p-4 font-mono text-xs leading-relaxed text-slate-300 outline-none focus:border-cyan-400" />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button type="button" onClick={copyPrompt} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied prompt' : 'Copy full prompt'}
          </button>
          <p aria-live="polite" className="text-xs text-slate-400">
            {copied ? 'Ready to paste into your chosen AI coding tool.' : 'Free to use. No login, API key or server request required for generation.'}
          </p>
        </div>
      </div>
    </section>
  );
}
