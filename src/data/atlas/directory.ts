import type {Summary} from './catalog';
import {dateLabel} from './taxonomy';
function element<K extends keyof HTMLElementTagNameMap>(tag:K, text?:string, css?:string) {
  const node=document.createElement(tag);
  if(text) node.textContent=text;
  if(css) node.className=css;
  return node;
}
function card(item:Summary, latest:boolean) {
  const entry=element('article',undefined,'atlas-card'), link=element('a');
  link.href=item.url;
  const picture=element('div',undefined,'atlas-card-image'), img=element('img');
  img.src=item.img;img.alt='';img.width=480;img.height=360;img.loading='lazy';picture.append(img);
  const copy=element('div',undefined,'atlas-card-copy'), foot=element('span',undefined,'atlas-card-foot');
  const arrow=element('span','↗');arrow.setAttribute('aria-hidden','true');
  foot.append(element('span',item.orbits.join(' / ')+' · '+dateLabel(item.date)),arrow);
  copy.append(element('span',(latest?'Latest application · ':'')+item.industryName,'atlas-label'),element('h3',item.title),element('p',item.dek),foot);
  link.append(picture,copy);
  const credit=element('a','Image credit','atlas-card-credit');credit.href=item.url+'#observation-credit';
  entry.append(link,credit);return entry;
}
const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function setupDirectory(container:HTMLElement){
  const get=<T extends HTMLElement>(s:string)=>container.querySelector<T>(s)!;
  const search=get<HTMLInputElement>('[data-search]'), selects=[...container.querySelectorAll<HTMLSelectElement>('select[data-key]')];
  const results=get('[data-results]'), total=get('[data-total]'), pages=get('[data-pages]'), empty=get('[data-empty]'), clear=get('[data-reset]'), active=get('[data-active]');
  const pageSize=Number(container.dataset.pageSize);
  let index:Promise<Summary[]>|undefined, revision=0, current=Number(container.dataset.page);
  function load(){
    if(!index) index=fetch(container.dataset.endpoint!).then(r=>{if(!r.ok) throw Error('Unavailable');return r.json() as Promise<Summary[]>;}).catch(e=>{index=undefined;throw e;});
    return index;
  }
  function pageButton(label:string,dest:number){
    const button=element('button',label);button.type='button';
    button.addEventListener('click',()=>{current=dest;void render(true);});return button;
  }
  async function render(focusResults=false){
    const id=++revision;
    const tokens=normalize(search.value).split(/\s+/).filter(Boolean);
    const chosen=Object.fromEntries(selects.map(s=>[s.dataset.key!,s.value]));
    const n=Object.values(chosen).filter(Boolean).length;
    active.textContent=n?' ('+n+')':'';clear.hidden=!(n||tokens.length);
    let items:Summary[];
    try{items=await load();}catch{if(id===revision)total.textContent='Search is unavailable. Published guides are listed below. Try again or browse by industry.';return;}
    if(id!==revision)return;
    const hits=items.filter(a=>{
      if(chosen.industry&&a.industry!==chosen.industry||chosen.type&&a.type!==chosen.type||chosen.orbit&&!a.orbits.includes(chosen.orbit)||chosen.technology&&!a.technologies.includes(chosen.technology))return false;
      const searchable=normalize([a.title,a.dek,a.family,a.industryName,a.type,...a.tags,...a.orbits,...a.technologies].join(' '));
      return tokens.every(t=>searchable.includes(t));
    });
    current=Math.max(1,Math.min(current,Math.ceil(hits.length/pageSize)));
    results.replaceChildren(...hits.slice((current-1)*pageSize,current*pageSize).map(a=>card(a,a.url===items[0]?.url)));
    empty.hidden=hits.length>0;pages.replaceChildren();const count=Math.ceil(hits.length/pageSize);
    pages.hidden=count<=1;
    if(count>1){if(current>1)pages.append(pageButton('← Previous',current-1));pages.append(element('span','Page '+current+' of '+count));if(current<count)pages.append(pageButton('Next →',current+1));}
    total.textContent=hits.length+' '+(n||tokens.length?'matching':'published')+' application'+(hits.length===1?'':'s');
    if(focusResults){const target=get<HTMLElement>('#applications-title');target.tabIndex=-1;target.focus();}
  }
  search.addEventListener('input',()=>{current=1;void render();});
  selects.forEach(s=>s.addEventListener('change',()=>{current=1;void render();}));
  container.querySelectorAll('[data-reset]').forEach(btn=>btn.addEventListener('click',()=>{search.value='';selects.forEach(s=>s.value='');current=1;search.focus();void render();}));
  get('[data-controls]').hidden=false;
}
