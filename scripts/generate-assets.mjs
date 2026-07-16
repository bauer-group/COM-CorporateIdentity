/**
 * BAUER GROUP Brand Guide — Raster asset generation
 * --------------------------------------------------
 * Renders high-resolution PNGs from the source SVGs (logos, symbol),
 * plus favicons/app icons and an Open Graph image.
 *
 * SVG masters live in docs/public/brand/ and are the single source of truth.
 * Every PNG here is generated (git-ignored) — never commit rasters.
 *
 * Density is supersampled relative to each SVG's viewBox so edges and
 * gradients stay crisp at the target pixel size, then resized to the exact
 * output width.
 *
 * Usage:  npm run generate:assets   (runs automatically before dev/build)
 */

import sharp from 'sharp'
import { readFile, mkdir, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '..', 'docs', 'public')
const PNG_DIR = join(PUBLIC, 'downloads', 'png')

// ── Source SVG → PNG size manifests ──────────────────────────────
const LOGOS = [
  { src: 'brand/bauer-group-logo-wide.svg',       name: 'bauer-group-logo-wide',       sizes: [960, 1440, 2048] },
  { src: 'brand/bauer-group-logo-wide-white.svg', name: 'bauer-group-logo-wide-white', sizes: [960, 1440, 2048] },
  { src: 'brand/bauer-group-icon.svg',            name: 'bauer-group-icon',            sizes: [256, 512, 1024, 2048] },
]

// Favicons + touch/app icons rendered from the icon mark, written to /public root.
const FAVICONS = [
  { size: 16, out: 'favicon-16.png' },
  { size: 32, out: 'favicon-32.png' },
  { size: 48, out: 'favicon-48.png' },
  { size: 180, out: 'apple-touch-icon.png' },
  { size: 192, out: 'icon-192.png' },
  { size: 512, out: 'icon-512.png' },
]

// ── Helpers ──────────────────────────────────────────────────────
function viewBoxWidth(svg) {
  const m = svg.toString().match(/viewBox="\s*[\d.+-]+\s+[\d.+-]+\s+([\d.]+)\s+([\d.]+)/)
  return m ? parseFloat(m[1]) : 512
}

/** Render an SVG buffer to a PNG at an exact output width, supersampled for crispness. */
async function renderPng(svg, outPath, width) {
  const vbW = viewBoxWidth(svg)
  const density = Math.min(2600, Math.max(72, Math.round((width / vbW) * 72 * 1.15)))
  await sharp(svg, { density })
    .resize({ width, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(outPath)
}

/** Render a square PNG of an exact size (for favicons/app icons). */
async function renderSquare(svg, outPath, size) {
  const vbW = viewBoxWidth(svg)
  const density = Math.min(2600, Math.max(72, Math.round((size / vbW) * 72 * 1.15)))
  await sharp(svg, { density })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath)
}

let count = 0
async function emit(promise, label) {
  await promise
  count++
  console.log(`  ✓ ${label}`)
}

// ── Main ─────────────────────────────────────────────────────────
async function main() {
  console.log('BAUER GROUP · generating raster assets from SVG …')
  await mkdir(PNG_DIR, { recursive: true })

  // Logos → downloads/png/<name>-<width>.png
  for (const item of LOGOS) {
    const svg = await readFile(join(PUBLIC, item.src))
    for (const width of item.sizes) {
      const out = join(PNG_DIR, `${item.name}-${width}.png`)
      await emit(renderPng(svg, out, width), `downloads/png/${item.name}-${width}.png`)
    }
  }

  // Favicons + touch icons → public root, from the icon mark
  const iconSvg = await readFile(join(PUBLIC, 'brand', 'bauer-group-icon.svg'))
  for (const f of FAVICONS) {
    await emit(renderSquare(iconSvg, join(PUBLIC, f.out), f.size), f.out)
  }

  // Open Graph image (1200×630): wide logo centered on white + brand-orange bar
  const OG_W = 1200
  const OG_H = 630
  const hLogo = await readFile(join(PUBLIC, 'brand', 'bauer-group-logo-wide.svg'))
  const logoBuf = await sharp(hLogo, { density: 300 }).resize({ width: 760 }).png().toBuffer()
  await emit(
    sharp({
      create: { width: OG_W, height: OG_H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
    })
      .composite([
        { input: logoBuf, gravity: 'center' },
        // thin brand-orange bar along the bottom edge (#FF8500)
        {
          input: { create: { width: OG_W, height: 12, channels: 4, background: { r: 255, g: 133, b: 0, alpha: 1 } } },
          gravity: 'south',
        },
      ])
      .png({ compressionLevel: 9 })
      .toFile(join(PUBLIC, 'og-image.png')),
    'og-image.png',
  )

  const produced = await readdir(PNG_DIR)
  console.log(`\nDone. ${count} raster files written (${produced.length} in downloads/png/).`)
}

main().catch((err) => {
  console.error('Asset generation failed:', err)
  process.exit(1)
})
