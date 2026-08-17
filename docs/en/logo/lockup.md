# Lockup — Divisions

Profit centres and business divisions appear with a **two-line lockup**: "BAUER GROUP" on top, the division name below. The lockup **extends** the existing logo system — the Bildmarke and the wide logo remain valid and unchanged.

## Which variant when

| Variant | Structure | Use |
|---------|-----------|-----|
| **Compact** | Bildmarke left, two-line text block right | Website headers, app bars, signatures, anywhere height is tight |
| **Stacked** | Full wide logo on top, division line below | Letterhead, business cards, trade fair, print, certificates |

::: danger Binding
There are exactly **two** layouts. No third one, no third line, no claim, no legal form inside the lockup.
:::

## Compact

<div class="logo-stage light">
  <img src="/brand/lockups/bauer-group-lockup-georgia-compact.svg" alt="BAUER GROUP Georgia — compact lockup" style="max-width: 380px" />
</div>

<div class="logo-stage dark">
  <img src="/brand/lockups/bauer-group-lockup-georgia-compact-white.svg" alt="BAUER GROUP Georgia — compact lockup on dark" style="max-width: 380px" />
</div>

The compact lockup is **exactly as tall and as wide** as the wide logo. Any layout built for the wide logo takes a compact lockup without modification.

### Measurements

All values as multiples of **X** — the height of the "B" inside the Bildmarke, as defined in [Clear Space & Sizes](/en/logo/clearspace).

| Measurement | X ratio | Units |
|-------------|---------|-------|
| **Bildmarke height** | 2.2176 X | 59.720 |
| **Wordmark cap height** | 0.6636 X | 17.871 |
| **Division cap height** | 0.45 X | 12.119 |
| **Gap Bildmarke → text** | 0.3583 X | 9.649 |
| **Baseline 1 → cap top 2** | 0.18 X | 4.847 |
| **Baseline to baseline** | 0.63 X | 16.966 |

### Alignment

- The division line is **flush left with the wordmark**, not with the Bildmarke.
- The two-line text block is optically centred on the **"B" of the Bildmarke** — not on the diamond's centre.
- The Bildmarke never moves; only the wordmark shifts upward to make room for the second line.

::: tip Why the "B" and not the diamond
In the wide logo the wordmark's centre sits at 29.116 and the "B" centre at 29.117 — identical to within ±0.0015 units. The logo has always been aligned to the "B". The lockup inherits that rule unchanged.
:::

## Stacked

<div class="logo-stage light">
  <img src="/brand/lockups/bauer-group-lockup-georgia-stacked.svg" alt="BAUER GROUP Georgia — stacked lockup" style="max-width: 380px" />
</div>

<div class="logo-stage dark">
  <img src="/brand/lockups/bauer-group-lockup-georgia-stacked-white.svg" alt="BAUER GROUP Georgia — stacked lockup on dark" style="max-width: 380px" />
</div>

### Measurements

| Measurement | X ratio | Units |
|-------------|---------|-------|
| **Logo block** | unchanged | 269.940 × 59.720 |
| **Gap logo → rule** | 0.22 X | 5.925 |
| **Rule weight** | 0.06 X | 1.616 |
| **Gap rule → division line** | 0.22 X | 5.925 |
| **Total height** | 3.2062 X | 86.345 |

### Divider rule

The rule is **mandatory**, not optional. It spans the full width of the lockup and carries **the same colour as the division line**. Here the division line is flush left with the **Bildmarke** (x = 0) so the whole lockup shares one left edge.

## Colours

| Element | Light | Dark |
|---------|-------|------|
| **Bildmarke** | Orange + white "B" — unchanged | unchanged |
| **Wordmark** | Dark | White |
| **Division line & rule** | Orange 800 `#9A4509` | Orange 400 `#FB923C` |

### Why not Orange 500

The division name is **text**, not a decorative element. Orange 500 reaches only **2.44:1** on white and fails WCAG AA outright. Orange 700 is not enough either: it passes on pure white only and fails on every other [approved background](/en/logo/variants).

| Background | Orange 700 | Orange 800 |
|------------|-----------|-----------|
| White `#FFFFFF` | 4.50 ✅ | **6.50 ✅** |
| Gray 50 `#FAFAFA` | 4.32 ❌ | **6.23 ✅** |
| Gray 100 `#F4F4F5` | 4.10 ❌ | **5.92 ✅** |
| Warm 100 `#F0EDEA` | 3.86 ❌ | **5.58 ✅** |

