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
  contactEmail: 'megh89467@hbku.edu.qa',
  heroImage: '/images/profile/meysam-ghanbari-space-communications-researcher.webp',
  ogImage: '/images/profile/meysam-ghanbari-satellite-optical-communications.webp',
  cvUrl: '/documents/Meysam_Ghanbari_CV.pdf',
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
      headline: 'Research across optical links, satellite networks and advanced communication systems.',
      intro: 'This website presents the research, publications, engineering projects, technical perspectives and professional activities of Meysam Ghanbari.',
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
      headline: 'پژوهش در حوزه لینک‌های نوری، شبکه‌های ماهواره‌ای و سامانه‌های مخابراتی پیشرفته.',
      intro: 'این وب‌سایت پژوهش‌ها، مقالات، پروژه‌های مهندسی، دیدگاه‌های فنی و فعالیت‌های حرفه‌ای میثم قنبری را ارائه می‌کند.',
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
        note: 'Research themes are expanded as verified projects, papers, figures, models and technical media become available.'
      },
      projects: {
        title: 'Projects & Technologies',
        kicker: 'ENGINEERING DIRECTIONS',
        intro: 'Selected projects highlight system architecture, analytical modeling and engineering design across optical and satellite communication systems.',
        note: 'Project pages can be expanded with system figures, simulation assets, publications, code, videos and collaboration notes.'
      },
      publications: {
        title: 'Publications',
        kicker: 'JOURNAL & CONFERENCE RESEARCH',
        intro: 'A complete research library covering published, accepted and submitted journal and conference work.',
        note: 'Publication status and bibliographic details are presented from the current CV and should be updated whenever a venue, DOI or publication status changes.'
      },
      videos: {
        title: 'Videos & Talks',
        kicker: 'RESEARCH COMMUNICATION',
        intro: 'This section is reserved for paper videos, conference presentations, technical explainers, interviews and speaking appearances.',
        note: 'Long-form video should normally be hosted on YouTube or Vimeo and embedded here for discoverability and performance.'
      },
      insights: {
        title: 'Insights',
        kicker: 'TECHNICAL PERSPECTIVES',
        intro: 'A space for concise technical perspectives on the future of optical communications, satellite networking, photonics, quantum links and deep-tech engineering.',
        note: 'This section is intended for signed technical viewpoints and forward-looking commentary rather than personal diary-style posts.'
      },
      upcoming: {
        title: 'Upcoming',
        kicker: 'CONFERENCES · VISITS · TALKS',
        intro: 'Confirmed upcoming conferences, research visits, presentations, workshops and professional appearances will be listed here.',
        note: 'Only confirmed public appearances should be published. Draft travel plans and unconfirmed invitations should remain private.'
      },
      media: {
        title: 'Media',
        kicker: 'PROFESSIONAL IMAGE LIBRARY',
        intro: 'A curated visual archive of professional portraits, research presentations, technical environments and conference-related activity.',
        note: 'Images are published with descriptive filenames and alt text to support accessibility, consistent branding and image search discovery.'
      },
      about: {
        title: 'About',
        kicker: 'RESEARCHER · ENGINEER · TECHNICAL BUILDER',
        intro: 'Meysam Ghanbari is a researcher and engineer working across satellite and optical communications, with technical activity spanning OISL, FSO, receiver design, PAT, quantum optical links, FPGA development, analytical modeling and physics-based digital twins.',
        note: 'The website is positioned as an official research profile. Academic affiliation is presented as factual background rather than the primary identity.'
      },
      contact: {
        title: 'Contact',
        kicker: 'RESEARCH & PROFESSIONAL ENQUIRIES',
        intro: 'Research collaboration, industrial R&D, technical consulting, speaking, media and deep-tech enquiries can be directed to the contact address below.',
        note: 'A branded domain email can replace the current institutional address when it is activated.'
      }
    },
    fa: {
      research: {
        title: 'پژوهش',
        kicker: 'پورتفولیوی پژوهشی',
        intro: 'پورتفولیوی پژوهشی بر مخابرات ماهواره‌ای و نوری متمرکز است و حوزه‌هایی مانند OISL، FSO، طراحی گیرنده، PAT، شبکه‌های غیرزمینی، لینک‌های کوانتومی و مدل‌سازی داده‌محور سامانه‌های مخابراتی را پوشش می‌دهد.',
        note: 'با اضافه‌شدن پروژه‌ها، مقالات، شکل‌ها، مدل‌ها و محتوای فنی تأییدشده، هر محور پژوهشی قابل توسعه است.'
      },
      projects: {
        title: 'پروژه‌ها و فناوری‌ها',
        kicker: 'مسیرهای مهندسی',
        intro: 'پروژه‌های منتخب معماری سیستم، مدل‌سازی تحلیلی و طراحی مهندسی در سامانه‌های مخابرات نوری و ماهواره‌ای را نشان می‌دهند.',
        note: 'صفحات پروژه می‌توانند با شکل سیستم، نتایج شبیه‌سازی، مقالات مرتبط، کد، ویدئو و توضیحات همکاری توسعه یابند.'
      },
      publications: {
        title: 'مقالات',
        kicker: 'پژوهش ژورنالی و کنفرانسی',
        intro: 'کتابخانه کامل پژوهشی شامل مقالات منتشرشده، پذیرفته‌شده و ارسال‌شده ژورنالی و کنفرانسی.',
        note: 'وضعیت انتشار و اطلاعات کتابشناختی از CV فعلی گرفته شده و در صورت تغییر venue، DOI یا status باید به‌روزرسانی شود.'
      },
      videos: {
        title: 'ویدئو و ارائه‌ها',
        kicker: 'ارائه پژوهش',
        intro: 'این بخش برای ویدئوی مقالات، ارائه‌های کنفرانسی، توضیحات فنی، مصاحبه‌ها و سخنرانی‌ها در نظر گرفته شده است.',
        note: 'برای ویدئوهای طولانی، میزبانی در YouTube یا Vimeo و نمایش در سایت مناسب‌تر است.'
      },
      insights: {
        title: 'دیدگاه‌ها',
        kicker: 'دیدگاه‌های فنی',
        intro: 'بخشی برای دیدگاه‌های فنی کوتاه درباره آینده مخابرات نوری، شبکه‌های ماهواره‌ای، فوتونیک، ارتباطات کوانتومی و مهندسی دیپ‌تک.',
        note: 'این بخش برای تحلیل و دیدگاه فنی امضاشده طراحی شده است، نه نوشته‌های شخصی و روزمره.'
      },
      upcoming: {
        title: 'رویدادهای پیش‌رو',
        kicker: 'کنفرانس · بازدید · سخنرانی',
        intro: 'کنفرانس‌ها، بازدیدهای پژوهشی، ارائه‌ها، کارگاه‌ها و حضورهای حرفه‌ای تأییدشده در این بخش منتشر می‌شوند.',
        note: 'فقط برنامه‌های عمومی و تأییدشده منتشر شوند. برنامه‌های سفر و دعوت‌های تأییدنشده خصوصی باقی بمانند.'
      },
      media: {
        title: 'رسانه',
        kicker: 'کتابخانه تصویری حرفه‌ای',
        intro: 'آرشیوی منتخب از پرتره‌های حرفه‌ای، ارائه‌های پژوهشی، محیط‌های فنی و فعالیت‌های مرتبط با کنفرانس‌ها.',
        note: 'تصاویر با نام فایل توصیفی و متن جایگزین دقیق منتشر می‌شوند تا هویت بصری، دسترس‌پذیری و دیده‌شدن در جست‌وجوی تصویر تقویت شود.'
      },
      about: {
        title: 'درباره',
        kicker: 'پژوهشگر · مهندس · سازنده فنی',
        intro: 'میثم قنبری پژوهشگر و مهندسی در حوزه مخابرات نوری و ماهواره‌ای است و فعالیت فنی او OISL، FSO، طراحی گیرنده، PAT، لینک‌های کوانتومی، FPGA، مدل‌سازی تحلیلی و دوقلوهای دیجیتال فیزیک‌محور را پوشش می‌دهد.',
        note: 'وب‌سایت به‌عنوان یک پروفایل رسمی پژوهشی تنظیم شده است و وابستگی دانشگاهی به‌عنوان اطلاعات زمینه‌ای ارائه می‌شود، نه هویت اصلی.'
      },
      contact: {
        title: 'ارتباط',
        kicker: 'درخواست‌های پژوهشی و حرفه‌ای',
        intro: 'درخواست‌های همکاری پژوهشی، تحقیق‌وتوسعه صنعتی، مشاوره فنی، سخنرانی، رسانه و فرصت‌های دیپ‌تک می‌توانند به آدرس زیر ارسال شوند.',
        note: 'پس از فعال‌شدن ایمیل دامنه، آدرس سازمانی فعلی می‌تواند با ایمیل رسمی سایت جایگزین شود.'
      }
    }
  }
};
