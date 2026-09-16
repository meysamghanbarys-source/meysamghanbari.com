export const projects = {
  en: [
    {
      title: 'Integrated Optical Receiver for OISL',
      tag: 'OISL · Receiver Design · Fine Tracking',
      summary: 'A receiver architecture combining communication detection and fine tracking, with analysis of detector geometry, received-power distribution and alignment sensitivity for inter-satellite FSO links.',
      href: '/projects'
    },
    {
      title: 'All-Optical Multi-Hop Inter-Satellite Relaying',
      tag: 'OISL · M-PAM · Regenerative Relaying',
      summary: 'Closed-form performance modeling and regenerative M-PAM relay design for multi-hop optical inter-satellite links, supported by numerical and Monte Carlo evaluation.',
      href: '/projects'
    },
    {
      title: 'Power-Neutral Information & Energy Transfer',
      tag: 'FSO · Stokes Signaling · Energy Transfer',
      summary: 'An analytical inter-satellite FSO framework using Stokes-orthogonal signaling to coordinate information reception and optical energy transfer under power constraints.',
      href: '/projects'
    },
    {
      title: 'Inter-HAPS Multi-Branch Optical Reception',
      tag: 'HAPS · Optical Receiver · Multi-Branch',
      summary: 'A progressively attenuated multi-branch receiver strategy and analytical performance model for inter-HAPS optical links.',
      href: '/projects'
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
  doi?: string;
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
    summaryEn: 'This work develops an all-optical regenerative multi-hop architecture for inter-satellite optical links using M-PAM signaling. The associated research program emphasizes closed-form performance modeling, regenerative relay operation and numerical or Monte Carlo validation.',
    summaryFa: 'این پژوهش یک معماری بازتولیدی تمام‌نوری چندهاپی برای لینک‌های نوری بین‌ماهواره‌ای با سیگنالینگ M-PAM توسعه می‌دهد و بر مدل‌سازی فرم‌بسته، عملکرد رله بازتولیدی و اعتبارسنجی عددی یا مونت‌کارلو تمرکز دارد.',
    tags: ['OISL', 'M-PAM', 'All-Optical Relaying', 'Closed-Form Analysis']
  },
  {
    slug: 'future-communications-narrow-beams-pointing-errors-alignment-limits',
    title: 'When Future Communications Shift Toward Narrow Beams: A Forward-Looking Survey on Pointing Errors and Alignment Limits',
    authors: 'M. Ghanbari et al.',
    venue: 'IEEE Open Journal of the Communications Society, vol. 7, pp. 4959-5006',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    summaryEn: 'A forward-looking survey on pointing errors, alignment limits and the increasing importance of beam-control constraints as future communication systems move toward narrow-beam operation.',
    summaryFa: 'مروری آینده‌نگر بر خطاهای نشانه‌روی، محدودیت‌های هم‌ترازی و اهمیت روزافزون کنترل پرتو در سامانه‌های مخابراتی narrow-beam آینده.',
    tags: ['Pointing Error', 'Alignment', 'Narrow Beams', '6G', 'Survey']
  },
  {
    slug: 'city-scale-quantum-timing-wireless-synchronization-quantum-hubs',
    title: 'Toward City-Scale Quantum Timing: Wireless Synchronization via Quantum Hubs',
    authors: 'M. T. Dabiri, M. Ghanbari, M. Hasna, R. Ammuri, S. Al-Kuwari, and K. A. Qaraqe',
    venue: 'IEEE Journal on Selected Areas in Communications, vol. 44, pp. 5388-5403',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    summaryEn: 'This publication addresses wireless synchronization for city-scale quantum timing architectures organized around quantum hubs.',
    summaryFa: 'این مقاله به هم‌زمان‌سازی بی‌سیم برای معماری‌های زمان‌بندی کوانتومی در مقیاس شهری مبتنی بر quantum hub می‌پردازد.',
    tags: ['Quantum Timing', 'Synchronization', 'Quantum Hubs', 'Wireless Networks']
  },
  {
    slug: 'joint-tracking-polarization-alignment-satellite-qkd',
    title: 'Real-Time Joint Tracking and Polarization Alignment for Satellite Quantum Key Distribution Using an Artificial-Angle Auxiliary System',
    authors: 'M. T. Dabiri, M. Ghanbari, R. Ammuri, M. Hasna, and K. A. Qaraqe',
    venue: 'IEEE Transactions on Communications, vol. 74, pp. 11062-11075',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    summaryEn: 'This work studies real-time joint tracking and polarization alignment for satellite quantum key distribution using an artificial-angle auxiliary system.',
    summaryFa: 'این پژوهش رهگیری بلادرنگ و هم‌ترازی قطبش را برای QKD ماهواره‌ای با استفاده از یک سامانه کمکی artificial-angle بررسی می‌کند.',
    tags: ['Satellite QKD', 'Tracking', 'Polarization Alignment', 'Quantum Communications']
  },
  {
    slug: 'terahertz-coverage-fixed-wing-uavs',
    title: 'Terahertz Coverage Analysis with Fixed-Wing UAVs: Analytical Framework and Closed-Form Outage Modeling',
    authors: 'M. Erdem, M. T. Dabiri, M. Ghanbari, M. O. Hasna, and K. Qaraqe',
    venue: 'IEEE Transactions on Vehicular Technology',
    type: 'Journal',
    year: '2026',
    status: 'Published',
    summaryEn: 'An analytical framework for terahertz coverage with fixed-wing UAVs, with emphasis on closed-form outage modeling.',
    summaryFa: 'چارچوبی تحلیلی برای پوشش تراهرتز با UAV بال‌ثابت با تمرکز بر مدل‌سازی فرم‌بسته outage.',
    tags: ['Terahertz', 'UAV', 'Coverage', 'Outage Modeling']
  },
  {
    slug: 'optimal-beamwidth-uav-to-hap-fso-pointing-inaccuracies',
    title: 'Outage Probability Minimization by Optimal Beamwidth Selection for UAV-to-HAP FSO Links Under Pointing Inaccuracies',
    authors: 'M. Ghanbari, M. Ataee, and S. M. S. Sadough',
    venue: 'Optik, article 171953',
    type: 'Journal',
    year: '2024',
    status: 'Published',
    summaryEn: 'This study considers beamwidth optimization for UAV-to-HAP free-space optical links under pointing inaccuracies, with outage probability as the primary performance objective.',
    summaryFa: 'این مطالعه به بهینه‌سازی beamwidth برای لینک‌های FSO از UAV به HAP تحت خطاهای نشانه‌روی با تمرکز بر احتمال outage می‌پردازد.',
    tags: ['FSO', 'UAV-to-HAP', 'Beamwidth Optimization', 'Pointing Error']
  },
  {
    slug: 'integrated-optical-receiver-communication-fine-tracking-inter-satellite',
    title: 'Integrated Optical Receiver for Communication and Fine Tracking in Inter-Satellite Links',
    authors: 'M. Ghanbari, M. T. Dabiri, A. Alomainy, Q. H. Abbasi, M. O. Hasna, and K. A. Qaraqe',
    venue: 'IEEE VTC 2027-Spring',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    summaryEn: 'An integrated receiver concept that combines communication detection and fine tracking for inter-satellite optical links, including detector geometry, power distribution and alignment sensitivity.',
    summaryFa: 'مفهوم یک گیرنده یکپارچه که آشکارسازی مخابرات و رهگیری دقیق را برای لینک‌های نوری بین‌ماهواره‌ای ترکیب می‌کند و هندسه آشکارساز، توزیع توان و حساسیت هم‌ترازی را در نظر می‌گیرد.',
    tags: ['OISL', 'Optical Receiver', 'Fine Tracking', 'PAT']
  },
  {
    slug: 'progressively-attenuated-multi-branch-reception-inter-haps',
    title: 'Progressively Attenuated Multi-Branch Reception for Inter-HAPS Optical Links',
    authors: 'M. Ghanbari, B. Beidas, W. O. Popoola, M. O. Hasna, K. A. Qaraqe, and M. Elamassie',
    venue: 'IEEE VTC 2027-Spring',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    summaryEn: 'A progressively attenuated multi-branch optical reception strategy for inter-HAPS links, accompanied by an analytical performance model.',
    summaryFa: 'راهبرد دریافت نوری چندشاخه با تضعیف تدریجی برای لینک‌های بین HAPS همراه با مدل تحلیلی عملکرد.',
    tags: ['HAPS', 'Optical Reception', 'Multi-Branch', 'FSO']
  },
  {
    slug: 'power-neutral-information-energy-transfer-inter-satellite-fso-stokes',
    title: 'Power-Neutral Joint Information and Energy Transfer over Inter-Satellite FSO Links via Stokes-Orthogonal Signaling',
    authors: 'M. Ghanbari, M. O. Hasna, and K. A. Qaraqe',
    venue: 'IEEE ICC 2027',
    type: 'Conference',
    year: '2027',
    status: 'Submitted',
    summaryEn: 'An inter-satellite FSO framework using Stokes-orthogonal signaling to coordinate information reception and optical energy transfer under power constraints.',
    summaryFa: 'چارچوب FSO بین‌ماهواره‌ای مبتنی بر سیگنالینگ Stokes-orthogonal برای هماهنگ‌سازی دریافت اطلاعات و انتقال انرژی نوری تحت محدودیت توان.',
    tags: ['Inter-Satellite FSO', 'Stokes Signaling', 'Energy Transfer', 'Power Neutrality']
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
  date: string;
  location: string;
  type: string;
  url?: string;
}> = [];

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
