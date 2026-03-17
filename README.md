# my-blog

Personal blog by Artur Gerke — writing about product, AI, and how technology shapes the way we work and live.

## Tech Stack

- [Astro](https://astro.build/) 6 — static site generator
- [Cloudflare Workers](https://workers.cloudflare.com/) — hosting & SSR
- TypeScript
- Markdown with [remark-gfm](https://github.com/remarkjs/remark-gfm) (GitHub Flavored Markdown)

## Getting Started

**Prerequisites:** Node.js >= 22.12.0

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `npm run dev`              | Start local dev server               |
| `npm run build`            | Build to `./dist/`                   |
| `npm run preview`          | Build and preview locally (wrangler) |
| `npm run deploy`           | Build and deploy to Cloudflare       |
| `npm run generate-types`   | Generate Cloudflare worker types     |

## Project Structure

```
src/
├── content/
│   ├── thoughts/       # Blog posts (Markdown)
│   └── noslop/         # Curated collection entries
├── pages/
│   ├── index.astro     # Home
│   ├── bio.astro       # About
│   ├── no-slop.astro   # Curated collection
│   └── thoughts/       # Blog listing & dynamic routes
├── layouts/
│   └── Base.astro      # Main layout
├── styles/
│   └── global.css      # Global styles
└── content.config.ts   # Content collection schemas (Zod)
public/                 # Static assets (images, favicon, headers)
```

## Content

Blog posts live in `src/content/thoughts/` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "A short description."
pubDate: 2026-03-01
---

Your content here.
```

The "No Slop" collection in `src/content/noslop/` is a hand-curated, AI-free set of things worth sharing.

## Deployment

The site deploys to Cloudflare Workers via `wrangler`. Run `npm run deploy` to build and publish.

## License

All rights reserved.
