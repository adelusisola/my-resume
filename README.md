# Nisola — Product Manager Portfolio

A dark-first, awwwards-inspired portfolio for Oluwanisola J. Dele-Adelusi, Product Manager. Built with **Tailwind CSS 4.1**, vanilla JavaScript, and GSAP scroll motion (progressively enhanced).

**Live site:** [adelusisola.github.io/my-resume](https://adelusisola.github.io/my-resume/)

---

## ✨ Features

- **Dark-first immersive design** — near-black canvas, electric-lime accent, Space Grotesk display type
- **Case-study-driven work section** — six product case studies with swappable placeholder visuals
- **GSAP scroll motion** — hero intro, scroll reveals, subtle parallax; respects `prefers-reduced-motion` and degrades gracefully without JavaScript
- **Light mode** — full secondary theme, persisted in `localStorage`
- **Fully responsive** — sticky section labels on desktop, stacked layout on mobile, slide-in drawer nav
- **Accessible** — semantic HTML, ARIA labels, focus indicators, keyboard navigation
- **SEO** — meta tags, JSON-LD structured data, Open Graph, `sitemap.xml`

---

## 🛠️ Tech Stack

- **HTML5** — two static pages (`index.html`, `contact.html`)
- **Tailwind CSS 4.1** — compiled from `input.css` (the design tokens and all components live there)
- **Vanilla JavaScript** (`main.js`) — theme, nav, form validation, motion
- **GSAP 3 + ScrollTrigger** (CDN) — scroll animations
- **Font Awesome 6** (CDN) — icons
- **FormSpree** — contact form backend

### Build Tools

- Tailwind CLI (`npm run build:css`)
- PostCSS / Autoprefixer

---

## 📦 Setup

```bash
# Clone repository
git clone https://github.com/adelusisola/my-resume.git
cd my-resume

# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch for changes (development)
npm run watch:css
```

## 📜 Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run build:css` | Build Tailwind CSS           |
| `npm run watch:css` | Watch and rebuild on changes |
| `npm run dev`       | Development mode (watch)     |

---

## 📁 Structure

```
my-resume/
├── index.html                  # Hub: hero, work index, experience, about, toolkit, credentials, CTA
├── contact.html                # Contact page (form + details)
├── work/
│   ├── oprabills/              # Case study — AI personal finance (PM & PD, 2025–26)
│   ├── vant-savings/           # Case study — savings fintech (Lead PM & PD, 2022–23)
│   ├── paylode/                # Case study — payments suite (Lead UI/UX, 2022–23)
│   ├── gerar-portal/           # Case study — university portal (Lead PM & PD, 2023–25)
│   ├── drest/                  # Case study — fashion e-commerce redesign (PD, 2025)
│   └── cloud-opac/             # Case study — thesis product (Designer & Lead, 2025)
├── input.css                   # Tailwind source — design tokens & components
├── styles.css                  # Compiled output (committed, linked by HTML)
├── main.js                     # Theme, nav, GSAP motion, form validation
├── sitemap.xml                 # All 8 site URLs
├── robots.txt                  # Crawl rules + sitemap reference
├── tailwind.config.cjs         # Tailwind config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── assets/images/
    ├── nisola-portrait.jpg     # Portrait (about + OG image)
    └── favicon.svg             # Lime "n." mark
```

Every page cross-links: the homepage work cards link to case studies, case studies carry breadcrumbs + a prev/next "Next project →" chain, and the footer on all 8 pages lists every work page and section.

---

## 🎨 Customization

### Design tokens

All colors, fonts and surfaces are CSS variables at the top of `input.css` (`:root` for dark, `body.light-mode` for light). Change `--accent` / `--accent-text` to re-skin the whole site.

### Work card visuals

The case-study pages use labeled gradient placeholders (`work-visual--1` … `--6` and `.cs-fig` in `input.css`) at story beats — waitlist screens, user flows, dashboards. To use real product shots, replace the placeholder div in any `work/<slug>/index.html` with:

```html
<img class="cs-fig" src="assets/images/your-shot.jpg" alt="OpraBills waitlist screen">
```

### Contact form

Uses FormSpree — update the form ID in `main.js`:

```javascript
contactForm.setAttribute("action", "https://formspree.io/f/YOUR_ID");
```

---

## 🚀 Deployment

GitHub Pages serves straight from `main`:

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

Ensure Pages is enabled in repo Settings → Pages (deploy from branch `main` / root). `styles.css` is committed, so no build step is needed at deploy time.

---

## 🔍 SEO

- Meta tags (OG, Twitter), JSON-LD structured data (Person + BreadcrumbList), canonical URLs
- `sitemap.xml` — all 8 URLs with priorities (home 1.0, case studies 0.9, contact 0.8)
- `robots.txt` referencing the sitemap — submit at [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmaster/)
- Google Analytics is **not** included; add your own snippet if needed

---

## 📱 Responsive

- Desktop: 1024px+ (sticky section labels)
- Tablet: 768–1024px
- Mobile: <768px (drawer nav, stacked layouts)

---

## 📝 License

ISC License — feel free to use as a template

---

## 👤 Author

**Oluwanisola J. Dele-Adelusi** — Product Manager
📧 adelusisola@gmail.com · 📍 Lagos, Nigeria

- [LinkedIn](https://www.linkedin.com/in/dele-adelusi-oluwanisola/)
- [GitHub](https://github.com/adelusisola)
- [Twitter / X](https://x.com/Nisola_Adelusi)

**Version:** 2.0.0 | **Updated:** October 2026
