<script setup>
import { computed } from 'vue'
import { data } from '../lockups.data.mjs'

const props = defineProps({
  // Which generated family to show.
  kind: { type: String, default: 'divisions' },
  // Which entry — defaults to the first one in scripts/lockups.json.
  slug: { type: String, default: null },
  width: { type: String, default: '380px' },
  lang: { type: String, default: 'de' },
})

const item = computed(() => {
  const list = data[props.kind] ?? []
  return (props.slug ? list.find((i) => i.slug === props.slug) : list[0]) ?? null
})

const label = computed(() => {
  if (!item.value) return ''
  const title = (props.lang === 'en' ? item.value.titleEn : item.value.title) ?? item.value.title
  return `BAUER GROUP — ${title}`
})
</script>

<template>
  <template v-if="item">
    <div class="logo-stage light">
      <img :src="item.svg.light" :alt="label" :style="{ maxWidth: width }" />
    </div>
    <div class="logo-stage dark">
      <img :src="item.svg.dark" :alt="`${label} — dark`" :style="{ maxWidth: width }" />
    </div>
  </template>
</template>
