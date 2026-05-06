# Semantic Colors

Semantic colors communicate status and meaning in the user interface. Each color has a fixed meaning — consistent across all components.

## Status colors

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#22C55E;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Success</div>
      <div style="font-size:0.75rem;color:#71717A;">#22C55E</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#EAB308;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Warning</div>
      <div style="font-size:0.75rem;color:#71717A;">#EAB308</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#EF4444;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Error</div>
      <div style="font-size:0.75rem;color:#71717A;">#EF4444</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#3B82F6;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Info</div>
      <div style="font-size:0.75rem;color:#71717A;">#3B82F6</div>
    </div>
  </div>
</div>

| Status | Color | HEX | Background | Usage |
|--------|-------|-----|------------|-------|
| **Success** | <span style="display:inline-block;width:16px;height:16px;background:#22C55E;border-radius:3px;vertical-align:middle;"></span> Green | `#22C55E` | `#DCFCE7` | Success messages, confirmations |
| **Warning** | <span style="display:inline-block;width:16px;height:16px;background:#EAB308;border-radius:3px;vertical-align:middle;"></span> Yellow | `#EAB308` | `#FEF9C3` | Warnings, advisories |
| **Error** | <span style="display:inline-block;width:16px;height:16px;background:#EF4444;border-radius:3px;vertical-align:middle;"></span> Red | `#EF4444` | `#FEE2E2` | Errors, critical messages |
| **Info** | <span style="display:inline-block;width:16px;height:16px;background:#3B82F6;border-radius:3px;vertical-align:middle;"></span> Blue | `#3B82F6` | `#DBEAFE` | Information, tips |

## The `-100` / `-500` / `-700` triad

Each status color follows a **three-step token triad** that covers the standard use case "lightly tinted background with darker text of the same hue" — without designers/developers having to guess their own combinations.

| Step | Role | Usage |
|------|------|-------|
| **`-100`** | Surface | Toast background, callout body, badge fill on light theme |
| **`-500`** | Primary color | Icon, status dot, border, ring, focus outline |
| **`-700`** | Readable text | AAA-compliant text on the `-100` surface |

### Full values

| Token | HEX | OKLCH | Preview |
|-------|-----|-------|---------|
| `--success-100` | `#DCFCE7` | `oklch(94% 0.06 150)` | <span style="display:inline-block;width:48px;height:24px;background:#DCFCE7;border-radius:4px;vertical-align:middle;"></span> |
| `--success-500` | `#22C55E` | `oklch(70% 0.16 150)` | <span style="display:inline-block;width:48px;height:24px;background:#22C55E;border-radius:4px;vertical-align:middle;"></span> |
| `--success-700` | `#15803D` | `oklch(50% 0.14 150)` | <span style="display:inline-block;width:48px;height:24px;background:#15803D;border-radius:4px;vertical-align:middle;"></span> |
| `--warning-100` | `#FEF9C3` | `oklch(95% 0.07 90)` | <span style="display:inline-block;width:48px;height:24px;background:#FEF9C3;border-radius:4px;vertical-align:middle;"></span> |
| `--warning-500` | `#EAB308` | `oklch(78% 0.16 80)` | <span style="display:inline-block;width:48px;height:24px;background:#EAB308;border-radius:4px;vertical-align:middle;"></span> |
| `--warning-700` | `#A16207` | `oklch(58% 0.14 75)` | <span style="display:inline-block;width:48px;height:24px;background:#A16207;border-radius:4px;vertical-align:middle;"></span> |
| `--error-100` | `#FEE2E2` | `oklch(94% 0.04 25)` | <span style="display:inline-block;width:48px;height:24px;background:#FEE2E2;border-radius:4px;vertical-align:middle;"></span> |
| `--error-500` | `#EF4444` | `oklch(64% 0.22 25)` | <span style="display:inline-block;width:48px;height:24px;background:#EF4444;border-radius:4px;vertical-align:middle;"></span> |
| `--error-700` | `#B91C1C` | `oklch(50% 0.20 25)` | <span style="display:inline-block;width:48px;height:24px;background:#B91C1C;border-radius:4px;vertical-align:middle;"></span> |
| `--info-100` | `#DBEAFE` | `oklch(94% 0.04 230)` | <span style="display:inline-block;width:48px;height:24px;background:#DBEAFE;border-radius:4px;vertical-align:middle;"></span> |
| `--info-500` | `#3B82F6` | `oklch(70% 0.13 230)` | <span style="display:inline-block;width:48px;height:24px;background:#3B82F6;border-radius:4px;vertical-align:middle;"></span> |
| `--info-700` | `#1D4ED8` | `oklch(48% 0.16 255)` | <span style="display:inline-block;width:48px;height:24px;background:#1D4ED8;border-radius:4px;vertical-align:middle;"></span> |

