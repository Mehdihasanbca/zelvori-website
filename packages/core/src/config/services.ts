/**
 * @zelvori/core - Engineering Services & Practices Taxonomy
 */

export interface EngineeringPractice {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  deliverables: string[];
}

export const ZELVORI_PRACTICES: EngineeringPractice[] = [
  {
    slug: 'web-development',
    title: 'Website & Web Application Development',
    shortTitle: 'Web Applications',
    tagline: 'High-performance Next.js, React, and Astro architectures with edge rendering.',
    deliverables: ['Custom frontend engineering', 'Responsive UI systems', 'SEO architecture', 'Serverless APIs'],
  },
  {
    slug: 'mobile-apps',
    title: 'Android & iOS Mobile App Development',
    shortTitle: 'Mobile Apps',
    tagline: 'Cross-platform mobile applications engineered for native performance and offline reliability.',
    deliverables: ['Flutter & React Native apps', 'Offline data synchronization', 'Push notifications', 'App store release engineering'],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Website Development',
    shortTitle: 'E-Commerce',
    tagline: 'Scalable digital storefronts and headless checkout pipelines designed for conversion.',
    deliverables: ['Product catalog engineering', 'Cart & checkout orchestration', 'Payment gateway integration', 'Inventory sync'],
  },
  {
    slug: 'business-software',
    title: 'Custom CRM, HRMS, ERP & Business Software',
    shortTitle: 'Business Software',
    tagline: 'Tailored enterprise software replacing fragmented spreadsheets with unified systems.',
    deliverables: ['Role-based dashboards', 'Approval pipelines', 'Reporting analytics', 'Workflow automation'],
  },
  {
    slug: 'ai-automation',
    title: 'AI Integration & Workflow Automation',
    shortTitle: 'AI & Automation',
    tagline: 'Intelligent automation systems, automated data extraction, and pragmatic workflow integration.',
    deliverables: ['Process automation bots', 'Document ingestion pipelines', 'Custom assistant integrations', 'Data transforms'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software & System Integrations',
    shortTitle: 'Custom Software',
    tagline: 'Bespoke microservices, webhook bridges, and legacy system interoperability.',
    deliverables: ['Custom REST/GraphQL APIs', 'Third-party integrations', 'Database migrations', 'Webhook reliability'],
  },
  {
    slug: 'application-security',
    title: 'Application Security & Secure Software Engineering',
    shortTitle: 'Application Security',
    tagline: 'Hardened application security, authorization audits, and vulnerability mitigation.',
    deliverables: ['Security architecture reviews', 'RBAC & RLS auditing', 'Dependency vulnerability scanning', 'Penetration defense'],
  },
];
