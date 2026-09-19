# Articulink brand guide site

The interactive brand guide deployed at
[design.articulink.com](https://design.articulink.com) — a Next.js +
Tailwind v4 app that renders the brand (color, typography, logo,
foundations, components) as browsable pages.

The written guidelines live in [`../guide/`](../guide/) and the values
themselves come from [`../tokens/tokens.json`](../tokens/tokens.json) —
edit those, not this site, when the brand changes.

## Development

```bash
cd site
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Deployed on Vercel with this repository connected and the project's
**Root Directory** set to `site/`.

`UI_ELEMENTS.md` is the original inventory of UI elements audited across
Articulink projects (Portal, Website, Admin, Speech Screener) that guided
the design system's component set.