::: tip Why exactly these three steps?
With `-100` background and `-700` text, the triad covers ~80 % of all status components in practice: badges, toasts, callouts, inline form-validation hints, status cells in tables. `-500` provides the mid-lightness for icons, status dots, and borders. Additional intermediate steps are rarely needed — when they are, they can be derived from the OKLCH scale methodology ([Methodology](/en/colors/methodology)).
:::

## Application examples

### Badges

Semantic colors are used in badges as a combination of **light background + dark text** in the same hue:

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DCFCE7;color:#15803D;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Success</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEF9C3;color:#A16207;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Warning</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEE2E2;color:#B91C1C;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Error</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DBEAFE;color:#1D4ED8;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Information</span>
</div>

### Notification boxes

<div style="display:flex;flex-direction:column;gap:16px;margin:24px 0;">
  <div style="border-left:4px solid #22C55E;background:rgba(34,197,94,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#15803D;margin-bottom:4px;">Success</div>
    <div style="color:#18181B;font-size:0.9rem;">This operation completed successfully.</div>
  </div>
  <div style="border-left:4px solid #EAB308;background:rgba(234,179,8,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#A16207;margin-bottom:4px;">Warning</div>
    <div style="color:#18181B;font-size:0.9rem;">Please review the entered data.</div>
  </div>
  <div style="border-left:4px solid #EF4444;background:rgba(239,68,68,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#B91C1C;margin-bottom:4px;">Error</div>
    <div style="color:#18181B;font-size:0.9rem;">The operation could not be completed.</div>
  </div>
  <div style="border-left:4px solid #3B82F6;background:rgba(59,130,246,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#1D4ED8;margin-bottom:4px;">Information</div>
    <div style="color:#18181B;font-size:0.9rem;">More details can be found in the documentation.</div>
  </div>
</div>

### Color pairs (background + text)

| Status | Background | Text color | Preview |
|--------|------------|------------|---------|
| **Success** | #DCFCE7 | #15803D | <span style="background:#DCFCE7;color:#15803D;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Active</span> |
| **Warning** | #FEF9C3 | #A16207 | <span style="background:#FEF9C3;color:#A16207;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Pending</span> |
| **Error** | #FEE2E2 | #B91C1C | <span style="background:#FEE2E2;color:#B91C1C;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Critical</span> |
| **Info** | #DBEAFE | #1D4ED8 | <span style="background:#DBEAFE;color:#1D4ED8;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Default</span> |

## CSS Custom Properties

### Triad tokens (HEX)

The canonical tokens follow the `<status>-<step>` schema and are usable directly in any modern UI component.

```css
:root {
  /* Success */
  --success-100: #DCFCE7;  --success-500: #22C55E;  --success-700: #15803D;
  /* Warning */
  --warning-100: #FEF9C3;  --warning-500: #EAB308;  --warning-700: #A16207;
  /* Error */
  --error-100: #FEE2E2;    --error-500: #EF4444;    --error-700: #B91C1C;
  /* Info */
  --info-100: #DBEAFE;     --info-500: #3B82F6;     --info-700: #1D4ED8;
}
```

### Triad tokens (OKLCH parallel)

```css
:root {
  --success-100-oklch: oklch(94% 0.06 150);
  --success-500-oklch: oklch(70% 0.16 150);
  --success-700-oklch: oklch(50% 0.14 150);
  --warning-100-oklch: oklch(95% 0.07 90);
  --warning-500-oklch: oklch(78% 0.16 80);
  --warning-700-oklch: oklch(58% 0.14 75);
  --error-100-oklch:   oklch(94% 0.04 25);
  --error-500-oklch:   oklch(64% 0.22 25);
  --error-700-oklch:   oklch(50% 0.20 25);
  --info-100-oklch:    oklch(94% 0.04 230);
  --info-500-oklch:    oklch(70% 0.13 230);
  --info-700-oklch:    oklch(48% 0.16 255);
}
```

### Legacy aliases (backwards compatibility)

Existing components partly use the older `--brand-*` aliases. These remain available for backwards compatibility and map onto the canonical triad:

```css
:root {
  --brand-success: var(--success-500);
  --brand-warning: var(--warning-500);
  --brand-error:   var(--error-500);
  --brand-info:    var(--info-500);

  --brand-success-bg: var(--success-100);
  --brand-warning-bg: var(--warning-100);
  --brand-error-bg:   var(--error-100);
  --brand-info-bg:    var(--info-100);

  --brand-success-text: var(--success-700);
  --brand-warning-text: var(--warning-700);
  --brand-error-text:   var(--error-700);
  --brand-info-text:    var(--info-700);
}
```

::: info Recommendation for new components
Use the canonical triad (`--success-100/-500/-700` etc.) — it's the single source of truth and can be referenced in OKLCH notation without alias indirection. The `--brand-*` aliases stay around for legacy code but should not be referenced directly in new development.
:::
