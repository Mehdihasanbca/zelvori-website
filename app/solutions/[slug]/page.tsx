import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SOLUTIONS_DATA, getSolutionBySlug } from '@/lib/solutions-data';
import { SolutionBlueprintView } from '@/components/solutions/SolutionBlueprintView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SOLUTIONS_DATA.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = getSolutionBySlug(slug);

  if (!blueprint) {
    return {
      title: 'Industry Blueprint Not Found',
      description: 'The requested industry architecture blueprint could not be found.',
    };
  }

  const pageTitle = `${blueprint.title} Architecture Blueprint`;
  const description = blueprint.tagline;
  const url = `https://zelvori.software/solutions/${blueprint.slug}/`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${blueprint.title} Architecture Blueprint | Zelvori`,
      description,
      url,
      images: [
        {
          url: 'https://zelvori.software/images/brand/zelvori-og.png',
          width: 1200,
          height: 630,
          alt: `${blueprint.title} Reference Architecture Blueprint — Zelvori`,
          type: 'image/png',
        },
      ],
    },
  };
}

export default async function SolutionBlueprintPage({ params }: PageProps) {
  const { slug } = await params;
  const blueprint = getSolutionBySlug(slug);

  if (!blueprint) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${blueprint.title} Reference Architecture & Implementation Blueprint`,
    description: blueprint.tagline,
    url: `https://zelvori.software/solutions/${blueprint.slug}/`,
    image: 'https://zelvori.software/images/brand/zelvori-og.png',
    author: {
      '@type': 'Organization',
      name: 'Zelvori',
      url: 'https://zelvori.software',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zelvori',
      url: 'https://zelvori.software',
      logo: 'https://zelvori.software/images/brand/zelvori-logo.png',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: `${blueprint.title} Reference Platform`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud-Native / Web',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolutionBlueprintView blueprint={blueprint} />
        </div>
      </main>
    </>
  );
}
