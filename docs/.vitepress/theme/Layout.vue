<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import DocFooter from './DocFooter.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <DocFooter />
    </template>
  </DefaultTheme.Layout>
</template>
