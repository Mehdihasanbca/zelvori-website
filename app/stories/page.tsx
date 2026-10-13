import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { StoriesFilterGrid } from '@/components/stories/StoriesFilterGrid';

export const metadata: Metadata = {
  title: 'Digital Transformation Stories by Industry',
  description:
    'Explore illustrative digital transformation stories for legal practices, clinics, freelancers, growing companies, brands, creators, educators, and service teams.',
  alternates: {
    canonical: 'https://zelvori.software/stories/',
  },
  openGraph: {
    title: 'Digital Transformation Stories by Industry | Zelvori',
    description:
      'Explore illustrative digital transformation stories for legal practices, clinics, freelancers, growing companies, brands, creators, educators, and service teams.',
    url: 'https://zelvori.software/stories/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Digital Transformation Stories by Industry — Zelvori',
        type: 'image/png',
      },
    ],
  },
};

const stories = [
  {
    number: '01',
    iconName: 'Landmark',
    sector: 'Legal practices',
    category: 'Legal practices',
    title: 'Less time chasing documents. More time preparing the work.',
    person: 'A small law practice with a growing client list',
    challenge:
      'Client enquiries arrive by phone and email. Documents sit in different folders, appointment changes are easy to miss, and staff repeatedly ask for the same information.',
    story:
      'Imagine a lawyer ending a long day with unanswered enquiries and a pile of follow-ups still to organise. The problem is not a lack of legal skill; it is a process that has outgrown its tools.',
    zelvori:
      'Zelvori can scope a professional website with a secure enquiry form, consultation scheduling, matter-intake checklist, document-status tracking, reminders, and a staff dashboard. Access rules and retention requirements are designed with the practice before sensitive records are introduced.',
    outcome:
      'A clearer enquiry journey, more organised administration, and a more professional first impression—without claiming to automate legal judgment.',
    services: ['Web development', 'Custom business software', 'Workflow automation'],
  },
  {
    number: '02',
    iconName: 'HeartPulse',
    sector: 'Doctors & clinics',
    category: 'Healthcare & clinics',
    title: 'A smoother patient journey starts before the appointment.',
    person: 'A clinic coordinating appointments and follow-ups',
    challenge:
      'Patients call to ask about availability, reception staff manage changes manually, and follow-up instructions can become hard to track across disconnected tools.',
    story:
      'A busy clinic may have an excellent care team but still put patients through a confusing booking and reminder experience. Small administrative bottlenecks build up through the day.',
    zelvori:
      'Zelvori can design a clinic website with appointment requests, service and doctor information, reminder workflows, FAQs, and a role-based operations dashboard. Any patient-record, clinical, or payment integration is scoped separately with appropriate security and regulatory review.',
    outcome:
      'A more understandable path from finding the clinic to requesting an appointment, with less repetitive admin work where automation is appropriate.',
    services: ['Web development', 'Integrations', 'Application security'],
  },
  {
    number: '03',
    iconName: 'BriefcaseBusiness',
    sector: 'Freelancers & consultants',
    category: 'Freelancers & solo experts',
    title: 'Turn scattered enquiries into a professional client journey.',
    person: 'An independent consultant balancing delivery and sales',
    challenge:
      'Potential clients see work through social media, ask for prices in messages, and then wait while the freelancer prepares proposals, books calls, and follows up.',
    story:
      'The freelancer is busy doing client work, so their own portfolio, proposal process, and follow-up system stay unfinished. Prospects cannot easily understand the offer or the next step.',
    zelvori:
      'Zelvori can build a focused portfolio, clear service pages, a project enquiry form, discovery-call booking, a proposal workflow, and a lightweight client CRM. The goal is to clarify the buying journey, not promise a guaranteed number of leads.',
    outcome:
      'A stronger professional presence and a repeatable process from first enquiry to agreed scope.',
    services: ['Web development', 'Custom software', 'Automation'],
  },
  {
    number: '04',
    iconName: 'Building2',
    sector: 'Growing companies',
    category: 'Growing companies',
    title: 'Connect the work that spreadsheets cannot keep connected.',
    person: 'A small or mid-sized company with several teams',
    challenge:
      'Sales, operations, stock, approvals, and reporting are tracked in separate spreadsheets. Staff re-enter the same details and management struggles to get one consistent view.',
    story:
      'As a company grows, a collection of tools that worked for five people can become difficult for twenty. Adding another spreadsheet may solve today’s problem but create tomorrow’s reconciliation work.',
    zelvori:
      'Zelvori can map the existing process and then build a right-sized CRM, inventory, approval workflow, reporting module, or API integration in phases. The team defines roles, migration boundaries, audit needs, and ownership before implementation.',
    outcome:
      'A clearer source of operational information and a practical path from the highest-friction workflow to the next module.',
    services: ['Custom ERP/CRM', 'System integrations', 'Security engineering'],
  },
  {
    number: '05',
    iconName: 'ShoppingBag',
    sector: 'Brands & retailers',
    category: 'Independent brands & e-commerce',
    title: 'Make it easier to discover the product—and finish the purchase.',
    person: 'A product brand selling across social channels',
    challenge:
      'Product information is spread across posts and messages, stock updates are manual, and orders require repeated confirmation between the customer and the team.',
    story:
      'A brand may have products customers love, but a fragmented shopping journey makes each order harder than it needs to be. The team needs a storefront that reflects the brand and the way it actually fulfils orders.',
    zelvori:
      'Zelvori can build a mobile-friendly product catalogue or e-commerce storefront with search, product pages, checkout-provider integration, inventory synchronisation, order notifications, and an admin workflow. Tax, shipping, returns, and payment-provider requirements are agreed in the project scope.',
    outcome:
      'A more consistent shopping experience and fewer avoidable manual steps, without promising specific sales or conversion gains.',
    services: ['E-commerce', 'Integration', 'Web applications'],
  },
  {
    number: '06',
    iconName: 'Palette',
    sector: 'Creators & personal brands',
    category: 'Creators & personal brands',
    title: 'Own a home for your work beyond the social feed.',
    person: 'A creator, coach, artist, or subject expert',
    challenge:
      'A social profile is the main discovery channel, but the audience, portfolio, products, bookings, and email list live across separate platforms.',
    story:
      'When a platform changes its reach or layout, the creator has limited control over how people find their work. Followers may not know where to book, buy, subscribe, or find the latest portfolio.',
    zelvori:
      'Zelvori can create a personal website with a media kit, searchable portfolio, newsletter sign-up, booking flow, digital-product catalogue, and analytics integrations selected for the creator’s needs.',
    outcome:
      'A central, brand-controlled destination that makes the next step clearer for followers, clients, and collaborators.',
    services: ['Web development', 'E-commerce', 'Automation'],
  },
  {
    number: '07',
    iconName: 'School',
    sector: 'Educators & training providers',
    category: 'Educators & training providers',
    title: 'Help learners find the right course and the next lesson.',
    person: 'A trainer or institute managing several programmes',
    challenge:
      'Course details, enquiries, schedules, resources, and learner communications are spread across messages, files, and multiple third-party platforms.',
    story:
      'Students need to know what a programme covers, when it runs, how to register, and where to get support. The educator needs a dependable way to manage these steps without creating unnecessary complexity.',
    zelvori:
      'Zelvori can scope a course catalogue, enrolment workflow, learning-resource portal, cohort calendar, automated reminders, or a learning management system integration. Secure handling of learner records and payment requirements is considered before launch.',
    outcome:
      'A clearer student experience and a more organised administrative journey, delivered in phases that fit the institute.',
    services: ['Web applications', 'Integrations', 'Workflow automation'],
  },
  {
    number: '08',
    iconName: 'Users',
    sector: 'Service teams & organisations',
    category: 'Service teams & organisations',
    title: 'Give every request a clear owner and next step.',
    person: 'A field-service firm, agency, or community organisation',
    challenge:
      'Requests arrive on different channels, assignments are coordinated manually, and managers cannot always see what is waiting, underway, or completed.',
    story:
      'The team does not necessarily need a huge enterprise system. It needs a dependable way to capture requests, assign responsibility, and see progress without asking everyone for another status update.',
    zelvori:
      'Zelvori can create a request portal, case or job tracking, team assignment, status notifications, simple analytics, and integrations with the tools already in use. The first release focuses on a measurable workflow rather than an oversized rebuild.',
    outcome:
      'Better visibility into work in progress and a foundation that can grow with the organisation.',
    services: ['Custom software', 'Mobile apps', 'Integrations'],
  },
];

