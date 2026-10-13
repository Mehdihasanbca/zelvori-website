import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const origin = 'https://zelvori.software';
const indexNowKey = 'f5440ecc35943a75c29c1b4cf9e00d90';
const requiredBots = [
  'OAI-SearchBot', 'ChatGPT-User', 'GPTBot',
  'Claude-SearchBot', 'Claude-User', 'ClaudeBot',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
];

let checks = 0;
let errors = 0;
let warnings = 0;

function assert(condition, message) {
  checks++;
  if (condition) console.log('PASS: ' + message);
  else {
    errors++;
    console.error('FAIL: ' + message);
  }
}
function warn(message) {
  warnings++;
  console.warn('WARN: ' + message);
}
function readOutput(name) {
  const p = path.join(outDir, name);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

if (!fs.existsSync(outDir)) {
  console.error("ERROR: out/ is missing. Run the static production build first.");
  process.exit(1);
}

const robots = readOutput('robots.txt') ?? '';
const sitemap = readOutput('sitemap.xml') ?? '';
const llms = readOutput('llms.txt') ?? '';
const cname = readOutput('CNAME');
assert(robots.length > 0, 'robots.txt exists in static output');
assert(robots.includes('User-agent: *') && robots.includes('Allow: /'), 'robots.txt allows public crawling');
assert(robots.includes('Sitemap: https://zelvori.software/sitemap.xml'), 'robots.txt points to the canonical sitemap');
for (const bot of requiredBots) {
  assert(robots.includes('User-agent: ' + bot), 'robots.txt explicitly allows ' + bot);
}
assert(sitemap.includes('<urlset') && sitemap.includes('</urlset>'), 'sitemap.xml is present and has a URL-set root');
assert(llms.includes('https://zelvori.software/'), 'llms.txt describes the canonical site');
assert(cname !== null && cname.trim() === 'zelvori.software', 'CNAME in output matches the intended apex domain');

const keyName = indexNowKey + '.txt';
const keyContent = readOutput(keyName);
assert(keyContent !== null && keyContent.trim() === indexNowKey, 'IndexNow verification key is published at site root');

const urls = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) => m[1].trim());
assert(urls.length > 0, 'sitemap contains URLs');
assert(new Set(urls).size === urls.length, 'sitemap contains no duplicate URLs');

for (const url of urls) {
  let parsed;
  try { parsed = new URL(url); }
  catch { assert(false, 'valid sitemap URL: ' + url); continue; }
  assert(parsed.origin === origin, 'sitemap uses canonical HTTPS host: ' + url);
  assert(!parsed.search && !parsed.hash, 'sitemap URL has no query or fragment: ' + url);
  assert(parsed.pathname === '/' || parsed.pathname.endsWith('/'), 'sitemap uses static-export route format: ' + url);
  const relative = decodeURIComponent(parsed.pathname.replace(/^\/+/, ''));
  const htmlPath = parsed.pathname === '/'
    ? path.join(outDir, 'index.html')
    : path.join(outDir, relative, 'index.html');
  assert(fs.existsSync(htmlPath), 'sitemap URL maps to an exported HTML page: ' + url);
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const tag = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)?.[0] ?? '';
    const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (href !== url) warn('Canonical URL differs or is missing for ' + url + ' (found: ' + (href ?? 'none') + ')');
  }
}

console.log('\nSEO audit summary: ' + checks + ' checks, ' + errors + ' errors, ' + warnings + ' warnings, ' + urls.length + ' sitemap URLs.');
if (errors > 0) process.exit(1);
