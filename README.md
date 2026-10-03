# meysamghanbari.com

Meysam Ghanbari’s English-only website for advanced communications research across space, optical and quantum networks. Public copy uses a formal third-person voice.

The homepage headline is **Advanced Communications for Space, Optical and Quantum Networks**. Its portrait remains stable; a separate, static spotlight links to eligible events, publications and technical resources.

## Navigation

Technology groups the existing Research and Projects routes. Primary navigation continues with Publications, Talks & Video (`/videos/`), Upcoming, Future Systems (`/insights/`), About and Contact. Media & Press is a secondary footer destination.

Future Systems starts with engineering reading paths to existing technical records. The complete Intelligence, Governance & Civilization collection remains available at its established URLs, below the technical collection.

## Publication updates

Records live in `src/data/library.ts`. Retain the stable slug and confirmed status. Website summaries are editorial briefs, separate from the original abstract.

When a manuscript is supplied:

- Add `abstract` with the complete original abstract. It appears directly after the scholarly header; never substitute a generated summary.
- Add `authorNames` with complete names in the manuscript’s exact order. Existing initials are retained until the source is supplied.
- Add the actual `publicationDate` when known, and confirmed `doi`, `externalUrl` and authorized `pdf` links. Conference year alone does not establish a publication date.
- Add an optional `image` object with `src`, descriptive `alt`, `width`, `height` and a factual `caption`. Label conceptual imagery as an illustration; distinguish it from a figure or actual event photograph.

The template emits repeated `citation_author` tags, the original title, venue, known publication date, and DOI/PDF metadata when present. “et al.” never becomes a fictional author. No missing abstract, author name, result or link is invented.

## English migration

All 64 previously generated Persian URLs were checked against existing English equivalents before retirement. `public/_redirects` contains explicit permanent redirects for both slash variants. Unknown paths retain a genuine 404. New pages must not add Persian navigation, language toggles, Persian sitemap entries or hreflang references to retired routes.

## Build & deployment

- Astro static output; Cloudflare Pages Git integration
- Production branch: `main`
- Install: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Validation: `python scripts/check-built-site.py`

Preview a release branch and check desktop, tablet, mobile, keyboard navigation, publication records, contact validation, redirects, canonicals and sitemaps before promoting the reviewed tree to production. Preserve a baseline commit for rollback. Do not publish raw manuscripts or private editorial ledgers in this repository.
