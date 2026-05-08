# Biocubes

A refactored fork of [Biocubes](https://biocubes.net) — a 3D scrollytelling visualization comparing the relative scales of **biomass** and **technomass** on Earth.

The original site and concept are by Brice Ménard (Johns Hopkins) and Nikita Shtarkman; the original repo lives at https://github.com/nikitash98/biomass.

This fork is a refactor focused on:
- **Vite migration** — replacing the deprecated Create React App scaffolding with Vite 5 for faster dev/build cycles.
- **Repo hygiene** — pruning dead config (Netlify, default test files, unused legacy assets), customizing the PWA manifest, and adding a sitemap.
- **Asset optimization** — dropping production sourcemaps, preloading the hero glTF model, preconnecting to font hosts.
- **Accessibility & i18n improvements** — better `<noscript>` fallback, JSON-LD structured data, canonical URL, and continued five-language translation (en / es / fr / pt / zh).

## Tech

- **Vite 5** (build tool)
- **React 18** with `createRoot`
- **react-three-fiber 8** + **three.js** (3D rendering)
- **@react-three/drei** and **@react-three/postprocessing** (helpers + post-FX)
- **@react-spring/three** (animation)
- **react-i18next** (internationalization)
- **semantic-ui-react** (UI primitives)

## Quick start

```bash
npm install
npm run dev       # local dev server on http://localhost:3000
npm run build     # production build to dist/
npm run preview   # preview the built bundle locally
```

## Deploy

The site is hosted on **GitHub Pages** at the apex domain `biocubes.net`. To deploy:

```bash
npm run deploy
```

This runs `vite build` and pushes `dist/` to the `gh-pages` branch.

## License

Refactor changes © 2026 contributors. See the original repo for the upstream license.
