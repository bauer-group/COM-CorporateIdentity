# Accent Colors

Accent colors complement the orange-gray system for visualizations, charts, tags, and other distinguishing markers. They were chosen deliberately to **complement** the primary color orange — not to compete with it.

## Color palette

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="background:var(--bg-accent-blue);color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Blue<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#2563EB</span></div>
  <div style="background:var(--bg-accent-teal);color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Teal<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#0D9488</span></div>
  <div style="background:var(--bg-accent-amber);color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Amber<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#D97706</span></div>
  <div style="background:var(--bg-accent-indigo);color:white;padding:20px 24px;border-radius:12px;font-weight:700;min-width:120px;text-align:center;">Indigo<br><span style="font-weight:400;font-size:0.85em;opacity:0.85;">#6366F1</span></div>
</div>

| Name | HEX | OKLCH | Preview | Usage |
|------|-----|-------|---------|-------|
| **Blue** | `#2563EB` | `oklch(58% 0.20 255)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-accent-blue);border-radius:4px;vertical-align:middle;"></span> | Links, trust signals (banking, compliance), interactive elements, charts |
| **Teal** | `#0D9488` | `oklch(60% 0.13 195)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-accent-teal);border-radius:4px;vertical-align:middle;"></span> | Secondary markers, checkpoints in process flows, alternative category |
| **Amber** | `#D97706` | `oklch(68% 0.18 60)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-accent-amber);border-radius:4px;vertical-align:middle;"></span> | Reserved (do NOT confuse with Brand Orange) — see warning |
| **Indigo** | `#6366F1` | `oklch(58% 0.21 285)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-accent-indigo);border-radius:4px;vertical-align:middle;"></span> | Premium markers, enterprise features, creative accents |

::: info Note
**Slate (#475569)** has been removed from the accent palette. For neutral tones, use the [Warm Gray scale](/en/colors/secondary) instead.
:::

## Interaction with orange

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:56px;margin:24px 0;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <div style="flex:2;background:var(--bg-orange-500);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Orange (primary)</div>
  <div style="flex:1;background:var(--bg-accent-blue);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Blue</div>
  <div style="flex:1;background:var(--bg-accent-teal);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Teal</div>
  <div style="flex:1;background:var(--bg-accent-amber);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Amber</div>
  <div style="flex:1;background:var(--bg-accent-indigo);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">Indigo</div>
</div>

### Why these colors?

| Color | Reasoning |
|-------|-----------|
| **Blue** | Complementary to orange — maximum contrast with harmonious effect |
| **Teal** | Cool bridge between blue and green — technical, fresh |
| **Amber** | Warm extension of the orange family — natural color flow |
| **Indigo** | Strong blue tone for creative accents and highlights |

## Chart ordering

<div class="color-scale" style="height:40px;">
  <div style="background:var(--bg-orange-500);color:white;">1. Orange</div>
  <div style="background:var(--bg-accent-blue);color:white;">2. Blue</div>
  <div style="background:var(--bg-accent-teal);color:white;">3. Teal</div>
  <div style="background:var(--bg-accent-amber);color:white;">4. Amber</div>
  <div style="background:var(--bg-accent-indigo);color:white;">5. Indigo</div>
</div>

## Application rules

Accent colors are **tertiary** in the BAUER GROUP hierarchy. They only appear when Brand Orange would have a dominant character (multi-color comparison tables, multi-series charts, status differentiation beyond Success/Warning/Error/Info). In **standard layout, a page works without accent colors**.

1. Accent colors are **never** the dominant color — they complement orange
2. Use a maximum of **2 accent colors** per view
3. Accent colors are primarily used in **data visualizations**
4. **Blue** is the preferred accent for interactive elements and trust signals (banking, compliance)
5. **Amber** only when there's enough visual distance from orange — see warning below

::: warning Amber vs. Brand Orange
Amber (`#D97706`) sits **perceptually very close** to Brand Orange (`#FF8500`) — in OKLCH the hues differ by only ~13° (60° vs. 47°). In narrow chart strips or small badges, the difference isn't unambiguous to many viewers. **Recommendation:** use Amber only in large surfaces with clear spatial separation from Brand Orange. In data visualizations with Brand Orange as the primary series: avoid Amber, choose Teal or Indigo instead.
:::

## CSS Custom Properties

```css
:root {
  /* HEX (print authority, tooling fallback) */
  --accent-blue:   #2563EB;
  --accent-teal:   #0D9488;
  --accent-amber:  #D97706;
  --accent-indigo: #6366F1;

  /* OKLCH (web/display authority) */
  --accent-blue-oklch:   oklch(58% 0.20 255);
  --accent-teal-oklch:   oklch(60% 0.13 195);
  --accent-amber-oklch:  oklch(68% 0.18 60);
  --accent-indigo-oklch: oklch(58% 0.21 285);
}
```
