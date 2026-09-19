export type InsightSource = { name: string; publisher: string; url: string };
export type InsightSection = { heading: string; paragraphs: string[] };
export type Insight = {
  number: string;
  slug: string;
  title: string;
  cardTitle: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  primaryKeyword: string;
  keywords: string[];
  domain: string;
  domainSlug: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  theme: string;
  portrait: string;
  portraitAlt: string;
  conceptImage: string;
  conceptAlt: string;
  hook: string;
  thesis: string;
  sections: InsightSection[];
  tensionTitle: string;
  tension: string[];
  conclusion: string;
  faqs: Array<{ question: string; answer: string }>;
  sources: InsightSource[];
  related: string[];
};

const S = {
  nist: { name: 'AI Risk Management Framework', publisher: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  oecdAI: { name: 'Governing with Artificial Intelligence', publisher: 'OECD', url: 'https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en.html' },
  unAI: { name: 'Governing AI for Humanity', publisher: 'United Nations', url: 'https://www.un.org/en/node/210865' },
  unescoAI: { name: 'Recommendation on the Ethics of Artificial Intelligence', publisher: 'UNESCO', url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics' },
  euAI: { name: 'European approach to artificial intelligence', publisher: 'European Commission', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  oecdForesight: { name: 'Strategic Foresight', publisher: 'OECD', url: 'https://www.oecd.org/en/topics/strategic-foresight.html' },
  ipcc: { name: 'AR6 Synthesis Report', publisher: 'IPCC', url: 'https://www.ipcc.ch/report/ar6/syr/' },
  whoPandemic: { name: 'World Health Assembly adopts WHO Pandemic Agreement', publisher: 'World Health Organization', url: 'https://www.who.int/news/item/20-05-2025-world-health-assembly-adopts-historic-pandemic-agreement-to-make-the-world-more-equitable-and-safer-from-future-pandemics' },
  nasa: { name: 'Moon to Mars', publisher: 'NASA', url: 'https://www.nasa.gov/moontomars/' },
  ilo: { name: 'Generative AI and Jobs: A Refined Global Index of Occupational Exposure', publisher: 'International Labour Organization', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure' },
  whoAgeing: { name: 'UN Decade of Healthy Ageing', publisher: 'World Health Organization', url: 'https://www.who.int/initiatives/decade-of-healthy-ageing' },
  unescoNeuro: { name: 'Recommendation on the Ethics of Neurotechnology', publisher: 'UNESCO', url: 'https://www.unesco.org/en/ethics-neurotech/recommendation' },
  unEgov: { name: 'UN E-Government Survey 2024', publisher: 'United Nations', url: 'https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024' }
};

const governancePortrait = '/images/insights/meysam-ghanbari-future-systems-governance.webp';
const intelligencePortrait = '/images/insights/meysam-ghanbari-superintelligence-human-enhancement.webp';
const civilizationPortrait = '/images/insights/meysam-ghanbari-future-civilization-space.webp';
const domain = 'Intelligence, Governance & Civilization';
const domainSlug = 'intelligence-governance';

export const insightDomains = [
  { slug: domainSlug, title: domain, state: 'active', description: 'AI, institutional design, legitimacy, long-term planning and the operating systems of future civilization.' },
  { slug: 'technology', title: 'Technology', state: 'framework', description: 'Deep technology, communications, photonics, quantum systems and technological transformation.' },
  { slug: 'longevityscape', title: 'Longevityscape', state: 'framework', description: 'Longevity science, biological aging, future medicine and lifespan technologies.' },
  { slug: 'future-civilization', title: 'Future Civilization', state: 'framework', description: 'Civilization survival, post-scarcity systems, future institutions and planetary-scale progress.' },
  { slug: 'human-enhancement', title: 'Human Enhancement', state: 'framework', description: 'Genetics, neurotechnology, cognitive augmentation and human–AI integration.' },
  { slug: 'space-expansion', title: 'Space & Expansion', state: 'framework', description: 'Space civilization, interplanetary infrastructure and humanity beyond Earth.' },
  { slug: 'science-society', title: 'Science & Society', state: 'framework', description: 'Science policy, rational institutions and societal transformation through evidence.' }
];

export const insights: Insight[] = [
  {
    number: '01', slug: 'beyond-left-and-right',
    title: 'Beyond Left and Right: Can Superintelligence Help Design Better Governance?',
    cardTitle: 'Beyond Left and Right', seoTitle: 'Superintelligence and Future Governance | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari examines whether superintelligent AI could support governance beyond left-right ideology—and the risks of optimizing society.',
    excerpt: 'A systems-level inquiry into whether policy can move beyond inherited ideological packages toward evidence, prediction and adaptive optimization.',
    primaryKeyword: 'superintelligence and future governance', keywords: ['governance beyond left and right', 'AI governance', 'future political systems'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'cyan-violet',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari in a future-systems environment exploring AI governance beyond left and right',
    conceptImage: '/images/insights/concepts/beyond-left-right-photorealistic.webp', conceptAlt: 'Future civic chamber where opposing political aisles converge into an adaptive evidence-driven decision system',
    hook: 'What if left and right are no longer the most useful coordinates for governing a technologically complex civilization?',
    thesis: 'Meysam Ghanbari argues that ideology should become a hypothesis to test, not a package to inherit. Advanced AI could compare policy outcomes across many dimensions—but only after society confronts the harder question of who defines success.',
    sections: [
      { heading: 'Ideology is a compression system', paragraphs: ['Left and right bundle many independent choices—taxation, industrial policy, civil liberty, welfare, energy and foreign affairs—into identities. That compression once made mass politics legible. It can also prevent a policy from being judged on its own evidence. A city may need market pricing for congestion, public investment in transit and strict privacy limits for mobility data at the same time. The best combination does not necessarily sit at one point on a nineteenth-century spectrum.'] },
      { heading: 'From packages to policy search', paragraphs: ['Machine intelligence can search a larger design space than a political party can defend in an election. Models could compare infrastructure plans under population growth, energy shocks, climate scenarios and budget constraints; they could expose tradeoffs rather than conceal them behind slogans. OECD research already documents government AI being used for forecasting, anomaly detection and service delivery. These are early instruments, not superintelligence, but they show how governance can become more analytical.'] },
      { heading: 'The objective function is politics', paragraphs: ['A model cannot derive the good society from data alone. Maximizing output may damage autonomy. Maximizing stability may suppress dissent. Maximizing average health may neglect rare conditions. Values enter through objectives, constraints, measurement and the distribution of error. The central constitutional task of an AI-assisted state would therefore be deciding which goals may be optimized, which rights remain non-negotiable and how conflicts are appealed.'] },
      { heading: 'A practical transition', paragraphs: ['The credible path is not a sudden machine government. It is layered delegation: human institutions define rights and goals; audited systems forecast consequences; limited administrative domains use automation under explicit thresholds; independent bodies test failures; citizens and experts can challenge outputs. Evidence can weaken ideological rigidity without erasing legitimacy.'] },
      { heading: 'Beyond the spectrum, not beyond accountability', paragraphs: ['Post-ideological governance should mean greater willingness to revise policy, not the disappearance of politics. Data can narrow disputes about consequences, but disagreement about values will remain. A system worthy of the future must become more adaptive and more accountable at the same time.'] }
    ],
    tensionTitle: 'Who defines the objective function?', tension: ['If a superintelligent system can optimize policy, authority still begins with the choice of target. Survival, liberty, equality, longevity, prosperity and expansion can conflict. Ghanbari’s position is that this choice should be explicit, measurable and revisable—not hidden inside ideology or software.'],
    conclusion: 'The alternative to left and right is not a single new doctrine. It is a governance architecture that treats policies as testable designs, keeps constitutional limits visible and uses intelligence to enlarge the range of workable choices.',
    faqs: [{ question: 'What is governance beyond left and right?', answer: 'It is an approach that evaluates policies by evidence, outcomes and explicit values rather than accepting a fixed ideological package.' }, { question: 'Could superintelligence make governance objective?', answer: 'No. It may improve forecasting and optimization, but objectives, rights and acceptable risks remain political and ethical choices.' }],
    sources: [S.oecdAI, S.nist, S.unAI], related: ['post-ideological-governance', 'governance-optimization', 'superintelligence-and-democracy']
  },
  {
    number: '02', slug: 'superintelligence-and-democracy',
    title: 'Superintelligence and the Future of Democracy', cardTitle: 'Superintelligence and Democracy',
    seoTitle: 'Superintelligence and the Future of Democracy | Meysam Ghanbari',
    metaDescription: 'Can democratic institutions remain sufficient if machine intelligence becomes better at forecasting and complex policy analysis? Meysam Ghanbari explores the tension.',
    excerpt: 'Democracy solved problems of legitimacy and representation. Superintelligence may expose a different problem: whether equal political voice guarantees capable decisions.',
    primaryKeyword: 'superintelligence and democracy', keywords: ['future of democracy', 'superintelligent AI', 'AI political decision making'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'blue-amber',
    portrait: intelligencePortrait, portraitAlt: 'Meysam Ghanbari considering superintelligence and the future of democratic institutions',
    conceptImage: '/images/insights/concepts/superintelligence-democracy-photorealistic.webp', conceptAlt: 'Democratic assembly beneath a vast transparent artificial-intelligence network',
    hook: 'Democracy distributes authority. Superintelligence could concentrate capability. Future institutions may be forced to reconcile the two.',
    thesis: 'From Ghanbari’s perspective, democracy should be treated as an institutional technology with historic strengths—not as proof that every complex decision is best made through undifferentiated mass preference.',
    sections: [
      { heading: 'What democracy actually solved', paragraphs: ['Democratic systems created mechanisms for representation, peaceful transfer of power, public consent and correction of rulers. Those achievements remain profound. Yet a ballot is not a forecasting model. Elections aggregate preferences under limited information, compressed choices and short campaign cycles. The mechanism that grants legitimacy does not automatically deliver technical competence in epidemiology, energy grids or advanced AI safety.'] },
      { heading: 'The capability discontinuity', paragraphs: ['If future AI systems can model supply chains, disease transmission or infrastructure failure more accurately than any cabinet, ignoring that capacity could become irresponsible. During a pandemic, a system might compare hospital demand, mobility restrictions, economic damage and vaccine allocation continuously. The democratic question would shift from “Should experts matter?” to “How can superior analysis be used without creating unanswerable authority?”'] },
      { heading: 'Representation cannot be simulated away', paragraphs: ['Forecasting an outcome is different from deciding whether it is acceptable. A model might identify the policy that maximizes aggregate life-years while imposing severe costs on a minority. Democratic legitimacy gives affected people standing, not merely data points. Any institution that delegates analysis to machines must preserve contestability, reason-giving and protection from majority or algorithmic harm.'] },
      { heading: 'A bicameral intelligence architecture', paragraphs: ['One possible design separates value authorization from technical optimization. Citizens and elected bodies establish constitutional goals and constraints. Expert institutions and audited AI systems evaluate options, publish forecasts and manage bounded operational decisions. A second layer audits distributional effects and model failure. Authority expands only when performance is demonstrated and reversible.'] },
      { heading: 'Democracy after superior intelligence', paragraphs: ['The likely future is neither unchanged democracy nor machine sovereignty. It is a redesign of democratic control around institutions that can use non-human intelligence. Voting may remain central to legitimacy while becoming less central to technical execution.'] }
    ],
    tensionTitle: 'Competence without consent is brittle', tension: ['A system may be highly capable and still lack legitimacy. It may also define citizens’ interests incorrectly. The challenge is to prevent democratic participation from becoming an obstacle to knowledge while preventing technical knowledge from becoming a pretext for domination.'],
    conclusion: 'Superintelligence would not make democracy irrelevant. It would make institutional design more demanding: public authority must become intelligent enough to use powerful analysis and constitutional enough to remain answerable to human beings.',
    faqs: [{ question: 'Will superintelligence replace democracy?', answer: 'That is neither inevitable nor necessarily desirable. A more plausible path combines democratic legitimacy with audited delegation in technically bounded domains.' }, { question: 'Can AI make better political forecasts?', answer: 'AI may outperform people in some defined forecasting tasks, but political judgment also involves rights, values and contested objectives.' }],
    sources: [S.unAI, S.oecdAI, S.unescoAI], related: ['ai-voters-decide', 'democracy-still-optimal', 'ai-political-decision-making']
  },
  {
    number: '03', slug: 'ai-political-decision-making',
    title: 'Should AI Advise Governments—or Replace Political Decision-Making in Some Domains?', cardTitle: 'Advice or Authority?',
    seoTitle: 'Should AI Replace Political Decision-Making? | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari distinguishes AI advice from delegated authority and examines where government decisions might—or must not—be automated.',
    excerpt: 'The important boundary is not between using AI and rejecting it. It is between advice, bounded delegation and sovereign authority.',
    primaryKeyword: 'AI political decision making', keywords: ['AI in government', 'AI replacing politicians', 'AI decision authority'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'cyan-coral',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari examining the boundary between AI advice and government decision authority',
    conceptImage: '/images/insights/concepts/ai-political-decisions-photorealistic.webp', conceptAlt: 'Future decision chamber contrasting human political judgment with bounded autonomous authority',
    hook: 'An AI recommendation can be ignored. An AI decision changes a person’s life. That boundary deserves constitutional precision.',
    thesis: 'Ghanbari supports deeper AI participation where objectives are clear, performance can be measured and errors can be appealed. He rejects the idea that predictive accuracy alone justifies unlimited political authority.',
    sections: [
      { heading: 'Three levels of machine power', paragraphs: ['Advisory systems rank options while officials decide. Delegated systems execute within preset limits—adjusting traffic signals, balancing power demand or flagging procurement anomalies. Sovereign systems would choose goals or impose final decisions without meaningful human override. Public debate often collapses these levels, producing either exaggerated fear or careless enthusiasm.'] },
      { heading: 'Where bounded delegation is plausible', paragraphs: ['Urban traffic control is a strong example: the objective can be specified, feedback arrives quickly and interventions are reversible. Grid balancing, tax-fraud triage and preventive maintenance share some of those properties. Even there, guardrails matter. Fraud scores should trigger review, not automatic punishment; optimization of traffic must not systematically disadvantage a neighborhood.'] },
      { heading: 'Where delegation becomes dangerous', paragraphs: ['Criminal sentencing, asylum, child protection and coercive surveillance involve rights, incomplete evidence and severe asymmetric harm. A model’s confidence cannot replace due process. The greater the irreversibility, value conflict and power imbalance, the stronger the requirement for accountable human judgment and appeal.'] },
      { heading: 'Performance must be public', paragraphs: ['Delegated authority should require a domain-specific license: documented objective, benchmark against human performance, distributional error analysis, security testing, an incident register and an expiration date. NIST’s risk-management approach is useful precisely because it treats trustworthiness as a lifecycle problem rather than a marketing label.'] },
      { heading: 'Authority should be earned by domain', paragraphs: ['There is no coherent reason to grant or deny “AI” authority in general. A system may be excellent at scheduling ambulances and unacceptable at determining political speech. Delegation should expand only through evidence, not technological prestige.'] }
    ],
    tensionTitle: 'The automation asymmetry', tension: ['Automated decisions scale faster than appeals. A small model error can become a national pattern before institutions notice. Any system that acts at machine speed needs an equally fast audit and remedy layer.'],
    conclusion: 'The future question is not whether AI enters government. It already has. The question is which decisions remain advice, which become bounded automation and which must stay under direct, contestable human authority.',
    faqs: [{ question: 'Could AI replace politicians?', answer: 'AI may replace parts of analysis and administration, but goal-setting, constitutional judgment and legitimate representation are different functions.' }, { question: 'Which government tasks are best suited to AI?', answer: 'Tasks with clear objectives, measurable feedback, reversible actions and strong appeal mechanisms are stronger candidates than rights-sensitive coercive decisions.' }],
    sources: [S.oecdAI, S.nist, S.euAI], related: ['governance-optimization', 'ai-voters-decide', 'ai-surveillance-freedom']
  },
  {
    number: '04', slug: 'governance-optimization',
    title: 'Why Governance Should Be Treated as an Optimization Problem', cardTitle: 'Governance as Optimization',
    seoTitle: 'Governance as an Optimization Problem | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari applies systems engineering to governance: objectives, constraints, feedback, adaptation—and the difficulty of encoding human values.',
    excerpt: 'Governments already optimize implicitly. Systems thinking makes the objectives, constraints and failures visible enough to challenge.',
    primaryKeyword: 'governance optimization', keywords: ['systems engineering governance', 'data-driven government', 'policy optimization'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'teal-violet',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari exploring governance as a dynamic optimization and feedback system',
    conceptImage: '/images/insights/concepts/governance-optimization-photorealistic.webp', conceptAlt: 'Future city systems observatory connecting infrastructure, feedback and adaptive governance',
    hook: 'Every government optimizes something—even when it refuses to say what.',
    thesis: 'Ghanbari proposes treating governance as a constrained, adaptive control problem. The benefit is not mathematical certainty; it is forcing institutions to expose what they value, what they measure and how they respond when policy fails.',
    sections: [
      { heading: 'The hidden system model', paragraphs: ['Budgets allocate scarce resources. Regulations constrain behavior. Tax codes change incentives. Infrastructure plans forecast demand. These are system-design actions, yet they are often discussed as isolated political promises. An optimization lens asks for state variables, target outcomes, constraints, time horizons and uncertainty. It turns “improve healthcare” into measurable—but still contestable—objectives.'] },
      { heading: 'Feedback separates policy from doctrine', paragraphs: ['A well-designed controller observes results and updates. Governance rarely does this cleanly. Programs survive because constituencies form around them; failed metrics are redefined; election cycles reward visible launches over maintenance. A policy designed as an experiment would declare expected outcomes, monitoring intervals and conditions for revision before money is spent.'] },
      { heading: 'Examples from engineered public systems', paragraphs: ['Electric grids balance generation and demand continuously. Public-health surveillance detects unusual patterns. Water systems model reservoir levels and drought scenarios. These domains demonstrate that public goals can be operationalized without pretending uncertainty disappears. They also show why resilience matters: the system must remain safe when sensors fail, forecasts drift or conditions move outside training data.'] },
      { heading: 'Multi-objective governance', paragraphs: ['A society cannot maximize one scalar. Prosperity, freedom, equality, stability, longevity and innovation interact. The correct model is a constrained frontier: improving one objective can worsen another, and rights may function as hard limits rather than preferences. Public reasoning should reveal these tradeoffs instead of burying them in rhetoric.'] },
      { heading: 'Optimization requires constitutional brakes', paragraphs: ['An efficient system can be efficiently wrong. Metrics invite gaming; centralized dashboards invite control; predictive tools can make past discrimination appear scientific. Optimization therefore requires independent measurement, adversarial audits, plural objectives and a right to challenge the model.'] }
    ],
    tensionTitle: 'Goodhart’s warning for civilization', tension: ['When a measure becomes a target, behavior reorganizes around the measure. Test scores can replace learning; arrest counts can replace safety; GDP can replace welfare. An intelligent state needs better metrics—and humility about every metric.'],
    conclusion: 'Governance should be engineered, observed and revised. But the design must include the human capacity to reject an efficient outcome that violates dignity, rights or the kind of civilization people intend to build.',
    faqs: [{ question: 'What does governance as optimization mean?', answer: 'It means defining objectives, constraints, feedback and adaptation explicitly, then evaluating policy as a system rather than a slogan.' }, { question: 'Can human values be reduced to an objective function?', answer: 'Not completely. Values conflict, change and include rights that may need to remain outside ordinary cost-benefit optimization.' }],
    sources: [S.nist, S.oecdAI, S.oecdForesight], related: ['beyond-left-and-right', 'post-ideological-governance', 'happiness-longevity-progress']
  },
  {
    number: '05', slug: 'political-short-termism',
    title: 'The Real Failure of Modern Politics: Populism, Corruption, and Short-Termism', cardTitle: 'The Architecture of Short-Termism',
    seoTitle: 'Populism, Corruption and Political Short-Termism | Meysam Ghanbari',
    metaDescription: 'A systems analysis by Meysam Ghanbari of the incentives that make modern politics vulnerable to populism, corruption and short-term decisions.',
    excerpt: 'The central problem may be less about individual leaders than systems that reward immediate visibility and postpone difficult costs.',
    primaryKeyword: 'political short-termism', keywords: ['populism and governance', 'corruption incentives', 'long-term policymaking'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'amber-cyan',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari analyzing political short-termism and long-horizon institutional design',
    conceptImage: '/images/insights/concepts/political-short-termism-photorealistic.webp', conceptAlt: 'Temporary political stage contrasted with infrastructure built for a century-scale future',
    hook: 'A four-year incentive structure is routinely asked to manage risks that unfold over forty years.',
    thesis: 'Ghanbari’s critique targets institutional incentives: systems that reward promises now, hide costs later and make evidence politically optional will repeatedly produce short horizons—even when many participants are competent.',
    sections: [
      { heading: 'Why visibility beats maintenance', paragraphs: ['A new bridge creates a ceremony; inspection of an old bridge rarely does. Preventive health, grid resilience, pandemic stockpiles and basic research produce value partly through disasters that never happen. Their success is quiet, delayed and difficult to claim. Electoral competition therefore tends to favor visible distribution over invisible resilience.'] },
      { heading: 'Populism as an information shortcut', paragraphs: ['Complex systems are hard to explain. Populist narratives offer a clear villain, a fast solution and certainty. That structure can appear across ideologies. During economic stress, it may replace analysis of productivity, debt, demographics or supply chains with symbolic conflict. The problem is not public emotion itself; it is an incentive market that rewards simplification more than accuracy.'] },
      { heading: 'Corruption is a systems failure', paragraphs: ['Corruption thrives where discretion is opaque, procurement is difficult to inspect and enforcement is selective. Digital records and anomaly detection can reduce some opportunities, but technology is not self-cleaning. A corrupt institution can capture the monitoring system, classify scrutiny as secret or target opponents selectively. Transparency must include the rules, data lineage and oversight of the tools themselves.'] },
      { heading: 'Institutional memory against political cycles', paragraphs: ['Independent statistical bodies, infrastructure banks, long-term fiscal councils and mission-oriented research agencies can protect continuity. NASA’s multi-decade programs illustrate both the value and difficulty of maintaining a technical direction across changing administrations. Durable planning requires milestones that permit democratic correction without resetting the mission at every election.'] },
      { heading: 'Make the future politically present', paragraphs: ['Future generations do not vote. Institutions can partially represent them through long-horizon impact statements, mandatory maintenance accounting, scenario stress tests and protected research budgets. These mechanisms do not eliminate politics; they change what politics must acknowledge.'] }
    ],
    tensionTitle: 'Insulation can become unaccountable power', tension: ['Long-term institutions need protection from electoral volatility, but too much insulation can protect failure, ideology or elite interests. Independence should be paired with transparent mandates, performance review and removable leadership—not permanent immunity.'],
    conclusion: 'Better leaders help, but incentive architecture matters more. A political system becomes serious about the future when preventing a distant failure earns as much institutional attention as announcing an immediate benefit.',
    faqs: [{ question: 'Why are political systems short-term?', answer: 'Election cycles, media incentives, discounting of future costs and the low visibility of prevention all reward immediate outcomes.' }, { question: 'Can AI reduce corruption?', answer: 'AI can detect anomalies and expand audit capacity, but captured institutions can also misuse or manipulate those systems.' }],
    sources: [S.oecdForesight, S.oecdAI, S.nasa], related: ['civilization-long-term-planning', 'technocracy-weighted-decision-making', 'post-ideological-governance']
  },
  {
    number: '06', slug: 'democracy-still-optimal',
    title: 'Democracy Was Historic—But Is It Still Optimal?', cardTitle: 'Is Democracy Still Optimal?',
    seoTitle: 'Is Democracy Still the Optimal Governance System? | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari treats democracy as evolving institutional technology: historically transformative, still valuable, and open to redesign.',
    excerpt: 'Respecting democracy’s achievements does not require treating its current mechanisms as the final architecture of government.',
    primaryKeyword: 'is democracy optimal', keywords: ['future of democracy', 'future political systems', 'democratic reform'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'blue-gold',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari reflecting on democracy as an evolving institutional technology',
    conceptImage: '/images/insights/concepts/democracy-optimal-photorealistic.webp', conceptAlt: 'Historic parliamentary architecture evolving into an adaptive future civic institution',
    hook: 'A technology can be historically transformative and still require a new version.',
    thesis: 'Ghanbari’s argument is not that democracy has no value. It is that institutions should be evaluated by how well they protect legitimacy, freedom, competence and long-term survival under contemporary conditions.',
    sections: [
      { heading: 'Democracy as invention', paragraphs: ['Modern democracy is an engineered arrangement: constitutions, elections, courts, parties, public administration and rights protections were assembled over time. They solved problems that earlier political orders handled badly, especially succession, representation and public consent. Seeing democracy as invention honors that achievement because it recognizes that people designed mechanisms better than what came before.'] },
      { heading: 'Conditions have changed', paragraphs: ['Policy now operates across high-dimensional systems—global finance, cyber infrastructure, biotechnology, climate, AI and satellite networks. Information travels instantly, while expertise remains unevenly distributed. Campaigns optimize attention under these conditions, not necessarily understanding. The institutional question is whether twentieth-century participation mechanisms can govern twenty-first-century technical complexity without augmentation.'] },
      { heading: 'What must not be lost', paragraphs: ['Any successor architecture must explain how rulers are constrained, how peaceful correction occurs, how minorities are protected and how citizens can contest decisions. Efficiency is not a substitute. Authoritarian systems can act quickly, but speed can amplify catastrophic error because dissent and negative information are suppressed. Democracy’s friction often functions as a safety mechanism.'] },
      { heading: 'What can evolve', paragraphs: ['Deliberative citizen assemblies can study one issue more deeply than a general election. Independent technical agencies can execute narrow mandates. AI systems can publish forecasts with uncertainty. Digital participation can gather structured feedback rather than binary approval. These elements suggest democracy can become layered: broad legitimacy, informed deliberation and technically competent execution.'] },
      { heading: 'Optimal for which environment?', paragraphs: ['No governance system is optimal in the abstract. Performance depends on culture, state capacity, information quality, threats and values. The defensible goal is not to declare a final regime but to create institutions capable of learning without surrendering rights.'] }
    ],
    tensionTitle: 'Institutional evolution without constitutional amnesia', tension: ['Calls to move “beyond democracy” can hide ordinary power grabs. Any proposed improvement should be judged first by whether it strengthens accountability and correction, not by how futuristic its language sounds.'],
    conclusion: 'Democracy should neither be dismissed nor frozen. Its deepest principle may be that authority must remain corrigible. Future systems can preserve that principle while redesigning how knowledge enters decisions.',
    faqs: [{ question: 'Is democracy obsolete?', answer: 'No. Its legitimacy and correction mechanisms remain important, but its information and decision processes can be improved.' }, { question: 'What could come after current democracy?', answer: 'Likely a hybrid of democratic authorization, deliberative participation, expert institutions and audited AI-assisted administration.' }],
    sources: [S.unEgov, S.oecdForesight, S.unAI], related: ['superintelligence-and-democracy', 'post-ideological-governance', 'technocracy-weighted-decision-making']
  },
  {
    number: '07', slug: 'ai-voters-decide',
    title: 'If AI Knows Better Than Voters, Who Should Decide?', cardTitle: 'If AI Knows Better',
    seoTitle: 'If AI Knows Better Than Voters, Who Decides? | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari examines competence versus legitimacy when AI forecasts outperform citizens or officials in defined policy domains.',
    excerpt: 'Better prediction creates a claim to influence—not an automatic claim to rule.',
    primaryKeyword: 'AI versus voters', keywords: ['can AI govern a country', 'AI policy decisions', 'legitimacy versus competence'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'blue-rose',
    portrait: intelligencePortrait, portraitAlt: 'Meysam Ghanbari examining the tension between AI competence and voter legitimacy',
    conceptImage: '/images/insights/concepts/ai-voters-decide-photorealistic.webp', conceptAlt: 'Citizens confronting an AI forecasting system that models several societal outcomes',
    hook: 'Suppose the model is right more often. Does accuracy create authority?',
    thesis: 'Ghanbari distinguishes epistemic weight from sovereign power. Superior forecasting should matter, especially in technical domains, but decisions must remain constrained by rights, legitimacy and the ability to contest what the system counts as success.',
    sections: [
      { heading: 'The case for epistemic weight', paragraphs: ['A structural engineer’s judgment carries more weight than a public poll when a bridge is unsafe. Epidemiologists matter during an outbreak; grid operators matter during a frequency emergency. Society already weights knowledge informally. If an AI system repeatedly predicts defined outcomes better than experts, refusing to use it merely because it is non-human could sacrifice welfare.'] },
      { heading: 'Prediction is not preference', paragraphs: ['A model can estimate how a carbon price affects emissions and household costs. It cannot decide how those costs should be distributed without a value rule. Voters may choose a less efficient policy because they reject its distributional burden. That choice can be informed or misinformed, but it is not reducible to forecast accuracy.'] },
      { heading: 'A competence threshold', paragraphs: ['Machine recommendations deserve authority only when the task, metric and comparison are defined in advance. Performance should be tested out of sample, across groups and under distribution shift. A system that predicts average outcomes but fails catastrophically for a minority has not “known better” in the relevant constitutional sense.'] },
      { heading: 'The right to demand reasons', paragraphs: ['Citizens cannot hold a probability score accountable. Public systems need reason-giving interfaces: which evidence mattered, what uncertainty remains, what alternative was rejected and where an appeal can go. Explanation is not merely a technical feature; it is part of legitimate power.'] },
      { heading: 'Decision rights as a portfolio', paragraphs: ['Future institutions may allocate decision rights by domain. Voters authorize goals and boundaries. Experts certify evidence standards. AI systems optimize bounded operations. Courts and independent auditors protect rights. No single actor—public, expert or machine—owns the entire chain.'] }
    ],
    tensionTitle: 'The public may rationally reject the “best” forecast', tension: ['People care about procedure, dignity and control as well as outcomes. An institution that consistently produces higher averages while denying agency may be unstable or unjust. Competence must be designed into legitimacy, not used to bypass it.'],
    conclusion: 'When AI knows more about a narrow consequence, it should receive more epistemic weight. It should not receive unlimited political authority. The future belongs to institutions that can tell the difference.',
    faqs: [{ question: 'Can AI make better decisions than voters?', answer: 'It may make better forecasts in defined domains, but public decisions also contain value judgments and rights constraints.' }, { question: 'Should experts have more political power?', answer: 'Expertise can justify greater influence over evidence-sensitive tasks, provided authority is transparent, bounded and accountable.' }],
    sources: [S.nist, S.oecdAI, S.unescoAI], related: ['superintelligence-and-democracy', 'technocracy-weighted-decision-making', 'ai-political-decision-making']
  },
  {
    number: '08', slug: 'post-ideological-governance',
    title: 'Post-Ideological Governance: What Comes After Left and Right?', cardTitle: 'Post-Ideological Governance',
    seoTitle: 'Post-Ideological Governance Beyond Left and Right | Meysam Ghanbari',
    metaDescription: 'What comes after left and right? Meysam Ghanbari explores adaptive, evidence-driven governance without pretending values disappear.',
    excerpt: 'A post-ideological system would revise policy when evidence changes while making its values more explicit—not less political.',
    primaryKeyword: 'post-ideological governance', keywords: ['what comes after left and right', 'future governance', 'adaptive policy'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'violet-cyan',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari exploring post-ideological governance and adaptive policy systems',
    conceptImage: '/images/insights/concepts/post-ideological-governance-photorealistic.webp', conceptAlt: 'Binary political corridor opening into an adaptive evidence-driven policy laboratory',
    hook: 'Post-ideological does not mean value-free. It means refusing to let one identity answer every policy question in advance.',
    thesis: 'Ghanbari imagines governance as modular and adaptive: empirical claims are tested, values are declared and policy packages can be reassembled as conditions change.',
    sections: [
      { heading: 'Why ideology persists', paragraphs: ['Ideology reduces cognitive cost. It tells voters which policies belong together and gives coalitions a shared language. It also offers moral meaning. Those functions explain why evidence alone will not dissolve political identities. A post-ideological architecture must replace the coordination benefit of ideology, not merely criticize its rigidity.'] },
      { heading: 'Policy modules instead of camps', paragraphs: ['Housing can combine faster permitting, public transit investment, social protection and land-value taxation without requiring loyalty to one camp. Energy policy can combine markets, strategic public investment, nuclear power and environmental constraints. Modular governance asks which combination works under stated goals rather than which tribe owns the idea.'] },
      { heading: 'Evidence needs institutions', paragraphs: ['Adaptive policy requires credible data, independent evaluation and the ability to stop a program. Otherwise “evidence-based” becomes a label attached after the decision. Public dashboards, preregistered metrics and automatic review dates can make learning operational. AI can accelerate analysis, but cannot substitute for trustworthy measurement.'] },
      { heading: 'Values stay visible', paragraphs: ['Two groups can accept the same forecast and choose differently because they weight autonomy, equality or security differently. Post-ideological governance should expose those weights. A policy platform might display the estimated frontier: more surveillance may reduce some crime while increasing privacy loss and abuse risk. Citizens should see the trade, not a manufactured consensus.'] },
      { heading: 'Adaptation without volatility', paragraphs: ['Constant revision can become instability. Institutions need thresholds: minor evidence updates should not overturn long-term infrastructure; major failures should. The art is to be neither doctrinaire nor erratic.'] }
    ],
    tensionTitle: 'Who controls the evidence layer?', tension: ['Data institutions can be captured. Metrics can exclude what is hard to measure. Technical language can conceal interest. A post-ideological system therefore needs plural research teams, open methods and the right to challenge the framing of a problem.'],
    conclusion: 'What comes after left and right is not the end of disagreement. It is a better grammar for disagreement—one that separates facts, forecasts, values and implementation, then allows policy to learn.',
    faqs: [{ question: 'What is post-ideological governance?', answer: 'It is governance that assembles policies around evidence and explicit objectives rather than fixed left-right packages.' }, { question: 'Does post-ideological mean politically neutral?', answer: 'No. Values remain central; the aim is to make them explicit and prevent identity from predetermining every empirical claim.' }],
    sources: [S.oecdForesight, S.oecdAI, S.unEgov], related: ['beyond-left-and-right', 'governance-optimization', 'democracy-still-optimal']
  },
  {
    number: '09', slug: 'technocracy-weighted-decision-making',
    title: 'Technocracy, Intelligence, and the Case for Weighted Decision-Making', cardTitle: 'The Case for Weighted Decisions',
    seoTitle: 'Technocracy and Weighted Decision-Making | Meysam Ghanbari',
    metaDescription: 'Should expertise influence political authority? Meysam Ghanbari examines technocracy, weighted decisions, elite capture and accountability.',
    excerpt: 'Equal moral worth does not imply equal knowledge about every technical question. Turning that fact into legitimate authority is the difficult part.',
    primaryKeyword: 'technocratic governance', keywords: ['technocracy', 'weighted decision making', 'expert political power'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'teal-violet',
    portrait: governancePortrait, portraitAlt: 'Meysam Ghanbari analyzing technocracy, expertise and weighted decision systems',
    conceptImage: '/images/insights/concepts/technocracy-weighted-decisions-photorealistic.webp', conceptAlt: 'Multidisciplinary expert council working around a transparent evidence system with public oversight',
    hook: 'A society can affirm equal citizenship without pretending every person has equal knowledge of reactor safety or monetary policy.',
    thesis: 'Ghanbari’s technocratic position gives expertise greater influence in evidence-sensitive domains, but only within institutions designed against credentialism, capture and unreviewable expert power.',
    sections: [
      { heading: 'Moral equality and epistemic inequality', paragraphs: ['People deserve equal protection and political standing. They do not possess equal information about every system. Modern states already delegate to surgeons, pilots, engineers and central-bank staff because some errors require specialized knowledge. The controversy begins when technical delegation shapes distribution, rights or the direction of society.'] },
      { heading: 'What could be weighted', paragraphs: ['Weighted decision-making need not mean giving one person extra votes in general elections. It can mean domain-specific councils, evidence standards, professional responsibility and stronger influence for demonstrated competence. A grid-stability decision might be led by operators and engineers while its affordability constraints remain politically authorized.'] },
      { heading: 'Credentials are not competence', paragraphs: ['Technocracy can harden into a class system. Degrees can proxy status; institutions can reproduce their own worldview; experts can disagree or protect professional interests. Competence should therefore be tested through track record, transparent reasoning, conflict disclosure and exposure to adversarial review—not assumed from title alone.'] },
      { heading: 'The danger of elite capture', paragraphs: ['If experts control both the model and the definition of success, technical authority becomes political authority without admission. Regulatory capture shows how specialized knowledge can align with concentrated interests. Rotating panels, independent funding, public-interest representation and reproducible analysis can reduce—never eliminate—that risk.'] },
      { heading: 'A plural technocracy', paragraphs: ['The strongest design is not rule by one expert class. It is structured competition among expertise, public values and machine analysis. Experts explain mechanisms; affected communities reveal lived costs; AI explores scenarios; accountable institutions decide and publish reasons.'] }
    ],
    tensionTitle: 'Expert disagreement is information', tension: ['When qualified specialists disagree, the system should not conceal the split. It should publish assumptions, uncertainty and the evidence that would change each position. Technocracy becomes credible when it can display its own limits.'],
    conclusion: 'Expertise should matter more where expertise changes outcome quality. But influence must remain domain-bound, inspectable and corrigible. The goal is intelligent government—not a priesthood of credentials.',
    faqs: [{ question: 'What is technocracy?', answer: 'Technocracy gives technical expertise a major role in public decision-making, especially in specialized policy domains.' }, { question: 'What is weighted decision-making?', answer: 'It allocates influence according to relevant knowledge or responsibility in a defined domain rather than treating every input as equally informed.' }],
    sources: [S.oecdAI, S.unescoAI, S.unEgov], related: ['ai-voters-decide', 'democracy-still-optimal', 'political-short-termism']
  },
  {
    number: '10', slug: 'civilization-long-term-planning',
    title: 'Can Civilization Survive Without Long-Term Planning?', cardTitle: 'Can Civilization Plan Long Term?',
    seoTitle: 'Can Civilization Survive Without Long-Term Planning? | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari examines why pandemics, climate, AI, infrastructure, energy and space require institutions with longer time horizons.',
    excerpt: 'Civilization faces risks that mature slowly and arrive suddenly. Institutions optimized for the next quarter or election are structurally mismatched.',
    primaryKeyword: 'long-term civilization planning', keywords: ['civilization survival', 'existential risk governance', 'long-term institutions'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'space-gold',
    portrait: civilizationPortrait, portraitAlt: 'Meysam Ghanbari viewing Earth and long-term infrastructure for future civilization',
    conceptImage: '/images/insights/concepts/civilization-long-term-planning-photorealistic.webp', conceptAlt: 'Resilient Earth infrastructure extending toward orbital systems across a long planning horizon',
    hook: 'The threats most capable of changing civilization are often the least compatible with ordinary political time.',
    thesis: 'Ghanbari argues that long-term capacity is not prediction of one future. It is the ability to preserve options, monitor weak signals and build infrastructure that remains useful across many futures.',
    sections: [
      { heading: 'Slow variables, sudden consequences', paragraphs: ['Climate exposure, antimicrobial resistance, infrastructure decay and AI capability accumulate over years. A pandemic or grid failure then appears abrupt because the visible crisis is faster than the underlying process. Long-term planning brings slow variables into present decisions before emergency becomes the only political language available.'] },
      { heading: 'Preparedness is difficult to reward', paragraphs: ['Stockpiles expire. Backup systems look redundant. Research may not pay off within a term. When prevention works, critics can claim the threat was exaggerated. The WHO Pandemic Agreement reflects an attempt to institutionalize preparedness after COVID-19, but agreements matter only if financing, surveillance and equitable response capacity survive attention cycles.'] },
      { heading: 'Planning under deep uncertainty', paragraphs: ['Long-termism should not mean one rigid master plan. Scenario methods compare multiple plausible futures: energy abundance or scarcity, rapid or gradual AI progress, stable or disrupted trade. Robust policies perform acceptably across several scenarios. Modular infrastructure and diversified research portfolios preserve the ability to adapt.'] },
      { heading: 'Civilization needs technical memory', paragraphs: ['Institutions forget when skilled teams dissolve, data standards change or maintenance budgets disappear. Space programs illustrate the value of sustained capability: launch systems, navigation, communications and mission operations depend on knowledge accumulated across generations. Long projects need political continuity and technical succession.'] },
      { heading: 'Representing the unborn', paragraphs: ['Future people cannot bargain with the present. Long-horizon fiscal accounting, intergenerational impact reviews and protected scientific institutions can partially represent their interests. These mechanisms should not grant imagined future preferences absolute priority, but they can prevent the present from treating tomorrow as valueless.'] }
    ],
    tensionTitle: 'Long-term visions can justify present coercion', tension: ['Leaders can invoke civilization, security or future generations to suppress current rights. A legitimate long-term institution needs evidence, plural scenarios, periodic review and constraints that protect living people while building future capacity.'],
    conclusion: 'Civilization cannot eliminate uncertainty. It can stop confusing uncertainty with permission to do nothing. Survival depends on institutions that notice slow risks, maintain technical capacity and revise plans without abandoning the horizon.',
    faqs: [{ question: 'What is long-term governance?', answer: 'It is institutional capacity to evaluate effects across decades, prepare for low-frequency high-impact risks and preserve options for future generations.' }, { question: 'How can governments plan under uncertainty?', answer: 'Through multiple scenarios, robust strategies, modular investments, leading indicators and regular revision rather than one fixed forecast.' }],
    sources: [S.ipcc, S.whoPandemic, S.oecdForesight], related: ['political-short-termism', 'human-survival-expansion', 'happiness-longevity-progress']
  },
  {
    number: '11', slug: 'human-survival-expansion',
    title: 'Why Human Survival and Expansion Matter More Than Political Nostalgia', cardTitle: 'Survival Beyond Political Nostalgia',
    seoTitle: 'Human Survival, Space Expansion and Future Institutions | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari argues that institutions should remain adaptable when better systems strengthen civilization’s survival and expansion beyond Earth.',
    excerpt: 'Political forms are tools. The continuity, resilience and expansion of civilization are outcomes against which those tools can be judged.',
    primaryKeyword: 'human survival and space expansion', keywords: ['future civilization', 'human expansion beyond Earth', 'civilization survival'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'space-cyan',
    portrait: civilizationPortrait, portraitAlt: 'Meysam Ghanbari considering human survival, orbital infrastructure and expansion beyond Earth',
    conceptImage: '/images/insights/concepts/human-survival-expansion-photorealistic.webp', conceptAlt: 'Credible Earth-to-space expansion pathway connecting orbital, lunar and Mars-bound infrastructure',
    hook: 'Institutions are not monuments. They are survival equipment.',
    thesis: 'From Ghanbari’s perspective, loyalty to an institutional form should never outrank the long-term survival, knowledge and expansion of civilization—provided reform does not sacrifice human rights in the name of an imagined future.',
    sections: [
      { heading: 'The danger of institutional nostalgia', paragraphs: ['Societies often treat inherited arrangements as identities rather than designs. A rule created for an industrial state may become sacred in a digital one. Stability has value, but nostalgia can preserve mechanisms after their assumptions disappear. The relevant question is what function an institution protects and whether that function can be protected better.'] },
      { heading: 'Survival is a portfolio problem', paragraphs: ['A civilization concentrated on one planet shares correlated risk. Pandemics, conflict, ecological disruption and technological accidents can propagate globally. Expansion into space does not solve present injustice, nor does a lunar outpost create immediate redundancy. It begins a centuries-long process of distributing infrastructure, knowledge and eventually population.'] },
      { heading: 'Communication is civilizational infrastructure', paragraphs: ['Expansion depends on reliable sensing, navigation, energy and communication. Optical crosslinks, satellite networks and autonomous coordination are not merely commercial technologies; they are part of the nervous system of a spacefaring civilization. This is where Ghanbari’s communications research connects naturally to the larger Future Systems perspective.'] },
      { heading: 'Progress needs institutional patience', paragraphs: ['NASA’s Moon to Mars architecture demonstrates the layered character of expansion: capabilities are accumulated through missions, logistics, science and partnerships. The time horizon exceeds any one administration. Institutions must preserve direction while allowing engineering evidence to revise the route.'] },
      { heading: 'Survival is not the only value', paragraphs: ['A civilization could survive by becoming oppressive, stagnant or biologically diminished. Mere persistence is too weak an objective. Survival must be coupled with knowledge, agency, diversity and the capacity to improve. Expansion should enlarge human possibility, not export domination.'] }
    ],
    tensionTitle: 'Who is included in “humanity”?', tension: ['Civilization-scale language can hide unequal sacrifice. A serious expansion project must ask who pays, who participates, who owns off-world infrastructure and whether future benefits are broadly accessible.'],
    conclusion: 'Political systems deserve respect when they help civilization remain free, capable and durable. They deserve redesign when they become obstacles to those ends. The horizon should be longer than political memory and wider than one planet.',
    faqs: [{ question: 'Why does space expansion matter for survival?', answer: 'Over very long horizons, distributed infrastructure and populations can reduce dependence on a single planetary environment.' }, { question: 'Does space expansion replace solving Earth’s problems?', answer: 'No. Earth remains the primary habitat, and the capabilities required for expansion often depend on resilient institutions at home.' }],
    sources: [S.nasa, S.oecdForesight, S.ipcc], related: ['civilization-long-term-planning', 'future-human-enhancement', 'happiness-longevity-progress']
  },
  {
    number: '12', slug: 'future-human-enhancement',
    title: 'The Future Human: Enhancement, AI, and Civilizational Evolution', cardTitle: 'The Future Human',
    seoTitle: 'The Future Human: AI and Human Enhancement | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari explores genetic, neural, biological and AI augmentation—and why future human evolution requires governance as much as invention.',
    excerpt: 'Human evolution may become increasingly intentional, combining medicine, genetics, neurotechnology and machine intelligence.',
    primaryKeyword: 'future human enhancement', keywords: ['AI human augmentation', 'genetic enhancement', 'neurotechnology', 'transhumanism'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '11 min', theme: 'violet-cyan',
    portrait: intelligencePortrait, portraitAlt: 'Meysam Ghanbari exploring AI augmentation, neurotechnology and the future human',
    conceptImage: '/images/insights/concepts/future-human-enhancement-photorealistic.webp', conceptAlt: 'Future biomedical laboratory integrating neural interfaces, genomics and AI-assisted human enhancement',
    hook: 'For most of history, humans adapted to nature. Future humans may increasingly redesign the conditions—and the biology—of adaptation itself.',
    thesis: 'Ghanbari views enhancement as a plausible continuation of civilization’s technological trajectory, but rejects the idea that technical possibility resolves questions of consent, inequality, identity or irreversible harm.',
    sections: [
      { heading: 'From therapy to enhancement', paragraphs: ['The boundary already moves. A cochlear implant restores a lost function; a future interface might expand sensory range. Gene therapy treats disease; embryo editing could alter traits before consent is possible. AI assistants compensate for limited memory today and may later become persistent cognitive layers. Categories that appear clear in theory blur as capabilities improve.'] },
      { heading: 'Four pathways of change', paragraphs: ['Biological interventions may slow aging or improve repair. Genetic tools may change disease risk and eventually selected traits. Neurotechnology may connect nervous systems to computation. AI augmentation may amplify reasoning without altering biology directly. These pathways will interact: an interface interpreted by adaptive AI is neither simply biological nor digital.'] },
      { heading: 'The inequality problem', paragraphs: ['If enhancement is expensive, advantage can compound biologically as well as economically. Access to better health, cognition or lifespan could become inherited power. A market-only model may create enhancement classes; a state-only model may create coercion. Governance must protect the right to refuse while preventing access from becoming a permanent caste boundary.'] },
      { heading: 'Identity and continuity', paragraphs: ['A stronger memory, altered mood or neural coprocessor raises questions that performance metrics cannot answer. How much change preserves personal continuity? Who controls updates? Can an employer require augmentation? UNESCO’s work on neurotechnology places mental privacy and autonomy at the center because the brain is not an ordinary data source.'] },
      { heading: 'Evolution with a safety architecture', paragraphs: ['Responsible progress requires staged trials, reversible designs where possible, long-term monitoring, consent standards and international limits on coercive use. A civilization capable of changing itself must become better at institutional self-control at the same time.'] }
    ],
    tensionTitle: 'The freedom to enhance and the freedom to remain unenhanced', tension: ['Choice becomes fragile when augmented people dominate education or employment. Formal permission to refuse is insufficient if refusal means exclusion. Future rights may need to protect both access and non-participation.'],
    conclusion: 'The future human is unlikely to be one design. It may be a plural landscape of biological, digital and hybrid forms. The achievement will not be enhancement alone, but preserving dignity and agency while human capability expands.',
    faqs: [{ question: 'What is human enhancement?', answer: 'It is the use of biological or technological interventions to extend human capacities beyond ordinary treatment or restoration.' }, { question: 'How could AI augment humans?', answer: 'Through cognitive assistants, adaptive interfaces, neural technologies and systems that extend memory, perception or decision support.' }],
    sources: [S.unescoNeuro, S.whoAgeing, S.unescoAI], related: ['human-survival-expansion', 'happiness-longevity-progress', 'post-work-society']
  },
  {
    number: '13', slug: 'happiness-longevity-progress',
    title: 'Should Governance Prioritize Happiness—or Longevity, Survival, and Progress?', cardTitle: 'What Should Governance Optimize?',
    seoTitle: 'Should Governance Optimize Happiness or Progress? | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari examines conflicts between happiness, longevity, survival, freedom and scientific progress in future governance.',
    excerpt: 'A society designed only for present satisfaction may underinvest in the difficult capabilities that protect its future.',
    primaryKeyword: 'governance objective function', keywords: ['happiness versus progress', 'longevity governance', 'civilization objectives'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '9 min', theme: 'gold-cyan',
    portrait: civilizationPortrait, portraitAlt: 'Meysam Ghanbari considering happiness, longevity and long-term civilization progress',
    conceptImage: '/images/insights/concepts/happiness-longevity-progress-photorealistic.webp', conceptAlt: 'Future civilization crossroads balancing immediate comfort with longevity, science and space progress',
    hook: 'A comfortable generation can consume the research, infrastructure and resilience that a future generation will need.',
    thesis: 'Ghanbari rejects happiness as the single objective of government. He favors a plural civilizational scorecard that includes welfare, freedom, longevity, knowledge, resilience and the capacity for future progress.',
    sections: [
      { heading: 'Why happiness attracts', paragraphs: ['Happiness appears humane and measurable. It corrects the mistake of treating economic output as the whole of life. Yet self-reported satisfaction adapts to conditions and can coexist with low ambition or restricted choice. A state could increase reported calm through sedation, censorship or reduced expectations—outcomes few would accept as a good society.'] },
      { heading: 'Longevity changes the horizon', paragraphs: ['Longer healthy lives increase the value of prevention, clean environments, medical research and stable institutions. The WHO’s healthy-ageing agenda emphasizes functional ability, not merely survival. Longevity as a public goal should therefore mean more healthy, autonomous years rather than maximizing biological duration regardless of quality.'] },
      { heading: 'Progress requires sacrifice—but not unlimited sacrifice', paragraphs: ['Scientific infrastructure, basic research and space systems demand resources whose benefits may be delayed. Ghanbari places unusually high value on these investments because they expand what civilization can solve. That priority still needs limits: present people cannot be treated merely as fuel for a distant technological future.'] },
      { heading: 'A dashboard, not one number', paragraphs: ['Future governance could publish a balanced set of indicators: healthy life expectancy, preventable suffering, rights protection, knowledge production, ecological resilience, infrastructure condition, innovation capacity and inequality of access. The indicators should expose conflict rather than merge everything into a convenient score.'] },
      { heading: 'The politics of weights', paragraphs: ['Even a plural dashboard requires weights when budgets are allocated. Those weights should be debated, tested and revised. AI can map the consequences of different priorities, but it cannot legitimately choose them in secret.'] }
    ],
    tensionTitle: 'Can progress become a secular religion?', tension: ['Technological progress can become self-justifying. More capability is not always better if it increases coercion, ecological damage or catastrophic risk. Progress must be evaluated by the futures it opens and closes.'],
    conclusion: 'Good governance should help people live well now while preserving the possibility of living better later. Happiness belongs in the objective function—but not alone, and never as an excuse to stop building the future.',
    faqs: [{ question: 'Should governments maximize happiness?', answer: 'Happiness is important, but a single happiness metric can neglect rights, health, resilience, knowledge and future capability.' }, { question: 'Why include longevity in public policy goals?', answer: 'Healthy longevity reflects prevention, medical progress and the ability of people to remain capable and autonomous over longer lives.' }],
    sources: [S.whoAgeing, S.oecdForesight, S.ipcc], related: ['governance-optimization', 'civilization-long-term-planning', 'future-human-enhancement']
  },
  {
    number: '14', slug: 'ai-surveillance-freedom',
    title: 'AI, Surveillance, and the Hard Tradeoff Between Freedom and Optimization', cardTitle: 'Surveillance and the Optimization State',
    seoTitle: 'AI Surveillance: Freedom vs Optimization | Meysam Ghanbari',
    metaDescription: 'Meysam Ghanbari examines AI surveillance, crime prevention, corruption detection, infrastructure gains and the risks of permanent control.',
    excerpt: 'The same sensing system can detect corruption, coordinate a city or make anonymity impossible. Capability does not determine governance.',
    primaryKeyword: 'AI surveillance risks', keywords: ['AI surveillance', 'freedom versus security', 'algorithmic monitoring'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '11 min', theme: 'red-violet',
    portrait: intelligencePortrait, portraitAlt: 'Meysam Ghanbari examining AI surveillance, machine vision and personal autonomy',
    conceptImage: '/images/insights/concepts/ai-surveillance-freedom-photorealistic.webp', conceptAlt: 'Networked smart city contrasted with a protected private space to show surveillance and autonomy',
    hook: 'A system that can see enough to prevent harm can also see enough to eliminate private life.',
    thesis: 'Ghanbari takes the optimization benefits of large-scale sensing seriously—while insisting that surveillance infrastructure must be designed as dangerous power, not neutral efficiency.',
    sections: [
      { heading: 'What comprehensive sensing could improve', paragraphs: ['Computer vision and anomaly detection can identify traffic hazards, equipment failure, procurement fraud and unusual public-safety events. Sensor networks can coordinate emergency response and reduce waste in water or energy systems. In narrow, well-governed contexts, better observation produces genuine public value.'] },
      { heading: 'The asymmetry of observation', paragraphs: ['Citizens become transparent while the institution remains opaque. They may not know what is collected, how long it persists, which model infers risk or how an error can be corrected. Surveillance therefore shifts power even before abuse occurs. People change behavior when they expect observation; lawful dissent and experimentation can decline.'] },
      { heading: 'Function creep is the default risk', paragraphs: ['A database created for traffic can be linked to policing; an emergency system can become permanent; a fraud model can expand from auditing transactions to scoring people. Technical reuse is cheap, while political limits erode under pressure. Purpose limitation must be enforced through architecture—data minimization, separation, deletion and warrants—not promises alone.'] },
      { heading: 'A rights-preserving design test', paragraphs: ['Before deployment, institutions should ask whether the objective can be achieved with less identification, shorter retention or edge processing. Systems should record every access, publish error rates, separate operators from oversight and guarantee remedy. Some uses—continuous political profiling, secret social scoring or irreversible automated punishment—should remain prohibited even if they improve a narrow metric.'] },
      { heading: 'Security also matters', paragraphs: ['Rejecting all monitoring can leave crime, corruption and infrastructure failure undetected. The serious position is not “privacy always” or “security always.” It is to demand evidence that surveillance is necessary, proportionate and more effective than less intrusive alternatives.'] }
    ],
    tensionTitle: 'The benevolent optimizer may not stay benevolent', tension: ['Surveillance capacity survives leaders. A system designed for a competent administration can be inherited by an abusive one. Governance must be judged against the worst plausible operator, not only the current intention.'],
    conclusion: 'An optimized society that eliminates unobserved space may become efficient and psychologically unfree. The design target should be capable infrastructure with deliberately limited visibility—and institutions that cannot quietly remove those limits.',
    faqs: [{ question: 'What are the benefits of AI surveillance?', answer: 'Potential benefits include hazard detection, corruption analysis, emergency response and infrastructure optimization.' }, { question: 'What makes AI surveillance dangerous?', answer: 'Scale, persistent identification, function creep, biased inference, weak appeals and concentration of observational power can undermine autonomy and rights.' }],
    sources: [S.unescoAI, S.nist, S.euAI], related: ['ai-political-decision-making', 'ai-voters-decide', 'governance-optimization']
  },
  {
    number: '15', slug: 'post-work-society',
    title: 'If Work Disappears, What Should Society Become?', cardTitle: 'After Work',
    seoTitle: 'If AI Eliminates Jobs: The Post-Work Society | Meysam Ghanbari',
    metaDescription: 'If automation removes the economic need for much human labor, what happens to income, ownership, status, education and meaning?',
    excerpt: 'Automation may separate production from employment. Society would then need a new architecture for income, status, contribution and purpose.',
    primaryKeyword: 'post-work society', keywords: ['AI replacing jobs', 'future of work', 'automation and society', 'post-scarcity'],
    domain, domainSlug, datePublished: '2026-09-18', dateModified: '2026-09-18', readTime: '10 min', theme: 'cyan-teal',
    portrait: intelligencePortrait, portraitAlt: 'Meysam Ghanbari exploring automation, AI and a future post-work society',
    conceptImage: '/images/insights/concepts/post-work-society-photorealistic.webp', conceptAlt: 'Human-centered automated city where people learn, create and conduct science beyond economic necessity',
    hook: 'If machines produce abundance, a job can no longer be the only ticket to income, status or dignity.',
    thesis: 'Ghanbari sees post-work transition as an institutional design problem. Automation can liberate time only if ownership, distribution and social meaning evolve with productive capacity.',
    sections: [
      { heading: 'Automation rarely arrives as one event', paragraphs: ['Tasks disappear before occupations do. Generative AI may transform clerical, analytical and creative work while robotics changes logistics and manufacturing at a different pace. The ILO’s exposure research emphasizes transformation as well as replacement. Policy should prepare for uneven transition: some workers gain leverage, others lose bargaining power, and regions adjust at different speeds.'] },
      { heading: 'Income after employment', paragraphs: ['If labor is no longer required for much production, wages cannot remain the only distribution mechanism. Options include social dividends, universal basic services, negative income taxes, broader capital ownership and sovereign technology funds. Each allocates power differently. A payment without ownership may preserve dependence; ownership without public capacity may concentrate automation rents.'] },
      { heading: 'Status is harder than income', paragraphs: ['Employment provides hierarchy, routine, community and evidence of contribution. Removing economic necessity does not remove the need to be needed. A post-work society must create respected pathways in care, science, art, exploration, education, local institutions and open technical projects—without recreating compulsory labor under another name.'] },
      { heading: 'Education for agency', paragraphs: ['Education designed mainly for employability becomes incomplete. People would need stronger preparation in self-direction, scientific literacy, civic reasoning, creativity and collaboration with intelligent systems. The question shifts from “Which job will this student fill?” to “What capabilities help a person build a meaningful life and contribute to civilization?”'] },
      { heading: 'Post-scarcity will remain partial', paragraphs: ['Computation, energy and manufactured goods may become abundant while land, attention, status and some care remain scarce. Allocation does not disappear. A serious post-work model must govern bottlenecks and ecological constraints rather than assuming technology dissolves economics.'] }
    ],
    tensionTitle: 'Who owns the machines?', tension: ['Productive abundance can coexist with political dependency if a small group owns the models, robots, energy and data. Distribution is not an afterthought to automation; it determines whether post-work becomes emancipation, rentier hierarchy or state paternalism.'],
    conclusion: 'The disappearance of necessary labor would not end human purpose. It would end one institution’s monopoly over purpose. The opportunity is to build a society where security is unconditional and contribution becomes broader, more voluntary and more ambitious.',
    faqs: [{ question: 'Will AI eliminate all jobs?', answer: 'The timing and extent are uncertain. Current evidence points to major task transformation and uneven displacement rather than a single universal endpoint.' }, { question: 'What is a post-work society?', answer: 'It is a society where most people do not need conventional employment to access income and social security because production is highly automated.' }],
    sources: [S.ilo, S.oecdAI, S.unEgov], related: ['future-human-enhancement', 'happiness-longevity-progress', 'governance-optimization']
  }
];

export const getInsight = (slug: string) => insights.find((item) => item.slug === slug);
