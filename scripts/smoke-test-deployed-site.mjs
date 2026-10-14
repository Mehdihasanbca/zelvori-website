const origin = 'https://zelvori.software';

const checks = [
  {
    name: 'homepage',
    path: '/',
    validate: (body) =>
      body.includes('<title>') &&
      body.includes('https://zelvori.software/'),
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
    validate: (body) =>
      body.includes('<urlset') &&
      body.includes('</urlset>') &&
      /<loc>https:\/\/zelvori\.software\//.test(body),
  },
  {
    name: 'llms.txt',
    path: '/llms.txt',
    validate: (body) =>
      body.startsWith('# Zelvori') &&
      body.includes('https://zelvori.software/'),
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
