# Zafrid Radiance — Website

A premium, institutional single-page site (Qatar Foundation–style) for **Zafrid Radiance**,
built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Sections

Hero → The Challenge (Vision) → Our Approach → Impact → Our Work → About → Contact → Footer.

## Run locally

```bash
npm install      # already done by the scaffold
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All copy, links, stats, and image URLs live in a single file:

> **`src/lib/content.ts`**

Edit text there and the whole site updates — no component changes needed.
Replace the Unsplash placeholder image URLs with your own assets (drop files in
`public/` and reference them as `/your-image.jpg`).

## Design tokens

Colors and fonts are defined as Tailwind v4 theme tokens in
**`src/app/globals.css`** (`@theme { ... }`). Adjust the palette (`--color-ink`,
`--color-gold`, `--color-ivory`, …) in one place to re-skin the site.

## Structure

```
src/
  app/
    layout.tsx        # fonts (Cormorant + Inter), metadata
    page.tsx          # composes all sections
    globals.css       # design tokens, utilities, animations
  components/          # Hero, Problem, Solution, Impact, Work, About, Contact, Footer
                       # + Navbar, Reveal (scroll animation), SectionHeading
  lib/
    content.ts         # ← all editable content
```

## Deploy to Vercel

1. Push this `web/` folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Set the **Root Directory** to `web` (if the repo root is the project folder).
4. Framework preset auto-detects **Next.js** — no extra config needed. Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```

## Notes

- The contact form is a front-end demo. Wire it to an email service
  (e.g. Resend, Formspree) or a Server Action to receive real submissions.
- Animations respect `prefers-reduced-motion`.
