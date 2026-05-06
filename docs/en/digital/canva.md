# Canva — Design Workflow

BAUER GROUP uses **Canva** as the central design platform for print materials, promotional items and digital content. Finished drafts are embedded directly into this brand guide via Canva embed links.

## Why Canva?

| Benefit | Details |
|---------|---------|
| **Central design tool** | All drafts in one place — business cards, flyers, social media, banners |
| **Team access** | Shared workspace for all design templates |
| **Brand kit** | Colors, fonts and logos stored centrally |
| **Live embedding** | Changes in Canva become visible automatically in the brand guide |
| **Export** | PNG, PDF (print-ready), MP4 — straight from the editor |

## Use cases

| Area | Materials | Example |
|------|-----------|---------|
| **Print** | Business cards, letterhead, envelopes, flyers | Double-sided business cards with QR code |
| **Promotional items** | Block layouts, folder design, labels | Notepad design with grid and logo |
| **Digital** | Social media posts, web banners, newsletter headers | Instagram story in corporate design |

## Embedding in the brand guide

Canva offers native embed links that can be embedded as iframes in VitePress pages. Design changes in Canva are **automatically applied live** — no manual export or re-upload required.

### Step by step

1. Open the design in Canva
2. Click **Share** (top right)
3. Select **More …** → **Embed**
4. Copy the **Smart Embed** link
5. Paste it into the relevant Markdown page

### Embed code template

```html
<!-- Canva Embed — 16:9 (default) -->
<div style="position:relative;width:100%;height:0;padding-bottom:56.25%;">
  <iframe src="https://www.canva.com/design/DESIGN_ID/view?embed"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allowfullscreen></iframe>
</div>
```

### Aspect ratios

| Format | `padding-bottom` | Use case |
|--------|-------------------|----------|
| 16:9 | `56.25%` | Presentations, banners |
| 4:3 | `75%` | Classic formats |
| 1:1 | `100%` | Social media, squares |
| A4 portrait | `141.4%` | Letterhead, flyers |
| Business card (85×55) | `64.7%` | Business cards |

### Example: embedding a business card

```markdown
## Current draft

<div style="position:relative;width:100%;max-width:500px;height:0;
  padding-bottom:64.7%;margin:24px auto;">
  <iframe src="https://www.canva.com/design/YOUR_DESIGN_ID/view?embed"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;
    border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,0.12);"
    allowfullscreen></iframe>
</div>
```

## Rules & notes

::: warning Publicly accessible
Embedded designs are visible **publicly**. Only embed final, approved drafts — **never** internal draft stages, confidential data or personal data.
:::

::: tip Best practices

- **Naming**: name Canva designs by this scheme: `BAUER GROUP, [material], [format], version [date]`
- **Brand kit**: always use the stored brand colors (#FF8500, warm-gray scale, neutral-gray scale)
- **Fonts**: use the system font stack — no Canva-exclusive fonts
- **Print export**: PDF (print) with bleed, CMYK color profile ISO 12647-2
- **Versions**: draft versions can be tracked in Canva via the version history

:::

## References

Pages with Canva embeds:

- [Business cards](/en/print/business-cards) — Double-sided business cards (DE/EN, CN/EN)
- [Advertising materials overview](/en/advertising/) — Overview of all advertising materials

## Canva brand kit

The BAUER GROUP brand kit in Canva contains:

| Element | Value |
|---------|-------|
| **Primary color** | #FF8500 (BAUER Orange) |
| **Warm gray** | #F9F8F6 – #231F1C (scale) |
| **Neutral gray** | #F7F7F7 – #1C1C1C (scale) |
| **Logo** | Wide + Square variant (SVG) |
| **Fonts** | System font stack (Segoe UI / SF Pro / Roboto) |
