# UI components

The React component library lives in
[Articulink/design-system](https://github.com/Articulink/design-system)
(Storybook + tests) and installs from GitHub Packages as
`@articulink/design-system`. This page covers what the brand package itself
ships and the shared component vocabulary every Articulink product follows.

## CSS-only classes in `@articulink/brand`

For server-rendered pages, emails, and static HTML where React isn't
available (`css/components.css`):

| Class | What you get |
|---|---|
| `.btn-primary` | Tide button, white text, 4px Tide-Deep bottom border, 3D press |
| `.btn-secondary` | White button, Tide text, Mist border |
| `.btn-accent` | Sunshine button, Abyss text, Sunshine-Deep bottom border |
| `.btn-ghost` | Transparent button, Tide text, Mist border |
| `.btn-sm` / `.btn-lg` | Size modifiers |
| `.btn-3d` | Press effect for custom buttons |
| `.form-input` | Standard input: 2px Mist border, 12px radius, Tide focus ring |
| `.card-depth` / `.card-depth-hover` | Layered Abyss-tinted shadows, hover lift |
| `.animate-*`, `.delay-*` | Brand motion utilities |

Buttons are uppercase, bold, letter-spaced — the signature style. All
states (hover, active/press, focus) are built in.

## Component vocabulary

The shared inventory across Portal, Website, Admin, and the Speech Screener
(what the design system implements):

- **Buttons** — primary, secondary, accent, ghost, icon, pill; states:
  default, hover, active, focus, disabled, loading
- **Forms** — text/email/password/number/date/time inputs, textarea,
  select, checkbox, radio, search; labels with required indicator; error
  (Error red border + message) and focus (Tide ring) states
- **Cards** — basic, stat, feature, pricing, testimonial, appointment,
  therapist/client profile; hover = lift + deeper shadow
- **Navigation** — sticky header, sidebar, mobile drawer, tabs, breadcrumb,
  footer
- **Status & badges** — semantic feedback colors only: Success green,
  Warning amber, Error red, Info blue, neutral gray
- **Overlays** — modal, confirmation, drawer, toast
- **Progress** — spinner, progress bar, step indicator, skeleton shimmer
- **Data** — tables with pagination, lists, empty states, avatars, ratings
- **Decorative** — flat rounded geometric shapes, blobs/glows, wave
  dividers, dot grids, gradient icon badges

## Rules of thumb

- One primary button per view; everything else is secondary or ghost.
- Cards on Cloud with Mist borders and `.card-depth`; no harsh black shadows
  (shadows are Abyss-tinted).
- Status colors are reserved for status.
- Decorative shapes stay behind content, in brand colors, at low opacity.
