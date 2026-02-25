# UI Komponenten

Wiederverwendbare Interface-Elemente im BAUER GROUP Designsystem für konsistente digitale Produkte.

## Designprinzipien

| Prinzip | Beschreibung |
|---------|-------------|
| **Konsistenz** | Gleiche Elemente sehen überall gleich aus |
| **Barrierefreiheit** | Alle Komponenten sind WCAG 2.1 AA konform |
| **Responsivität** | Komponenten passen sich an jede Bildschirmgröße an |
| **Wiederverwendbarkeit** | Einmal definiert, überall einsetzbar |

## Übersicht

- **[Buttons](./buttons)** — Primäre, sekundäre und Outline-Varianten in drei Größen
- **[Badges & Status](./badges)** — Semantische Statusanzeigen mit Farbcodierung
- **[Formulare](./formulare)** — Eingabefelder, Labels und Validierung

## CSS Basis

Alle Komponenten basieren auf den BAUER GROUP CSS Custom Properties:

```css
:root {
  --orange-500: #FF8500;  /* Primary Actions */
  --gray-100: #F4F4F5;    /* Secondary Actions */
  --gray-900: #18181B;    /* Text */
  --gray-200: #E4E4E7;    /* Borders */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```
