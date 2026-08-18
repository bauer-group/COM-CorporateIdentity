# Lockups

Alongside the Bildmarke and the wide logo there are **two generated lockups**. Both **extend** the existing logo system — the Bildmarke and the wide logo remain valid unchanged.

| Lockup | Construction | Use |
|--------|--------------|-----|
| **Division lockup** | Bildmarke left, "BAUER GROUP" above the division name right | Profit centres and divisions: website headers, app bars, signatures, letterhead |
| **Tagline lockup** | Full wide logo, with a tagline below it on a shared left edge | Campaigns, title slides, trade fair, advertising, image brochures |

::: danger Binding
There are exactly **these two** lockups. No third line, no combination of the two, no legal form and no location inside a lockup.
:::

::: info Placeholder used throughout this documentation
The examples show the neutral placeholder **COMPLIANCE**. It exists purely to demonstrate construction and measurements and is **not a real division**.
:::

## Division lockup

<LockupPreview kind="divisions" lang="en" />

The division lockup is **exactly as tall and exactly as wide** as the wide logo. Any layout built for the wide logo takes a division lockup without modification.

### Measurements

All values are multiples of **X** — the height of the "B" inside the Bildmarke, as defined in [Clearspace & sizes](/en/logo/clearspace).

| Measurement | X ratio | Units |
|-------------|---------|-------|
| **Bildmarke height** | 2.2176 X | 59.720 |
| **Wordmark cap height** | 0.6636 X | 17.871 |
| **Division line cap height** | 0.45 X | 12.118 |
| **Bildmarke → text gap** | 0.3583 X | 9.649 |
| **Baseline 1 → cap line 2** | 0.18 X | 4.847 |
| **Baseline distance** | 0.63 X | 16.966 |
| **Tracking** | 0.08 em | — |

### Alignment

- The division line is **flush left with the wordmark**, not with the Bildmarke.
- **The Bildmarke and the wordmark both stay untouched** — each sits exactly where it sits in the wide logo. The division line hangs below.
- The whole text block stays within the Bildmarke's height, which is why the lockup is exactly as tall as the wide logo.

::: tip Why the wordmark does not move up
Optically centring the two-line block would push the wordmark up by **8.481 units** — 14.2 % of the height. That alters the registered mark's internal geometry even though not a single path is touched. The lockup declines to do that, which is what makes it usable without a trademark review.

In the wide logo the wordmark is aligned to the "B" of the Bildmarke: its centre sits at 29.116, the "B" centre at 29.117 — identical to within ±0.0015 units. That exact alignment is preserved.

If the centred variant is ever needed, set `compactAlignment` in `scripts/lockups.json` to `block-centered` — as a deliberate decision, not a default.
:::

::: warning Length limit
The division line must **never be wider than the wordmark** (200.559 units). The generator aborts with a clear message otherwise. `COMPLIANCE` uses 61 % of it.
:::

## Tagline lockup

<LockupPreview kind="taglines" width="420px" lang="en" />

The wide logo stays **completely untouched**. The tagline hangs below it and shares its **left edge** with the Bildmarke — giving the whole lockup a single, continuous left axis.

### Measurements

| Measurement | X ratio | Units |
|-------------|---------|-------|
| **Logo block** | unchanged | 269.940 × 59.720 |
| **Logo → tagline gap** | 0.30 X | 8.079 |
| **Tagline cap height** | 0.30 X | 8.079 |
| **Tracking** | 0.10 em | — |
| **Total height** | 2.8434 X | 76.572 |

::: tip One number instead of two
The gap and the tagline's cap height are **the same value**: 0.30 X. Know the gap and you know the type size — and the other way round.
:::

### Why there is no divider rule

A full-width rule separates what belongs together: it pushes itself between the mark and the statement and introduces a third, purely decorative layer. Here the relationship is carried by the **shared left edge** and a **defined gap** — both are part of the construction and cannot be left out.

### Why the tagline takes the wordmark's colour

At 0.30 X the tagline is the **smallest type in the entire logo system**. It therefore gets the highest contrast, not the lowest: it inherits the wordmark's ink, so `#231F20` on light and white on dark.

| Background | Wordmark ink `#231F20` | Orange 800 `#9A4509` |
|------------|------------------------|---------------------|
| White `#FFFFFF` | **16.30 ✅** | 6.50 ✅ |
| Grey 50 `#FAFAFA` | **15.62 ✅** | 6.23 ✅ |
| Grey 100 `#F4F4F5` | **14.83 ✅** | 5.92 ✅ |
| Warm 100 `#F0EDEA` | **13.98 ✅** | 5.58 ✅ |

