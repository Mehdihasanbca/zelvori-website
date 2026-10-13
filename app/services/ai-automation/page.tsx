import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'ai-automation')!;

export const metadata: Metadata = {
  title: 'AI Integration & Workflow Automation',
  description:
    'Production-grade AI integration, intelligent document extraction, private RAG knowledge bases, and webhook automation that eliminates operational drag.',
  alternates: {
    canonical: 'https://zelvori.software/services/ai-automation/',
  },
  openGraph: {
    title: 'AI Integration & Workflow Automation | Zelvori',
    description:
      'Pragmatic, secure artificial intelligence integrations designed for enterprise workflows, document parsing, and automated support triage.',
    url: 'https://zelvori.software/services/ai-automation/',
  },
};

export default function AiAutomationPage() {
  return <ServicePageTemplate service={service} />;
}
