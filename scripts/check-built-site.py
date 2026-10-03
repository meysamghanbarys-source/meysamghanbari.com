"""Validate generated pages, local links, scholarly metadata and the English migration."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote
import json

ROOT = Path(__file__).resolve().parents[1] / 'dist'
DOMAIN = 'https://meysamghanbari.com'
class Page(HTMLParser):
    def __init__(self, content):
        super().__init__(); self.attrs={}; self.links=[]; self.images=[]; self.ids=set(); self.meta={}; self.headings=[]; self.ld=[]; self.script=None; self.buffer=[]; self.text=[]
        self.feed(content)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='html': self.attrs=a
        if a.get('id'): self.ids.add(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='img': self.images.append(a)
        if tag=='h1': self.headings.append(a)
        if tag=='meta': self.meta.setdefault(a.get('name',''), []).append(a.get('content',''))
        if tag=='link' and a.get('rel')=='canonical': self.meta['canonical']=[a.get('href')]
        if tag=='script': self.script=a.get('type','script'); self.buffer=[]
    def handle_data(self, data):
        if self.script: self.buffer.append(data)
        else: self.text.append(data)
    def handle_endtag(self, tag):
        if tag=='script':
            if self.script=='application/ld+json': self.ld.append(json.loads(''.join(self.buffer)))
            self.script=None

pages={('/'+p.relative_to(ROOT).as_posix().removesuffix('index.html')):Page(p.read_text()) for p in ROOT.rglob('index.html')}
errors=[]; image_count=0; local_link_count=0
for path,page in pages.items():
    if page.attrs.get('lang')!='en' or page.attrs.get('dir')!='ltr': errors.append(f'{path}: language')
    if len(page.headings)!=1: errors.append(f'{path}: h1 count {len(page.headings)}')
    if page.meta.get('canonical')!=[DOMAIN+path]: errors.append(f'{path}: canonical')
    if '/fa/' in ''.join(page.meta.get('canonical',[])): errors.append(f'{path}: Persian canonical')
    for image in page.images:
        image_count+=1
        if 'alt' not in image: errors.append(f'{path}: missing image alt')
        if image.get('src','').startswith('/') and not (ROOT/image['src'].lstrip('/')).is_file(): errors.append(f'{path}: missing image {image["src"]}')
    for link in page.links:
        url=urlparse(link)
        if url.scheme and (url.scheme!='https' or url.netloc!='meysamghanbari.com'): continue
        target=url.path or path
        if not target.startswith('/'): continue
        local_link_count+=1
        if target.startswith('/fa'): errors.append(f'{path}: retired link {link}')
        file=ROOT/unquote(target.lstrip('/'))
        if target in pages or target.rstrip('/')+'/' in pages: file=file/'index.html'
        if not file.is_file(): errors.append(f'{path}: broken link {link}')
        targetpage=pages.get(target) or pages.get(target.rstrip('/')+'/')
        if url.fragment and targetpage and url.fragment not in targetpage.ids: errors.append(f'{path}: missing anchor {link}')
    if path.startswith('/publications/') and path!='/publications/':
        if not page.meta.get('citation_title') or not page.meta.get('citation_author'): errors.append(f'{path}: missing scholarly metadata')
        for schema in page.ld:
            if schema.get('@type')=='ScholarlyArticle':
                if any('et al' in a['name'].lower() for a in schema['author']): errors.append(f'{path}: fictional author')
                if schema['creativeWorkStatus']=='Submitted' and schema.get('datePublished'): errors.append(f'{path}: submitted work publication date')
    if any('FRAMEWORK READY' in t for t in page.text): errors.append(f'{path}: empty framework placeholder')
    if any('\u0600'<=c<='\u06ff' for t in page.text for c in t): errors.append(f'{path}: Persian public text')
for filename in ['sitemap-0.xml','image-sitemap.xml']:
    if '/fa/' in (ROOT/filename).read_text(): errors.append(f'{filename}: retired URLs')
redirects=[line.split() for line in (ROOT/'_redirects').read_text().splitlines() if line and not line.startswith('#')]
if len(redirects)!=128: errors.append('Unexpected English migration redirect count')
for source,dest,status in redirects:
    if dest not in pages or status!='301': errors.append(f'Invalid redirect {source}')
if (ROOT/'fa').exists(): errors.append('Persian pages are still generated')
print(json.dumps({'pages':len(pages),'images':image_count,'local_links':local_link_count,'redirect_rules':len(redirects),'errors':errors}, indent=2))
raise SystemExit(bool(errors))
