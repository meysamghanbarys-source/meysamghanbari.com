import { publications } from '../../data/library';
import { publicationBibtex } from '../../data/publication-citations';
import type { APIRoute } from 'astro';
export function getStaticPaths() { return publications.map(paper => ({params:{slug:paper.slug},props:{paper}})); }
export const GET: APIRoute = ({props}) => new Response(publicationBibtex(props.paper), {headers:{'Content-Type':'application/x-bibtex; charset=utf-8'}});
