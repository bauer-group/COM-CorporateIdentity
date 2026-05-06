# Typography System

BAUER GROUP uses **system fonts** — the native typefaces of each operating system. This guarantees maximum compatibility, optimal performance, and no external font dependencies.

## Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Platform Mapping

| Operating System | Typeface |
|---------------|------------|
| **Windows** | Segoe UI |
| **macOS / iOS** | San Francisco (SF Pro) |
| **Android** | Roboto |
| **Linux** | System Default (typically Cantarell, DejaVu) |

## Monospace Font Stack

For code blocks, technical specifications, and color values:

```css
font-family: ui-monospace, "SF Mono", "Cascadia Code",
  "Segoe UI Mono", Consolas, monospace;
```

## Advantages of the System Font Stack

- **No load times** — no external font download
- **Native rendering** — users see their system's typeface
- **GDPR-compliant** — no Google Fonts connections
- **Accessibility** — system fonts are optimized for legibility
