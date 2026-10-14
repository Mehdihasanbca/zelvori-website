import fs from 'node:fs';

const host = 'zelvori.software';
const keyFile = 'f5440ecc35943a75c29c1b4cf9e00d90.txt';
const key = fs.readFileSync('public/' + keyFile, 'utf8').trim();
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) => m[1].trim());

if (!key || key.length < 8 || key.length > 128 || !/^[a-zA-Z0-9-]+$/.test(key)) {
  console.error('IndexNow was not submitted: invalid key format.');
  process.exit(1);
}
if (urlList.length === 0 || urlList.some((url) => !url.startsWith('https://' + host + '/'))) {
  console.error('IndexNow was not submitted: sitemap URLs are empty or use an unexpected host.');
  process.exit(1);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: 'https://' + host + '/' + keyFile,
    urlList,
  }),
});

const responseBody = await response.text();
if (!response.ok) {
  console.error('IndexNow submission failed with HTTP ' + response.status + ': ' + responseBody.slice(0, 500));
  console.error('Deployment remains successful; check public HTTPS/DNS and key-file accessibility before retrying.');
  process.exit(1);
}
console.log('IndexNow accepted a crawl notification for ' + urlList.length + ' Zelvori URLs (HTTP ' + response.status + '). This does not guarantee indexing or ranking.');
