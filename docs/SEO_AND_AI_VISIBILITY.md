# Zelvori — Search & AI Discovery Setup

This document records website-side changes and the remaining owner-authorized actions. It does not claim rankings or indexing that have not been verified.

## Implemented in the repository

- Canonical HTTPS domain: https://zelvori.software/
- public/robots.txt allows public crawling and explicitly permits the ChatGPT, Claude and Perplexity search/retrieval crawlers; it also permits Google-Extended and Meta-ExternalAgent for broader AI-product discovery.
- Training-focused tokens GPTBot, ClaudeBot, Applebot-Extended and Bytespider are explicitly disallowed, while their separate search/retrieval crawlers remain allowed. Google-Extended and Meta-ExternalAgent can also be used for training; they remain allowed to prioritize the requested wider AI-product discovery.
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

1. Open https://www.bing.com/webmasters/
2. Add https://zelvori.software/ and verify ownership, or import an already-verified Search Console property when offered.
3. Submit https://zelvori.software/sitemap.xml.
4. Review URL inspection, crawl diagnostics and search performance.

The GitHub Actions workflow submits sitemap URLs to IndexNow after successful deployment. An accepted notification means the service received URL-change information; it does not confirm indexing or rankings.

## AI search crawler policies
The robots policy permits general crawling and search/retrieval crawlers where their search role is documented. Training-focused crawlers are separately disallowed when they have distinct user-agent tokens. Google-Extended and Meta-ExternalAgent are kept allowed to prioritize wider AI product discovery, with the trade-off that these tokens can also permit uses beyond conventional search. Crawl permission makes retrieval possible but does not guarantee citation or inclusion in any AI answer.

- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Google Search Central sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- GitHub Pages custom-domain guidance: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Sustainable growth priorities
Prioritize useful, differentiated service pages, genuine technical guides, real examples, accurate professional directory profiles, and legitimate digital PR. Do not publish fake customer stories, fabricated statistics, or mass-produced thin location pages.
