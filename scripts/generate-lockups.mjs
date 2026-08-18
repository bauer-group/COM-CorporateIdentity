/**
 * BAUER GROUP Brand Guide — Lockup generation
 * -------------------------------------------
 * Builds the two generated lockup families, each in both tones (light, white):
 *
 *   division  Bildmarke left, "BAUER GROUP" over the division name right.
 *             Same bounding box as the wide logo — a drop-in replacement.
 *
 *   tagline   The complete wide logo, with a brand tagline set flush left
 *             underneath it, sharing the Bildmarke's left edge. No rule: the
 *             shared left edge and a gap of exactly one cap height carry the
 *             relationship. The tagline uses the wordmark's own ink colour,
 *             because it is the smallest type in the system and therefore gets
 *             the highest contrast.
 *
 * The Bildmarke and the wordmark are NEVER redrawn. Their path data is copied
 * byte-for-byte out of the masters in docs/public/brand/ and only translated.
 * Only the added line is new artwork, outlined from a bundled OFL font so
 * the result carries no font dependency and survives Illustrator/Canva/print.
 *
 * Source of truth:  scripts/lockups.json  (+ scripts/tokens.json for colours)
 * Output:           docs/public/brand/lockups/   (git-ignored, never commit)
 *
 * Usage:  npm run generate:lockups          (runs automatically before dev/build)
 *         node scripts/generate-lockups.mjs --check       validate only, write nothing
 *         node scripts/generate-lockups.mjs --only=compliance
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

/**
 * The wordmark's own ink colour, straight out of the master.
 * Taking it from the artwork rather than from a token guarantees the tagline
 * line matches the wordmark exactly, even after the master is re-exported.
 */
