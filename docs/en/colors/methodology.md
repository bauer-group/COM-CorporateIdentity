# Methodology & Conventions

This page documents the **how** and **why** behind the BAUER GROUP color system: why OKLCH is maintained alongside HEX, how scales are generated mathematically, which format is authoritative for each medium, and which brand visuals are under special protection.

## Authority Hierarchy by Medium

The color system maintains **multiple notations in parallel**. Which one wins in a conflict depends on the medium:

| Medium | Authority | Reason |
|--------|-----------|--------|
| **Print, printed materials, Pantone mapping** | **HEX** | Print shops convert HEX → CMYK via calibrated profiles. OKLCH approximations would cause print color drift. |
| **Web, apps, display (sRGB, P3, HDR)** | **OKLCH** | Perceptually uniform, hue-stable across lightness, wide-gamut capable on modern displays. |
| **Logo SVG, icons, Adobe/Figma/Sketch** | **HEX** | Maximum tooling compatibility. Adobe Illustrator, Figma, and Sketch read HEX reliably. |
| **Pantone spot colors (premium print)** | **PMS code** | Read directly from the Pantone fan, not derived from HEX. |
| **CMYK four-color print** | **CMYK values from brand guide** | Don't convert from HEX — the brand guide CMYK values are calibrated. |

::: tip Rule of thumb
If a value is needed for a **physical medium** (print, fabric, paint) → use **HEX/CMYK/Pantone**.
If a value is needed for a **display medium** (browser, app, TV) → use **OKLCH**.
The brand guide lists all values in parallel — a 1:1 translation is unnecessary because ΔE < 2 between HEX and OKLCH is guaranteed.
:::

## Why OKLCH?

OKLCH has been available in all evergreen browsers since 2023 (Chrome 111+, Safari 15.4+, Firefox 113+) and solves three structural weaknesses of HEX/RGB:

### 1. Perceptually uniform

Equal **lightness values** appear equally bright across all hues. With HEX/RGB this is not the case — `#FFFF00` (yellow) and `#0000FF` (blue) have the same RGB brightness, but yellow appears noticeably brighter.

<div style="display:flex;gap:0;border-radius:12px;overflow:hidden;height:64px;margin:16px 0;">
  <div style="flex:1;background:oklch(60% 0.13 30);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Red</div>
  <div style="flex:1;background:oklch(60% 0.13 90);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Yellow</div>
  <div style="flex:1;background:oklch(60% 0.13 150);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Green</div>
  <div style="flex:1;background:oklch(60% 0.13 230);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Blue</div>
  <div style="flex:1;background:oklch(60% 0.13 290);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.75rem;">L=60% · Purple</div>
</div>

All five swatches share `Lightness=60%` and appear approximately equally bright optically.

### 2. Hue-stable when darkening

When darkening a color via OKLCH (reducing lightness), the **hue stays stable**. With RGB reduction, an orange always drifts slightly toward brown-red.

### 3. Scale generation

Brand-100 through Brand-900 can be derived mathematically from a single hue value. The scale is automatically perceptually consistent.

## Scale Generation

When the brand family needs to be extended with a new color (e.g. a country-specific secondary color for a new subsidiary), the new scale follows this methodology:

### Step 1 — Define the anchor

Pick a **hue** (e.g. `47°` for Brand Orange) and a **maximum chroma** (e.g. `0.19` for Brand-500).

### Step 2 — Generate the lightness ramp

Generate the 9-step scale via OKLCH lightness stepping:

| Step | Lightness | Chroma ratio |
|------|-----------|--------------|
| `-50` | 96 % | 15 % of max |
| `-100` | 92 % | 30 % |
| `-200` | 86 % | 55 % |
| `-300` | 78 % | 80 % |
| `-400` | 72 % | 95 % |
| **`-500`** | **68 %** | **100 % (anchor)** |
| `-600` | 62 % | 95 % |
| `-700` | 54 % | 84 % |
| `-800` | 44 % | 68 % |
| `-900` | 34 % | 53 % |

