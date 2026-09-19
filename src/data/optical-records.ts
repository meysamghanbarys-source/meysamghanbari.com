export type RecordStatus = 'verified-record' | 'world-first' | 'operational-benchmark' | 'public-benchmark' | 'announced-target';

export interface LocalizedText {
  en: string;
  fa: string;
}

export interface RecordSource {
  title: string;
  organization: string;
  url: string;
  kind: 'Official mission source' | 'Peer-reviewed paper' | 'Technical paper' | 'Independent reporting';
}

export interface OpticalRecord {
  slug: string;
  categoryIds: string[];
  status: RecordStatus;
  year: string;
  title: LocalizedText;
  holder: LocalizedText;
  metric: LocalizedText;
  distance: LocalizedText;
  platform: LocalizedText;
  summary: LocalizedText;
  how: LocalizedText;
  evidence: { en: string[]; fa: string[] };
  significance: LocalizedText;
  caveat: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  sources: RecordSource[];
  relatedProject?: string;
  relatedProjectLabel?: LocalizedText;
}

export const recordCategories = [
  { id: 'throughput', en: 'Data rate', fa: 'نرخ داده', code: 'DR', descriptionEn: 'Achieved optical throughput across LEO, GEO, lunar and deep-space links.', descriptionFa: 'نرخ دادهٔ محقق‌شده در لینک‌های نوری مدار پایین، GEO، ماه و اعماق فضا.' },
  { id: 'range', en: 'Link range', fa: 'برد ارتباطی', code: 'RG', descriptionEn: 'How far a modulated optical signal has been acquired and decoded.', descriptionFa: 'دورترین فاصله‌ای که سیگنال نوری مدوله‌شده دریافت و رمزگشایی شده است.' },
  { id: 'tracking', en: 'Pointing & tracking', fa: 'نشانه‌روی و رهگیری', code: 'PAT', descriptionEn: 'Publicly reported acquisition and tracking precision under operational constraints.', descriptionFa: 'دقت منتشرشدهٔ کسب، نشانه‌روی و رهگیری در شرایط عملیاتی.' },
  { id: 'relay', en: 'Relay networks', fa: 'شبکه‌های رله', code: 'NET', descriptionEn: 'Operational and experimental optical relays between moving platforms and orbital layers.', descriptionFa: 'رله‌های نوری عملیاتی و آزمایشی میان سکوهای متحرک و لایه‌های مداری.' },
  { id: 'quantum', en: 'Quantum links', fa: 'لینک‌های کوانتومی', code: 'QNT', descriptionEn: 'Entanglement, QKD and precision timing over satellite optical channels.', descriptionFa: 'درهم‌تنیدگی، توزیع کلید کوانتومی و زمان‌سنجی دقیق روی کانال‌های نوری ماهواره‌ای.' },
  { id: 'power', en: 'Optical power', fa: 'انتقال توان نوری', code: 'PWR', descriptionEn: 'Delivered optical energy across free space, separated from communication-only records.', descriptionFa: 'انرژی نوری تحویل‌شده در فضای آزاد؛ جدا از رکوردهای صرفاً مخابراتی.' },
  { id: 'terminals', en: 'Compact terminals', fa: 'ترمینال‌های فشرده', code: 'CST', descriptionEn: 'Performance achieved under CubeSat-class size, power and pointing constraints.', descriptionFa: 'عملکرد در محدودیت‌های ابعاد، توان و نشانه‌روی کلاس CubeSat.' }
] as const;

export const statusLabels: Record<RecordStatus, LocalizedText> = {
  'verified-record': { en: 'Verified record', fa: 'رکورد تأییدشده' },
  'world-first': { en: 'World first', fa: 'نخستین نمایش جهانی' },
  'operational-benchmark': { en: 'Operational benchmark', fa: 'بنچمارک عملیاتی' },
  'public-benchmark': { en: 'Published benchmark', fa: 'بنچمارک منتشرشده' },
  'announced-target': { en: 'Announced target', fa: 'هدف اعلام‌شده' }
};

