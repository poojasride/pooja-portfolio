# Pooja Sri S — Portfolio

A premium, production-ready developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Dark theme, glassmorphism, smooth animations, fully responsive.

## ✨ Features

- ⚡️ React 18 + Vite (fast dev + optimized build)
- 🎨 Tailwind CSS with a custom dark glassmorphism design system
- 🎬 Framer Motion animations (scroll reveal, animated skill bars, mobile menu)
- 📱 Fully responsive (mobile / tablet / desktop)
- 🧭 Sticky navbar with active section highlighting (scroll-spy)
- 🗂 Project filtering (All / Full-Stack / Frontend)
- 💌 Contact form (frontend UI — wire to your backend or EmailJS / Formspree)
- 🔍 SEO meta tags + Open Graph + Twitter cards
- 🚀 Loading animation + smooth scrolling
- 🧩 Lucide React icons

## 📦 Tech Stack

| Layer       | Tools                                |
| ----------- | ------------------------------------ |
| Framework   | React 18, Vite 5                     |
| Styling     | Tailwind CSS 3                       |
| Animation   | Framer Motion                        |
| Icons       | Lucide React                         |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
pooja-sri-portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── assets/                  # images / static files
│   ├── components/              # reusable UI building blocks
│   │   ├── BackgroundFX.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   └── portfolio.js         # 👈 ALL portfolio content lives here
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── sections/                # page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## ✏️ Customising

All content (name, role, skills, projects, experience, links) is in **`src/data/portfolio.js`** — edit one file and the whole site updates.

To change the colour palette, edit `tailwind.config.js` (`accent.cyan` and `accent.violet`).

## 📤 Deploy

This is a static Vite build — deploy `dist/` to **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

```bash
npm run build
# upload the contents of /dist
```

---

Built with ❤️ by **Pooja Sri S**