::: details Why the chroma ratio isn't constant
Chroma values are **not held constant** because in extreme lightness ranges that would produce unrealistic or out-of-gamut colors. Instead, they follow a slightly bell-shaped curve peaking at `-500`. In light steps (`-50`/`-100`) and dark steps (`-800`/`-900`), chroma is reduced so colors don't appear "neon-like" or "smeared".
:::

### Step 3 — Verify the values

- **WCAG contrast** between `-100` and `-700` at least 7:1 (AAA).
- **Out-of-gamut check**: confirm the OKLCH values are representable in sRGB. If not, reduce chroma.
- **HEX conversion** with ΔE < 2 for print fidelity.

### Example: how Brand Orange was generated

```text
Anchor:  Hue=47°, max chroma=0.19, anchor step=500
Steps:   Lightness 96% → 92% → 86% → 78% → 72% → 68% → 62% → 54% → 44% → 34%
Result:  orange-50 → orange-100 → ... → orange-900

Verification:
  orange-100 (#FFEDD5) on orange-700 (#C2570A) = 8.2:1 → AAA ✓
  All steps representable in sRGB ✓
  ΔE between HEX and OKLCH approximation: 1.4 → ΔE < 2 ✓
```

## Gradient Protection Rule

::: warning Mandatory brand convention
**Brand Orange gradients are untouchable.** They are the primary visual recognition feature of the brand. Their consistency across all touchpoints takes precedence over the technical purity of any token system.
:::

### Which gradients are protected

Protected are all gradients that use **Brand Orange as a central component** and appear in one of these contexts:

- **Hero headline gradients** (linear gradient within the orange family, typically `orange-500` → `orange-300`)
- **Primary CTA glows** (radial glow effects around the main action button)
- **Badge tinting** (orange outline with ~8 % Brand Orange fill)
- **CTA card backgrounds** (135° gradients within the orange `-500`/`-700` range)
- **Section hero glows** (radial blur, brand- or semantic-tinted)

### What's allowed (swap implementation)

```css
/* BEFORE — hardcoded */
background: linear-gradient(135deg, #FF8500, #C2570A);

/* AFTER — token-based (render output identical) */
background: linear-gradient(135deg, var(--bg-orange-500), var(--bg-orange-700));
```

→ **Allowed**: replacing hardcoded values with token references, as long as the render output remains **pixel-identical**.

### What's not allowed (changing render output)

```css
/* WRONG — new color tones, different visual impression */
background: linear-gradient(135deg, var(--bg-orange-400), var(--bg-orange-600));

/* WRONG — different angle, different stop position */
background: linear-gradient(180deg, var(--bg-orange-500) 20%, var(--bg-orange-700));
```

→ **Not allowed**: a token refactor changing the render output. When in doubt: leave the hardcoded value and introduce a new token that captures exactly that value.

::: tip Practical heuristic
If a refactor of a Brand Orange gradient produces **a non-zero diff in a screenshot comparison**, it's no longer a pure token refactor — it's a brand change. Brand changes need brand manager approval; token refactors don't.
:::

## Notation Conventions in the Brand Guide

| Convention | Example | When |
|------------|---------|------|
| **HEX first** | `#FF8500` | Standard column in every table |
| **OKLCH second column** | `oklch(68% 0.19 47)` | Next to HEX, never as a replacement |
| **CSS variable HEX** | `--bg-orange-500` | Standard token |
| **CSS variable OKLCH** | `--bg-orange-500-oklch` | Suffix `-oklch` for wide-gamut optimization |
| **Semantic alias** | `--bg-text` | References a scale token, never HEX directly |

## Verification Tools

For scale extensions, these tools have proven useful:

- **OKLCH picker** ([oklch.com](https://oklch.com)) — interactive scale visualization with gamut warnings
- **Leonardo** (Adobe, [leonardocolor.io](https://leonardocolor.io)) — automatic contrast calculation for scales
- **WCAG Contrast Checker** — final verification of every `-100`/`-700` triad

::: info Future-proof
The methodology is intentionally **mathematically deterministic**: a single hue/chroma anchor produces the entire 10-step scale. This makes future brand extensions — new subsidiaries, country-specific accents, event campaign colors — reproducible and consistent with the master brand.
:::
