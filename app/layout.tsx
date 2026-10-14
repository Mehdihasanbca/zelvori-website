import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { criticalCss } from '@/lib/critical-css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zelvori.software'),
  title: {
    default: 'Zelvori — Ideas Into Digital Reality',
    template: '%s | Zelvori',
  },
  description:
    'International digital product development partner. Zelvori engineers high-performance web applications, mobile apps, e-commerce platforms, custom ERP/CRM software, and AI workflow automation.',
  keywords: [
    'Zelvori',
    'web development',
    'mobile app development',
    'custom software',
    'ERP systems',
    'CRM software',
    'AI workflow automation',
    'enterprise software development',
    'Next.js development',
    'React Native apps',
    'application security',
    'secure software engineering',
    'threat modeling',
    'API security',
  ],
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Zelvori' }],
  creator: 'Zelvori',
  publisher: 'Zelvori',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'google-adsense-account': 'ca-pub-1417105686781482',
  },
  verification: {
    other: {
      'msvalidate.01': '06236155CCFE57BA008B422F19673DE5',
    },
  },
  alternates: {
    canonical: 'https://zelvori.software/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zelvori.software/',
    title: 'Zelvori — Ideas Into Digital Reality',
    description:
      'International digital product development partner. Engineering scalable web platforms, native mobile apps, custom business systems, and AI automation for global companies.',
    siteName: 'Zelvori',
    images: [
      {
        url: 'https://zelvori.software/images/brand/zelvori-og.png',
        width: 1200,
        height: 630,
        alt: 'Zelvori — Ideas Into Digital Reality',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelvori — Ideas Into Digital Reality',
    description:
      'International digital product development partner building web applications, mobile apps, enterprise business software, and AI workflow automation.',
    images: ['https://zelvori.software/images/brand/zelvori-og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icon.svg' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://zelvori.software/#organization',
  name: 'Zelvori',
  alternateName: 'Zelvori Software',
  url: 'https://zelvori.software/',
  logo: 'https://zelvori.software/images/brand/favicon-512.png',
  description:
    'Zelvori is an international digital product development partner specializing in web applications, mobile apps, e-commerce, custom ERP/CRM software, and AI workflow automation.',
  email: 'hello@zelvori.software',
  sameAs: [
    'https://github.com/Mehdihasanbca/zelvori-website',
  ],
  knowsAbout: [
    'Web Application Development',
    'Mobile Application Development',
    'E-Commerce Development',
    'Custom CRM and ERP Systems',
    'AI Workflow Automation',
    'System Integrations',
    'Application Security & Threat Modeling',
    'DevSecOps & Defensive Architecture',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://zelvori.software/#website',
  name: 'Zelvori',
  alternateName: ['Zelvori Software', 'zelvori.software'],
  url: 'https://zelvori.software/',
  publisher: {
    '@id': 'https://zelvori.software/#organization',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Referrer Policy Client-Side Meta Tag for Static Hosting */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Critical Above-The-Fold CSS Inlined for Instant Paint & Zero Render Blocking */}
        <style
          id="critical-css"
          dangerouslySetInnerHTML={{ __html: criticalCss }}
        />
        {/* Resource Pre-Connect Hints */}
        <link rel="preconnect" href="https://zelvori.software" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
