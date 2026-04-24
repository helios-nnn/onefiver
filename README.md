# One Five Ltd — onefive.solutions

Professional business website for **One Five Ltd**, a Mauritius-based firm operating across two distinct divisions:

- **IT & Tech Solutions** — Supply of enterprise IT hardware (PCs, laptops, servers), hardware consultancy, and detailed technical inventory reporting.
- **Global Education Agency** — International student placements into Mauritius and Mauritian student placements at universities abroad.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. The Netlify CLI wraps it at port `8888` for full platform feature emulation:

```bash
netlify dev
```

> **Note:** Netlify Forms do not process submissions in local dev — they only work on Netlify deploys.

## Project Structure

```
src/
├── routes/
│   └── index.tsx          # Homepage (composes all section components)
├── components/
│   ├── SiteHeader.tsx      # Fixed navigation header
│   ├── Hero.tsx            # Split-screen hero for both divisions
│   ├── AboutSection.tsx    # Company overview + values
│   ├── ITDivision.tsx      # IT & Tech Solutions section
│   ├── EducationDivision.tsx # Global Education Agency section
│   ├── ContactSection.tsx  # Contact form (Netlify Forms)
│   └── SiteFooter.tsx      # Footer with links and contact info
public/
└── contact-form.html       # Static form skeleton for Netlify build-time detection
```
