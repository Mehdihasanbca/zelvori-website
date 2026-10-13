import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const service = siteConfig.services.find((s) => s.slug === 'mobile-apps')!;

export const metadata: Metadata = {
  title: 'Android & iOS Mobile App Development',
  description:
    'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, Swift, and Kotlin. Offline-ready and fluid 60fps performance.',
  alternates: {
    canonical: 'https://zelvori.software/services/mobile-apps',
  },
  openGraph: {
    title: 'Android & iOS Mobile App Development | Zelvori Software',
    description:
      'High-performance mobile applications engineered for iOS and Android with fluid interactions and offline-first capabilities.',
    url: 'https://zelvori.software/services/mobile-apps',
  },
};

export default function MobileAppsPage() {
  return <ServicePageTemplate service={service} />;
}
