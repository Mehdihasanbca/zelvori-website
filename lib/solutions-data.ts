export interface ArchitectureComponent {
  name: string;
  category: string;
  description: string;
}

export interface ArchitectureLayer {
  number: string;
  name: string;
  boundary: string;
  components: ArchitectureComponent[];
  securityGate: string;
}

export interface RolePermissionItem {
  role: string;
  accessLevel: string;
  canView: string[];
  canEdit: string[];
  restrictions: string;
}

export interface SecurityControlRef {
  control: string;
  protection: string;
  status: 'Reference design' | 'Recommended control' | 'Implemented in SDK' | 'Requires provider configuration' | 'Project dependent';
  evidenceOrPrereq: string;
}

export interface PhasedRoadmapItem {
  phase: string;
  title: string;
  timeframeNote: string;
  scope: string[];
  architectureMaturity: string;
  notIncluded: string[];
}

export interface SolutionBlueprint {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Healthcare' | 'Legal' | 'Enterprise Operations' | 'Commerce & Marketplaces' | 'Services & Delivery' | 'Media & Education';
  tagline: string;
  overview: string;
  operationalProblem: string;
  targetPersonas: { role: string; description: string }[];
  mainUseCases: string[];
  coreModules: string[];
  excludedFromV1: string[];
  rolePermissions: RolePermissionItem[];
  architectureLayers: ArchitectureLayer[];
  dataClassification: {
    dataClass: string;
    examples: string;
    handling: string;
  }[];
  securityControls: SecurityControlRef[];
  externalIntegrations: {
    service: string;
    type: string;
    integrationMethod: string;
    securityBoundary: string;
  }[];
  roadmap: PhasedRoadmapItem[];
  acceptanceCriteria: string[];
  deploymentAndOps: {
    recommendedHost: string;
    databaseIsolation: string;
    backupCadence: string;
    maintenanceDuties: string;
  };
  risksAndAssumptions: {
    risk: string;
    mitigation: string;
    owner: string;
  }[];
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  relatedStoryAnchor: string;
  relatedStoryTitle: string;
  relatedPreviewSlug?: string;
  relatedToolSlug?: string;
}

