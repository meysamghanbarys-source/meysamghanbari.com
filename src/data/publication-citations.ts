import type { Publication } from './library';
import { publicationAuthors, publicationDoi, publicationDoiUrl } from './publication-schema';
import { publicationConference } from './conferences';
const escapeBib = (value: string) => value.replace(/\\/g, '\\textbackslash{}').replace(/[{}%&#_]/g, char => `\\${char}`);
export function publicationBibtex(paper: Publication): string {
  const fields: Record<string, string | undefined> = {
    title: paper.title,
    author: (paper.citationNames ?? publicationAuthors(paper)).map(escapeBib).join(' and '),
    year: paper.year,
    [paper.status === 'Submitted' ? 'howpublished' : paper.type === 'Journal' ? 'journal' : 'booktitle']: paper.journalTitle ?? publicationConference(paper)?.name ?? paper.venue,
    volume: paper.volume, number: paper.issue, pages: paper.pages?.replace(/[-–]/g, '--'),
    doi: publicationDoi(paper), url: publicationDoiUrl(paper) ?? paper.externalUrl,
    note: paper.status === 'Published' ? (paper.articleNumber ? `Article ${paper.articleNumber}` : undefined) : paper.status
  };
  return `@${paper.status === 'Submitted' ? 'unpublished' : paper.type === 'Journal' ? 'article' : 'inproceedings'}{${paper.slug},\n${Object.entries(fields).filter(([,v])=>v).map(([k,v])=>`  ${k} = {${k === 'author' ? v : escapeBib(v!)}},`).join('\n')}\n}\n`;
}
