# BAUER GROUP Brand Guide

Offizielle Corporate Identity & Brand Guide Dokumentation der BAUER GROUP — erstellt mit VitePress und automatisch via GitHub Pages deployed.

> **Live-Dokumentation:** [brand.docs.bauer-group.com](https://brand.docs.bauer-group.com)
>
> Verfügbar in **Deutsch** und **English**

## Inhalt

| Bereich | Sektion | Inhalt |
|---------|---------|--------|
| **Markenidentität** | Werte & Leitbild | Taglines, Kernwerte, Markenpersönlichkeit, Tonalität |
| | Logo | Varianten, Schutzzone, Mindestgrößen, Don'ts |
| | Farbsystem | Primärfarbe, Orange-/Grau-Skala, Semantische Farben, Akzentfarben |
| | Typografie | Hierarchie, Font-Stack, Gewichte |
| | Bildsprache | Fotostil, Bildrichtlinien, Komposition |
| | Audioidentität | Sound Logo, Klangwelt, UI-Sounds |
| **Anwendung** | Digitale Medien | Social Media, Web Banner, E-Mail & Newsletter |
| | UI-Komponenten | Buttons, Badges, Formulare |
| | Barrierefreiheit | WCAG 2.1, Kontrastprüfung, Do/Don't |
| | Print & Produktion | CMYK, Pantone, Papierempfehlungen |
| | Werbemittel | Geschäftsausstattung, Messe, Präsentationen |
| **Ressourcen** | Downloads | Logo-Pakete, CSS-Variablen |

## Projektstruktur

```text
.
├── docs/                          # VitePress-Dokumentation
│   ├── de/                        # Deutsche Dokumentation (30 Seiten)
│   ├── en/                        # Englische Dokumentation (30 Seiten)
│   ├── public/                    # Statische Assets (Logo, Favicon)
│   └── .vitepress/
│       ├── config.ts              # VitePress-Konfiguration
│       ├── locales/               # DE/EN Navigation + Sidebar
│       └── theme/                 # Custom Theme (BAUER CI)
├── .github/
│   ├── workflows/                 # Deploy, Release, Notifications, AI Summary
│   ├── config/                    # Semantic Release Config
│   ├── CODEOWNERS                 # Code-Ownership
│   ├── PULL_REQUEST_TEMPLATE.md   # PR-Template
│   └── dependabot.yml             # Automatische Dependency-Updates
└── package.json                   # @bauer-group/brand-guide
```

## Quickstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev

# Produktions-Build
npm run docs:build

# Build-Preview
npm run docs:preview
```

### Verfügbare Scripts

| Script | Beschreibung |
|--------|-------------|
| `npm run docs:dev` | Entwicklungsserver mit Hot Reload |
| `npm run docs:build` | Produktions-Build |
| `npm run docs:preview` | Preview des Produktions-Builds |
| `npm run docs:clean` | Build-Cache und dist bereinigen |
| `npm run lint` | Markdown-Linting |
| `npm run lint:fix` | Markdown-Linting mit Auto-Fix |
| `npm run validate` | Lint + Build + Link-Check |
| `npm run ci` | CI-Pipeline (install + lint + build) |

## Deployment

Push auf `main` (Änderungen in `docs/`, `package.json`, `package-lock.json`) triggert automatisch:

1. Checkout + Node.js Setup (via `.nvmrc`)
2. `npm ci` + Markdown-Lint
3. VitePress-Build
4. GitHub Pages Deployment

## Tech Stack

| Tool | Zweck |
|------|-------|
| [VitePress](https://vitepress.dev/) 1.6.x | Dokumentations-Framework |
| [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) | Markdown-Linting |
| [linkinator](https://github.com/JustinBeckwith/linkinator) | Link-Validierung |
| [Husky](https://typicode.github.io/husky/) | Git-Hooks |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Pre-Commit Linting |

## Lizenz

Dieses Repository verwendet ein **Dual-License-Modell**:

| Bereich | Lizenz | SPDX |
|---------|--------|------|
| Code, Workflows, Konfiguration | [MIT License](LICENSE) | `MIT` |
| Dokumentation (`docs/`) | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | `CC-BY-NC-4.0` |

Copyright © BAUER GROUP
