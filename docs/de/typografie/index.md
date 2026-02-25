# Schriftsystem

BAUER GROUP verwendet **System Fonts** — die nativen Schriftarten jedes Betriebssystems. Das garantiert maximale Kompatibilität, optimale Performance und keine externen Font-Abhängigkeiten.

## Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Plattform-Zuordnung

| Betriebssystem | Schriftart |
|---------------|------------|
| **Windows** | Segoe UI |
| **macOS / iOS** | San Francisco (SF Pro) |
| **Android** | Roboto |
| **Linux** | System Default (meist Cantarell, DejaVu) |

## Monospace Font Stack

Für Code-Blöcke, technische Angaben und Farbwerte:

```css
font-family: ui-monospace, "SF Mono", "Cascadia Code",
  "Segoe UI Mono", Consolas, monospace;
```

## Vorteile des System Font Stacks

- **Keine Ladezeiten** — kein externer Font-Download
- **Native Darstellung** — Nutzer sehen die Schrift ihres Systems
- **DSGVO-konform** — keine Google-Fonts-Verbindungen
- **Barrierefreiheit** — System-Fonts sind für Lesbarkeit optimiert
