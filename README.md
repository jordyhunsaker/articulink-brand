# @articulink/brand

Articulink's brand guidelines as code: design tokens, ready-to-use CSS, and
logo assets, published to GitHub Packages so every internal Articulink
project consumes the same source of truth.

The human-readable guidelines live in
[articulink-brand-guide](https://github.com/jordyhunsaker/articulink-brand-guide).
The full brand-guide website is
[Articulink/brand](https://github.com/Articulink/brand) (design.articulink.com).

## What's inside

| Path | What it is |
|---|---|
| `tokens/tokens.json` | **Single source of truth** — colors, fonts, type scale, spacing, radii, breakpoints, motion |
| `css/tokens.css` | Generated CSS custom properties (`--tide`, `--abyss`, …) + `.dark` overrides |
| `css/tailwind.css` | Generated Tailwind v4 `@theme` mapping (`bg-tide`, `text-abyss`, `font-display`, …) |
| `css/base.css` | Body/heading typography, WCAG focus states, `.sr-only`, reduced-motion |
| `css/components.css` | CSS-only buttons (`.btn-primary` …), `.form-input`, `.card-depth` for non-React contexts |
| `css/animations.css` | Brand keyframes and `.animate-*` utilities |
| `css/index.css` | Imports all of the above |
| `js/` | Typed JS exports: `colors`, `fonts`, `typeScale`, `breakpoints`, `motion`, … |
| `assets/` | Logo SVGs (Tide, white, Abyss) and favicon — **outlined paths**, no font loading needed |

## Installing

GitHub Packages requires authentication even for public packages. Two one-time steps:

1. Add to the project's `.npmrc`:

   ```ini
   @articulink:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
   ```

2. Provide `NPM_TOKEN`:
   - **Locally**: export a [classic PAT](https://github.com/settings/tokens) with the `read:packages` scope.
   - **GitHub Actions**: `NPM_TOKEN: ${{ secrets.GITHUB_TOKEN }}` works once the
     package grants the repo access (or use an org PAT secret).

Then:

```bash
npm install @articulink/brand
```

## Usage

### Tailwind v4 app (Next.js, Vite)

```css
/* globals.css */
@import "@articulink/brand/css/index.css";
@import "@articulink/brand/css/tailwind.css";
@import "tailwindcss";
```

Now `bg-tide`, `text-abyss`, `border-mist`, `font-display`, `.btn-primary`,
`.card-depth`, `.animate-fade-in-up` etc. all work. Load Poppins/Nunito/Caveat
with `next/font` (or `@font-face`) and expose them as `--font-poppins`,
`--font-nunito`, `--font-caveat` — the theme mapping picks them up.

### Plain CSS / server-rendered pages

```css
@import "@articulink/brand/css/index.css";
```

Or import pieces: `@articulink/brand/css/tokens.css` for variables only.
Toggle dark mode by putting `class="dark"` on `<html>`.

### JavaScript / TypeScript

```ts
import { colors, breakpoints, motion } from "@articulink/brand";

colors.tide;        // "#037DE4"
breakpoints.md;     // 768
motion.duration.fast.value; // "150ms"
```

Fully typed; `tokens` exports the whole token tree including descriptions.

### Logos

```jsx
import logo from "@articulink/brand/assets/logo.svg";
```

- `logo.svg` — Tide wordmark, for light backgrounds
- `logo-white.svg` — for Tide/Abyss/photo backgrounds
- `logo-abyss.svg` — for contexts where Tide doesn't work
- `favicon.svg` — the "a" mark

All wordmarks are Nunito ExtraBold converted to outlines, so they render
identically everywhere — emails, `<img>` tags, PDFs — with no font loading
and no third-party requests (a hard requirement for the clinical platform's
public pages).

Rules: clear space equal to the letters' x-height; minimum width 120px on
screen, 1in (25mm) in print; never stretch, recolor, add effects, or place
on low-contrast/busy backgrounds.

## Editing tokens

1. Edit `tokens/tokens.json` (never the generated files).
2. `npm run build` — regenerates `css/tokens.css`, `css/tailwind.css`, `js/`.
3. `npm test` — validates hexes, refs, generated output, and assets.
4. Commit everything; CI fails on drift between source and generated files.

Never change a token's *meaning*. New color → new name; a rename keeps the
old name as a semantic alias for one major version.

## Publishing a new version

1. Bump `version` in `package.json` (semver: palette/meaning changes are
   **major**, new tokens **minor**, value corrections **patch**).
2. Merge to `main`, then create a GitHub release tagged `v<version>`
   (e.g. `v1.1.0`). The `Publish to GitHub Packages` workflow does the rest.

> **One-time setup**: because this repo lives under a personal account while
> the package scope is `@articulink`, the workflow needs a repository secret
> `GH_PACKAGES_TOKEN` — a classic PAT with `write:packages` created by an
> Articulink org owner. (If the repo is transferred into the Articulink org,
> the built-in `GITHUB_TOKEN` takes over and the secret can be removed.)
