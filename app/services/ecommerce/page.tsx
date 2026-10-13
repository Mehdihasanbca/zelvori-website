import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'ecommerce')!;

export const metadata: Metadata = {
  title: 'E-Commerce Website Development',
  description:
    'Custom headless e-commerce platforms, Shopify Plus architectures, and checkout pipelines designed for high conversion, multi-currency, and global scaling.',
  alternates: {
    canonical: 'https://zelvori.software/services/ecommerce/',
  },
  openGraph: {
    title: 'E-Commerce Website Development | Zelvori Software',
    description:
      'High-converting, bespoke digital commerce storefronts with fast checkout, ERP sync, and international multi-currency support.',
    url: 'https://zelvori.software/services/ecommerce/',
  },
};

export default function EcommercePage() {
  return <ServicePageTemplate service={service} />;
}
