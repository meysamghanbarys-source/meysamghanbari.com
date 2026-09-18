export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  status: 'Research program' | 'Submitted research' | 'Published research';
  tags: string[];
  problem: string;
  idea: string;
  approach: string[];
  contributions: string[];
  relevance: string;
  relatedPublicationSlugs: string[];
  href: string;
};

export const projects: { en: Project[]; fa: Array<{ title: string; tag: string; summary: string; href: string }> } = {
  en: [
    {
      slug: 'integrated-optical-receiver-oisl',
      number: '01',
      title: 'Integrated Optical Receiver for OISL',
      category: 'Optical receiver architecture',
      tag: 'OISL · Receiver Design · Fine Tracking',
      summary: 'A receiver architecture combining communication detection and fine tracking, with analysis of detector geometry, received-power distribution and alignment sensitivity for inter-satellite FSO links.',
      status: 'Submitted research',
      tags: ['Architecture', 'Analysis', 'Optimization', 'Simulation'],
      problem: 'Inter-satellite optical terminals must maintain a narrow optical link while recovering data under small alignment errors and platform motion.',
      idea: 'Use one integrated optical receiver concept to support communication detection and fine tracking without treating the two functions as isolated subsystems.',
      approach: ['Receiver and detector geometry', 'Received-power distribution analysis', 'Alignment-sensitivity evaluation', 'Numerical optimization and validation'],
      contributions: ['Integrated communication-and-tracking architecture', 'Geometry-aware power analysis', 'Fine-tracking sensitivity framework'],
      relevance: 'The work is relevant to compact optical terminals that must coordinate acquisition, tracking and communication under strict mass, alignment and sensitivity constraints.',
      relatedPublicationSlugs: ['integrated-optical-receiver-communication-fine-tracking-inter-satellite'],
      href: '/projects/integrated-optical-receiver-oisl'
    },
    {
      slug: 'all-optical-multi-hop-inter-satellite-relaying',
      number: '02',
      title: 'All-Optical Multi-Hop Inter-Satellite Relaying',
      category: 'Space optical networking',
      tag: 'OISL · M-PAM · Regenerative Relaying',
      summary: 'Closed-form performance modeling and regenerative M-PAM relay design for multi-hop optical inter-satellite links, supported by numerical and Monte Carlo evaluation.',
      status: 'Submitted research',
      tags: ['Architecture', 'Analysis', 'Simulation', 'Publication'],
      problem: 'Long optical routes across satellite networks require relay strategies that manage noise, symbol errors and hardware limits across multiple hops.',
      idea: 'Model an all-optical regenerative relay chain for M-PAM transmission and express end-to-end behavior through per-hop analytical building blocks.',
      approach: ['Multi-hop optical architecture', 'Receiver and amplifier modeling', 'Closed-form performance analysis', 'Numerical and Monte Carlo validation'],
      contributions: ['Regenerative multi-hop optical framework', 'Closed-form error analysis', 'Hardware-aware relay modeling'],
      relevance: 'The framework connects communication theory with the practical design of future optical crosslink networks and regenerative satellite relay payloads.',
      relatedPublicationSlugs: ['all-optical-multi-hop-inter-satellite-relaying-m-pam'],
      href: '/projects/all-optical-multi-hop-inter-satellite-relaying'
    },
    {
      slug: 'power-neutral-information-energy-transfer',
      number: '03',
      title: 'Power-Neutral Information & Energy Transfer',
      category: 'Optical information and energy transfer',
      tag: 'FSO · Stokes Signaling · Energy Transfer',
      summary: 'An analytical inter-satellite FSO framework using Stokes-orthogonal signaling to coordinate information reception and optical energy transfer under power constraints.',
      status: 'Submitted research',
      tags: ['System Design', 'Analysis', 'Optimization', 'Publication'],
      problem: 'A space optical receiver may need to recover information while also managing the energy available from the received optical signal.',
      idea: 'Coordinate information and energy paths through Stokes-orthogonal signaling so the same inter-satellite optical link can be studied as a joint communication-and-power system.',
      approach: ['Polarization-domain signaling', 'Receiver path modeling', 'Information-performance analysis', 'Optical energy-transfer evaluation'],
      contributions: ['Power-neutral system formulation', 'Stokes-orthogonal signaling architecture', 'Joint information-and-energy analysis'],
      relevance: 'The research explores energy-aware optical terminal concepts for spacecraft where power, aperture and payload resources are tightly constrained.',
      relatedPublicationSlugs: ['power-neutral-information-energy-transfer-inter-satellite-fso-stokes'],
      href: '/projects/power-neutral-information-energy-transfer'
    },
    {
      slug: 'inter-haps-multi-branch-optical-reception',
      number: '04',
      title: 'Inter-HAPS Multi-Branch Optical Reception',
      category: 'Aerial optical systems',
      tag: 'HAPS · Optical Receiver · Multi-Branch',
      summary: 'A progressively attenuated multi-branch receiver strategy and analytical performance model for inter-HAPS optical links.',
      status: 'Submitted research',
      tags: ['Architecture', 'Analysis', 'Simulation', 'Optimization'],
      problem: 'Optical links between high-altitude platforms must remain useful across changing received power, alignment conditions and detector operating limits.',
      idea: 'Distribute reception across progressively attenuated branches and select a useful nonsaturated branch rather than relying on a single operating point.',
      approach: ['Multi-branch receiver architecture', 'Power and saturation modeling', 'Outage analysis', 'Monte Carlo verification'],
      contributions: ['Progressive attenuation strategy', 'Branch-selection model', 'Analytical outage framework'],
      relevance: 'The project targets robust optical reception for aerial platforms subject to large link-distance and received-power variations.',
      relatedPublicationSlugs: ['progressively-attenuated-multi-branch-reception-inter-haps'],
      href: '/projects/inter-haps-multi-branch-optical-reception'
    }
  ],
  fa: [
    {
      title: 'گیرنده یکپارچه نوری برای OISL',
      tag: 'OISL · طراحی گیرنده · رهگیری دقیق',
      summary: 'معماری گیرنده‌ای که آشکارسازی مخابرات و رهگیری دقیق را ترکیب می‌کند و هندسه آشکارساز، توزیع توان دریافتی و حساسیت هم‌ترازی در لینک‌های FSO بین‌ماهواره‌ای را بررسی می‌کند.',
      href: '/fa/projects'
    },
    {
      title: 'رله تمام‌نوری چندهاپی بین‌ماهواره‌ای',
      tag: 'OISL · M-PAM · رله بازتولیدی',
      summary: 'مدل‌سازی فرم‌بسته و طراحی رله بازتولیدی M-PAM برای لینک‌های نوری چندهاپی بین‌ماهواره‌ای همراه با ارزیابی عددی و مونت‌کارلو.',
      href: '/fa/projects'
    },
    {
      title: 'انتقال اطلاعات و انرژی با توان خنثی',
      tag: 'FSO · سیگنالینگ Stokes · انتقال انرژی',
      summary: 'چارچوب تحلیلی FSO بین‌ماهواره‌ای مبتنی بر سیگنالینگ Stokes-orthogonal برای هماهنگ‌سازی دریافت اطلاعات و انتقال انرژی نوری تحت محدودیت توان.',
      href: '/fa/projects'
    },
    {
      title: 'دریافت نوری چندشاخه برای Inter-HAPS',
      tag: 'HAPS · گیرنده نوری · چندشاخه',
      summary: 'راهبرد گیرنده چندشاخه با تضعیف تدریجی و مدل تحلیلی عملکرد برای لینک‌های نوری بین HAPS.',
      href: '/fa/projects'
    }
  ]
};

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  type: 'Journal' | 'Conference';
  year: string;
  status: 'Published' | 'Accepted' | 'Submitted';
  summaryEn: string;
  summaryFa: string;
  tags: string[];
  featured?: boolean;
  problemEn?: string;
  ideaEn?: string;
  relevanceEn?: string;
  relatedProjectSlugs?: string[];
  doi?: string;
  externalUrl?: string;
  pdf?: string;
  video?: string;
};

