/**
 * BAUER GROUP Brand Guide — Design-token generation
 * --------------------------------------------------
 * Single source of truth: scripts/tokens.json
 *
 * Emits (all generated, never hand-edit):
 *   docs/.vitepress/theme/tokens.css            → the live site :root (imported by style.css)
 *   docs/public/downloads/tokens/bauer-group-tokens.css        (CSS custom properties)
 *   docs/public/downloads/tokens/bauer-group-tokens.scss       (Sass variables + $bg-colors map)
 *   docs/public/downloads/tokens/bauer-group-tokens.json       (design-token data)
 *   docs/public/downloads/tokens/bauer-group-tokens.tailwind.cjs (theme.extend.colors)
 *
 * Because the theme and the downloads are emitted from the SAME data, the site
 * renders literally from the tokens it hands out — structurally drift-free.
 *
 * Usage:  npm run generate:tokens   (runs automatically before dev/build)
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const SRC = join(__dirname, 'tokens.json')
const THEME_DIR = join(ROOT, 'docs', '.vitepress', 'theme')
const OUT_DIR = join(ROOT, 'docs', 'public', 'downloads', 'tokens')

const tokens = JSON.parse(await readFile(SRC, 'utf8'))
const { colors, aliases, print, meta } = tokens
const P = meta.prefix // "bg"

const GEN_NOTE = 'GENERATED from scripts/tokens.json — do not edit by hand. Run `npm run generate:tokens`.'

// ── Helpers ──────────────────────────────────────────────────────
function* eachToken() {
  for (const [family, steps] of Object.entries(colors)) {
    for (const [step, val] of Object.entries(steps)) {
      yield { family, step, ...val }
    }
  }
}

function resolveRef(ref) {
  const i = ref.indexOf('-')
  const v = colors[ref.slice(0, i)]?.[ref.slice(i + 1)]
  if (!v) throw new Error(`Unknown token reference: ${ref}`)
  return v.hex
}

// ── CSS custom properties (shared by theme + download) ───────────
function buildCss() {
  const l = [`/* ${meta.name} — ${GEN_NOTE} */`, ':root {']
  for (const [family, steps] of Object.entries(colors)) {
    l.push(`  /* ${family} */`)
    for (const [step, v] of Object.entries(steps)) {
      l.push(`  --${P}-${family}-${step}: ${v.hex};${v.comment ? ` /* ${v.comment} */` : ''}`)
    }
  }
  l.push('', '  /* semantic role aliases */')
  for (const [role, ref] of Object.entries(aliases)) {
    l.push(`  --${P}-${role}: var(--${P}-${ref});`)
  }
  l.push('', '  /* typography */')
  l.push(`  --${P}-font-body: ${meta.font.body};`)
  l.push(`  --${P}-font-mono: ${meta.font.mono};`)
  l.push('', '  /* parallel OKLCH notation — wide-gamut (P3) displays */')
  for (const t of eachToken()) {
    l.push(`  --${P}-${t.family}-${t.step}-oklch: ${t.oklch};`)
  }
  l.push('}', '')
  return l.join('\n')
}

// ── SCSS variables + Sass colour map ─────────────────────────────
function buildScss() {
  const l = [`// ${meta.name} — ${GEN_NOTE}`, '']
  for (const t of eachToken()) {
    l.push(`$${P}-${t.family}-${t.step}: ${t.hex};${t.comment ? ` // ${t.comment}` : ''}`)
  }
  l.push('', '// semantic role aliases')
  for (const [role, ref] of Object.entries(aliases)) {
    l.push(`$${P}-${role}: $${P}-${ref};`)
  }
  l.push('', '// parallel OKLCH notation')
  for (const t of eachToken()) {
    l.push(`$${P}-${t.family}-${t.step}-oklch: ${t.oklch};`)
  }
  l.push('', '// nested colour map — @use "sass:map"; map.get($bg-colors, "orange", "500")')
  l.push(`$${P}-colors: (`)
  const fams = Object.entries(colors)
  fams.forEach(([family, steps], fi) => {
    const inner = Object.entries(steps).map(([step, v]) => `"${step}": ${v.hex}`).join(', ')
    l.push(`  "${family}": (${inner})${fi < fams.length - 1 ? ',' : ''}`)
  })
  l.push(');', '')
  return l.join('\n')
}

// ── JSON design-token data ───────────────────────────────────────
function buildJson() {
  const color = {}
  for (const [family, steps] of Object.entries(colors)) {
    color[family] = {}
    for (const [step, v] of Object.entries(steps)) {
      color[family][step] = { hex: v.hex, oklch: v.oklch }
    }
  }
  const alias = {}
  for (const [role, ref] of Object.entries(aliases)) {
    alias[role] = { ref, hex: resolveRef(ref) }
  }
  return JSON.stringify(
    { name: meta.name, prefix: P, primary: meta.primary, color, alias, font: meta.font, print },
    null,
    2,
  ) + '\n'
}

// ── Tailwind theme.extend.colors ─────────────────────────────────
function buildTailwind() {
  const l = [
    `/** ${meta.name} — ${GEN_NOTE}`,
    ` *  Usage: const bg = require('./bauer-group-tokens.tailwind.cjs')`,
    ` *  tailwind.config.js → theme: { extend: { colors: bg } }`,
    ` */`,
    'module.exports = {',
  ]
  const fams = Object.entries(colors)
  fams.forEach(([family, steps], fi) => {
    const entries = Object.entries(steps).map(([step, v]) => `    '${step}': '${v.hex}'`)
    // DEFAULT so `bg-orange` / `text-success` resolve to the 500 step
    if (steps['500']) entries.unshift(`    DEFAULT: '${steps['500'].hex}'`)
    l.push(`  ${family}: {`, entries.join(',\n') + ',', `  }${fi < fams.length - 1 ? ',' : ''}`)
  })
  l.push('}', '')
  return l.join('\n')
}

// ── Write ────────────────────────────────────────────────────────
const css = buildCss()
await mkdir(OUT_DIR, { recursive: true })
await Promise.all([
  writeFile(join(THEME_DIR, 'tokens.css'), css),
  writeFile(join(OUT_DIR, 'bauer-group-tokens.css'), css),
  writeFile(join(OUT_DIR, 'bauer-group-tokens.scss'), buildScss()),
  writeFile(join(OUT_DIR, 'bauer-group-tokens.json'), buildJson()),
  writeFile(join(OUT_DIR, 'bauer-group-tokens.tailwind.cjs'), buildTailwind()),
])

const tokenCount = [...eachToken()].length
console.log(`BAUER GROUP · tokens generated — ${tokenCount} colors → tokens.css + 4 download formats`)
