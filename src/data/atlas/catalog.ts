import { articleUrl, industryById } from './taxonomy';
export interface AtlasImage {title:string;alt:string;caption:string;credit:string;source:string;rights:string;rightsUrl:string;files:{src:string;width:number;height:number}[]}
interface Item {title:string;text:string}
export interface Article {
  id:string; slug:string; title:string; dek:string; industry:string; family:string; tags:string[]; orbits:string[]; technologies:string[];type:string;published:string;reviewed:string;
  glance:{label:string;value:string}[];problem:string[];workflow:Item[];hardware:Item[];orbitsCompared:{orbit:string;status:string;geometry:string;performance:string;decision:string}[];
  costs:{model:string;headline:string;unit:string;detail:string}[];markets:{country:string;iso:string;latitude:number;longitude:number;reason:string}[];
  providers:{name:string;status:string;text:string}[];limits:Item[];pilot:Item[];conclusion:string[];sources:{id:number;title:string;publisher:string;url:string;date:string}[];
  imageComparison?:[string,string];images:{hero:AtlasImage;evidence:AtlasImage;hardware?:AtlasImage};
}
const files=import.meta.glob<Article>('./articles/*.json',{eager:true,import:'default'});
export const articles=Object.values(files).sort((a,b)=>b.published.localeCompare(a.published)||a.slug.localeCompare(b.slug));
export function summarize(a:Article){
  const img=a.images.hero.files[0];
  return {title:a.title,dek:a.dek,url:articleUrl(a),industry:a.industry,industryName:industryById.get(a.industry)!.name,family:a.family,orbits:a.orbits,technologies:a.technologies,type:a.type,date:a.published,img:img.src,alt:a.images.hero.alt,tags:[...a.tags,...a.markets.map(m=>m.country),...a.glance.map(g=>g.value.replace(/\[\d+\]/g,'')),a.problem.join(' ').slice(0,350)]};
}
export const summaries=articles.map(summarize);
export type Summary=ReturnType<typeof summarize>;
export function related(a:Article){
  const score=(b:Article)=>Number(a.industry===b.industry)*4+Number(a.family===b.family)*3+a.technologies.filter(t=>b.technologies.includes(t)).length;
  return articles.filter(b=>b.id!==a.id&&score(b)>0).sort((b,c)=>score(c)-score(b)).slice(0,3);
}
