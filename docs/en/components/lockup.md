# Brand Lockup

The web expression of the [division lockup](/en/logo/lockup). The Bildmarke and the wordmark stay artwork; only the division name is real text — which keeps it selectable, translatable and searchable without ever re-typesetting the protected wordmark.

## Preview

<div class="logo-stage light">
  <a class="bg-lockup" href="/en/" aria-label="BAUER GROUP Compliance — home" style="--bg-lockup-size: 56px">
    <img class="mark" src="/brand/bauer-group-icon.svg" alt="" width="60" height="60" decoding="async">
    <span class="text">
      <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg" alt="" width="1003" height="91" decoding="async">
      <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg" alt="" width="1003" height="91" decoding="async">
      <span class="division">Compliance</span>
    </span>
  </a>
</div>

<div class="logo-stage dark">
  <a class="bg-lockup" href="/en/" aria-label="BAUER GROUP Compliance — home" style="--bg-lockup-size: 56px">
    <img class="mark" src="/brand/bauer-group-icon.svg" alt="" width="60" height="60" decoding="async">
    <span class="text">
      <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg" alt="" width="1003" height="91" decoding="async">
      <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg" alt="" width="1003" height="91" decoding="async">
      <span class="division">Compliance</span>
    </span>
  </a>
</div>

## Specification

| Property | Value | Origin |
|----------|-------|--------|
| **Control knob** | `--bg-lockup-size` | Bildmarke height, drives everything else |
| **Default size** | `40px` | also the minimum size |
| **Gap mark → text** | `0.1616 × size` | 0.3583 X |
| **Wordmark height** | `0.3046 × size` | ink height 18.191 / 59.72 |
| **Division font size** | `0.29 × size` | yields a 0.45 X cap height |
| **Line gap** | `0.0785 × size` | from the wordmark ink box's bottom edge |
| **Clear space** | `0.451 × size` | 1 × X, enforced as `padding` |

## HTML

```html
<a class="bg-lockup" href="/" aria-label="BAUER GROUP Compliance — home">
  <img class="mark" src="/brand/bauer-group-icon.svg"
       alt="" width="60" height="60" decoding="async" fetchpriority="high">
  <span class="text">
    <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg"
         alt="" width="1003" height="91" decoding="async" fetchpriority="high">
    <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg"
         alt="" width="1003" height="91" decoding="async">
    <span class="division">Compliance</span>
  </span>
</a>
```

The accessible name sits on the link as `aria-label`; every image carries `alt=""`. That is the right call here because the light and dark wordmarks are swapped — an `alt` on both would be announced twice or not at all depending on the theme. The visible text is contained in the label (WCAG 2.5.3).

## CSS

```css
.bg-lockup {
  --bg-lockup-size: 40px;              /* the only knob: height of the Bildmarke */
  display: inline-flex;
  align-items: flex-start;      /* not center — see below */
  gap: calc(var(--bg-lockup-size) * 0.1616);
  padding: calc(var(--bg-lockup-size) * 0.451);   /* clear space = 1 × X */
  text-decoration: none;
  color: inherit;
}

.bg-lockup .mark {
  inline-size: var(--bg-lockup-size);
  block-size: var(--bg-lockup-size);
  min-block-size: 40px;                /* minimum size, hard */
  flex: none;
}

.bg-lockup .text {
  display: flex;
  flex-direction: column;
  margin-block-start: calc(var(--bg-lockup-size) * 0.33523);   /* 20.0195 / 59.72 */
  gap: calc(var(--bg-lockup-size) * 0.0785);
}

.bg-lockup .wordmark {
  block-size: calc(var(--bg-lockup-size) * 0.3046);
  inline-size: auto;
}

.bg-lockup .division {
  font-family: var(--bg-font-body);
  font-size: calc(var(--bg-lockup-size) * 0.29);
  font-size-adjust: cap-height 0.7;    /* pins the cap height across platforms */
  font-synthesis: none;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  color: var(--bg-orange-800);
}

@supports (text-box: trim-both cap alphabetic) {
  .bg-lockup .division { text-box: trim-both cap alphabetic; }
}

.bg-lockup .wordmark-dark { display: none; }
.dark .bg-lockup .wordmark-light { display: none; }
.dark .bg-lockup .wordmark-dark { display: block; }
.dark .bg-lockup .division { color: var(--bg-orange-400); }

.bg-lockup:focus-visible {
  outline: 3px solid var(--bg-orange-500);
  outline-offset: 2px;
  border-radius: 8px;
}

@media (forced-colors: active) {
  .bg-lockup:focus-visible { outline-color: CanvasText; }
}

@media print {
  .bg-lockup { padding: 0; }
  .bg-lockup .mark { block-size: 12mm; inline-size: 12mm; }
  .bg-lockup .division { color: #000; print-color-adjust: exact; }
}
```

