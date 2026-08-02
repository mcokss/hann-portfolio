# Hann Chen — AI Web Studio

AI-powered web development studio portfolio built with modern web technologies.

## Overview

A personal web studio portfolio designed for small businesses and entrepreneurs.

The site showcases a website development workflow — from design to deployment — and demonstrates an AI-assisted approach to building modern web experiences.

## Tech Stack

- **Next.js** — App Router and modern rendering patterns
- **React** — Component-based UI development
- **TypeScript** — Strict-mode type safety
- **Tailwind CSS** — Utility-first styling with a custom OKLCH design token system
- **Framer Motion** — Smooth entrance and interaction animations
- **Server Components** — Server-rendered pages with minimal client-side JavaScript where possible
- **Server Actions** — Contact form submission with server-side validation

## Features

- Responsive design — optimized from mobile layouts to desktop experiences
- Dark premium UI system — OKLCH design tokens and Geist font pairing
- AI-assisted development workflow
- SEO optimization — per-page metadata, sitemap, and robots.txt
- Open Graph metadata — social sharing cards for pages
- JSON-LD structured data — WebSite and Person schema
- Accessible navigation — skip link, focus trap, and `aria-current` page indication
- Contact form — server-side validation with success and error states

## Project Structure

```text
src/
 ├ app/         # Routes, layouts, metadata, server actions
 ├ components/  # Reusable UI components
 ├ lib/         # Constants, utilities, animation variants
 └ sections/    # Homepage section components
```

## Requirements

- Node.js 20+
- npm 10+

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to view the application.

## Deployment

Optimized for deployment on [Vercel](https://vercel.com).

The project uses modern Next.js rendering patterns and can also run on other Node.js-compatible hosting providers.

## License

Personal portfolio project.
