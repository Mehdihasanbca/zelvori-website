/**
 * Zelvori - Global Configuration File
 * 
 * Update contact details, social URLs, and brand parameters here.
 * This single configuration drives headers, footers, meta tags, and contact forms.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  summary: string;
  badge: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  useCases: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const siteConfig = {
  name: "Zelvori",
  legalName: "Zelvori",
  domain: "https://zelvori.software",
  tagline: "Ideas Into Digital Reality.",
  shortDescription:
    "International digital product development partner building web applications, mobile apps, e-commerce, custom ERP/CRM software, and AI workflow automation.",
  longDescription:
    "Zelvori transforms complex ideas into scalable, high-performance digital reality. We partner with ambitious startups, growing businesses, and enterprises worldwide to engineer modern web applications, native and cross-platform mobile apps, bespoke business systems, and intelligent workflow automation.",

  // Contact settings (Configurable placeholders)
  contact: {
    email: "hello@zelvori.software",
    whatsapp: "", // Configurable: e.g., "+1234567890" (leave empty if not currently active)
    bookingUrl: "", // Optional calendar booking link
    responseWindow: "Within 24 business hours",
    availability: "Accepting new client engagements for Q2–Q4",
  },

  // Social & Repository links (Configurable)
  social: {
    github: "https://github.com/Mehdihasanbca/zelvori-website",
  },

  // Primary navigation links
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Solutions", href: "/#solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Dedicated Service Pages definition
  services: [
    {
      id: "web-development",
      slug: "web-development",
      title: "Website & Web Application Development",
      shortTitle: "Web Development",
      tagline: "Scalable, high-performance web products built for growth.",
      description:
        "From high-conversion marketing websites to data-dense SaaS web platforms, we engineer modern web applications using React, Next.js, TypeScript, and modern cloud infrastructure.",
      summary:
        "Fast, accessible, and resilient web solutions designed with responsive user interfaces and clean architectural foundations.",
      badge: "Full-Stack Web",
      iconName: "Globe",
      deliverables: [
        "Custom SaaS Application Development",
        "Next.js & React Frontend Engineering",
        "Responsive Corporate & Marketing Sites",
        "REST & GraphQL API Architecture",
        "Performance Optimization & Core Web Vitals",
        "Headless CMS & Content Architecture",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      useCases: [
        {
          title: "SaaS Platforms & Customer Portals",
          desc: "Secure, multi-tenant web applications featuring authentication, billing integration, and role-based permissions.",
        },
        {
          title: "High-Traffic Brand & Product Websites",
          desc: "Blazing fast, SEO-optimized web properties that articulate complex value propositions and drive qualified conversions.",
        },
        {
          title: "Interactive Internal Tools",
          desc: "Clean operational dashboards and data visualization portals that empower internal team workflows.",
        },
      ],
      faqs: [
        {
          question: "What web frameworks and technologies does Zelvori prioritize?",
          answer:
            "We primarily build with modern TypeScript ecosystems: Next.js and React for frontends, coupled with Node.js, Python, or Go backends and PostgreSQL or Cloud SQL databases for robust data integrity.",
        },
        {
          question: "Will our website be mobile-responsive and SEO-optimized?",
          answer:
            "Every web application is engineered mobile-first with semantic HTML, automatic metadata generation, clean OpenGraph tags, and strict Core Web Vitals performance benchmarks.",
        },
        {
          question: "Do we retain complete ownership of the code and repository?",
          answer:
            "Yes. Full intellectual property, git repositories, documentation, and deployment configurations are transferred directly to your organization.",
        },
      ],
    },
    {
      id: "mobile-apps",
      slug: "mobile-apps",
      title: "Android & iOS Mobile App Development",
      shortTitle: "Mobile Apps",
      tagline: "Native and cross-platform apps crafted for fluid user experiences.",
      description:
        "We build intuitive, robust mobile applications for iOS and Android devices that deliver smooth 60fps performance, offline reliability, and seamless cloud synchronization.",
      summary:
        "Engaging mobile experiences engineered with React Native, Flutter, Swift, and Kotlin for global app stores.",
      badge: "iOS & Android",
      iconName: "Smartphone",
      deliverables: [
        "Cross-Platform React Native & Flutter Apps",
        "Native iOS (Swift) & Android (Kotlin) Development",
        "Offline-First Architecture & Data Sync",
        "Push Notifications & Biometric Authentication",
        "Apple App Store & Google Play Publishing",
        "In-App Purchases & Payment Gateway Integration",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs"],
      useCases: [
        {
          title: "Consumer Mobile Products",
          desc: "Feature-rich consumer apps focused on engagement, frictionless onboarding, and secure transactions.",
        },
        {
          title: "Field & Workforce Mobile Tools",
          desc: "Reliable mobile applications for logistics, field technicians, and distributed teams needing offline functionality.",
        },
        {
          title: "Companion Apps for Hardware & SaaS",
          desc: "Mobile extensions allowing users to monitor systems, receive immediate alerts, and manage their cloud accounts on the go.",
        },
      ],
      faqs: [
        {
          question: "Should we build cross-platform or separate native apps?",
          answer:
            "For most modern businesses, cross-platform technologies like React Native provide 90%+ code sharing while delivering native performance at lower development and maintenance costs. We evaluate your specific hardware, sensor, and performance needs during technical discovery.",
        },
        {
          question: "Do you handle App Store and Google Play store submissions?",
          answer:
            "Yes. We manage the end-to-end publishing lifecycle, including certificates, provisioning profiles, store listing assets, compliance audits, and release reviews.",
        },
        {
          question: "How do mobile apps handle intermittent connectivity?",
          answer:
            "We design offline-first local caching using SQLite or encrypted device storage, synchronizing mutations automatically once internet connectivity is restored.",
        },
      ],
    },
    {
      id: "ecommerce",
      slug: "ecommerce",
      title: "E-Commerce Website Development",
      shortTitle: "E-Commerce",
      tagline: "High-converting online shopping platforms engineered for scale.",
      description:
        "Bespoke e-commerce architectures designed to maximize average order value, streamline checkout flows, and integrate seamlessly with inventory, shipping, and payment gateways.",
      summary:
        "Custom storefronts, headless commerce integrations, and high-conversion checkout pipelines tailored to modern retail.",
      badge: "Digital Commerce",
      iconName: "ShoppingCart",
      deliverables: [
        "Custom Headless Commerce Storefronts",
        "Shopify Plus & Custom Checkout Engineering",
        "Multi-Currency & International Localization",
        "Payment Processing (Stripe, PayPal, Local Gateways)",
        "Automated Inventory & ERP Synchronization",
        "Faceted Product Filtering & Instant Search",
      ],
      technologies: ["Next.js Commerce", "Shopify API", "Stripe", "PostgreSQL", "Algolia / Meilisearch", "Webhooks"],
      useCases: [
        {
          title: "Direct-to-Consumer (DTC) Brands",
          desc: "Immersive brand storefronts offering rapid load times, custom product configurators, and streamlined checkout.",
        },
        {
          title: "B2B Wholesale & Ordering Portals",
          desc: "Custom price tiers, bulk ordering matrices, tax exemption handling, and invoice-based purchasing workflows.",
        },
        {
          title: "Global Multi-Region Stores",
          desc: "Localized pricing, currency conversion, regional tax compliance, and automated warehouse routing.",
        },
      ],
      faqs: [
        {
          question: "Can you build headless e-commerce with Next.js?",
          answer:
            "Yes. Headless architectures decouple the presentation layer from the commerce engine, unlocking sub-second page transitions, tailored design freedom, and higher conversion rates.",
        },
        {
          question: "How do you protect customer payment information?",
          answer:
            "We integrate directly with PCI-DSS Level 1 certified processors like Stripe and PayPal using tokenized checkout components so sensitive credit card numbers never touch your application server.",
        },
        {
          question: "Can the store connect with our existing ERP or warehouse?",
          answer:
            "We build bi-directional API synchronizations that update product stock levels, sync order manifests, and trigger shipping label creation automatically.",
        },
      ],
    },
    {
      id: "business-software",
      slug: "business-software",
      title: "Custom CRM, HRMS, ERP & Business Software",
      shortTitle: "Business Software",
      tagline: "Tailored operational software that fits your company's exact workflow.",
      description:
        "Off-the-shelf business software forces your company into rigid templates. We engineer custom enterprise systems—CRM, HRMS, inventory management, and ERP platforms—tailored to your proprietary operations.",
      summary:
        "Proprietary business platforms engineered to eliminate manual spreadsheets, centralize records, and enforce operational governance.",
      badge: "Enterprise Systems",
      iconName: "Building2",
      deliverables: [
        "Bespoke Customer Relationship Management (CRM)",
        "Human Resource Management Systems (HRMS)",
        "Enterprise Resource Planning (ERP) Modules",
        "Role-Based Access Control (RBAC) & Audit Logs",
        "Document Generation & PDF Reporting Engines",
        "Automated Approvals & Departmental Workflows",
      ],
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "Next.js", "Redis", "Docker"],
      useCases: [
        {
          title: "Unified Sales & Pipeline Management",
          desc: "Custom CRMs with bespoke deal stages, automated follow-up sequences, and deep operational analytics.",
        },
        {
          title: "Employee Lifecycle & Attendance (HRMS)",
          desc: "Staff directories, leave tracking, document compliance, and department organizational structures.",
        },
        {
          title: "Multi-Warehouse Inventory & Supply Tracking",
          desc: "Real-time stock ledger, purchase order approvals, vendor tracking, and automated reorder alerts.",
        },
      ],
      faqs: [
        {
          question: "Why choose custom business software over commercial SaaS like Salesforce or Workday?",
          answer:
            "Commercial SaaS charges steep per-seat monthly subscription fees, imposes rigid workflow limitations, and stores your proprietary data in generic formats. Custom software is an owned asset tailored precisely to your operational model with zero per-user licensing penalties.",
        },
        {
          question: "How do you ensure data security and role permissions?",
          answer:
            "We implement granular Role-Based Access Control (RBAC), multi-factor authentication, cryptographic audit trails for all critical mutations, and encrypted database storage.",
        },
        {
          question: "Can our existing data be migrated into the new system?",
          answer:
            "Yes. We build automated data ETL pipelines to sanitize, validate, and migrate legacy records from spreadsheets, SQL databases, or older software into the new platform without downtime.",
        },
      ],
    },
    {
      id: "ai-automation",
      slug: "ai-automation",
      title: "AI Integration & Workflow Automation",
      shortTitle: "AI Automation",
      tagline: "Intelligent systems that automate repetitive workflows and augment human talent.",
      description:
        "We integrate modern artificial intelligence models, semantic document processing, and automated orchestration pipelines into your business operations to reduce overhead and accelerate cycle times.",
      summary:
        "Pragmatic, production-ready AI pipelines designed for real enterprise workflows, document extraction, and customer support augmentation.",
      badge: "Intelligent Systems",
      iconName: "Cpu",
      deliverables: [
        "LLM & Foundation Model API Integrations",
        "Intelligent Document Parsing & Extraction",
        "Retrieval-Augmented Generation (RAG) Knowledge Bases",
        "Automated Webhooks & Background Queue Workflows",
        "Customer Support & Inbound Inquiry Triage",
        "Predictive Data Analysis & Structured Summaries",
      ],
      technologies: ["OpenAI / Gemini APIs", "Python", "LangChain / LlamaIndex", "Vector DBs (pgvector)", "Temporal / BullMQ"],
      useCases: [
        {
          title: "Automated Document Ingestion & Verification",
          desc: "Instantly parse invoices, contracts, receipts, and identity documents into structured, validated database records.",
        },
        {
          title: "Internal Enterprise Knowledge Assistants",
          desc: "Secure private RAG systems that query internal standard operating procedures, manuals, and technical specifications.",
        },
        {
          title: "Automated Client Communication & Triage",
          desc: "Classify incoming tickets, draft preliminary replies, and route complex inquiries to appropriate team leads.",
        },
      ],
      faqs: [
        {
          question: "Is our proprietary company data used to train public AI models?",
          answer:
            "No. We use enterprise API endpoints and private VPC deployments where model providers explicitly do not train on your data, coupled with zero-data-retention agreements.",
        },
        {
          question: "What is the difference between AI hype and pragmatic business automation?",
          answer:
            "We focus strictly on measurable ROI: reducing manual data entry hours, speeding up ticket resolution, extracting structured facts from unstructured PDFs, and eliminating human friction in high-volume workflows.",
        },
        {
          question: "How do you handle AI hallucinations or errors?",
          answer:
            "We employ strict schema validation (such as Zod / Pydantic), deterministic rule fallbacks, confidence thresholds, and human-in-the-loop review interfaces for edge cases.",
        },
      ],
    },
    {
      id: "custom-software",
      slug: "custom-software",
      title: "Custom Software & System Integrations",
      shortTitle: "Custom Software",
      tagline: "Mission-critical architectures engineered to connect distributed systems.",
      description:
        "When commercial solutions fall short, we architect bespoke software, middleware, and integration fabrics that bridge legacy infrastructure with modern cloud platforms.",
      summary:
        "Bespoke backend systems, microservices, third-party API orchestrations, and unified data bridges engineered for resilience.",
      badge: "System Architecture",
      iconName: "Layers",
      deliverables: [
        "Bespoke Backend Architectures & Microservices",
        "Third-Party API & Webhook Integrations",
        "Legacy System Modernization & Refactoring",
        "Data Synchronization & Event-Driven Streaming",
        "Cloud Infrastructure (AWS, GCP, DigitalOcean)",
        "Secure RESTful & gRPC Communication Layers",
      ],
      technologies: ["TypeScript", "Python", "Go", "Docker", "PostgreSQL", "Kafka / RabbitMQ"],
      useCases: [
        {
          title: "Bridging Siloed Legacy Software",
          desc: "Build modern REST/GraphQL middleware layers over older on-premise systems to enable web and mobile access.",
        },
        {
          title: "Multi-Vendor API Orchestration",
          desc: "Synchronize data flows across payments, logistics, CRM, and accounting platforms with automatic retry handling.",
        },
        {
          title: "Bespoke Domain-Specific Platforms",
          desc: "Custom algorithms, booking engines, telemetry pipelines, and calculation engines built from the ground up.",
        },
      ],
      faqs: [
        {
          question: "Can you integrate with our existing on-premise or proprietary software?",
          answer:
            "Yes. We specialize in building secure gateway proxies, database triggers, and API wrappers that connect existing infrastructure with modern interfaces without disrupting active operations.",
        },
        {
          question: "How do you ensure system reliability during high volume?",
          answer:
            "We employ asynchronous message queues (Redis, RabbitMQ), idempotency keys, automatic retry policies with exponential backoff, and end-to-end telemetry.",
        },
        {
          question: "What documentation is provided upon handover?",
          answer:
            "Every project includes comprehensive OpenAPI/Swagger documentation, architectural diagrams, deployment guides, database schemas, and codebase walkthroughs.",
        },
      ],
    },
    {
      id: "application-security",
      slug: "application-security",
      title: "Application Security & Secure Software Engineering",
      shortTitle: "Application Security",
      tagline: "Threat-resilient architectures, defensive engineering, and vulnerability remediation.",
      description:
        "We embed security engineering directly into product design and delivery. From threat modeling and API vulnerability reviews to least-privilege IAM hardening and supply-chain verification, we protect critical business assets without stalling product velocity.",
      summary:
        "Defensive software architecture, application and API security reviews, sensitive-data protection, and pragmatic vulnerability remediation for high-growth systems.",
      badge: "DevSecOps & AppSec",
      iconName: "Shield",
      deliverables: [
        "Secure Software Architecture & Threat Modeling (STRIDE)",
        "Application & API Security Reviews (OWASP ASVS & API Top 10)",
        "Identity, Authentication & Authorization Hardening (MFA / RBAC)",
        "Data Protection, Privacy-by-Design & Sensitive Data Minimization",
        "Secure Cloud Configuration & Secrets Management (AWS / GCP / Cloudflare)",
        "Software Supply-Chain & Dependency Vulnerability Remediation (SBOM / SCA)",
        "Security Controls & Guardrails for AI-Enabled Applications",
        "Security Logging, Audit Trails & Incident Recovery Planning",
        "Authorized Penetration Testing (Subject to scope and qualified resources)",
      ],
      technologies: [
        "OWASP ASVS",
        "OAuth 2.1 & OIDC",
        "PostgreSQL RLS",
        "AWS KMS & Cloud KMS",
        "HashiCorp Vault",
        "Trivy & Snyk",
        "Cloudflare Zero Trust",
        "GitHub Actions OIDC",
      ],
      useCases: [
        {
          title: "Pre-Launch & Post-Funding Security Hardening",
          desc: "Comprehensive application audit before commercial rollout or enterprise due diligence, verifying authentication boundaries, object-level authorization (BOLA), and tenant isolation.",
        },
        {
          title: "B2B SaaS Multi-Tenant Isolation & Identity Modernization",
          desc: "Hardening multi-tenant B2B architectures with row-level security (RLS), cryptographically signed session tokens, MFA integration, and granular role-based access control.",
        },
        {
          title: "AI & RAG System Security Architecture",
          desc: "Defense-in-depth for generative AI workflows: prompt-injection boundaries, server-side document access authorization, sensitive-data redaction, and human-in-the-loop controls.",
        },
      ],
      faqs: [
        {
          question: "Does Zelvori guarantee that an application will be 100% hack-proof or zero risk?",
          answer:
            "No reputable security engineer makes that claim. Zero risk does not exist in production software. Our focus is defense-in-depth: eliminating high-probability attack vectors, minimizing data blast radius, enforcing least-privilege controls, and ensuring rapid detection and recovery if an incident occurs.",
        },
        {
          question: "Does Zelvori operate a 24/7 Security Operations Center (SOC) or issue ISO 27001 certifications?",
          answer:
            "No. Zelvori provides application security engineering, architecture reviews, secure coding, and vulnerability remediation. We do not operate a managed 24/7 SOC, nor do we act as an accredited ISO 27001 / SOC 2 certification registrar. We help engineering teams implement the technical controls and evidence needed to succeed in external third-party compliance audits.",
        },
        {
          question: "How are authorized penetration tests conducted?",
          answer:
            "Penetration testing engagements require explicit written authorization, verified rules of engagement, defined scope, and allocated qualified security personnel. We focus on application-layer logic, authentication bypass, authorization flaws, and API vulnerabilities rather than untargeted automated scans.",
        },
        {
          question: "What standards and frameworks guide your security recommendations?",
          answer:
            "Our engineering practices align with NIST Cybersecurity Framework (CSF) 2.0, NIST Secure Software Development Framework (SP 800-218), OWASP Top 10:2025, and OWASP API Security Top 10:2023. These serve as rigorous technical benchmarks for defensive implementation.",
        },
      ],
    },
  ] as ServiceItem[],

  // Process Steps
  process: [
    {
      step: "01",
      name: "Discover & Define",
      tagline: "Uncovering business goals and technical boundaries.",
      description:
        "We dissect your objectives, map user journeys, audit existing systems, and establish a clear technical specification with realistic milestones.",
    },
    {
      step: "02",
      name: "Architect & Design",
      tagline: "System blueprints and human-centered interfaces.",
      description:
        "We create wireframes, interactive design systems, and software architecture schematics. Every screen and API contract is validated before code begins.",
    },
    {
      step: "03",
      name: "Engineer & Integrate",
      tagline: "Clean, typed, maintainable codebases built in sprint cycles.",
      description:
        "Our engineering team builds features in transparent two-week sprints with continuous testing, automated CI/CD checks, and regular review builds.",
    },
    {
      step: "04",
      name: "Test & Deploy",
      tagline: "Rigorous quality assurance and seamless production launch.",
      description:
        "We execute end-to-end testing, security audits, performance profiling, and launch your software on resilient cloud infrastructure with zero downtime.",
    },
    {
      step: "05",
      name: "Evolve & Support",
      tagline: "Long-term partnership as your business scales.",
      description:
        "Post-launch telemetry, proactive maintenance, SLA-backed support, and continuous feature expansion keep your platform competitive.",
    },
  ],

  // Solutions by Audience
  solutions: [
    {
      audience: "Startups & Founders",
      title: "From Concept to Market-Ready MVP",
      summary:
        "Launch your initial product fast without compromising architectural integrity. We build scalable foundations that impress investors and early adopters.",
      highlights: [
        "Rapid prototyping & MVP sprints",
        "Scalable cloud architecture that grows with you",
        "Clean, transferable codebase for your future internal hires",
        "Investor and stakeholder demo readiness",
      ],
    },
    {
      audience: "Growing Businesses",
      title: "Scale Operations & Modernize Systems",
      summary:
        "Replace fragmented tools, automate repetitive tasks, and launch customer-facing digital products that accelerate your competitive advantage.",
      highlights: [
        "Custom web platforms & client portals",
        "Workflow automation and system integrations",
        "Mobile app expansion for customer retention",
        "Elimination of repetitive manual data entry",
      ],
    },
    {
      audience: "Enterprise Teams",
      title: "Mission-Critical Software & Digital Infrastructure",
      summary:
        "Upgrade legacy systems, engineer secure internal platforms, and deploy AI-assisted automation with enterprise-level security and governance.",
      highlights: [
        "Bespoke ERP, CRM, and HRMS platforms",
        "Rigorous Role-Based Access Control (RBAC) & compliance",
        "High-throughput API & microservice architectures",
        "Dedicated technical advisory and SLA support",
      ],
    },
  ],

  // Core Capabilities
  capabilities: [
    {
      title: "Product Strategy & Technical Discovery",
      desc: "Feasibility audits, system architecture planning, database modeling, and product roadmaps aligned with business objectives.",
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Human-centric interface design, cohesive component design systems, accessibility compliance, and interactive prototypes.",
    },
    {
      title: "Full-Stack Software Engineering",
      desc: "Modern TypeScript, React, Next.js, Python, Node.js, and native mobile codebases structured for maintainability and speed.",
    },
    {
      title: "API & Third-Party Integrations",
      desc: "Secure connectors for payment gateways, ERPs, accounting software, communications, and custom external services.",
    },
    {
      title: "Quality Assurance & Security Audits",
      desc: "Automated unit and integration tests, static code analysis, vulnerability scanning, and performance benchmarking.",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Automated deployment pipelines, Docker containerization, monitoring, disaster recovery, and scalable hosting.",
    },
  ],

  // General FAQs
  faqs: [
    {
      question: "How does Zelvori structure client engagements?",
      answer:
        "We offer two primary collaboration models: Milestone-Based Project Delivery (fixed-scope deliverables with transparent timelines) and Dedicated Engineering Squads (agile monthly retainers for continuous product development). We recommend the best model based on your project requirements.",
    },
    {
      question: "What is your approach to communication and updates?",
      answer:
        "We believe in transparent, direct engineering communication. You have access to weekly video check-ins, sprint staging previews, collaborative project tracking, and direct developer communication channels.",
    },
    {
      question: "Who owns the code, intellectual property, and design assets?",
      answer:
        "You do. 100% of the source code, design systems, architectural documentation, and database assets belong entirely to your company upon milestone completion.",
    },
    {
      question: "Can Zelvori collaborate with our existing in-house engineers?",
      answer:
        "Absolutely. We frequently work alongside internal tech leads, providing specialized engineering bandwidth, architectural guidance, or taking ownership of specific modules.",
    },
    {
      question: "How do you protect client data and project confidentiality?",
      answer:
        "We sign mutual non-disclosure agreements (NDAs) prior to detailed discovery, enforce strict repository permissions, and implement secure credential management across all environments.",
    },
    {
      question: "How do we get started with a project?",
      answer:
        "Submit an inquiry through our contact page with your project goals or email us directly at hello@zelvori.software. We schedule a technical discovery consultation to review your requirements and provide an architectural roadmap.",
    },
  ],
};
