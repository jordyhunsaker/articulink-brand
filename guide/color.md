# Color

Our palette is warm, joyful, and trustworthy. It helps us stand out while
remaining approachable. All values ship as CSS variables and JS constants in
`@articulink/brand`.

## Core brand colors

| Token | Hex | Role |
|---|---|---|
| **Tide** | `#037DE4` | The core color of the brand — buttons, links, active states, interactive elements. When in doubt, lean in to Tide. |
| **Surf** | `#1E96FC` | Secondary blue for backgrounds and hover states of Tide elements. |
| **Abyss** | `#012A4D` | Exclusively for typography (headings), and card backgrounds in dark mode. |
| **Cloud** | `#FFFFFF` | Primary background; text on dark backgrounds. |

## Blue scale — "Ocean Journey"

An 8-step scale from sky to midnight depths, for backgrounds, borders, and
text hierarchy:

| Token | Hex | Role |
|---|---|---|
| Cloud | `#FFFFFF` | Primary backgrounds; text on dark surfaces |
| Breeze | `#F7FBFF` | Secondary backgrounds, subtle contrast |
| Mist | `#E4F2FE` | Borders, dividers, card outlines |
| Bubble | `#AFD9FD` | Playful accents, inactive UI. **Never text on light backgrounds** (2.1:1) |
| Lagoon | `#013F74` | Secondary/body text, subtle emphasis |
| Depths | `#01355E` | Borders and card backgrounds in dark mode |
| Abyss | `#012A4D` | Primary typography; dark-mode card backgrounds |
| Trench | `#001C33` | Darkest value — dark-mode page backgrounds only |

## Secondary accents

Use sparingly, for personality and delight — illustrations, highlights,
celebrations. They should feel special.

| Token | Hex | Feel |
|---|---|---|
| Sunshine | `#FCDE1E` | Warmth and joy; highlights and celebrations |
| Coral | `#FC1E96` | Energy and playfulness |
| Sunset | `#FC6F1E` | Warmth; CTA highlights |
| Jellyfish | `#C11EFC` | Magic, special moments |
| Kelp | `#96FC1E` | Natural energy |
| Seafoam | `#1EFCC8` | Calm, refreshing |

Pressed/"deep" companions: Tide Deep `#0369C1`, Sunshine Deep `#D4A90E`,
Mist Deep `#C9DFF5` (used as bottom borders for the 3D button press).

## UI feedback

Semantic colors are universal across all interfaces — never use them
decoratively.

| State | Color | Badge background | Badge text |
|---|---|---|---|
| Info | `#3B82F6` | `#EFF6FF` | `#1D4ED8` |
| Success | `#22C55E` | `#F0FDF4` | `#15803D` |
| Warning | `#F59E0B` | `#FFFBEB` | `#B45309` |
| Error | `#EF4444` | `#FEF2F2` | `#B91C1C` |

## Dark mode

Light mode (Cloud background) is the preferred style; dark mode is offered
as a user preference. Toggle with the `.dark` class.

| Role | Light | Dark |
|---|---|---|
| Page background | Cloud | Trench |
| Secondary background | Breeze | Abyss |
| Card background | Cloud | Abyss |
| Border | Mist | Lagoon |
| Primary text | Abyss | Cloud |
| Secondary text | Lagoon | Breeze |
| Muted text | Bubble | Bubble |
| Primary action | Tide | Tide |
| Accent | Sunshine | Sunshine |

## Contrast & accessibility

All combinations must meet WCAG 2.1 AA: 4.5:1 for normal text, 3:1 for
large text (18px+).

| Pairing | Ratio | Verdict |
|---|---|---|
| Abyss on Cloud | 15.6:1 | ✅ |
| Lagoon on Cloud | 9.2:1 | ✅ |
| Tide on Cloud | 4.5:1 | ✅ |
| Cloud on Tide | 4.5:1 | ✅ |
| Cloud on Abyss | 15.6:1 | ✅ |
| Bubble on Cloud | 2.1:1 | ❌ never |

## Do

- Tide for primary buttons and interactive elements
- Abyss for headings, Lagoon for body text
- Cloud/Breeze backgrounds (preferred style); Mist for borders
- Sunshine sparingly, for accent highlights
- Secondary colors in illustrations and decorative elements
- Semantic UI colors used consistently everywhere
- In dark mode: Cloud headings, Breeze body text

## Don't

- Bright colors (Sunshine, Coral, …) for body text
- Bubble or Mist for text on light backgrounds
- Low-contrast pairs (Surf on Tide, Lagoon on Abyss)
- UI feedback colors for non-semantic purposes
- Lagoon for text in dark mode (insufficient contrast)
- Off-brand colors mixed into the Ocean Journey palette
- Dark mode as the default
