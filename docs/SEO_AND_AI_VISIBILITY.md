# Zelvori — Search & AI Discovery Setup

This document records website-side changes and the remaining owner-authorized actions. It does not claim rankings or indexing that have not been verified.

## Implemented in the repository

- Canonical HTTPS domain: https://zelvori.software/
- public/robots.txt allows public crawling and explicitly permits Googlebot, Bingbot, ChatGPT search/retrieval, Claude search/retrieval and Perplexity search/retrieval crawlers; it also permits Google-Extended and Meta-ExternalAgent for wider AI-product discovery.
- Training-focused tokens GPTBot, ClaudeBot, Applebot-Extended and Bytespider are explicitly disallowed, while their separate search/retrieval crawlers remain allowed. Google-Extended is intentionally allowed to permit Gemini Apps grounding, with the trade-off that it can also permit Gemini model-training use. Google's documentation says Google-Extended does not control Google Search inclusion or ranking.
- public/sitemap.xml lists only canonical paths, excluding duplicate privacy-policy and terms-of-service aliases.
- public/llms.txt describes real service pages and labels visual architecture demos as illustrative rather than named client case studies.
- A public IndexNow verification key file is deployed at the site root (`public/f5440ecc35943a75c29c1b4cf9e00d90.txt`).
- `public/ads.txt` authorizes the configured Google AdSense publisher ID using Google's standard DIRECT seller record; the build audit and post-deploy smoke test validate it.
- `scripts/seo-audit.mjs` validates static output, crawler rules, sitemap routes, CNAME, AdSense authorization record, and IndexNow key.
- `scripts/smoke-test-deployed-site.mjs` verifies live HTTP 200, domain canonicalization, metadata verification tags, and `ads.txt` publisher record after deployment.
- `scripts/submit-indexnow.mjs` notifies IndexNow-enabled search services of sitemap URLs after deployment. The step is best-effort so an indexing service outage cannot break website deployment.

## Google AdSense ads.txt Implementation & Dashboard Recheck

### Authorized ads.txt Record

The file `public/ads.txt` is published at the site root and statically exported to `out/ads.txt` (served at `https://zelvori.software/ads.txt`):

```text
google.com, pub-1417105686781482, DIRECT, f08c47fec0942fa0
```

- **Publisher Account ID:** `ca-pub-1417105686781482`
- **ads.txt Record Format:** Uses `pub-1417105686781482` (omitting the `ca-` prefix, per IAB ads.txt specifications).
- **Relationship Type:** `DIRECT` (indicating Zelvori controls the account publishing directly with Google).
- **Certification Authority ID:** `f08c47fec0942fa0` (Google's standard TAG authority ID).
- **Root Metadata Verification:** Retained in `app/layout.tsx` metadata as `<meta name="google-adsense-account" content="ca-pub-1417105686781482">`.

### Steps to Recheck from Google AdSense Dashboard

1. Log in to [Google AdSense](https://adsense.google.com/).
2. In the left navigation sidebar, select **Sites**.
3. In your sites list, locate **zelvori.software**.
4. Check the **ads.txt status** indicator. If it shows "Not found" or "Attention required", click on the site row.
5. In the drawer/modal that opens, click **Check for updates**.
6. AdSense will queue a re-crawl of `https://zelvori.software/ads.txt`.
   > **Note on Crawler Frequency:** While the file is live immediately, Google's ads.txt crawler typically refreshes cached records every 24 to 48 hours. The status in the dashboard will update to "Authorized" once the crawler processes the live file.

## GitHub Actions CI/CD Architecture & Node 24 Migration

The `.github/workflows/deploy.yml` pipeline has been migrated to modern official GitHub Actions:

- **Runner Selection:** Explicitly pinned to `ubuntu-24.04` (Ubuntu Noble Numbat LTS). This avoids unpredictable changes from the scheduled GitHub migration of `ubuntu-latest` to Ubuntu 26 until full compatibility is verified.
- **Node.js Runtime:** Configured with `actions/setup-node@v7` targeting Node.js 24 (`node-version: 24`, cache: `npm`).
- **Official Actions Upgraded:**
  - `actions/checkout@v7` (Node 24 runtime)
  - `actions/setup-node@v7` (Node 24 runtime)
  - `actions/configure-pages@v6` (Node 24 runtime)
  - `actions/upload-pages-artifact@v5` (Composite action internally utilizing `actions/upload-artifact@v7.0.0` on Node 24, fully resolving previous Node 20 deprecation warnings)
  - `actions/deploy-pages@v5` (Node 24 runtime)
- **Automated Quality Gates:**
  1. `npm run lint` (ESLint 9 flat config)
  2. `npm run build` (Next.js 15 static export to `out/`)
  3. `npm run verify` (466 automated security regression checks)
  4. `node scripts/qa-audit.mjs` (311 component, interaction & preview checks)
  5. `npm run seo:audit` (209 crawl, robots, sitemap, AdSense ads.txt & Bing verification checks)
  6. `npm run check:duplicates` (Zero duplicate title, canonical, and description audit)
  7. Post-deployment smoke test (`node scripts/smoke-test-deployed-site.mjs`) verifying live HTTP 200 responses across all core discovery endpoints.

## Google Search Console (account verification required)

1. Open https://search.google.com/search-console/
2. Add the Domain property: zelvori.software.
3. Complete the DNS TXT verification token Google provides in your registrar's DNS panel. The token cannot be guessed or created by the website.
4. In Search Console, open Sitemaps and submit: https://zelvori.software/sitemap.xml
5. Use URL Inspection for the homepage and core service pages, then request indexing.
6. Monitor Page indexing, HTTPS, Core Web Vitals, Search results, impressions, clicks and queries as data accumulates.

Submitting a sitemap is a discovery hint, not a guarantee that Google will crawl or index every page.

## Bing Webmaster Tools

- The Bing Webmaster verification meta tag is configured in the global Next.js metadata: `msvalidate.01`. It will be present in the generated page HTML after the next successful deployment.
1. Open https://www.bing.com/webmasters/
2. Add https://zelvori.software/ and choose the HTML meta-tag verification option if Bing still shows the site as unverified. Use the existing token in `app/layout.tsx`; do not create a second token.
3. Once Bing confirms ownership, submit https://zelvori.software/sitemap.xml.
4. Review URL inspection, crawl diagnostics and search performance.

The GitHub Actions workflow submits sitemap URLs to IndexNow after successful deployment. An accepted notification means the service received URL-change information; it does not confirm indexing or rankings.

## AI search crawler policies
The robots policy permits general crawling and search/retrieval crawlers where their search role is documented. Training-focused crawlers with distinct tokens are separately disallowed. Google-Extended remains allowed to permit Gemini Apps grounding, with the trade-off that Google may also use content to train Gemini models; this token does not affect Google Search inclusion or ranking. Meta-ExternalAgent remains allowed for wider Meta AI discovery. Crawl permission makes retrieval possible but does not guarantee citation or inclusion in any AI answer.

- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Google Search Central sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- GitHub Pages custom-domain guidance: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Sustainable growth priorities
Prioritize useful, differentiated service pages, genuine technical guides, real examples, accurate professional directory profiles, and legitimate digital PR. Do not publish fake customer stories, fabricated statistics, or mass-produced thin location pages.
