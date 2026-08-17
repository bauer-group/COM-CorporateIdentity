/**
 * BAUER GROUP Brand Guide — Division lockup generation
 * ----------------------------------------------------
 * Builds the two-line division lockups ("BAUER GROUP" over a division name)
 * in both layouts (compact, stacked) and both tones (light, white).
 *
 * The Bildmarke and the wordmark are NEVER redrawn. Their path data is copied
 * byte-for-byte out of the masters in docs/public/brand/ and only translated.
 * Only the division line is new artwork, outlined from a bundled OFL font so
 * the result carries no font dependency and survives Illustrator/Canva/print.
 *
 * Source of truth:  scripts/lockups.json  (+ scripts/tokens.json for colours)
 * Output:           docs/public/brand/lockups/   (git-ignored, never commit)
 *
 * Usage:  npm run generate:lockups          (runs automatically before dev/build)
 *         node scripts/generate-lockups.mjs --check       validate only, write nothing
 *         node scripts/generate-lockups.mjs --only=georgia
 */

import opentype from 'opentype.js'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '..', 'docs', 'public')
const BRAND = join(PUBLIC, 'brand')
const OUT = join(BRAND, 'lockups')

const argv = process.argv.slice(2)
const CHECK_ONLY = argv.includes('--check')
const ONLY = argv.find((a) => a.startsWith('--only='))?.slice(7) ?? null

// ── Measured master geometry ─────────────────────────────────────
// Verified against docs/public/brand/bauer-group-logo-wide.svg with a
// Bezier-accurate bounding box. assertGeometry() re-checks these at run time so
// a re-exported master can never silently shift the lockups.
const M = {
  logoW: 269.94,
  logoH: 59.72,
  icon: { x1: 0, y1: 0.0039, x2: 59.7344, y2: 59.7188 },
  iconB: { y1: 15.6523, y2: 42.582 }, //  X  = height of the "B" in the Bildmarke
  word: { x1: 69.3828, y1: 20.0195, x2: 269.9414, y2: 38.2109 }, // full ink box
  wordCapTop: 20.1797, // flat-topped glyphs (B A U E R) — the true cap line
  wordBaseline: 38.0508,
}
const X = M.iconB.y2 - M.iconB.y1 // 26.930
const C1 = M.wordBaseline - M.wordCapTop // 17.871
const CY = (M.iconB.y1 + M.iconB.y2) / 2 // 29.117 — the wide logo aligns to THIS

const round = (n) => +n.toFixed(4)

// ── Master parsing ───────────────────────────────────────────────
const ICON_GROUP = '<g clip-path="url(#clip-1)">'

/** Split a master into its reusable fragments. Throws if the master changed shape. */
function splitMaster(svg, file) {
  const defsStart = svg.indexOf('<defs>')
  const defsEnd = svg.indexOf('</defs>')
  const iconStart = svg.indexOf(ICON_GROUP)
  const svgEnd = svg.lastIndexOf('</svg>')
  if (defsStart < 0 || defsEnd < 0 || iconStart < 0) {
    throw new Error(
      `${file}: master layout changed (defs/${ICON_GROUP} not found). ` +
        `The lockup generator must be revalidated before it can run.`,
    )
  }
  const clip0Start = svg.indexOf('<clipPath id="clip-0">')
  const clip0End = svg.indexOf('</clipPath>', clip0Start) + 11
  return {
    clip0: svg.slice(clip0Start, clip0End),
    clip1: svg.slice(svg.indexOf('<clipPath id="clip-1">'), svg.indexOf('</clipPath>', svg.indexOf('<clipPath id="clip-1">')) + 11),
    wordmark: svg.slice(defsEnd + 7, iconStart).trim(), // 9 glyphs + the clipped "P"
    icon: svg.slice(iconStart, svgEnd).trim(), // orange diamond + white "B"
  }
}