On dark, Orange 400 ranges from **7.23** to **9.28** — AA everywhere. See [Contrast Checks](/en/accessibility/contrast).

## Clear space & minimum sizes

::: warning Exception to the clear-space rule
The lockup is **one single piece of artwork**, not a logo with an element beside it. The 1 × X clear space is therefore measured from the **lockup's own bounding box**, not from the wide logo's.

The division line is the **only** element ever permitted inside the logo's clear space, and only in the two positions defined here. Everything else stays out.
:::

| Variant | Digital | Print |
|---------|---------|-------|
| **Compact** | 40 px height | 12 mm height |
| **Stacked** | 180 px width | 50 mm width |

Compact inherits the Bildmarke's existing minimum exactly — there is no new number to remember. Stacked needs 180 px rather than the wide logo's 160 px, because below that the divider rule shrinks to under one pixel.

::: danger Below the minimum
Below these sizes the division name becomes illegible. The existing rule then applies: **Bildmarke only**, without the division.
:::

## Assets

Four files per division, named after the established scheme:

```text
bauer-group-lockup-<slug>-compact.svg          light
bauer-group-lockup-<slug>-compact-white.svg    dark
bauer-group-lockup-<slug>-stacked.svg          light
bauer-group-lockup-<slug>-stacked-white.svg    dark
```

Plus automatic PNGs at 960, 1440 and 2048 px width under `/downloads/png/`.

<div class="download-grid">
  <div class="download-card">
    <div class="preview"><img src="/brand/lockups/bauer-group-lockup-georgia-compact.svg" alt="Georgia compact" /></div>
    <div class="body">
      <div class="title">Georgia — Compact</div>
      <div class="note">Headers, app bars, signatures</div>
      <div class="links">
        <a href="/brand/lockups/bauer-group-lockup-georgia-compact.svg" download>SVG light</a>
        <a href="/brand/lockups/bauer-group-lockup-georgia-compact-white.svg" download>SVG dark</a>
        <a href="/downloads/png/bauer-group-lockup-georgia-compact-2048.png" download>PNG 2048</a>
      </div>
    </div>
  </div>
  <div class="download-card">
    <div class="preview"><img src="/brand/lockups/bauer-group-lockup-georgia-stacked.svg" alt="Georgia stacked" /></div>
    <div class="body">
      <div class="title">Georgia — Stacked</div>
      <div class="note">Letterhead, print, trade fair</div>
      <div class="links">
        <a href="/brand/lockups/bauer-group-lockup-georgia-stacked.svg" download>SVG light</a>
        <a href="/brand/lockups/bauer-group-lockup-georgia-stacked-white.svg" download>SVG dark</a>
        <a href="/downloads/png/bauer-group-lockup-georgia-stacked-2048.png" download>PNG 2048</a>
      </div>
    </div>
  </div>
</div>

## Adding a new division

Lockups are generated, not drawn. A new division is **one line** in `scripts/lockups.json`:

```json
{ "slug": "georgia", "name": "Georgia", "nameEn": "Georgia" }
```

Then:

```bash
npm run generate
```

The generator copies the Bildmarke and the wordmark **byte for byte** from the masters and verifies that on every run. The division line is converted to outlines from a bundled font — the finished SVGs carry no font dependency and open in Illustrator, Canva or InDesign without font substitution.

::: tip Never rebuild by hand
Never assemble a lockup manually. If a master drifts, the generator aborts with a clear message — hand-built files have no such safeguard.
:::

## Rules

::: danger Forbidden

- Never **re-typeset the wordmark** — lockups come from the generator only
- Division line **never in Orange 500**, and in no colour other than the two specified
- **No third line**, no claim, no legal form, no location inside the lockup
- Compact never **below 40 px / 12 mm**, stacked never below 180 px / 50 mm
- Never omit or recolour the **divider rule** in the stacked lockup
- Never **centre** the division line — it is always flush left
:::

All [misuse rules](/en/logo/donts) for the base logo continue to apply unchanged.

::: info Known inconsistencies in the existing assets
The documentation states `#231F1F` for "BAUER" and a grey `#52525B` for "GROUP". In the artwork, however, **all ten letter paths carry the same colour** `#231F20`, and the orange in the SVG masters is `#F57E13` rather than the token value `#FF8500`. The lockup copies the masters unchanged and does not amplify the discrepancy. Resolving it is a separate topic.
:::
