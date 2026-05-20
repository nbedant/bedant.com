# bedant.com

Personal writing site for Bedant and the project **Between Body and Meaning**.

Built with Astro as a static website for GitHub Pages. Essays and notes live as Markdown files in content collections.

## Local Development

```bash
npm install
npm run dev
```

The development server will print a local URL, usually `http://localhost:4321/`.

## Build

```bash
npm run build
```

The static site is generated into `dist/`.

## Add an Essay

Create a Markdown file in `src/content/essays/`:

```md
---
title: "Essay Title"
description: "A one-sentence summary."
pubDate: 2026-05-19
draft: false
---

Write the essay here.
```

The filename becomes the URL slug. For example, `a-careful-title.md` becomes `/essays/a-careful-title/`.

## Add a Note

Create a Markdown file in `src/content/notes/` using the same frontmatter:

```md
---
title: "Note Title"
description: "A one-sentence summary."
pubDate: 2026-05-19
draft: false
---

Write the note here.
```

## Deploy

Deployment is configured in `.github/workflows/deploy.yml`.

After the repository is configured for GitHub Pages with **GitHub Actions** as the source, every push to `main` will:

1. install dependencies with `npm install`
2. build the Astro site with `npm run build`
3. publish the `dist/` folder to GitHub Pages

The site is configured for the custom domain `https://bedant.com/` through `public/CNAME`.
