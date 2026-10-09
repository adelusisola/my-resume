# Multi-Page Portfolio IA + Full Case-Study System

## 1. New site architecture (clean URLs via folder-per-project, GitHub Pages native)

```
/                              index.html — hub (hero, work index, experience, about, toolkit, credentials, CTA)
/work/oprabills/index.html     AI personal finance · PM & PD · 2025–26
/work/vant-savings/index.html  Savings app · Lead PM & PD · 2022–23
/work/paylode/index.html       Payments suite · Lead UI/UX · 2022–23
/work/gerar-portal/index.html  University portal · Lead PM & PD · 2023–25
/work/drest/index.html         Fashion e-commerce redesign · PD · 2025
/work/cloud-opac/index.html    Thesis product · Designer & Lead · 2025
/contact.html                  Contact form + details
/sitemap.xml /robots.txt       Full crawl infrastructure
```

## 2. Wayfinding — how people find every page
- **Homepage work cards become fully clickable links** (stretched-link pattern, keyboard-focusable, arrow affordance "View case study →").
- **Footer becomes a real sitemap nav** on all 8 pages: brand column · "Selected Work" column (6 case links) · "Explore" column (Home, Experience, About, Toolkit, Contact) · socials.
- **Breadcrumbs on case pages** ("Home / Work / OpraBills") + `BreadcrumbList` JSON-LD.
- **Prev/next project navigation** on every case page, ending in a giant awwwards-style "Next project →" band before the contact CTA.
- Consistent header (Work, Experience, Toolkit, About, Contact) with correct `../../` relative paths from case pages.

## 3. Case-study page template — long-form, UX-standard
Each of the 6 pages (~1,200–1,800 words, written from CV facts, truthful qualitative outcomes, no invented metrics):
- **Hero:** category eyebrow + huge title + one-line summary + meta grid (Role, Timeline, Company, Platform, Tools) + large labeled gradient placeholder visual.
- **Sticky rail label** matching homepage system ("Case Study / 01").
- **Sections:** Overview (the brief) → The Challenge → Process in 3–5 numbered stages (project-specific: Research & Discovery / Definition & Strategy / Design & Iteration / Delivery & Collaboration / Validation) → Outcome & Impact → What I Learned.
- **Labeled placeholder visuals** at story beats (e.g. "User flow — savings vault creation") — same swap-to-`<img>` convention as homepage, documented in README.
- **Next-project band** + contact CTA.

## 4. Homepage & contact page updates
- Work cards → links; contact CTA gains a `contact.html` link alongside mailto; nav paths unchanged.

## 5. SEO infrastructure
- `sitemap.xml`: all 8 URLs with priorities (home 1.0, cases 0.9, contact 0.8) and lastmod.
- `robots.txt` referencing the sitemap.
- Per-case meta titles/descriptions + OG tags.

## 6. Implementation
- `input.css`: add case-study component styles (~300 lines) — breadcrumb, meta grid, process stages, labeled visual placeholders, next-project band, footer-nav columns — one design system, dark-first.
- Header/footer duplicated statically per page (preserves the verified no-JS guarantee); `main.js` motion works via existing `data-reveal` hooks; GSAP/FA/fonts referenced with correct relative paths.
- `npm run build:css` rebuild; README structure section updated.

## 7. Verification
- Link crawl: every link on every page returns 200 (incl. prev/next, breadcrumbs, footer).
- Screenshots: homepage + 2 representative case studies, desktop + mobile, dark mode; visual review of typography, spacing, sticky rail, placeholder system.
- Re-verify theme toggle + no-JS visibility on a case page.

## Files
**New:** 6 `work/<slug>/index.html` pages, `robots.txt`.
**Modified:** `index.html`, `contact.html`, `input.css` (+rebuilt `styles.css`), `sitemap.xml`, `README.md`.