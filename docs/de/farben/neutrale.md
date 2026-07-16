# Neutrale Farben — Brand Neutrals

Die BAUER GROUP definiert vier Markenneutralen als feste Referenzpunkte. Diese sind aus der [Warm-Gray-Skala](/de/farben/sekundaer) abgeleitet und bilden die Eckpfeiler für Hintergrund-, Text- und Flächengestaltung.

## Brand-Neutrals

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
    <div style="background:var(--bg-brand-white);height:56px;border-bottom:1px solid #E4E4E7;"></div>
    <div style="padding:14px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Brand White</div>
      <div style="font-family:ui-monospace,monospace;font-size:0.75rem;color:#71717A;margin-top:2px;">#FFFFFF</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
    <div style="background:var(--bg-brand-light);height:56px;"></div>
    <div style="padding:14px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Brand Light</div>
      <div style="font-family:ui-monospace,monospace;font-size:0.75rem;color:#71717A;margin-top:2px;">#F9F8F6</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
    <div style="background:var(--bg-brand-dark);height:56px;"></div>
    <div style="padding:14px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Brand Dark</div>
      <div style="font-family:ui-monospace,monospace;font-size:0.75rem;color:#71717A;margin-top:2px;">#3A3430</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
    <div style="background:var(--bg-brand-black);height:56px;"></div>
    <div style="padding:14px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Brand Black</div>
      <div style="font-family:ui-monospace,monospace;font-size:0.75rem;color:#71717A;margin-top:2px;">#231F1C</div>
    </div>
  </div>
</div>

## Spezifikation

| Name | HEX | OKLCH | RGB | CMYK | Warm-Gray-Stufe |
|------|-----|-------|-----|------|-----------------|
| **Brand White** | `#FFFFFF` | `oklch(100% 0 0)` | `255, 255, 255` | `C0 M0 Y0 K0` | — |
| **Brand Light** | `#F9F8F6` | `oklch(98% 0.005 50)` | `249, 248, 246` | `C0 M0 Y1 K2` | Warm 50 |
| **Brand Dark** | `#3A3430` | `oklch(30% 0.011 50)` | `58, 52, 48` | `C0 M8 Y13 K77` | Warm 800 |
| **Brand Black** | `#231F1C` | `oklch(20% 0.009 50)` | `35, 31, 28` | `C0 M9 Y14 K86` | Warm 900 |

## Mapping zur Warm-Gray-Skala

Die Brand-Neutrals sind **direkte Referenzpunkte** aus der Warm-Gray-Skala — kein Mapping-Abstand wie bei separaten Systemen.

<div style="display:flex;flex-direction:column;gap:8px;margin:24px 0;">
  <div style="display:flex;align-items:center;gap:0;border-radius:8px;overflow:hidden;height:40px;">
    <div style="flex:1;background:var(--bg-brand-light);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:var(--bg-brand-dark);">Brand Light #F9F8F6</div>
    <div style="width:2px;background:white;height:100%;"></div>
    <div style="flex:1;background:var(--bg-brand-light);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:var(--bg-brand-dark);">= Warm 50 #F9F8F6</div>
  </div>
  <div style="display:flex;align-items:center;gap:0;border-radius:8px;overflow:hidden;height:40px;">
    <div style="flex:1;background:var(--bg-brand-dark);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:white;">Brand Dark #3A3430</div>
    <div style="width:2px;background:white;height:100%;"></div>
    <div style="flex:1;background:var(--bg-brand-dark);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:white;">= Warm 800 #3A3430</div>
  </div>
  <div style="display:flex;align-items:center;gap:0;border-radius:8px;overflow:hidden;height:40px;">
    <div style="flex:1;background:var(--bg-brand-black);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:white;">Brand Black #231F1C</div>
    <div style="width:2px;background:white;height:100%;"></div>
    <div style="flex:1;background:var(--bg-brand-black);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:white;">= Warm 900 #231F1C</div>
  </div>
</div>

::: info Wann welches System?