const comparisons = [
  {
    option: 'DIY website builders',
    goodFor: 'Getting a simple brochure site online quickly.',
    tradeoff: 'More specialised workflows, integrations, and permissions may need workarounds or outside services.',
  },
  {
    option: 'Off-the-shelf SaaS',
    goodFor: 'Using established features with less custom development.',
    tradeoff: 'The business may need to adapt its process to the product, and advanced changes can depend on its roadmap or plan.',
  },
  {
    option: 'A freelancer or traditional agency',
    goodFor: 'A broad range of project sizes, from one-off pages to managed builds.',
    tradeoff: 'Delivery quality, documentation, ownership, testing, and support vary by provider and contract—so they must be assessed directly.',
  },
  {
    option: 'Zelvori’s project approach',
    goodFor: 'Teams that need a scoped digital solution, integrations, or custom workflow engineering.',
    tradeoff: 'Custom work requires discovery, decisions, a budget, and ongoing maintenance. It is not automatically the best fit for every small need.',
  },
];

export default function StoriesPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-24">
      <section className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1.5 text-xs font-mono text-cyan-300">
          <Sparkles className="h-4 w-4" /> Industry stories & use cases
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Different work. Different problems.
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Technology that fits.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A lawyer does not need the same digital workflow as a clinic. A creator does
          not run like a growing company. Zelvori starts with the people, process,
          and business goal—then scopes the right website, web app, integration, or
          automation around them.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-400">
          Editorial note: these are illustrative scenarios, not claims about named
          clients or verified project results. Actual scope, timing, and outcomes
          depend on discovery and the agreed statement of work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Discuss your workflow <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/resources/" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500/50">
            Explore free developer resources
          </Link>
        </div>
      </section>

      <div className="mt-14 lg:mt-20">
        <StoriesFilterGrid stories={stories} />
      </div>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:mt-24 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-9">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              <ShieldCheck className="h-4 w-4" /> A fair comparison
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              When is Zelvori the right fit?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Tools and providers solve different problems. The right choice depends
              on complexity, ownership, budget, timeline, and who will maintain the
              result after launch—not on a claim that one option always wins.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {comparisons.map((item) => (
              <div key={item.option} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5">
                <h3 className="font-semibold text-white">{item.option}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300"><span className="font-semibold text-cyan-200">Can suit:</span> {item.goodFor}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400"><span className="font-semibold text-slate-200">Consider:</span> {item.tradeoff}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm text-slate-400">Need a landing page, a custom workflow, a mobile app, or a system integration? Start with the problem—not a predetermined technology.</p>
            <Link href="/contact/" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Start discovery <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
