import type { Publication } from './library';
import { publicationAuthors, publicationDoi, publicationDoiUrl } from './publication-schema';
import { publicationConference } from './conferences';
const escapeBib = (value: string) => value.replace(/\\/g, '\\textbackslash{}').replace(/[{}%&#_]/g, char => `\\${char}`);
export function publicationBibtex(paper: Publication): string {
  const unpublished = ['Submitted', 'Preprint'].includes(paper.status);
  const fields: Record<string, string | undefined> = {
    title: paper.title,
    author: (paper.citationNames ?? publicationAuthors(paper)).map(escapeBib).join(' and '),
    year: paper.year,
    [unpublished ? 'howpublished' : paper.type === 'Journal' ? 'journal' : 'booktitle']: paper.status === 'Preprint' ? 'arXiv preprint' : paper.journalTitle ?? publicationConference(paper)?.name ?? paper.venue,
    eprint: paper.preprintId, archivePrefix: paper.preprintId ? 'arXiv' : undefined,
    volume: paper.volume, number: paper.issue, pages: paper.pages?.replace(/[-–]/g, '--'),
    doi: publicationDoi(paper), url: publicationDoiUrl(paper) ?? paper.externalUrl,
    note: paper.status === 'Published' ? (paper.articleNumber ? `Article ${paper.articleNumber}` : undefined) : paper.status
  };
  return `@${unpublished ? 'unpublished' : paper.type === 'Journal' ? 'article' : 'inproceedings'}{${paper.slug},\n${Object.entries(fields).filter(([,v])=>v).map(([k,v])=>`  ${k} = {${k === 'author' ? v : escapeBib(v!)}},`).join('\n')}\n}\n`;
}
