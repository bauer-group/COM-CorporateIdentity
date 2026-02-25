import { defineConfig } from 'vitepress'
import { de } from './locales/de'
import { en } from './locales/en'

export default defineConfig({
  title: 'Brand Guide',
  titleTemplate: ':title | BAUER GROUP',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#FF8500' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Brand Guide – BAUER GROUP' }],
    ['meta', { name: 'og:description', content: 'Offizielle Markenrichtlinien der BAUER GROUP' }],
  ],

  locales: { de, en },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Brand Guide',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bauer-group/SEC-CorporateIdentity' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          de: { translations: { button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' }, modal: { noResultsText: 'Keine Ergebnisse für', resetButtonTitle: 'Suche zurücksetzen', footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' } } } },
          en: { translations: { button: { buttonText: 'Search', buttonAriaLabel: 'Search' }, modal: { noResultsText: 'No results for', resetButtonTitle: 'Reset search', footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' } } } },
        }
      }
    },
  }
})
