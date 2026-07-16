# Neutral Colors — Brand Neutrals

BAUER GROUP defines four brand neutrals as fixed reference points. They are derived from the [Warm Gray Scale](/en/colors/secondary) and form the cornerstones for background, text, and surface design.

## Brand Neutrals

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

## Specification

| Name | HEX | OKLCH | RGB | CMYK | Warm Gray step |
|------|-----|-------|-----|------|----------------|
| **Brand White** | `#FFFFFF` | `oklch(100% 0 0)` | `255, 255, 255` | `C0 M0 Y0 K0` | — |
| **Brand Light** | `#F9F8F6` | `oklch(98% 0.005 50)` | `249, 248, 246` | `C0 M0 Y1 K2` | Warm 50 |
| **Brand Dark** | `#3A3430` | `oklch(30% 0.011 50)` | `58, 52, 48` | `C0 M8 Y13 K77` | Warm 800 |
| **Brand Black** | `#231F1C` | `oklch(20% 0.009 50)` | `35, 31, 28` | `C0 M9 Y14 K86` | Warm 900 |

## Mapping to the Warm Gray scale

The brand neutrals are **direct reference points** from the Warm Gray scale — no mapping distance, unlike systems with separate neutrals.

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

::: info Which system, when?

- **Brand neutrals** for official brand materials, print, marketing assets — the four fixed reference values
- **Warm Gray scale** for digital interfaces where fine-grained steps (50–900) with a warm undertone are needed
- **Neutral Gray scale** for print rasters, technical elements, and factual presentations without color undertone — see [Color Scales → Neutral Gray](/en/colors/scales#neutral-gray-scale)

:::

## Accessibility

| Combination | Contrast | WCAG | Status |
|-------------|----------|------|--------|
| Brand Black on Brand White | ~16.6:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand Black on Brand Light | ~16.1:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand White on Brand Dark | ~12.3:1 | AAA | <span class="contrast-pass">AAA</span> |
| Brand White on Brand Black | ~16.6:1 | AAA | <span class="contrast-pass">AAA</span> |
| Orange on Brand Black | ~6.8:1 | AA | <span class="contrast-pass">AA</span> |
| Orange on Brand Dark | ~5.0:1 | AA | <span class="contrast-pass">AA</span> |

## Application examples

### Section transitions

<div style="border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.1);margin:24px 0;">
  <div style="background:var(--bg-brand-white);padding:24px 20px;">
    <div style="color:var(--bg-brand-dark);font-weight:700;margin-bottom:4px;">Primary content</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Brand White (#FFFFFF) as the standard background</div>
  </div>
  <div style="background:var(--bg-brand-light);padding:24px 20px;">
    <div style="color:var(--bg-brand-dark);font-weight:700;margin-bottom:4px;">Secondary section</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Brand Light (#F9F8F6) — warm background for visual separation</div>
  </div>
  <div style="background:var(--bg-brand-dark);padding:24px 20px;">
    <div style="color:var(--bg-brand-white);font-weight:700;margin-bottom:4px;">Dark section</div>
    <div style="color:var(--bg-warm-300);font-size:0.85em;">Brand Dark (#3A3430) for contrast and depth</div>
  </div>
  <div style="background:var(--bg-brand-black);padding:24px 20px;">
    <div style="color:var(--bg-brand-white);font-weight:700;margin-bottom:4px;">Footer area</div>
    <div style="color:var(--bg-warm-400);font-size:0.85em;">Brand Black (#231F1C) for deep regions</div>
  </div>
</div>

### Complete brand color palette

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:48px;margin:24px 0;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <div style="flex:1;background:var(--bg-brand-white);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:var(--bg-brand-dark);border:1px solid #E0DBD6;border-right:0;border-radius:12px 0 0 12px;">White</div>
  <div style="flex:1;background:var(--bg-brand-light);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:var(--bg-brand-dark);">Light</div>
  <div style="flex:1;background:var(--bg-orange-500);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;">Orange</div>
  <div style="flex:1;background:var(--bg-brand-dark);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;">Dark</div>
  <div style="flex:1;background:var(--bg-brand-black);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:600;color:white;border-radius:0 12px 12px 0;">Black</div>
</div>

## Print & production

| Name | CMYK | Pantone (closest) |
|------|------|-------------------|
| **Brand White** | `C0 M0 Y0 K0` | — |
| **Brand Light** | `C0 M0 Y1 K2` | — |
| **Brand Dark** | `C0 M8 Y13 K77` | PMS 411 C |
| **Brand Black** | `C0 M9 Y14 K86` | PMS Black 7 C |

::: warning Print note
Brand Dark and Brand Black are **not pure black** (K100) — they intentionally carry a warm undertone (M+Y > 0). For deep black on large surfaces, use rich black `C40 M30 Y20 K100`.
:::

## CSS Custom Properties

```css
:root {
  /* HEX — print authority, tooling fallback */
  --brand-white: #FFFFFF;
  --brand-light: #F9F8F6;  /* = Warm 50 */
  --brand-dark:  #3A3430;  /* = Warm 800 */
  --brand-black: #231F1C;  /* = Warm 900 */

  /* OKLCH — web/display authority */
  --brand-white-oklch: oklch(100% 0 0);
  --brand-light-oklch: oklch(98% 0.005 50);
  --brand-dark-oklch:  oklch(30% 0.011 50);
  --brand-black-oklch: oklch(20% 0.009 50);
}
```

::: info Aliases on Warm Gray
`--brand-light`, `--brand-dark`, and `--brand-black` are **semantic aliases** on top of the Warm Gray scale. To work directly with scale tokens instead, use the warm-token variants — see [Semantic Aliases](/en/colors/aliases).
:::
