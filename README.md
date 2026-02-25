# BAUER GROUP Brand Guide

Offizielle Corporate Identity & Brand Guide Dokumentation der BAUER GROUP — erstellt mit VitePress und automatisch via GitHub Pages deployed.

> **Live-Dokumentation:** [brand.docs.bauer-group.com](https://brand.docs.bauer-group.com)
>
> Verfügbar in **Deutsch** und **English**

## Inhalt

| Kapitel | Sektion | Inhalt |
|---------|---------|--------|
| **1** | Logo | Varianten, Schutzzone, Mindestgrößen, Don'ts |
| **2** | Farbsystem | Primärfarbe, Orange-/Grau-Skala, Semantische Farben, Akzentfarben |
| **3** | Typografie | Hierarchie, Font-Stack, Gewichte |
| **4** | UI-Komponenten | Buttons, Badges, Formulare |
| **5** | Barrierefreiheit | WCAG 2.1, Kontrastprüfung, Do/Don't |
| **6** | Print & Produktion | CMYK, Pantone, Papierempfehlungen |
| **7** | Werbemittel | Visitenkarten, Briefpapier, Vorlagen (in Arbeit) |
| **8** | Ressourcen | Downloads, CSS-Variablen |

## Projektstruktur

```text
.
├── docs/                          # VitePress-Dokumentation
│   ├── de/                        # Deutsche Dokumentation (22 Seiten)
│   ├── en/                        # Englische Dokumentation (22 Seiten)
│   ├── public/                    # Statische Assets (Logo, Favicon)
│   └── .vitepress/
│       ├── config.ts              # VitePress-Konfiguration
│       ├── locales/               # DE/EN Navigation + Sidebar
│       └── theme/                 # Custom Theme (BAUER CI)
├── assets/                        # Branding-Quelldateien
│   └── branding/                  # Logos (SVG, PNG, EPS), branding.env
├── .github/
│   └── workflows/                 # GitHub Pages Deployment
├── brand-guide.html               # Standalone HTML Brand Guide
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

Die Dokumentation darf mit Namensnennung geteilt und bearbeitet werden, jedoch **nicht für kommerzielle Zwecke** verwendet werden.

Copyright © BAUER GROUP
