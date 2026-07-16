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

<div style="text-align:center;padding:80px 24px;">
  <p style="margin-bottom:8px;font-size:1.1em;font-weight:700;">BAUER GROUP Brand Guide</p>
  <p style="margin-bottom:24px;color:var(--vp-c-text-2);">Weiterleitung… / Redirecting…</p>
  <p><a href="/de/">Deutsch</a> &nbsp;·&nbsp; <a href="/en/">English</a></p>
</div>