/** True bbox of an absolute M/L/C/Z path, cubic extrema solved. */
function pathBBox(d) {
  const toks = d.match(/[MLCZ]|-?\d*\.?\d+/g) ?? []
  let i = 0, cur = [0, 0], start = [0, 0], cmd = null
  const bb = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity }
  const add = (x, y) => {
    if (x < bb.x1) bb.x1 = x
    if (x > bb.x2) bb.x2 = x
    if (y < bb.y1) bb.y1 = y
    if (y > bb.y2) bb.y2 = y
  }
  const cubic = (p0, p1, p2, p3) => {
    add(p3[0], p3[1])
    for (let a = 0; a < 2; a++) {
      const A = -p0[a] + 3 * p1[a] - 3 * p2[a] + p3[a]
      const B = 2 * (p0[a] - 2 * p1[a] + p2[a])
      const C = p1[a] - p0[a]
      const roots = []
      if (Math.abs(A) < 1e-12) {
        if (Math.abs(B) > 1e-12) roots.push(-C / B)
      } else {
        const disc = B * B - 4 * A * C
        if (disc >= 0) {
          const s = Math.sqrt(disc)
          roots.push((-B + s) / (2 * A), (-B - s) / (2 * A))
        }
      }
      for (const t of roots) {
        if (t <= 0 || t >= 1) continue
        const u = 1 - t
        const v = u * u * u * p0[a] + 3 * u * u * t * p1[a] + 3 * u * t * t * p2[a] + t * t * t * p3[a]
        if (a === 0) { if (v < bb.x1) bb.x1 = v; if (v > bb.x2) bb.x2 = v }
        else { if (v < bb.y1) bb.y1 = v; if (v > bb.y2) bb.y2 = v }
      }
    }
  }
  while (i < toks.length) {
    if (/[MLCZ]/.test(toks[i])) { cmd = toks[i]; i++ }
    if (cmd === 'M') { cur = [+toks[i++], +toks[i++]]; start = cur; add(cur[0], cur[1]) }
    else if (cmd === 'L') { cur = [+toks[i++], +toks[i++]]; add(cur[0], cur[1]) }
    else if (cmd === 'C') {
      const p1 = [+toks[i++], +toks[i++]], p2 = [+toks[i++], +toks[i++]], p3 = [+toks[i++], +toks[i++]]
      cubic(cur, p1, p2, p3); cur = p3
    } else if (cmd === 'Z') { cur = start } else { i++ }
  }
  return bb
}

/** Every `d="…"` in a document, in order. The leading \s keeps `id="…"` out. */
const pathData = (svg) => [...svg.matchAll(/\sd="([^"]+)"/g)].map((m) => m[1])

/**
 * Guarantees the promise this generator makes: every path from the master
 * survives byte-for-byte, and exactly one new path (the division line) is added.
 */
function assertArtworkIntact(svg, masterSvg, label) {
  const want = pathData(masterSvg)
  const got = new Set(pathData(svg))
  const missing = want.filter((d) => !got.has(d))
  if (missing.length) {
    throw new Error(
      `${label}: ${missing.length} von ${want.length} Master-Pfaden fehlen oder wurden veraendert. ` +
        `Bildmarke und Wortmarke muessen unveraendert uebernommen werden.`,
    )
  }
  const added = pathData(svg).length - want.length
  if (added !== 1) {
    throw new Error(`${label}: ${added} neue Pfade, erwartet genau 1 (die Zusatzzeile).`)
  }
}

function fragmentBBox(fragment) {
  const ds = [...fragment.matchAll(/d="([^"]+)"/g)].map((m) => m[1])
  return ds.map(pathBBox).reduce((a, b) => ({
    x1: Math.min(a.x1, b.x1), y1: Math.min(a.y1, b.y1),
    x2: Math.max(a.x2, b.x2), y2: Math.max(a.y2, b.y2),
  }))
}

/** Fail fast if a master no longer matches the geometry this generator was built on. */
function assertGeometry(parts, file) {
  const checks = [
    ['Wortmarke', fragmentBBox(parts.wordmark), M.word],
    ['Bildmarke', fragmentBBox(parts.icon), M.icon],
  ]
  for (const [label, got, want] of checks) {
    for (const k of ['x1', 'y1', 'x2', 'y2']) {
      if (Math.abs(got[k] - want[k]) > 0.01) {
        throw new Error(
          `${file}: ${label} ${k} = ${got[k].toFixed(4)}, erwartet ${want[k]}. ` +
            `Der Master wurde neu exportiert — Lockup-Geometrie in scripts/generate-lockups.mjs pruefen.`,
        )
      }
    }
  }
}

