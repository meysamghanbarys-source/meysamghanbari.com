import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const output = new URL('../dist/', import.meta.url);
const domain = 'https://meysamghanbari.com';
const pages = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name === 'index.html') pages.push(file);
  }
}

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

await walk(output.pathname);
const entries = [];

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) continue;

  const images = new Set();
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    const src = tag.match(/\bsrc="(\/[^"]+)"/)?.[1];
    const alt = tag.match(/\balt="([^"]*)"/)?.[1];
    if (src?.startsWith('/images/') && alt?.trim()) images.add(`${domain}${src}`);
  }
  if (!images.size) continue;
  const imageTags = [...images].map((url) => `    <image:image><image:loc>${escapeXml(url)}</image:loc></image:image>`).join('\n');
  entries.push(`  <url><loc>${escapeXml(canonical)}</loc>\n${imageTags}\n  </url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`;
await writeFile(new URL('image-sitemap.xml', output), xml);
console.log(`Image sitemap generated for ${entries.length} pages.`);

// Track actual research-note revisions, rather than reporting every build as a content update.
const publicationContent = JSON.parse(await readFile(new URL('../src/data/publication-content.json', import.meta.url), 'utf8'));
const revisions = new Map([
  ...Object.entries(publicationContent.updates).map(([slug,paper]) => [slug,paper.editorialUpdated]),
  ...publicationContent.newPapers.map(paper => [paper.slug,paper.editorialUpdated])
].filter(([,date]) => date));
const sitemapPath = new URL('sitemap-0.xml', output);
let sitemapXml = await readFile(sitemapPath,'utf8');
sitemapXml = sitemapXml.replace(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (entry,url,tail) => {
  const slug = url.match(/\/publications\/([^/]+)\/?$/)?.[1];
  const date = url === `${domain}/publications/` ? '2026-10-03' : revisions.get(slug);
  return date ? `<url><loc>${url}</loc>${tail.replace(/<lastmod>[^<]*<\/lastmod>/g,'')}<lastmod>${date}</lastmod></url>` : entry;
});
await writeFile(sitemapPath,sitemapXml);
