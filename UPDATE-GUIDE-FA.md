# راهنمای آپدیت سایت MeysamGhanbari.com

## این نسخه چه چیزهایی را تغییر می‌دهد؟

- لحن کل سایت سوم‌شخص، رسمی و شبیه یک وب‌سایت رسمی مدیریت‌شده است.
- تم بصری سایت ماهواره‌ای/فضایی‌تر شده است.
- ۶ تصویر حرفه‌ای با نام فایل SEO-friendly و WebP اضافه شده‌اند.
- بخش Publications شامل فهرست کامل فعلی CV است.
- برای هر مقاله یک صفحه اختصاصی ساخته می‌شود.
- بخش Upcoming به منوی اصلی اضافه شده است.
- بخش Insights برای دیدگاه‌های فنی و آینده‌نگر آماده است.
- صفحه About بر اساس CV بازنویسی شده است.
- فایل CV در سایت قرار گرفته و دکمه View CV دارد.
- SEO شامل Person schema، نام فارسی/انگلیسی، Open Graph image، sitemap و alt text تصاویر تقویت شده است.

## روش آپدیت از طریق GitHub

1. فایل ZIP نسخه جدید را دانلود و Extract کنید.
2. وارد Repository زیر شوید:
   `meysamghanbarys-source/meysamghanbari.com`
3. روی `Add file` سپس `Upload files` بزنید.
4. محتویات داخل پوشه Extract شده را Drag & Drop کنید. مهم است که پوشه‌های `src` و `public` با ساختار خودشان آپلود شوند.
5. GitHub باید pathهایی شبیه این نشان دهد:
   - `src/data/site.ts`
   - `src/data/library.ts`
   - `src/pages/index.astro`
   - `src/pages/publications/[slug].astro`
   - `public/images/profile/...`
6. در Commit message بنویسید:
   `Website v2: space theme, media, full publications and upcoming`
7. Commit مستقیم روی `main` انجام شود.
8. Cloudflare Pages به‌صورت خودکار build و deploy می‌کند.
9. معمولاً پس از ۱ تا ۳ دقیقه نسخه جدید روی `meysamghanbari.com` قرار می‌گیرد.

## اگر Deploy خطا داد

در Cloudflare به:
`Workers & Pages > meysamghanbari-com > Deployments`
بروید و آخرین build log را بررسی کنید.

تنظیمات درست:
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## افزودن مقاله جدید در آینده

فایل:
`src/data/library.ts`

را باز کنید و یک publication جدید به آرایه `publications` اضافه کنید. صفحه اختصاصی مقاله به‌صورت خودکار ساخته می‌شود.

## افزودن Upcoming

در همان فایل `src/data/library.ts`، آرایه `upcoming` را پر کنید.

نمونه:
```ts
{
  title: 'IEEE Conference Name',
  date: 'March 2027',
  location: 'Lisbon, Portugal',
  type: 'Conference Presentation'
}
```

## افزودن Insight / Perspective

در `src/data/library.ts` آرایه `insights` برای عنوان، تاریخ و خلاصه آماده است. برای مقاله‌های بلند می‌توان بعداً route اختصاصی Insights اضافه کرد.

## افزودن عکس جدید

عکس را در یکی از این مسیرها قرار دهید:
- `public/images/profile/`
- `public/images/media/`

نام فایل بهتر است توصیفی باشد، مثلاً:
`meysam-ghanbari-ieee-conference-presentation-2027.webp`

بعد مسیر و alt text آن در `src/data/library.ts` بخش `media` اضافه شود.