export const publications: Publication[] = [
  {
    slug: 'all-optical-multi-hop-inter-satellite-relaying-m-pam',
    title: 'All-Optical Multi-Hop Inter-Satellite Relaying for M-PAM Systems: Closed-Form Performance Analysis and Regenerative Design',
    authors: 'M. Ghanbari, M. T. Dabiri, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE Transactions on Communications',
    type: 'Journal',
    year: '2026',
    status: 'Submitted',
    featured: true,
    summaryEn: 'This work develops an all-optical regenerative multi-hop architecture for inter-satellite optical links using M-PAM signaling. The associated research program emphasizes closed-form performance modeling, regenerative relay operation and numerical or Monte Carlo validation.',
    summaryFa: 'این پژوهش یک معماری بازتولیدی تمام‌نوری چندهاپی برای لینک‌های نوری بین‌ماهواره‌ای با سیگنالینگ M-PAM توسعه می‌دهد و بر مدل‌سازی فرم‌بسته، عملکرد رله بازتولیدی و اعتبارسنجی عددی یا مونت‌کارلو تمرکز دارد.',
    tags: ['OISL', 'M-PAM', 'All-Optical Relaying', 'Closed-Form Analysis'],
    problemEn: 'Multi-hop inter-satellite optical links require an end-to-end model that captures relay regeneration, optical amplification and symbol-error propagation across the chain.',
    ideaEn: 'Represent the system as a sequence of regenerative optical hops and connect their transition behavior analytically for M-PAM transmission.',
    relevanceEn: 'The study supports the design of high-capacity optical crosslink networks in which multiple satellites act as communication relays.',
    relatedProjectSlugs: ['all-optical-multi-hop-inter-satellite-relaying']
  },
  {
    slug: 'future-communications-narrow-beams-pointing-errors-alignment-limits',
    title: 'When Future Communications Shift Toward Narrow Beams: A Forward-Looking Survey on Pointing Errors and Alignment Limits',
    authors: 'M. Ghanbari et al.',
    venue: 'IEEE Open Journal of the Communications Society, vol. 7, pp. 4959-5006',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    featured: true,
    summaryEn: 'A forward-looking survey on pointing errors, alignment limits and the increasing importance of beam-control constraints as future communication systems move toward narrow-beam operation.',
    summaryFa: 'مروری آینده‌نگر بر خطاهای نشانه‌روی، محدودیت‌های هم‌ترازی و اهمیت روزافزون کنترل پرتو در سامانه‌های مخابراتی narrow-beam آینده.',
    tags: ['Pointing Error', 'Alignment', 'Narrow Beams', '6G', 'Survey'],
    problemEn: 'Future high-frequency and optical communication systems increasingly depend on narrow beams, making alignment error a first-order system constraint.',
    ideaEn: 'Organize the pointing-error and alignment literature around the mechanisms, limits and design choices that become critical as beams narrow.',
    relevanceEn: 'The survey provides a systems view for researchers and engineers designing directional links across optical, terahertz and future 6G platforms.'
  },
  {
    slug: 'city-scale-quantum-timing-wireless-synchronization-quantum-hubs',
    title: 'Toward City-Scale Quantum Timing: Wireless Synchronization via Quantum Hubs',
    authors: 'M. T. Dabiri, M. Ghanbari, M. Hasna, R. Ammuri, S. Al-Kuwari, and K. A. Qaraqe',
    venue: 'IEEE Journal on Selected Areas in Communications, vol. 44, pp. 5388-5403',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    featured: true,
    summaryEn: 'This publication addresses wireless synchronization for city-scale quantum timing architectures organized around quantum hubs.',
    summaryFa: 'این مقاله به هم‌زمان‌سازی بی‌سیم برای معماری‌های زمان‌بندی کوانتومی در مقیاس شهری مبتنی بر quantum hub می‌پردازد.',
    tags: ['Quantum Timing', 'Synchronization', 'Quantum Hubs', 'Wireless Networks'],
    problemEn: 'City-scale quantum systems need a practical way to distribute timing and synchronization beyond isolated laboratory links.',
    ideaEn: 'Study wireless synchronization around quantum hubs as an architectural layer for city-scale quantum timing.',
    relevanceEn: 'The work links quantum infrastructure with communication-network design and timing distribution at urban scale.',
    externalUrl: 'https://ieeexplore.ieee.org/document/11598901/'
  },
  {
    slug: 'joint-tracking-polarization-alignment-satellite-qkd',
    title: 'Real-Time Joint Tracking and Polarization Alignment for Satellite Quantum Key Distribution Using an Artificial-Angle Auxiliary System',
    authors: 'M. T. Dabiri, M. Ghanbari, R. Ammuri, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE Transactions on Communications, vol. 74, pp. 11062-11075',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    featured: true,
    summaryEn: 'This work studies real-time joint tracking and polarization alignment for satellite quantum key distribution using an artificial-angle auxiliary system.',
    summaryFa: 'این پژوهش رهگیری بلادرنگ و هم‌ترازی قطبش را برای QKD ماهواره‌ای با استفاده از یک سامانه کمکی artificial-angle بررسی می‌کند.',
    tags: ['Satellite QKD', 'Tracking', 'Polarization Alignment', 'Quantum Communications'],
    problemEn: 'Satellite quantum key distribution depends on simultaneous spatial tracking and polarization alignment under platform motion.',
    ideaEn: 'Use an artificial-angle auxiliary system to support real-time joint tracking and polarization alignment.',
    relevanceEn: 'The receiver-side coordination addressed by this work is central to operational satellite quantum links.'
  },
  {
    slug: 'terahertz-coverage-fixed-wing-uavs',
    title: 'Terahertz Coverage Analysis with Fixed-Wing UAVs: Analytical Framework and Closed-Form Outage Modeling',
    authors: 'M. Erdem, M. T. Dabiri, M. Ghanbari, M. O. Hasna, and K. Qaraqe',
    venue: 'IEEE Transactions on Vehicular Technology',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    featured: true,
    summaryEn: 'An analytical framework for terahertz coverage with fixed-wing UAVs, with emphasis on closed-form outage modeling.',
    summaryFa: 'چارچوبی تحلیلی برای پوشش تراهرتز با UAV بال‌ثابت با تمرکز بر مدل‌سازی فرم‌بسته outage.',
    tags: ['Terahertz', 'UAV', 'Coverage', 'Outage Modeling'],
    problemEn: 'Fixed-wing UAV motion and terahertz propagation create coverage and outage behavior that cannot be understood from static terrestrial models alone.',
    ideaEn: 'Develop an analytical coverage framework with closed-form outage modeling for fixed-wing UAV terahertz links.',
    relevanceEn: 'The framework is relevant to aerial backhaul and future high-frequency non-terrestrial networks.'
  },
  {
    slug: 'optimal-beamwidth-uav-to-hap-fso-pointing-inaccuracies',
    title: 'Outage Probability Minimization by Optimal Beamwidth Selection for UAV-to-HAP FSO Links Under Pointing Inaccuracies',
    authors: 'M. Ghanbari, M. Ataee, and S. M. S. Sadough',
    venue: 'Optik, article 171953',
    type: 'Journal',
    year: '2024',
    status: 'Published',
    featured: true,
    summaryEn: 'This study considers beamwidth optimization for UAV-to-HAP free-space optical links under pointing inaccuracies, with outage probability as the primary performance objective.',
    summaryFa: 'این مطالعه به بهینه‌سازی beamwidth برای لینک‌های FSO از UAV به HAP تحت خطاهای نشانه‌روی با تمرکز بر احتمال outage می‌پردازد.',
    tags: ['FSO', 'UAV-to-HAP', 'Beamwidth Optimization', 'Pointing Error'],
    problemEn: 'UAV-to-HAP optical links must balance beam spread against pointing uncertainty to limit outage.',
    ideaEn: 'Select the optical beamwidth that minimizes outage probability under pointing inaccuracies.',
    relevanceEn: 'The analysis provides a direct design variable for aerial optical terminals operating under alignment uncertainty.'
  },
  {
    slug: 'integrated-optical-receiver-communication-fine-tracking-inter-satellite',
    title: 'Integrated Optical Receiver for Communication and Fine Tracking in Inter-Satellite Links',
    authors: 'M. Ghanbari, M. T. Dabiri, A. Alomainy, Q. H. Abbasi, M. O. Hasna, and K. A. Qaraqe',
    venue: 'IEEE VTC 2027-Spring',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    featured: true,
    summaryEn: 'An integrated receiver concept that combines communication detection and fine tracking for inter-satellite optical links, including detector geometry, power distribution and alignment sensitivity.',
    summaryFa: 'مفهوم یک گیرنده یکپارچه که آشکارسازی مخابرات و رهگیری دقیق را برای لینک‌های نوری بین‌ماهواره‌ای ترکیب می‌کند و هندسه آشکارساز، توزیع توان و حساسیت هم‌ترازی را در نظر می‌گیرد.',
    tags: ['OISL', 'Optical Receiver', 'Fine Tracking', 'PAT'],
    problemEn: 'An inter-satellite terminal must recover communication data while measuring small angular errors for fine tracking.',
    ideaEn: 'Integrate communication detection and fine tracking in one optical receiver architecture.',
    relevanceEn: 'The concept targets compact satellite terminals in which optical, mechanical and detector resources must be shared carefully.',
    relatedProjectSlugs: ['integrated-optical-receiver-oisl']
  },
  {
    slug: 'progressively-attenuated-multi-branch-reception-inter-haps',
    title: 'Progressively Attenuated Multi-Branch Reception for Inter-HAPS Optical Links',
    authors: 'M. Ghanbari, B. Beidas, W. O. Popoola, M. O. Hasna, K. A. Qaraqe, and M. Elamassie',
    venue: 'IEEE VTC 2027-Spring',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    featured: true,
    summaryEn: 'A progressively attenuated multi-branch optical reception strategy for inter-HAPS links, accompanied by an analytical performance model.',
    summaryFa: 'راهبرد دریافت نوری چندشاخه با تضعیف تدریجی برای لینک‌های بین HAPS همراه با مدل تحلیلی عملکرد.',
    tags: ['HAPS', 'Optical Reception', 'Multi-Branch', 'FSO'],
    problemEn: 'Inter-HAPS optical receivers must operate across wide power variation without relying on one detector branch that may saturate or fall below threshold.',
    ideaEn: 'Use progressively attenuated parallel branches and select a usable nonsaturated reception path.',
    relevanceEn: 'The strategy addresses resilient optical reception for high-altitude platforms over changing link conditions.',
    relatedProjectSlugs: ['inter-haps-multi-branch-optical-reception']
  },
  {
    slug: 'power-neutral-information-energy-transfer-inter-satellite-fso-stokes',
    title: 'Power-Neutral Joint Information and Energy Transfer over Inter-Satellite FSO Links via Stokes-Orthogonal Signaling',
    authors: 'M. Ghanbari, M. O. Hasna, and K. A. Qaraqe',
    venue: 'IEEE ICC 2027',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    featured: true,
    summaryEn: 'An inter-satellite FSO framework using Stokes-orthogonal signaling to coordinate information reception and optical energy transfer under power constraints.',
    summaryFa: 'چارچوب FSO بین‌ماهواره‌ای مبتنی بر سیگنالینگ Stokes-orthogonal برای هماهنگ‌سازی دریافت اطلاعات و انتقال انرژی نوری تحت محدودیت توان.',
    tags: ['Inter-Satellite FSO', 'Stokes Signaling', 'Energy Transfer', 'Power Neutrality'],
    problemEn: 'Space optical links are normally optimized for information transfer even when the received optical power may also have value for onboard energy management.',
    ideaEn: 'Use Stokes-orthogonal signaling to study coordinated information recovery and optical energy transfer within one inter-satellite link.',
    relevanceEn: 'The work explores communication architectures that treat power as a system resource rather than a separate afterthought.',
    relatedProjectSlugs: ['power-neutral-information-energy-transfer']
  },
  {
    slug: 'ai-assisted-outdoor-optical-networks-camera-sensing-localization',
    title: 'AI-Assisted Next-Gen Outdoor Optical Networks: Camera Sensing for Monitoring and User Localization',
    authors: 'M. Ghanbari, M. T. Dabiri, R. Ammuri, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE ICC, Glasgow, United Kingdom, pp. 1-6',
    type: 'Conference',
    year: '2026',
    status: 'Published',
    summaryEn: 'This conference paper explores AI-assisted camera sensing for monitoring and user localization in next-generation outdoor optical networks.',
    summaryFa: 'این مقاله کنفرانسی استفاده از camera sensing مبتنی بر هوش مصنوعی را برای پایش و مکان‌یابی کاربر در شبکه‌های نوری outdoor نسل بعد بررسی می‌کند.',
    tags: ['Optical Networks', 'AI', 'Camera Sensing', 'Localization']
  },
  {
    slug: 'hierarchical-deep-learning-turbulence-pointing-error-multi-aperture-fso',
    title: 'Hierarchical Deep Learning for Joint Turbulence and PE Estimation in Multi-Aperture FSO Systems',
    authors: 'M. T. Dabiri, M. Ghanbari, R. Ammuri, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE WCNC, Kuala Lumpur, Malaysia, pp. 1-6',
    type: 'Conference',
    year: '2026',
    status: 'Published',
    summaryEn: 'A hierarchical deep-learning approach for joint estimation of turbulence and pointing error in multi-aperture free-space optical systems.',
    summaryFa: 'رویکردی مبتنی بر یادگیری عمیق سلسله‌مراتبی برای تخمین مشترک turbulence و pointing error در سامانه‌های FSO چنددهانه.',
    tags: ['FSO', 'Deep Learning', 'Turbulence Estimation', 'Pointing Error']
  },
  {
    slug: 'deep-learning-surrogate-cir-reactive-molecular-diffusion-advection',
    title: 'Deep Learning Surrogate for Fast CIR Prediction in Reactive Molecular Diffusion-Advection Channels',
    authors: 'M. Ghanbari, M. T. Dabiri, M. Hasna, T. Alam, and K. A. Qaraqe',
    venue: 'IEEE ICMLCN',
    type: 'Conference',
    year: '2026',
    status: 'Accepted',
    summaryEn: 'A deep-learning surrogate approach for accelerating channel impulse response prediction in reactive molecular diffusion-advection channels.',
    summaryFa: 'رویکرد surrogate مبتنی بر یادگیری عمیق برای تسریع پیش‌بینی پاسخ ضربه کانال در کانال‌های reactive molecular diffusion-advection.',
    tags: ['Molecular Communication', 'Deep Learning', 'Surrogate Modeling', 'CIR']
  },
  {
    slug: 'cv-quantum-communications-angular-rejection-filtering',
    title: 'CV Quantum Communications with Angular Rejection Filtering: Modeling and Security Analysis',
    authors: 'M. T. Dabiri, M. Ghanbari, R. Ammuri, S. Al-Kuwari, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE ICUFN, Milan, Italy, pp. 593-598',
    type: 'Conference',
    year: '2026',
    status: 'Published',
    summaryEn: 'Modeling and security analysis of continuous-variable quantum communication systems that employ angular rejection filtering.',
    summaryFa: 'مدل‌سازی و تحلیل امنیت سامانه‌های ارتباطات کوانتومی continuous-variable با استفاده از angular rejection filtering.',
    tags: ['CV Quantum', 'Angular Filtering', 'Security', 'Quantum Communications']
  },
  {
    slug: 'optical-irs-assisted-relay-los-qkd',
    title: 'Optical IRS Assisted Relay Architecture for Enhancing LOS Quantum Key Distribution Links',
    authors: 'G. H. Al-Maadeed, N. Abunada, R. Ammuri, M. T. Dabiri, M. Ghanbari, and K. Qaraqe',
    venue: 'IEEE ICETES, Amman, Jordan, pp. 477-483',
    type: 'Conference',
    year: '2026',
    status: 'Published',
    summaryEn: 'A relay architecture using optical intelligent reflecting surfaces to enhance line-of-sight quantum key distribution links.',
    summaryFa: 'معماری رله مبتنی بر optical IRS برای تقویت لینک‌های line-of-sight در توزیع کلید کوانتومی.',
    tags: ['Optical IRS', 'QKD', 'Relay Architecture', 'LOS']
  },
  {
    slug: 'meteorological-conditions-performance-optimization-miso-fso',
    title: 'On the Interaction Between Meteorological Conditions and Performance Optimization in MISO Free-Space Optical Communication',
    authors: 'M. Ghanbari, M. S. Jahed, and S. M. S. Sadough',
    venue: 'IEEE ICEE, Tehran, Iran, pp. 479-483',
    type: 'Conference',
    year: '2023',
    status: 'Published',
    summaryEn: 'This paper studies the interaction between meteorological conditions and performance optimization in MISO free-space optical communication.',
    summaryFa: 'این مقاله تعامل شرایط هواشناسی و بهینه‌سازی عملکرد را در مخابرات FSO با ساختار MISO بررسی می‌کند.',
    tags: ['MISO FSO', 'Meteorological Conditions', 'Optimization']
  },
  {
    slug: 'ber-mixed-underwater-owc-fso-relaying-pointing-error',
    title: 'Bit Error Rate Analysis for a Mixed Underwater OWC-FSO Relaying System in the Presence of Pointing Error',
    authors: 'M. S. Jahed, M. Ghanbari, and S. M. S. Sadough',
    venue: 'IEEE ICEE, Tehran, Iran, pp. 512-516',
    type: 'Conference',
    year: '2023',
    status: 'Published',
    summaryEn: 'A bit-error-rate analysis for mixed underwater optical wireless and free-space optical relaying in the presence of pointing error.',
    summaryFa: 'تحلیل BER برای یک سامانه رله ترکیبی underwater OWC-FSO در حضور خطای نشانه‌روی.',
    tags: ['Underwater OWC', 'FSO', 'Relaying', 'BER', 'Pointing Error']
  },
  {
    slug: 'outage-uav-mixed-underwater-fso-pointing-errors',
    title: 'Outage Performance Analysis for UAV-Based Mixed Underwater-FSO Communication Under Pointing Errors',
    authors: 'M. Ghanbari, M. Ataee, and S. M. S. Sadough',
    venue: 'IEEE WASOWC, Tabriz, Iran, pp. 1-5',
    type: 'Conference',
    year: '2022',
    status: 'Published',
    summaryEn: 'An outage performance study of UAV-supported mixed underwater-FSO communication under pointing errors.',
    summaryFa: 'مطالعه عملکرد outage برای ارتباط ترکیبی underwater-FSO مبتنی بر UAV تحت خطاهای نشانه‌روی.',
    tags: ['UAV', 'Underwater OWC', 'FSO', 'Outage', 'Pointing Error']
  }
];

