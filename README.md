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
├── index.html              # Main portfolio (hero, work, experience, about, toolkit, credentials, contact)
├── contact.html            # Contact page (form + details)
├── input.css               # Tailwind source — design tokens & components
├── styles.css              # Compiled output (committed, linked by HTML)
├── main.js                 # Theme, nav, GSAP motion, form validation
├── sitemap.xml             # Search engine sitemap
├── tailwind.config.cjs     # Tailwind config
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies
└── assets/images/
    └── nisola-portrait.jpg # Portrait (used on about + OG image)
```

---

## 🎨 Customization

### Design tokens

All colors, fonts and surfaces are CSS variables at the top of `input.css` (`:root` for dark, `body.light-mode` for light). Change `--accent` / `--accent-text` to re-skin the whole site.

### Work card visuals

The case-study cards use gradient placeholders (`work-visual--1` … `--6` in `input.css`). To use real product shots, replace the `.work-visual` div in `index.html` with:

```html
<img class="work-visual" src="assets/images/your-shot.jpg" alt="OpraBills dashboard">
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

- Meta tags (OG, Twitter), JSON-LD structured data, canonical URLs
- `sitemap.xml` — submit at [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmaster/)
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
