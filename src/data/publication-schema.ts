import type { Publication } from './library';
import { site } from './site';

// Explicit names supplied with a paper take precedence; legacy initials remain unchanged.
// “et al.” is not an author identity and must never become a Person in structured data.
export const publicationAuthors = (paper: Publication) => paper.authorNames ?? paper.authors
  .replace(/\s+et\s+al\.?/gi, '')
  .split(/,\s*(?:and\s+)?|\s+and\s+/)
  .map(name => name.trim()).filter(Boolean);
export const publicationDoi = (paper: Publication) => paper.doi?.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').trim();
export const publicationDoiUrl = (paper: Publication) => publicationDoi(paper) ? `https://doi.org/${publicationDoi(paper)}` : undefined;
export const publicationDate = (paper: Publication) => paper.publicationDate ?? (paper.status === 'Published' ? paper.year : undefined);
export const publicationPdfUrl = (paper: Publication) => paper.pdf ? new URL(paper.pdf, site.domain).href : undefined;

export const publicationSchema = (paper: Publication, _lang: 'en' | 'fa' = 'en') => {
  const url = `${site.domain}/publications/${paper.slug}/`;
  return {
    '@context': 'https://schema.org', '@type': 'ScholarlyArticle', '@id': `${url}#article`,
    headline: paper.title, description: paper.summaryEn, abstract: paper.abstract,
    inLanguage: 'en', author: publicationAuthors(paper).map(name => ({ '@type': 'Person', name })),
    datePublished: publicationDate(paper),
    isPartOf: paper.status === 'Submitted' ? undefined : { '@type': paper.type === 'Journal' ? 'Periodical' : 'CreativeWork', name: paper.venue },
    creativeWorkStatus: paper.status, mainEntityOfPage: url, url, about: paper.tags,
    identifier: publicationDoi(paper), sameAs: paper.externalUrl || publicationDoiUrl(paper),
    image: paper.image ? new URL(paper.image.src, site.domain).href : undefined,
    encoding: paper.pdf ? { '@type': 'MediaObject', contentUrl: publicationPdfUrl(paper), encodingFormat: 'application/pdf' } : undefined
  };
};
