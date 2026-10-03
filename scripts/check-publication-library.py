"""Check the published HTML contract, citation exports, and stable manuscript records."""
import json, re
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'src/data/publication-content.json').read_text())
papers = {slug: paper for slug, paper in data['updates'].items() if paper.get('editorial')}
papers.update({paper['slug']: paper for paper in data['newPapers']})

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.metas={}; self.ld=[]; self.script=False; self.buffer=[]
        self.text=[]; self.abstract=False; self.abstract_text=[]; self.library_depth=0; self.library_text=[]; self.records=0
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='meta': self.metas.setdefault(a.get('name'),[]).append(a.get('content'))
        if tag=='script': self.script=a.get('type')=='application/ld+json'; self.buffer=[]
        if tag=='section' and 'publication-abstract' in a.get('class',''): self.abstract=True
        if tag=='article' and 'library-record' in a.get('class',''): self.library_depth+=1; self.records+=1
    def handle_data(self, text):
        if self.script: self.buffer.append(text)
        else:
            self.text.append(text)
            if self.abstract: self.abstract_text.append(text)
            if self.library_depth: self.library_text.append(text)
    def handle_endtag(self, tag):
        if tag=='script' and self.script: self.ld.append(json.loads(''.join(self.buffer))); self.script=False
        if tag=='section': self.abstract=False
        if tag=='article': self.library_depth=0

index=Page((ROOT/'dist/publications/index.html').read_text())
errors=[]
def require(ok, message):
    if not ok: errors.append(message)
visible=' '.join(index.library_text)
require(index.records==17+len(data['newPapers']), 'Existing records duplicated or removed')
require(not any(name in visible for p in papers.values() for name in p['authorNames']), 'Authors visibly displayed in index rows')
for slug,paper in papers.items():
    page=Page((ROOT/f'dist/publications/{slug}/index.html').read_text())
    require(page.metas.get('citation_author')==paper['authorNames'], f'{slug}: author spelling/order')
    require(paper['abstract'] in ''.join(page.abstract_text), f'{slug}: original abstract changed or absent')
    article=next(x for x in page.ld if x.get('@type')=='ScholarlyArticle')
    require(article.get('abstract')==paper['abstract'], f'{slug}: abstract missing from article schema')
    require([x['name'] for x in article['author']]==paper['authorNames'], f'{slug}: structured author order')
    body=' '.join(page.text)
    require(paper['editorial']['question'] in body and paper['editorial']['answer'] in body, f'{slug}: question/answer missing')
    bib=(ROOT/f'dist/publications/{slug}.bib').read_text()
    require(paper['doi'] in bib and all(n in bib for n in paper['citationNames']), f'{slug}: incomplete citation export')
    require('Concept illustration supplied' in body, f'{slug}: concept image not identified')
    require(f'https://meysamghanbari.com/publications/{slug}/' in (ROOT/'dist/sitemap-0.xml').read_text(), f'{slug}: sitemap missing')
    if slug in ['meteorological-conditions-performance-optimization-miso-fso','ber-mixed-underwater-owc-fso-relaying-pointing-error','outage-uav-mixed-underwater-fso-pointing-errors','optical-irs-assisted-relay-los-qkd','secrecy-analysis-pinching-antenna-systems']:
        require('addressLocality' in json.dumps(article), f'{slug}: conference location absent from schema')
require('M × P' in ' '.join(Page((ROOT/'dist/publications/meteorological-conditions-performance-optimization-miso-fso/index.html').read_text()).text), 'Weather comparison lost its total-power condition')
require('FSO hop' in ' '.join(Page((ROOT/'dist/publications/ber-mixed-underwater-owc-fso-relaying-pointing-error/index.html').read_text()).text), 'BER result lost hop-specific condition')
vtc=Page((ROOT/'dist/publications/progressively-attenuated-multi-branch-reception-inter-haps/index.html').read_text())
require(next(x for x in vtc.ld if x.get('@type')=='ScholarlyArticle')['creativeWorkStatus']=='Accepted', 'Owner-confirmed VTC acceptance changed')
print(json.dumps({'manuscripts':len(papers),'publication_rows':index.records,'errors':errors},indent=2))
raise SystemExit(bool(errors))
