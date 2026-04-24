# AGENTS.md

This document provides an overview of the One Five Ltd website project for developers and AI agents working on this codebase.

## Project Overview

A professional corporate website for **One Five Ltd** (onefive.solutions), a Mauritius-based company with two business divisions: IT & Tech Solutions and a Global Education Agency.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility-first, no component library) |
| Forms | Netlify Forms (AJAX submission via fetch) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/
│   └── index.tsx                  # Main homepage route — imports and composes section components
├── components/
│   ├── SiteHeader.tsx              # Fixed top nav with mobile hamburger menu
│   ├── Hero.tsx                    # Full-screen split hero (IT left / Education right)
│   ├── AboutSection.tsx            # About One Five Ltd — stats, values
│   ├── ITDivision.tsx              # IT & Tech Solutions services + process steps
│   ├── EducationDivision.tsx       # Global Education — study-in-MU + study-abroad pathways
│   ├── ContactSection.tsx          # Netlify Forms contact form with inquiry type selector
│   └── SiteFooter.tsx              # Footer: brand, division links, contact CTA
└── styles.css                      # Tailwind import + custom CSS theme variables

public/
└── contact-form.html               # Static HTML form skeleton — required for Netlify Forms build-time registration
```

## Key Architecture Decisions

### Single-page layout
All content lives on a single scrolling homepage (`src/routes/index.tsx`). Navigation anchors (`#about`, `#it-solutions`, `#education`, `#contact`) smooth-scroll between sections.

### Netlify Forms
Forms are submitted via AJAX (`fetch` with `application/x-www-form-urlencoded`). The static skeleton `public/contact-form.html` must exist for Netlify to detect and register the form at build time. **Never submit to `/`** — always submit to `/contact-form.html` (the static file path), as submitting to `/` is intercepted by TanStack Start's SSR catch-all and never reaches Netlify's form processing middleware.

### Color System
- Deep navy: `#0a1628`, `#0f2040`, `#162d55`
- Corporate blue: `#2e5fad`, `#4a7cc7`
- Accent gold (education division): `#c9a84c`, `#d4b96a`
- Slate/muted: `#475569`, `#64748b`, `#94a3b8`
- Background: `#f8fafc` (light grey sections), `#ffffff` (white sections)

Custom theme tokens are defined in `src/styles.css` under `@theme {}`.

### Typography
- Body: Inter (Google Fonts)
- Display/headings: Playfair Display (Google Fonts, serif)
- Fonts loaded via `<link>` tags in `src/routes/__root.tsx` head config (no static `index.html` in TanStack Start SSR).

## Coding Conventions

- **Components**: PascalCase, props typed inline
- **Styling**: Tailwind utility classes directly on JSX; no `cn()` helper (site has low conditional-class complexity)
- **Imports**: `@/` alias maps to `src/`
- **No comments** unless capturing a non-obvious invariant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind imports + CSS custom properties |

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Netlify CLI dev (port 8888, emulates platform features)
npm run build    # Production build
```
