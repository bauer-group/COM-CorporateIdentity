# Font Stack — Technical Details

## Complete Font Stack

### Body Text

```css
:root {
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

### Monospace

```css
:root {
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code",
    "Segoe UI Mono", Consolas, "Liberation Mono",
    Menlo, Monaco, monospace;
}
```

## Fallback Order Explained

| Priority | Font | Rationale |
|-----------|------|-----------|
| 1 | `system-ui` | Generic keyword — automatically uses the system typeface |
| 2 | `-apple-system` | Older WebKit browsers on macOS/iOS |
| 3 | `BlinkMacSystemFont` | Older Chrome versions on macOS |
| 4 | `"Segoe UI"` | Windows system typeface |
| 5 | `Roboto` | Android system typeface, also on Chrome OS |
| 6 | `"Helvetica Neue"` | Older macOS versions |
| 7 | `Arial` | Universal fallback on all systems |
| 8 | `sans-serif` | Final generic fallback |

## Integration

### HTML

```html
<style>
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #18181B;
  }
</style>
```

### CSS Custom Properties

```css
:root {
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code",
    Consolas, monospace;
}

body { font-family: var(--font-body); }
code { font-family: var(--font-mono); }
```
