import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'web-development')!;

export const metadata: Metadata = {
  title: 'Website & Web Application Development',
  description:
    'Custom web application development with React, Next.js, and TypeScript. We engineer high-performance SaaS platforms, customer portals, and web products.',
  alternates: {
    canonical: 'https://zelvori.software/services/web-development/',
  },
  openGraph: {
    title: 'Website & Web Application Development | Zelvori Software',
    description:
      'High-performance, scalable web applications and SaaS platforms engineered with React, Next.js, and modern cloud infrastructure.',
    url: 'https://zelvori.software/services/web-development/',
  },
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate service={service} />;
}
