import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'Official brand guidelines for BAUER GROUP',

  themeConfig: {
    nav: [
      { text: 'Overview', link: '/en/' },
      { text: 'Values & Mission', link: '/en/brand/' },
      {
        text: 'Brand Identity',
        items: [
          { text: 'Logo', link: '/en/logo/' },
          { text: 'Colors', link: '/en/colors/' },
          { text: 'Typography', link: '/en/typography/' },
        ]
      },
      {
        text: 'Application',
        items: [
          { text: 'UI Components', link: '/en/components/' },
          { text: 'Accessibility', link: '/en/accessibility/' },
          { text: 'Print & CMYK', link: '/en/print/' },
        ]
      },
      { text: 'Downloads', link: '/en/downloads/' },
    ],

    sidebar: {
      '/en/': [
        {
          text: 'Values & Mission',
          items: [
            { text: 'Overview', link: '/en/' },
            { text: 'Brand Values', link: '/en/brand/' },
          ]
        },
        {
          text: 'Brand Identity',
          items: [
            { text: 'Logo', link: '/en/logo/' },
            { text: 'Logo Variants', link: '/en/logo/variants' },
            { text: 'Clear Space & Sizes', link: '/en/logo/clearspace' },
            { text: 'Misuse Examples', link: '/en/logo/donts' },
          ]
        },
        {
          text: 'Color System',
          items: [
            { text: 'Primary Color', link: '/en/colors/' },
            { text: 'Color Scales', link: '/en/colors/scales' },
            { text: 'Semantic Colors', link: '/en/colors/semantic' },
            { text: 'Accent Colors', link: '/en/colors/accent' },
          ]
        },
        {
          text: 'Typography',
          items: [
            { text: 'Type System', link: '/en/typography/' },
            { text: 'Hierarchy', link: '/en/typography/hierarchy' },
            { text: 'Font Stack', link: '/en/typography/font-stack' },
          ]
        },
        {
          text: 'UI Components',
          items: [
            { text: 'Overview', link: '/en/components/' },
            { text: 'Buttons', link: '/en/components/buttons' },
            { text: 'Badges & Status', link: '/en/components/badges' },
            { text: 'Forms', link: '/en/components/forms' },
          ]
        },
        {
          text: 'Accessibility',
          items: [
            { text: 'WCAG 2.1', link: '/en/accessibility/' },
            { text: 'Contrast Checks', link: '/en/accessibility/contrast' },
          ]
        },
        {
          text: 'Print & Production',
          items: [
            { text: 'CMYK & Pantone', link: '/en/print/' },
            { text: 'Paper Specs', link: '/en/print/paper' },
          ]
        },
        {
          text: 'Advertising',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/advertising/' },
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Downloads', link: '/en/downloads/' },
            { text: 'CSS Variables', link: '/en/downloads/css-variables' },
          ]
        },
      ]
    },

    editLink: {
      pattern: 'https://github.com/bauer-group/brand-guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
    },

    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    langMenuLabel: 'Language',

    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code licensed under <a href="/LICENSE">MIT</a>',
      copyright: `© 1999 - ${new Date().getFullYear()} BAUER GROUP. All rights reserved.`,
    },
  }
}
