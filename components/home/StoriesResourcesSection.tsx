import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Sparkles, Wrench } from 'lucide-react';

export function StoriesResourcesSection() {
  return (
    <section aria-labelledby="stories-resources-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#0b1220] to-cyan-950/35 p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-4 w-4" /> Ideas for people & builders
          </div>
          <h2 id="stories-resources-heading" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Learn what is possible. Find the tools to start.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Explore practical digital transformation scenarios for different professions and businesses, or browse carefully linked developer tools, open-source libraries, animations, and free browser utilities.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <Link href="/stories/" className="group rounded-2xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-cyan-500/50 hover:bg-slate-950">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Stories by industry</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              See how a lawyer, clinic, freelancer, brand, creator or growing company could use websites and software to improve a workflow.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Explore use cases <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href="/resources/" className="group rounded-2xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-cyan-500/50 hover:bg-slate-950">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Free developer resource hub</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Explore AI-assisted coding, UI kits, animation libraries, icons, templates and a free browser-based prompt builder.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Browse free resources <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href="/tools/" className="group rounded-2xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-cyan-500/50 hover:bg-slate-950">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Zelvori Dev Lab</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Free browser tools: SEO snippets, WCAG contrast checking, CSS gradient/shadow generators, JSON formatters and social cards.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Launch free tools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
