'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Stethoscope,
  Scale,
  Briefcase,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Video,
  GraduationCap,
  Truck,
  X,
} from 'lucide-react';
import { SOLUTIONS_DATA, type SolutionBlueprint } from '@/lib/solutions-data';

// Map slug to Lucide icon component
const SLUG_ICON_MAP: Record<string, React.ElementType> = {
  healthcare: Stethoscope,
  legal: Scale,
  'business-operations': Briefcase,
  marketplace: Store,
  'food-delivery': UtensilsCrossed,
  ecommerce: ShoppingBag,
  creators: Video,
  education: GraduationCap,
  logistics: Truck,
};

const CATEGORIES = [
  { id: 'all', label: 'All Blueprints (9)' },
  { id: 'Healthcare', label: 'Healthcare & Clinics' },
  { id: 'Legal', label: 'Legal & Practice' },
  { id: 'Enterprise Operations', label: 'Enterprise Operations' },
  { id: 'Commerce & Marketplaces', label: 'Commerce & Marketplaces' },
  { id: 'Services & Delivery', label: 'Services & Logistics' },
  { id: 'Media & Education', label: 'Media & Education' },
] as const;

export function SolutionsFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSolutions = useMemo(() => {
    return SOLUTIONS_DATA.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.shortTitle.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.operationalProblem.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.coreModules.some((mod) => mod.toLowerCase().includes(q)) ||
        item.targetPersonas.some((p) => p.role.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-8">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'bg-slate-950/60 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blueprints, modules, workflows..."
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-slate-200">{filteredSolutions.length}</strong> of{' '}
          <strong className="text-slate-200">{SOLUTIONS_DATA.length}</strong> industry architecture blueprints
        </span>
        {searchQuery && (
          <span>
            Filtered by: &ldquo;<span className="text-cyan-400">{searchQuery}</span>&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Solution Blueprint Cards */}
      {filteredSolutions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((blueprint) => {
            const Icon = SLUG_ICON_MAP[blueprint.slug] || Briefcase;
            const mvpTimeline = blueprint.roadmap[0]?.timeframeNote || '6–8 Weeks';

            return (
              <div
                key={blueprint.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Top Header & Tagline */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                        {blueprint.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                        <Clock className="w-3 h-3 text-slate-400" />
                        MVP: {mvpTimeline}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {blueprint.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {blueprint.tagline}
                    </p>
                  </div>

                  {/* Core Problem Callout */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                      Operational Bottleneck:
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {blueprint.operationalProblem}
                    </p>
                  </div>

                  {/* Target Personas */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Personas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {blueprint.targetPersonas.slice(0, 3).map((p) => (
                        <span
                          key={p.role}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                        >
                          {p.role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Modules */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Core Engine Modules:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {blueprint.coreModules.slice(0, 4).map((mod) => (
                        <span
                          key={mod}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0 mt-2 border-t border-slate-800/60 pt-4 bg-slate-950/40 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-slate-300 font-medium">
                      {blueprint.mainUseCases.length}
                    </span>{' '}
                    Production Workflows
                  </div>

                  <Link
                    href={`/solutions/${blueprint.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-slate-200">No matching blueprints found</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              We couldn&apos;t find an industry architecture matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset your filter.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors"
          >
            Clear Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
