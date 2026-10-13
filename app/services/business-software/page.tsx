import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'business-software')!;

export const metadata: Metadata = {
  title: 'Custom CRM, HRMS, ERP & Business Software',
  description:
    'Tailored enterprise software designed for proprietary operations. Custom CRM, HRMS, inventory, and ERP systems with role-based access control and zero per-seat licensing fees.',
  alternates: {
    canonical: 'https://zelvori.software/services/business-software/',
  },
  openGraph: {
    title: 'Custom CRM, HRMS, ERP & Business Software | Zelvori Software',
    description:
      'Bespoke enterprise software platforms engineered to eliminate manual spreadsheets and automate proprietary business workflows.',
    url: 'https://zelvori.software/services/business-software/',
  },
};

export default function BusinessSoftwarePage() {
  return <ServicePageTemplate service={service} />;
}
