# Nisola's Portfolio & Resume

A modern, responsive portfolio website showcasing professional qualifications, skills, projects, and journey. Built with **Tailwind CSS 4.1**, vanilla JavaScript, and best practices for performance, accessibility, and SEO.

**Live Demo:** [adelusisola.github.io/my-resume](https://adelusisola.github.io/my-resume/)

---

## 📋 Features

✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop  
✅ **Dark Mode Support** - Toggle between light and dark themes with persistence  
✅ **Tailwind CSS 4.1** - Modern utility-first CSS framework  
✅ **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation  
✅ **SEO Optimized** - Meta tags, structured data (JSON-LD), Open Graph  
✅ **Mobile Hamburger Menu** - Smooth animations and interactions  
✅ **Contact Form** - Real-time validation with FormSpree backend  
✅ **Professional Typography** - Playfair Display + IBM Plex Sans  
✅ **Back-to-Top Button** - Smooth scroll functionality  

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS 4.1** - Utility-first CSS
- **Vanilla JavaScript** - No dependencies
- **FormSpree** - Email backend
- **Google Fonts** - Professional typography

### Build Tools
- Tailwind CLI
- PostCSS
- npm

---

## 📦 Installation

### Prerequisites
- Node.js 14+ and npm

### Setup

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

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run build:css` | Build Tailwind CSS |
| `npm run watch:css` | Watch and rebuild on changes |
| `npm run dev` | Development mode (watch) |

---

## 📁 Structure

```
my-resume/
├── index.html              # Main portfolio
├── contact.html            # Contact page
├── input.css               # Tailwind source
├── styles.css              # Compiled output
├── main.js                 # JavaScript
├── tailwind.config.cjs     # Tailwind config
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies
├── README.md               # Documentation
└── assets/images/          # Images
```

---

## 🎨 Customization

### Content
Edit `index.html` and `contact.html` with your information

### Colors
Update `tailwind.config.cjs`:
```javascript
colors: {
  "dark-bg": "#1a1a1a",
  "dark-text": "#e6e6e6",
}
```

### Fonts
Update Google Fonts import in `input.css` and `tailwind.config.cjs`

---

## 🚀 Deployment

### GitHub Pages
```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

Then enable in repo Settings → Pages

### Other Platforms
- Netlify (drag & drop)
- Vercel (auto-deploy)
- Traditional hosting (FTP/SFTP)

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for forms
- Keyboard navigation support
- Proper color contrast
- Focus indicators
- Alt text for images

---

## 🔍 SEO

- Meta tags (OG, Twitter)
- JSON-LD structured data
- Canonical URLs
- Mobile viewport
- Sitemap-friendly

---

## 📱 Responsive

- Desktop: 1024px+
- Tablet: 768px-1023px
- Mobile: <768px

---

## 📧 Contact Form

Uses **FormSpree** for email backend:

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form ID
3. Update in `main.js`:
   ```javascript
   contactForm.setAttribute('action', 'https://formspree.io/f/YOUR_ID');
   ```

---

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 📝 License

ISC License - Feel free to use as a template

---

## 👤 Author

**DELE-ADELUSI OLUWANISOLA JOSHUA**  
📧 adelusisola@gmail.com  
📱 +234 810 9957 139  
📍 Lagos, Nigeria  

**Links:**
- [LinkedIn](https://www.linkedin.com/in/dele-adelusi-oluwanisola/)
- [GitHub](https://github.com/adelusisola)
- [Twitter](https://x.com/Nisola_Adelusi)

---

## 📚 Resources

- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org/)

**Version:** 1.0.0 | **Updated:** December 2025
