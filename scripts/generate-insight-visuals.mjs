import { mkdir, writeFile } from 'node:fs/promises';

const out = new URL('../public/images/insights/concepts/', import.meta.url);
await mkdir(out, { recursive: true });

const visuals = [
  ['beyond-left-right', 'Beyond the binary', '#65d9ff', '#9f8cff', 'spectrum'],
  ['superintelligence-democracy', 'Institution and intelligence', '#79e1ff', '#f2c879', 'network'],
  ['ai-political-decisions', 'Advisory to authority', '#61d6ff', '#ff9b7b', 'threshold'],
  ['governance-optimization', 'Objectives and constraints', '#70e4d1', '#8f9dff', 'control'],
  ['political-short-termism', 'Short cycles, long consequences', '#ffb56b', '#65d9ff', 'timeline'],
  ['democracy-optimal', 'Institutional evolution', '#65d9ff', '#f0d08a', 'evolution'],
  ['ai-voters-decide', 'Competence and legitimacy', '#89dcff', '#ff8da1', 'balance'],
  ['post-ideological-governance', 'Adaptive policy space', '#9f8cff', '#65d9ff', 'spectrum'],
  ['technocracy-weighted-decisions', 'Knowledge and authority', '#71e2cb', '#9f8cff', 'weights'],
  ['civilization-long-term-planning', 'Civilization time horizon', '#65d9ff', '#f2c879', 'timeline'],
  ['human-survival-expansion', 'From planet to plurality', '#65d9ff', '#f2c879', 'orbit'],
  ['future-human-enhancement', 'Biology meets intelligence', '#9f8cff', '#65d9ff', 'evolution'],
  ['happiness-longevity-progress', 'Competing objectives', '#f2c879', '#65d9ff', 'balance'],
  ['ai-surveillance-freedom', 'Observation and autonomy', '#ff7f88', '#9f8cff', 'eye'],
  ['post-work-society', 'Production without employment', '#65d9ff', '#70e4d1', 'network']
];

const motifs = {
  spectrum: (a,b) => `<path d="M120 570 C330 280 500 310 760 120"/><path d="M1080 570 C870 280 700 310 440 120"/><circle cx="600" cy="345" r="68" fill="url(#g)"/>`,
  network: () => `<g>${[[170,190],[380,120],[580,260],[790,110],[1010,210],[260,500],[520,520],[820,470],[1040,540]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="18"/><path d="M600 345 L${x} ${y}"/>`).join('')}</g><circle cx="600" cy="345" r="82" fill="url(#g)"/>`,
  threshold: () => `<path d="M120 520 H470 V390 H730 V250 H1080"/><path d="M600 100 V590" stroke-dasharray="12 16"/><circle cx="600" cy="390" r="54" fill="url(#g)"/>`,
  control: () => `<path d="M160 360 H350 C380 210 470 180 560 340 S760 520 850 350 H1040"/><rect x="478" y="258" width="244" height="174" rx="28" fill="url(#g)"/><path d="M600 215 V120 M600 570 V475"/>`,
  timeline: () => `<path d="M120 390 H1080"/><g>${[180,340,500,660,820,980].map((x,i)=>`<circle cx="${x}" cy="390" r="${14+i*5}"/><path d="M${x} 390 V${i%2?190:540}"/>`).join('')}</g>`,
  evolution: () => `<circle cx="250" cy="390" r="38"/><circle cx="430" cy="350" r="58"/><circle cx="650" cy="310" r="82"/><circle cx="930" cy="270" r="116" fill="url(#g)"/><path d="M290 380 L370 360 M488 340 L568 320 M732 295 L814 282"/>`,
  balance: () => `<path d="M600 145 V540 M280 250 H920 M310 250 L190 510 H430 Z M890 250 L770 510 H1010 Z"/><circle cx="600" cy="160" r="52" fill="url(#g)"/>`,
  weights: () => `<g>${[150,300,470,680,880,1050].map((x,i)=>`<circle cx="${x}" cy="${500-i*58}" r="${20+i*8}"/>`).join('')}</g><path d="M120 560 C380 520 650 260 1080 120"/>`,
  orbit: () => `<circle cx="600" cy="360" r="118" fill="url(#g)"/><ellipse cx="600" cy="360" rx="420" ry="170"/><ellipse cx="600" cy="360" rx="300" ry="260" transform="rotate(-20 600 360)"/><circle cx="972" cy="285" r="26"/>`,
  eye: () => `<path d="M130 360 Q600 40 1070 360 Q600 680 130 360 Z"/><circle cx="600" cy="360" r="132"/><circle cx="600" cy="360" r="54" fill="url(#g)"/><path d="M600 90 V180 M600 540 V630 M330 150 L390 225 M870 150 L810 225"/>`
};

for (const [slug,title,a,b,motif] of visuals) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="t d">
  <title id="t">${title}</title><desc id="d">Future Systems conceptual diagram by Meysam Ghanbari</desc>
  <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#071423"/><stop offset="1" stop-color="#03070e"/></linearGradient><radialGradient id="g"><stop stop-color="${a}" stop-opacity=".95"/><stop offset="1" stop-color="${b}" stop-opacity=".2"/></radialGradient><pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#b9eaff" stroke-opacity=".055"/></pattern></defs>
  <rect width="1200" height="675" fill="url(#bg)"/><rect width="1200" height="675" fill="url(#grid)"/>
  <g fill="none" stroke="${a}" stroke-width="3" stroke-opacity=".72">${motifs[motif](a,b)}</g>
  <g fill="${a}" fill-opacity=".72"><circle cx="88" cy="82" r="5"/><circle cx="1112" cy="593" r="5"/></g>
  <path d="M80 610 H310" stroke="${b}" stroke-width="4"/><path d="M890 66 H1120" stroke="${a}" stroke-width="4"/>
  </svg>`;
  await writeFile(new URL(`${slug}.svg`, out), svg);
}