export const opticalRecords: OpticalRecord[] = [
  {
    slug: 'tbird-200-gbps-space-to-ground', categoryIds: ['throughput', 'terminals'], status: 'verified-record', year: '2023',
    title: { en: 'TBIRD: 200 Gbit/s from a CubeSat-class terminal', fa: 'TBIRD: نرخ ۲۰۰ گیگابیت‌برثانیه از یک ترمینال کلاس CubeSat' },
    holder: { en: 'NASA SCaN · MIT Lincoln Laboratory · PTD-3', fa: 'NASA SCaN · آزمایشگاه لینکلن MIT · PTD-3' },
    metric: { en: '200 Gbit/s', fa: '۲۰۰ گیگابیت‌برثانیه' },
    distance: { en: 'Low Earth orbit to ground', fa: 'مدار پایین زمین تا ایستگاه زمینی' },
    platform: { en: 'TBIRD payload on PTD-3', fa: 'محمولهٔ TBIRD روی PTD-3' },
    summary: { en: 'The Terabyte Infrared Delivery experiment demonstrated a 200 Gbit/s optical downlink, reported as the fastest space-to-ground laser link at the time.', fa: 'آزمایش Terabyte Infrared Delivery یک لینک نوری فضا‌به‌زمین با نرخ ۲۰۰ گیگابیت‌برثانیه را نمایش داد که در زمان اعلام، سریع‌ترین لینک لیزری فضا‌به‌زمین گزارش شد.' },
    how: { en: 'TBIRD combined commercial fiber-optic components with a compact optical terminal and a reliability strategy designed for atmospheric fades. Data blocks that were not received correctly could be retransmitted, allowing very high burst rates without pretending the atmosphere was a perfect channel.', fa: 'TBIRD اجزای تجاری فیبر نوری را با یک ترمینال نوری فشرده و راهبرد قابلیت اطمینان مناسب محوشدگی جوی ترکیب کرد. بلوک‌های ناقص دوباره ارسال می‌شدند تا نرخ لحظه‌ای بسیار بالا بدون فرض یک کانال جوی ایده‌آل قابل استفاده باشد.' },
    evidence: { en: ['200 Gbit/s demonstrated on the space-to-ground optical link.', 'Hosted on the PTD-3 spacecraft with the TBIRD payload developed by MIT Lincoln Laboratory.', 'The same programme had previously transferred 1.4 terabytes in less than five minutes.'], fa: ['نمایش نرخ ۲۰۰ گیگابیت‌برثانیه روی لینک نوری فضا‌به‌زمین.', 'محمولهٔ TBIRD توسعه‌یافته در آزمایشگاه لینکلن MIT روی فضاپیمای PTD-3 نصب شد.', 'همین برنامه پیش‌تر ۱٫۴ ترابایت داده را در کمتر از پنج دقیقه انتقال داده بود.'] },
    significance: { en: 'The result shows that small spacecraft can support optical downlinks approaching terrestrial backbone rates when the terminal, ground receiver and data-recovery protocol are engineered together.', fa: 'این نتیجه نشان می‌دهد ماهواره‌های کوچک، در صورت طراحی یکپارچهٔ ترمینال، گیرندهٔ زمینی و پروتکل بازیابی داده، می‌توانند به نرخ‌های نزدیک به شبکه‌های ستون‌فقرات زمینی برسند.' },
    caveat: { en: 'This is a space-to-ground throughput record, not a universal record for every optical-link class. Airborne, inter-satellite and laboratory links have different apertures, distances and channel conditions.', fa: 'این یک رکورد نرخ دادهٔ فضا‌به‌زمین است، نه رکورد عمومی برای همهٔ کلاس‌های لینک نوری. لینک‌های هوابرد، بین‌ماهواره‌ای و آزمایشگاهی فاصله، دهانه و شرایط کانال متفاوتی دارند.' },
    image: '/images/records/optical-data-rate-photorealistic.webp', imageAlt: { en: 'Cinematic visualization of a precisely aligned optical link between a spacecraft and an Earth observatory', fa: 'تصویر سینمایی یک لینک نوری دقیق میان فضاپیما و رصدخانه زمینی' },
    sources: [{ title: 'Another Record: PTD-3 enables a 200 Gbit/s space-to-ground optical link', organization: 'Terran Orbital / Tyvak', url: 'https://tyvak.eu/another-record-terran-orbital-developed-ptd-3-enables-200-gigabits-per-second-space-to-ground-optical-link/', kind: 'Official mission source' }]
  },
  {
    slug: 'dsoc-deep-space-range-and-rate', categoryIds: ['throughput', 'range', 'tracking'], status: 'verified-record', year: '2024',
    title: { en: 'DSOC: optical communication across 460 million kilometres', fa: 'DSOC: مخابرات نوری در فاصلهٔ ۴۶۰ میلیون کیلومتر' },
    holder: { en: 'NASA JPL · Psyche Deep Space Optical Communications', fa: 'آزمایشگاه پیشرانش جت ناسا · مأموریت Psyche DSOC' },
    metric: { en: '460 million km', fa: '۴۶۰ میلیون کیلومتر' },
    distance: { en: 'Earth to Psyche cruise trajectory', fa: 'زمین تا مسیر بین‌سیاره‌ای Psyche' },
    platform: { en: 'Flight laser transceiver + Hale Telescope receiver', fa: 'فرستنده‌گیرندهٔ لیزری پروازی + گیرندهٔ تلسکوپ هیل' },
    summary: { en: 'NASA’s DSOC technology demonstration acquired a laser signal from 460 million kilometres and separately demonstrated 267 Mbit/s at 53 million kilometres.', fa: 'نمایش فناوری DSOC ناسا سیگنال لیزری را از فاصلهٔ ۴۶۰ میلیون کیلومتر دریافت کرد و در آزمایشی دیگر، نرخ ۲۶۷ مگابیت‌برثانیه را در ۵۳ میلیون کیلومتر نشان داد.' },
    how: { en: 'A flight laser transceiver on Psyche used a near-infrared downlink and locked to a high-power uplink beacon from JPL’s Table Mountain facility. On Earth, the 5-metre Hale Telescope and a photon-counting receiver recovered an exceptionally weak signal while precision pointing compensated for spacecraft motion and light-time.', fa: 'فرستنده‌گیرندهٔ لیزری روی Psyche از لینک فروسرخ نزدیک استفاده کرد و روی بیکن پرتوان ارسالی از تأسیسات Table Mountain قفل شد. در زمین، تلسکوپ ۵ متری هیل و گیرندهٔ شمارش‌فوتون سیگنال بسیار ضعیف را بازیابی کردند و سامانهٔ نشانه‌روی دقیق حرکت فضاپیما و تأخیر انتشار نور را جبران کرد.' },
    evidence: { en: ['Laser signal received at 460 million km on 29 July 2024.', '267 Mbit/s demonstrated at 53 million km.', '6.25 Mbit/s sustained, with 8.3 Mbit/s maximum, at 390 million km.', 'Nearly 11 terabits were downlinked during the first phase.'], fa: ['دریافت سیگنال لیزری در ۴۶۰ میلیون کیلومتر در ۲۹ ژوئیهٔ ۲۰۲۴.', 'نمایش ۲۶۷ مگابیت‌برثانیه در ۵۳ میلیون کیلومتر.', 'نرخ پایدار ۶٫۲۵ و بیشینهٔ ۸٫۳ مگابیت‌برثانیه در ۳۹۰ میلیون کیلومتر.', 'نزدیک به ۱۱ ترابیت داده در مرحلهٔ نخست دریافت شد.'] },
    significance: { en: 'DSOC moved high-rate optical communication from lunar distance to interplanetary scale, demonstrating a path to higher science-data return from future deep-space missions.', fa: 'DSOC مخابرات نوری پرسرعت را از مقیاس ماه به مقیاس بین‌سیاره‌ای برد و مسیر افزایش بازگشت داده‌های علمی مأموریت‌های آینده را نشان داد.' },
    caveat: { en: 'The 460-million-kilometre milestone is a range result; the 267 Mbit/s result occurred much closer to Earth. Both values are shown together so distance and throughput are not conflated.', fa: 'عدد ۴۶۰ میلیون کیلومتر رکورد برد است؛ نرخ ۲۶۷ مگابیت‌برثانیه در فاصله‌ای بسیار کمتر ثبت شد. هر دو عدد کنار هم و با فاصلهٔ دقیق نمایش داده شده‌اند تا برد و نرخ داده با هم اشتباه نشوند.' },
    image: '/images/records/deep-space-optical-communications-photorealistic.webp', imageAlt: { en: 'Photorealistic deep-space laser communication link between a spacecraft and an Earth observatory', fa: 'تصویر واقع‌گرایانه لینک مخابرات لیزری اعماق فضا میان فضاپیما و رصدخانه زمینی' },
    sources: [{ title: 'NASA’s Laser Comms Demo Makes Deep Space Record, Completes First Phase', organization: 'NASA', url: 'https://www.nasa.gov/directorates/stmd/tech-demo-missions-program/deep-space-optical-communications-dsoc/nasas-laser-comms-demo-makes-deep-space-record-completes-first-phase/', kind: 'Official mission source' }],
    relatedProject: '/projects/integrated-optical-receiver-oisl', relatedProjectLabel: { en: 'Integrated Optical Receiver for OISL', fa: 'گیرندهٔ یکپارچهٔ نوری برای OISL' }
  },
  {
    slug: 'llcd-lunar-622-mbps', categoryIds: ['throughput', 'range', 'tracking'], status: 'verified-record', year: '2013',
    title: { en: 'LLCD: 622 Mbit/s from lunar distance', fa: 'LLCD: نرخ ۶۲۲ مگابیت‌برثانیه از فاصلهٔ ماه' },
    holder: { en: 'NASA · MIT Lincoln Laboratory · LADEE', fa: 'ناسا · آزمایشگاه لینکلن MIT · LADEE' },
    metric: { en: '622 Mbit/s downlink', fa: 'لینک پایین ۶۲۲ مگابیت‌برثانیه' },
    distance: { en: 'Approximately 384,000 km', fa: 'حدود ۳۸۴ هزار کیلومتر' },
    platform: { en: 'Lunar Laser Communication Demonstration', fa: 'نمایش مخابرات لیزری ماه' },
    summary: { en: 'The Lunar Laser Communication Demonstration established a record 622 Mbit/s downlink from LADEE in lunar orbit and a 20 Mbit/s uplink.', fa: 'نمایش مخابرات لیزری ماه از فضاپیمای LADEE در مدار ماه، لینک پایین رکوردی ۶۲۲ مگابیت‌برثانیه و لینک بالا ۲۰ مگابیت‌برثانیه را برقرار کرد.' },
    how: { en: 'LLCD paired a compact lunar terminal with three geographically separated ground stations. Spatially separated transmit apertures, sensitive receive telescopes and error-control processing sustained the link through daylight and difficult viewing geometry.', fa: 'LLCD یک ترمینال فشردهٔ ماه را به سه ایستگاه زمینی در نقاط جغرافیایی متفاوت متصل کرد. دهانه‌های ارسال جدا از هم، تلسکوپ‌های حساس و پردازش کنترل خطا، لینک را در روشنایی روز و هندسهٔ دشوار دید حفظ کردند.' },
    evidence: { en: ['622 Mbit/s lunar-to-Earth downlink.', '20 Mbit/s Earth-to-lunar uplink.', 'Error-free operation was reported in daylight and at low elevation angles.', 'The demonstration operated even when the Moon was within three degrees of the Sun.'], fa: ['لینک پایین ماه‌به‌زمین با نرخ ۶۲۲ مگابیت‌برثانیه.', 'لینک بالا زمین‌به‌ماه با نرخ ۲۰ مگابیت‌برثانیه.', 'عملکرد بدون خطا در روز و زوایای ارتفاع کم گزارش شد.', 'نمایش حتی زمانی انجام شد که ماه در فاصلهٔ زاویه‌ای سه درجه از خورشید بود.'] },
    significance: { en: 'LLCD proved that precision optical links could move beyond laboratory trials and deliver operationally useful capacity across lunar distance.', fa: 'LLCD نشان داد لینک‌های نوری دقیق می‌توانند از آزمایشگاه فراتر بروند و در فاصلهٔ ماه ظرفیت عملیاتی مفیدی ارائه دهند.' },
    caveat: { en: 'The record belongs to its lunar-link class and 2013 demonstration context. Later LEO links achieved higher data rates at vastly shorter ranges.', fa: 'این رکورد متعلق به کلاس لینک ماه و شرایط نمایش سال ۲۰۱۳ است. لینک‌های جدیدتر مدار پایین در فاصله‌های بسیار کوتاه‌تر، نرخ‌های بالاتری ثبت کرده‌اند.' },
    image: '/images/records/deep-space-optical-communications-photorealistic.webp', imageAlt: { en: 'Photorealistic spacecraft optical downlink crossing space toward an Earth receiver', fa: 'تصویر واقع‌گرایانه لینک نوری فضاپیما به گیرنده زمینی' },
    sources: [{ title: 'Laser Demonstration Reveals Bright Future for Space Communication', organization: 'NASA', url: 'https://www.nasa.gov/directorates/somd/space-communications-navigation-program/laser-demonstration-reveals-bright-future-for-space-communication/', kind: 'Official mission source' }]
  },
  {
    slug: 'ultraair-aircraft-geo-2-6-gbps', categoryIds: ['throughput', 'relay', 'tracking'], status: 'world-first', year: '2026',
    title: { en: 'UltraAir: 2.6 Gbit/s from aircraft to GEO', fa: 'UltraAir: نرخ ۲٫۶ گیگابیت‌برثانیه از هواپیما تا GEO' },
    holder: { en: 'ESA · Airbus · TNO · TESAT', fa: 'ESA · Airbus · TNO · TESAT' },
    metric: { en: '2.6 Gbit/s', fa: '۲٫۶ گیگابیت‌برثانیه' },
    distance: { en: 'Aircraft to GEO, about 36,000 km', fa: 'هواپیما تا مدار GEO، حدود ۳۶ هزار کیلومتر' },
    platform: { en: 'UltraAir terminal to Alphasat TDP-1', fa: 'ترمینال UltraAir به Alphasat TDP-1' },
    summary: { en: 'ESA reported the world’s first gigabit-per-second laser link between an aircraft and a geostationary satellite, sustaining an error-free 2.6 Gbit/s connection for several minutes.', fa: 'ESA نخستین لینک لیزری جهان با نرخ گیگابیتی میان هواپیما و ماهوارهٔ زمین‌آهنگ را گزارش کرد؛ اتصال ۲٫۶ گیگابیت‌برثانیه برای چند دقیقه بدون خطا پایدار ماند.' },
    how: { en: 'A stabilized airborne optical terminal compensated for aircraft vibration and motion while tracking the Alphasat laser communication terminal in GEO. The demonstration combined fine steering, high-rate coherent optical communication and a long slant path through the atmosphere.', fa: 'ترمینال نوری پایدارشدهٔ هوابرد لرزش و حرکت هواپیما را جبران کرد و هم‌زمان ترمینال مخابرات لیزری Alphasat را در GEO رهگیری کرد. نمایش از هدایت دقیق، مخابرات نوری پرسرعت و مسیر مایل طولانی در جو استفاده کرد.' },
    evidence: { en: ['2.6 Gbit/s error-free link sustained for several minutes.', 'Aircraft operated from Nîmes, France.', 'Link closed with Alphasat TDP-1 at geostationary altitude.', 'ESA explicitly described the result as a world first.'], fa: ['لینک بدون خطای ۲٫۶ گیگابیت‌برثانیه برای چند دقیقه پایدار ماند.', 'هواپیما از نیم فرانسه فعالیت می‌کرد.', 'لینک با Alphasat TDP-1 در ارتفاع GEO برقرار شد.', 'ESA این نتیجه را صراحتاً «نخستین در جهان» توصیف کرد.'] },
    significance: { en: 'The test extends space laser communication to fast-moving airborne platforms, a relevant capability for resilient backhaul and high-capacity connectivity beyond terrestrial infrastructure.', fa: 'این آزمایش مخابرات لیزری فضایی را به سکوهای هوابرد سریع گسترش می‌دهد؛ قابلیتی مهم برای بک‌هاول تاب‌آور و اتصال پرظرفیت فراتر از زیرساخت زمینی.' },
    caveat: { en: 'This is a world first for the aircraft-to-GEO link class, not the highest optical data rate across all space communication demonstrations.', fa: 'این نخستین نمایش جهانی در کلاس لینک هواپیما‌به‌GEO است، نه بالاترین نرخ داده میان همهٔ نمایش‌های مخابرات نوری فضایی.' },
    image: '/images/records/optical-relay-network-photorealistic.webp', imageAlt: { en: 'Cinematic optical communication beam linking a flight terminal with an Earth receiver', fa: 'نمای سینمایی پرتو مخابرات نوری میان ترمینال پروازی و گیرنده زمینی' },
    sources: [{ title: 'World-first gigabit-per-second laser link between aircraft and geostationary satellite', organization: 'European Space Agency', url: 'https://www.esa.int/Applications/Connectivity_and_Secure_Communications/World-first_gigabit-per-second_laser_link_between_aircraft_and_geostationary_satellite', kind: 'Official mission source' }],
    relatedProject: '/projects/inter-haps-multi-branch-optical-reception', relatedProjectLabel: { en: 'Inter-HAPS Multi-Branch Optical Reception', fa: 'دریافت نوری چندشاخه برای Inter-HAPS' }
  },
  {
    slug: 'edrs-leo-geo-operational-relay', categoryIds: ['throughput', 'relay'], status: 'operational-benchmark', year: '2016–',
    title: { en: 'EDRS: operational 1.8 Gbit/s laser relay', fa: 'EDRS: رلهٔ لیزری عملیاتی با نرخ ۱٫۸ گیگابیت‌برثانیه' },
    holder: { en: 'ESA · Airbus · European Data Relay System', fa: 'ESA · Airbus · سامانهٔ رلهٔ دادهٔ اروپا' },
    metric: { en: '1.8 Gbit/s relay', fa: 'رلهٔ ۱٫۸ گیگابیت‌برثانیه' },
    distance: { en: 'LEO to GEO, up to about 45,000 km', fa: 'مدار پایین تا GEO، تا حدود ۴۵ هزار کیلومتر' },
    platform: { en: 'Sentinel satellites via EDRS laser terminals', fa: 'ماهواره‌های Sentinel از طریق ترمینال‌های لیزری EDRS' },
    summary: { en: 'EDRS established an operational optical relay service that moves Earth-observation data from low Earth orbit through geostationary nodes at up to 1.8 Gbit/s.', fa: 'EDRS یک سرویس عملیاتی رلهٔ نوری ایجاد کرد که داده‌های سنجش زمین را از مدار پایین از طریق گره‌های GEO با نرخ تا ۱٫۸ گیگابیت‌برثانیه منتقل می‌کند.' },
    how: { en: 'A laser communication terminal on a moving Sentinel spacecraft establishes an inter-orbit link to a geostationary EDRS node. The GEO node then forwards the data to Europe, reducing the delay otherwise imposed by short direct-to-ground contact windows.', fa: 'ترمینال لیزری روی ماهوارهٔ متحرک Sentinel یک لینک بین‌مداری با گرهٔ زمین‌آهنگ EDRS برقرار می‌کند. گرهٔ GEO سپس داده را به اروپا می‌فرستد و تأخیر ناشی از پنجره‌های کوتاه تماس مستقیم با زمین را کاهش می‌دهد.' },
    evidence: { en: ['Laser communication terminal capacity reported at 1.8 Gbit/s.', 'Operational relay supports Copernicus Sentinel missions.', 'Inter-orbit geometry spans LEO-to-GEO distances rather than a short laboratory path.'], fa: ['ظرفیت ترمینال مخابرات لیزری ۱٫۸ گیگابیت‌برثانیه گزارش شده است.', 'رلهٔ عملیاتی از مأموریت‌های Sentinel برنامهٔ Copernicus پشتیبانی می‌کند.', 'هندسهٔ بین‌مداری فاصلهٔ مدار پایین تا GEO را پوشش می‌دهد، نه یک مسیر کوتاه آزمایشگاهی.'] },
    significance: { en: 'EDRS is important because it turned optical crosslinks into a sustained service, demonstrating network value rather than a single record-setting pass.', fa: 'اهمیت EDRS در تبدیل لینک‌های نوری بین‌مداری به یک سرویس پایدار است؛ یعنی نمایش ارزش شبکه‌ای فراتر از یک گذر رکوردی منفرد.' },
    caveat: { en: 'This entry is labelled an operational benchmark. It is not presented as the current absolute speed record.', fa: 'این مورد «بنچمارک عملیاتی» است و به‌عنوان رکورد مطلق فعلی سرعت معرفی نمی‌شود.' },
    image: '/images/records/optical-relay-network-photorealistic.webp', imageAlt: { en: 'Premium aerospace visualization of a long-range optical relay link above Earth', fa: 'تصویرسازی فضایی یک لینک رله نوری دوربرد بر فراز زمین' },
    sources: [{ title: 'First Sentinel-1 images via laser and the European Data Relay System', organization: 'Copernicus', url: 'https://www.copernicus.eu/en/first-sentinel-1-images-laser-european-data-relay-system-revealed', kind: 'Official mission source' }, { title: 'European Data Relay System confirms services for Copernicus', organization: 'European Space Agency', url: 'https://www.esa.int/Applications/Connectivity_and_Secure_Communications/European_Data_Relay_System_confirms_services_for_Copernicus_in_cooperation_with_the_European_Commission', kind: 'Official mission source' }],
    relatedProject: '/projects/all-optical-multi-hop-inter-satellite-relaying', relatedProjectLabel: { en: 'All-Optical Multi-Hop Inter-Satellite Relaying', fa: 'رلهٔ تمام‌نوری چندهاپی بین‌ماهواره‌ای' }
  },
  {
    slug: 'dsoc-sub-microradian-pointing-control-study', categoryIds: ['tracking', 'range'], status: 'public-benchmark', year: '2020 study',
    title: { en: 'DSOC control study: 0.20 µrad simulated tracking error', fa: 'مطالعهٔ کنترل DSOC: خطای رهگیری شبیه‌سازی‌شدهٔ ۰٫۲۰ میکرورادیان' },
    holder: { en: 'NASA Jet Propulsion Laboratory', fa: 'آزمایشگاه پیشرانش جت ناسا' },
    metric: { en: '0.20 µrad simulated error', fa: 'خطای شبیه‌سازی‌شدهٔ ۰٫۲۰ میکرورادیان' },
    distance: { en: 'Deep-space terminal pointing-control model', fa: 'مدل کنترل نشانه‌روی ترمینال اعماق فضا' },
    platform: { en: 'DSOC point-ahead mirror control simulation', fa: 'شبیه‌سازی کنترل آینهٔ پیش‌نشانه‌روی DSOC' },
    summary: { en: 'A JPL study of the DSOC point-ahead mirror reported simulated output tracking errors as low as 0.20 µrad after combining inverse hysteresis compensation with feedback control.', fa: 'یک مطالعهٔ JPL دربارهٔ آینهٔ پیش‌نشانه‌روی DSOC، پس از ترکیب جبران معکوس هیسترزیس با کنترل بازخورد، خطای خروجی شبیه‌سازی‌شده تا ۰٫۲۰ میکرورادیان را گزارش کرد.' },
    how: { en: 'The point-ahead mirror uses piezoelectric actuators whose hysteresis can degrade sub-microradian pointing. The study identified an invertible Prandtl–Ishlinskii hysteresis model, applied its inverse as feedforward compensation and closed the loop with proportional-integral feedback.', fa: 'آینهٔ پیش‌نشانه‌روی از عملگرهای پیزوالکتریک استفاده می‌کند که هیسترزیس آن‌ها می‌تواند نشانه‌روی زیرمیکرورادیانی را مختل کند. مطالعه یک مدل هیسترزیس معکوس‌پذیر Prandtl–Ishlinskii را شناسایی کرد، معکوس آن را به‌عنوان جبران پیش‌خور به‌کار برد و حلقه را با بازخورد تناسبی–انتگرالی بست.' },
    evidence: { en: ['DSOC pointing requirement described at the sub-microradian scale.', 'For one model, feedforward plus feedback reduced simulated error from 0.40 to 0.20 µrad.', 'A second sampling model reduced error from 0.90 to 0.38 µrad.', 'The ±400 µrad command-range result was evaluated at 1 mHz.'], fa: ['نیازمندی نشانه‌روی DSOC در مقیاس زیرمیکرورادیان توصیف شده است.', 'در یک مدل، ترکیب پیش‌خور و بازخورد خطای شبیه‌سازی را از ۰٫۴۰ به ۰٫۲۰ میکرورادیان کاهش داد.', 'مدل نمونه‌برداری دوم خطا را از ۰٫۹۰ به ۰٫۳۸ میکرورادیان کاهش داد.', 'نتیجه در بازهٔ فرمان ±۴۰۰ میکرورادیان و فرکانس ۱ میلی‌هرتز ارزیابی شد.'] },
    significance: { en: 'It shows why deep-space optical performance depends on control-system nonlinearity as much as on telescope aperture and laser power.', fa: 'این مطالعه نشان می‌دهد عملکرد نوری اعماق فضا به غیرخطی‌بودن سامانهٔ کنترل نیز به‌اندازهٔ دهانهٔ تلسکوپ و توان لیزر وابسته است.' },
    caveat: { en: 'This is a preflight control simulation, not a measured in-flight pointing record. It is included as a clearly labelled design benchmark.', fa: 'این یک شبیه‌سازی کنترل پیش از پرواز است، نه رکورد اندازه‌گیری‌شده در مدار؛ بنابراین صریحاً به‌عنوان بنچمارک طراحی برچسب خورده است.' },
    image: '/images/records/optical-precision-tracking-photorealistic.webp', imageAlt: { en: 'Narrow laser beam held on a distant spacecraft through precision optical pointing', fa: 'پرتو لیزری باریک با نشانه‌روی دقیق نوری روی فضاپیمای دوردست' },
    sources: [{ title: 'Investigation of Prandtl–Ishlinskii Hysteresis Compensation for DSOC Pointing Control', organization: 'NASA Technical Reports Server / JPL', url: 'https://ntrs.nasa.gov/citations/20220000859', kind: 'Technical paper' }],
    relatedProject: '/projects/integrated-optical-receiver-oisl', relatedProjectLabel: { en: 'Integrated Optical Receiver for OISL', fa: 'گیرندهٔ یکپارچهٔ نوری برای OISL' }
  },
  {
    slug: 'sub-second-optical-terminal-acquisition', categoryIds: ['tracking', 'terminals'], status: 'public-benchmark', year: '2026',
    title: { en: 'Space optical terminal: 0.908 s mean acquisition', fa: 'ترمینال نوری فضایی: میانگین زمان کسب ۰٫۹۰۸ ثانیه' },
    holder: { en: 'Changchun Institute optical-terminal field study', fa: 'مطالعهٔ میدانی ترمینال نوری مؤسسهٔ چانگچون' },
    metric: { en: '0.908 s mean acquisition', fa: 'میانگین کسب ۰٫۹۰۸ ثانیه' },
    distance: { en: 'Ground field verification against stellar references', fa: 'اعتبارسنجی میدانی زمینی با مرجع ستاره‌ای' },
    platform: { en: '150 mm periscope-type optical terminal', fa: 'ترمینال نوری پریسکوپی با دهانهٔ ۱۵۰ میلی‌متر' },
    summary: { en: 'A 2026 field study reported a 0.908-second mean acquisition time and 120.16 µrad mean open-loop pointing error after star-referenced calibration.', fa: 'یک مطالعهٔ میدانی در سال ۲۰۲۶ پس از کالیبراسیون با مرجع ستاره‌ای، میانگین زمان کسب ۰٫۹۰۸ ثانیه و خطای متوسط نشانه‌روی حلقه‌باز ۱۲۰٫۱۶ میکرورادیان را گزارش کرد.' },
    how: { en: 'The terminal used a two-axis coarse-pointing gimbal, a stellar-capture channel, coarse tracking, fine steering and a communication channel. A least-squares calibration based on stellar observations corrected structural and installation errors before repeated outdoor acquisition trials.', fa: 'ترمینال از گیمبال نشانه‌روی درشت دومحوره، کانال ثبت ستاره، رهگیری درشت، هدایت دقیق و کانال مخابراتی استفاده کرد. کالیبراسیون کمترین مربعات بر پایهٔ مشاهدهٔ ستاره‌ها، خطاهای سازه‌ای و نصب را پیش از آزمون‌های مکرر کسب در فضای باز تصحیح کرد.' },
    evidence: { en: ['Mean open-loop pointing error reduced from 2,070.24 to 120.16 µrad.', 'Mean acquisition time measured at 0.908 s.', 'All reported trials completed acquisition in under one second.', 'Seven field campaigns covered varied initial attitudes.'], fa: ['کاهش خطای متوسط نشانه‌روی حلقه‌باز از ۲۰۷۰٫۲۴ به ۱۲۰٫۱۶ میکرورادیان.', 'میانگین زمان کسب ۰٫۹۰۸ ثانیه اندازه‌گیری شد.', 'تمام آزمون‌های گزارش‌شده در کمتر از یک ثانیه به کسب رسیدند.', 'هفت کمپین میدانی وضعیت‌های اولیهٔ متفاوت را پوشش دادند.'] },
    significance: { en: 'Fast acquisition preserves more of a short satellite pass for data transfer and can reduce the overhead of reconnecting dynamic optical networks.', fa: 'کسب سریع، بخش بیشتری از گذر کوتاه ماهواره را برای انتقال داده حفظ می‌کند و سربار اتصال مجدد در شبکه‌های نوری پویا را کاهش می‌دهد.' },
    caveat: { en: 'The result was obtained in ground-based field verification, not an in-orbit satellite pass. It is a terminal benchmark and is not ranked above in-orbit tracking results.', fa: 'نتیجه در اعتبارسنجی میدانی زمینی به‌دست آمده، نه در گذر واقعی ماهواره. این یک بنچمارک ترمینال است و بالاتر از نتایج رهگیری مداری رتبه‌بندی نمی‌شود.' },
    image: '/images/records/optical-precision-tracking-photorealistic.webp', imageAlt: { en: 'Realistic space optical terminal maintaining a precisely aligned laser link to Earth', fa: 'ترمینال نوری فضایی واقع‌گرایانه در حال حفظ هم‌ترازی دقیق لینک لیزری با زمین' },
    sources: [{ title: 'High-accuracy pointing and sub-second acquisition in a space optical communication terminal', organization: 'Optics & Laser Technology', url: 'https://doi.org/10.1016/j.optlastec.2025.114313', kind: 'Peer-reviewed paper' }],
    relatedProject: '/projects/integrated-optical-receiver-oisl', relatedProjectLabel: { en: 'Integrated Optical Receiver for OISL', fa: 'گیرندهٔ یکپارچهٔ نوری برای OISL' }
  },
  {
    slug: 'osiris4cubesat-tracking-benchmark', categoryIds: ['tracking', 'terminals', 'throughput'], status: 'public-benchmark', year: '2025',
    title: { en: 'OSIRIS4CubeSat: 71 µrad mean tracking error', fa: 'OSIRIS4CubeSat: خطای متوسط رهگیری ۷۱ میکرورادیان' },
    holder: { en: 'DLR · OSIRIS4CubeSat / CubeLCT', fa: 'مرکز هوافضای آلمان · OSIRIS4CubeSat / CubeLCT' },
    metric: { en: '71 µrad mean error', fa: 'خطای متوسط ۷۱ میکرورادیان' },
    distance: { en: 'LEO-to-ground optical pass', fa: 'گذر نوری مدار پایین به زمین' },
    platform: { en: 'CubeSat-class laser communication terminal', fa: 'ترمینال مخابرات لیزری کلاس CubeSat' },
    summary: { en: 'An in-orbit acquisition-and-tracking study reported 71 µrad mean tracking error, 140 µrad at three standard deviations, and operation down to 238 pW received optical power.', fa: 'یک مطالعهٔ کسب و رهگیری در مدار، خطای متوسط ۷۱ میکرورادیان، مقدار ۱۴۰ میکرورادیان در سه انحراف معیار و عملکرد تا توان دریافتی ۲۳۸ پیکووات را گزارش کرد.' },
    how: { en: 'The terminal used a compact acquisition and tracking chain designed around CubeSat constraints. In-orbit measurements connected the pointing loop, received optical power and achievable 100 Mbit/s downlink performance rather than reporting a standalone laboratory actuator number.', fa: 'ترمینال از زنجیرهٔ کسب و رهگیری فشرده متناسب با محدودیت‌های CubeSat استفاده کرد. اندازه‌گیری مداری، حلقهٔ نشانه‌روی، توان نوری دریافتی و نرخ قابل دستیابی ۱۰۰ مگابیت‌برثانیه را به هم پیوند داد و صرفاً عدد یک عملگر آزمایشگاهی را گزارش نکرد.' },
    evidence: { en: ['71 µrad reported mean tracking error.', '140 µrad reported three-sigma deviation.', 'Tracking maintained down to 238 pW received optical power.', 'Terminal architecture supports up to 100 Mbit/s LEO-to-ground communication.'], fa: ['خطای متوسط رهگیری گزارش‌شده: ۷۱ میکرورادیان.', 'انحراف سه‌سیگما: ۱۴۰ میکرورادیان.', 'حفظ رهگیری تا توان نوری دریافتی ۲۳۸ پیکووات.', 'معماری ترمینال از لینک مدار پایین به زمین تا ۱۰۰ مگابیت‌برثانیه پشتیبانی می‌کند.'] },
    significance: { en: 'The benchmark makes pointing accuracy meaningful by tying it to a real compact terminal, received-power floor and in-orbit pass.', fa: 'این بنچمارک دقت نشانه‌روی را به یک ترمینال فشردهٔ واقعی، کف توان دریافتی و گذر مداری متصل می‌کند و به عدد معنا می‌دهد.' },
    caveat: { en: 'No defensible universal “best tracking accuracy” can be declared across incompatible terminal classes. This is therefore a strong public in-orbit benchmark, not a world-record claim.', fa: 'به‌دلیل تفاوت کلاس ترمینال‌ها، تعریف یک «بهترین دقت رهگیری» عمومی قابل دفاع نیست. بنابراین این مورد یک بنچمارک مداری قوی و منتشرشده است، نه ادعای رکورد جهانی.' },
    image: '/images/records/optical-precision-tracking-photorealistic.webp', imageAlt: { en: 'Spacecraft optical terminal establishing a narrow laser downlink to a ground telescope', fa: 'ترمینال نوری فضاپیما در حال برقراری لینک لیزری باریک با تلسکوپ زمینی' },
    sources: [{ title: 'In-orbit demonstration of acquisition and tracking on OSIRIS4CubeSat', organization: 'DLR / peer-reviewed technical publication', url: 'https://elib.dlr.de/208615/1/In-orbit%20demonstration%20of%20acquisition%20and%20tracking%20on%20OSIRIS4CubeSat.pdf', kind: 'Peer-reviewed paper' }, { title: 'OSIRIS optical communication in space: Cube4CubeSat / CubeLCT', organization: 'German Aerospace Center (DLR)', url: 'https://www.dlr.de/en/kn/research-transfer/projects/osiris-optical-communication-in-space/cube4cubesat-cubelct', kind: 'Official mission source' }],
    relatedProject: '/projects/integrated-optical-receiver-oisl', relatedProjectLabel: { en: 'Integrated Optical Receiver for OISL', fa: 'گیرندهٔ یکپارچهٔ نوری برای OISL' }
  },
  {
    slug: 'micius-entanglement-1203-km', categoryIds: ['quantum', 'range'], status: 'verified-record', year: '2017',
    title: { en: 'Micius: entanglement distributed across 1,203 km', fa: 'Micius: توزیع درهم‌تنیدگی در فاصلهٔ ۱۲۰۳ کیلومتر' },
    holder: { en: 'QUESS / Micius research team', fa: 'تیم پژوهشی QUESS / Micius' },
    metric: { en: '1,203 km ground separation', fa: 'فاصلهٔ زمینی ۱۲۰۳ کیلومتر' },
    distance: { en: 'Two satellite-to-ground downlinks', fa: 'دو لینک پایین ماهواره‌به‌زمین' },
    platform: { en: 'Micius quantum science satellite', fa: 'ماهوارهٔ علمی کوانتومی Micius' },
    summary: { en: 'Micius distributed entangled photon pairs to two ground stations separated by 1,203 km, with combined satellite-to-ground paths of roughly 1,600–2,400 km.', fa: 'Micius جفت‌فوتون‌های درهم‌تنیده را به دو ایستگاه زمینی با فاصلهٔ ۱۲۰۳ کیلومتر توزیع کرد؛ مجموع مسیرهای ماهواره‌به‌زمین حدود ۱۶۰۰ تا ۲۴۰۰ کیلومتر بود.' },
    how: { en: 'An entangled-photon source aboard the satellite sent one photon of each pair to each ground station through separate downlinks. Narrow beams, precision tracking and coincidence measurement allowed the two sites to verify non-classical correlations over continental scale.', fa: 'منبع جفت‌فوتون درهم‌تنیده روی ماهواره، هر فوتون از یک جفت را از طریق دو لینک پایین جداگانه به دو ایستگاه فرستاد. پرتوهای باریک، رهگیری دقیق و اندازه‌گیری هم‌زمانی امکان تأیید هم‌بستگی غیرکلاسیک را در مقیاس قاره‌ای فراهم کردند.' },
    evidence: { en: ['Ground-station separation: 1,203 km.', 'Two satellite downlinks produced a total optical path of approximately 1,600–2,400 km.', 'Bell inequality violation reported at 2.37 ± 0.09.'], fa: ['فاصلهٔ ایستگاه‌های زمینی: ۱۲۰۳ کیلومتر.', 'دو لینک پایین ماهواره‌ای مسیر نوری مجموعاً حدود ۱۶۰۰ تا ۲۴۰۰ کیلومتر ایجاد کردند.', 'نقض نامساوی بل با مقدار ۲٫۳۷ ± ۰٫۰۹ گزارش شد.'] },
    significance: { en: 'The experiment showed that a satellite can bridge the exponential loss that limits direct long-distance quantum distribution through optical fibre.', fa: 'آزمایش نشان داد ماهواره می‌تواند بر افت نمایی محدودکنندهٔ توزیع مستقیم کوانتومی در فیبر نوریِ طولانی غلبه کند.' },
    caveat: { en: 'The 1,203 km value is the separation between ground stations, while the photons travelled separate slant paths from the satellite. Both geometries are disclosed.', fa: 'عدد ۱۲۰۳ کیلومتر فاصلهٔ دو ایستگاه زمینی است، درحالی‌که فوتون‌ها مسیرهای مایل جداگانه‌ای از ماهواره پیمودند. هر دو هندسه صریحاً ذکر شده‌اند.' },
    image: '/images/records/optical-quantum-link-photorealistic.webp', imageAlt: { en: 'Low-light satellite optical link connecting a spacecraft with a terrestrial observatory', fa: 'لینک نوری کم‌نور ماهواره‌ای میان فضاپیما و رصدخانه زمینی' },
    sources: [{ title: 'Satellite-based entanglement distribution over 1200 kilometers', organization: 'Science / arXiv', url: 'https://arxiv.org/abs/1707.01339', kind: 'Peer-reviewed paper' }]
  },
  {
    slug: 'micius-qkd-1120-km', categoryIds: ['quantum', 'range'], status: 'verified-record', year: '2020',
    title: { en: 'Micius: entanglement-based QKD over 1,120 km', fa: 'Micius: توزیع کلید کوانتومی مبتنی بر درهم‌تنیدگی در ۱۱۲۰ کیلومتر' },
    holder: { en: 'University of Science and Technology of China · Micius team', fa: 'دانشگاه علم و فناوری چین · تیم Micius' },
    metric: { en: '1,120 km QKD', fa: 'QKD در ۱۱۲۰ کیلومتر' },
    distance: { en: 'Ground-station separation', fa: 'فاصلهٔ ایستگاه‌های زمینی' },
    platform: { en: 'Satellite-based entanglement QKD', fa: 'QKD ماهواره‌ای مبتنی بر درهم‌تنیدگی' },
    summary: { en: 'An entanglement-based quantum-key-distribution experiment generated secure keys between ground stations separated by 1,120 km without treating the satellite as a trusted relay.', fa: 'آزمایش توزیع کلید کوانتومی مبتنی بر درهم‌تنیدگی میان ایستگاه‌های زمینی با فاصلهٔ ۱۱۲۰ کیلومتر کلید امن تولید کرد، بدون آن‌که ماهواره یک رلهٔ مورداعتماد فرض شود.' },
    how: { en: 'Micius distributed entangled photons to separated ground stations. Security was derived from the measured quantum correlations, so the satellite did not need to know the final key—a different trust model from prepare-and-measure satellite QKD.', fa: 'Micius فوتون‌های درهم‌تنیده را به ایستگاه‌های جدا از هم فرستاد. امنیت از هم‌بستگی‌های کوانتومی اندازه‌گیری‌شده به‌دست آمد؛ بنابراین ماهواره نیازی به دانستن کلید نهایی نداشت و مدل اعتماد با QKD ماهواره‌ای آماده‌سازی‌و‌اندازه‌گیری متفاوت بود.' },
    evidence: { en: ['1,120 km separation between ground stations.', 'Entanglement-based protocol removed the requirement to trust the satellite relay.', 'Published in Nature in 2020.'], fa: ['فاصلهٔ ۱۱۲۰ کیلومتر میان ایستگاه‌های زمینی.', 'پروتکل مبتنی بر درهم‌تنیدگی نیاز به اعتماد به رلهٔ ماهواره‌ای را حذف کرد.', 'انتشار در Nature در سال ۲۰۲۰.'] },
    significance: { en: 'The work advanced satellite quantum links from physics demonstration toward architectures with stronger security assumptions for wide-area quantum networks.', fa: 'این کار لینک‌های کوانتومی ماهواره‌ای را از نمایش فیزیکی به سمت معماری‌های شبکهٔ گسترده با فرض‌های امنیتی قوی‌تر پیش برد.' },
    caveat: { en: 'Quantum-key rate, trust model and physical distance must be compared together; a longer link is not automatically a better operational QKD system.', fa: 'نرخ کلید، مدل اعتماد و فاصلهٔ فیزیکی باید هم‌زمان مقایسه شوند؛ لینک طولانی‌تر لزوماً سامانهٔ QKD عملیاتی بهتری نیست.' },
    image: '/images/records/optical-quantum-link-photorealistic.webp', imageAlt: { en: 'Cinematic satellite optical channel between space and a secure ground observatory', fa: 'کانال نوری سینمایی میان ماهواره و رصدخانه امن زمینی' },
    sources: [{ title: 'Entanglement-based secure quantum cryptography over 1,120 kilometres', organization: 'Nature', url: 'https://doi.org/10.1038/s41586-020-2401-y', kind: 'Peer-reviewed paper' }]
  },
  {
    slug: 'micius-quantum-time-transfer-30-ps', categoryIds: ['quantum', 'tracking'], status: 'public-benchmark', year: '2020',
    title: { en: 'Micius: 30-picosecond quantum-secure time transfer', fa: 'Micius: انتقال زمان امن کوانتومی با دقت ۳۰ پیکوثانیه' },
    holder: { en: 'Micius quantum time-transfer experiment', fa: 'آزمایش انتقال زمان کوانتومی Micius' },
    metric: { en: '30 ps precision', fa: 'دقت ۳۰ پیکوثانیه' },
    distance: { en: 'Satellite-to-ground optical channel', fa: 'کانال نوری ماهواره‌به‌زمین' },
    platform: { en: 'Quantum-secure satellite time transfer', fa: 'انتقال زمان امن کوانتومی ماهواره‌ای' },
    summary: { en: 'A satellite-based experiment reported quantum-secure time transfer with 30 ps precision, less than 1% quantum bit error rate and a 9 kHz time-data rate.', fa: 'یک آزمایش ماهواره‌ای انتقال زمان امن کوانتومی را با دقت ۳۰ پیکوثانیه، نرخ خطای بیت کوانتومی کمتر از ۱٪ و نرخ دادهٔ زمانی ۹ کیلوهرتز گزارش کرد.' },
    how: { en: 'The experiment combined a quantum channel for security with precise optical timing measurements. Time tags and photon events were processed to align remote clocks while monitoring the channel for interception-sensitive disturbances.', fa: 'آزمایش یک کانال کوانتومی برای امنیت را با اندازه‌گیری دقیق زمان نوری ترکیب کرد. برچسب‌های زمانی و رویدادهای فوتونی برای هم‌ترازی ساعت‌های دوردست پردازش شدند و هم‌زمان اختلالات حساس به شنود پایش شد.' },
    evidence: { en: ['30 ps reported time-transfer precision.', 'Quantum bit error rate below 1%.', '9 kHz time-data rate.'], fa: ['دقت گزارش‌شدهٔ انتقال زمان: ۳۰ پیکوثانیه.', 'نرخ خطای بیت کوانتومی کمتر از ۱٪.', 'نرخ دادهٔ زمانی ۹ کیلوهرتز.'] },
    significance: { en: 'Precision timing is a foundational service for navigation, distributed sensing, communications and future quantum networks; the demonstration connected timing accuracy with quantum-channel security.', fa: 'زمان‌سنجی دقیق برای ناوبری، حسگری توزیع‌شده، مخابرات و شبکه‌های کوانتومی آینده زیرساختی است؛ این نمایش دقت زمان را با امنیت کانال کوانتومی پیوند داد.' },
    caveat: { en: 'This is presented as a published precision benchmark, not as an unqualified current world record across all optical time-transfer methods.', fa: 'این مورد به‌عنوان بنچمارک منتشرشدهٔ دقت ارائه می‌شود، نه رکورد جهانی بدون قید در میان همهٔ روش‌های انتقال زمان نوری.' },
    image: '/images/records/optical-quantum-link-photorealistic.webp', imageAlt: { en: 'Precision space-to-ground optical channel visualized over the night side of Earth', fa: 'تصویرسازی کانال نوری دقیق فضا به زمین بر فراز نیمه شب زمین' },
    sources: [{ title: 'Quantum-secure time transfer between satellite and ground', organization: 'arXiv technical paper', url: 'https://arxiv.org/abs/2006.00666', kind: 'Technical paper' }]
  },
  {
    slug: 'darpa-power-800-watts-8-6-km', categoryIds: ['power', 'tracking'], status: 'verified-record', year: '2025',
    title: { en: 'DARPA POWER: more than 800 W delivered across 8.6 km', fa: 'DARPA POWER: انتقال بیش از ۸۰۰ وات در فاصلهٔ ۸٫۶ کیلومتر' },
    holder: { en: 'DARPA POWER programme · U.S. Naval Research Laboratory', fa: 'برنامهٔ DARPA POWER · آزمایشگاه پژوهشی نیروی دریایی آمریکا' },
    metric: { en: '>800 W for 30 seconds', fa: 'بیش از ۸۰۰ وات برای ۳۰ ثانیه' },
    distance: { en: '8.6 km horizontal free-space path', fa: 'مسیر افقی فضای آزاد ۸٫۶ کیلومتری' },
    platform: { en: 'Ground laser power-beaming demonstration', fa: 'نمایش زمینی انتقال توان با لیزر' },
    summary: { en: 'DARPA reported a power-beaming distance record after delivering more than 800 W of optical power for 30 seconds across 8.6 km and more than one megajoule during the campaign.', fa: 'DARPA پس از انتقال بیش از ۸۰۰ وات توان نوری برای ۳۰ ثانیه در فاصلهٔ ۸٫۶ کیلومتر و بیش از یک مگاژول در کل کمپین، رکورد فاصلهٔ انتقال توان را گزارش کرد.' },
    how: { en: 'A high-power laser was directed across a long atmospheric path to a compact receiver. The receiver aperture redirected the beam onto multiple photovoltaic cells, converting incident optical energy into electricity while tracking and safety systems controlled the beam.', fa: 'لیزر پرتوان در یک مسیر جوی طولانی به گیرنده‌ای فشرده هدایت شد. دهانهٔ گیرنده پرتو را به چند سلول فتوولتائیک منتقل کرد تا انرژی نوری به برق تبدیل شود؛ سامانه‌های رهگیری و ایمنی نیز پرتو را کنترل می‌کردند.' },
    evidence: { en: ['More than 800 W delivered for 30 seconds.', '8.6 km horizontal free-space path.', 'More than 1 MJ delivered over the test campaign.', 'DARPA explicitly described the distance and power result as record-setting.'], fa: ['انتقال بیش از ۸۰۰ وات برای ۳۰ ثانیه.', 'مسیر افقی فضای آزاد به طول ۸٫۶ کیلومتر.', 'انتقال بیش از یک مگاژول در طول کمپین آزمایش.', 'DARPA نتیجهٔ فاصله و توان را صراحتاً رکوردشکن توصیف کرد.'] },
    significance: { en: 'Optical power beaming could support remote platforms, temporary infrastructure and future energy-relay concepts where cables or fuel logistics are impractical.', fa: 'انتقال توان نوری می‌تواند از سکوهای دوردست، زیرساخت موقت و رله‌های انرژی آینده در مکان‌هایی که کابل یا لجستیک سوخت عملی نیست پشتیبانی کند.' },
    caveat: { en: 'Delivered electrical power, transmitted optical power, end-to-end efficiency and range are different metrics. This entry reports the values explicitly stated by DARPA and does not infer missing efficiency figures.', fa: 'توان الکتریکی تحویلی، توان نوری ارسالی، بازده انتها‌به‌انتها و برد معیارهای متفاوتی هستند. این پرونده فقط مقادیر صریح DARPA را گزارش می‌کند و بازده اعلام‌نشده را حدس نمی‌زند.' },
    image: '/images/records/optical-power-beaming-photorealistic.webp', imageAlt: { en: 'High-precision long-range optical beam directed toward a terrestrial receiver', fa: 'پرتو نوری دوربرد و دقیق به سوی گیرنده زمینی' },
    sources: [{ title: 'DARPA program sets distance record for power beaming', organization: 'DARPA', url: 'https://www.darpa.mil/news/2025/darpa-program-distance-record-power-beaming', kind: 'Official mission source' }, { title: 'NRL scientists recognized for record-breaking optical power beaming', organization: 'U.S. Naval Research Laboratory', url: 'https://www.nrl.navy.mil/Media/News/Article/4235820/naval-research-laboratory-scientists-recognized-by-darpa-for-record-breaking-op/', kind: 'Official mission source' }],
    relatedProject: '/projects/power-neutral-information-energy-transfer', relatedProjectLabel: { en: 'Power-Neutral Information & Energy Transfer', fa: 'انتقال اطلاعات و انرژی با توان خنثی' }
  },
  {
    slug: 'hydron-terabit-optical-network-target', categoryIds: ['throughput', 'relay'], status: 'announced-target', year: '2024–2025',
    title: { en: 'HydRON target: a terabit-class all-optical network in space', fa: 'هدف HydRON: شبکهٔ تمام‌نوری فضایی در مقیاس ترابیت' },
    holder: { en: 'European Space Agency · HydRON', fa: 'آژانس فضایی اروپا · HydRON' },
    metric: { en: 'Terabit capacity target', fa: 'هدف ظرفیت ترابیتی' },
    distance: { en: 'Multi-orbit optical transport network', fa: 'شبکهٔ انتقال نوری چندمداری' },
    platform: { en: 'High Throughput Optical Network', fa: 'شبکهٔ نوری پُرظرفیت' },
    summary: { en: 'ESA’s HydRON programme targets the first all-optical transport network in space with terabit-scale capacity, connecting orbital layers and ground infrastructure.', fa: 'برنامهٔ HydRON آژانس فضایی اروپا، نخستین شبکهٔ انتقال تمام‌نوری فضایی با ظرفیت در مقیاس ترابیت را هدف گرفته است تا لایه‌های مداری و زیرساخت زمینی را متصل کند.' },
    how: { en: 'HydRON is being developed as an optical network rather than a single point-to-point terminal. Collector spacecraft, optical crosslinks, network management and ground gateways are intended to route high-capacity traffic across different orbital layers.', fa: 'HydRON به‌عنوان یک شبکهٔ نوری و نه یک ترمینال نقطه‌به‌نقطه توسعه می‌یابد. فضاپیماهای جمع‌آورنده، لینک‌های متقاطع نوری، مدیریت شبکه و دروازه‌های زمینی برای مسیریابی ترافیک پرظرفیت در لایه‌های مداری مختلف در نظر گرفته شده‌اند.' },
    evidence: { en: ['ESA describes HydRON as a “fibre in the sky” concept.', 'Element #1 and Element #2 industrial development contracts were announced in 2024 and 2025.', 'The programme target is terabit-capacity optical transport, not an already achieved operational record.'], fa: ['ESA از HydRON با مفهوم «فیبر در آسمان» یاد می‌کند.', 'قراردادهای توسعهٔ صنعتی Element #1 و Element #2 در سال‌های ۲۰۲۴ و ۲۰۲۵ اعلام شدند.', 'هدف برنامه انتقال نوری ترابیتی است، نه یک رکورد عملیاتی محقق‌شده.'] },
    significance: { en: 'If demonstrated, HydRON would shift optical space communications from isolated high-speed links toward routed photonic infrastructure.', fa: 'در صورت نمایش موفق، HydRON مخابرات نوری فضایی را از لینک‌های سریع منفرد به زیرساخت فوتونیکی مسیریابی‌شده منتقل می‌کند.' },
    caveat: { en: 'This is an announced programme target. No terabit operational record is claimed on this page.', fa: 'این یک هدف برنامه‌ای اعلام‌شده است. در این صفحه هیچ رکورد عملیاتی ترابیتی ادعا نمی‌شود.' },
    image: '/images/records/optical-relay-network-photorealistic.webp', imageAlt: { en: 'Realistic orbital optical link above Earth representing future space data transport', fa: 'لینک نوری مداری واقع‌گرایانه بر فراز زمین برای نمایش انتقال داده فضایی آینده' },
    sources: [{ title: 'HydRON: fibre in the sky', organization: 'European Space Agency', url: 'https://connectivity.esa.int/fiber-space', kind: 'Official mission source' }, { title: 'ESA’s HydRON project for space-based optical communications moves forward', organization: 'European Space Agency', url: 'https://www.esa.int/Applications/Connectivity_and_Secure_Communications/ESA_s_HydRON_project_for_space-based_optical_communications_moves_forward', kind: 'Official mission source' }],
    relatedProject: '/projects/all-optical-multi-hop-inter-satellite-relaying', relatedProjectLabel: { en: 'All-Optical Multi-Hop Inter-Satellite Relaying', fa: 'رلهٔ تمام‌نوری چندهاپی بین‌ماهواره‌ای' }
  },
  {
    slug: 'eagle-1-satellite-qkd-target', categoryIds: ['quantum', 'terminals'], status: 'announced-target', year: 'Late 2026 / early 2027',
    title: { en: 'EAGLE-1 target: European satellite QKD validation', fa: 'هدف EAGLE-1: اعتبارسنجی اروپایی QKD ماهواره‌ای' },
    holder: { en: 'ESA · European Commission · SES-led consortium', fa: 'ESA · کمیسیون اروپا · کنسرسیوم به رهبری SES' },
    metric: { en: 'Three-year in-orbit validation', fa: 'اعتبارسنجی سه‌ساله در مدار' },
    distance: { en: 'LEO-to-European optical ground stations', fa: 'مدار پایین تا ایستگاه‌های نوری زمینی اروپا' },
    platform: { en: 'EAGLE-1 quantum-key-distribution satellite', fa: 'ماهوارهٔ توزیع کلید کوانتومی EAGLE-1' },
    summary: { en: 'EAGLE-1 is intended to validate European satellite QKD technologies from low Earth orbit and feed mission data into the future EuroQCI secure-connectivity architecture.', fa: 'EAGLE-1 برای اعتبارسنجی فناوری‌های اروپایی QKD از مدار پایین طراحی شده و قرار است داده‌های مأموریت را برای معماری امن EuroQCI فراهم کند.' },
    how: { en: 'The mission combines a European quantum-key payload, optical ground terminals and an operational validation campaign. ESA states that the satellite is due to launch in late 2026 or early 2027, followed by initial tests and three years of in-orbit validation.', fa: 'مأموریت، محمولهٔ اروپایی کلید کوانتومی، ترمینال‌های نوری زمینی و کمپین اعتبارسنجی عملیاتی را ترکیب می‌کند. مطابق اعلام ESA، پرتاب برای اواخر ۲۰۲۶ یا اوایل ۲۰۲۷ پیش‌بینی شده و پس از آزمون‌های اولیه، سه سال اعتبارسنجی مداری انجام خواهد شد.' },
    evidence: { en: ['Launch due in late 2026 or early 2027 according to ESA.', 'Three years of in-orbit validation planned after initial testing.', 'More than 20 European companies participate in the SES-led consortium.'], fa: ['طبق اعلام ESA، پرتاب برای اواخر ۲۰۲۶ یا اوایل ۲۰۲۷ پیش‌بینی شده است.', 'سه سال اعتبارسنجی مداری پس از آزمون اولیه برنامه‌ریزی شده است.', 'بیش از ۲۰ شرکت اروپایی در کنسرسیوم به رهبری SES حضور دارند.'] },
    significance: { en: 'EAGLE-1 is positioned as a bridge between research demonstrations and sovereign European quantum-secure infrastructure.', fa: 'EAGLE-1 به‌عنوان پلی میان نمایش‌های پژوهشی و زیرساخت مستقل اروپایی برای ارتباط امن کوانتومی تعریف شده است.' },
    caveat: { en: 'The dates and performance are programme plans. The entry will be updated only after launch and independently documented in-orbit results.', fa: 'تاریخ‌ها و عملکرد فعلاً برنامهٔ مأموریت هستند. این پرونده فقط پس از پرتاب و انتشار نتایج مداری مستند به‌روزرسانی خواهد شد.' },
    image: '/images/records/optical-quantum-link-photorealistic.webp', imageAlt: { en: 'Realistic satellite optical channel connecting a spacecraft with a ground observatory', fa: 'کانال نوری ماهواره‌ای واقع‌گرایانه میان فضاپیما و رصدخانه زمینی' },
    sources: [{ title: 'EAGLE-1', organization: 'European Space Agency', url: 'https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Eagle-1', kind: 'Official mission source' }]
  },
  {
    slug: 'terawave-6-tbps-optical-target', categoryIds: ['throughput', 'relay'], status: 'announced-target', year: 'Deployment planned from Q4 2027',
    title: { en: 'TeraWave target: 6 Tbit/s optical connectivity', fa: 'هدف TeraWave: اتصال نوری ۶ ترابیت‌برثانیه' },
    holder: { en: 'Blue Origin · announced TeraWave network', fa: 'Blue Origin · شبکهٔ اعلام‌شدهٔ TeraWave' },
    metric: { en: 'Up to 6 Tbit/s target', fa: 'هدف تا ۶ ترابیت‌برثانیه' },
    distance: { en: 'Multi-orbit LEO/MEO network', fa: 'شبکهٔ چندمداری LEO/MEO' },
    platform: { en: 'Planned enterprise satellite network', fa: 'شبکهٔ ماهواره‌ای تجاری برنامه‌ریزی‌شده' },
    summary: { en: 'Blue Origin has announced a multi-orbit network targeting bidirectional optical connectivity of up to 6 Tbit/s from its medium-Earth-orbit layer.', fa: 'Blue Origin یک شبکهٔ چندمداری را اعلام کرده که لایهٔ مدار میانی آن اتصال نوری دوطرفه تا ۶ ترابیت‌برثانیه را هدف می‌گیرد.' },
    how: { en: 'The announced architecture combines thousands of LEO satellites with a smaller MEO layer intended for very high-capacity optical links. Public plans describe deployment beginning in the fourth quarter of 2027.', fa: 'معماری اعلام‌شده هزاران ماهوارهٔ مدار پایین را با یک لایهٔ کوچک‌تر مدار میانی برای لینک‌های نوری بسیار پرظرفیت ترکیب می‌کند. برنامهٔ عمومی، آغاز استقرار را سه‌ماههٔ چهارم ۲۰۲۷ اعلام کرده است.' },
    evidence: { en: ['Announced target of up to 6 Tbit/s optical connectivity.', 'Planned constellation of 5,408 satellites across LEO and MEO.', 'Deployment publicly scheduled to begin in Q4 2027.'], fa: ['هدف اعلام‌شدهٔ اتصال نوری تا ۶ ترابیت‌برثانیه.', 'منظومهٔ برنامه‌ریزی‌شده با ۵۴۰۸ ماهواره در مدار پایین و میانی.', 'آغاز استقرار عمومی برای سه‌ماههٔ چهارم ۲۰۲۷ برنامه‌ریزی شده است.'] },
    significance: { en: 'The target indicates how commercial space networks may move from gigabit terminal demonstrations toward multi-terabit optical backbone links.', fa: 'این هدف نشان می‌دهد شبکه‌های تجاری فضایی چگونه ممکن است از نمایش ترمینال‌های گیگابیتی به لینک‌های ستون‌فقرات نوری چندترابیتی حرکت کنند.' },
    caveat: { en: 'This is an announced commercial target, not an achieved record. Architecture, schedule and delivered capacity may change before deployment.', fa: 'این یک هدف تجاری اعلام‌شده است، نه رکورد محقق‌شده. معماری، زمان‌بندی و ظرفیت واقعی ممکن است پیش از استقرار تغییر کنند.' },
    image: '/images/records/optical-relay-network-photorealistic.webp', imageAlt: { en: 'Cinematic orbital laser link representing a future multi-orbit optical backbone', fa: 'لینک لیزری مداری سینمایی برای نمایش ستون‌فقرات نوری چندمداری آینده' },
    sources: [{ title: 'Blue Origin plans 5,408-satellite TeraWave network', organization: 'Reuters', url: 'https://www.reuters.com/science/bezos-blue-origin-deploy-thousands-satellites-new-terawave-communications-network-2026-01-21/', kind: 'Independent reporting' }],
    relatedProject: '/projects/all-optical-multi-hop-inter-satellite-relaying', relatedProjectLabel: { en: 'All-Optical Multi-Hop Inter-Satellite Relaying', fa: 'رلهٔ تمام‌نوری چندهاپی بین‌ماهواره‌ای' }
  },
  {
    slug: 'darpa-power-airborne-relay-target', categoryIds: ['power', 'relay'], status: 'announced-target', year: 'POWER programme',
    title: { en: 'POWER target: airborne optical energy relays', fa: 'هدف POWER: رله‌های هوابرد انرژی نوری' },
    holder: { en: 'DARPA Persistent Optical Wireless Energy Relay', fa: 'برنامهٔ Persistent Optical Wireless Energy Relay دارپا' },
    metric: { en: 'Multi-path energy network target', fa: 'هدف شبکهٔ انرژی چندمسیره' },
    distance: { en: 'Airborne relay chain', fa: 'زنجیرهٔ رلهٔ هوابرد' },
    platform: { en: 'High-altitude optical energy relay nodes', fa: 'گره‌های رلهٔ انرژی نوری در ارتفاع بالا' },
    summary: { en: 'DARPA’s POWER programme targets an airborne relay network able to redirect optical energy across multiple paths, extending power delivery beyond a single line of sight.', fa: 'برنامهٔ POWER دارپا یک شبکهٔ رلهٔ هوابرد را هدف گرفته که بتواند انرژی نوری را در چند مسیر هدایت کند و انتقال توان را فراتر از یک خط دید مستقیم گسترش دهد.' },
    how: { en: 'The programme concept uses airborne nodes as optical energy relays. Instead of converting all energy at each hop, the architecture is intended to redirect beams efficiently while network control selects resilient paths.', fa: 'مفهوم برنامه از گره‌های هوابرد به‌عنوان رلهٔ انرژی نوری استفاده می‌کند. به‌جای تبدیل کامل انرژی در هر هاپ، معماری برای هدایت مجدد کارآمد پرتو طراحی شده و کنترل شبکه مسیرهای تاب‌آور را انتخاب می‌کند.' },
    evidence: { en: ['DARPA defines POWER as an optical wireless energy-relay programme.', 'The public goal is persistent, resilient, multi-path energy distribution.', 'The 2025 ground record is a stepping stone, not proof that the airborne network already exists.'], fa: ['DARPA برنامهٔ POWER را رلهٔ بی‌سیم نوری انرژی تعریف می‌کند.', 'هدف عمومی، توزیع انرژی پایدار، تاب‌آور و چندمسیره است.', 'رکورد زمینی ۲۰۲۵ یک گام توسعه‌ای است، نه اثبات وجود شبکهٔ هوابرد کامل.'] },
    significance: { en: 'An airborne power relay could decouple remote-system endurance from local fuel and battery limits, but it also raises major efficiency, weather, control and laser-safety challenges.', fa: 'رلهٔ هوابرد توان می‌تواند مداومت سامانه‌های دوردست را از محدودیت سوخت و باتری محلی جدا کند؛ بااین‌حال چالش‌های جدی بازده، آب‌وهوا، کنترل و ایمنی لیزر دارد.' },
    caveat: { en: 'This page describes the programme objective. It does not imply that a complete airborne relay chain has already been demonstrated.', fa: 'این صفحه هدف برنامه را توضیح می‌دهد و به معنای نمایش کامل زنجیرهٔ رلهٔ هوابرد نیست.' },
    image: '/images/records/optical-power-beaming-photorealistic.webp', imageAlt: { en: 'Long-range optical beam linking an airborne terminal with an Earth receiver', fa: 'پرتو نوری دوربرد میان ترمینال هوابرد و گیرنده زمینی' },
    sources: [{ title: 'Persistent Optical Wireless Energy Relay (POWER)', organization: 'DARPA', url: 'https://www.darpa.mil/research/programs/power', kind: 'Official mission source' }],
    relatedProject: '/projects/power-neutral-information-energy-transfer', relatedProjectLabel: { en: 'Power-Neutral Information & Energy Transfer', fa: 'انتقال اطلاعات و انرژی با توان خنثی' }
  }
];

export const achievedRecords = opticalRecords.filter((record) => record.status !== 'announced-target');
export const futureTargets = opticalRecords.filter((record) => record.status === 'announced-target');

export function getRecord(slug: string) {
  return opticalRecords.find((record) => record.slug === slug);
}
