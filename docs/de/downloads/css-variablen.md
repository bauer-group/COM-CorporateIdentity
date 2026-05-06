# CSS Variablen

Vollständiges CSS Custom Properties Set für die Implementierung des BAUER GROUP Designsystems. Die Tokens sind in zwei parallelen Notationen verfügbar: **HEX** (Print-Authority, Tooling-Fallback) und **OKLCH** (Web/Display-Authority). Siehe [Methodik](/de/farben/methodik) für die Notations-Hierarchie.

## Kanonisches Token-Set (HEX)

Diese Tokens sind die **Standard-Referenz** für die Implementation. Sie funktionieren in jedem Tooling-Workflow (Adobe, Figma, ältere Browser, CI-Pipelines).

```css
:root {
  /* ─── Primary: Orange ─── */
  --orange-50: #FFF7ED;
  --orange-100: #FFEDD5;
  --orange-200: #FED7AA;
  --orange-300: #FDBA74;
  --orange-400: #FB923C;
  --orange-500: #FF8500;  /* Brand Primary */
  --orange-600: #EA6D00;
  --orange-700: #C2570A;  /* Text AA */
  --orange-800: #9A4509;  /* Text AAA */
  --orange-900: #7C3A0A;

  /* ─── Warm Gray (Unterstützende Farben) ─── */
  --warm-50: #F9F8F6;
  --warm-100: #F0EDEA;
  --warm-200: #E0DBD6;
  --warm-300: #C4BDB7;
  --warm-400: #A69E97;
  --warm-500: #887F78;
  --warm-600: #6B635C;   /* Body Text AA */
  --warm-700: #524B45;   /* Strong Text AAA */
  --warm-800: #3A3430;   /* Headlines, Brand Dark */
  --warm-900: #231F1C;   /* Brand Black */

  /* ─── Neutral Gray (Print / Technisch) ─── */
  --gray-50: #F7F7F7;
  --gray-100: #EBEBEB;
  --gray-200: #D1D1D1;     /* Print-Raster */
  --gray-300: #B8B8B8;
  --gray-400: #9E9E9E;
  --gray-500: #7F7F7F;     /* Print-Akzentbalken */
  --gray-600: #666666;
  --gray-700: #4D4D4D;
  --gray-800: #333333;
  --gray-900: #1C1C1C;

  /* ─── Brand Neutrals ─── */
  --brand-white: #FFFFFF;
  --brand-light: #F9F8F6;  /* = Warm 50 */
  --brand-dark: #3A3430;    /* = Warm 800 */
  --brand-black: #231F1C;   /* = Warm 900 */

  /* ─── Semantisch (Triade -100 / -500 / -700) ─── */
  --success-100: #DCFCE7;  --success-500: #22C55E;  --success-700: #15803D;
  --warning-100: #FEF9C3;  --warning-500: #EAB308;  --warning-700: #A16207;
  --error-100: #FEE2E2;    --error-500: #EF4444;    --error-700: #B91C1C;
  --info-100: #DBEAFE;     --info-500: #3B82F6;     --info-700: #1D4ED8;

  /* ─── Akzent (Tertiär — sparsam einsetzen) ─── */
  --accent-blue: #2563EB;
  --accent-teal: #0D9488;
  --accent-amber: #D97706;
  --accent-indigo: #6366F1;

  /* ─── Semantische Aliase ─── */
  --text-primary: var(--warm-900);
  --text-secondary: var(--warm-600);
  --text-muted: var(--warm-500);
  --text-disabled: var(--warm-400);

  --bg-primary: #FFFFFF;
  --bg-subtle: var(--warm-50);
  --bg-muted: var(--warm-100);

  --border: var(--warm-200);
  --border-strong: var(--warm-300);

  /* ─── Typography ─── */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code",
    "Segoe UI Mono", Consolas, monospace;
}
```

## Parallele OKLCH-Notation (Web/Display)

Optional einzubinden für Wide-Gamut-Optimierung (P3-Displays, HDR-Sektionen). Die Suffix-Konvention `-oklch` macht klar, dass es sich um eine perzeptiv-präzise Variante handelt. Bestehende Komponenten verwenden weiterhin die HEX-Tokens — die OKLCH-Variante ist **additiv**, kein Ersatz.

