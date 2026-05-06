# Akzentfarben

Akzentfarben ergänzen das Orange-Grau-Farbsystem für Visualisierungen, Diagramme, Tags und andere Unterscheidungsmerkmale. Sie wurden bewusst gewählt, um die Primärfarbe Orange zu komplementieren — nicht zu überlagern.

## Farbpalette

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="background:#2563EB;color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Blue<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#2563EB</span></div>
  <div style="background:#0D9488;color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Teal<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#0D9488</span></div>
  <div style="background:#D97706;color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Amber<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#D97706</span></div>
  <div style="background:#6366F1;color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Indigo<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#6366F1</span></div>
</div>

| Name | HEX | OKLCH | Vorschau | Anwendung |
|------|-----|-------|----------|-----------|
| **Blue** | `#2563EB` | `oklch(58% 0.20 255)` | <span style="display:inline-block;width:48px;height:24px;background:#2563EB;border-radius:4px;vertical-align:middle;"></span> | Links, Trust-Signale (Banking, Compliance), interaktive Elemente, Diagramme |
| **Teal** | `#0D9488` | `oklch(60% 0.13 195)` | <span style="display:inline-block;width:48px;height:24px;background:#0D9488;border-radius:4px;vertical-align:middle;"></span> | Sekundäre Marker, Checkpoints in Process-Flows, Alternative Kategorie |
| **Amber** | `#D97706` | `oklch(68% 0.18 60)` | <span style="display:inline-block;width:48px;height:24px;background:#D97706;border-radius:4px;vertical-align:middle;"></span> | Reserviert (NICHT mit Brand-Orange verwechseln) — siehe Warnhinweis |
| **Indigo** | `#6366F1` | `oklch(58% 0.21 285)` | <span style="display:inline-block;width:48px;height:24px;background:#6366F1;border-radius:4px;vertical-align:middle;"></span> | Premium-Marker, Enterprise-Features, kreative Akzente |

::: info Hinweis
**Slate (#475569)** wurde aus der Akzentpalette entfernt. Für neutrale Töne die [Warm-Gray-Skala](/de/farben/sekundaer) verwenden.
:::

## Zusammenspiel mit Orange

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:56px;margin:24px 0;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <div style="flex:2;background:#FF8500;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Orange (Primär)</div>
  <div style="flex:1;background:#2563EB;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Blue</div>
  <div style="flex:1;background:#0D9488;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Teal</div>
  <div style="flex:1;background:#D97706;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Amber</div>
  <div style="flex:1;background:#6366F1;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Indigo</div>
</div>

### Warum diese Farben?

| Farbe | Begründung |
|-------|-----------|
| **Blue** | Komplementär zu Orange — maximaler Kontrast bei harmonischer Wirkung |
| **Teal** | Kühle Brücke zwischen Blau und Grün — technisch, frisch |
| **Amber** | Warme Erweiterung der Orange-Familie — natürlicher Farbfluss |
| **Indigo** | Kräftiger Blauton für kreative Akzente und Highlights |

## Diagramm-Reihenfolge

<div class="color-scale" style="height:40px;">
  <div style="background:#FF8500;color:white;">1. Orange</div>
  <div style="background:#2563EB;color:white;">2. Blue</div>
  <div style="background:#0D9488;color:white;">3. Teal</div>
  <div style="background:#D97706;color:white;">4. Amber</div>
  <div style="background:#6366F1;color:white;">5. Indigo</div>
</div>

## Anwendungsregeln

Akzentfarben sind **tertiär** in der BAUER GROUP Hierarchie. Sie kommen NUR zum Einsatz, wenn Brand-Orange dominanten Charakter hätte (Multi-Color-Vergleichs-Tabellen, mehrfarbige Diagramme, Status-Differenzierung jenseits Success/Warning/Error/Info). Im **Standard-Layout kommt eine Seite ohne Akzentfarben aus**.

1. Akzentfarben sind **nie** die dominante Farbe — sie ergänzen Orange
2. Maximal **2 Akzentfarben** pro Ansicht verwenden
3. Akzentfarben werden primär in **Datenvisualisierungen** eingesetzt
4. **Blue** ist die bevorzugte Akzentfarbe für interaktive Elemente und Trust-Signale (Banking, Compliance)
5. **Amber** nur einsetzen, wenn genug visueller Abstand zu Orange besteht — siehe Warnhinweis unten

::: warning Amber vs. Brand-Orange
Amber (`#D97706`) liegt **perzeptiv sehr nah** an Brand-Orange (`#FF8500`) — in OKLCH unterscheiden sich die Hues nur um ~13° (60° vs. 47°). In schmalen Diagramm-Streifen oder kleinen Badges ist der Unterschied für viele Betrachter nicht eindeutig zu erkennen. **Empfehlung:** Amber nur in großen Flächen mit deutlicher räumlicher Trennung zu Brand-Orange einsetzen. In Datenvisualisierungen mit Brand-Orange als Primär-Serie: Amber meiden, stattdessen Teal oder Indigo wählen.
:::

## CSS Custom Properties

```css
:root {
  /* HEX (Print-Authority, Tooling-Fallback) */
  --accent-blue:   #2563EB;
  --accent-teal:   #0D9488;
  --accent-amber:  #D97706;
  --accent-indigo: #6366F1;

  /* OKLCH (Web/Display-Authority) */
  --accent-blue-oklch:   oklch(58% 0.20 255);
  --accent-teal-oklch:   oklch(60% 0.13 195);
  --accent-amber-oklch:  oklch(68% 0.18 60);
  --accent-indigo-oklch: oklch(58% 0.21 285);
}
```
