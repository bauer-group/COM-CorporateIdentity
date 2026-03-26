import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import { de } from './locales/de'
import { en } from './locales/en'

const baseUrl = 'https://brand.docs.bauer-group.com'

export default defineConfig({
  title: 'Brand Guide',
  titleTemplate: ':title | BAUER GROUP',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    image: { lazyLoading: true },
  },
  sitemap: {
    hostname: baseUrl,
  },
  vite: {
    plugins: [
      RssPlugin({
        title: 'Brand Guide – BAUER GROUP',
        baseUrl,
        copyright: `© ${new Date().getFullYear()} BAUER GROUP`,
        description: 'BAUER GROUP Brand Guidelines Updates',
        language: 'en',
        author: { name: 'BAUER GROUP', link: baseUrl },
        filename: 'feed.xml',
        icon: false,
        ignoreHome: true,
        ignorePublish: true,
        log: true,
      }),
    ],
  },

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Brand Guide – BAUER GROUP', href: `${baseUrl}/feed.xml` }],
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
      { icon: 'github', link: 'https://github.com/bauer-group/COM-CorporateIdentity' },
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
