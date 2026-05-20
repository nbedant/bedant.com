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

Essays are longer reflective pieces. Create a Markdown file in `src/content/essays/`.

```md
---
title: "Why Care Changes the Room"
description: "A one-sentence summary of the essay."
date: 2026-05-20
type: essay
tags: ["care", "medicine", "psychology"]
draft: false
---

Write the essay here.
```

The filename becomes the URL slug. For example, `a-careful-title.md` becomes `/essays/a-careful-title/`.

## Add a Note

Notes are shorter and more flexible. Create a Markdown file in `src/content/notes/`.

### Reading Note

```md
---
title: "On a Passage from The Death of Ivan Ilyich"
description: "A short note on illness, attention, and being believed."
date: 2026-05-20
type: reading
tags: ["books", "grief", "attention"]
draft: false
---

Write the reading note here.
```

### Research Note

```md
---
title: "Stress Biology and Anticipatory Grief"
description: "Notes from a paper that might become a longer essay."
date: 2026-05-20
type: research
tags: ["stress biology", "caregiving", "research"]
draft: false
---

Write the research note here. Include citations or links in the body when useful.
```

### Fragment

```md
---
title: "The Waiting Room as a Kind of Weather"
description: "A brief image or unfinished thought."
date: 2026-05-20
type: fragment
tags: ["medicine", "place"]
draft: false
---

Write the fragment here.
```

## Frontmatter Fields

Use these fields at the top of each Markdown file:

- `title`: the title shown on archive and reading pages
- `description`: a short summary
- `date`: publish date in `YYYY-MM-DD` format
- `type`: optional, useful values are `essay`, `reading`, `research`, `fragment`, or `reflection`
- `tags`: optional list of topics
- `draft`: set to `true` to hide a piece from the site until it is ready

Older posts may use `pubDate`; new posts should use `date`.

## Check Before Publishing

Run:

```bash
npm run build
```

If the build passes, the post is valid and ready to commit.

## Deploy

Deployment is configured in `.github/workflows/deploy.yml`.

After the repository is configured for GitHub Pages with **GitHub Actions** as the source, every push to `main` will:

1. install dependencies with `npm install`
2. build the Astro site with `npm run build`
3. publish the `dist/` folder to GitHub Pages

The site is configured for the custom domain `https://bedant.com/` through `public/CNAME`.
