import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'application-security')!;

export const metadata: Metadata = {
  title: 'Application Security & Secure Software Engineering',
  description:
    'Application security architecture, threat modeling, and defensive engineering by Zelvori. We harden authentication, APIs, cloud secrets, and AI workflows against real-world vulnerabilities.',
  alternates: {
    canonical: 'https://zelvori.software/services/application-security/',
  },
  openGraph: {
    title: 'Application Security & Secure Software Engineering | Zelvori',
    description:
      'Embed security engineering into your digital product. Architecture reviews, threat modeling, identity hardening, and vulnerability remediation by senior engineers.',
    url: 'https://zelvori.software/services/application-security/',
  },
};

export default function ApplicationSecurityPage() {
  return <ServicePageTemplate service={service} />;
}
