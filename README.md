# Hann Chen — AI Web Studio

AI-powered web development studio portfolio built with modern web technologies.

## Overview

A personal web studio portfolio designed for small businesses and entrepreneurs. The site showcases a website development workflow — from design to deployment — and serves as the primary presence for my AI-assisted web development services.

## Tech Stack

- **Next.js** — App Router, React Server Components
- **React** — UI runtime
- **TypeScript** — strict-mode type safety
- **Tailwind CSS** — utility-first styling with a custom OKLCH design token system
- **Framer Motion** — entrance and hover animations
- **Server Components** — static pages with zero client-side JavaScript where possible
- **Server Actions** — contact form submission with validation

## Features

- Responsive design — single-column mobile through three-column desktop
- Dark premium UI system — OKLCH design tokens, Geist font pairing
- AI-assisted development workflow
- SEO optimization — per-page metadata, sitemap, robots.txt
- Open Graph metadata — social sharing cards for every page
- JSON-LD structured data — WebSite and Person schema
- Accessible navigation — skip link, focus trap, `aria-current` page indication
- Contact form — server-side validation with success and error states

## Project Structure

```
src/
 ├ app/         # Routes, layouts, metadata, server actions
 ├ components/  # Reusable UI components
 ├ lib/         # Constants, utilities, animation variants
 └ sections/    # Homepage section components
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Optimized for deployment on [Vercel](https://vercel.com). The project builds fully static pages, so it works with any Node.js-compatible hosting provider that supports Next.js.

## License

Personal portfolio project.
