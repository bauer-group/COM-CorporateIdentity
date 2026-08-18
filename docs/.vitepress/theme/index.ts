import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import LockupGallery from './components/LockupGallery.vue'
import LockupPreview from './components/LockupPreview.vue'
import './style.css'
import './print.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Both read docs/public/brand/lockups/index.json at build time, so the
    // brand pages always list exactly what the generator produced.
    app.component('LockupGallery', LockupGallery)
    app.component('LockupPreview', LockupPreview)
  },
} satisfies Theme