// ── Division line outlining ──────────────────────────────────────
function makeTypesetter(font, capTarget, trackingEm) {
  const upm = font.unitsPerEm
  const capRatio = font.tables.os2.sCapHeight / upm
  const size = capTarget / capRatio

  // charToGlyph() bypasses stringToGlyphs()'s GSUB/ccmp shaping, which
  // opentype.js cannot parse for Inter (unsupported lookupType 6 substFormat 2).
  const outline = (text, dx = 0, dy = 0) => {
    const path = new opentype.Path()
    let pen = dx
    for (const ch of text) {
      const g = font.charToGlyph(ch)
      if (!g || g.index === 0) {
        throw new Error(`Zeichen "${ch}" (U+${ch.codePointAt(0).toString(16).toUpperCase()}) fehlt in der Schrift.`)
      }
      path.extend(g.getPath(pen, dy, size))
      pen += (g.advanceWidth / upm) * size + trackingEm * size
    }
    return { path, bbox: path.getBoundingBox() }
  }

  // Round-glyph overshoot, measured once so every division shares one viewBox.
  const o = outline('OQ').bbox
  const overshootBelow = Math.max(0, o.y2)
  const overshootAbove = Math.max(0, -o.y1 - capTarget)

  return { size, capRatio, outline, overshootAbove, overshootBelow }
}