### Why `flex-start` and not `center`

The wordmark sits exactly where it sits in the wide logo — its ink top at 20.0195 of 59.72, i.e. `0.33523 × size` below the top of the Bildmarke. An `align-items: center` would centre the text block and in doing so shift the wordmark relative to the Bildmarke. That would alter the registered mark's internal geometry without a single path being touched.

### Why `font-size-adjust` is not optional

System fonts differ substantially in cap height per font size. Without correction the division line drifts by up to **13 %** depending on the operating system:

| Font | Cap height per em |
|------|------------------|
| Segoe UI (Windows) | 0.7002 |
| Arial | 0.7163 |
| Calibri | 0.6318 |

`font-size-adjust: cap-height 0.7` scales every font so its cap height is exactly 0.7 × font size, making the line identical everywhere. Supported from Chrome 127, Firefox 92 and Safari 17.

`text-box: trim-both cap alphabetic` additionally trims the line box to the cap top and baseline, driving the residual offset to zero. Available from Chrome 133 and Safari 18.2; without support the deviation stays below one pixel.

## Astro component

```astro
---
interface Props {
  division?: string
  href?: string | null
  size?: string
  label?: string
  base?: string
}
const {
  division,
  href = '/',
  size,
  label = division ? `BAUER GROUP ${division}` : 'BAUER GROUP',
  base = '/brand',
} = Astro.props

const Tag = href ? 'a' : 'span'
const attrs = href ? { href } : { role: 'img' }
const style = size ? `--bg-lockup-size: ${size}` : undefined
---

<Tag class="bg-lockup" aria-label={label} style={style} {...attrs}>
  <img class="mark" src={`${base}/bauer-group-icon.svg`}
       alt="" width="60" height="60" decoding="async" fetchpriority="high" />
  <span class="text">
    <img class="wordmark wordmark-light" src={`${base}/bauer-group-wordmark.svg`}
         alt="" width="1003" height="91" decoding="async" fetchpriority="high" />
    <img class="wordmark wordmark-dark" src={`${base}/bauer-group-wordmark-white.svg`}
         alt="" width="1003" height="91" decoding="async" />
    {division && <span class="division">{division}</span>}
  </span>
</Tag>
```

Without `division` the component renders the plain wordmark lockup — so a page can adopt it before its division is decided. With `href={null}` it emits a `<span role="img">` instead of a link, for footers and PDF exports.

::: warning No default slot
The component deliberately has no default slot. Foreign content inside would land in the clear space. Additional elements belong **beside** the lockup, not within it.
:::

## States

| State | Behaviour |
|-------|-----------|
| **Default** | Wordmark dark, division line Orange 800 |
| **Dark mode** | Wordmark white, division line Orange 400 |
| **Hover** | No change — the logo is not a button |
| **Focus** | 3 px ring in Orange 500, 2 px offset |
| **Forced colors** | Ring in `CanvasText` |
| **Print** | Clear space dropped, Bildmarke 12 mm, division line black |
| **Below 40 px** | `min-block-size` visibly breaks the layout |

::: tip The minimum size breaks on purpose
`min-block-size: 40px` overrides a `--bg-lockup-size` that is too small. The layout then visibly shifts — deliberately: a loud failure in development beats an undersized mark in production.
:::

::: warning Accessibility
`aria-label` on the link, `alt=""` on every image. Division line in Orange 800 on light (5.58–6.50:1) and Orange 400 on dark (7.23–9.28:1) — both WCAG 2.1 AA. Orange 500 is excluded as a text colour, see [Contrast Checks](/en/accessibility/contrast).
:::
