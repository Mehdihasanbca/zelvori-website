import React from 'react';
import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/app/privacy/page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Zelvori. Learn how we handle client enquiries, mailto workflows, DPDP compliance considerations, and outbound affiliate links.',
  alternates: {
    canonical: 'https://zelvori.software/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy | Zelvori',
    description:
      'Grounded privacy policy covering email communications, zero-tracking static architecture, DPDP Act 2023 alignment, and third-party affiliate redirects.',
    url: 'https://zelvori.software/privacy/',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori Privacy Policy',
        type: 'image/png',
      },
    ],
  },
};

export default function PrivacyPolicyAliasPage() {
  return <PrivacyPolicyPage />;
}
