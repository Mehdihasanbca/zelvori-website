import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'business-software')!;

export const metadata: Metadata = {
  title: 'Custom CRM, HRMS, ERP & Business Software',
  description:
    'Custom CRM, HRMS, inventory, and ERP software built around your operations, with role-based access and no per-seat licensing fees.',
  alternates: {
    canonical: 'https://zelvori.software/services/business-software/',
  },
  openGraph: {
    title: 'Custom CRM, HRMS, ERP & Business Software | Zelvori',
    description:
      'Bespoke enterprise software platforms engineered to eliminate manual spreadsheets and automate proprietary business workflows.',
    url: 'https://zelvori.software/services/business-software/',
  },
};

export default function BusinessSoftwarePage() {
  return <ServicePageTemplate service={service} />;
}
