---
layout: home
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = navigator.language?.toLowerCase() || 'de'
  const path = lang.startsWith('de') ? '/de/' : '/en/'
  window.location.replace(path)
})
</script>

Redirecting...
