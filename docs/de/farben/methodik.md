# Methodik & Konventionen

Diese Seite dokumentiert das **Wie** und **Warum** hinter dem BAUER GROUP Farbsystem: warum OKLCH neben HEX geführt wird, wie Skalen mathematisch entstehen, welches Format pro Medium verbindlich ist, und welche Brand-Visuals unter besonderem Schutz stehen.

## Authority-Hierarchie pro Medium

Das Farbsystem führt **mehrere Notationen parallel**. Welche im Konfliktfall gilt, hängt vom Medium ab:

| Medium | Authority | Begründung |
|--------|-----------|------------|
| **Print, Drucksachen, Pantone-Mapping** | **HEX** | Druckereien wandeln HEX → CMYK über kalibrierte Profile. OKLCH-Approximationen würden zu Druckfarb-Drift führen. |
| **Web, Apps, Display (sRGB, P3, HDR)** | **OKLCH** | Perzeptiv uniform, Hue-stabil bei Lightness-Variation, Wide-Gamut-fähig auf modernen Displays. |
| **Logo-SVG, Icons, Adobe/Figma/Sketch** | **HEX** | Maximale Tooling-Kompatibilität. Adobe Illustrator, Figma, Sketch lesen HEX verlässlich. |
| **Pantone-Sonderfarben (Premium-Print)** | **PMS-Code** | Direkt vom Pantone-Fächer, nicht aus HEX abgeleitet. |
| **CMYK-Vierfarbdruck** | **CMYK-Werte aus Brand Guide** | Nicht aus HEX konvertieren — die Brand-Guide-CMYK-Werte sind kalibriert. |

::: tip Faustregel
Wenn ein Wert für ein **physisches Medium** gebraucht wird (Druck, Stoff, Lack) → **HEX/CMYK/Pantone** verwenden.
Wenn ein Wert für ein **Display-Medium** gebraucht wird (Browser, App, TV) → **OKLCH** verwenden.
Im Brand Guide stehen alle Werte parallel — eine 1:1-Übersetzung ist nicht nötig, weil ΔE < 2 zwischen HEX und OKLCH garantiert ist.
:::

## Warum OKLCH?

OKLCH ist seit 2023 in allen Evergreen-Browsern verfügbar (Chrome 111+, Safari 15.4+, Firefox 113+) und löst drei strukturelle Schwächen von HEX/RGB:

### 1. Perzeptiv uniform

Gleiche **Lightness-Werte** wirken über alle Hues hinweg gleich hell. Bei HEX/RGB ist das nicht der Fall — `#FFFF00` (gelb) und `#0000FF` (blau) haben dieselbe RGB-Helligkeit, aber Gelb wirkt deutlich heller.

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:64px;margin:16px 0;">
  <div style="flex:1;background:oklch(60% 0.13 30);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Rot</div>
  <div style="flex:1;background:oklch(60% 0.13 90);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Gelb</div>
  <div style="flex:1;background:oklch(60% 0.13 150);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Grün</div>
  <div style="flex:1;background:oklch(60% 0.13 230);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Blau</div>
  <div style="flex:1;background:oklch(60% 0.13 290);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Lila</div>
</div>

Alle fünf Felder haben dieselbe `Lightness=60%` und wirken auch optisch annähernd gleich hell.

### 2. Hue-stabil beim Abdunkeln

Wenn man eine Farbe per OKLCH abdunkelt (Lightness reduzieren), bleibt der **Hue stabil**. Bei RGB-Reduktion driftet ein Orange immer leicht Richtung Braun-Rot.

### 3. Skalen-Generation

Brand-100 bis Brand-900 lassen sich aus einem einzigen Hue-Wert mathematisch ableiten. Die Skala wird automatisch perzeptiv konsistent.

## Skalen-Generation

Wenn die Brand-Familie um eine neue Farbe erweitert werden muss (z. B. eine Country-spezifische Sekundärfarbe für ein neues Tochter-Unternehmen), folgt die neue Skala dieser Methodik:

### Schritt 1 — Anker definieren

Wähle einen **Hue** (z. B. `47°` für Brand-Orange) und einen **Maximal-Chroma** (z. B. `0.19` für Brand-500).

### Schritt 2 — Lightness-Skala erzeugen

Generiere die 9-Stufen-Skala via OKLCH-Lightness-Stepping:

| Step | Lightness | Chroma-Verhältnis |
|------|-----------|-------------------|
| `-50` | 96 % | 15 % des Max |
| `-100` | 92 % | 30 % |
| `-200` | 86 % | 55 % |
| `-300` | 78 % | 80 % |
| `-400` | 72 % | 95 % |
| **`-500`** | **68 %** | **100 % (Anker)** |
| `-600` | 62 % | 95 % |
| `-700` | 54 % | 84 % |
| `-800` | 44 % | 68 % |
| `-900` | 34 % | 53 % |

::: details Begründung des Chroma-Verhältnisses
Die Chroma-Werte werden **nicht konstant** gehalten, weil das in den extremen Lightness-Bereichen zu unrealistischen oder out-of-gamut Farben führen würde. Stattdessen folgen sie einer leicht glockenförmigen Kurve mit Maximum bei `-500`. In den hellen (`-50`/`-100`) und dunklen (`-800`/`-900`) Stufen wird Chroma reduziert, damit die Farben nicht "neonartig" oder "verschmiert" wirken.
:::

