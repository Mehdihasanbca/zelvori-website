const origin = 'https://zelvori.software';

const checks = [
  {
    name: 'homepage',
    path: '/',
    validate: (body) =>
      body.includes('<title>') &&
      body.includes('https://zelvori.software/') &&
      body.includes('name="google-adsense-account"') &&
      body.includes('ca-pub-1417105686781482') &&
      body.includes('name="msvalidate.01"') &&
      body.includes('06236155CCFE57BA008B422F19673DE5'),
  },
  {
    name: 'robots.txt',
    path: '/robots.txt',
    validate: (body) =>
      body.includes('User-agent:') &&
      body.includes('Sitemap: https://zelvori.software/sitemap.xml'),
  },
  {
    name: 'sitemap.xml',
    path: '/sitemap.xml',
    validate: (body) => {
      const urls = [...body.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) => m[1].trim());
      return (
        body.includes('<urlset') &&
        body.includes('</urlset>') &&
        urls.length > 0 &&
        new Set(urls).size === urls.length &&
        urls.every((u) => u.startsWith('https://zelvori.software/'))
      );
    },
  },
  {
    name: 'llms.txt',
    path: '/llms.txt',
    validate: (body) =>
      body.startsWith('# Zelvori') &&
      body.includes('https://zelvori.software/'),
  },
  {
    name: 'ads.txt',
    path: '/ads.txt',
    validate: (body) => {
      const lines = body.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      return (
        lines.includes('google.com, pub-1417105686781482, DIRECT, f08c47fec0942fa0') &&
        !lines.some((l) => l.includes('ca-pub-')) &&
        lines.filter((l) => l === 'google.com, pub-1417105686781482, DIRECT, f08c47fec0942fa0').length === 1
      );
    },
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let failures = 0;

for (const check of checks) {
  let passed = false;
  let lastDetail = 'No response';

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(new URL(check.path, origin), {
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: { 'user-agent': 'ZelvoriDeploymentSmokeTest/1.0' },
      });

      const body = await response.text();
      const details = `HTTP ${response.status}, final URL ${response.url}`;

      if (response.ok && check.validate(body) && response.url.startsWith('https://')) {
        console.log(`PASS: ${check.name} — ${details}`);
        passed = true;
        break;
      }

      lastDetail = `${details}, content validation ${check.validate(body) ? 'passed' : 'failed'}`;
    } catch (error) {
      lastDetail = error instanceof Error ? error.message : String(error);
    }

    if (attempt < 3) {
      console.log(`Retry ${attempt}/2 for ${check.name}: ${lastDetail}`);
      await sleep(5000);
    }
  }

  if (!passed) {
    failures++;
    console.log(`::warning::Live smoke check failed for ${check.name}: ${lastDetail}`);
  }
}

console.log(
  `Live smoke-test summary: ${checks.length - failures}/${checks.length} endpoints passed. ` +
  'Warnings are non-blocking; check DNS, GitHub Pages custom-domain settings, TLS/HTTPS, and deployment propagation if any failed.'
);
