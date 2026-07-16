# Design Tokens

Ready-made values for building on-brand interfaces. Every token comes from **one source** (`scripts/tokens.json`) and is identical to the CSS this site itself renders from — so they can never drift apart.

Two parallel notations: **HEX** — canonical, works in every tool (Figma, Adobe, CI, older browsers) — and **OKLCH** — perceptually uniform for wide-gamut (P3) displays and smoother tint ramps. For **print**, CMYK and Pantone apply as well (see [Methodology](/en/colors/methodology)).

## Download

The full token set in four formats — copy-paste or save as a file:

<div class="feature-grid">
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.css" download>
    <div class="icon">📦</div>
    <div class="title">CSS</div>
    <div class="desc">:root custom properties — HEX + parallel OKLCH set.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.scss" download>
    <div class="icon">🎯</div>
    <div class="title">SCSS</div>
    <div class="desc">$ variables plus a nested <code>$bg-colors</code> map.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.json" download>
    <div class="icon">🗂️</div>
    <div class="title">JSON</div>
    <div class="desc">Design-token data for Figma plugins, Style Dictionary, custom tools.</div>
  </a>
  <a class="feature-card" href="/downloads/tokens/bauer-group-tokens.tailwind.cjs" download>
    <div class="icon">🌬️</div>
    <div class="title">Tailwind</div>
    <div class="desc">theme.extend.colors — <code>require()</code> into your tailwind.config.</div>
  </a>
</div>

## Core palette

| Token | Name | HEX | RGB | HSL |
|-------|------|-----|-----|-----|
| <span class="color-swatch"><span class="dot" style="background:var(--bg-orange-500)"></span></span> `orange-500` | BAUER Orange (primary) | `#FF8500` | `255 133 0` | `31° 100% 50%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-orange-700)"></span></span> `orange-700` | Orange text (AA) | `#C2570A` | `194 87 10` | `25° 90% 40%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-warm-800)"></span></span> `warm-800` | Brand Dark | `#3A3430` | `58 52 48` | `36° 9% 21%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-warm-900)"></span></span> `warm-900` | Brand Black | `#231F1C` | `35 31 28` | `26° 11% 12%` |
| <span class="color-swatch"><span class="dot" style="background:var(--bg-neutral-500)"></span></span> `neutral-500` | Print accent | `#7F7F7F` | `127 127 127` | `0° 0% 50%` |

::: info Print spot color
For the primary color in print: **CMYK** `C0 M48 Y100 K0` · **Pantone** `PMS 144 C` (Coated) / `PMS 144 U` (Uncoated). Print shops convert HEX → CMYK via calibrated profiles.
:::

## Orange scale

<div class="color-scale">
  <div style="background:var(--bg-orange-50);color:var(--bg-orange-900)">50</div>
  <div style="background:var(--bg-orange-100);color:var(--bg-orange-900)">100</div>
  <div style="background:var(--bg-orange-200);color:var(--bg-orange-900)">200</div>
  <div style="background:var(--bg-orange-300);color:var(--bg-orange-900)">300</div>
  <div style="background:var(--bg-orange-400);color:#fff">400</div>
  <div style="background:var(--bg-orange-500);color:#fff">500</div>
  <div style="background:var(--bg-orange-600);color:#fff">600</div>
  <div style="background:var(--bg-orange-700);color:#fff">700</div>
  <div style="background:var(--bg-orange-800);color:#fff">800</div>
  <div style="background:var(--bg-orange-900);color:#fff">900</div>
</div>

Full scales (orange, warm gray, neutral gray) with usage rules under **[Color Scales](/en/colors/scales)**.

## Core set (CSS, copy-paste)

The most-used tokens. The **complete** set (all 50 colors incl. OKLCH variants and aliases) via the CSS download above.

```css
:root {
  /* Primary */
  --bg-orange-500: #FF8500; /* Brand Primary */
  --bg-orange-600: #EA6D00; /* Hover */
  --bg-orange-700: #C2570A; /* Text AA on white */

  /* Warm gray (supporting) */
  --bg-warm-600: #6B635C; /* Body text AA */
  --bg-warm-800: #3A3430; /* Headlines */
  --bg-warm-900: #231F1C; /* Brand Black */

  /* Semantic */
  --bg-success-500: #22C55E;
  --bg-warning-500: #EAB308;
  --bg-error-500:   #EF4444;
  --bg-info-500:    #3B82F6;

  /* Role aliases */
  --bg-text: var(--bg-warm-900);
  --bg-text-muted: var(--bg-warm-500);
  --bg-surface: #FFFFFF;
  --bg-border: var(--bg-warm-200);

  /* Typography */
  --bg-font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

## OKLCH notation (web/display)

**Additive, not a replacement:** existing components keep using the HEX tokens. The `-oklch` suffix marks the perceptually-precise variant for wide-gamut displays. Values are derived from the canonical HEX — the full set is in the CSS download.

```css
:root {
  --bg-orange-500-oklch: oklch(68% 0.19 47);  /* = #FF8500 */
  --bg-warm-800-oklch:   oklch(30% 0.011 50);
  --bg-success-500-oklch: oklch(70% 0.16 150);
}
```

::: tip Which notation when?

- **Standard components** → `var(--bg-orange-500)` (HEX): works everywhere, no fallback needed.
- **Wide-gamut hero / P3 displays** → `var(--bg-orange-500-oklch)` for maximum fidelity.
- **SVG logos & asset export** → always HEX straight from the brand guide; never back-convert from OKLCH.

→ Full authority hierarchy in the [Methodology](/en/colors/methodology).
:::

## Semantic tokens

| Purpose | Token | HEX | Use |
|---------|-------|-----|-----|
| Success | `success-500` | `#22C55E` | Confirmation, valid state |
| Warning | `warning-500` | `#EAB308` | Caution, needs attention |
| Error | `error-500` | `#EF4444` | Failure, destructive action |
| Info | `info-500` | `#3B82F6` | Neutral information |

Every semantic color ships as a `-100 / -500 / -700` triad (surface / base / text). Details under [Semantic Colors](/en/colors/semantic).
