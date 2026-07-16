# Design Tokens

Fertige Werte zum Bauen markenkonformer Oberflächen. Alle Tokens stammen aus **einer Quelle** (`scripts/tokens.json`) und sind identisch mit dem CSS, aus dem diese Website selbst rendert — sie können also nicht auseinanderlaufen.

Zwei parallele Notationen: **HEX** — kanonisch, funktioniert in jedem Werkzeug (Figma, Adobe, CI, ältere Browser) — und **OKLCH** — perzeptiv gleichabständig für Wide-Gamut-Displays (P3) und weichere Tonwertverläufe. Für **Print** gelten zusätzlich CMYK und Pantone (siehe [Methodik](/de/farben/methodik)).

## Herunterladen

Das vollständige Token-Set in vier Formaten — kopieren oder als Datei speichern:

<div class="feature-grid">
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.css" download>
    <div class="icon">📦</div>
    <div class="title">CSS</div>
    <div class="desc">:root Custom Properties — HEX + paralleles OKLCH-Set.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.scss" download>
    <div class="icon">🎯</div>
    <div class="title">SCSS</div>
    <div class="desc">$-Variablen plus verschachtelte <code>$bg-colors</code>-Map.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.json" download>
    <div class="icon">🗂️</div>
    <div class="title">JSON</div>
    <div class="desc">Design-Token-Struktur für Figma-Plugins, Style-Dictionary, eigene Tools.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.tailwind.cjs" download>
    <div class="icon">🌬️</div>
    <div class="title">Tailwind</div>
    <div class="desc">theme.extend.colors — <code>require()</code> in die tailwind.config.</div>
  </a>
</div>

## Kernpalette

| Token | Name | HEX | RGB | HSL |
|-------|------|-----|-----|-----|
| <span class="color-swatch"><span class="dot" style="background:var(--bg-orange-500)"></span></span> `orange-500` | BAUER Orange (Primär) | `#FF8500` | `255 133 0` | `31° 100% 50%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-orange-700)"></span></span> `orange-700` | Orange Text (AA) | `#C2570A` | `194 87 10` | `25° 90% 40%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-warm-800)"></span></span> `warm-800` | Brand Dark | `#3A3430` | `58 52 48` | `36° 9% 21%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-warm-900)"></span></span> `warm-900` | Brand Black | `#231F1C` | `35 31 28` | `26° 11% 12%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-neutral-500)"></span></span> `neutral-500` | Print-Akzent | `#7F7F7F` | `127 127 127` | `0° 0% 50%` |

::: info Print-Sonderfarbe
Für die Primärfarbe gelten im Druck: **CMYK** `C0 M48 Y100 K0` · **Pantone** `PMS 144 C` (Coated) / `PMS 144 U` (Uncoated). Druckereien wandeln HEX → CMYK über kalibrierte Profile.
:::

## Orange-Skala

<div class="color-scale">
  <div style="background:var(--bg-orange-50);color:#7C3A0A">50</div>
  <div style="background:var(--bg-orange-100);color:#7C3A0A">100</div>
  <div style="background:var(--bg-orange-200);color:#7C3A0A">200</div>
  <div style="background:var(--bg-orange-300);color:#7C3A0A">300</div>
  <div style="background:var(--bg-orange-400);color:#fff">400</div>
  <div style="background:var(--bg-orange-500);color:#fff">500</div>
  <div style="background:var(--bg-orange-600);color:#fff">600</div>
  <div style="background:var(--bg-orange-700);color:#fff">700</div>
  <div style="background:var(--bg-orange-800);color:#fff">800</div>
  <div style="background:var(--bg-orange-900);color:#fff">900</div>
</div>

Vollständige Skalen (Orange, Warm-Grau, Neutral-Grau) mit Anwendungsregeln unter **[Farbskalen](/de/farben/skalen)**.

## Kern-Set (CSS, zum Kopieren)

Die meistgenutzten Tokens. Das **vollständige** Set (alle 50 Farben inkl. OKLCH-Varianten und Aliase) über den CSS-Download oben.

```css
:root {
  /* Primär */
  --bg-orange-500: #FF8500; /* Brand Primary */
  --bg-orange-600: #EA6D00; /* Hover */
  --bg-orange-700: #C2570A; /* Text AA auf Weiß */

  /* Warm-Grau (unterstützend) */
  --bg-warm-600: #6B635C; /* Fließtext AA */
  --bg-warm-800: #3A3430; /* Headlines */
  --bg-warm-900: #231F1C; /* Brand Black */

  /* Semantisch */
  --bg-success-500: #22C55E;
  --bg-warning-500: #EAB308;
  --bg-error-500:   #EF4444;
  --bg-info-500:    #3B82F6;

  /* Rollen-Aliase */
  --bg-text: var(--bg-warm-900);
  --bg-text-muted: var(--bg-warm-500);
  --bg-surface: #FFFFFF;
  --bg-border: var(--bg-warm-200);

  /* Typografie */
  --bg-font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

## OKLCH-Notation (Web/Display)

**Additiv, kein Ersatz:** bestehende Komponenten nutzen weiter die HEX-Tokens. Das Suffix `-oklch` markiert die perzeptiv-präzise Variante für Wide-Gamut-Displays. Werte werden aus dem kanonischen HEX abgeleitet — vollständig im CSS-Download.

```css
:root {
  --bg-orange-500-oklch: oklch(68% 0.19 47);  /* = #FF8500 */
  --bg-warm-800-oklch:   oklch(30% 0.011 50);
  --bg-success-500-oklch: oklch(70% 0.16 150);
}
```

::: tip Welche Notation wann?

- **Standard-Komponenten** → `var(--bg-orange-500)` (HEX): funktioniert überall, kein Fallback nötig.
- **Wide-Gamut-Hero / P3-Displays** → `var(--bg-orange-500-oklch)` für maximale Treue.
- **SVG-Logos & Asset-Export** → immer HEX direkt aus dem Brand Guide; niemals aus OKLCH zurückkonvertieren.

→ Vollständige Authority-Hierarchie in der [Methodik](/de/farben/methodik).
:::

## Semantische Tokens

| Zweck | Token | HEX | Anwendung |
|-------|-------|-----|-----------|
| Erfolg | `success-500` | `#22C55E` | Bestätigung, gültiger Zustand |
| Warnung | `warning-500` | `#EAB308` | Achtung, Aufmerksamkeit nötig |
| Fehler | `error-500` | `#EF4444` | Fehlschlag, destruktive Aktion |
| Information | `info-500` | `#3B82F6` | Neutrale Hinweise |

Jede Semantikfarbe gibt es als Triade `-100 / -500 / -700` (Fläche / Basis / Text). Details unter [Semantische Farben](/de/farben/semantisch).