- **Brand-Neutrals** für offizielle Markenmaterialien, Print, Marketing-Assets — die 4 festen Referenzwerte
- **Warm-Gray-Skala** für digitale Interfaces, wo feingranulare Abstufungen (50–900) mit warmem Unterton benötigt werden
- **Neutral-Gray-Skala** für Print-Raster, technische Elemente und sachliche Darstellungen ohne Farbunterton — siehe [Farbskalen → Neutral-Gray](/de/farben/skalen#neutral-gray-skala)

:::

## Barrierefreiheit

| Kombination | Kontrast | WCAG | Status |
|-------------|----------|------|--------|
| Brand Black auf Brand White | ~16.6:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand Black auf Brand Light | ~16.1:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand White auf Brand Dark | ~12.3:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand White auf Brand Black | ~16.6:1 | AAA | <span class="contrast-pass">AAA</span> |
| Orange auf Brand Black | ~6.8:1 | AA | <span class="contrast-pass">AA</span> |
| Orange auf Brand Dark | ~5.0:1 | AA | <span class="contrast-pass">AA</span> |

## Anwendungsbeispiele

### Sektions-Wechsel

<div style="border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.1);margin:24px 0;">
  <div style="background:var(--bg-brand-white);padding:24px 20px;">
    <div style="color:var(--bg-brand-dark);font-weight:700;margin-bottom:4px;">Primärer Inhalt</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Brand White (#FFFFFF) als Standard-Hintergrund</div>
  </div>
  <div style="background:var(--bg-brand-light);padding:24px 20px;">
    <div style="color:var(--bg-brand-dark);font-weight:700;margin-bottom:4px;">Sekundäre Sektion</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Brand Light (#F9F8F6) — warmer Hintergrund für visuelle Trennung</div>
  </div>
  <div style="background:var(--bg-brand-dark);padding:24px 20px;">
    <div style="color:var(--bg-brand-white);font-weight:700;margin-bottom:4px;">Dunkle Sektion</div>
    <div style="color:var(--bg-warm-300);font-size:0.85em;">Brand Dark (#3A3430) für Kontrast und Tiefe</div>
  </div>
  <div style="background:var(--bg-brand-black);padding:24px 20px;">
    <div style="color:var(--bg-brand-white);font-weight:700;margin-bottom:4px;">Footer-Bereich</div>
    <div style="color:var(--bg-warm-400);font-size:0.85em;">Brand Black (#231F1C) für tiefe Bereiche</div>
  </div>
</div>

### Komplette Markenfarbpalette

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:48px;margin:24px 0;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <div style="flex:1;background:var(--bg-brand-white);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:var(--bg-brand-dark);border:1px solid #E0DBD6;border-right:0;border-radius:12px 0 0 12px;">White</div>
  <div style="flex:1;background:var(--bg-brand-light);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:var(--bg-brand-dark);">Light</div>
  <div style="flex:1;background:var(--bg-orange-500);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;">Orange</div>
  <div style="flex:1;background:var(--bg-brand-dark);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;">Dark</div>
  <div style="flex:1;background:var(--bg-brand-black);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;border-radius:0 12px 12px 0;">Black</div>
</div>

## Print & Produktion

| Name | CMYK | Pantone (nächster) |
|------|------|--------------------|
| **Brand White** | `C0 M0 Y0 K0` | — |
| **Brand Light** | `C0 M0 Y1 K2` | — |
| **Brand Dark** | `C0 M8 Y13 K77` | PMS 411 C |
| **Brand Black** | `C0 M9 Y14 K86` | PMS Black 7 C |

::: warning Druckhinweis
Brand Dark und Brand Black sind **nicht reines Schwarz** (K100) — sie enthalten bewusst einen warmen Unterton (M+Y > 0). Für tiefes Schwarz bei großen Flächen `C40 M30 Y20 K100` als reiches Schwarz verwenden.
:::

## CSS Custom Properties

```css
:root {
  /* HEX — Print-Authority, Tooling-Fallback */
  --brand-white: #FFFFFF;
  --brand-light: #F9F8F6;  /* = Warm 50 */
  --brand-dark:  #3A3430;  /* = Warm 800 */
  --brand-black: #231F1C;  /* = Warm 900 */

  /* OKLCH — Web/Display-Authority */
  --brand-white-oklch: oklch(100% 0 0);
  --brand-light-oklch: oklch(98% 0.005 50);
  --brand-dark-oklch:  oklch(30% 0.011 50);
  --brand-black-oklch: oklch(20% 0.009 50);
}
```

::: info Aliase auf Warm-Gray
`--brand-light`, `--brand-dark` und `--brand-black` sind **semantische Aliase** auf die Warm-Gray-Skala. Wer alternativ direkt mit Skalen-Tokens arbeiten möchte, kann auch die Warm-Token-Variante verwenden — siehe [Semantische Aliase](/de/farben/aliase).
:::
