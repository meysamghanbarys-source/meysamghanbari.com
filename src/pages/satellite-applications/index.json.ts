import {summaries} from '../../data/atlas/catalog';
export const GET=()=>new Response(JSON.stringify(summaries),{headers:{'Content-Type':'application/json; charset=utf-8'}});
