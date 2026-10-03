import type { Publication } from './library';
import { site } from './site';
import { publicationConference } from './conferences';

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
  const conference = publicationConference(paper);
  const [firstPage, lastPage] = paper.pages?.split(/[-–]/) ?? [];
  const periodical = { '@type':'Periodical', name:paper.journalTitle ?? paper.venue.split(',')[0] };
  const volume = paper.volume ? { '@type':'PublicationVolume', volumeNumber:paper.volume, isPartOf:periodical } : periodical;
  return {
    '@context': 'https://schema.org', '@type': 'ScholarlyArticle', '@id': `${url}#article`,
    headline: paper.title, description: paper.summaryEn, abstract: paper.abstract,
    inLanguage: 'en', author: publicationAuthors(paper).map(name => ({ '@type': 'Person', name })),
    datePublished: publicationDate(paper),
    isPartOf: paper.status === 'Submitted' ? undefined : paper.type === 'Journal' ? (paper.issue ? { '@type':'PublicationIssue', issueNumber:paper.issue, isPartOf:volume } : volume) : { '@type':'CreativeWork', name: conference?.name ?? paper.venue,
      about: conference ? { '@type':'Event', name:conference.name, url:conference.url, location:{ '@type':'Place', name:`${conference.city}, ${conference.country}`, address:{ '@type':'PostalAddress', addressLocality:conference.city, addressCountry:conference.countryCode } } } : undefined },
    pagination: paper.pages, pageStart: firstPage, pageEnd: lastPage,
    keywords: paper.tags.join(', '),
    creativeWorkStatus: paper.status, mainEntityOfPage: url, url, about: paper.tags,
    identifier: publicationDoi(paper), sameAs: paper.externalUrl || publicationDoiUrl(paper),
    image: paper.image ? new URL(paper.image.src, site.domain).href : undefined,
    encoding: paper.pdf ? { '@type': 'MediaObject', contentUrl: publicationPdfUrl(paper), encodingFormat: 'application/pdf' } : undefined
  };
};
