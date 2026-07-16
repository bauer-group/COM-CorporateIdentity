# Semantische Aliase

Semantische Aliase trennen die **physische Farbe** (z. B. `--bg-warm-800`) von ihrer **semantischen Rolle** (z. B. `--bg-text`). Diese Indirektion ist zentral für die Wartbarkeit des Designsystems: ein Theme-Refactor ändert nur das Mapping an einer Stelle — nicht jede Komponente einzeln.

::: tip Warum Aliase?
Wenn das Theme in 3 Jahren wärmer oder kühler werden soll, reicht es, das Mapping `--bg-text → bg-warm-X` an *einer Stelle* zu ändern. Würde stattdessen jede Komponente direkt `var(--bg-warm-900)` verwenden, wäre ein Theme-Refactor ein Find-And-Replace über die gesamte Codebase. Aliase machen das Designsystem langfristig wartbar.
:::

## Brand-Farb-Aliase

Die Brand-Neutrals als feste Referenzpunkte — abgeleitet aus der [Warm-Gray-Skala](/de/farben/sekundaer).

| Alias | Verweist auf | HEX | Verwendung |
|-------|--------------|-----|------------|
| `--bg-brand-light` | `--bg-warm-50` | `#F9F8F6` | Cremiger Surface-Hintergrund (Light-Theme Card) |
| `--bg-brand-dark` | `--bg-warm-800` | `#3A3430` | Dunkle CTA-Buttons auf orangem Background, Footer, dunkle Akzente |
| `--bg-brand-black` | `--bg-warm-900` | `#231F1C` | Tiefster Brand-Neutral, Print-Schwarz, Hover-States für `--bg-brand-dark` |

→ Vollständige Spezifikation: [Brand-Neutrals](/de/farben/neutrale)

## Text-Rollen

Hierarchie der Text-Sichtbarkeit. Alle Aliase sind WCAG-validiert auf Brand-White und Brand-Light.

| Alias | Verweist auf | HEX | Verwendung | WCAG auf Weiß |
|-------|--------------|-----|------------|---------------|
| `--bg-text` | `--bg-warm-900` | `#231F1C` | Headlines, primärer Body-Text | AAA (16.6:1) |
| `--bg-text-secondary` | `--bg-warm-600` | `#6B635C` | Lead-Texte, sekundäre Beschreibungen | AA (5.9:1) |
| `--bg-text-muted` | `--bg-warm-500` | `#887F78` | Captions, Metadaten, Timestamps | AA Large (3.9:1) |
| `--bg-text-disabled` | `--bg-warm-400` | `#A69E97` | Deaktivierte Buttons, Placeholders | — (2.6:1, dekorativ) |

<div style="display:flex;flex-direction:column;gap:8px;background:white;padding:24px;border:1px solid #E0DBD6;border-radius:12px;margin:24px 0;">
  <div style="color:var(--bg-brand-black);font-weight:700;font-size:1.5em;">Headline (text-primary)</div>
  <div style="color:var(--bg-warm-600);font-size:1.05em;">Lead-Text mit etwas mehr Kontext (text-secondary).</div>
  <div style="color:var(--bg-warm-500);font-size:0.85em;">Caption mit Metadaten · 06.05.2026 · 3 Min Lesedauer (text-muted)</div>
  <div style="color:var(--bg-warm-400);font-size:0.95em;">Deaktivierter Button-Text oder Placeholder (text-disabled)</div>
</div>

## Background-Rollen

| Alias | Verweist auf (Light) | Verweist auf (Dark) | Verwendung |
|-------|----------------------|---------------------|------------|
| `--bg-surface` | `#FFFFFF` | `--bg-warm-900` | Page-Background |
| `--bg-surface-subtle` | `--bg-warm-50` | `--bg-warm-800` | Card-Background, Hover-States |
| `--bg-surface-muted` | `--bg-warm-100` | `--bg-warm-700` | Tertiäre Surfaces, Code-Block-Background |

