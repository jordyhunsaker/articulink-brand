// GENERATED FILE - do not edit by hand. Source: tokens/tokens.json (`npm run build`).

export interface BrandColors {
  tide: string;
  surf: string;
  abyss: string;
  cloud: string;
  breeze: string;
  mist: string;
  bubble: string;
  lagoon: string;
  depths: string;
  trench: string;
  sunshine: string;
  coral: string;
  sunset: string;
  jellyfish: string;
  kelp: string;
  seafoam: string;
  tideDeep: string;
  sunshineDeep: string;
  mistDeep: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  infoBg: string;
  successBg: string;
  warningBg: string;
  errorBg: string;
  infoText: string;
  successText: string;
  warningText: string;
  errorText: string;
  primary: string;
  primaryDeep: string;
  secondary: string;
  secondaryDeep: string;
  background: string;
  foreground: string;
  textSecondary: string;
  textMuted: string;
  border: string;
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