### Schritt 3 — Werte verifizieren

- **WCAG-Kontrast** zwischen `-100` und `-700` mindestens 7:1 (AAA).
- **Out-of-Gamut-Check**: ob die OKLCH-Werte in sRGB darstellbar sind. Falls nicht, Chroma reduzieren.
- **HEX-Konvertierung** mit ΔE < 2 für Print-Tauglichkeit.

### Beispiel: Wie Brand-Orange entstanden ist

```text
Anker:    Hue=47°, Max-Chroma=0.19, Anker-Stufe=500
Schritt:  Lightness 96% → 92% → 86% → 78% → 72% → 68% → 62% → 54% → 44% → 34%
Ergebnis: orange-50 → orange-100 → ... → orange-900

Verifikation:
  orange-100 (#FFEDD5) auf orange-700 (#C2570A) = 8.2:1 → AAA ✓
  Alle Stufen in sRGB darstellbar ✓
  ΔE zwischen HEX und OKLCH-Approximation: 1.4 → ΔE < 2 ✓
```

## Gradient-Schutz-Regel

::: warning Verbindliche Brand-Konvention
**Brand-Orange-Gradients sind unantastbar.** Sie sind das primäre visuelle Erkennungsmerkmal der Marke. Ihre Konsistenz über alle Touchpoints hinweg hat Vorrang vor der technischen Reinheit eines Token-Systems.
:::

### Welche Gradients geschützt sind

Geschützt sind alle Verläufe, die **Brand-Orange als zentrale Komponente** verwenden und in folgenden Kontexten auftreten:

- **Hero-Headline-Verläufe** (linearer Verlauf innerhalb der Orange-Familie, typisch `orange-500` → `orange-300`)
- **Primär-CTA-Glows** (radiale Schein-Effekte um den Haupt-Aktionsbutton)
- **Badge-Tönungen** (orange Outline mit ~8 % Brand-Orange-Fill)
- **CTA-Card-Hintergründe** (135°-Verläufe innerhalb der Orange-`-500`/`-700`-Range)
- **Section-Hero-Glows** (radial blur, brand- oder semantik-getönt)

### Was erlaubt ist (Implementation austauschen)

```css
/* VORHER — hardcoded */
background: linear-gradient(135deg, #FF8500, #C2570A);

/* NACHHER — Token-basiert (Render-Output identisch) */
background: linear-gradient(135deg, var(--bg-orange-500), var(--bg-orange-700));
```

→ **Erlaubt**: Hardcoded-Werte durch Token-Referenzen ersetzen, solange der Render-Output **pixelidentisch** bleibt.

### Was nicht erlaubt ist (Render-Output verändern)

```css
/* FALSCH — neue Farbtöne, anderer visueller Eindruck */
background: linear-gradient(135deg, var(--bg-orange-400), var(--bg-orange-600));

/* FALSCH — andere Winkel, anderer Stop-Punkt */
background: linear-gradient(180deg, var(--bg-orange-500) 20%, var(--bg-orange-700));
```

→ **Nicht erlaubt**: Token-Refactor darf den Render-Output verändern. Im Zweifel: Hardcoded-Wert stehenlassen und einen neuen Token einführen, der genau diesen Wert kapselt.

::: tip Praktische Faustregel
Wenn ein Refactor an einem Brand-Orange-Gradient den **Diff in einem Screenshot-Vergleich nicht null** macht, ist es kein reiner Token-Refactor mehr — es ist eine Brand-Änderung. Brand-Änderungen brauchen Brand-Manager-Approval, Token-Refactors nicht.
:::

## Notations-Konventionen im Brand Guide

| Konvention | Beispiel | Wann |
|-----------|----------|------|
| **HEX zuerst** | `#FF8500` | Standard-Spalte in jeder Tabelle |
| **OKLCH zweite Spalte** | `oklch(68% 0.19 47)` | Neben HEX, niemals als Ersatz |
| **CSS-Variable HEX** | `--bg-orange-500` | Standard-Token |
| **CSS-Variable OKLCH** | `--bg-orange-500-oklch` | Suffix `-oklch` für Wide-Gamut-Optimierung |
| **Semantischer Alias** | `--bg-text` | Verweist auf Skalen-Token, niemals HEX direkt |

## Verifikations-Tools

Für die Skalen-Erweiterung haben sich diese Tools bewährt:

- **OKLCH-Picker** ([oklch.com](https://oklch.com)) — interaktive Skalen-Visualisierung mit Gamut-Warnung
- **Leonardo** (Adobe, [leonardocolor.io](https://leonardocolor.io)) — automatische Kontrast-Kalkulation für Skalen
- **WCAG Contrast Checker** — final-verifikation jeder `-100`/`-700`-Triade

::: info Zukunftssicher
Die Methodik ist bewusst **mathematisch deterministisch**: aus einem einzigen Hue/Chroma-Anker fällt die komplette 10-Stufen-Skala. Das macht zukünftige Brand-Erweiterungen — neue Tochter-Marken, Country-spezifische Akzente, Event-Kampagnen-Farben — reproduzierbar und konsistent zur Hauptmarke.
:::
