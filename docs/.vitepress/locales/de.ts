import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const de: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  description: 'Offizielle Markenrichtlinien der BAUER GROUP',

  themeConfig: {
    nav: [
      { text: 'Übersicht', link: '/de/' },
      {
        text: 'Markenidentität',
        items: [
          { text: 'Werte & Leitbild', link: '/de/marke/' },
          { text: 'Logo', link: '/de/logo/' },
          { text: 'Farben', link: '/de/farben/' },
          { text: 'Typografie', link: '/de/typografie/' },
          { text: 'Bildsprache', link: '/de/bildsprache/' },
          { text: 'Audioidentität', link: '/de/audio/' },
        ]
      },
      {
        text: 'Anwendung',
        items: [
          { text: 'Digitale Medien', link: '/de/digital/' },
          { text: 'UI Komponenten', link: '/de/komponenten/' },
          { text: 'Barrierefreiheit', link: '/de/barrierefreiheit/' },
          { text: 'Print & CMYK', link: '/de/print/' },
          { text: 'Werbemittel', link: '/de/werbemittel/' },
        ]
      },
      { text: 'Downloads', link: '/de/downloads/' },
    ],

    sidebar: {
      '/de/': [
        {
          text: 'Markenidentität',
          items: [
            { text: 'Übersicht', link: '/de/' },
            { text: 'Werte & Leitbild', link: '/de/marke/' },
            { text: 'Logo', link: '/de/logo/' },
            { text: 'Logo-Varianten', link: '/de/logo/varianten' },
            { text: 'Schutzzone & Größen', link: '/de/logo/schutzzone' },
            { text: 'Falschanwendungen', link: '/de/logo/donts' },
          ]
        },
        {
          text: 'Farbsystem',
          items: [
            { text: 'Primärfarbe', link: '/de/farben/' },
            { text: 'Farbskalen', link: '/de/farben/skalen' },
            { text: 'Semantische Farben', link: '/de/farben/semantisch' },
            { text: 'Akzentfarben', link: '/de/farben/akzent' },
          ]
        },
        {
          text: 'Typografie',
          items: [
            { text: 'Schriftsystem', link: '/de/typografie/' },
            { text: 'Hierarchie', link: '/de/typografie/hierarchie' },
            { text: 'Font Stack', link: '/de/typografie/font-stack' },
          ]
        },
        {
          text: 'UI Komponenten',
          items: [
            { text: 'Übersicht', link: '/de/komponenten/' },
            { text: 'Buttons', link: '/de/komponenten/buttons' },
            { text: 'Badges & Status', link: '/de/komponenten/badges' },
            { text: 'Formulare', link: '/de/komponenten/formulare' },
          ]
        },
        {
          text: 'Barrierefreiheit',
          items: [
            { text: 'WCAG 2.1', link: '/de/barrierefreiheit/' },
            { text: 'Kontrastprüfung', link: '/de/barrierefreiheit/kontrast' },
          ]
        },
        {
          text: 'Print & Produktion',
          items: [
            { text: 'CMYK & Pantone', link: '/de/print/' },
            { text: 'Papierempfehlungen', link: '/de/print/papier' },
          ]
        },
        {
          text: 'Bildsprache',
          collapsed: true,
          items: [
            { text: 'Fotostil & Richtlinien', link: '/de/bildsprache/' },
          ]
        },
        {
          text: 'Audioidentität',
          collapsed: true,
          items: [
            { text: 'Sound Logo & Klangwelt', link: '/de/audio/' },
          ]
        },
        {
          text: 'Digitale Medien',
          items: [
            { text: 'Übersicht', link: '/de/digital/' },
            { text: 'Social Media', link: '/de/digital/social-media' },
            { text: 'Web Banner & Layouts', link: '/de/digital/web-banner' },
            { text: 'E-Mail & Newsletter', link: '/de/digital/email' },
          ]
        },
        {
          text: 'Werbemittel',
          collapsed: true,
          items: [
            { text: 'Geschäftsausstattung', link: '/de/werbemittel/' },
          ]
        },
        {
          text: 'Ressourcen',
          items: [
            { text: 'Downloads', link: '/de/downloads/' },
            { text: 'CSS Variablen', link: '/de/downloads/css-variablen' },
          ]
        },
      ]
    },

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-CorporateIdentity/edit/main/docs/:path',
      text: 'Diese Seite auf GitHub bearbeiten',
    },

    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
    },

    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Zurück', next: 'Weiter' },
    returnToTopLabel: 'Nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Erscheinungsbild',
    langMenuLabel: 'Sprache',

    footer: {
      message: 'Dokumentation lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code lizenziert unter <a href="/LICENSE">MIT</a>',
      copyright: `© 1999 - ${new Date().getFullYear()} BAUER GROUP. Alle Rechte vorbehalten.`,
    },
  }
}
