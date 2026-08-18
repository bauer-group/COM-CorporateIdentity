# Kontrastprüfung

## Empfohlene Farbkombinationen

### Text auf weißem Hintergrund

| Kombination | Kontrast | Level | Empfehlung |
|-------------|----------|-------|------------|
| Gray 900 auf Weiß | 18.4:1 | AAA | Überschriften |
| Gray 600 auf Weiß | 7.1:1 | AAA | Fließtext |
| Gray 500 auf Weiß | 4.7:1 | AA | Sekundärtext |
| Orange 700 auf Weiß | 4.6:1 | AA | Akzenttext, Links |
| Orange 800 auf Weiß | 6.4:1 | AA+ | Starker Akzenttext |

### Text auf Orange-Hintergrund

| Kombination | Kontrast | Level |
|-------------|----------|-------|
| Weiß auf Orange 500 | 3.1:1 | Nur Großtext |
| Weiß auf Orange 600 | 3.6:1 | Nur Großtext |
| Weiß auf Orange 700 | 4.6:1 | AA |

### Text auf dunklem Hintergrund

| Kombination | Kontrast | Level |
|-------------|----------|-------|
| Weiß auf Gray 900 | 18.4:1 | AAA |
| Gray 100 auf Gray 900 | 16.2:1 | AAA |
| Orange 400 auf Gray 900 | 6.2:1 | AA+ |

## Richtig vs. Falsch

### Richtig

- Text in **Orange 700** (#C2570A) auf weißem Hintergrund
- Text in **Gray 600** (#52525B) als Standardtextfarbe
- Orange 500 als **Buttonhintergrund** mit weißem Text (≥24px)
- Orange 500 als **dekorativer Akzent** (Linien, Icons ≥24px)

### Falsch

- ❌ Text in Orange 500 (#FF8500) auf weißem Hintergrund
- ❌ Orange 500 auf Orange 50 für kleinen Text
- ❌ Gray 400 als Fließtextfarbe
- ❌ Weiß auf Orange 500 für Text unter 18px bold

## Ausnahme: Logo und Lockup

Die Zusatzbezeichnung im [Division-Lockup](/de/logo/lockup#farbe-der-zusatzbezeichnung) trägt **Orange 600** `#EA6D00` und liegt auf hellem Grund bei 2,69–3,14:1. **WCAG 2.1 SC 1.4.3 nimmt Logotypen ausdrücklich von der Kontrastanforderung aus:** „Text that is part of a logo or brand name has no contrast requirement."

Die Ausnahme deckt ausschließlich Marke und Lockup. Für Fließtext, Interface-Elemente und Links gelten die Tabellen oben unverändert — dort bleibt Orange 700 die hellste freigegebene Textstufe.

## Tools zur Kontrastprüfung

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- Browser DevTools → Accessibility Panel
