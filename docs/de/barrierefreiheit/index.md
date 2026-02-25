# WCAG 2.1 Konformität

Die BAUER GROUP verpflichtet sich zur Einhaltung der **Web Content Accessibility Guidelines (WCAG) 2.1** auf Stufe AA für alle digitalen Produkte.

## Farbkontrast-Regeln

### Mindestkontrast für Text

| WCAG Level | Normaler Text | Großer Text (≥18px bold / ≥24px) |
|------------|--------------|----------------------------------|
| **AA** | 4.5:1 | 3.0:1 |
| **AAA** | 7.0:1 | 4.5:1 |

### Unsere Farben auf Weiß

| Farbe | Kontrast | Normaler Text | Großer Text |
|-------|----------|---------------|-------------|
| Orange 500 (#FF8500) | 3.1:1 | <span class="contrast-fail">FAIL</span> | <span class="contrast-pass">AA</span> |
| Orange 700 (#C2570A) | 4.6:1 | <span class="contrast-pass">AA</span> | <span class="contrast-pass">AA</span> |
| Orange 800 (#9A4509) | 6.4:1 | <span class="contrast-pass">AA+</span> | <span class="contrast-pass">AAA</span> |
| Gray 600 (#52525B) | 7.1:1 | <span class="contrast-pass">AAA</span> | <span class="contrast-pass">AAA</span> |
| Gray 900 (#18181B) | 18.4:1 | <span class="contrast-pass">AAA</span> | <span class="contrast-pass">AAA</span> |

::: warning Wichtige Regel
**Orange 500 (#FF8500) darf NICHT für normalen Text verwendet werden.** Es ist ausschließlich für dekorative Elemente, große UI-Flächen und Buttons ab 24px erlaubt.

Für Text verwenden Sie: **Orange 700** (#C2570A) oder dunkler.
:::

## Weitere Anforderungen

- **Fokus-Indikatoren**: Alle interaktiven Elemente müssen einen sichtbaren Fokus-Zustand haben
- **Tastaturnavigation**: Alle Funktionen müssen per Tastatur erreichbar sein
- **Alternativtexte**: Alle Bilder und Icons benötigen beschreibende alt-Attribute
- **Semantisches HTML**: Korrekte Verwendung von Headings, Landmarks und ARIA-Rollen
