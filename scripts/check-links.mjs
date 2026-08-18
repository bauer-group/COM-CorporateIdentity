/**
 * BAUER GROUP Brand Guide — Link validation
 * -----------------------------------------
 * Crawls the built site and fails on any broken internal link.
 *
 * Two details make this non-trivial for this project:
 *
 * 1. `cleanUrls: true` means pages are written as `<name>.html` while every
 *    link points at the extensionless `<name>`. Linkinator's static server
 *    only resolves that with `cleanUrls` enabled — without it the run reports
 *    hundreds of false 404s on perfectly valid pages.
 *
 * 2. Coverage has to be asserted, not assumed. VitePress renders the sidebar
 *    only on doc pages, so a crawl seeded from the `layout: home` pages reaches
 *    roughly a third of the site and still reports "0 broken links". Every
 *    built page is therefore passed as an entry point, and the run fails if a
 *    page was never visited.
 *
 * Usage:  npm run check:links   (expects docs:build to have run)
 */

import { check } from 'linkinator'
import { readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, resolve, sep } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'docs', '.vitepress', 'dist')

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('Kein Build gefunden. Zuerst `npm run docs:build` ausfuehren.')
  process.exit(1)
}

/** Every built HTML page, relative to the dist root. */
function htmlPages(dir = DIST) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') out.push(...htmlPages(p))
    } else if (entry.name.endsWith('.html')) {
      out.push(relative(DIST, p).split(sep).join('/'))
    }
  }
  return out
}

/** `de/logo/lockup.html`, `de/logo/`, `/de/logo/index.html` → `de/logo/lockup` / `de/logo` */
const normalise = (url) =>
  url
    .replace(/^https?:\/\/[^/]+/, '')
    .split('?')[0]
    .split('#')[0]
    .replace(/^\//, '')
    .replace(/\.html$/, '')
    .replace(/(^|\/)index$/, '$1')
    .replace(/\/$/, '')

const pages = htmlPages()
console.log(`BAUER GROUP · pruefe Links in ${pages.length} Seiten …`)

const result = await check({
  path: pages,
  serverRoot: DIST,
  recurse: true,
  cleanUrls: true, // extensionless links → <name>.html, wie GitHub Pages
  linksToSkip: ['^(?!http://localhost)'], // nur interne Links, keine externen Aufrufe
})

const broken = result.links.filter((link) => link.state === 'BROKEN')
const visited = new Set(result.links.map((link) => normalise(link.url)))
const unreached = pages.filter((page) => !visited.has(normalise(page)))

console.log(`  ${result.links.length} Links geprueft, ${broken.length} fehlerhaft`)

for (const link of broken) {
  console.error(`  [${link.status}] ${link.url}`)
  if (link.parent) console.error(`         verlinkt von: ${link.parent}`)
}
for (const page of unreached) {
  console.error(`  nicht erreicht: ${page}`)
}

if (broken.length || unreached.length) {
  console.error(
    `\nFehlgeschlagen: ${broken.length} defekte Links, ${unreached.length} nicht erreichte Seiten.`,
  )
  process.exit(1)
}

console.log(`  alle ${pages.length} Seiten erreicht, keine defekten Links.`)