<div style="border-radius:12px;overflow:hidden;border:1px solid #E0DBD6;margin:24px 0;">
  <div style="background:var(--bg-brand-white);padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:var(--bg-brand-dark);font-weight:600;">bg-primary (#FFFFFF)</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Standard Page-Background</div>
  </div>
  <div style="background:var(--bg-brand-light);padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:var(--bg-brand-dark);font-weight:600;">bg-subtle (Warm 50)</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Card-Background, Hover-States, sekundäre Sektionen</div>
  </div>
  <div style="background:var(--bg-warm-100);padding:20px;">
    <div style="color:var(--bg-brand-dark);font-weight:600;">bg-muted (Warm 100)</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">Tertiäre Surfaces, Code-Blocks, eingedrückte Bereiche</div>
  </div>
</div>

## Border-Rollen

| Alias | Verweist auf (Light) | Verweist auf (Dark) | Verwendung |
|-------|----------------------|---------------------|------------|
| `--bg-border` | `--bg-warm-200` | `--bg-warm-700` | Standard-Hairline (Cards, Tables, Form-Inputs) |
| `--bg-border-strong` | `--bg-warm-300` | `--bg-warm-600` | Betonte Trennlinien, aktive Form-Inputs, Focus-Outlines |

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:200px;background:white;border:1px solid #E0DBD6;border-radius:8px;padding:20px;">
    <div style="color:var(--bg-brand-dark);font-weight:600;margin-bottom:6px;">Standard-Card</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">border (Warm 200) — die Standard-Hairline</div>
  </div>
  <div style="flex:1;min-width:200px;background:white;border:1.5px solid #C4BDB7;border-radius:8px;padding:20px;">
    <div style="color:var(--bg-brand-dark);font-weight:600;margin-bottom:6px;">Aktive Card</div>
    <div style="color:var(--bg-warm-600);font-size:0.85em;">border-strong (Warm 300) — betonte Trennung</div>
  </div>
</div>

## Mapping-Übersicht

```text
                    ┌─────────────────────────┐
                    │   Physische Skala       │
                    │   (Warm-Gray)           │
                    └─────────────────────────┘
                               │
                    ┌──────────┴──────────────┐
                    │                         │
                    ▼                         ▼
         ┌────────────────────┐   ┌────────────────────┐
         │  Brand-Aliase      │   │  Rollen-Aliase     │
         │  --bg-brand-light  │   │  --bg-text         │
         │  --bg-brand-dark   │   │ --bg-surface-subtle│
         │  --bg-brand-black  │   │  --bg-border       │
         └────────────────────┘   └────────────────────┘
                    │                         │
                    └──────────┬──────────────┘
                               ▼
                    ┌─────────────────────────┐
                    │   UI-Komponenten        │
                    │   (verwenden Aliase,    │
                    │    nie Skalen direkt)   │
                    └─────────────────────────┘
```

## CSS Custom Properties

```css
:root {
  /* Brand-Aliase */
  --bg-brand-light: var(--bg-warm-50);
  --bg-brand-dark:  var(--bg-warm-800);
  --bg-brand-black: var(--bg-warm-900);

  /* Text-Rollen */
  --bg-text:           var(--bg-warm-900);
  --bg-text-secondary: var(--bg-warm-600);
  --bg-text-muted:     var(--bg-warm-500);
  --bg-text-disabled:  var(--bg-warm-400);

  /* Background-Rollen — Light Theme */
  --bg-surface:        #FFFFFF;
  --bg-surface-subtle: var(--bg-warm-50);
  --bg-surface-muted:  var(--bg-warm-100);

  /* Border-Rollen */
  --bg-border:        var(--bg-warm-200);
  --bg-border-strong: var(--bg-warm-300);
}

[data-theme="dark"] {
  --bg-surface:        var(--bg-warm-900);
  --bg-surface-subtle: var(--bg-warm-800);
  --bg-surface-muted:  var(--bg-warm-700);

  --bg-border:        var(--bg-warm-700);
  --bg-border-strong: var(--bg-warm-600);
}
```

## Anwendungsregeln

1. **Komponenten verwenden Aliase, niemals Skalen-Token direkt.**
   `color: var(--bg-text)` statt `color: var(--bg-warm-900)`.
2. **Aliase sind Single-Source-of-Truth pro Rolle.**
   Eine Komponente sollte für "Body-Text" immer `--bg-text` verwenden, niemals zwischen `--bg-warm-800` und `--bg-warm-900` schwanken.
3. **Theme-Wechsel passiert nur am Alias.**
   Dark-Mode ändert das Mapping `--bg-text → bg-warm-100`, nicht jede Komponente.
4. **Skalen-Token sind erlaubt für Spezialfälle**, in denen die semantische Rolle nicht klar ist (z. B. dekorative Verläufe, Datenvisualisierungen mit eigener Hierarchie).

::: warning Anti-Pattern

```css
/* FALSCH — koppelt Komponente direkt an die Skala */
.card-title { color: var(--bg-warm-900); }

/* RICHTIG — verwendet die semantische Rolle */
.card-title { color: var(--bg-text); }
```

Beim Theme-Refactor muss der zweite Code nicht angefasst werden — beim ersten schon.
:::
