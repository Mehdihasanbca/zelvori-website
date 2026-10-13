import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'custom-software')!;

export const metadata: Metadata = {
  title: 'Custom Software & System Integrations',
  description:
    'Bespoke software architectures, microservices, and system integrations bridging legacy software with modern cloud APIs. Built for reliability and performance.',
  alternates: {
    canonical: 'https://zelvori.software/services/custom-software/',
  },
  openGraph: {
    title: 'Custom Software & System Integrations | Zelvori',
    description:
      'Mission-critical software, custom API gateways, and distributed data pipelines engineered for enterprise scale.',
    url: 'https://zelvori.software/services/custom-software/',
  },
};

export default function CustomSoftwarePage() {
  return <ServicePageTemplate service={service} />;
}
