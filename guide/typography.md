# Typography

Three Google fonts plus a system mono stack. Load them in the app (e.g.
`next/font`) and expose them as `--font-nunito`, `--font-poppins`,
`--font-caveat`; the package's Tailwind theme and base styles pick them up.

## Families

| Family | Role | Used for |
|---|---|---|
| **[Nunito](https://fonts.google.com/specimen/Nunito)** | Display | H1–H3, hero text, section and card titles. The logo wordmark is Nunito ExtraBold. |
| **[Poppins](https://fonts.google.com/specimen/Poppins)** | Sans (default) | Body text, UI, H4–H6, captions, links |
| **[Caveat](https://fonts.google.com/specimen/Caveat)** | Handwrite | Eyebrow labels and playful annotations only — never body text |
| SF Mono / Fira Code | Mono | Code snippets |

## Weights

Regular 400 · Medium 500 · Semi Bold 600 · Bold 700 · Extra Bold 800

## Type scale

| Level | Size | Font / weight |
|---|---|---|
| Display | 60px | Nunito Extra Bold |
| Heading 1 | 36px | Nunito Bold |
| Heading 2 | 24px | Nunito Bold |
| Heading 3 | 20px | Poppins Semi Bold |
| Body | 16px | Poppins Regular |
| Small | 14px | Poppins Regular |
| Caption | 12px | Poppins Regular |

## Color pairing

Headings in **Abyss**, body text in **Lagoon**, muted text in the dedicated
muted tone (`--text-muted`, `#5A7FA0`). In dark mode: headings **Cloud**,
body **Breeze**.
