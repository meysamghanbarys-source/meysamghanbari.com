import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const project=fileURLToPath(new URL('../',import.meta.url));
const folder=resolve(project,'src/data/atlas/articles');
const topics=new Set(), slugs=new Set(), dates=new Set();
const industryIds=[...readFileSync(resolve(project,'src/data/atlas/taxonomy.ts'),'utf8').matchAll(/\{id:'([a-z-]+)', name:/g)].map(match=>match[1]);
const datePattern=/^\d{4}-\d{2}-\d{2}$/;
const identifier=/^[a-z0-9]+(-[a-z0-9]+)*$/;
const sourceLink=value=>{const parsed=new URL(value);assert.equal(parsed.protocol,'https:');assert.ok(!parsed.username&&!parsed.password);};
const unique=(set,value)=>{assert.ok(!set.has(value),'Duplicate '+value);set.add(value);};
function checkDate(value){assert.match(value,datePattern);assert.equal(new Date(value+'T12:00:00Z').toISOString().slice(0,10),value);}
function image(record){
  for(const key of ['alt','caption','title','source','rights','credit','rightsUrl'])assert.ok(record[key]?.trim(),'Missing image '+key);
  [record.source,record.rightsUrl].forEach(sourceLink);
  assert.ok(record.files.length>=2,'Two responsive image sizes required');
  let previous=0;
  for(const file of record.files){
    assert.match(file.src,/^\/images\/atlas\/[a-z0-9/_-]+\.(?:webp|avif|jpg|png)$/);
    assert.ok(file.width>previous&&file.height>0&&existsSync(resolve(project,'public'+file.src)),'Missing or unsorted image '+file.src);previous=file.width;
  }
}
for(const file of readdirSync(folder).filter(n=>n.endsWith('.json'))){
 try{
  const a=JSON.parse(readFileSync(resolve(folder,file),'utf8'));
  assert.equal(a.scope,'civilian');assert.match(a.id,/^atlas-\d{3,}$/);assert.match(a.slug,identifier);assert.equal(file,a.slug+'.json');
  unique(topics,a.id);unique(slugs,a.slug);unique(dates,a.published);checkDate(a.published);checkDate(a.reviewed);assert.ok(a.reviewed>=a.published);
  assert.ok(industryIds.includes(a.industry));for(const k of ['title','family','type','dek'])assert.ok(a[k]?.trim(),'Missing '+k);
  const dimensions={glance:['label','value'],workflow:['title','text'],hardware:['title','text'],orbitsCompared:['orbit','status','geometry','performance','decision'],costs:['model','headline','unit','detail'],markets:['country','iso','reason'],providers:['name','status','text'],limits:['title','text'],pilot:['title','text'],sources:['title','publisher','url','date']};
  for(const [group,keys] of Object.entries(dimensions)){assert.ok(a[group]?.length,'Missing '+group);for(const item of a[group])for(const key of keys)assert.ok(typeof item[key]==='string'&&item[key].trim(),group+'.'+key);}
  for(const key of ['problem','conclusion','tags','orbits','technologies'])assert.ok(a[key]?.length&&a[key].every(v=>typeof v==='string'&&v.trim()),'Missing '+key);
  const orbits=new Set(a.orbitsCompared.map(o=>o.orbit));for(const name of ['LEO','MEO','GEO'])assert.ok(orbits.has(name),'Missing comparison for '+name);
  assert.ok(a.costs.length>=3,'Compare existing access, hosting and ownership');
  const ids=new Set(),urls=new Set();
  for(const [i,source] of a.sources.entries()){assert.equal(source.id,i+1,'Source numbering');unique(ids,source.id);unique(urls,source.url);sourceLink(source.url);}
  const used=new Set();const content=[a.glance,a.problem,a.workflow,a.hardware,a.orbitsCompared,a.costs,a.markets,a.providers,a.limits,a.pilot,a.conclusion];
  for(const match of JSON.stringify(content).matchAll(/\[(\d+)\]/g)){const id=Number(match[1]);assert.ok(ids.has(id),'Missing source '+id);used.add(id);}
  assert.equal(used.size,ids.size,'Uncited source');
  for(const cost of a.costs)assert.match(cost.detail,/\[\d+\]/,'Cost evidence');
  for(const m of a.markets){assert.ok(Number.isFinite(m.longitude)&&Math.abs(m.longitude)<=180&&Number.isFinite(m.latitude)&&Math.abs(m.latitude)<=90);assert.match(m.iso,/^[A-Z]{2}$/);}
  image(a.images.hero);image(a.images.evidence);if(a.images.hardware)image(a.images.hardware);
 }catch(error){throw new Error(file+': '+error.message,{cause:error});}
}
assert.ok(topics.size,'No published applications');
console.log('Atlas content verified: '+topics.size+' publication(s), unique release dates, valid references and responsive assets.');