export const SOLUTIONS_DATA: SolutionBlueprint[] = [
  // 1. Healthcare
  {
    slug: 'healthcare',
    title: 'Doctors, Clinics & Hospital Operations (EMR)',
    shortTitle: 'Healthcare & Clinics',
    category: 'Healthcare',
    tagline: 'Streamlined patient encounters, registration, and clinic operations without administrative friction.',
    overview:
      'A patient-first healthcare operations blueprint designed around real clinical workflows. Unifies appointment booking, patient registration, encounter history, diagnostic attachments, and billing into a secure, role-restricted web application.',
    operationalProblem:
      'Reception coordinates phone appointments on paper, doctors search across fragmented physical folders, diagnostic labs issue disconnected PDFs, and administrative staff reconcile billing after the patient has left. The clinical issue is fragmented coordination—not clinical competence.',
    targetPersonas: [
      { role: 'Independent Doctor / Specialist', description: 'Requires fast appointment scheduling, structured encounter notes, and prescription history.' },
      { role: 'Polyclinic / Day Clinic Director', description: 'Needs multi-doctor scheduling, reception queues, billing, and lab report tracking.' },
      { role: 'Small Hospital Department Head', description: 'Manages departmental bed allocations, nursing notes, and discharge summaries.' },
      { role: 'Patient & Family Guardian', description: 'Wants transparent booking, visit reminders, and access to verified discharge receipts.' },
    ],
    mainUseCases: [
      'Online appointment requests with automated SMS/WhatsApp reminders',
      'Reception check-in desk and digital queue management',
      'Doctor clinical encounter notes and structured diagnosis records',
      'Diagnostic lab test order tracking and PDF result attachment',
      'Clinic billing, receipts, and daily collection reconciliation',
      'Secure patient portal for historical encounter summaries',
    ],
    coreModules: [
      'Clinic Website & Appointment Booking Desk',
      'Patient Master Identity & Registration',
      'Doctor Encounter Notes & Prescription History',
      'Diagnostic Orders & Secure Report Storage',
      'Billing, Receipts & Cash Collection Ledger',
      'Administrative & Operational Daily Summary Reports',
    ],
    excludedFromV1: [
      'Autonomous AI medical diagnosis (software is administrative, not clinical authority)',
      'Automated insurance TPA claim settlement without human billing sign-off',
      'Real-time IoT ICU telemetry monitors without specialized hardware certification',
      'Automated medical legal dispute decisions',
    ],
    rolePermissions: [
      {
        role: 'Receptionist',
        accessLevel: 'Front Desk',
        canView: ['Patient demographics', 'Appointment schedule', 'Basic billing status'],
        canEdit: ['Patient contact info', 'Appointment bookings', 'Check-in status'],
        restrictions: 'Cannot view clinical encounter notes, doctor diagnostic remarks, or medical history.',
      },
      {
        role: 'Doctor / Clinician',
        accessLevel: 'Clinical Care',
        canView: ['Full patient encounter history', 'Diagnostic lab results', 'Prescription records'],
        canEdit: ['Clinical encounter notes', 'Prescriptions', 'Lab orders', 'Discharge summary'],
        restrictions: 'Cannot modify billing amounts or edit historic encounter notes once closed.',
      },
      {
        role: 'Nurse / Care Staff',
        accessLevel: 'Care Delivery',
        canView: ['Assigned patient vital signs', 'Medication administration schedule'],
        canEdit: ['Vital signs recordings', 'Nursing shift notes'],
        restrictions: 'Cannot create prescriptions or amend doctor clinical notes.',
      },
      {
        role: 'Billing Administrator',
        accessLevel: 'Financial',
        canView: ['Order line items', 'Payment status', 'Patient insurance card numbers'],
        canEdit: ['Invoices', 'Payment receipts', 'Discount approval notes'],
        restrictions: 'Cannot view detailed clinical notes beyond invoiced procedure codes.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'User Channels',
        boundary: 'Client Interface',
        components: [
          { name: 'Patient Booking Web Portal', category: 'Web', description: 'Responsive mobile-first booking interface.' },
          { name: 'Staff Clinical Workstation', category: 'Web', description: 'High-density desktop console with keyboard shortcuts.' },
        ],
        securityGate: 'No patient health information cached in unencrypted browser storage.',
      },
      {
        number: '02',
        name: 'Edge & Perimeter',
        boundary: 'Network Ingress',
        components: [
          { name: 'TLS 1.3 Termination', category: 'Security', description: 'Strict cipher suites with HSTS enforcement.' },
          { name: 'WAF & Bot Throttling', category: 'Security', description: 'Prevents automated appointment scraping.' },
        ],
        securityGate: 'Strict origin policies and rate limiting on booking forms.',
      },
      {
        number: '03',
        name: 'Identity & Access',
        boundary: 'Policy Enforcement',
        components: [
          { name: 'Staff OIDC Provider', category: 'Auth', description: 'Enforces MFA for clinical and billing accounts.' },
          { name: 'Session Token Gateway', category: 'Auth', description: 'Short-lived tokens with 15-minute inactivity timeouts.' },
        ],
        securityGate: 'Mandatory TOTP MFA for all clinical and administrative roles.',
      },
      {
        number: '04',
        name: 'Application API & Domain Logic',
        boundary: 'Business Services',
        components: [
          { name: 'Encounter State Machine', category: 'Logic', description: 'Draft → Finalized → Locked encounter lifecycle.' },
          { name: 'Patient Deduplication Engine', category: 'Logic', description: 'Prevents duplicate clinical record creation.' },
        ],
        securityGate: 'Fail-closed input validation; zero eval; strict schema parsing.',
      },
      {
        number: '05',
        name: 'Data Storage & Document Vault',
        boundary: 'Encrypted Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Private VPC placement with row-level tenant security.' },
          { name: 'Encrypted S3 Document Vault', category: 'Storage', description: 'AES-256 encrypted storage for lab scan attachments.' },
        ],
        securityGate: 'At-rest KMS encryption; database volume accessible only from API security group.',
      },
      {
        number: '06',
        name: 'Integrations & External Gateway',
        boundary: 'External Boundary',
        components: [
          { name: 'SMS / WhatsApp Reminder Gateway', category: 'Integration', description: 'Transactional visit alerts with minimal patient details.' },
          { name: 'ABDM Health ID (ABHA) Adapter', category: 'Standards', description: 'Scoped future integration for Ayushman Bharat ecosystem.' },
        ],
        securityGate: 'No diagnostic or sensitive clinical data transmitted in plaintext SMS alerts.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Clinic doctor profiles, consultation hours, services list', handling: 'Publicly readable via CDN caching.' },
      { dataClass: 'Confidential', examples: 'Patient contact phone, booking timestamps, billing totals', handling: 'Role-restricted to reception and billing staff.' },
      { dataClass: 'Highly Sensitive (PHI)', examples: 'Clinical encounter notes, diagnoses, prescriptions, lab scans', handling: 'Strict least privilege, KMS encrypted at rest, access logged in audit trails.' },
    ],
    securityControls: [
      { control: 'Encounter-Level Authorization', protection: 'Prevents unauthorized staff from reading medical records outside active duty.', status: 'Reference design', evidenceOrPrereq: 'Verified via negative permission tests.' },
      { control: 'Clinical Data Masking in Logs', protection: 'Ensures application telemetry does not expose patient names or health data.', status: 'Recommended control', evidenceOrPrereq: 'Structured logging formatters with regex redactors.' },
      { control: 'Air-Gapped Backup Restoration Drill', protection: 'Guarantees clinic database recoverability during ransomware or outage.', status: 'Requires provider configuration', evidenceOrPrereq: 'Automated daily snapshots + tested restore runbook.' },
      { control: 'Client-Side Input Sanitization', protection: 'Prevents XSS in patient note input fields.', status: 'Implemented in SDK', evidenceOrPrereq: '@zelvori/core/security escapeHtml & sanitizeUrl.' },
    ],
    externalIntegrations: [
      { service: 'Transactional SMS/WhatsApp Gateway', type: 'Messaging', integrationMethod: 'REST API via HTTPS with signed API token', securityBoundary: 'Never includes diagnostic labels or medication names in SMS body.' },
      { service: 'Diagnostic Lab Data Feeds', type: 'Medical Documents', integrationMethod: 'Webhook receiver with HMAC-SHA256 signature validation', securityBoundary: 'Attachments scanned for MIME type and stored in private bucket.' },
      { service: 'ABDM (Ayushman Bharat Digital Mission)', type: 'National Health ID', integrationMethod: 'Standardized FHIR / ABDM API connector (Phase 3)', securityBoundary: 'Requires government-accredited client sandbox approval.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Core Clinical Workflow & Appointments',
        timeframeNote: 'Assumes scoped requirements and approved clinical stakeholder review.',
        scope: ['Public appointment booking website', 'Reception queue dashboard', 'Doctor encounter note interface', 'Prescription generation with PDF download', 'Basic billing and cash receipting'],
        architectureMaturity: 'Modular monolith, single PostgreSQL database in private subnet, daily backups.',
        notIncluded: ['External lab bidirectional sync', 'In-patient bed management', 'Mobile app for patients'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Diagnostic Lab Integration & Patient Portal',
        timeframeNote: 'Follows successful MVP operational rollout.',
        scope: ['Patient self-service portal for past visit notes', 'Diagnostic lab PDF report upload and attachment', 'Automated WhatsApp visit follow-up alerts', 'Multi-doctor schedule conflict resolution'],
        architectureMaturity: 'Separated background queue for SMS/WhatsApp dispatch, S3 bucket with signed expiring URLs.',
        notIncluded: ['ABDM national registry sync', 'Automated insurance claim EDI'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Multi-Department HIS & ABDM Standards',
        timeframeNote: 'Required for multi-clinic enterprises or hospital departments.',
        scope: ['Departmental bed management & nursing charts', 'Pharmacy inventory & batch tracking', 'ABDM ABHA health ID integration via accredited gateway', 'Comprehensive operational BI reporting'],
        architectureMaturity: 'Read-replicas for reporting, micro-service isolation for external health gateways if traffic warrants.',
        notIncluded: ['Autonomous machine diagnosis without clinical physician review'],
      },
    ],
    acceptanceCriteria: [
      'Doctor can create, edit, and finalize an encounter note in under 90 seconds without screen freezing.',
      'Receptionist accounts cannot view or query clinical encounter text or prescription history (negative test).',
      'Database restoration from cold snapshot tested and completed within 30 minutes (RTO <= 30m).',
      'Patient names and medical conditions are 100% absent from application console logs and APM telemetry.',
      'Clinical owner formally signs off on prescription units, allergy alerts, and discharge note templates.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Managed cloud infrastructure (AWS / GCP / DigitalOcean) with dedicated VPC subnets.',
      databaseIsolation: 'PostgreSQL instance with row-level security per clinic branch; database-per-hospital for multi-tenant deployments.',
      backupCadence: 'Automated daily encrypted snapshots with 30-day point-in-time recovery (PITR).',
      maintenanceDuties: 'Weekly security patch audits, monthly restore verification test, quarterly staff access review.',
    },
    risksAndAssumptions: [
      { risk: 'Clinical alert fatigue or incorrect dosage entry', mitigation: 'All alerts are strictly advisory; doctors retain final clinical authority and must confirm prescription details.', owner: 'Clinical Stakeholder' },
      { risk: 'Data leakage via shared clinic workstation', mitigation: 'Short session timeouts (15 mins) and quick one-click lock screen for consultation rooms.', owner: 'Zelvori Architecture' },
      { risk: 'Premature compliance claim regarding ABDM or DPDP Rules 2025', mitigation: 'Clear contractual disclosures that regulatory compliance requires clinical governance and legal review.', owner: 'Legal / Executive' },
    ],
    relatedServiceSlug: 'business-software',
    relatedServiceTitle: 'Custom Business Software & ERP',
    relatedStoryAnchor: 'healthcare',
    relatedStoryTitle: 'Doctor & Clinic Workflow Transformation Story',
    relatedPreviewSlug: 'business-software',
    relatedToolSlug: 'color-contrast',
  },

  // 2. Legal Practices
  {
    slug: 'legal',
    title: 'Law Firms & Court Matter Case Management',
    shortTitle: 'Lawyers & Legal Practices',
    category: 'Legal',
    tagline: 'Defensive case management, limitation deadline tracking, and privileged document boundaries.',
    overview:
      'A secure practice management architecture engineered for advocates, law firms, and legal teams. Establishes matter-level security walls, hearing docket reminders, and confidential document vaults without exposing privileged briefs to public AI tools.',
    operationalProblem:
      'Crucial court deadlines and limitation dates buried in unorganized email threads. Sensitive case briefs stored across scattered local drives. Administrative staff repeatedly ask lawyers for matter status, and client document sharing lacks an audit trail.',
    targetPersonas: [
      { role: 'Managing Partner', description: 'Requires oversight of firm billing, matter allocation, and ethical wall compliance.' },
      { role: 'Advocate / Litigation Associate', description: 'Needs court date diaries, hearing history, brief indexing, and limitation reminders.' },
      { role: 'Paralegal / Court Clerk', description: 'Tracks filing numbers, court listing status, and procedural document compliance.' },
      { role: 'Corporate / Retainer Client', description: 'Demands secure, confidential visibility into matter milestones and invoices.' },
    ],
    mainUseCases: [
      'Client onboarding and legal conflict-of-interest check logging',
      'Matter lifecycle tracking with hearing diary and court order attachments',
      'Limitation date reminders with automated multi-channel alerts',
      'Version-controlled privileged document storage with tamper-evident hashing',
      'Client portal with expiring secure download links and download auditing',
      'Time-entry recording, professional billing, and retainer trust accounting',
    ],
    coreModules: [
      'Firm Website & Private Client Intake Portal',
      'Matter Registry & Conflict-Check Logger',
      'Court Hearing Calendar & Limitation Alerts',
      'Privileged Document Vault with Cryptographic Integrity',
      'Time Recording & Retainer Invoice Engine',
      'Audited Client Communication & Notice Tracker',
    ],
    excludedFromV1: [
      'Autonomous legal advice or outcome predictions (software supports counsel, does not replace legal judgement)',
      'Direct real-time court registry database write access without verified e-courts APIs',
      'Public third-party AI processing of confidential client briefs',
    ],
    rolePermissions: [
      {
        role: 'Partner / Practice Head',
        accessLevel: 'Firm Partner',
        canView: ['All firm matters (unless ethical wall applied)', 'Financial billing ledgers', 'Audit logs'],
        canEdit: ['Matter assignments', 'Retainer invoices', 'Ethical wall restrictions'],
        restrictions: 'Cannot view matters marked with explicit partner conflict wall.',
      },
      {
        role: 'Associate Advocate',
        accessLevel: 'Assigned Matters Only',
        canView: ['Documents and diary for assigned matters only'],
        canEdit: ['Hearing notes', 'Draft briefs', 'Time entries'],
        restrictions: 'Cannot view unassigned firm matters or billing revenue totals.',
      },
      {
        role: 'Legal Clerk',
        accessLevel: 'Court Filing',
        canView: ['Filing checklists', 'Hearing dates', 'Public court orders'],
        canEdit: ['Court listing numbers', 'Hearing outcome dates'],
        restrictions: 'Cannot view privileged confidential client correspondence.',
      },
      {
        role: 'Client Representative',
        accessLevel: 'Client Portal',
        canView: ['Own matter milestones', 'Shared approved filings', 'Invoices'],
        canEdit: ['Uploaded client supporting evidence'],
        restrictions: 'Strictly isolated to client-owned matters via verified session token.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'User & Client Channels',
        boundary: 'Client Boundary',
        components: [
          { name: 'Associate Mobile Docket App', category: 'Mobile', description: 'Fast court-hall hearing updates.' },
          { name: 'Firm Desktop Management Portal', category: 'Web', description: 'Dense case brief and document management workspace.' },
        ],
        securityGate: 'No unencrypted local caching of privileged legal PDFs.',
      },
      {
        number: '02',
        name: 'Edge & Perimeter Controls',
        boundary: 'Edge Boundary',
        components: [
          { name: 'WAF & Ingress Shield', category: 'Security', description: 'Blocks malicious scans and brute-force login attempts.' },
        ],
        securityGate: 'Strict IP allowlisting options for firm office networks.',
      },
      {
        number: '03',
        name: 'Identity & Ethical Wall Gate',
        boundary: 'Zero-Trust Gate',
        components: [
          { name: 'MFA Enforcement Layer', category: 'Auth', description: 'Mandatory TOTP for all staff accounts.' },
          { name: 'Matter-Level Authorization Interceptor', category: 'Auth', description: 'Validates user assignment on every document query.' },
        ],
        securityGate: 'A user assigned to Matter A cannot retrieve, search, or guess URLs for Matter B.',
      },
      {
        number: '04',
        name: 'Matter & Document Domain Logic',
        boundary: 'Business Core',
        components: [
          { name: 'SHA-256 Document Hasher', category: 'Security', description: 'Generates tamper-evident hash for every version.' },
          { name: 'Limitation Deadline Scheduler', category: 'Logic', description: 'Calculates statutory limitation dates and alerts.' },
        ],
        securityGate: 'Immutable audit log recorded on every document download, view, or export.',
      },
      {
        number: '05',
        name: 'Secure Vault & Relational Store',
        boundary: 'Encrypted Storage',
        components: [
          { name: 'Encrypted PostgreSQL DB', category: 'Database', description: 'Stores matter metadata and time logs.' },
          { name: 'Private Document Store', category: 'Storage', description: 'Private S3 bucket with 15-minute presigned access URLs.' },
        ],
        securityGate: 'Customer-managed encryption keys (KMS) for document storage.',
      },
      {
        number: '06',
        name: 'Secure Notification Gateway',
        boundary: 'Integration',
        components: [
          { name: 'Limitation Alert Dispatcher', category: 'Messaging', description: 'Multi-channel email/SMS deadline reminders.' },
        ],
        securityGate: 'Excludes confidential client names from SMS subject text.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Public court orders, published legal articles, lawyer bios', handling: 'Publicly readable via web pages.' },
      { dataClass: 'Confidential', examples: 'Client billing summaries, consultation diary, court dates', handling: 'Restricted to firm staff.' },
      { dataClass: 'Highly Sensitive (Privileged)', examples: 'Client case briefs, witness statements, trade secrets', handling: 'Matter-isolated, AES-256 encrypted, tamper-evident hash logged.' },
    ],
    securityControls: [
      { control: 'Matter-Level Access Boundaries', protection: 'Ensures associates cannot inspect unauthorized client cases or conflicting matters.', status: 'Reference design', evidenceOrPrereq: 'Negative access-control test suite.' },
      { control: 'AI Data Leakage Restriction', protection: 'Guarantees privileged briefs are never sent to unapproved public AI tools.', status: 'Recommended control', evidenceOrPrereq: 'Strict contractual & API firewall allowlists.' },
      { control: 'Tamper-Evident Document Hashing', protection: 'Detects accidental or malicious alteration of legal evidence files.', status: 'Implemented in SDK', evidenceOrPrereq: 'SHA-256 checksum comparison on download.' },
      { control: 'Expiring Presigned Client Links', protection: 'Limits exposure window of downloaded legal briefs to 15 minutes.', status: 'Requires provider configuration', evidenceOrPrereq: 'S3 presigned URL generation with strict TTL.' },
    ],
    externalIntegrations: [
      { service: 'Email & Calendar Providers (Google / Outlook)', type: 'Productivity', integrationMethod: 'OAuth 2.0 with scoped calendar permissions', securityBoundary: 'Tokens stored in KMS; read-only access to hearing slots.' },
      { service: 'SMS / WhatsApp Urgent Alert Gateway', type: 'Alerts', integrationMethod: 'Encrypted webhook with IP allowlist', securityBoundary: 'Zero confidential matter text sent over telecom SMS.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Core Matter Registry & Hearing Diary',
        timeframeNote: 'Provides immediate relief for hearing dates and case indexing.',
        scope: ['Client intake and conflict-check logging', 'Matter registry with hearing diary', 'Document upload and versioning', 'Basic time-entry logging', 'Role-based advocate login with MFA'],
        architectureMaturity: 'Modular monolith, single PostgreSQL database, S3 document storage with presigned URLs.',
        notIncluded: ['Client self-service portal', 'Accounting software direct sync', 'Private AI document indexing'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Client Secure Portal & Billing Engine',
        timeframeNote: 'Expands client engagement and billing integrity.',
        scope: ['Client portal with expiring download links', 'Professional invoice generator with tax calculation', 'Limitation date alert automation', 'Conflict-of-interest search query index'],
        architectureMaturity: 'Background worker queue for scheduled alerts, download audit trail logger.',
        notIncluded: ['Local LLM document analysis', 'Multi-firm federation'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Private AI Brief Classification & Ethical Walls',
        timeframeNote: 'Enterprise deployment for multi-partner firms.',
        scope: ['Private locally-hosted LLM for brief summarization (zero external data sharing)', 'Multi-office ethical wall enforcement', 'Advanced court docket e-court API synchronization where available', 'Full ERP billing reconciliation'],
        architectureMaturity: 'Dedicated AI inference container in isolated VPC, read-replica reporting database.',
        notIncluded: ['Automated litigation verdict prediction'],
      },
    ],
    acceptanceCriteria: [
      'Associate on Matter A receives HTTP 403 Forbidden when attempting to retrieve documents belonging to Matter B (negative test).',
      'Cryptographic SHA-256 hash generated on upload matches file downloaded by client.',
      'Staff offboarding workflow immediately revokes all active session tokens and portal links in under 60 seconds.',
      'Hearing alerts fire correctly 24 hours and 2 hours prior to scheduled court call.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Dedicated cloud container or private virtual server in domestic region (e.g. Mumbai, AWS ap-south-1).',
      databaseIsolation: 'PostgreSQL schema-per-firm or dedicated database with row-level matter boundaries.',
      backupCadence: 'Automated daily encrypted database backups with 30-day retention and weekly cold archive copy.',
      maintenanceDuties: 'Quarterly access privilege audit, monthly backup restore test, annual disaster recovery drill.',
    },
    risksAndAssumptions: [
      { risk: 'Accidental client matter conflict or ethical wall breach', mitigation: 'Automated conflict-check verification prompt before new matter creation.', owner: 'Firm Administrator' },
      { risk: 'Statutory deadline missed due to incorrect date entry', mitigation: 'Limitation dates require two-person confirmation (advocate and clerk).', owner: 'Legal Team' },
      { risk: 'Leaking privileged drafts to public web search engines', mitigation: 'No public indexing of document URLs; robots.txt disallow; strict presigned URL tokens.', owner: 'Zelvori Architecture' },
    ],
    relatedServiceSlug: 'custom-software',
    relatedServiceTitle: 'Custom Software & Systems Engineering',
    relatedStoryAnchor: 'legal',
    relatedStoryTitle: 'Law Practice Workflow Transformation Story',
    relatedPreviewSlug: 'custom-software',
    relatedToolSlug: 'json-formatter',
  },

  // 3. Business Operations (CRM, ERP & HRMS)
  {
    slug: 'business-operations',
    title: 'CRM, ERP & Business Operations Platform',
    shortTitle: 'CRM, ERP & Operations',
    category: 'Enterprise Operations',
    tagline: 'Unify sales pipelines, quotations, approvals, inventory, and workforce into one single source of truth.',
    overview:
      'A bespoke business operations platform engineered for growing companies, trading firms, and multi-department enterprises. Replaces disconnected spreadsheets with deterministic state machines for quotations, purchase orders, inventory, and payroll.',
    operationalProblem:
      'Sales uses one spreadsheet, procurement uses another, and accounts reconciles invoices manually. Customer records are duplicated across four teams, approval limits are bypassed in email chains, and departing sales reps export client lists without authorization.',
    targetPersonas: [
      { role: 'Managing Director / CEO', description: 'Requires real-time executive dashboard of cash flow, pipeline, and inventory margin.' },
      { role: 'Sales & Business Development Lead', description: 'Needs clean pipeline tracking, quick quote creation, and client interaction history.' },
      { role: 'Operations & Inventory Manager', description: 'Tracks purchase orders, goods receipts, and minimum stock alerts.' },
      { role: 'Finance & HR Controller', description: 'Enforces purchase approval limits, expense verifications, and payroll records.' },
    ],
    mainUseCases: [
      'Canonical customer and organization registry with deduplication',
      'Visual sales pipeline with stage probabilities and quotation generators',
      'Two-step approval state machines for purchase orders and expense claims',
      'Inventory tracking with batch numbers, SKU tracking, and reorder warnings',
      'Staff directory, leave approvals, attendance logging, and payroll records',
      'Granular data export controls with manager sign-off to prevent data theft',
    ],
    coreModules: [
      'Customer & Organization Master Registry',
      'Sales Pipeline & Quotation Builder',
      'Purchase Orders & Procurement Approval Engine',
      'Inventory, Warehouses & Stock Movement Ledger',
      'Workforce Directory, Leave & Payroll Module',
      'Executive Analytics & Financial Reconciliation Dashboard',
    ],
    excludedFromV1: [
      'Multi-currency global tax accounting engine (rely on integrated accounting like Tally/QuickBooks)',
      'Autonomous financial trading or automated bank wire release without dual authorization',
      'Speculative AI demand forecasting without historical transaction records',
    ],
    rolePermissions: [
      {
        role: 'Sales Representative',
        accessLevel: 'Sales Team',
        canView: ['Own assigned leads', 'Product price list', 'Own draft quotations'],
        canEdit: ['Lead activity notes', 'Draft quotations within standard discount limit'],
        restrictions: 'Cannot view procurement costs, margins, or bulk-export client databases.',
      },
      {
        role: 'Sales Manager',
        accessLevel: 'Sales Management',
        canView: ['Team pipeline', 'All quotations', 'Customer histories'],
        canEdit: ['Quotation discount approvals', 'Lead re-assignments'],
        restrictions: 'Cannot approve purchase orders or modify supplier invoices.',
      },
      {
        role: 'Procurement Officer',
        accessLevel: 'Purchasing',
        canView: ['Inventory levels', 'Approved supplier price lists', 'Purchase orders'],
        canEdit: ['Purchase order drafts', 'Goods received notes (GRN)'],
        restrictions: 'Cannot approve purchase orders created by self (segregation of duties).',
      },
      {
        role: 'Finance Approver',
        accessLevel: 'Financial Control',
        canView: ['Company financial ledgers', 'All purchase orders', 'Payroll summaries'],
        canEdit: ['Payment authorization flags', 'Vendor ledger reconciliations'],
        restrictions: 'Actions permanently logged in immutable financial audit trail.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Enterprise Client Channels',
        boundary: 'Client Boundary',
        components: [
          { name: 'Responsive Web ERP Workspace', category: 'Web', description: 'Fast table-dense UI with CSV/Excel exports.' },
          { name: 'Warehouse Mobile Scanner Web App', category: 'Mobile', description: 'Barcode & QR stock check-in interface.' },
        ],
        securityGate: 'Session timeout on inactivity; secure cookies with SameSite=Lax and HttpOnly.',
      },
      {
        number: '02',
        name: 'Perimeter & Ingress Security',
        boundary: 'Edge Boundary',
        components: [
          { name: 'Cloudflare / AWS WAF', category: 'Perimeter', description: 'IP allowlists for office networks and rate limiting.' },
        ],
        securityGate: 'Strict request payload size limits to block file-upload buffer overflows.',
      },
      {
        number: '03',
        name: 'Identity & Multi-Tenancy Boundary',
        boundary: 'Auth Gate',
        components: [
          { name: 'OIDC / SAML SSO Integration', category: 'Auth', description: 'Enterprise single sign-on with Google Workspace or Azure AD.' },
          { name: 'Tenant Scope Context Provider', category: 'Auth', description: 'Enforces company and department scopes on every query.' },
        ],
        securityGate: 'Mandatory MFA on all manager and administrator accounts.',
      },
      {
        number: '04',
        name: 'Business Operations Domain Engines',
        boundary: 'Application Logic',
        components: [
          { name: 'Deterministic Approval State Machine', category: 'Logic', description: 'Draft → Pending Manager → Pending Finance → Approved.' },
          { name: 'Inventory Movement Transaction Ledger', category: 'Logic', description: 'Atomic stock decrement with row-level database locks.' },
        ],
        securityGate: 'Segregation of duties: PO creator cannot execute PO approval.',
      },
      {
        number: '05',
        name: 'Relational Store & Data Services',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'ACID transactional guarantees for financial records.' },
          { name: 'Redis Cache & Queue Broker', category: 'Cache/Queue', description: 'Asynchronous report compilation and webhook dispatch.' },
        ],
        securityGate: 'Private network placement; zero public internet ports open to database.',
      },
      {
        number: '06',
        name: 'External Enterprise Integrations',
        boundary: 'Integration Gate',
        components: [
          { name: 'Accounting System Sync (Tally/Zoho/Xero)', category: 'Finance', description: 'Periodic journal voucher synchronization.' },
          { name: 'Payment & E-Signature Gateway', category: 'Signatures', description: 'Digitally signed customer quotation acceptance.' },
        ],
        securityGate: 'Scoped API credentials with automated secret rotation.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Public product specifications, marketing pricing tiers', handling: 'Publicly readable via website.' },
      { dataClass: 'Confidential', examples: 'Customer contact history, quotations, sales pipeline', handling: 'Role-based access control; no unauthorized bulk exports.' },
      { dataClass: 'Highly Sensitive', examples: 'Gross profit margins, supplier purchase costs, payroll', handling: 'Restricted to executive and finance roles; KMS encrypted at rest.' },
    ],
    securityControls: [
      { control: 'Segregation of Duties Enforcement', protection: 'Prevents fraudulent self-approval of procurement orders and expense claims.', status: 'Reference design', evidenceOrPrereq: 'Enforced via state machine transition guards.' },
      { control: 'Bulk Export Throttling & Auditing', protection: 'Prevents rogue employees from downloading the entire client database.', status: 'Recommended control', evidenceOrPrereq: 'Manager approval required for CSV exports over 100 records.' },
      { control: 'Database-Level Concurrency Locks', protection: 'Prevents inventory race conditions during simultaneous order approvals.', status: 'Implemented in SDK', evidenceOrPrereq: 'SELECT ... FOR UPDATE row-level locking pattern.' },
      { control: 'Append-Only Financial Event Log', protection: 'Provides tamper-evident record of all price, quotation, and approval changes.', status: 'Reference design', evidenceOrPrereq: 'Audit table with actor ID, timestamp, and previous values.' },
    ],
    externalIntegrations: [
      { service: 'Accounting Software (Tally / Zoho Books / QuickBooks)', type: 'Finance', integrationMethod: 'REST API / XML connector with retry queue', securityBoundary: 'Two-way reconciliation ledger with idempotency keys.' },
      { service: 'Transactional Email / Document Signing', type: 'Contracts', integrationMethod: 'Webhook-driven e-signature provider', securityBoundary: 'Validates webhook signature before marking quotation as approved.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Core Customer CRM & Quotation Engine',
        timeframeNote: 'Replaces scattered spreadsheets for sales and quotes.',
        scope: ['Customer & contact master registry', 'Sales pipeline with stage tracking', 'Quotation generator with PDF export', 'Follow-up task assignments', 'User role-based access control'],
        architectureMaturity: 'Modular monolith, single PostgreSQL database, automated nightly backup.',
        notIncluded: ['Full inventory warehouse tracking', 'Automated payroll processing', 'Accounting API sync'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Procurement, Stock & Approvals',
        timeframeNote: 'Connects sales directly to inventory and purchasing.',
        scope: ['Purchase order creation and approval workflows', 'Inventory stock tracking across 2 warehouses', 'Goods received notes (GRN) verification', 'Accounting software CSV / API export'],
        architectureMaturity: 'Background Redis queue for heavy PDF generation and reporting tasks.',
        notIncluded: ['Multi-currency tax consolidation', 'Machine learning demand forecasting'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Integrated HRMS, Payroll & BI Dashboards',
        timeframeNote: 'Full enterprise operations suite.',
        scope: ['Employee attendance and leave management', 'Monthly payroll calculation with salary slip generation', 'Executive KPI dashboards and gross-margin analytics', 'Custom role-permission builder'],
        architectureMaturity: 'Read-replica database for executive analytics, disaster recovery hot-standby.',
        notIncluded: ['Automated banking disbursement without human finance token approval'],
      },
    ],
    acceptanceCriteria: [
      'Sales rep cannot view gross profit margins or supplier costs on quotation screens (negative test).',
      'Simultaneous purchase approvals against the same stock item correctly update inventory without over-allocation.',
      'All customer data exports generate an administrative audit log event containing user ID, IP, and row count.',
      'Quotation approval state transitions adhere strictly to policy limits ($5,000 threshold requires manager sign-off).',
    ],
    deploymentAndOps: {
      recommendedHost: 'Dedicated cloud virtual instances (AWS EC2 / GCP Compute Engine) or managed Kubernetes.',
      databaseIsolation: 'PostgreSQL instance per company or robust tenant_id schema with row-level security.',
      backupCadence: 'Hourly incremental WAL archive + daily full snapshots retained for 90 days.',
      maintenanceDuties: 'Monthly dependency vulnerability updates, bi-weekly audit log review, quarterly DR rehearsal.',
    },
    risksAndAssumptions: [
      { risk: 'Staff resistance to disciplined data entry', mitigation: 'Intuitive UI, keyboard shortcuts, and automated prefilling from existing records.', owner: 'Client Project Lead' },
      { risk: 'Data migration corruption from legacy spreadsheets', mitigation: 'Synthetic migration rehearsal with validation scripts prior to production cutover.', owner: 'Zelvori Architecture' },
      { risk: 'Over-engineering when standard SaaS (Zoho/Odoo) would suffice', mitigation: 'Transparent buy-vs-build discovery workshop before committing to custom build.', owner: 'Executive Discovery' },
    ],
    relatedServiceSlug: 'business-software',
    relatedServiceTitle: 'Custom Business Software & ERP Systems',
    relatedStoryAnchor: 'growing-business',
    relatedStoryTitle: 'Growing Company Operations Transformation Story',
    relatedPreviewSlug: 'business-software',
    relatedToolSlug: 'json-formatter',
  },

  // 4. Amazon/Flipkart-Style Marketplace
  {
    slug: 'marketplace',
    title: 'Multi-Seller E-Commerce Marketplace',
    shortTitle: 'Multi-Seller Marketplace',
    category: 'Commerce & Marketplaces',
    tagline: 'Multi-vendor catalog, atomic stock reservation, hosted checkout, and seller payout ledgers.',
    overview:
      'A multi-vendor e-commerce marketplace architecture inspired by modern platforms. Coordinates independent buyers, vetted merchant sellers, order lifecycles, and commission payouts with atomic inventory concurrency locks and PCI-compliant checkout handoffs.',
    operationalProblem:
      'Coordinating dozens of independent sellers without overselling shared stock, exposing buyer payment secrets, or suffering commission reconciliation disputes. Building an Amazon-like architecture requires phased engineering—not claiming Day-1 Amazon global scale.',
    targetPersonas: [
      { role: 'Marketplace Operator / Admin', description: 'Vets seller onboarding, sets commission rates, and arbitrates disputes.' },
      { role: 'Independent Merchant / Seller', description: 'Uploads product listings, manages stock, and prints fulfillment labels.' },
      { role: 'End Buyer / Consumer', description: 'Discovers products, compares sellers, checks out securely, and tracks orders.' },
      { role: 'Finance / Settlement Officer', description: 'Reconciles payment gateway fees, vendor commissions, and refund reversals.' },
    ],
    mainUseCases: [
      'Multi-seller catalog with faceted search, categories, and reviews',
      'Unified buyer cart containing items from multiple distinct sellers',
      'Hosted payment gateway checkout with zero raw card data collection',
      'Atomic stock reservation locks during payment authorization window',
      'Independent seller management console for orders and inventory',
      'Commission ledger, payout calculations, and refund debit workflows',
    ],
    coreModules: [
      'Buyer Storefront, Search & Product Discovery',
      'Unified Cart & Atomic Stock Reservation Engine',
      'Hosted Payment Gateway Hand-Off & Webhook Verifier',
      'Merchant Seller Console & Inventory Manager',
      'Order Orchestration State Machine (Placed → Shipped → Delivered)',
      'Commission Ledger & Merchant Payout Reconciler',
    ],
    excludedFromV1: [
      'Amazon-scale automated robotic warehouse robotics or air logistics network',
      'Autonomous algorithm-driven dynamic surge pricing without seller consent',
      'Cross-border customs duty automated international clearance',
    ],
    rolePermissions: [
      {
        role: 'Buyer',
        accessLevel: 'Consumer',
        canView: ['Published product listings', 'Own cart', 'Own order history'],
        canEdit: ['Own profile', 'Shipping address', 'Reviews for purchased items'],
        restrictions: 'Cannot view other buyers’ orders or access seller inventory consoles.',
      },
      {
        role: 'Merchant Seller',
        accessLevel: 'Seller Console',
        canView: ['Own product listings', 'Own assigned orders', 'Own payout statements'],
        canEdit: ['Own product prices', 'Own stock counts', 'Order fulfillment status'],
        restrictions: 'Cannot view competitor seller sales, customer full payment credentials, or platform settings.',
      },
      {
        role: 'Marketplace Moderator',
        accessLevel: 'Trust & Safety',
        canView: ['Seller onboarding applications', 'Flagged reviews', 'Reported listings'],
        canEdit: ['Listing suspension flags', 'Seller verification status'],
        restrictions: 'Cannot modify financial commission percentages or release bank payouts.',
      },
      {
        role: 'Platform Super Administrator',
        accessLevel: 'Platform Owner',
        canView: ['All marketplace transactions', 'Platform revenue metrics', 'Audit trails'],
        canEdit: ['Category taxonomy', 'Commission percentage rules', 'Payment gateway settings'],
        restrictions: 'Administrative actions protected by mandatory hardware MFA.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Omnichannel Buyer & Seller Frontends',
        boundary: 'Client Boundary',
        components: [
          { name: 'Buyer Web & Mobile Storefront', category: 'Web', description: 'Next.js App Router with ISR catalog caching.' },
          { name: 'Seller Operations Dashboard', category: 'Web', description: 'Merchant portal for stock, fulfillment, and payouts.' },
        ],
        securityGate: 'No raw card details or provider API secret keys in client bundles.',
      },
      {
        number: '02',
        name: 'Edge Caching & Threat Shield',
        boundary: 'Edge Boundary',
        components: [
          { name: 'Cloudflare / CloudFront CDN', category: 'Perimeter', description: 'Global edge caching for product images and catalog pages.' },
          { name: 'Rate Limiting & Bot Detection', category: 'Security', description: 'Throttles price scrapers and brute-force checkout bots.' },
        ],
        securityGate: 'DDoS mitigation and bot throttling on cart and checkout routes.',
      },
      {
        number: '03',
        name: 'Identity & Authentication Gateway',
        boundary: 'Auth Gate',
        components: [
          { name: 'Buyer & Seller Auth Service', category: 'Auth', description: 'Social login for buyers; strict MFA for sellers and admins.' },
        ],
        securityGate: 'Seller accounts require email/phone OTP verification before listing products.',
      },
      {
        number: '04',
        name: 'Marketplace Domain & Orchestration Core',
        boundary: 'Application Core',
        components: [
          { name: 'Order State Machine Engine', category: 'Logic', description: 'Placed → Authorized → Processing → Shipped → Delivered.' },
          { name: 'Atomic Stock Reservation Locker', category: 'Logic', description: 'Database row lock during 10-minute checkout window.' },
          { name: 'Commission & Settlement Ledger', category: 'Finance', description: 'Double-entry ledger for platform fees and vendor payouts.' },
        ],
        securityGate: 'Idempotency key enforcement on all order creation commands.',
      },
      {
        number: '05',
        name: 'Data Stores & Cache Services',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Orders, inventory, ledger, and customer data.' },
          { name: 'Redis Cache & Session Store', category: 'Cache', description: 'Active shopping carts, flash-sale stock counters.' },
        ],
        securityGate: 'Database placed in private subnet with TLS encrypted connections.',
      },
      {
        number: '06',
        name: 'External Provider Gateways',
        boundary: 'Integration Gate',
        components: [
          { name: 'Hosted Payment Gateway (Razorpay/Stripe)', category: 'Payments', description: 'PCI-DSS certified hosted payment modal.' },
          { name: 'Shipping Aggregator API (Shiprocket/Delhivery)', category: 'Logistics', description: 'Tracking numbers and label generation.' },
        ],
        securityGate: 'Cryptographic HMAC signature verification on all payment webhooks.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Product titles, descriptions, public prices, reviews', handling: 'Publicly readable, heavily cached at edge.' },
      { dataClass: 'Confidential', examples: 'Buyer addresses, seller phone numbers, order history', handling: 'Restricted by tenant/order ownership.' },
      { dataClass: 'Highly Sensitive', examples: 'Seller bank account details, payout ledgers, tax IDs', handling: 'KMS encrypted at rest, audited access.' },
    ],
    securityControls: [
      { control: 'Hosted Payment Checkout Hand-Off', protection: 'Minimizes PCI DSS scope by ensuring raw card data never touches server code.', status: 'Reference design', evidenceOrPrereq: 'Verified Razorpay/Stripe checkout handoff integration.' },
      { control: 'Atomic Stock Concurrency Locks', protection: 'Eliminates race conditions where two buyers purchase the last stock item simultaneously.', status: 'Implemented in SDK', evidenceOrPrereq: 'Database row locks with 10-minute TTL expiry.' },
      { control: 'HMAC Webhook Replay Protection', protection: 'Prevents fraudulent order activation via spoofed payment gateway callbacks.', status: 'Recommended control', evidenceOrPrereq: 'Signature check + timestamp nonce validation.' },
      { control: 'Seller Catalog Isolation', protection: 'Prevents Seller A from viewing or modifying Seller B’s pricing or stock.', status: 'Reference design', evidenceOrPrereq: 'Negative access control test on merchant endpoints.' },
    ],
    externalIntegrations: [
      { service: 'Payment Gateway (Razorpay / Stripe)', type: 'Payments', integrationMethod: 'Hosted checkout + HTTPS webhook receiver with HMAC signature', securityBoundary: 'Zero card details stored; webhook signature verified before order status update.' },
      { service: 'Shipping Aggregator (Shiprocket / Delhivery)', type: 'Logistics', integrationMethod: 'REST API via HTTPS with API token', securityBoundary: 'Generates shipping labels; receives delivery status webhooks.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Core Multi-Seller Marketplace',
        timeframeNote: 'Provides a solid, testable multi-vendor launch platform.',
        scope: ['Buyer catalog with category navigation', 'Unified shopping cart', 'Hosted payment checkout integration', 'Seller portal for product listings and order fulfillment', 'Basic admin commission deduction'],
        architectureMaturity: 'Modular monolith, single PostgreSQL database, Redis for cart sessions.',
        notIncluded: ['Automated multi-split payment payouts', 'Seller advertisement auctions', 'Automated dispute arbitration'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Commission Ledgers & Shipping Automation',
        timeframeNote: 'Scales operations as merchant volume grows.',
        scope: ['Double-entry commission and settlement ledger', 'Automated shipping aggregator label generation', 'Buyer review system with moderation queue', 'Discount coupon codes with usage limits'],
        architectureMaturity: 'Background worker queues for order status notifications and PDF invoices.',
        notIncluded: ['Global multi-currency taxation', 'Real-time warehouse robotics integration'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Advanced Marketplace Platform',
        timeframeNote: 'Enterprise-scale platform for high transaction volume.',
        scope: ['Automated vendor payout disbursements via bank APIs', 'Multi-warehouse stock routing', 'Seller performance scorecards and automated tiering', 'Machine learning search ranking and recommendation feed'],
        architectureMaturity: 'Elasticsearch / OpenSearch cluster for fast product indexing, database read-replicas.',
        notIncluded: ['Global air freight logistics tracking network'],
      },
    ],
    acceptanceCriteria: [
      'Two simultaneous checkout attempts for a single remaining stock item result in exactly one successful purchase and one polite out-of-stock notification.',
      'Spoofed payment webhooks with invalid HMAC signatures are rejected with HTTP 400 and logged as security events.',
      'Seller A receives HTTP 403 when requesting order data for items sold by Seller B.',
      'Commission deduction accurately calculates platform fee down to the exact paise before recording vendor payable.',
    ],
    deploymentAndOps: {
      recommendedHost: 'High-availability cloud environment (AWS ECS/EKS or Google Cloud Run) with CDN caching.',
      databaseIsolation: 'PostgreSQL with multi-tenant row-level security; dedicated schema for financial settlement ledger.',
      backupCadence: 'Hourly WAL database backups + daily snapshots; multi-AZ database replication.',
      maintenanceDuties: 'Weekly order settlement reconciliation audit, monthly dependency vulnerability patching, quarterly load test.',
    },
    risksAndAssumptions: [
      { risk: 'Merchant seller counterfeit goods or fraudulent listing', mitigation: 'Mandatory administrative seller review and product moderation queue prior to publication.', owner: 'Marketplace Operator' },
      { risk: 'Customer chargeback dispute on unfulfilled orders', mitigation: 'Funds held in escrow settlement state until proof-of-delivery webhook confirmed.', owner: 'Finance Team' },
      { risk: 'Overpromising Day-1 Amazon-level scale without budget', mitigation: 'Explicit commercial scope bounding capacity to realistic target traffic (e.g., 500 orders/day initially).', owner: 'Zelvori Architecture' },
    ],
    relatedServiceSlug: 'ecommerce',
    relatedServiceTitle: 'E-Commerce Website & Marketplace Development',
    relatedStoryAnchor: 'ecommerce',
    relatedStoryTitle: 'D2C & Marketplace Platform Transformation Story',
    relatedPreviewSlug: 'ecommerce',
    relatedToolSlug: 'css-generator',
  },

  // 5. Zomato-Style Food Ordering & Delivery
  {
    slug: 'food-delivery',
    title: 'Food Ordering & Delivery Orchestration',
    shortTitle: 'Food Ordering & Delivery',
    category: 'Commerce & Marketplaces',
    tagline: 'Multi-party order state machine, kitchen console, delivery dispatch, and location privacy.',
    overview:
      'A multi-party food delivery orchestration blueprint coordinating diners, restaurant kitchens, and delivery riders. Features deterministic order state transitions, kitchen display consoles, radius-based dispatch, and privacy-preserving location tracking.',
    operationalProblem:
      'Restaurant kitchens miss new orders during peak dinner rushes, riders receive late pickup dispatches, customers lack visibility into preparation stages, and driver location history is carelessly leaked or permanently hoarded.',
    targetPersonas: [
      { role: 'Hungry Customer', description: 'Discovers nearby restaurants, browses menus, checks out, and tracks delivery progress.' },
      { role: 'Restaurant Kitchen Manager', description: 'Accepts orders on kitchen tablet, updates preparation times, and marks items ready.' },
      { role: 'Delivery Partner / Rider', description: 'Accepts delivery requests, navigates to restaurant, picks up order, and delivers with OTP.' },
      { role: 'Operations & Dispatch Controller', description: 'Monitors regional fleet capacity, resolves stuck orders, and manages cancellations.' },
    ],
    mainUseCases: [
      'Customer restaurant discovery with cuisine, dietary tags, and delivery radius',
      'Interactive menu ordering with item customizations (toppings, spice level)',
      'Kitchen tablet display console with audio alert and preparation timers',
      'Deterministic order state machine (Placed → Accepted → Preparing → Ready → Picked Up → Delivered)',
      'Delivery rider assignment based on geographic radius and availability',
      'Customer delivery confirmation via single-use verification PIN / OTP',
    ],
    coreModules: [
      'Customer Ordering Web & Mobile Web Interface',
      'Restaurant Merchant Kitchen Display Console',
      'Delivery Rider Companion Portal',
      'Real-Time Order State Machine Orchestrator',
      'Geographic Zone & Radius Dispatch Manager',
      'Operational Support & Cancellation Settlement Console',
    ],
    excludedFromV1: [
      'Fleet-wide real-time turn-by-turn navigation mapping (rely on Google Maps / device navigation app handoff)',
      'Dynamic multi-restaurant bundled route optimization for single riders',
      'Autonomous drone delivery integration without regulatory clearance',
    ],
    rolePermissions: [
      {
        role: 'Customer',
        accessLevel: 'Buyer',
        canView: ['Restaurant menus', 'Active order preparation stage', 'Rider first name'],
        canEdit: ['Cart selections', 'Delivery address', 'Delivery notes'],
        restrictions: 'Cannot view kitchen queue or access rider personal phone numbers directly.',
      },
      {
        role: 'Restaurant Kitchen Staff',
        accessLevel: 'Kitchen Display',
        canView: ['Incoming active orders for own outlet', 'Special cooking instructions'],
        canEdit: ['Order acceptance', 'Preparation time estimation', 'Mark order ready', 'Item 86/stockout toggle'],
        restrictions: 'Cannot view customer credit card details or other restaurants’ orders.',
      },
      {
        role: 'Delivery Rider',
        accessLevel: 'Delivery Partner',
        canView: ['Assigned order pickup address', 'Customer delivery street', 'Customer order PIN'],
        canEdit: ['Accept/reject dispatch', 'Mark order picked up', 'Enter delivery verification PIN'],
        restrictions: 'Access to customer address revoked immediately upon order delivery completion.',
      },
      {
        role: 'Dispatch Supervisor',
        accessLevel: 'Operations Hub',
        canView: ['Active order queue across zone', 'Rider assignment status'],
        canEdit: ['Manual rider re-assignment', 'Emergency order cancellation approval'],
        restrictions: 'All cancellations and manual interventions logged in operational audit trail.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Three-Party Frontends',
        boundary: 'Client Boundary',
        components: [
          { name: 'Customer Ordering Web Portal', category: 'Web', description: 'Fast mobile-first food menu and cart interface.' },
          { name: 'Kitchen Tablet PWA', category: 'Web', description: 'High-contrast kitchen display with audible alerts.' },
          { name: 'Rider Mobile Web View', category: 'Mobile', description: 'Minimalist dispatch interface with Google Maps deep link.' },
        ],
        securityGate: 'No persistent background GPS polling when rider is off-duty.',
      },
      {
        number: '02',
        name: 'Edge Gateway & WebSockets',
        boundary: 'Perimeter Boundary',
        components: [
          { name: 'API Gateway with WebSockets / SSE', category: 'Streaming', description: 'Real-time order stage updates to kitchen and customer.' },
        ],
        securityGate: 'Authentication handshake required before WebSocket channel subscription.',
      },
      {
        number: '03',
        name: 'Identity & Outpost Security',
        boundary: 'Auth Gate',
        components: [
          { name: 'Phone OTP / Auth Service', category: 'Auth', description: 'Fast phone login for customers and delivery riders.' },
        ],
        securityGate: 'SMS rate limiting to prevent OTP flooding attacks.',
      },
      {
        number: '04',
        name: 'Order State Machine Orchestrator',
        boundary: 'Application Core',
        components: [
          { name: 'Deterministic Order State Machine', category: 'Logic', description: 'Strict validated sequence: Placed → Accepted → Ready → Picked Up → Delivered.' },
          { name: 'Zone Dispatch Allocator', category: 'Logic', description: 'Radius matching for available riders within delivery geofence.' },
        ],
        securityGate: 'Idempotent order placement preventing accidental double-charging.',
      },
      {
        number: '05',
        name: 'Data & Ephemeral State Stores',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Stores menus, merchant settings, financial settlements.' },
          { name: 'Redis In-Memory Key-Value', category: 'Cache', description: 'Manages live active order states and rider availability.' },
        ],
        securityGate: 'Location history purged after delivery completion (privacy minimisation).',
      },
      {
        number: '06',
        name: 'External Providers',
        boundary: 'Integration Gate',
        components: [
          { name: 'Hosted Payment Modal', category: 'Payments', description: 'Razorpay / Stripe hosted checkout handoff.' },
          { name: 'SMS / Push Notification Service', category: 'Messaging', description: 'Transactional order alerts.' },
        ],
        securityGate: 'Webhook HMAC signature verification on payment capture.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Restaurant menus, dish photos, operating hours, prices', handling: 'Publicly readable via CDN caching.' },
      { dataClass: 'Confidential', examples: 'Customer delivery address, phone, merchant bank details', handling: 'Restricted strictly to active order participants.' },
      { dataClass: 'Ephemeral / Minimized', examples: 'Live rider coordinates during delivery trip', handling: 'Retained only for active trip duration; purged upon delivery.' },
    ],
    securityControls: [
      { control: 'Location Privacy Minimization', protection: 'Ensures rider GPS coordinates are never retained permanently or weaponized.', status: 'Reference design', evidenceOrPrereq: 'Automated database purge of GPS breadcrumbs post-delivery.' },
      { control: 'Single-Use Delivery Verification PIN', protection: 'Guarantees food is handed over to the authentic customer before completing order.', status: 'Implemented in SDK', evidenceOrPrereq: '4-digit OTP validated on rider submission.' },
      { control: 'Order State Machine Guards', protection: 'Prevents skipping preparation stages (cannot mark delivered before picked up).', status: 'Reference design', evidenceOrPrereq: 'Finite state machine transition enforcement.' },
      { control: 'Hosted Payment Gateway Isolation', protection: 'Ensures customer card details never touch food platform servers.', status: 'Recommended control', evidenceOrPrereq: 'Hosted checkout modal with HMAC callback verification.' },
    ],
    externalIntegrations: [
      { service: 'Payment Gateway (Razorpay / Stripe)', type: 'Payments', integrationMethod: 'Hosted checkout + webhook with HMAC verification', securityBoundary: 'Zero raw card data collected; webhook verified before order is sent to kitchen.' },
      { service: 'Push Notifications (Web Push / FCM)', type: 'Notifications', integrationMethod: 'Encrypted push payload', securityBoundary: 'Contains order status; excludes confidential customer notes.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Single-Zone Food Ordering & Kitchen Console',
        timeframeNote: 'Scoped for one city or bounded delivery hub.',
        scope: ['Customer mobile web menu and cart', 'Hosted payment checkout', 'Restaurant kitchen display console with audio alert', 'Manual rider dispatch assignment', 'Customer status tracking via web polling'],
        architectureMaturity: 'Modular monolith, PostgreSQL database, Redis for active order stages.',
        notIncluded: ['Automated multi-rider GPS clustering', 'Dynamic surge delivery fee pricing', 'Native mobile app store apps'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Radius Dispatch & Real-Time WebSockets',
        timeframeNote: 'Improves kitchen throughput and rider pickup speed.',
        scope: ['WebSocket live stage updates for kitchen and customer', 'Automated rider radius dispatching', 'Customer delivery PIN verification', 'Merchant daily payout summary report'],
        architectureMaturity: 'WebSocket gateway, background queue for SMS dispatch and PDF receipts.',
        notIncluded: ['Multi-city regional cluster databases', 'AI delivery time prediction'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Multi-City Enterprise Delivery Platform',
        timeframeNote: 'High transaction volume platform with dedicated operations staff.',
        scope: ['Multi-city delivery zone management', 'Dynamic traffic-aware delivery fee adjustments', 'Automated merchant banking payouts via API', 'Advanced customer dispute escalation console'],
        architectureMaturity: 'Read-replicas for reporting, microservice separation for dispatch if load demands.',
        notIncluded: ['Autonomous delivery vehicles or drone integration'],
      },
    ],
    acceptanceCriteria: [
      'Kitchen tablet emits audio alert and updates incoming order queue within 2 seconds of payment capture.',
      'Rider cannot mark an order as delivered without entering the customer’s verified 4-digit PIN.',
      'Rider GPS coordinates are automatically wiped from active memory 60 minutes after delivery completion.',
      'Order cancellation after kitchen acceptance requires explicit manager authorization and records refund reason.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Cloud container hosting with WebSocket support (AWS App Runner / GCP Cloud Run / Render).',
      databaseIsolation: 'PostgreSQL instance with outlet-level schema separation; Redis for active order queues.',
      backupCadence: 'Continuous WAL archiving + daily full database backups.',
      maintenanceDuties: 'Weekly order settlement reconciliation, monthly load testing on peak dinner hour scenarios.',
    },
    risksAndAssumptions: [
      { risk: 'Restaurant staff misses tablet order during rush', mitigation: 'Persistent audible ringtone on kitchen console until staff physically taps "Accept Order".', owner: 'Restaurant Manager' },
      { risk: 'Customer claims food never arrived despite rider assertion', mitigation: 'Mandatory single-use PIN handover eliminates delivery disputes.', owner: 'Zelvori Architecture' },
      { risk: 'Overclaiming Uber/Zomato global scale on a low-budget project', mitigation: 'Bound first release to one city/hub with realistic concurrency expectations.', owner: 'Executive Discovery' },
    ],
    relatedServiceSlug: 'mobile-apps',
    relatedServiceTitle: 'Android & iOS Mobile Application Development',
    relatedStoryAnchor: 'ecommerce',
    relatedStoryTitle: 'D2C & Delivery Platform Transformation Story',
    relatedPreviewSlug: 'mobile-apps',
    relatedToolSlug: 'social-preview',
  },

  // 6. D2C Brands & Fashion E-Commerce
  {
    slug: 'ecommerce',
    title: 'D2C Brands, Retail & Custom Storefronts',
    shortTitle: 'D2C Brands & Storefronts',
    category: 'Commerce & Marketplaces',
    tagline: 'High-performance brand storytelling, variant selectors, hosted checkout, and shipping integration.',
    overview:
      'A custom digital storefront architecture engineered for Direct-to-Consumer (D2C) brands and retail labels. Combines bespoke visual storytelling, interactive variant selectors, and fast Core Web Vitals with secure hosted payment handoffs and shipping automation.',
    operationalProblem:
      'Standard template storefronts (Shopify/WooCommerce) slow down with dozens of third-party plugins, suffer sluggish mobile load times, and restrict custom product bundle builders or bespoke post-purchase workflows.',
    targetPersonas: [
      { role: 'D2C Brand Founder / Creative Director', description: 'Demands flawless brand aesthetic, fast mobile loading, and custom bundle builders.' },
      { role: 'E-Commerce Marketing Manager', description: 'Requires high-converting landing pages, promo code controls, and analytics integration.' },
      { role: 'Warehouse Fulfillment Lead', description: 'Needs clean order packing slips, stock variant decrements, and shipping label integration.' },
      { role: 'Online Consumer', description: 'Wants instant page navigation, seamless variant selection, and transparent tracking.' },
    ],
    mainUseCases: [
      'High-performance brand homepage and responsive product catalog',
      'Interactive product variant configurator (color, size, material bundles)',
      'Frictionless shopping cart with promotional coupon engine',
      'Hosted payment gateway handoff supporting Cards, UPI, and Netbanking',
      'Automated shipping aggregator sync for airway bill (AWB) generation',
      'Customer self-service order tracking and returns intake request portal',
    ],
    coreModules: [
      'Brand Storefront & High-Performance Catalog',
      'Interactive Product Variant & Bundle Configurator',
      'Shopping Cart & Coupon Discount Engine',
      'Hosted Payment Gateway Hand-Off & Receipt Generator',
      'Order Fulfillment & Shipping Aggregator Sync',
      'Customer Account & Order Tracking Portal',
    ],
    excludedFromV1: [
      'Automated physical warehouse robotic sorting',
      'Complex multi-currency cross-border customs tax handling without specialized merchant setup',
    ],
    rolePermissions: [
      {
        role: 'Customer',
        accessLevel: 'Shopper',
        canView: ['Public catalog', 'Own cart', 'Own order tracking status'],
        canEdit: ['Shipping address', 'Cart selections'],
        restrictions: 'Cannot view wholesale pricing tiers or backend stock reserves.',
      },
      {
        role: 'Store Manager',
        accessLevel: 'E-Commerce Admin',
        canView: ['All customer orders', 'Stock counts across variants', 'Sales revenue'],
        canEdit: ['Product details', 'Variant stock counts', 'Promotional discount rules'],
        restrictions: 'Cannot view customer raw payment credentials.',
      },
      {
        role: 'Fulfillment Specialist',
        accessLevel: 'Warehouse',
        canView: ['Pending shipment orders', 'Packing slip items', 'Delivery addresses'],
        canEdit: ['Shipping tracking number', 'Mark order shipped'],
        restrictions: 'Cannot modify product pricing or issue refunds.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Brand Storefront Experience',
        boundary: 'Client Boundary',
        components: [
          { name: 'Headless Next.js Storefront', category: 'Web', description: 'Static site generation with incremental static regeneration for speed.' },
        ],
        securityGate: 'Zero client-side payment secret storage; sub-second mobile page loads.',
      },
      {
        number: '02',
        name: 'Global CDN & Media Optimization',
        boundary: 'Edge Boundary',
        components: [
          { name: 'Edge CDN & WebP Image Optimizer', category: 'Media', description: 'Delivers optimized product imagery with global caching.' },
        ],
        securityGate: 'Strict CSP and referrer policies enforced on brand domain.',
      },
      {
        number: '03',
        name: 'Shopping Cart & Pricing Core',
        boundary: 'Application Logic',
        components: [
          { name: 'Cart & Coupon Evaluation Service', category: 'Logic', description: 'Server-side price calculation to prevent price tampering.' },
          { name: 'Variant Inventory Tracker', category: 'Inventory', description: 'Atomic decrement upon verified payment confirmation.' },
        ],
        securityGate: 'Prices computed strictly on backend; never trust client cart total.',
      },
      {
        number: '04',
        name: 'Persistence & Transaction Store',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Orders, inventory variants, customer addresses.' },
        ],
        securityGate: 'Database volume encrypted via AWS/GCP KMS; private subnet isolation.',
      },
      {
        number: '05',
        name: 'Payment & Logistics Connectors',
        boundary: 'Integration Gate',
        components: [
          { name: 'Hosted Payment Modal (Razorpay/Stripe)', category: 'Payments', description: 'Compliant checkout with HMAC webhook verification.' },
          { name: 'Shipping API (Shiprocket/Delhivery)', category: 'Logistics', description: 'Generates shipping labels and tracks delivery.' },
        ],
        securityGate: 'Webhook replay protection with nonce checking.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Product photography, variant details, retail prices', handling: 'Publicly cached at global edge CDN.' },
      { dataClass: 'Confidential', examples: 'Customer delivery addresses, order history, phone numbers', handling: 'Restricted to customer and fulfillment staff.' },
      { dataClass: 'Highly Sensitive', examples: 'Merchant payment gateway API secrets, financial payouts', handling: 'Stored in cloud secrets vault; never exposed to front-end.' },
    ],
    securityControls: [
      { control: 'Server-Side Cart Price Computation', protection: 'Prevents client-side price modification attacks where attackers alter JSON payload.', status: 'Reference design', evidenceOrPrereq: 'Backend recalculation on checkout creation.' },
      { control: 'Hosted Payment Gateway Hand-Off', protection: 'Eliminates raw credit card collection from merchant infrastructure.', status: 'Implemented in SDK', evidenceOrPrereq: 'Verified Razorpay/Stripe hosted checkout integration.' },
      { control: 'HMAC Webhook Signature Verification', protection: 'Ensures order fulfillment is triggered only by authentic payment gateway events.', status: 'Recommended control', evidenceOrPrereq: 'HMAC-SHA256 signature matching.' },
      { control: 'Inventory Locking on Checkout', protection: 'Prevents selling out-of-stock sizes or colors to simultaneous shoppers.', status: 'Reference design', evidenceOrPrereq: 'Atomic variant decrement queries.' },
    ],
    externalIntegrations: [
      { service: 'Payment Gateway (Razorpay / Stripe)', type: 'Payments', integrationMethod: 'Hosted modal + HTTPS webhook callback', securityBoundary: 'Zero raw card data stored; webhook verified before order confirmation.' },
      { service: 'Shipping Logistics (Shiprocket / Delhivery)', type: 'Fulfillment', integrationMethod: 'REST API via HTTPS with API token', securityBoundary: 'Generates shipping labels; receives delivery status webhooks.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Bespoke Brand Storefront & Checkout',
        timeframeNote: 'Replaces generic template with fast custom brand experience.',
        scope: ['Custom responsive brand storefront', 'Product catalog with size/color variant selector', 'Shopping cart with server-side pricing', 'Hosted payment gateway integration', 'Automated customer order confirmation email'],
        architectureMaturity: 'Next.js App Router static export or SSR, PostgreSQL database, hosted payment gateway.',
        notIncluded: ['Automated shipping label printing', 'Customer loyalty points engine', 'International currency conversion'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Logistics Automation & Customer Portal',
        timeframeNote: 'Automates fulfillment as order volume climbs.',
        scope: ['Automated shipping aggregator sync (AWB & label generation)', 'Customer self-service order tracking portal', 'Coupon discount engine with usage limits', 'Abandoned cart recovery email reminders'],
        architectureMaturity: 'Background worker queue for transactional emails and logistics webhooks.',
        notIncluded: ['Multi-warehouse split dispatch', 'Automated subscription replenishment'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Subscription Replenishment & Custom Bundles',
        timeframeNote: 'Enterprise brand scaling.',
        scope: ['Recurring subscription orders (auto-replenish coffee, cosmetics, etc.)', 'Interactive 3D or visual custom product bundle builder', 'Multi-currency international storefront', 'ERP inventory synchronization'],
        architectureMaturity: 'Multi-region CDN caching, dedicated analytics data store.',
        notIncluded: ['Physical retail POS hardware integration without separate hardware scope'],
      },
    ],
    acceptanceCriteria: [
      'Customer cart prices are 100% computed on backend; modified client-side price payloads are rejected.',
      'Mobile Lighthouse performance score exceeds 90 on 4G cellular emulation.',
      'Payment webhooks with invalid HMAC signatures reject order activation with HTTP 400.',
      'Purchasing the final available unit of a specific color/size variant marks that variant out of stock immediately.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Modern cloud hosting (Vercel / AWS Amplify / Cloud Run) with global CDN.',
      databaseIsolation: 'PostgreSQL instance with encrypted storage; Redis for shopping cart caching.',
      backupCadence: 'Daily automated snapshots with 30-day retention.',
      maintenanceDuties: 'Weekly inventory audit check, monthly dependency patching, quarterly load test.',
    },
    risksAndAssumptions: [
      { risk: 'High cart abandonment due to slow checkout loading', mitigation: 'Hosted payment checkout modal optimized for instant UPI and mobile card entry.', owner: 'Zelvori Architecture' },
      { risk: 'Customer ordering wrong size or color variant', mitigation: 'Clear variant preview thumbnails and interactive size recommendation guides.', owner: 'Brand Designer' },
      { risk: 'Choosing custom build when standard Shopify satisfies all needs', mitigation: 'Honest discovery: recommend Shopify when standard themes suffice; build custom only for verified gaps.', owner: 'Executive Discovery' },
    ],
    relatedServiceSlug: 'ecommerce',
    relatedServiceTitle: 'E-Commerce Website & Custom Storefront Development',
    relatedStoryAnchor: 'ecommerce',
    relatedStoryTitle: 'D2C Brand Transformation Story',
    relatedPreviewSlug: 'ecommerce',
    relatedToolSlug: 'css-generator',
  },

  // 7. Creators, Media & Subscription Platforms
  {
    slug: 'creators',
    title: 'Creators, Media & Subscription Platforms',
    shortTitle: 'Creators & Subscriptions',
    category: 'Media & Education',
    tagline: 'Gated content vaults, recurring membership billing, expiring signed links, and audience ownership.',
    overview:
      'A dedicated membership and media architecture engineered for digital creators, specialized journalists, and content collectives. Replaces third-party middleman platforms with an independent, owned subscription platform featuring expiring signed download URLs and secure entitlement gates.',
    operationalProblem:
      'Creators lose 10% to 20% in fees to third-party membership platforms, lack direct access to customer email lists, and risk sudden platform de-platforming. Gated content is often insecurely hidden using simple CSS display:none tricks easily bypassed in browser inspect mode.',
    targetPersonas: [
      { role: 'Independent Creator / Author', description: 'Wants direct audience ownership, recurring subscription revenue, and editorial control.' },
      { role: 'Media Publisher / Editor', description: 'Publishes tiered articles, premium newsletters, and member-only podcast episodes.' },
      { role: 'Paid Community Member', description: 'Expects frictionless video/audio streaming, instant download access, and community perks.' },
      { role: 'Platform Admin', description: 'Manages membership tiers, billing webhooks, and subscriber churn analytics.' },
    ],
    mainUseCases: [
      'Public creator portfolio and free sample article/media library',
      'Tiered subscription membership checkout with recurring billing',
      'Server-side entitlement gate protecting premium articles and videos',
      'Digital download delivery using time-limited presigned URLs (15-minute validity)',
      'Member-only discussion forum and community commenting',
      'Automated subscriber welcome onboarding and churn recovery workflows',
    ],
    coreModules: [
      'Creator Brand Portfolio & Free Content Feed',
      'Subscription Tier Checkout & Entitlement Gateway',
      'Server-Side Gated Content Vault (Articles, Audio, Video)',
      'Digital Download Manager with Presigned Expiring URLs',
      'Member Community & Discussion Board',
      'Audience Analytics & Subscriber Lifecycle Manager',
    ],
    excludedFromV1: [
      'DRM hardware encryption for Hollywood studio-grade copy protection (beyond web browser scope)',
      'Automated social media auto-posting to unapproved third-party networks',
    ],
    rolePermissions: [
      {
        role: 'Public Visitor',
        accessLevel: 'Unauthenticated',
        canView: ['Free public articles', 'Creator bio', 'Membership tier descriptions'],
        canEdit: ['Newsletter email signup'],
        restrictions: 'Cannot view premium content; server omits premium payload from response HTML.',
      },
      {
        role: 'Paid Member (Tier 1)',
        accessLevel: 'Supporter',
        canView: ['Tier 1 articles', 'Community discussion posts', 'Monthly audio episodes'],
        canEdit: ['Own profile', 'Comments on unlocked posts'],
        restrictions: 'Cannot access Tier 2 downloads or raw production project files.',
      },
      {
        role: 'VIP Member (Tier 2)',
        accessLevel: 'All Access',
        canView: ['All premium articles', 'Digital downloads vault', 'Exclusive Q&A streams'],
        canEdit: ['Own profile', 'Comments'],
        restrictions: 'Cannot view administrative subscription billing backend.',
      },
      {
        role: 'Creator / Publisher',
        accessLevel: 'Owner',
        canView: ['All content', 'Subscriber subscriber metrics', 'Gross recurring revenue'],
        canEdit: ['Publish articles', 'Upload media', 'Manage tiers', 'Export subscriber list'],
        restrictions: 'Administrative actions protected by MFA.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Audience & Member Frontends',
        boundary: 'Client Boundary',
        components: [
          { name: 'Creator Public Portfolio & Blog', category: 'Web', description: 'Next.js App Router with fast static article rendering.' },
          { name: 'Member Vault & Audio Player', category: 'Web', description: 'Authenticated workspace for streamable and downloadable assets.' },
        ],
        securityGate: 'Premium article text never transmitted to unauthenticated visitors.',
      },
      {
        number: '02',
        name: 'Edge Caching & Entitlement Shield',
        boundary: 'Edge Boundary',
        components: [
          { name: 'Edge Worker Entitlement Check', category: 'Edge', description: 'Inspects session cookie before serving gated page payload.' },
        ],
        securityGate: 'Cache key includes user entitlement tier to prevent cache poisoning.',
      },
      {
        number: '03',
        name: 'Identity & Subscription Gateway',
        boundary: 'Auth Gate',
        components: [
          { name: 'Member Auth & Passwordless Login', category: 'Auth', description: 'Magic link and password authentication.' },
          { name: 'Entitlement Evaluator', category: 'Logic', description: 'Verifies active subscription status before issuing content tokens.' },
        ],
        securityGate: 'Expired subscriptions lose entitlement immediately upon webhook cancellation.',
      },
      {
        number: '04',
        name: 'Content & Media Vault',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Stores articles, subscriber profiles, tier mappings.' },
          { name: 'Encrypted S3 Media Bucket', category: 'Storage', description: 'Stores high-resolution downloads and audio/video files.' },
        ],
        securityGate: 'All digital downloads served via 15-minute presigned URLs.',
      },
      {
        number: '05',
        name: 'Recurring Billing Integrations',
        boundary: 'Integration Gate',
        components: [
          { name: 'Subscription Provider (Razorpay Subscriptions / Stripe)', category: 'Billing', description: 'Manages recurring credit card / UPI autopay.' },
          { name: 'Newsletter Broadcast Adapter', category: 'Email', description: 'Syncs subscriber email list with transactional mail service.' },
        ],
        securityGate: 'HMAC signature verification on recurring invoice payment webhooks.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Public articles, creator bio, tier pricing, promotional videos', handling: 'Publicly readable via CDN caching.' },
      { dataClass: 'Confidential', examples: 'Subscriber emails, subscription status, private community posts', handling: 'Restricted to authenticated active members.' },
      { dataClass: 'Highly Sensitive', examples: 'Payment subscription customer IDs, creator revenue ledgers', handling: 'KMS encrypted at rest, access logged in audit trails.' },
    ],
    securityControls: [
      { control: 'Server-Side Entitlement Gating', protection: 'Ensures premium text is never included in DOM HTML for unpaying visitors.', status: 'Reference design', evidenceOrPrereq: 'Server component conditional rendering.' },
      { control: 'Time-Limited Presigned Download URLs', protection: 'Prevents subscribers from sharing permanent download links on public forums.', status: 'Implemented in SDK', evidenceOrPrereq: 'S3 presigned URL with 15-minute expiration.' },
      { control: 'HMAC Webhook Replay Protection', protection: 'Ensures subscription renewals and cancellations are verified before entitlement update.', status: 'Recommended control', evidenceOrPrereq: 'Signature check + timestamp nonce validation.' },
      { control: 'Subscriber Email List Portability', protection: 'Guarantees creator can export audience emails at any time without vendor lock-in.', status: 'Implemented in SDK', evidenceOrPrereq: 'Clean CSV export utility.' },
    ],
    externalIntegrations: [
      { service: 'Subscription Payment Gateway (Razorpay / Stripe)', type: 'Billing', integrationMethod: 'Hosted checkout + webhook with HMAC signature', securityBoundary: 'Zero raw card data collected; webhook verified before entitlement grants.' },
      { service: 'Transactional Email Service (Resend / AWS SES)', type: 'Email', integrationMethod: 'REST API via HTTPS with API token', securityBoundary: 'Sends magic links and member newsletters.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Core Subscription Gated Vault',
        timeframeNote: 'Establishes direct audience monetization.',
        scope: ['Creator public portfolio & free blog', 'Subscription tier checkout modal', 'Server-side gated content vault', 'Expiring presigned download links', 'Member login and profile management'],
        architectureMaturity: 'Next.js App Router, PostgreSQL database, S3 media bucket with presigned URLs.',
        notIncluded: ['Native mobile app', 'Multi-creator marketplace federation', 'Automated video watermarking'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Community Discussion & Streaming Media',
        timeframeNote: 'Deepens member engagement and retention.',
        scope: ['Member-only discussion forum and comment threads', 'Audio podcast player with stream resumption', 'Tier upgrade/downgrade workflows', 'Automated churn reduction email sequence'],
        architectureMaturity: 'Background worker queue for email dispatch, CDN edge caching for audio segments.',
        notIncluded: ['Live interactive video streaming without separate media infrastructure'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Enterprise Creator Network',
        timeframeNote: 'Scales to multi-author media collective.',
        scope: ['Multi-author publishing workflow with editorial approvals', 'Corporate / group team subscriptions with seat licenses', 'Gift subscription checkout', 'Detailed cohort retention and lifetime value (LTV) analytics'],
        architectureMaturity: 'Read-replica database for analytics, multi-author revenue share accounting ledger.',
        notIncluded: ['Hollywood-grade hardware DRM licensing'],
      },
    ],
    acceptanceCriteria: [
      'Unauthenticated visitors inspecting page source code see zero premium article body text (negative test).',
      'Presigned download links expire and return HTTP 403 Forbidden after 15 minutes.',
      'Subscription cancellation webhook immediately revokes Tier 2 entitlements upon invoice failure.',
      'Creator can export the full subscriber list (emails, join dates, tiers) in clean CSV format with one click.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Cloud container hosting with CDN caching (AWS Amplify / Render / Cloud Run).',
      databaseIsolation: 'PostgreSQL instance with encrypted storage; S3 bucket with private-by-default permissions.',
      backupCadence: 'Daily automated snapshots with 30-day retention.',
      maintenanceDuties: 'Weekly subscription webhook reconciliation check, monthly dependency security updates.',
    },
    risksAndAssumptions: [
      { risk: 'Subscribers sharing account credentials with friends', mitigation: 'Device session limits (maximum 3 concurrent active sessions per account).', owner: 'Zelvori Architecture' },
      { risk: 'Payment failure on recurring card renewal', mitigation: 'Automated 3-day grace period with polite email retry notification before revoking access.', owner: 'Billing Configuration' },
      { risk: 'Creator assumes platform replaces email marketing tool', mitigation: 'Integrate dedicated transactional email gateway for reliable newsletter delivery.', owner: 'Executive Discovery' },
    ],
    relatedServiceSlug: 'web-development',
    relatedServiceTitle: 'Website & Web Application Development',
    relatedStoryAnchor: 'creators',
    relatedStoryTitle: 'Creator Platform Transformation Story',
    relatedPreviewSlug: 'web-development',
    relatedToolSlug: 'social-preview',
  },

  // 8. Education & Training
  {
    slug: 'education',
    title: 'Education, Cohort Training & LMS Platforms',
    shortTitle: 'Education & Training',
    category: 'Media & Education',
    tagline: 'Cohort schedules, lesson progress, auto-graded quizzes, and verified digital certificates.',
    overview:
      'An education and learning management architecture engineered for vocational academies, corporate training institutes, and coaching schools. Unifies curriculum delivery, assignment submissions, quiz evaluations, and verifiable digital certificate issuance.',
    operationalProblem:
      'Instructors spend hours sharing Zoom links via WhatsApp, grading student assignments in disorganized email threads, and manually creating certificate PDFs. Student records and minor personal data are carelessly handled across disparate cloud tools.',
    targetPersonas: [
      { role: 'Institute Director / Dean', description: 'Requires cohort enrollment reports, tuition tracking, and certification authenticity.' },
      { role: 'Instructor / Trainer', description: 'Needs clean curriculum module publishing, assignment grading, and attendance rosters.' },
      { role: 'Student / Learner', description: 'Wants structured syllabus navigation, video lessons, quiz feedback, and earned certificates.' },
      { role: 'Parent / Guardian', description: 'Requires visibility into minor student attendance, progress, and fee receipts.' },
    ],
    mainUseCases: [
      'Public course catalog and online cohort enrollment with tuition payment',
      'Structured curriculum viewer (modules, video lessons, reading materials)',
      'Assignment submission portal with file upload and instructor grading remarks',
      'Time-limited randomized multiple-choice quiz assessments with instant feedback',
      'Tamper-evident digital certificate generation with verifiable public QR code',
      'Student progress dashboard and cohort attendance reporting',
    ],
    coreModules: [
      'Course Catalog & Online Enrollment Desk',
      'Curriculum & Video Lesson Delivery Engine',
      'Assignment Submission & Grading Console',
      'Assessment Engine with Randomized Quizzes',
      'Verifiable Certificate Issuance & Verification Portal',
      'Cohort Administration & Attendance Gradebook',
    ],
    excludedFromV1: [
      'Intrusive webcam proctoring or spyware surveillance (anti-privacy software)',
      'Autonomous AI grading of complex subjective essays without instructor review',
    ],
    rolePermissions: [
      {
        role: 'Enrolled Student',
        accessLevel: 'Learner',
        canView: ['Enrolled course modules', 'Own assignment grades', 'Own earned certificates'],
        canEdit: ['Own profile', 'Assignment submissions', 'Quiz answer selections'],
        restrictions: 'Cannot view other students’ grades or access upcoming quiz answer keys.',
      },
      {
        role: 'Instructor / Trainer',
        accessLevel: 'Faculty',
        canView: ['Assigned cohort student roster', 'Submitted assignments', 'Quiz score distributions'],
        canEdit: ['Assignment grades', 'Feedback remarks', 'Course lesson materials'],
        restrictions: 'Cannot view unassigned course cohorts or institute financial revenue.',
      },
      {
        role: 'Parent / Guardian',
        accessLevel: 'Guardian Portal',
        canView: ['Dependent student attendance', 'Grade summary', 'Tuition receipts'],
        canEdit: ['Guardian contact info'],
        restrictions: 'Strictly isolated to linked minor student records.',
      },
      {
        role: 'Academic Director',
        accessLevel: 'Institute Admin',
        canView: ['All courses, cohorts, faculty gradebooks, enrollment financials'],
        canEdit: ['Course creation', 'Faculty assignments', 'Certificate template design'],
        restrictions: 'Administrative actions protected by MFA.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Learner & Faculty Channels',
        boundary: 'Client Boundary',
        components: [
          { name: 'Student Web & Mobile Learning Portal', category: 'Web', description: 'Responsive video and quiz interface.' },
          { name: 'Instructor Grading Console', category: 'Web', description: 'High-density gradebook and submission review desk.' },
        ],
        securityGate: 'No student exam answer keys transmitted to client bundle.',
      },
      {
        number: '02',
        name: 'Edge Caching & Ingress Shield',
        boundary: 'Edge Boundary',
        components: [
          { name: 'Global CDN for Curriculum Assets', category: 'CDN', description: 'Fast caching of lesson reading PDFs and public catalog.' },
        ],
        securityGate: 'DDoS mitigation on exam submission endpoints.',
      },
      {
        number: '03',
        name: 'Identity & Minor Privacy Gateway',
        boundary: 'Auth Gate',
        components: [
          { name: 'Student & Guardian Auth Service', category: 'Auth', description: 'Role-based access with guardian linkage.' },
        ],
        securityGate: 'Heightened privacy controls for learner and minor personal data.',
      },
      {
        number: '04',
        name: 'Curriculum & Assessment Engine',
        boundary: 'Application Core',
        components: [
          { name: 'Randomized Quiz Evaluator', category: 'Logic', description: 'Scores submissions server-side with strict deadline timers.' },
          { name: 'Certificate Signer & QR Generator', category: 'Security', description: 'Cryptographically signs certificate IDs with public verify link.' },
        ],
        securityGate: 'Assessment timers enforced strictly on server, not client clock.',
      },
      {
        number: '05',
        name: 'Encrypted Storage & Relational DB',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Enrollments, gradebooks, attendance, and certificates.' },
          { name: 'Private Document Store', category: 'Storage', description: 'Stores student assignment uploads in private bucket.' },
        ],
        securityGate: 'Assignment uploads scanned for file extension and MIME type.',
      },
      {
        number: '06',
        name: 'External Educational Services',
        boundary: 'Integration Gate',
        components: [
          { name: 'Video Streaming Embeds (Vimeo OTT / YouTube Unlisted)', category: 'Media', description: 'Domain-restricted video embedding.' },
          { name: 'Hosted Tuition Payment Gateway', category: 'Payments', description: 'Tuition and fee collection with receipt generation.' },
        ],
        securityGate: 'Video embeds restricted to institute domain only.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Course catalog, syllabus outlines, tuition fees, faculty bios', handling: 'Publicly readable via web pages.' },
      { dataClass: 'Confidential', examples: 'Student grades, assignment submissions, attendance records', handling: 'Restricted to student, guardian, and assigned instructor.' },
      { dataClass: 'Highly Sensitive', examples: 'Minor identity data, parent phone numbers, tuition transaction records', handling: 'KMS encrypted at rest, audited access, strict retention schedules.' },
    ],
    securityControls: [
      { control: 'Server-Side Assessment Grading', protection: 'Ensures correct answer keys are never exposed in browser network inspection.', status: 'Reference design', evidenceOrPrereq: 'Server action scoring verification.' },
      { control: 'Cryptographically Signed Certificates', protection: 'Prevents fraudulent fabrication of diplomas or completion certificates.', status: 'Implemented in SDK', evidenceOrPrereq: 'Unique UUID + SHA-256 hash verified via public QR.' },
      { control: 'Minor & Student Data Minimization', protection: 'Collects only strictly necessary educational records without intrusive tracking.', status: 'Recommended control', evidenceOrPrereq: 'Privacy policy & data inventory compliance.' },
      { control: 'Domain-Restricted Video Streaming', protection: 'Prevents students from ripping or embedding paid lesson videos on external sites.', status: 'Requires provider configuration', evidenceOrPrereq: 'Video host domain allowlisting.' },
    ],
    externalIntegrations: [
      { service: 'Video Streaming Provider (Vimeo OTT / Bunny Stream)', type: 'Video', integrationMethod: 'Domain-locked player iframe with signed token', securityBoundary: 'Embed player restricted strictly to institute web domain.' },
      { service: 'Payment Gateway (Razorpay / Stripe)', type: 'Payments', integrationMethod: 'Hosted checkout modal for course tuition', securityBoundary: 'Zero raw card data collected; receipt issued on verified webhook.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Course Catalog & Student Portal',
        timeframeNote: 'Replaces scattered spreadsheets and WhatsApp groups.',
        scope: ['Public course list & enrollment checkout', 'Student lesson viewer with video embeds and PDFs', 'Assignment file submission portal', 'Instructor gradebook console', 'Basic student progress tracking'],
        architectureMaturity: 'Next.js App Router, PostgreSQL database, private S3 bucket for assignment uploads.',
        notIncluded: ['Automated multiple-choice quiz engine', 'Cryptographic certificate verification portal', 'Parent/guardian dashboard'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Quizzes & Verified Digital Certificates',
        timeframeNote: 'Automates grading and credential issuance.',
        scope: ['Automated timed multiple-choice quiz engine', 'Cryptographic certificate issuance with public QR verification link', 'Parent/guardian access portal for attendance and grades', 'Automated course completion email notifications'],
        architectureMaturity: 'Background worker queue for PDF certificate compilation and email delivery.',
        notIncluded: ['SCORM enterprise export', 'AI automated essay analysis'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Enterprise Academy Platform',
        timeframeNote: 'For multi-branch training networks or corporate clients.',
        scope: ['Corporate B2B sponsor portal with bulk seat licensing', 'Live classroom schedule integration (Zoom / Google Meet API)', 'SCORM 1.2 / 2004 compliance export options', 'Detailed student drop-off and engagement analytics'],
        architectureMaturity: 'Read-replica database for academy reporting, multi-branch tenant isolation.',
        notIncluded: ['Intrusive student facial surveillance software'],
      },
    ],
    acceptanceCriteria: [
      'Student A cannot view Student B’s assignment grades or download submissions (negative test).',
      'Submitting a quiz after the server-side deadline has expired rejects answers with an expired notice.',
      'Scanning the public QR code on an issued certificate renders authentic student name, course, and issue date.',
      'Lesson video embeds fail to play if loaded on an unapproved external domain.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Cloud container hosting (AWS ECS / Cloud Run / DigitalOcean App Platform).',
      databaseIsolation: 'PostgreSQL instance with cohort-level role security; private S3 bucket for student files.',
      backupCadence: 'Daily automated database snapshots with 30-day retention.',
      maintenanceDuties: 'Monthly security patch updates, term-end student archive and export maintenance.',
    },
    risksAndAssumptions: [
      { risk: 'Students sharing login credentials with unregistered peers', mitigation: 'Limit active sessions to 2 concurrent devices per student account.', owner: 'Zelvori Architecture' },
      { risk: 'Uploading malicious executable files disguised as homework', mitigation: 'Strict file extension allowlist (.pdf, .docx, .zip) and MIME type validation before saving.', owner: 'Zelvori Architecture' },
      { risk: 'Making unverified university accreditation compliance claims', mitigation: 'Certificates explicitly state they represent institutional completion, not statutory degrees.', owner: 'Institute Leadership' },
    ],
    relatedServiceSlug: 'web-development',
    relatedServiceTitle: 'Web Applications & Educational Portals',
    relatedStoryAnchor: 'education',
    relatedStoryTitle: 'Educational Institute Transformation Story',
    relatedPreviewSlug: 'web-development',
    relatedToolSlug: 'color-contrast',
  },

  // 9. Field Service & Logistics
  {
    slug: 'logistics',
    title: 'Field Service, Logistics & Workforce Dispatch',
    shortTitle: 'Field Service & Logistics',
    category: 'Services & Delivery',
    tagline: 'Job dispatching, technician scheduling, offline mobile sync, and tamper-evident proof-of-work.',
    overview:
      'A robust workforce operations architecture engineered for field service contractors, equipment maintenance teams, and logistics dispatchers. Solves mobile cellular dead zones with deterministic offline synchronization, lost device token revocation, and tamper-evident proof-of-work.',
    operationalProblem:
      'Technicians carry paper job sheets that get lost or water-damaged. Dispatchers lose track of field crews, emergency customer calls are dispatched blindly, mobile dead zones cause lost customer sign-offs, and excessive location tracking violates worker privacy.',
    targetPersonas: [
      { role: 'Field Service Operations Manager', description: 'Schedules technicians, optimizes routes, and monitors SLA completion rates.' },
      { role: 'Mobile Field Technician', description: 'Receives job details, works offline in basements, logs parts used, and captures sign-offs.' },
      { role: 'Customer / Facility Manager', description: 'Requires arrival window notifications, transparent work reports, and digital signatures.' },
      { role: 'Fleet & Inventory Controller', description: 'Tracks van spare-part stock deductions and equipment maintenance history.' },
    ],
    mainUseCases: [
      'Visual dispatch calendar with technician skill matching and job status',
      'Mobile field companion app working offline in remote locations or basements',
      'Tamper-evident proof-of-work photo uploads and customer digital signature capture',
      'Instant session revocation when mobile field devices are lost or stolen',
      'Deterministic offline sync reconciliation when cellular connectivity restores',
      'Location privacy minimization: GPS tracked only during active shift windows',
    ],
    coreModules: [
      'Central Dispatch Board & Technician Scheduler',
      'Mobile Field Technician Companion Web App (PWA)',
      'Deterministic Offline Sync Reconciliation Engine',
      'Proof-of-Work Photo & Digital Signature Capture',
      'Spare Parts Consumption & Truck Stock Inventory',
      'Customer Work Report & SLA Performance Analytics',
    ],
    excludedFromV1: [
      'Autonomous fleet route optimization with real-time dynamic traffic rerouting (rely on Google Maps handoff)',
      'Hardware OBD-II vehicle telematics engine diagnostic wiring',
    ],
    rolePermissions: [
      {
        role: 'Field Technician',
        accessLevel: 'Mobile Field App',
        canView: ['Own assigned jobs for today', 'Customer address & equipment service history'],
        canEdit: ['Job status (En Route, In Progress, Completed)', 'Proof-of-work photos', 'Customer signature'],
        restrictions: 'Cannot view unassigned territory jobs or access other technicians’ schedules.',
      },
      {
        role: 'Dispatcher / Supervisor',
        accessLevel: 'Dispatch Console',
        canView: ['All field technicians in territory', 'Job queues', 'Active job statuses'],
        canEdit: ['Job assignments', 'Rescheduling', 'Emergency dispatch overrides'],
        restrictions: 'Cannot modify historical completed proof-of-work records.',
      },
      {
        role: 'Inventory Manager',
        accessLevel: 'Parts & Stock',
        canView: ['Truck inventory counts', 'Parts consumed per work ticket'],
        canEdit: ['Truck stock replenishment', 'Spare part price list'],
        restrictions: 'Cannot re-assign field technicians.',
      },
      {
        role: 'Operations Director',
        accessLevel: 'Executive',
        canView: ['Territory SLA compliance', 'Average job completion times', 'Customer ratings'],
        canEdit: ['Territory boundaries', 'Technician skill profiles'],
        restrictions: 'Protected by mandatory two-factor authentication.',
      },
    ],
    architectureLayers: [
      {
        number: '01',
        name: 'Field & Dispatch Interfaces',
        boundary: 'Client Boundary',
        components: [
          { name: 'Technician Mobile PWA', category: 'Mobile', description: 'Works offline with IndexedDB local job caching.' },
          { name: 'Dispatcher Drag-and-Drop Board', category: 'Web', description: 'Real-time calendar board for job assignment.' },
        ],
        securityGate: 'Immediate token revocation capability on lost mobile device.',
      },
      {
        number: '02',
        name: 'Edge & Ingress Gateway',
        boundary: 'Perimeter Boundary',
        components: [
          { name: 'Sync Gateway API', category: 'API', description: 'Handles batched offline job synchronization.' },
        ],
        securityGate: 'HMAC payload validation on batch sync uploads.',
      },
      {
        number: '03',
        name: 'Identity & Device Security',
        boundary: 'Auth Gate',
        components: [
          { name: 'Technician Device Registry', category: 'Auth', description: 'Binds session to approved field device with remote kill switch.' },
        ],
        securityGate: 'Remote wipe trigger invalidates offline tokens immediately.',
      },
      {
        number: '04',
        name: 'Dispatch & Sync Domain Logic',
        boundary: 'Application Core',
        components: [
          { name: 'Sync Conflict Resolver', category: 'Logic', description: 'Deterministic last-write-wins with manual dispatcher review for conflicts.' },
          { name: 'Proof-of-Work Verifier', category: 'Security', description: 'Strips sensitive EXIF GPS metadata while retaining verified server timestamp.' },
        ],
        securityGate: 'Server-verified timestamp; immutable proof-of-work records.',
      },
      {
        number: '05',
        name: 'Persistence & Photo Vault',
        boundary: 'Persistence',
        components: [
          { name: 'PostgreSQL Relational DB', category: 'Database', description: 'Jobs, service history, customer addresses, parts used.' },
          { name: 'Encrypted S3 Photo Bucket', category: 'Storage', description: 'Stores before/after photos and customer signature SVGs.' },
        ],
        securityGate: 'Private bucket access; presigned expiring URLs for customer reports.',
      },
      {
        number: '06',
        name: 'External Communication Services',
        boundary: 'Integration Gate',
        components: [
          { name: 'SMS Arrival Alert Gateway', category: 'Messaging', description: 'Sends customer 30-minute arrival notification.' },
        ],
        securityGate: 'Excludes technician personal phone numbers from SMS text.',
      },
    ],
    dataClassification: [
      { dataClass: 'Public', examples: 'Company service list, standard hourly service rates', handling: 'Publicly readable via website.' },
      { dataClass: 'Confidential', examples: 'Customer addresses, gate access codes, equipment service history', handling: 'Restricted to assigned technician and dispatcher.' },
      { dataClass: 'Privacy-Sensitive', examples: 'Technician GPS location breadcrumbs during shift', handling: 'Retained only during active working shift; purged after 14 days.' },
    ],
    securityControls: [
      { control: 'Remote Lost-Device Kill Switch', protection: 'Invalidates offline tokens immediately if technician drops or loses phone in field.', status: 'Reference design', evidenceOrPrereq: 'Server session revocation API.' },
      { control: 'Location Privacy Minimization', protection: 'Ensures technician coordinates are not collected or monitored outside scheduled shift hours.', status: 'Recommended control', evidenceOrPrereq: 'Shift clock-in/clock-out location gates.' },
      { control: 'Tamper-Evident Proof-of-Work Capture', protection: 'Guarantees before/after repair photos and signatures cannot be altered post-job.', status: 'Implemented in SDK', evidenceOrPrereq: 'Immutable database records with audit logging.' },
      { control: 'Offline Sync Conflict State Machine', protection: 'Prevents silent data loss when two technicians update the same asset ticket offline.', status: 'Reference design', evidenceOrPrereq: 'Deterministic conflict resolution queue.' },
    ],
    externalIntegrations: [
      { service: 'Customer SMS Arrival Notification', type: 'Messaging', integrationMethod: 'REST API via HTTPS with API token', securityBoundary: 'Sends arrival window alerts; excludes technician personal numbers.' },
      { service: 'Turn-by-Turn Navigation Apps (Google Maps / Apple Maps)', type: 'Mapping', integrationMethod: 'Native OS deep link (geo: URI / maps://)', securityBoundary: 'Handoff to native app; zero map provider SDK telemetry embedded.' },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — MVP',
        title: 'Central Dispatch Board & Mobile Job Views',
        timeframeNote: 'Replaces paper job cards with clean digital workflow.',
        scope: ['Dispatcher web calendar for job scheduling', 'Technician mobile web app for job details and status updates', 'Customer digital signature capture', 'Completed job PDF report generation', 'Basic spare parts consumed logging'],
        architectureMaturity: 'Next.js App Router, PostgreSQL database, private S3 bucket for signature files.',
        notIncluded: ['Full offline IndexedDB synchronization', 'Automated technician routing optimization', 'Van inventory truck restock sync'],
      },
      {
        phase: 'Phase 2 — Business Growth',
        title: 'Offline Sync & Photo Evidence Vault',
        timeframeNote: 'Hardens field resilience in basements and remote areas.',
        scope: ['Offline IndexedDB caching with automatic sync when connection restores', 'Before/after repair photo uploads with EXIF metadata stripping', 'Automated customer SMS arrival alerts', 'Spare parts truck inventory deduction'],
        architectureMaturity: 'Background sync worker queue with conflict reconciliation, S3 image optimization.',
        notIncluded: ['Hardware vehicle OBD-II telematics', 'Predictive equipment failure algorithms'],
      },
      {
        phase: 'Phase 3 — Advanced Platform',
        title: 'Enterprise Field Workforce Platform',
        timeframeNote: 'Scales to regional multi-branch service fleets.',
        scope: ['Multi-territory supervisor hierarchy', 'SLA breach predictive alerts and emergency re-dispatch', 'Barcoded equipment scanning for full lifecycle maintenance history', 'Executive fleet productivity and cost-per-job analytics'],
        architectureMaturity: 'Read-replica database for reporting, push notification workers for urgent dispatches.',
        notIncluded: ['Autonomous drone delivery of replacement parts'],
      },
    ],
    acceptanceCriteria: [
      'Technician can complete a job, capture signature, and record parts while completely offline (airplane mode).',
      'When reconnecting to cellular data, offline jobs synchronize to the dispatch server without duplicating tickets.',
      'Triggering the remote device kill switch on the admin console revokes mobile access within 30 seconds.',
      'Technician GPS tracking strictly terminates when the technician clocks out of their daily shift.',
    ],
    deploymentAndOps: {
      recommendedHost: 'Cloud container hosting with managed database (AWS ECS / GCP Cloud Run / Render).',
      databaseIsolation: 'PostgreSQL instance with territory role separation; private S3 bucket for photo evidence.',
      backupCadence: 'Hourly WAL archiving + daily full database snapshots.',
      maintenanceDuties: 'Weekly sync conflict review, monthly dependency patching, quarterly offline disaster recovery drill.',
    },
    risksAndAssumptions: [
      { risk: 'Technician loses phone with customer addresses and gate codes', mitigation: 'Remote session kill switch and encrypted device storage; addresses hidden once job is marked complete.', owner: 'Zelvori Architecture' },
      { risk: 'Corrupted sync conflict when multiple users edit job ticket offline', mitigation: 'Deterministic conflict review queue where conflicts are flagged for dispatcher review instead of silent overwrite.', owner: 'Zelvori Architecture' },
      { risk: 'Technician pushback against perceived constant GPS surveillance', mitigation: 'Clear operational privacy policy: location is sampled only when moving toward an active dispatched job.', owner: 'Operations Director' },
    ],
    relatedServiceSlug: 'mobile-apps',
    relatedServiceTitle: 'Mobile Applications & Field Workforce Engineering',
    relatedStoryAnchor: 'field-service',
    relatedStoryTitle: 'Field Service Operations Transformation Story',
    relatedPreviewSlug: 'mobile-apps',
  },
];

export function getSolutionBySlug(slug: string): SolutionBlueprint | undefined {
  return SOLUTIONS_DATA.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return SOLUTIONS_DATA.map((s) => s.slug);
}
