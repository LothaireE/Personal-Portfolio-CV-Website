# Portfolio CV – QA & Project Leader

## Overview

Single-page portfolio and CV.  
Minimalist, editorial design with smooth animations and responsive layout.

Designed as a reusable component system
Built as a reusable component system, designed under specific client constraints and requirements.

---

## Tech Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- React Router v7
- Lucide React
- next-themes

---

## Pages

### / (Home)

- Full-screen hero
- Experience summary
- Skills and certifications

### /about

- Biography
- Experience timeline
- Education timeline

### /contact

- Contact form
- Contact information

### \*

- 404 page

---

## Architecture

- Component-based structure
- Single data source:  
  `src/data/profile.ts`
- Content-driven UI (no hardcoded data in components)

---

## Internationalization

- Language switch: English / French
- JSON-based translations:  
   `src/locales/fr.json`  
   `src/locales/en.json`
- Global language context (React Context)
- All UI text is translation-driven
- Easily extendable to additional languages with minimal changes due to the JSON structure

---

## Design System

- CSS variables (HSL)

### Semantic tokens

- `--background`
- `--foreground`
- `--primary`
- `--muted`
- `--accent`
- `--border`

- Light / dark mode
- Minimal typography and spacing

---

## Features

- Code-splitting (React.lazy + Suspense)
- Page transitions (Framer Motion)
- Scroll-reveal animations
- Responsive layout
- Scroll-aware header
- SEO per page
- Error boundary

---

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Assets

- Portrait image (PNG, ~500x500)
