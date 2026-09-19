/**
 * Generates css/tokens.css, css/tailwind.css, js/index.mjs, js/index.cjs and
 * js/index.d.ts from tokens/tokens.json. Generated files are committed;
 * `npm run check` fails CI when they drift from the source.
 *
 * Usage: node scripts/build.mjs [--check]
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const tokens = JSON.parse(readFileSync(path.join(root, "tokens", "tokens.json"), "utf8"));

const BANNER = `/* GENERATED FILE - do not edit by hand.
 * Source of truth: tokens/tokens.json. Regenerate with \`npm run build\`.
 */`;

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// Flat map of every color var: name -> { cssVar, value | varRef }
function collectColorVars() {
  const groups = [
    ["Core Brand Colors", tokens.color.core],
    ["Blue Scale (Ocean Journey)", tokens.color.blueScale],
    ["Secondary Accent Colors", tokens.color.accent],
    ["Pressed/Deep State Colors", tokens.color.pressed],
    ["UI Feedback Colors", tokens.color.feedback],
    ["Status Badge Backgrounds", tokens.color.feedbackBg],
    ["Status Badge Text", tokens.color.feedbackText],
    ["Semantic Aliases", tokens.color.semantic],
  ];
  const vars = [];
  for (const [comment, group] of groups) {
    for (const [name, def] of Object.entries(group)) {
      vars.push({
        group: comment,
        name,
        cssVar: `--${kebab(name)}`,
        value: def.value ?? null,
        ref: def.ref ? `--${kebab(def.ref)}` : null,
      });
    }
  }
  return vars;
}

function buildTokensCss() {
  const vars = collectColorVars();
  let out = `${BANNER}\n\n:root {\n`;
  let lastGroup = null;
  for (const v of vars) {
    if (v.group !== lastGroup) {
      if (lastGroup !== null) out += "\n";
      out += `  /* ${v.group} */\n`;
      lastGroup = v.group;
    }
    out += `  ${v.cssVar}: ${v.ref ? `var(${v.ref})` : v.value};\n`;
  }
  out += "\n  /* Motion */\n";
  for (const [name, def] of Object.entries(tokens.motion.duration)) {
    out += `  --duration-${kebab(name)}: ${def.value};\n`;
  }
  for (const [name, def] of Object.entries(tokens.motion.easing)) {
    out += `  --${kebab(name)}: ${def.value};\n`;
  }
  out += "}\n";

  out += `\n/* Dark mode: ${tokens.dark.description} */\n.dark {\n`;
  for (const [name, def] of Object.entries(tokens.dark.overrides)) {
    out += `  --${kebab(name)}: ${def.ref ? `var(--${kebab(def.ref)})` : def.value};\n`;
  }
  out += "}\n";
  return out;
}

function buildTailwindCss() {
  const vars = collectColorVars();
  let out = `${BANNER}\n
/* Tailwind v4 theme mapping. Import AFTER tokens.css:
 *
 *   @import "@articulink/brand/css/tokens.css";
 *   @import "@articulink/brand/css/tailwind.css";
 *
 * Exposes every token as a Tailwind color (bg-tide, text-abyss, border-mist, ...)
 * and the brand font families (font-sans, font-display, font-handwrite).
 */

@theme inline {\n`;
  let lastGroup = null;
  for (const v of vars) {
    if (v.group !== lastGroup) {
      if (lastGroup !== null) out += "\n";
      out += `  /* ${v.group} */\n`;
      lastGroup = v.group;
    }
    out += `  --color-${kebab(v.name)}: var(${v.cssVar});\n`;
  }
  out += `
  /* Legacy aliases (kept for gradual migration; prefer the token names) */
  --color-brand-blue: var(--surf);
  --color-brand-yellow: var(--sunshine);
  --color-brand-navy: var(--abyss);
  --color-brand-light: var(--mist);
  --color-bg-card: var(--cloud);

  /* Typography (font CSS vars are injected by the app, e.g. next/font) */
  --font-sans: var(${tokens.font.sans.cssVar});
  --font-display: var(${tokens.font.display.cssVar});
  --font-handwrite: var(${tokens.font.handwrite.cssVar});
}
`;
  return out;
}

function flatColors() {
  const flat = {};
  const all = {
    ...tokens.color.core,
    ...tokens.color.blueScale,
    ...tokens.color.accent,
    ...tokens.color.pressed,
    ...tokens.color.feedback,
    ...tokens.color.feedbackBg,
    ...tokens.color.feedbackText,
  };
  for (const [name, def] of Object.entries(all)) flat[name] = def.value;
  for (const [name, def] of Object.entries(tokens.color.semantic)) {
    flat[name] = def.value ?? all[def.ref].value;
  }
  return flat;
}

function buildJs() {
  const data = {
    tokens,
    colors: flatColors(),
    fonts: tokens.font,
    fontWeights: tokens.fontWeight,
    typeScale: tokens.typeScale,
    spacing: tokens.spacing,
    radius: tokens.radius,
    breakpoints: tokens.breakpoints,
    motion: tokens.motion,
  };
  const jsBanner = "// GENERATED FILE - do not edit by hand. Source: tokens/tokens.json (`npm run build`).\n";
  const entries = Object.entries(data).map(([k, v]) => [k, JSON.stringify(v, null, 2)]);

  const mjs =
    jsBanner +
    entries.map(([k, v]) => `export const ${k} = ${v};\n`).join("\n") +
    `\nexport default { ${Object.keys(data).join(", ")} };\n`;

  const cjs =
    jsBanner +
    entries.map(([k, v]) => `const ${k} = ${v};\n`).join("\n") +
    `\nmodule.exports = { ${Object.keys(data).join(", ")} };\n`;

  const colorKeys = Object.keys(flatColors())
    .map((k) => `  ${k}: string;`)
    .join("\n");
  const dts = `${jsBanner}
export interface BrandColors {
${colorKeys}
}

export interface FontDef {
  family: string;
  stack: string;
  cssVar: string | null;
  source: string | null;
  usage: string;
}

export interface TypeScaleStep {
  name: string;
  sizePx: number;
  font: "display" | "sans" | "handwrite" | "mono";
  weight: "regular" | "medium" | "semibold" | "bold" | "extrabold";
}

export declare const tokens: typeof import("../tokens/tokens.json");
export declare const colors: BrandColors;
export declare const fonts: Record<"display" | "sans" | "handwrite" | "mono", FontDef>;
export declare const fontWeights: Record<"regular" | "medium" | "semibold" | "bold" | "extrabold", number>;
export declare const typeScale: TypeScaleStep[];
export declare const spacing: { basePx: number; scalePx: number[] };
export declare const radius: Record<string, string>;
export declare const breakpoints: Record<"sm" | "md" | "lg" | "xl" | "2xl", number>;
export declare const motion: {
  duration: Record<string, { value: string; usage: string }>;
  easing: Record<string, { value: string; usage: string }>;
};

declare const _default: {
  tokens: typeof tokens;
  colors: BrandColors;
  fonts: typeof fonts;
  fontWeights: typeof fontWeights;
  typeScale: TypeScaleStep[];
  spacing: typeof spacing;
  radius: typeof radius;
  breakpoints: typeof breakpoints;
  motion: typeof motion;
};
export default _default;
`;
  return { mjs, cjs, dts };
}

const outputs = {
  "css/tokens.css": buildTokensCss(),
  "css/tailwind.css": buildTailwindCss(),
  ...(() => {
    const { mjs, cjs, dts } = buildJs();
    return { "js/index.mjs": mjs, "js/index.cjs": cjs, "js/index.d.ts": dts };
  })(),
};

const check = process.argv.includes("--check");
let drift = false;
for (const [rel, content] of Object.entries(outputs)) {
  const file = path.join(root, rel);
  if (check) {
    const current = existsSync(file) ? readFileSync(file, "utf8") : "";
    if (current !== content) {
      console.error(`DRIFT: ${rel} is stale. Run \`npm run build\` and commit the result.`);
      drift = true;
    }
  } else {
    writeFileSync(file, content);
    console.log(`wrote ${rel}`);
  }
}
if (check) {
  if (drift) process.exit(1);
  console.log("generated files are up to date");
}
