# Foundations

Spacing, shape, breakpoints, motion, and accessibility. All values ship in
`@articulink/brand` (`spacing`, `radius`, `breakpoints`, `motion` exports and
the corresponding CSS).

## Spacing

4px base unit. Scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 px
(Tailwind's default numeric scale).

## Corner radius

Rounded corners are a core part of the friendly feel.

| Name | Value | Typical use |
|---|---|---|
| sm | 2px | Tiny chips |
| default | 4px | — |
| md / lg | 6 / 8px | Small controls |
| xl | 12px | Inputs, small cards |
| 2xl | 16px | Cards, buttons |
| 3xl | 24px | Hero cards, modals |

## Breakpoints

| Name | Width | Target |
|---|---|---|
| sm | 640px | Large phones (landscape), small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops, tablets (landscape) |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## Motion

Motion is gentle and purposeful — it guides attention, it never distracts.

**Durations**

| Token | Value | Use |
|---|---|---|
| instant | 0ms | Color, opacity changes |
| fast | 150ms | Micro-interactions, hovers |
| normal | 300ms | Standard transitions |
| slow | 500ms | Complex animations |
| slower | 700ms | Page transitions |

**Easings**

| Token | Value | Use |
|---|---|---|
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| ease-in | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |
| spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bounces |

The package ships the brand keyframes (`fadeInUp`, `float`, `confetti`, …)
as `.animate-*` utilities, and `css/base.css` disables animation under
`prefers-reduced-motion` — never override that.

## Accessibility

We build for POUR — Perceivable, Operable, Understandable, Robust — to
WCAG 2.1 AA.

- **Contrast:** 4.5:1 for text, 3:1 for large text. See the pairings table
  in [Color](color.md).
- **Focus (WCAG 2.4.7):** every interactive element shows a visible focus
  ring — 2px Tide outline, offset 2px; buttons/links add a soft Tide glow;
  inputs switch the border to Tide. `css/base.css` provides all of this.
- **Reduced motion:** respected globally via `css/base.css`.
- **Screen readers:** use the shipped `.sr-only` utility for visually
  hidden labels.
- **Touch targets:** minimum 44×44px.