// ── SVG composition ──────────────────────────────────────────────
function buildSvg({ layout, parts, divisionPath, divisionColor, width, height, ids }) {
  const g = M // shorthand
  const defs = layout === 'compact'
    ? `${parts.clip0}\n${parts.clip1}`
    : `${parts.clip0}\n${parts.clip1}`
  const scopedDefs = defs
    .replaceAll('id="clip-0"', `id="${ids.c0}"`)
    .replaceAll('id="clip-1"', `id="${ids.c1}"`)
  const scoped = (s) => s.replaceAll('url(#clip-0)', `url(#${ids.c0})`).replaceAll('url(#clip-1)', `url(#${ids.c1})`)

  const body = layout === 'compact'
    ? [
        scoped(parts.icon),
        `<g transform="translate(0 ${round(LAYOUT.compact.wordDy)})">`,
        scoped(parts.wordmark),
        `</g>`,
        divisionPath,
      ]
    : [
        scoped(parts.icon),
        scoped(parts.wordmark),
        `<rect x="0" y="${round(LAYOUT.stacked.ruleTop)}" width="${round(width)}" height="${round(LAYOUT.stacked.ruleH)}" fill="${divisionColor}"/>`,
        divisionPath,
      ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- BAUER GROUP Lockup — GENERATED from scripts/lockups.json. Do not edit by hand.
     Run \`npm run generate:lockups\`. Bildmarke und Wortmarke sind byte-identisch
     aus docs/public/brand/ uebernommen; nur die Zusatzzeile ist neues Artwork. -->
<svg xmlns="http://www.w3.org/2000/svg" width="${round(width * 4)}" height="${round(height * 4)}" viewBox="0 0 ${round(width)} ${round(height)}">
<defs>
${scopedDefs}
</defs>
${body.filter(Boolean).join('\n')}
</svg>
`
}

// ── Derived layout constants ─────────────────────────────────────
let LAYOUT

function computeLayout(geo) {
  const C2 = geo.divisionCapRatio * X
  const capGap = geo.capGapRatio * X
  const leading = capGap + C2
  const blockH = C1 + leading
  const line1CapTop = CY - blockH / 2
  const b1 = line1CapTop + C1
  const b2 = b1 + leading

  const gapA = geo.stacked.gapRatio * X
  const ruleH = geo.stacked.ruleRatio * X
  const ruleTop = M.logoH + gapA
  const stackedCapTop = ruleTop + ruleH + gapA

  return {
    C2,
    compact: { wordDy: b1 - M.wordBaseline, baseline: b2, left: M.word.x1 },
    stacked: { ruleTop, ruleH, baseline: stackedCapTop + C2, left: 0 },
  }
}

// ── Main ─────────────────────────────────────────────────────────
async function main() {
  const cfg = JSON.parse(await readFile(join(__dirname, 'lockups.json'), 'utf8'))
  const tokens = JSON.parse(await readFile(join(__dirname, 'tokens.json'), 'utf8'))
  const geo = cfg.meta.geometry
  LAYOUT = computeLayout(geo)

  const colorOf = (ref) => {
    const [family, step] = ref.split('-')
    const hex = tokens.colors?.[family]?.[step]?.hex
    if (!hex) throw new Error(`Farbtoken "${ref}" nicht in scripts/tokens.json gefunden.`)
    return hex
  }
  const TONES = {
    '': { master: 'bauer-group-logo-wide.svg', color: colorOf(cfg.meta.colors.divisionLight) },
    '-white': { master: 'bauer-group-logo-wide-white.svg', color: colorOf(cfg.meta.colors.divisionDark) },
  }

  console.log('BAUER GROUP · generating division lockups …')

  // Parse + validate both masters before writing anything.
  const masters = {}
  const masterSvgs = {}
  for (const [tone, t] of Object.entries(TONES)) {
    const svg = await readFile(join(BRAND, t.master), 'utf8')
    const parts = splitMaster(svg, t.master)
    assertGeometry(parts, t.master)
    masters[tone] = parts
    masterSvgs[tone] = svg
  }
  console.log(`  ✓ Master validiert  (X = ${round(X)}, C1 = ${round(C1)}, cy = ${round(CY)})`)

  const font = opentype.parse((await readFile(join(__dirname, cfg.meta.font.file))).buffer)
  const type = makeTypesetter(font, LAYOUT.C2, geo.trackingEm)
  console.log(
    `  ✓ Schrift ${cfg.meta.font.family} ${cfg.meta.font.subfamily}` +
      `  cap ${type.capRatio.toFixed(6)} em → font-size ${round(type.size)}`,
  )

  const divisions = cfg.divisions.filter((d) => !ONLY || d.slug === ONLY)
  if (ONLY && !divisions.length) throw new Error(`Kein Geschaeftsbereich mit slug "${ONLY}" in lockups.json.`)

  const files = []
  const meta = []

  for (const d of divisions) {
    const label = d.label ?? (geo.case === 'upper' ? d.name.toUpperCase() : d.name)
    const { bbox } = type.outline(label)
    const inkW = bbox.x2 - bbox.x1

    // The division line must never be wider than the wordmark it sits under.
    if (inkW > M.word.x2 - M.word.x1) {
      throw new Error(
        `"${label}" ist ${round(inkW)} breit, die Wortmarke misst ${round(M.word.x2 - M.word.x1)}. ` +
          `Kuerzere Bezeichnung waehlen oder divisionCapRatio senken.`,
      )
    }

    const entry = { slug: d.slug, name: d.name, nameEn: d.nameEn ?? d.name, label }

    for (const layout of ['compact', 'stacked']) {
      const L = LAYOUT[layout]
      const width = layout === 'compact'
        ? Math.max(M.logoW, L.left + inkW)
        : Math.max(M.logoW, inkW)
      const height = layout === 'compact'
        ? M.logoH
        : L.baseline + type.overshootBelow

      entry[layout] = { width: round(width), height: round(height) }

      for (const [tone, t] of Object.entries(TONES)) {
        // Re-outline into this frame: ink left edge flush to L.left, baseline on L.baseline.
        const { path } = type.outline(label, L.left - bbox.x1, L.baseline)
        const divisionPath = `<path fill-rule="nonzero" fill="${t.color}" d="${path.toPathData(4)}"/>`

        const name = `bauer-group-lockup-${d.slug}-${layout}${tone}`
        const svg = buildSvg({
          layout,
          parts: masters[tone],
          divisionPath,
          divisionColor: t.color,
          width,
          height,
          ids: { c0: `bg-${d.slug}-${layout}${tone}-c0`, c1: `bg-${d.slug}-${layout}${tone}-c1` },
        })

        assertArtworkIntact(svg, masterSvgs[tone], `${name}.svg`)

        if (!CHECK_ONLY) await writeFile(join(OUT, `${name}.svg`), svg, 'utf8')
        files.push({ src: `brand/lockups/${name}.svg`, name, sizes: cfg.meta.png.sizes })
      }
      console.log(`  ✓ ${d.slug}/${layout}  ${round(width)} × ${round(height)}  (Zusatzzeile ${round(inkW)} breit)`)
    }
    meta.push(entry)
  }

  if (CHECK_ONLY) {
    console.log('\n--check: alles valide, nichts geschrieben.')
    return
  }

  await writeFile(
    join(OUT, 'index.json'),
    JSON.stringify(
      {
        $comment: 'GENERATED from scripts/lockups.json — do not edit by hand.',
        geometry: {
          X: round(X), wordmarkCap: round(C1), divisionCap: round(LAYOUT.C2),
          fontSize: round(type.size), trackingEm: geo.trackingEm,
        },
        divisions: meta,
        files,
      },
      null,
      2,
    ) + '\n',
    'utf8',
  )

  console.log(`\nDone. ${files.length} Lockup-SVGs für ${meta.length} Geschäftsbereich(e).`)
}

// Rebuild the output directory so removed divisions cannot leave stale files behind.
if (!CHECK_ONLY) {
  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })
}

main().catch((err) => {
  console.error('\nLockup generation failed:', err.message)
  process.exit(1)
})