The generator reads that colour **out of the master** on every run rather than storing it. The tagline can therefore never drift from the wordmark — not even after the masters are re-exported.

::: warning Orange is reserved for the division name
A whole sentence in orange competes with the Bildmarke. Within the lockup system orange marks **the division name** — a name — not a statement.
:::

### All taglines

Every tagline in [Brand values & mission](/en/brand/) exists as a finished lockup. All four share **exactly the same bounding box** (269.940 × 76.572), because the descender of the "Q" is always reserved — which makes them interchangeable without re-tuning a single layout.

<LockupGallery kind="taglines" lang="en" />

::: warning Length limit
The tagline must **never be wider than the wide logo** (269.940 units). The longest current tagline uses 97 % of it — leaving barely any room for another one. The generator aborts rather than running past the edge.
:::

## Clearspace & minimum sizes

::: warning Exception to the clearspace rule
A lockup is **one single piece of artwork**, not a logo with an element next to it. Its clearspace of 1 × X is therefore measured from the **lockup's bounding box**, not from the wide logo's.

The division name and the tagline are the **only** elements that may ever sit inside the logo's clearspace — and only in the two positions defined here. Everything else stays excluded.
:::

| Lockup | Digital | Print |
|--------|---------|-------|
| **Division lockup** | 40 px height | 12 mm height |
| **Tagline lockup** | 220 px width | 60 mm width |

The division lockup inherits the Bildmarke's minimum size exactly — there is no new number to remember. The tagline lockup needs more, because at 0.30 X its tagline is the smallest type in the system: at 220 px width it stands at 6.6 px cap height, at 60 mm at 1.8 mm.

::: danger Below the minimum size
Below these sizes the division name and the tagline become illegible. The existing rule then applies: **the Bildmarke alone** or **the wide logo alone**, with no addition.

:::

## Assets

Two files per entry, named after the existing scheme:

```text
bauer-group-lockup-<slug>.svg           division, light
bauer-group-lockup-<slug>-white.svg     division, dark
bauer-group-tagline-<slug>.svg          tagline, light
bauer-group-tagline-<slug>-white.svg    tagline, dark
```

Plus PNGs at 960, 1440 and 2048 px width under `/downloads/png/`, generated automatically. Every file is **rebuilt on every build** — none of them live in the repository.

<LockupGallery kind="divisions" lang="en" />

## Adding a new entry

Lockups are generated, not drawn. A new division or a new tagline is **one line** in `scripts/lockups.json`:

```json
{ "divisions": [{ "slug": "compliance", "name": "Compliance", "nameEn": "Compliance" }],
  "taglines":  [{ "slug": "today-tomorrow-together", "text": "Today. Tomorrow. Together." }] }
```

Then:

```bash
npm run generate
```

That is all: SVGs, PNGs, previews and download cards on this page and under [Downloads](/en/downloads/) follow automatically. The build runs `npm run generate` before every `docs:build` anyway — so every deploy carries the complete, current set.

The generator copies the Bildmarke and the wordmark **byte for byte** out of the masters and verifies that on every run. The added line is converted to outlines from a bundled font — the finished SVGs carry no font dependency at all and open in Illustrator, Canva or InDesign without font substitution.

::: tip Never rebuild by hand
Never assemble a lockup manually. If a master deviates, the generator aborts with a clear message — hand-built files have no such safeguard.
:::

## Rules

::: danger Forbidden

- Never **re-typeset the wordmark** — lockups come from the generator and nowhere else
- Never set the division name **in Orange 500** or in any colour other than Orange 800 / Orange 400
- Never **recolour the tagline** — it always carries the wordmark's ink
- **No divider rule**, no frame, no bar between the logo and the tagline
- **No third line**, no legal form, no location inside a lockup
- Never **combine** a division name and a tagline — a lockup carries exactly one added line
- Division lockup never below **40 px / 12 mm**, tagline lockup never below 220 px / 60 mm
- Never **centre** the added line — it is always flush left
:::

In addition, all [misuses](/en/logo/donts) of the base logo continue to apply unchanged.

::: info Known inconsistencies in the existing assets
The documentation quotes `#231F1F` for "BAUER" and a grey `#52525B` for "GROUP". In the artwork, however, **all ten letter paths carry the same colour** `#231F20`, and the orange in the SVG masters is `#F57E13` rather than the token value `#FF8500`. The lockup adopts the masters unchanged and does not amplify the discrepancy. Cleaning this up is a separate topic.
:::
