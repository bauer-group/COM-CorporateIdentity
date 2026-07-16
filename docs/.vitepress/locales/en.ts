import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'Official brand guidelines for BAUER GROUP',

  themeConfig: {
    nav: [
      { text: 'Overview', link: '/en/' },
      {
        text: 'Brand Identity',
        items: [
          { text: 'Values & Mission', link: '/en/brand/' },
          { text: 'Logo', link: '/en/logo/' },
          { text: 'Colors', link: '/en/colors/' },
          { text: 'Typography', link: '/en/typography/' },
          { text: 'Photography', link: '/en/photography/' },
          { text: 'Audio Identity', link: '/en/audio/' },
        ]
      },
      {
        text: 'Application',
        items: [
          { text: 'Digital Media', link: '/en/digital/' },
          { text: 'UI Components', link: '/en/components/' },
          { text: 'Accessibility', link: '/en/accessibility/' },
          { text: 'Print & CMYK', link: '/en/print/' },
          { text: 'Advertising', link: '/en/advertising/' },
        ]
      },
      { text: 'Downloads', link: '/en/downloads/' },
    ],

    // Sidebar structure is identical to the DE locale (same 12 groups, same
    // order, all expanded) so both languages share one mental model.
    sidebar: {
      '/en/': [
        {
          text: 'Brand & Values',
          items: [
            { text: 'Overview', link: '/en/' },
            { text: 'Brand Values', link: '/en/brand/' },
          ]
        },
        {
          text: 'Logo',
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
            { text: 'Secondary Colors', link: '/en/colors/secondary' },
            { text: 'Neutral Colors', link: '/en/colors/neutrals' },
            { text: 'Color Scales', link: '/en/colors/scales' },
            { text: 'Semantic Colors', link: '/en/colors/semantic' },
            { text: 'Accent Colors', link: '/en/colors/accent' },
            { text: 'Semantic Aliases', link: '/en/colors/aliases' },
            { text: 'Methodology & Conventions', link: '/en/colors/methodology' },
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
          text: 'Photography',
          items: [
            { text: 'Image Style & Guidelines', link: '/en/photography/' },
          ]
        },
        {
          text: 'Audio Identity',
          items: [
            { text: 'Sound Logo & Soundscape', link: '/en/audio/' },
          ]
        },
        {
          text: 'Digital Media',
          items: [
            { text: 'Overview', link: '/en/digital/' },
            { text: 'Social Media', link: '/en/digital/social-media' },
            { text: 'Web Banners & Layouts', link: '/en/digital/web-banners' },
            { text: 'Email & Newsletter', link: '/en/digital/email' },
            { text: 'Canva Design Workflow', link: '/en/digital/canva' },
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
          text: 'Print & Stationery',
          items: [
            { text: 'CMYK & Pantone', link: '/en/print/' },
            { text: 'Paper Specs', link: '/en/print/paper' },
            { text: 'Business Cards', link: '/en/print/business-cards' },
            { text: 'Stamps', link: '/en/print/stamps' },
          ]
        },
        {
          text: 'Advertising',
          items: [
            { text: 'Overview', link: '/en/advertising/' },
            { text: 'Notepads', link: '/en/advertising/notepads' },
            { text: 'Sticky Notes', link: '/en/advertising/sticky-notes' },
            { text: 'Pens', link: '/en/advertising/pens' },
            { text: 'Folders', link: '/en/advertising/folders' },
            { text: 'Lighters', link: '/en/advertising/lighters' },
            { text: 'Bags', link: '/en/advertising/bags' },
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Downloads', link: '/en/downloads/' },
            { text: 'Design Tokens', link: '/en/downloads/tokens' },
          ]
        },
      ]
    },

    editLink: {
      pattern: 'https://github.com/bauer-group/COM-CorporateIdentity/edit/main/docs/:path',
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