```css
:root {
  /* ─── Orange — Hue 47°, Chroma-Anker 0.19 ─── */
  --orange-50-oklch:  oklch(96% 0.03 60);
  --orange-100-oklch: oklch(92% 0.06 60);
  --orange-200-oklch: oklch(86% 0.11 58);
  --orange-300-oklch: oklch(78% 0.15 55);
  --orange-400-oklch: oklch(72% 0.18 50);
  --orange-500-oklch: oklch(68% 0.19 47);
  --orange-600-oklch: oklch(62% 0.18 44);
  --orange-700-oklch: oklch(54% 0.16 42);
  --orange-800-oklch: oklch(44% 0.13 40);
  --orange-900-oklch: oklch(34% 0.10 38);

  /* ─── Warm Gray — Hue 50°, Chroma ~0.01 ─── */
  --warm-50-oklch:  oklch(98% 0.005 50);
  --warm-100-oklch: oklch(95% 0.008 50);
  --warm-200-oklch: oklch(89% 0.011 50);
  --warm-300-oklch: oklch(80% 0.012 50);
  --warm-400-oklch: oklch(70% 0.013 50);
  --warm-500-oklch: oklch(60% 0.013 50);
  --warm-600-oklch: oklch(50% 0.013 50);
  --warm-700-oklch: oklch(40% 0.012 50);
  --warm-800-oklch: oklch(30% 0.011 50);
  --warm-900-oklch: oklch(20% 0.009 50);

  /* ─── Neutral Gray — Chroma 0 (achromatisch) ─── */
  --gray-50-oklch:  oklch(97% 0 0);
  --gray-100-oklch: oklch(93% 0 0);
  --gray-200-oklch: oklch(85% 0 0);
  --gray-300-oklch: oklch(77% 0 0);
  --gray-400-oklch: oklch(68% 0 0);
  --gray-500-oklch: oklch(58% 0 0);
  --gray-600-oklch: oklch(48% 0 0);
  --gray-700-oklch: oklch(38% 0 0);
  --gray-800-oklch: oklch(28% 0 0);
  --gray-900-oklch: oklch(18% 0 0);

  /* ─── Brand Neutrals ─── */
  --brand-white-oklch: oklch(100% 0 0);
  --brand-light-oklch: oklch(98% 0.005 50);
  --brand-dark-oklch:  oklch(30% 0.011 50);
  --brand-black-oklch: oklch(20% 0.009 50);

  /* ─── Semantisch (Triade) ─── */
  --success-100-oklch: oklch(94% 0.06 150);
  --success-500-oklch: oklch(70% 0.16 150);
  --success-700-oklch: oklch(50% 0.14 150);
  --warning-100-oklch: oklch(95% 0.07 90);
  --warning-500-oklch: oklch(78% 0.16 80);
  --warning-700-oklch: oklch(58% 0.14 75);
  --error-100-oklch:   oklch(94% 0.04 25);
  --error-500-oklch:   oklch(64% 0.22 25);
  --error-700-oklch:   oklch(50% 0.20 25);
  --info-100-oklch:    oklch(94% 0.04 230);
  --info-500-oklch:    oklch(70% 0.13 230);
  --info-700-oklch:    oklch(48% 0.16 255);

  /* ─── Akzent ─── */
  --accent-blue-oklch:   oklch(58% 0.20 255);
  --accent-teal-oklch:   oklch(60% 0.13 195);
  --accent-amber-oklch:  oklch(68% 0.18 60);
  --accent-indigo-oklch: oklch(58% 0.21 285);
}
```

::: tip Welche Notation wann?

- **Standard-Komponenten**: `var(--orange-500)` — funktioniert überall.
- **Wide-Gamut-Hero, HDR-Sektionen**: `var(--orange-500-oklch)` für maximale Display-Treue.
- **Print-Export, SVG-Logos, Adobe-Workflow**: HEX-Notation aus dem Brand Guide direkt verwenden — niemals aus OKLCH zurückkonvertieren.

→ Vollständige Authority-Hierarchie in der [Methodik-Dokumentation](/de/farben/methodik#authority-hierarchie-pro-medium).
:::

## Verwendung

```css
body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--bg-primary);
}

h1, h2, h3 {
  color: var(--warm-800);
}

a {
  color: var(--orange-700);  /* AA-konform */
}

.btn-primary {
  background: var(--orange-500);
  color: white;
}
```
