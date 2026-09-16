# meysamghanbari.com

Official bilingual personal research website scaffold for **Meysam Ghanbari**.

## Positioning

The public-facing identity is intentionally centered on:

**Researcher in Optical & Satellite Communications**

The site is not positioned as a student profile. Academic affiliations can be added factually in the About page without making them the main brand.

## Stack

- Astro
- Static output
- Cloudflare Pages
- English primary language
- Persian at `/fa/`
- SEO-ready metadata, canonical URLs, `hreflang`, Open Graph, JSON-LD, sitemap and robots.txt

## Main routes

- `/`
- `/research`
- `/projects`
- `/publications`
- `/videos`
- `/insights`
- `/media`
- `/about`
- `/contact`
- `/fa/` and equivalent Persian routes

## Where content is managed

- `src/data/site.ts` — navigation, page copy, research themes
- `src/data/library.ts` — publications, projects, videos, insights and media
- `public/images/` — profile, project, publication and media images

This separation is deliberate so a future website agent can update content without redesigning the site.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output directory:

```text
dist
```

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Before public launch

1. Replace the portrait placeholder with a professional portrait.
2. Activate `contact@meysamghanbari.com` or change the contact email in `src/data/site.ts`.
3. Verify every publication, venue, DOI and external URL before adding it.
4. Add Google Scholar, ORCID, IEEE, LinkedIn and GitHub URLs to `socialLinks`.
5. Add real paper/project thumbnails under `public/images/`.
6. Connect Google Search Console after the custom domain is live.
7. Never commit API keys, passwords or private documents to this repository.
