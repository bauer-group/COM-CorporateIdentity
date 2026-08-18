# Lockups

Alongside the Bildmarke and the wide logo there are **two generated lockups**. Both **extend** the existing logo system — the Bildmarke and the wide logo remain valid unchanged.

| Lockup | Construction | Use |
|--------|--------------|-----|
| **Division lockup** | Bildmarke left, "BAUER GROUP" above the division name right | Profit centres and divisions: website headers, app bars, signatures, letterhead |
| **Tagline lockup** | Full wide logo, with a divider rule and a centred tagline below it | Campaigns, title slides, trade fair, advertising, image brochures |

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
- The two-line text block is optically centred on the **"B" of the Bildmarke** — not on the centre of the diamond.
- The Bildmarke stays untouched; the wordmark moves up by 8.481 units so the block sits centred.

::: tip Why the "B" and not the diamond
In the wide logo the centre of the wordmark sits at 29.116 and the centre of the "B" at 29.117 — identical to within ±0.0015 units. The logo has always aligned to the "B"; the lockup carries that rule over to the two-line block.
:::

::: warning Needs trademark sign-off
Centring shifts the wordmark by **8.481 units** — 14.2 % of the height — relative to the Bildmarke. No path is altered, but the registered mark's internal geometry is. That belongs with whoever owns the trademark before the lockup goes out.

The alternative is ready: setting `compactAlignment` in `scripts/lockups.json` to `wordmark-fixed` keeps the wordmark exactly where it sits in the wide logo. The two-line block then sits visibly lower and reads as appended — which is why it is not the default.
:::

::: warning Length limit
The division line must **never be wider than the wordmark** (200.559 units). The generator aborts with a clear message otherwise. `COMPLIANCE` uses 61 % of it.
:::

## Tagline lockup

<LockupPreview kind="taglines" width="420px" lang="en" />

The wide logo stays **completely untouched**. Below it a thin rule sets the statement off optically, and the tagline is **centred on the full width** of the lockup.

### Measurements

| Measurement | X ratio | Units |
|-------------|---------|-------|
| **Logo block** | unchanged | 269.940 × 59.720 |
| **Logo → rule gap** | 0.22 X | 5.925 |
| **Rule weight** | 0.05 X | 1.347 |
| **Rule → tagline gap** | 0.22 X | 5.925 |
| **Tagline cap height** | 0.30 X | 8.079 |
| **Tracking** | 0.10 em | — |
| **Total height** | 3.0334 X | 81.689 |

::: tip Equal gap above and below
At **0.22 X** the rule sits symmetrically between the logo and the tagline. It is no closer to either, so it reads as a separation rather than as something appended.
:::

### The divider rule

The rule spans the **full width** of the lockup and carries the same colour as the tagline. It is **mandatory** and may be neither omitted nor recoloured.

Its weight of 0.05 X is set by the minimum sizes, not chosen freely: at 220 px width it renders at **1.10 px**, at 60 mm at **0.30 mm**. A finer rule — 0.03 X, say — would look more elegant at large sizes but would drop to 0.66 px at 220 px and 0.18 mm in print, and disappear. Making it finer means raising the minimum sizes.

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

Every tagline in [Brand values & mission](/en/brand/) exists as a finished lockup. All four share **exactly the same bounding box** (269.940 × 81.689), because the descender of the "Q" is always reserved — which makes them interchangeable without re-tuning a single layout.

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
