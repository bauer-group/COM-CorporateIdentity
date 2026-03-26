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
        icon: false,
        ignoreHome: true,
        ignorePublish: true,
        log: true,
        locales: {
          de: { filename: 'feed-de.xml', language: 'de' },
          en: { filename: 'feed-en.xml', language: 'en' },
        },
      }),
    ],
  },

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
      { icon: 'github', link: 'https://github.com/bauer-group/COM-CorporateIdentity' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/></svg>' }, link: '/feed-en.xml', ariaLabel: 'RSS Feed' },
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
