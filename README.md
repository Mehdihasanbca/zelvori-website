# Zelvori Software

> Ideas Into Digital Reality.

Official website for **Zelvori Software** ([zelvori.software](https://zelvori.software/)), engineered with **Next.js 15 (App Router)**, TypeScript, and Tailwind CSS.

## Architecture

This project is configured for **static export (`output: 'export'`)** with trailing slash resolution (`trailingSlash: true`), optimized for automated hosting on **GitHub Pages** with a custom apex domain.

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS with critical CSS extraction
- **Static Export Directory:** `out/`
- **Custom Domain:** `https://zelvori.software/` (managed via `public/CNAME`)
- **Backend Dependencies:** None (100% static, client-side, zero secret API keys required)

## Project Structure

```
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Pages build & deploy workflow
├── app/                    # Next.js 15 App Router pages & layouts
│   ├── about/              # About Zelvori Software
│   ├── contact/            # Project Inquiry Builder & Contact Desk
│   ├── services/           # 6 Dedicated Service Pages
│   │   ├── ai-automation/
│   │   ├── business-software/
│   │   ├── custom-software/
│   │   ├── ecommerce/
│   │   ├── mobile-apps/
│   │   └── web-development/
│   ├── privacy/            # Privacy Policy
│   ├── terms/              # Terms of Service
│   ├── globals.css         # Tailwind & global design tokens
│   ├── layout.tsx          # Root Layout & Metadata
│   ├── not-found.tsx       # Branded 404 handler
│   └── page.tsx            # Homepage with Hero, Selected Work & Services
├── components/             # Reusable UI, layout & section components
├── hooks/                  # Custom React hooks (useIsMobile, etc.)
├── lib/                    # Configuration, critical CSS & schema definitions
│   ├── critical-css.ts     # Inlined above-the-fold critical CSS
│   └── site-config.ts      # Central configurable contact & navigation data
└── public/                 # Static assets (CNAME, sitemap, robots, llms)
    ├── CNAME               # Custom domain pointer (zelvori.software)
    ├── favicon.svg         # SVG favicon
    ├── icon.svg            # Web clip icon
    ├── llms.txt            # LLM discovery context
    ├── robots.txt          # Crawler instructions
    └── sitemap.xml         # Production XML sitemap
```

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Server runs on http://localhost:3000

# Build static production export
npm run build
# Compiles static HTML/CSS/JS into the ./out directory
```

## GitHub Pages Deployment

Deployment is fully automated using GitHub Actions via `.github/workflows/deploy.yml`:

1. Push commits to `main` or `master`.
2. The workflow checks out the repository, installs dependencies, runs `npm run build`, verifies that `out/` and `out/CNAME` exist, and deploys the `out/` directory using official `actions/deploy-pages@v4`.
3. In repository **Settings** → **Pages**, ensure **Source** is set to **GitHub Actions**.
4. In repository **Settings** → **Pages** → **Custom domain**, enter `zelvori.software` and enable **Enforce HTTPS**.

## Contact Configuration

All contact information is centralized in `lib/site-config.ts`. The default placeholder is `hello@zelvori.software`.