export const videos: Array<{
  title: string;
  platform: string;
  url: string;
  thumbnail: string;
}> = [];

export const insights: Array<{
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}> = [];

export const upcoming: Array<{
  title: string;
  titleFa: string;
  date: string;
  startDate: string;
  endDate: string;
  location: string;
  locationFa: string;
  venue: string;
  type: string;
  typeFa: string;
  status: string;
  question: string;
  questionFa: string;
  description: string;
  descriptionFa: string;
  conference: string;
  conferenceUrl: string;
  image: string;
  imageAlt: string;
  paperTitle: string;
  paperUrl: string;
  researchUrl: string;
  projectUrl: string;
  tags: string[];
}> = [
  {
    title: 'Meysam Ghanbari at IEEE VTC 2027-Spring',
    titleFa: 'ارائه میثم قنبری در IEEE VTC 2027-Spring',
    date: '20–23 June 2027',
    startDate: '2027-06-20',
    endDate: '2027-06-23',
    location: 'Hamburg, Germany',
    locationFa: 'هامبورگ، آلمان',
    venue: 'Grand Elysée Hotel Hamburg',
    type: 'Scheduled research presentation',
    typeFa: 'ارائه پژوهشی برنامه‌ریزی‌شده',
    status: 'Scheduled',
    question: 'How can an inter-HAPS optical receiver remain reliable when one detector branch saturates while another falls below its sensitivity threshold?',
    questionFa: 'چگونه یک گیرنده نوری بین‌ـHAPS می‌تواند زمانی که یک شاخه اشباع می‌شود و شاخه‌ای دیگر پایین‌تر از آستانه حساسیت قرار می‌گیرد، همچنان قابل‌اعتماد بماند؟',
    description: 'At IEEE VTC 2027-Spring in Hamburg, Meysam Ghanbari is scheduled to present a progressively attenuated multi-branch receiver developed to address this challenge. The architecture is designed to preserve a usable, nonsaturated optical detection path across changing received-power conditions.',
    descriptionFa: 'میثم قنبری در IEEE VTC 2027-Spring در هامبورگ، راهکار گیرنده چندشاخه با تضعیف تدریجی را برای پاسخ به این مسئله ارائه خواهد کرد. این معماری برای حفظ یک مسیر آشکارسازی نوری قابل‌استفاده و غیراشباع در شرایط تغییر توان دریافتی طراحی شده است.',
    conference: 'The 2027 IEEE 105th Vehicular Technology Conference',
    conferenceUrl: 'https://events.vtsociety.org/vtc2027-spring/',
    image: '/images/events/vtc2027-spring-hamburg-official-conference.jpg',
    imageAlt: 'Official IEEE VTC 2027-Spring conference visual showing Hamburg, Germany, and the 20–23 June 2027 dates',
    paperTitle: 'Progressively Attenuated Multi-Branch Reception for Inter-HAPS Optical Links',
    paperUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=U6s7sawAAAAJ&sortby=pubdate&citation_for_view=U6s7sawAAAAJ:MXK_kJrjxJIC',
    researchUrl: '/publications/progressively-attenuated-multi-branch-reception-inter-haps',
    projectUrl: '/projects/inter-haps-multi-branch-optical-reception',
    tags: ['Inter-HAPS', 'Optical Wireless', 'Multi-Branch Receiver', 'FSO']
  }
];

