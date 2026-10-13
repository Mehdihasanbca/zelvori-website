import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  Compass,
  Cpu,
  ExternalLink,
  Image,
  Layers3,
  Paintbrush,
  Sparkles,
  WandSparkles,
  Zap,
} from 'lucide-react';
import { BuildPromptStudio } from '@/components/resources/BuildPromptStudio';

export const metadata: Metadata = {
  title: 'Free Developer Resources, AI Tools & Animation Libraries',
  description:
    'Explore developer-friendly open-source libraries, AI coding tools, UI components, animations, icons, fonts, design assets, learning guides and app templates curated by Zelvori.',
  alternates: {
    canonical: 'https://zelvori.software/resources/',
  },
  openGraph: {
    title: 'Free Developer Resources, AI Tools & Animation Libraries | Zelvori',
    description:
      'Explore developer-friendly open-source libraries, AI coding tools, UI components, animations, icons, fonts, design assets, learning guides and app templates curated by Zelvori.',
    url: 'https://zelvori.software/resources/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Free Developer Resources & Build Prompt Studio — Zelvori',
        type: 'image/png',
      },
    ],
  },
};

type Resource = {
  name: string;
  url: string;
  label: string;
  description: string;
  note?: string;
};

const groups: { title: string; description: string; icon: React.ComponentType<{ className?: string }>; items: Resource[] }[] = [
  {
    title: 'AI coding & idea-to-app tools',
    description: 'Move from a rough idea to a useful prototype. Some are open source; hosted builders may have quotas or paid plans.',
    icon: Cpu,
    items: [
      { name: 'Continue', url: 'https://www.continue.dev/', label: 'Open-source AI coding assistant', description: 'AI assistance inside developer workflows, with configurable models and tools.', note: 'Model/API costs and local setup depend on the configuration you choose.' },
      { name: 'Ollama', url: 'https://ollama.com/', label: 'Run models locally', description: 'Run supported open models on your own computer and connect compatible developer tools.', note: 'Hardware requirements and each model’s licence vary.' },
      { name: 'Hugging Face Spaces', url: 'https://huggingface.co/spaces', label: 'AI demos & community apps', description: 'Explore and publish machine-learning demos, inspect public projects, and learn from examples.', note: 'Static Spaces are free; compute-backed options can have limits or charges.' },
      { name: 'Bolt.new', url: 'https://bolt.new/', label: 'Hosted AI app builder · free tier', description: 'Prototype websites and web apps from natural-language instructions in a browser.', note: 'Hosted service; free-plan limits and terms can change. Not an open-source project.' },
      { name: 'v0 by Vercel', url: 'https://v0.dev/', label: 'AI-assisted UI prototyping', description: 'Explore generated interface concepts and frontend code for web product ideas.', note: 'Hosted service; check current usage, export and plan conditions.' },
    ],
  },
  {
    title: 'UI components & design systems',
    description: 'Reusable building blocks help teams build consistent interfaces instead of starting every component from scratch.',
    icon: Layers3,
    items: [
      { name: 'shadcn/ui', url: 'https://ui.shadcn.com/', label: 'Copy-and-customise components', description: 'Accessible, editable React components and patterns that developers can bring into their own codebase.', note: 'Review the licence of the code and any community registry item you use.' },
      { name: 'Radix Primitives', url: 'https://www.radix-ui.com/primitives', label: 'Open-source accessible primitives', description: 'Unstyled React primitives for common interface patterns, including dialogs, menus and tabs.' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', label: 'Utility-first styling', description: 'Documentation and examples for building responsive interfaces with utility classes.' },
      { name: 'Aceternity UI', url: 'https://ui.aceternity.com/components', label: 'Free + premium UI components', description: 'Copy-paste React and Next.js interface patterns, visual effects and animated sections.', note: 'Some content is premium; check the terms for the specific component.' },
    ],
  },
  {
    title: 'Animation & motion libraries',
    description: 'Make interfaces feel responsive and polished. Prefer motion that supports the task and respects reduced-motion preferences.',
    icon: WandSparkles,
    items: [
      { name: 'Motion for React', url: 'https://motion.dev/docs/react', label: 'React animation library', description: 'Build transitions, gestures, scroll effects and interactive UI motion with a React-friendly API.' },
      { name: 'React Bits', url: 'https://reactbits.dev/', label: 'Free animated React components', description: 'Explore source-based text animations, backgrounds, visual components and micro-interactions.', note: 'Check each library’s current licence and compatibility before shipping.' },
      { name: 'LottieFiles', url: 'https://lottiefiles.com/', label: 'Animation assets & players', description: 'Find animation assets and tooling for adding lightweight motion to web experiences.', note: 'Asset licences vary; verify permission for your intended commercial use.' },
      { name: 'Rive', url: 'https://rive.app/', label: 'Interactive animation tooling', description: 'Design and deploy interactive animations for interfaces, onboarding and product experiences.', note: 'Features, export options and plans depend on the current Rive offering.' },
    ],
  },
  {
    title: 'Icons, fonts, imagery & design inspiration',
    description: 'Create a coherent visual system with assets whose licences match the project and intended use.',
    icon: Paintbrush,
    items: [
      { name: 'Lucide', url: 'https://lucide.dev/', label: 'Open-source icon library', description: 'Consistent, lightweight icons for product interfaces and websites.' },
      { name: 'Heroicons', url: 'https://heroicons.com/', label: 'MIT-licensed icon set', description: 'A clean icon family designed for interfaces and maintained by Tailwind Labs.' },
      { name: 'Iconify', url: 'https://iconify.design/', label: 'Many open icon sets', description: 'Browse and use icons from a wide range of different icon collections.', note: 'Each icon set has its own licence; do not assume all sets share one licence.' },
      { name: 'Google Fonts', url: 'https://fonts.google.com/', label: 'Open-source font catalogue', description: 'Discover web fonts and review the licence details provided for each family.' },
      { name: 'Unsplash licence', url: 'https://unsplash.com/license', label: 'Free photo licence details', description: 'Read the official rules for using Unsplash photos in personal and commercial work.' },
      { name: 'Pexels licence', url: 'https://www.pexels.com/license/', label: 'Free photo & video licence', description: 'Check allowed use and restrictions before adding photo or video assets to a project.' },
      { name: 'Figma Community', url: 'https://www.figma.com/community/', label: 'UI kits, files & plugins', description: 'Discover design resources, wireframes, templates, plugins and work shared by the community.', note: 'Resource pricing and licences vary by creator and file.' },
    ],
  },
  {
    title: 'Templates, learning & app foundations',
    description: 'Start from established documentation and starter kits, then adapt them to the real requirements of your product.',
    icon: BookOpen,
    items: [
      { name: 'Next.js documentation', url: 'https://nextjs.org/docs/app/getting-started', label: 'Official app framework guide', description: 'Learn routing, layouts, data handling and the foundations of modern Next.js applications.' },
      { name: 'Vercel Next.js templates', url: 'https://vercel.com/templates/next.js', label: 'Website & app starters', description: 'Explore starter projects for sites, dashboards, SaaS products and integrations.' },
      { name: 'Supabase templates', url: 'https://vercel.com/templates/supabase', label: 'Backend-enabled examples', description: 'Find sample projects for authentication, databases and common full-stack patterns.', note: 'A hosted backend may require account setup and has plan-specific limits.' },
      { name: 'MDN Learn Web Development', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development', label: 'Free web learning resource', description: 'Structured learning for HTML, CSS, JavaScript and modern web fundamentals.' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/', label: 'Free coding curriculum', description: 'Practise web development and software concepts with guided lessons and projects.' },
      { name: 'Supabase documentation', url: 'https://supabase.com/docs', label: 'Database, auth & storage docs', description: 'Learn how to connect application data, authentication and file storage to a product.' },
    ],
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-500/40 hover:bg-slate-950">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-[10px] font-semibold text-cyan-200">{resource.label}</span>
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-500" />
      </div>
      <h3 className="mt-4 text-base font-bold text-white">{resource.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{resource.description}</p>
      {resource.note && <p className="mt-3 text-xs leading-relaxed text-amber-100/70">{resource.note}</p>}
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 underline-offset-4 hover:text-cyan-200 hover:underline">
        Visit official resource <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-24">
      <section className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1.5 text-xs font-mono text-cyan-300">
          <Code2 className="h-4 w-4" /> Developer resource hub
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build smarter.
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Start with useful resources.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A curated starting point for founders, freelance developers, designers and product teams: AI-assisted coding, open-source UI libraries, animations, free learning, design assets and starter templates—all in one place.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-400">
          Zelvori does not own or endorse every listed service. Plans, availability, permissions and licences can change; always review the official terms before using a resource in client or commercial work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#prompt-studio" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <Sparkles className="h-4 w-4" /> Use free Build Prompt Studio
          </a>
          <Link href="/tools/" className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-900/50 hover:text-cyan-200">
            <Zap className="h-4 w-4" /> Open Free Dev Lab (Tools)
          </Link>
          <Link href="/stories/" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500/40">
            Read industry stories <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-7xl space-y-14 px-4 sm:px-6 lg:mt-16 lg:space-y-20 lg:px-8">
        <BuildPromptStudio />
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <section key={group.title} id={'resource-group-' + index} className="scroll-mt-28">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    <Icon className="h-4 w-4" /> Resource category {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{group.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{group.description}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-500">{group.items.length} curated links</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((resource) => <ResourceCard key={resource.name} resource={resource} />)}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:mt-24 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">From free resources to a product people can use</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                Free tools are a strong starting point. When the project needs custom workflows, reliable integrations, thoughtful UX, security review, testing, or a supported launch plan, Zelvori can help scope the next step around your requirements.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/previews/" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-500/40">Explore interactive previews <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Discuss a build <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
