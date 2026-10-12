# Zelvori Software website

Official static website for [zelvori.software](https://zelvori.software/).

## Contents
- `index.html` — responsive homepage and organization metadata
- `assets/css/styles.css` — responsive dark/cyan visual system
- `assets/js/main.js` — small accessible navigation interaction
- `services/` — search-friendly service pages
- `robots.txt` and `sitemap.xml` — crawler guidance and sitemap
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Deploy with GitHub Pages
The included Actions workflow publishes the repository root to GitHub Pages when commits land on `main`. In repository Settings → Pages, choose **GitHub Actions** as the build and deployment source.

For a custom domain, ensure the domain is registered and its DNS records point to GitHub Pages. Then enter `zelvori.software` in Settings → Pages → Custom domain, enable Enforce HTTPS when available, and verify both apex and `www` behavior.

## Before promoting the site
- Confirm the custom domain DNS and HTTPS are working.
- Set up and test the published contact address `hello@zelvori.software`, or replace it in `index.html` and service pages with the preferred contact address.
- Add real company details and project examples only when ready; the current copy intentionally avoids fabricated client logos, testimonials, awards, or performance claims.
- A sitemap helps search engines discover pages but does not guarantee indexing or ranking. Submit it in Google Search Console and Bing Webmaster Tools after launch.

This is a static site. No backend database or contact-form submission service is currently configured.