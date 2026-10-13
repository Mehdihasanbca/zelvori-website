import React from 'react';
import type { Metadata } from 'next';
import TermsOfServicePage from '@/app/terms/page';

export const metadata: Metadata = {
  title: 'Terms of Service | Zelvori',
  description:
    'Terms of Service governing the use of the Zelvori website, technical project proposals, and professional software engineering engagements.',
  alternates: {
    canonical: 'https://zelvori.software/terms-of-service/',
  },
  openGraph: {
    title: 'Terms of Service | Zelvori',
    description:
      'Clear, defensible terms distinguishing general website browsing from signed project agreements, intellectual property ownership, and liability boundaries.',
    url: 'https://zelvori.software/terms-of-service/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Terms of Service',
        type: 'image/png',
      },
    ],
  },
};

export default function TermsOfServiceAliasPage() {
  return <TermsOfServicePage />;
}
