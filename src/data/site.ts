export const sectionIds = [
  'research',
  'projects',
  'publications',
  'videos',
  'insights',
  'upcoming',
  'media',
  'about',
  'contact'
] as const;

export const nav = {
  en: [
    ['research', 'Research'],
    ['projects', 'Projects'],
    ['publications', 'Publications'],
    ['videos', 'Videos & Talks'],
    ['insights', 'Insights'],
    ['upcoming', 'Upcoming'],
    ['media', 'Media'],
    ['about', 'About'],
    ['contact', 'Contact']
  ],
  fa: [
    ['research', 'پژوهش'],
    ['projects', 'پروژه‌ها'],
    ['publications', 'مقالات'],
    ['videos', 'ویدئو و ارائه‌ها'],
    ['insights', 'دیدگاه‌ها'],
    ['upcoming', 'رویدادهای پیش‌رو'],
    ['media', 'رسانه'],
    ['about', 'درباره'],
    ['contact', 'ارتباط']
  ]
};

export const site = {
  domain: 'https://meysamghanbari.com',
  name: 'Meysam Ghanbari',
  alternateName: 'میثم قنبری',
  role: {
    en: 'Researcher in Optical, Satellite & Advanced Communication Systems',
    fa: 'پژوهشگر سامانه‌های مخابرات نوری، ماهواره‌ای و پیشرفته'
  },
  contactEmail: 'meysamghanbarys@gmail.com',
  heroImage: '/images/profile/meysam-ghanbari-space-communications-researcher.webp',
  ogImage: '/images/profile/meysam-ghanbari-satellite-optical-communications.webp',
  socialLinks: {
    scholar: '',
    orcid: '',
    ieee: '',
    linkedin: '',
    github: 'https://github.com/meysamghanbarys-source'
  },
  knowsAbout: [
    'Optical satellite communications',
    'Inter-satellite optical links',
    'Free-space optical communications',
    'Pointing, acquisition and tracking',
    'Optical receiver design',
    'Photonic communication systems',
    'Non-terrestrial networks',
    'Quantum optical communications',
    'Physics-based digital twins',
    'FPGA and communication-system implementation'
  ],
  home: {
    en: {
      eyebrow: 'OFFICIAL RESEARCH WEBSITE',
      headline: 'Optical, satellite and deep-tech communication systems.',
      intro: 'Research in inter-satellite optical links, free-space optics, receiver systems and advanced communication engineering.',
      primaryCta: 'Explore research',
      secondaryCta: 'Research enquiries',
      researchTitle: 'Research portfolio',
      researchIntro: 'Current work spans inter-satellite optical links, free-space optical systems, receiver architecture, pointing and tracking, non-terrestrial networks and intelligent communication systems.',
      projectTitle: 'Selected engineering directions',
      projectIntro: 'Selected projects are presented as technical systems, with emphasis on the underlying communication problem, analytical model and engineering architecture.',
      publicationTitle: 'Selected publications',
      publicationIntro: 'Journal and conference work is organized as a research library with dedicated pages, editorial summaries and publication status.',
      collaborationTitle: 'Research, industry and technical enquiries',
      collaborationText: 'Research collaborations, industrial R&D discussions, technical consulting enquiries, speaking requests and deep-tech opportunities can be directed through the contact page.',
      collaborationCta: 'Contact'
    },
    fa: {
      eyebrow: 'وب‌سایت رسمی پژوهشی',
      headline: 'مخابرات نوری، ماهواره‌ای و سامانه‌های ارتباطی دیپ‌تک.',
      intro: 'پژوهش در لینک‌های نوری بین‌ماهواره‌ای، اپتیک فضای آزاد، سامانه‌های گیرنده و مهندسی پیشرفته مخابراتی.',
      primaryCta: 'مشاهده پژوهش‌ها',
      secondaryCta: 'ارتباط پژوهشی',
      researchTitle: 'پورتفولیوی پژوهشی',
      researchIntro: 'فعالیت‌های پژوهشی شامل لینک‌های نوری بین‌ماهواره‌ای، سامانه‌های FSO، معماری گیرنده، رهگیری و نشانه‌روی، شبکه‌های غیرزمینی و سامانه‌های مخابراتی هوشمند است.',
      projectTitle: 'مسیرهای مهندسی منتخب',
      projectIntro: 'پروژه‌های منتخب به‌صورت سیستم‌های فنی ارائه می‌شوند و بر مسئله مخابراتی، مدل تحلیلی و معماری مهندسی تمرکز دارند.',
      publicationTitle: 'مقالات منتخب',
      publicationIntro: 'مقالات ژورنالی و کنفرانسی در قالب یک کتابخانه پژوهشی با صفحه اختصاصی، توضیح و وضعیت انتشار سازمان‌دهی شده‌اند.',
      collaborationTitle: 'همکاری پژوهشی، صنعتی و فنی',
      collaborationText: 'درخواست‌های همکاری پژوهشی، تحقیق‌وتوسعه صنعتی، مشاوره فنی، سخنرانی و فرصت‌های دیپ‌تک از طریق صفحه ارتباط قابل ارسال هستند.',
      collaborationCta: 'ارتباط'
    }
  },
  themes: {
    en: [
      ['Optical Satellite Communications', 'Inter-satellite and space optical links, link budgets, receiver models and propagation constraints.'],
      ['Free-Space Optical Systems', 'Beam propagation, pointing errors, atmospheric effects, outage, BER/SER and analytical optimization.'],
      ['Optical Receiver & PAT Design', 'Receiver architecture, photodetector/TIA interfaces, acquisition, alignment, fine tracking and angle estimation.'],
      ['Non-Terrestrial & Quantum Links', 'HAPS/UAV systems, quantum optical links, timing, polarization alignment and narrow-beam networking.'],
      ['AI-Assisted Communication Systems', 'Physics-informed digital twins, deep-learning surrogates, estimation, localization and communication-system autonomy.']
    ],
    fa: [
      ['مخابرات نوری ماهواره‌ای', 'لینک‌های نوری بین‌ماهواره‌ای و فضایی، بودجه لینک، مدل گیرنده و محدودیت‌های انتشار.'],
      ['سامانه‌های نوری فضای آزاد', 'انتشار پرتو، خطای نشانه‌روی، اثرات محیطی، outage، BER/SER و بهینه‌سازی تحلیلی.'],
      ['طراحی گیرنده و PAT', 'معماری گیرنده، رابط فوتودیود/TIA، acquisition، alignment، رهگیری دقیق و تخمین زاویه.'],
      ['شبکه‌های غیرزمینی و کوانتومی', 'سامانه‌های HAPS/UAV، لینک‌های کوانتومی، زمان‌بندی، هم‌ترازی قطبش و شبکه‌های narrow-beam.'],
      ['سامانه‌های مخابراتی مبتنی بر هوش مصنوعی', 'دوقلوهای دیجیتال فیزیک‌محور، مدل‌های surrogate، تخمین، مکان‌یابی و خودکارسازی سامانه‌های مخابراتی.']
    ]
  },
  sections: {
    en: {
      research: {
        title: 'Research',
        kicker: 'RESEARCH PORTFOLIO',
        intro: 'The research portfolio is centered on satellite and optical communications, including OISL, FSO, receiver design, PAT, non-terrestrial networking, quantum optical links and data-driven communication-system modeling.',
      },
      projects: {
        title: 'Projects & Technologies',
        kicker: 'ENGINEERING DIRECTIONS',
        intro: 'Selected projects highlight system architecture, analytical modeling and engineering design across optical and satellite communication systems.',
      },
      publications: {
        title: 'Publications',
        kicker: 'JOURNAL & CONFERENCE RESEARCH',
        intro: 'A complete research library covering published, accepted and submitted journal and conference work.',
      },
      videos: {
        title: 'Videos & Talks',
        kicker: 'RESEARCH COMMUNICATION',
        intro: 'Research presentations, technical explainers, interviews and public speaking appearances.',
      },
      insights: {
        title: 'Insights',
        kicker: 'TECHNICAL PERSPECTIVES',
        intro: 'Technical perspectives on the future of optical communications, satellite networking, photonics, quantum links and deep-tech engineering.',
      },
      upcoming: {
        title: 'Upcoming',
        kicker: 'CONFERENCES · VISITS · TALKS',
        intro: 'Upcoming conferences, research visits, presentations, workshops and professional appearances.',
      },
      media: {
        title: 'Media',
        kicker: 'PROFESSIONAL IMAGE LIBRARY',
        intro: 'Professional portraits, research presentations, technical environments and conference-related activity.',
      },
      about: {
        title: 'About',
        kicker: 'RESEARCHER · ENGINEER · TECHNICAL BUILDER',
        intro: 'Meysam Ghanbari is a researcher and engineer working across satellite and optical communications, with technical activity spanning OISL, FSO, receiver design, PAT, quantum optical links, FPGA development, analytical modeling and physics-based digital twins.',
      },
      contact: {
        title: 'Contact',
        kicker: 'RESEARCH & PROFESSIONAL ENQUIRIES',
        intro: 'Research collaboration, industrial R&D, technical consulting, speaking, media and deep-tech enquiries can be directed to the contact address below.',
      }
    },
    fa: {
      research: {
        title: 'پژوهش',
        kicker: 'پورتفولیوی پژوهشی',
        intro: 'پورتفولیوی پژوهشی بر مخابرات ماهواره‌ای و نوری متمرکز است و حوزه‌هایی مانند OISL، FSO، طراحی گیرنده، PAT، شبکه‌های غیرزمینی، لینک‌های کوانتومی و مدل‌سازی داده‌محور سامانه‌های مخابراتی را پوشش می‌دهد.',
      },
      projects: {
        title: 'پروژه‌ها و فناوری‌ها',
        kicker: 'مسیرهای مهندسی',
        intro: 'پروژه‌های منتخب معماری سیستم، مدل‌سازی تحلیلی و طراحی مهندسی در سامانه‌های مخابرات نوری و ماهواره‌ای را نشان می‌دهند.',
      },
      publications: {
        title: 'مقالات',
        kicker: 'پژوهش ژورنالی و کنفرانسی',
        intro: 'کتابخانه کامل پژوهشی شامل مقالات منتشرشده، پذیرفته‌شده و ارسال‌شده ژورنالی و کنفرانسی.',
      },
      videos: {
        title: 'ویدئو و ارائه‌ها',
        kicker: 'ارائه پژوهش',
        intro: 'این بخش برای ویدئوی مقالات، ارائه‌های کنفرانسی، توضیحات فنی، مصاحبه‌ها و سخنرانی‌ها در نظر گرفته شده است.',
      },
      insights: {
        title: 'دیدگاه‌ها',
        kicker: 'دیدگاه‌های فنی',
        intro: 'بخشی برای دیدگاه‌های فنی کوتاه درباره آینده مخابرات نوری، شبکه‌های ماهواره‌ای، فوتونیک، ارتباطات کوانتومی و مهندسی دیپ‌تک.',
      },
      upcoming: {
        title: 'رویدادهای پیش‌رو',
        kicker: 'کنفرانس · بازدید · سخنرانی',
        intro: 'کنفرانس‌ها، بازدیدهای پژوهشی، ارائه‌ها، کارگاه‌ها و حضورهای حرفه‌ای تأییدشده در این بخش منتشر می‌شوند.',
      },
      media: {
        title: 'رسانه',
        kicker: 'کتابخانه تصویری حرفه‌ای',
        intro: 'آرشیوی منتخب از پرتره‌های حرفه‌ای، ارائه‌های پژوهشی، محیط‌های فنی و فعالیت‌های مرتبط با کنفرانس‌ها.',
      },
      about: {
        title: 'درباره',
        kicker: 'پژوهشگر · مهندس · سازنده فنی',
        intro: 'میثم قنبری پژوهشگر و مهندسی در حوزه مخابرات نوری و ماهواره‌ای است و فعالیت فنی او OISL، FSO، طراحی گیرنده، PAT، لینک‌های کوانتومی، FPGA، مدل‌سازی تحلیلی و دوقلوهای دیجیتال فیزیک‌محور را پوشش می‌دهد.',
      },
      contact: {
        title: 'ارتباط',
        kicker: 'درخواست‌های پژوهشی و حرفه‌ای',
        intro: 'درخواست‌های همکاری پژوهشی، تحقیق‌وتوسعه صنعتی، مشاوره فنی، سخنرانی، رسانه و فرصت‌های دیپ‌تک می‌توانند به آدرس زیر ارسال شوند.',
      }
    }
  }
};
