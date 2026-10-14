# Zelvori — Search & AI Discovery Setup

This document records website-side changes and the remaining owner-authorized actions. It does not claim rankings or indexing that have not been verified.

## Implemented in the repository

- Canonical HTTPS domain: https://zelvori.software/
- public/robots.txt allows public crawling and explicitly permits Googlebot, Bingbot, ChatGPT search/retrieval, Claude search/retrieval and Perplexity search/retrieval crawlers; it also permits Google-Extended and Meta-ExternalAgent for wider AI-product discovery.
- Training-focused tokens GPTBot, ClaudeBot, Applebot-Extended and Bytespider are explicitly disallowed, while their separate search/retrieval crawlers remain allowed. Google-Extended is intentionally allowed to permit Gemini Apps grounding, with the trade-off that it can also permit Gemini model-training use. Google's documentation says Google-Extended does not control Google Search inclusion or ranking.
- public/sitemap.xml lists only canonical paths, excluding duplicate privacy-policy and terms-of-service aliases.
- public/llms.txt describes real service pages and labels visual architecture demos as illustrative rather than named client case studies.
- A public IndexNow verification key file is deployed at the site root.
- scripts/seo-audit.mjs validates static output, crawler rules, sitemap routes, CNAME and IndexNow key.
- scripts/submit-indexnow.mjs notifies IndexNow-enabled search services of sitemap URLs after deployment. The step is best-effort so an indexing service outage cannot break website deployment.

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