export const media = [
  {
    src: '/images/profile/meysam-ghanbari-space-communications-researcher.webp',
    alt: 'Meysam Ghanbari, optical and satellite communications researcher, with a satellite and Earth visualization',
    labelEn: 'Space communications portrait',
    labelFa: 'پرتره با تم ارتباطات فضایی'
  },
  {
    src: '/images/profile/meysam-ghanbari-satellite-optical-communications.webp',
    alt: 'Meysam Ghanbari in a professional satellite and optical communications technology environment',
    labelEn: 'Satellite and optical communications',
    labelFa: 'محیط فناوری ماهواره و مخابرات نوری'
  },
  {
    src: '/images/media/meysam-ghanbari-research-presentation.webp',
    alt: 'Meysam Ghanbari giving a professional research presentation',
    labelEn: 'Research presentation',
    labelFa: 'ارائه پژوهشی'
  },
  {
    src: '/images/media/meysam-ghanbari-research-workspace.webp',
    alt: 'Meysam Ghanbari working at a research desk with a laptop',
    labelEn: 'Research workspace',
    labelFa: 'محیط کار پژوهشی'
  },
  {
    src: '/images/profile/meysam-ghanbari-formal-portrait.webp',
    alt: 'Formal portrait of Meysam Ghanbari',
    labelEn: 'Formal portrait',
    labelFa: 'پرتره رسمی'
  },
  {
    src: '/images/profile/meysam-ghanbari-professional-headshot.webp',
    alt: 'Professional headshot of Meysam Ghanbari',
    labelEn: 'Professional headshot',
    labelFa: 'هدشات حرفه‌ای'
  }
];
