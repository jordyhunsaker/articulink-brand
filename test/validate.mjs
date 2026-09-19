import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

import { tokens, colors, fonts, breakpoints, motion } from "../js/index.mjs";

const require = createRequire(import.meta.url);

const HEX = /^#[0-9A-F]{6}$/;

test("every color token is a valid 6-digit uppercase hex", () => {
  for (const [name, value] of Object.entries(colors)) {
    assert.match(value, HEX, `${name} = ${value}`);
  }
});

test("semantic refs resolve to existing tokens", () => {
  for (const [name, def] of Object.entries(tokens.color.semantic)) {
    if (def.ref) {
      assert.ok(colors[def.ref], `semantic ${name} refs unknown token ${def.ref}`);
      assert.equal(colors[name], colors[def.ref]);
    }
  }
});

test("dark overrides ref existing tokens", () => {
  for (const [name, def] of Object.entries(tokens.dark.overrides)) {
    assert.ok(colors[def.ref], `dark ${name} refs unknown token ${def.ref}`);
  }
});

test("core palette values are locked", () => {
  // These four define the brand; changing one is a major version bump.
  assert.equal(colors.tide, "#037DE4");
  assert.equal(colors.surf, "#1E96FC");
  assert.equal(colors.abyss, "#012A4D");
  assert.equal(colors.cloud, "#FFFFFF");
});

test("cjs and mjs entry points agree", () => {
  const cjs = require("../js/index.cjs");
  assert.deepEqual(cjs.colors, colors);
  assert.deepEqual(cjs.breakpoints, breakpoints);
});

test("generated tokens.css contains every color variable", () => {
  const css = readFileSync(new URL("../css/tokens.css", import.meta.url), "utf8");
  const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  for (const name of Object.keys(colors)) {
    assert.ok(css.includes(`--${kebab(name)}:`), `css/tokens.css missing --${kebab(name)}`);
  }
  assert.ok(css.includes(".dark {"), "dark mode block missing");
});

test("tailwind theme maps every color variable", () => {
  const css = readFileSync(new URL("../css/tailwind.css", import.meta.url), "utf8");
  const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  for (const name of Object.keys(colors)) {
    assert.ok(css.includes(`--color-${kebab(name)}:`), `css/tailwind.css missing --color-${kebab(name)}`);
  }
});

test("fonts carry a family and stack", () => {
  for (const [name, def] of Object.entries(fonts)) {
    assert.ok(def.family, `font ${name} missing family`);
    assert.ok(def.stack.includes(def.family) || name === "mono", `font ${name} stack does not include family`);
  }
});

test("logo assets are self-contained (no external fetches)", () => {
  for (const file of ["logo.svg", "logo-white.svg", "logo-abyss.svg", "favicon.svg"]) {
    const svg = readFileSync(new URL(`../assets/${file}`, import.meta.url), "utf8");
    assert.ok(!/@import|https?:\/\//.test(svg.replace(/xmlns="[^"]*"/g, "")), `${file} references an external resource`);
    assert.ok(svg.includes("<path"), `${file} should be outlined paths, not <text>`);
  }
});

test("motion durations parse as milliseconds", () => {
  for (const [name, def] of Object.entries(motion.duration)) {
    assert.match(def.value, /^\d+ms$/, `duration ${name} = ${def.value}`);
  }
});
