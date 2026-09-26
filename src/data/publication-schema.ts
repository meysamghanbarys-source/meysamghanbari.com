import type { Publication } from './library';
import { site } from './site';

export const publicationSchema = (paper: Publication, lang: 'en' | 'fa') => {
  const url = `${site.domain}/${lang === 'fa' ? 'fa/' : ''}publications/${paper.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': `${url}#article`,
    headline: paper.title,
    description: lang === 'fa' ? paper.summaryFa : paper.summaryEn,
    inLanguage: lang === 'fa' ? 'fa-IR' : 'en',
    author: paper.authors.split(/,\s*(?:and\s+)?/).map((name) => ({ '@type': 'Person', name })),
    datePublished: paper.status === 'Published' ? paper.year : undefined,
    isPartOf: paper.status === 'Submitted' ? undefined : { '@type': 'Periodical', name: paper.venue },
    creativeWorkStatus: paper.status,
    mainEntityOfPage: url,
    url,
    about: paper.tags,
    identifier: paper.doi || undefined,
    sameAs: paper.externalUrl || paper.doi || undefined,
    encoding: paper.pdf ? { '@type': 'MediaObject', contentUrl: paper.pdf, encodingFormat: 'application/pdf' } : undefined
  };
};
