# Semantic Aliases

Semantic aliases separate the **physical color** (e.g. `--warm-800`) from its **semantic role** (e.g. `--text-primary`). This indirection is central to the maintainability of the design system: a theme refactor only changes the mapping in one place — not every component individually.

::: tip Why aliases?
If the theme should become warmer or cooler in 3 years, it's enough to change the mapping `--text-primary → warm-X` in *one place*. If every component instead used `var(--warm-900)` directly, a theme refactor would be a find-and-replace across the entire codebase. Aliases make the design system maintainable in the long run.
:::

## Brand Color Aliases

Brand neutrals as fixed reference points — derived from the [Warm Gray Scale](/en/colors/secondary).

| Alias | Maps to | HEX | Usage |
|-------|---------|-----|-------|
| `--brand-light` | `--warm-50` | `#F9F8F6` | Creamy surface background (light theme card) |
| `--brand-dark` | `--warm-800` | `#3A3430` | Dark CTA buttons on orange background, footer, dark accents |
| `--brand-black` | `--warm-900` | `#231F1C` | Deepest brand neutral, print black, hover states for `--brand-dark` |

→ Full specification: [Brand Neutrals](/en/colors/neutrals)

## Text Roles

Hierarchy of text visibility. All aliases are WCAG-validated against Brand White and Brand Light.

| Alias | Maps to | HEX | Usage | WCAG on white |
|-------|---------|-----|-------|---------------|
| `--text-primary` | `--warm-900` | `#231F1C` | Headlines, primary body text | AAA (16.6:1) |
| `--text-secondary` | `--warm-600` | `#6B635C` | Lead text, secondary descriptions | AA (5.9:1) |
| `--text-muted` | `--warm-500` | `#887F78` | Captions, metadata, timestamps | AA Large (3.9:1) |
| `--text-disabled` | `--warm-400` | `#A69E97` | Disabled buttons, placeholders | — (2.6:1, decorative) |

<div style="display:flex;flex-direction:column;gap:8px;background:white;padding:24px;border:1px solid #E0DBD6;border-radius:12px;margin:24px 0;">
  <div style="color:#231F1C;font-weight:700;font-size:1.5em;">Headline (text-primary)</div>
  <div style="color:#6B635C;font-size:1.05em;">Lead text with a bit more context (text-secondary).</div>
  <div style="color:#887F78;font-size:0.85em;">Caption with metadata · 2026-05-06 · 3 min read (text-muted)</div>
  <div style="color:#A69E97;font-size:0.95em;">Disabled button text or placeholder (text-disabled)</div>
</div>

## Background Roles

| Alias | Maps to (Light) | Maps to (Dark) | Usage |
|-------|-----------------|----------------|-------|
| `--bg-primary` | `#FFFFFF` | `--warm-900` | Page background |
| `--bg-subtle` | `--warm-50` | `--warm-800` | Card background, hover states |
| `--bg-muted` | `--warm-100` | `--warm-700` | Tertiary surfaces, code block background |

<div style="border-radius:12px;overflow:hidden;border:1px solid #E0DBD6;margin:24px 0;">
  <div style="background:#FFFFFF;padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:#3A3430;font-weight:600;">bg-primary (#FFFFFF)</div>
    <div style="color:#6B635C;font-size:0.85em;">Standard page background</div>
  </div>
  <div style="background:#F9F8F6;padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:#3A3430;font-weight:600;">bg-subtle (Warm 50)</div>
    <div style="color:#6B635C;font-size:0.85em;">Card background, hover states, secondary sections</div>
  </div>
  <div style="background:#F0EDEA;padding:20px;">
    <div style="color:#3A3430;font-weight:600;">bg-muted (Warm 100)</div>
    <div style="color:#6B635C;font-size:0.85em;">Tertiary surfaces, code blocks, recessed areas</div>
  </div>
</div>

## Border Roles

| Alias | Maps to (Light) | Maps to (Dark) | Usage |
|-------|-----------------|----------------|-------|
| `--border` | `--warm-200` | `--warm-700` | Standard hairline (cards, tables, form inputs) |
| `--border-strong` | `--warm-300` | `--warm-600` | Emphasized dividers, active form inputs, focus outlines |

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:200px;background:white;border:1px solid #E0DBD6;border-radius:8px;padding:20px;">
    <div style="color:#3A3430;font-weight:600;margin-bottom:6px;">Standard card</div>
    <div style="color:#6B635C;font-size:0.85em;">border (Warm 200) — the standard hairline</div>
  </div>
  <div style="flex:1;min-width:200px;background:white;border:1.5px solid #C4BDB7;border-radius:8px;padding:20px;">
    <div style="color:#3A3430;font-weight:600;margin-bottom:6px;">Active card</div>
    <div style="color:#6B635C;font-size:0.85em;">border-strong (Warm 300) — emphasized separation</div>
  </div>
</div>

## Mapping Overview

```text
                    ┌─────────────────────────┐
                    │   Physical scale        │
                    │   (Warm Gray)           │
                    └─────────────────────────┘
                               │
                    ┌──────────┴──────────────┐
                    │                         │
                    ▼                         ▼
         ┌────────────────────┐   ┌────────────────────┐
         │  Brand aliases     │   │  Role aliases      │
         │  --brand-light     │   │  --text-primary    │
         │  --brand-dark      │   │  --bg-subtle       │
         │  --brand-black     │   │  --border          │
         └────────────────────┘   └────────────────────┘
                    │                         │
                    └──────────┬──────────────┘
                               ▼
                    ┌─────────────────────────┐
                    │   UI components         │
                    │   (use aliases,         │
                    │    never scales direct) │
                    └─────────────────────────┘
```

## CSS Custom Properties

```css
:root {
  /* Brand aliases */
  --brand-light: var(--warm-50);
  --brand-dark:  var(--warm-800);
  --brand-black: var(--warm-900);

  /* Text roles */
  --text-primary:   var(--warm-900);
  --text-secondary: var(--warm-600);
  --text-muted:     var(--warm-500);
  --text-disabled:  var(--warm-400);

  /* Background roles — light theme */
  --bg-primary: #FFFFFF;
  --bg-subtle:  var(--warm-50);
  --bg-muted:   var(--warm-100);

  /* Border roles */
  --border:        var(--warm-200);
  --border-strong: var(--warm-300);
}

[data-theme="dark"] {
  --bg-primary: var(--warm-900);
  --bg-subtle:  var(--warm-800);
  --bg-muted:   var(--warm-700);

  --border:        var(--warm-700);
  --border-strong: var(--warm-600);
}
```

## Application Rules

1. **Components use aliases, never scale tokens directly.**
   `color: var(--text-primary)` instead of `color: var(--warm-900)`.
2. **Aliases are the single source of truth per role.**
   A component should always use `--text-primary` for "body text", never alternate between `--warm-800` and `--warm-900`.
3. **Theme switching happens at the alias level only.**
   Dark mode changes the mapping `--text-primary → warm-100`, not every component.
4. **Scale tokens are allowed for special cases** where the semantic role isn't clear (e.g. decorative gradients, data visualizations with their own hierarchy).

::: warning Anti-Pattern

```css
/* WRONG — couples the component directly to the scale */
.card-title { color: var(--warm-900); }

/* RIGHT — uses the semantic role */
.card-title { color: var(--text-primary); }
```

During a theme refactor, the second snippet doesn't need to be touched — the first one does.
:::
