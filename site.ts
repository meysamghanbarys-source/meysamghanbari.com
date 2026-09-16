export const sectionIds = [
  'research',
  'projects',
  'publications',
  'videos',
  'insights',
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
    ['media', 'Media'],
    ['about', 'About'],
    ['contact', 'Contact']
  ],
  fa: [
    ['research', 'پژوهش'],
    ['projects', 'پروژه‌ها'],
    ['publications', 'مقالات'],
    ['videos', 'ویدئو و ارائه‌ها'],
    ['insights', 'یادداشت‌ها'],
    ['media', 'رسانه'],
    ['about', 'درباره من'],
    ['contact', 'ارتباط']
  ]
};

export const site = {
  domain: 'https://meysamghanbari.com',
  name: 'Meysam Ghanbari',
  role: {
    en: 'Researcher in Optical & Satellite Communications',
    fa: 'پژوهشگر مخابرات نوری و ماهواره‌ای'
  },
  contactEmail: 'contact@meysamghanbari.com',
  socialLinks: {
    scholar: '',
    orcid: '',
    ieee: '',
    linkedin: '',
    github: 'https://github.com/meysamghanbarys-source'
  },
  home: {
    en: {
      eyebrow: 'OPTICAL · SATELLITE · PHOTONIC SYSTEMS',
      headline: 'Researching the communication systems that connect the next generation of space networks.',
      intro: 'I work on optical wireless links, inter-satellite communications, photonic receiver architectures, beam tracking, and AI-assisted communication systems.',
      primaryCta: 'Explore research',
      secondaryCta: 'Work with me',
      researchTitle: 'Research themes',
      researchIntro: 'A focused portfolio around high-capacity optical links, resilient receivers, and autonomous space communication systems.',
      projectTitle: 'Selected technology directions',
      projectIntro: 'Research is presented as technology and systems—not only as a list of papers.',
      publicationTitle: 'Selected publications',
      publicationIntro: 'Verified publications and conference work with dedicated pages, media and external links.',
      collaborationTitle: 'Research & industry collaboration',
      collaborationText: 'Open to serious research collaboration, industrial R&D, technical discussions, speaking, and future deep-tech opportunities.',
      collaborationCta: 'Start a conversation'
    },
    fa: {
      eyebrow: 'سیستم‌های نوری · ماهواره‌ای · فوتونیکی',
      headline: 'پژوهش روی سامانه‌های مخابراتی نسل بعدی شبکه‌های فضایی.',
      intro: 'حوزه کاری من شامل لینک‌های مخابرات نوری، ارتباطات بین‌ماهواره‌ای، گیرنده‌های فوتونیکی، رهگیری پرتو و سامانه‌های مخابراتی مبتنی بر هوش مصنوعی است.',
      primaryCta: 'مشاهده پژوهش‌ها',
      secondaryCta: 'همکاری با من',
      researchTitle: 'محورهای پژوهشی',
      researchIntro: 'تمرکز بر لینک‌های نوری پرظرفیت، گیرنده‌های مقاوم و سامانه‌های ارتباطی خودکار برای شبکه‌های فضایی.',
      projectTitle: 'فناوری‌ها و پروژه‌های منتخب',
      projectIntro: 'پژوهش‌ها به‌صورت فناوری و سیستم معرفی می‌شوند، نه صرفاً یک فهرست مقاله.',
      publicationTitle: 'مقالات منتخب',
      publicationIntro: 'مقالات تأییدشده همراه با صفحه اختصاصی، محتوای رسانه‌ای و لینک‌های اصلی.',
      collaborationTitle: 'همکاری پژوهشی و صنعتی',
      collaborationText: 'برای همکاری پژوهشی، تحقیق‌وتوسعه صنعتی، گفت‌وگوهای فنی، ارائه و فرصت‌های دیپ‌تک آماده همکاری هستم.',
      collaborationCta: 'شروع گفتگو'
    }
  },
  themes: {
    en: [
      ['Optical Satellite Communications', 'High-capacity free-space optical links for satellite and space networks.'],
      ['Inter-Satellite Optical Links', 'Link architectures, regenerative relaying, channel effects and robust receiver design.'],
      ['Beam Tracking & Pointing', 'Receiver-side tracking, pointing-error mitigation and predictive fine tracking.'],
      ['Photonic Communication Systems', 'All-optical and optoelectronic architectures for communication and signal processing.'],
      ['AI-Assisted Optical Networks', 'Physics-informed and data-driven methods for monitoring, estimation and autonomy.']
    ],
    fa: [
      ['مخابرات نوری ماهواره‌ای', 'لینک‌های نوری فضای آزاد با ظرفیت بالا برای ماهواره‌ها و شبکه‌های فضایی.'],
      ['لینک‌های نوری بین‌ماهواره‌ای', 'معماری لینک، رله بازتولیدی، اثرات کانال و طراحی گیرنده مقاوم.'],
      ['رهگیری پرتو و خطای نشانه‌روی', 'رهگیری در سمت گیرنده، کاهش خطای نشانه‌روی و رهگیری پیش‌بینانه دقیق.'],
      ['سامانه‌های مخابرات فوتونیکی', 'معماری‌های تمام‌نوری و اپتوالکترونیکی برای مخابرات و پردازش سیگنال.'],
      ['شبکه‌های نوری مبتنی بر هوش مصنوعی', 'روش‌های فیزیک‌محور و داده‌محور برای پایش، تخمین و خودکارسازی.']
    ]
  },
  sections: {
    en: {
      research: {
        title: 'Research',
        kicker: 'FOCUSED RESEARCH PORTFOLIO',
        intro: 'My research centers on optical and satellite communication systems, with emphasis on physical-layer modeling, receiver architectures, tracking, photonic processing, and intelligent autonomy.',
        note: 'This page is designed to grow into dedicated research-theme pages with figures, models, publications, videos and collaboration links.'
      },
      projects: {
        title: 'Projects & Technologies',
        kicker: 'FROM MODELS TO TECHNOLOGY',
        intro: 'Selected research directions are presented as systems and technologies so visitors can understand the problem, the technical idea, and its potential impact.',
        note: 'Each project can later receive its own URL, system figure, technical summary, related publications, code, video and commercialization contact.'
      },
      publications: {
        title: 'Publications',
        kicker: 'PEER-REVIEWED RESEARCH',
        intro: 'A structured library of journal and conference publications. Every verified paper can have a dedicated landing page with abstract, figures, citation, DOI, PDF and video.',
        note: 'Only verified bibliographic information should be published.'
      },
      videos: {
        title: 'Videos & Talks',
        kicker: 'RESEARCH, EXPLAINED VISUALLY',
        intro: 'Paper videos, conference presentations, technical explainers, interviews and future speaking appearances can live here.',
        note: 'For performance and discovery, long videos should normally be hosted on YouTube or Vimeo and embedded here.'
      },
      insights: {
        title: 'Insights',
        kicker: 'TECHNICAL NOTES & PERSPECTIVES',
        intro: 'Short technical articles, explainers and perspectives on optical communications, satellite systems, photonics and deep-tech.',
        note: 'This section can become a major long-term SEO and authority asset.'
      },
      media: {
        title: 'Media',
        kicker: 'PROFESSIONAL VISUAL ARCHIVE',
        intro: 'Professional portraits, conferences, presentations, research events and selected technical imagery.',
        note: 'Use original high-resolution images, descriptive filenames and accurate alt text. Avoid repetitive or artificial-looking photo dumps.'
      },
      about: {
        title: 'About',
        kicker: 'RESEARCHER · ENGINEER · BUILDER',
        intro: 'Meysam Ghanbari is a researcher working on optical and satellite communication systems, with interests spanning free-space optical links, inter-satellite networks, photonic architectures, tracking and intelligent communication systems.',
        note: 'Academic affiliations and biography details can be added factually while keeping the primary positioning centered on research and technology.'
      },
      contact: {
        title: 'Contact',
        kicker: 'COLLABORATE',
        intro: 'For research collaboration, industrial R&D, technical consulting, speaking, media or future deep-tech opportunities, get in touch directly.',
        note: 'The branded email address should be activated before launch.'
      }
    },
    fa: {
      research: {
        title: 'پژوهش',
        kicker: 'پورتفولیوی پژوهشی متمرکز',
        intro: 'پژوهش‌های من بر سامانه‌های مخابرات نوری و ماهواره‌ای متمرکز است؛ از مدل‌سازی لایه فیزیکی و معماری گیرنده تا رهگیری، پردازش فوتونیکی و خودکارسازی هوشمند.',
        note: 'این صفحه در آینده می‌تواند برای هر محور پژوهشی صفحه مستقل با شکل، مدل، مقاله، ویدئو و لینک همکاری داشته باشد.'
      },
      projects: {
        title: 'پروژه‌ها و فناوری‌ها',
        kicker: 'از مدل تا فناوری',
        intro: 'جهت‌های پژوهشی منتخب به شکل سیستم و فناوری معرفی می‌شوند تا مسئله، ایده فنی و اثر بالقوه آن‌ها به‌سرعت قابل درک باشد.',
        note: 'برای هر پروژه می‌توان صفحه مستقل، شکل سیستم، خلاصه فنی، مقاله‌های مرتبط، کد، ویدئو و مسیر همکاری تجاری ایجاد کرد.'
      },
      publications: {
        title: 'مقالات',
        kicker: 'پژوهش داوری‌شده',
        intro: 'کتابخانه‌ای ساختاریافته از مقالات ژورنالی و کنفرانسی. هر مقاله تأییدشده می‌تواند صفحه اختصاصی همراه با چکیده، شکل، رفرنس، DOI، PDF و ویدئو داشته باشد.',
        note: 'فقط اطلاعات کتابشناختی تأییدشده منتشر می‌شود.'
      },
      videos: {
        title: 'ویدئو و ارائه‌ها',
        kicker: 'پژوهش به زبان تصویر',
        intro: 'ویدئوهای مقالات، ارائه‌های کنفرانسی، توضیحات فنی، مصاحبه‌ها و سخنرانی‌ها در این بخش قرار می‌گیرند.',
        note: 'برای سرعت و دیده‌شدن بهتر، ویدئوهای بلند بهتر است در YouTube یا Vimeo میزبانی و در سایت Embed شوند.'
      },
      insights: {
        title: 'یادداشت‌ها',
        kicker: 'یادداشت فنی و دیدگاه',
        intro: 'مقاله‌های کوتاه، توضیحات فنی و دیدگاه‌ها درباره مخابرات نوری، سامانه‌های ماهواره‌ای، فوتونیک و دیپ‌تک.',
        note: 'این بخش می‌تواند در بلندمدت یکی از دارایی‌های اصلی SEO و اعتبار علمی سایت باشد.'
      },
      media: {
        title: 'رسانه',
        kicker: 'آرشیو تصویری حرفه‌ای',
        intro: 'پرتره‌های حرفه‌ای، کنفرانس‌ها، ارائه‌ها، رویدادهای پژوهشی و تصاویر منتخب فنی.',
        note: 'از تصاویر اصلی با کیفیت بالا، نام فایل توصیفی و متن جایگزین دقیق استفاده می‌شود.'
      },
      about: {
        title: 'درباره من',
        kicker: 'پژوهشگر · مهندس · سازنده',
        intro: 'میثم قنبری پژوهشگری در حوزه سامانه‌های مخابرات نوری و ماهواره‌ای است و روی لینک‌های نوری فضای آزاد، شبکه‌های بین‌ماهواره‌ای، معماری‌های فوتونیکی، رهگیری و سامانه‌های ارتباطی هوشمند کار می‌کند.',
        note: 'وابستگی‌های دانشگاهی و جزئیات زندگی‌نامه به‌صورت دقیق اضافه می‌شوند، بدون اینکه هویت اصلی سایت از پژوهش و فناوری فاصله بگیرد.'
      },
      contact: {
        title: 'ارتباط',
        kicker: 'همکاری',
        intro: 'برای همکاری پژوهشی، تحقیق‌وتوسعه صنعتی، مشاوره فنی، سخنرانی، رسانه یا فرصت‌های آینده دیپ‌تک می‌توانید مستقیماً تماس بگیرید.',
        note: 'ایمیل حرفه‌ای دامنه قبل از انتشار نهایی فعال خواهد شد.'
      }
    }
  }
};
