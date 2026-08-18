/**
 * Build-time bridge between the lockup generator and the documentation.
 *
 * `npm run generate:lockups` writes docs/public/brand/lockups/index.json from
 * scripts/lockups.json. This loader reads that manifest so every page renders
 * whatever was actually generated — add a division or a tagline to
 * scripts/lockups.json and it appears on the brand pages with no page edits.
 *
 * The manifest is git-ignored and produced by `predocs:dev` / `predocs:build`,
 * so it is always present for a real build. If someone runs `vitepress dev`
 * directly without generating first, the galleries degrade to an empty state
 * instead of breaking the build.
 */

import { defineLoader } from 'vitepress'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const MANIFEST = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../public/brand/lockups/index.json',
)

export default defineLoader({
  watch: ['../../public/brand/lockups/index.json'],
  load() {
    if (!existsSync(MANIFEST)) {
      console.warn(
        '[lockups] docs/public/brand/lockups/index.json fehlt — ' +
          '`npm run generate:lockups` ausfuehren. Galerien bleiben vorerst leer.',
      )
      return { divisions: [], taglines: [], geometry: null }
    }
    const raw = JSON.parse(readFileSync(MANIFEST, 'utf8'))
    return {
      divisions: raw.divisions ?? [],
      taglines: raw.taglines ?? [],
      geometry: raw.geometry ?? null,
    }
  },
})
