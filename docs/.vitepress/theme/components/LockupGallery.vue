<script setup>
import { computed } from 'vue'
import { data } from '../lockups.data.mjs'

const props = defineProps({
  // Which generated family to list.
  kind: { type: String, default: 'divisions' },
  lang: { type: String, default: 'de' },
})

const en = computed(() => props.lang === 'en')

const t = computed(() =>
  en.value
    ? { light: 'SVG', dark: 'SVG on dark', empty: 'No lockups generated yet — run npm run generate.' }
    : { light: 'SVG', dark: 'SVG auf Dunkel', empty: 'Noch keine Lockups erzeugt — npm run generate ausführen.' },
)

const items = computed(() =>
  (data[props.kind] ?? []).map((i) => ({
    slug: i.slug,
    title: (en.value ? i.titleEn : i.title) ?? i.title,
    role: (en.value ? i.roleEn : i.role) ?? null,
    note: (en.value ? i.noteEn : i.note) ?? null,
    svg: i.svg,
    // Largest PNG first — that is the one people actually want.
    png: Object.entries(i.png.light)
      .map(([size, href]) => ({ size: Number(size), href }))
      .sort((a, b) => b.size - a.size),
  })),
)
</script>

<template>
  <div v-if="items.length" class="download-grid">
    <div v-for="i in items" :key="i.slug" class="download-card">
      <div class="preview">
        <img class="lockup-light" :src="i.svg.light" :alt="i.title" />
        <img class="lockup-dark" :src="i.svg.dark" :alt="i.title" />
      </div>
      <div class="body">
        <div class="title">
          {{ i.title }}
          <span v-if="i.role" class="role">{{ i.role }}</span>
        </div>
        <div v-if="i.note" class="note">{{ i.note }}</div>
        <div class="links">
          <a :href="i.svg.light" download>{{ t.light }}</a>
          <a :href="i.svg.dark" download>{{ t.dark }}</a>
          <a v-for="p in i.png" :key="p.size" :href="p.href" download>PNG {{ p.size }}</a>
        </div>
      </div>
    </div>
  </div>
  <p v-else class="lockup-empty">{{ t.empty }}</p>
</template>
