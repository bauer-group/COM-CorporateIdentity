# Font Stack — Technische Details

## Kompletter Font Stack

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

## Fallback-Reihenfolge erklärt

| Priorität | Font | Begründung |
|-----------|------|-----------|
| 1 | `system-ui` | Generisches Keyword — nutzt automatisch die System-Schrift |
| 2 | `-apple-system` | Ältere WebKit-Browser auf macOS/iOS |
| 3 | `BlinkMacSystemFont` | Ältere Chrome-Versionen auf macOS |
| 4 | `"Segoe UI"` | Windows-Systemschrift |
| 5 | `Roboto` | Android-Systemschrift, auch auf Chrome OS |
| 6 | `"Helvetica Neue"` | Ältere macOS-Versionen |
| 7 | `Arial` | Universaler Fallback auf allen Systemen |
| 8 | `sans-serif` | Letzter generischer Fallback |

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
