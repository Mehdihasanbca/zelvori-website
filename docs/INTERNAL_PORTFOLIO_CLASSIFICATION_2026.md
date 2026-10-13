# Internal Portfolio & System Classification Report (2026)
**Document Status:** Confidential Internal Architecture Record  
**Brand:** Zelvori (`https://zelvori.software`)  
**Purpose:** Clear technical, commercial, and legal separation of core agency capabilities from internal/client enterprise products.  
**Confidentiality Level:** Restricted — Client candidate records, patient health information, and proprietary trade secrets must NEVER be exposed publicly or used in unredacted marketing case studies without formal written authorization.

---

## 1. Portfolio Architectural Taxonomy

To maintain strict regulatory compliance, data privacy, and brand clarity, Zelvori distinguishes between four distinct operational entities:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ZELVORI ECOSYSTEM TAXONOMY                      │
└────────────────────────────────────────────────────────────────────────┘
          │
          ├── 1. Zelvori Core Services (Engineering Practice)
          │      └── Web, Mobile, E-Commerce, Custom Software, AI & Security
          │
          ├── 2. HealthOS Bharat (Specialized Healthcare Product)
          │      └── Hospital Management, EHR, ABDM/Ayushman Bharat Integration
          │
          ├── 3. Assignment Venue Centre / AVC (Recruitment & Manpower System)
          │      └── Independent Platform & Infrastructure (Strict Separation)
          │
          └── 4. Grand View Project (Bespoke Client Implementation)
                 └── Luxury Hospitality & Resort Web Presence
```

---

## 2. Entity Profiles & Governance Boundaries

### Entity 1: Zelvori Core Engineering Services
* **Nature:** Digital product development agency and technical advisory partnership.
* **Technology Stack:** Next.js 15, TypeScript, React 19, Tailwind CSS, Python/FastAPI, Node.js, PostgreSQL.
* **Hosting / Domain:** `https://zelvori.software` hosted on GitHub Pages static export.
* **Public Visibility:** Fully public website presenting the 7 core engineering services, transparent pricing blueprints, and interactive service previews.
* **Data Boundary:** Strictly zero database backend on the marketing site; client inquiries draft through direct `mailto:` protocols to preserve privacy.

---

### Entity 2: HealthOS Bharat (Healthcare Software Initiative)
* **Nature:** Specialized clinical operations, Electronic Health Records (EHR), and Hospital Information System (HIS).
* **Target Domain:** Hospitals, nursing homes, polyclinics, and diagnostic centers across India.
* **Core Capabilities:**
  * OPD/IPD patient registration and bed allocation.
  * Electronic prescriptions, vitals tracking, and lab reporting.
  * Doctor scheduling and appointment queue management.
  * Architecture alignment with Ayushman Bharat Digital Mission (ABDM) guidelines (M1, M2, M3 health data protocols).
* **Privacy & Compliance Constraints:**
  * **Zero Real Patient Data in Demos:** All public screenshots, interactive demonstrations, and staging environments MUST use strictly generated synthetic patient records (e.g., "Patient #1042 — Rajesh Kumar, Age 42, Vitals Normal").
  * Real clinical datasets are subject to India's Digital Personal Data Protection (DPDP) Act 2023.
* **Publication Rule:** Case study publications require de-identification and explicit administrative consent from participating healthcare institutions.

---

### Entity 3: Assignment Venue Centre (AVC / assignmentvenuecentre.me)
* **Nature:** Independent recruitment, examination venue management, and workforce mobilization platform.
* **Domain / Infrastructure:** `assignmentvenuecentre.me` (Separate Name.com DNS, independent repositories).
* **Strict Architectural Isolation Rule:**
  * **Absolute Separation:** The Zelvori website repository must NEVER touch, deploy to, or modify AVC domain configurations, databases, or workflows.
  * **Candidate Privacy:** Candidate resumes, personal phone numbers, test scores, and venue allocations are strictly proprietary and confidential.
* **Publication Rule:** AVC remains an independent operational platform. It is classified internally as a specialized platform case, not a public consumer showcase on Zelvori's primary marketing routes.

---

### Entity 4: Grand View Project
* **Nature:** Bespoke luxury hospitality, resort showcase, and guest reservation inquiry portal.
* **Core Focus:** High-fidelity visual storytelling, responsive room/suite showcases, local experience guides, direct booking inquiries.
* **Technical Highlights:** Fast static load times, responsive image galleries, structured local business schema (`Resort` / `Hotel`).
* **Publication Rule:** Public portfolio showcase requires client sign-off on imagery rights and trademark use.

---

## 3. Policy on Client Case Studies & Social Proof

1. **No Fabricated Reviews or Testimonials:** Zelvori does not manufacture fake customer quotes, 5-star ratings, or fabricated enterprise partner logos.
2. **Written Client Consent Required:** Before publishing any live client URL, screenshot, or metric (e.g. "increased conversions by 40%"), a written Case Study Authorization Form must be countersigned.
3. **Synthetic Previews as Default Demonstration:** For prospective clients evaluating capabilities, Zelvori provides **interactive synthetic service previews** (with clearly labeled mock data) rather than exposing live client backends or staging links.
