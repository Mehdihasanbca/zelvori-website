'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Landmark,
  HeartPulse,
  BriefcaseBusiness,
  PenTool,
  Building2,
  ShoppingBag,
  Palette,
  School,
  Users,
  Filter,
} from 'lucide-react';

export interface StoryItem {
  number: string;
  iconName: string;
  sector: string;
  category: string;
  title: string;
  person: string;
  challenge: string;
  story: string;
  zelvori: string;
  outcome: string;
  services: string[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  HeartPulse,
  BriefcaseBusiness,
  PenTool,
  Building2,
  ShoppingBag,
  Palette,
  School,
  Users,
};

interface StoriesFilterGridProps {
  stories: StoryItem[];
}

const categories = [
  'All Industries',
  'Legal practices',
  'Healthcare & clinics',
  'Freelancers & solo experts',
  'Growing companies',
  'Independent brands & e-commerce',
  'Creators & personal brands',
  'Educators & training providers',
  'Service teams & organisations',
];

export function StoriesFilterGrid({ stories }: StoriesFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Industries');

  const filteredStories = selectedCategory === 'All Industries'
    ? stories
    : stories.filter((s) => s.category === selectedCategory || s.sector === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
              <Filter className="h-3.5 w-3.5" />
              <span>Explore Scenarios by Sector</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Showing {filteredStories.length} of {stories.length} scenarios
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? 'bg-cyan-400 text-slate-950 font-semibold shadow-md shadow-cyan-950/40'
                      : 'border border-slate-800 bg-slate-950/70 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                  aria-pressed={active}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {filteredStories.map((story) => {
          const Icon = iconMap[story.iconName] || Landmark;
          return (
            <article
              key={story.number}
              id={`story-${story.number}`}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/90"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-slate-500">{story.number}</span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {story.sector}
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug text-white">
                {story.title}
              </h2>
              <p className="mt-3 text-xs font-medium text-slate-400">{story.person}</p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    The challenge
                  </h3>
                  <p className="mt-1.5 text-slate-400">{story.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    The story
                  </h3>
                  <p className="mt-1.5 text-slate-400">{story.story}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    How Zelvori can help
                  </h3>
                  <p className="mt-1.5 text-slate-300">{story.zelvori}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    Potential direction
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {story.outcome}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {story.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Map my use case <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