function wordmarkFill(fragment, file) {
  const fills = [...new Set([...fragment.matchAll(/fill="([^"]+)"/g)].map((m) => m[1]))]
  if (fills.length !== 1) {
    throw new Error(
      `${file}: Wortmarke traegt ${fills.length} verschiedene Farben (${fills.join(', ')}), erwartet genau eine. ` +
        `Die Tagline-Zeile kann ihre Farbe dann nicht eindeutig aus dem Master uebernehmen.`,
    )
  }
  return fills[0]
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
 * survives byte-for-byte, and exactly one new path (the added line) is added.
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

// ── Line outlining ───────────────────────────────────────────────
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

  // Round-glyph overshoot, measured once so every line of this size shares one viewBox.
  const o = outline('OQ').bbox
  const overshootBelow = Math.max(0, o.y2)
  const overshootAbove = Math.max(0, -o.y1 - capTarget)

  return { size, capRatio, outline, overshootAbove, overshootBelow }
}

// ── SVG composition ──────────────────────────────────────────────
function buildSvg({ family, parts, linePath, rule, width, height, ids }) {
  const scopedDefs = `${parts.clip0}\n${parts.clip1}`
    .replaceAll('id="clip-0"', `id="${ids.c0}"`)
    .replaceAll('id="clip-1"', `id="${ids.c1}"`)
  const scoped = (s) => s.replaceAll('url(#clip-0)', `url(#${ids.c0})`).replaceAll('url(#clip-1)', `url(#${ids.c1})`)

  // division: the wordmark shifts up to make room for the second line.
  // tagline:  the wide logo is used exactly as it is, the line hangs below it.
  const body = family === 'division'
    ? [
        scoped(parts.icon),
        `<g transform="translate(0 ${round(LAYOUT.division.wordDy)})">`,
        scoped(parts.wordmark),
        `</g>`,
        linePath,
      ]
    : [scoped(parts.icon), scoped(parts.wordmark), rule, linePath]

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
  // Division — two placements, chosen by geometry.compactAlignment:
  //
  //   wordmark-fixed (default) — the wordmark keeps the exact position it holds
  //     in the wide logo and the Zusatzzeile hangs below it. The registered
  //     mark's internal geometry is never altered, which is what makes the
  //     lockup usable without a trademark review.
  //
  //   block-centered — the two-line block is centred on the "B" of the
  //     Bildmarke. Optically calmer, but it shifts the wordmark upward relative
  //     to the mark and therefore needs sign-off before use.
  const C2 = geo.divisionCapRatio * X
  const capGap = geo.capGapRatio * X
  const leading = capGap + C2
  const centered = geo.compactAlignment === 'block-centered'
  const b1 = centered ? CY - (C1 + leading) / 2 + C1 : M.wordBaseline
  const b2 = b1 + leading

  // Tagline — the wide logo is untouched. A thin rule sets the claim off
  // optically, with the same gap above and below it, and the claim is centred
  // under the full width of the lockup.
  const C3 = geo.tagline.capRatio * X
  const gap = geo.tagline.gapRatio * X
  const ruleH = geo.tagline.ruleRatio * X
  const ruleTop = M.logoH + gap
  const capTop = ruleTop + ruleH + gap

  return {
    C2,
    C3,
    alignment: centered ? 'block-centered' : 'wordmark-fixed',
    division: { wordDy: b1 - M.wordBaseline, baseline: b2, left: M.word.x1 },
    tagline: { gap, ruleTop, ruleH, capTop, baseline: capTop + C3, left: 0, align: 'center' },
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
    '': { master: 'bauer-group-logo-wide.svg', division: colorOf(cfg.meta.colors.divisionLight) },
    '-white': { master: 'bauer-group-logo-wide-white.svg', division: colorOf(cfg.meta.colors.divisionDark) },
  }

  console.log('BAUER GROUP · generating lockups …')

  // Parse + validate both masters before writing anything.
  const masters = {}
  const masterSvgs = {}
  for (const [tone, t] of Object.entries(TONES)) {
    const svg = await readFile(join(BRAND, t.master), 'utf8')
    const parts = splitMaster(svg, t.master)
    assertGeometry(parts, t.master)
    masters[tone] = parts
    masterSvgs[tone] = svg
    // "wordmark" means: inherit the wordmark's own ink colour from the master.
    t.tagline = cfg.meta.colors.tagline === 'wordmark'
      ? wordmarkFill(parts.wordmark, t.master)
      : colorOf(cfg.meta.colors.tagline)
  }
  console.log(`  ✓ Ausrichtung Division: ${LAYOUT.alignment}  (Wortmarke dy = ${round(LAYOUT.division.wordDy)})`)
  console.log(`  ✓ Master validiert  (X = ${round(X)}, C1 = ${round(C1)}, cy = ${round(CY)})`)
  console.log(`  ✓ Tagline-Farbe aus der Wortmarke  hell ${TONES[''].tagline}  ·  dunkel ${TONES['-white'].tagline}`)

  const font = opentype.parse((await readFile(join(__dirname, cfg.meta.font.file))).buffer)
  const TYPE = {
    division: makeTypesetter(font, LAYOUT.C2, geo.trackingEm),
    tagline: makeTypesetter(font, LAYOUT.C3, geo.tagline.trackingEm),
  }
  console.log(
    `  ✓ Schrift ${cfg.meta.font.family} ${cfg.meta.font.subfamily}  cap ${TYPE.division.capRatio.toFixed(6)} em` +
      `  →  Zusatzzeile ${round(TYPE.division.size)}, Tagline ${round(TYPE.tagline.size)}`,
  )

  const files = []
  const out = { divisions: [], taglines: [] }

  /**
   * One lockup family, both tones. Everything that differs between the two
   * families is passed in: where the line sits, how wide it may grow, how the
   * files are named and which colour the line takes.
   */
  async function emitFamily({ family, entry, label, prefix, colorKey, maxInk, maxInkLabel }) {
    const type = TYPE[family]
    const L = LAYOUT[family]
    const { bbox } = type.outline(label)
    const inkW = bbox.x2 - bbox.x1

    if (inkW > maxInk) {
      throw new Error(
        `"${label}" ist ${round(inkW)} breit, ${maxInkLabel} misst ${round(maxInk)}. ` +
          `Kuerzere Bezeichnung waehlen oder capRatio in scripts/lockups.json senken.`,
      )
    }

    const width = Math.max(M.logoW, L.left + inkW)
    // Tagline mittig unter der vollen Breite, Zusatzzeile linksbuendig zur Wortmarke.
    const lineLeft = L.align === 'center' ? (width - inkW) / 2 : L.left
    const height =
      family === 'division'
        ? Math.max(M.logoH, L.baseline + type.overshootBelow)
        : L.baseline + type.overshootBelow

    const svgUrl = {}
    const pngUrl = { light: {}, dark: {} }

    for (const [tone, t] of Object.entries(TONES)) {
      // Re-outline into this frame: ink left edge flush to L.left, baseline on L.baseline.
      const { path } = type.outline(label, lineLeft - bbox.x1, L.baseline)
      const linePath = `<path fill-rule="nonzero" fill="${t[colorKey]}" d="${path.toPathData(4)}"/>`

      const name = `${prefix}-${entry.slug}${tone}`
      const rule = L.ruleH
        ? `<rect x="0" y="${round(L.ruleTop)}" width="${round(width)}" height="${round(L.ruleH)}" fill="${t[colorKey]}"/>`
        : null

      const svg = buildSvg({
        family,
        rule,
        parts: masters[tone],
        linePath,
        width,
        height,
        ids: { c0: `bg-${family}-${entry.slug}${tone}-c0`, c1: `bg-${family}-${entry.slug}${tone}-c1` },
      })

      assertArtworkIntact(svg, masterSvgs[tone], `${name}.svg`)
      if (!CHECK_ONLY) await writeFile(join(OUT, `${name}.svg`), svg, 'utf8')

      const key = tone === '' ? 'light' : 'dark'
      svgUrl[key] = `/brand/lockups/${name}.svg`
      for (const size of cfg.meta.png.sizes) pngUrl[key][size] = `/downloads/png/${name}-${size}.png`
      files.push({ family, slug: entry.slug, tone: key, src: `brand/lockups/${name}.svg`, name, sizes: cfg.meta.png.sizes })
    }

    console.log(
      `  ✓ ${family}/${entry.slug}  ${round(width)} × ${round(height)}` +
        `  (Zusatzzeile ${round(inkW)} breit — ${Math.round((inkW / maxInk) * 100)} % des Maximums)`,
    )

    return { width: round(width), height: round(height), ink: round(inkW), svg: svgUrl, png: pngUrl }
  }

  // ── Division lockups ───────────────────────────────────────────
  const divisions = (cfg.divisions ?? []).filter((d) => !ONLY || d.slug === ONLY)
  for (const d of divisions) {
    const label = d.label ?? (geo.case === 'upper' ? d.name.toUpperCase() : d.name)
    const built = await emitFamily({
      family: 'division',
      entry: d,
      label,
      prefix: 'bauer-group-lockup',
      colorKey: 'division',
      maxInk: M.word.x2 - M.word.x1,
      maxInkLabel: 'die Wortmarke',
    })
    out.divisions.push({
      slug: d.slug,
      title: d.name,
      titleEn: d.nameEn ?? d.name,
      label,
      note: d.note ?? null,
      noteEn: d.noteEn ?? d.note ?? null,
      placeholder: d.placeholder === true,
      ...built,
    })
  }

  // ── Tagline lockups ────────────────────────────────────────────
  const taglines = (cfg.taglines ?? []).filter((t) => !ONLY || t.slug === ONLY)
  for (const t of taglines) {
    const label = t.label ?? (geo.tagline.case === 'upper' ? t.text.toUpperCase() : t.text)
    const built = await emitFamily({
      family: 'tagline',
      entry: t,
      label,
      prefix: 'bauer-group-tagline',
      colorKey: 'tagline',
      maxInk: M.logoW,
      maxInkLabel: 'das Wide-Logo',
    })
    out.taglines.push({
      slug: t.slug,
      title: t.text,
      titleEn: t.text,
      label,
      role: t.role ?? null,
      roleEn: t.roleEn ?? t.role ?? null,
      note: t.note ?? null,
      noteEn: t.noteEn ?? t.note ?? null,
      ...built,
    })
  }

  if (ONLY && !divisions.length && !taglines.length) {
    throw new Error(`Kein Eintrag mit slug "${ONLY}" in lockups.json.`)
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
          X: round(X),
          wordmarkCap: round(C1),
          divisionCap: round(LAYOUT.C2),
          taglineCap: round(LAYOUT.C3),
          taglineGap: round(LAYOUT.tagline.gap),
          divisionFontSize: round(TYPE.division.size),
          taglineFontSize: round(TYPE.tagline.size),
          divisionTrackingEm: geo.trackingEm,
          taglineTrackingEm: geo.tagline.trackingEm,
        },
        divisions: out.divisions,
        taglines: out.taglines,
        files,
      },
      null,
      2,
    ) + '\n',
    'utf8',
  )

  console.log(
    `\nDone. ${files.length} Lockup-SVGs — ` +
      `${out.divisions.length} Geschäftsbereich(e), ${out.taglines.length} Tagline(s).`,
  )
}

// Rebuild the output directory so removed entries cannot leave stale files behind.
if (!CHECK_ONLY) {
  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })
}

main().catch((err) => {
  console.error('\nLockup generation failed:', err.message)
  process.exit(1)
})
