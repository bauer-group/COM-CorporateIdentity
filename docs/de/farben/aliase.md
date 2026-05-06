# Semantische Aliase

Semantische Aliase trennen die **physische Farbe** (z. B. `--warm-800`) von ihrer **semantischen Rolle** (z. B. `--text-primary`). Diese Indirektion ist zentral für die Wartbarkeit des Designsystems: ein Theme-Refactor ändert nur das Mapping an einer Stelle — nicht jede Komponente einzeln.

::: tip Warum Aliase?
Wenn das Theme in 3 Jahren wärmer oder kühler werden soll, reicht es, das Mapping `--text-primary → warm-X` an *einer Stelle* zu ändern. Würde stattdessen jede Komponente direkt `var(--warm-900)` verwenden, wäre ein Theme-Refactor ein Find-And-Replace über die gesamte Codebase. Aliase machen das Designsystem langfristig wartbar.
:::

## Brand-Farb-Aliase

Die Brand-Neutrals als feste Referenzpunkte — abgeleitet aus der [Warm-Gray-Skala](/de/farben/sekundaer).

| Alias | Verweist auf | HEX | Verwendung |
|-------|--------------|-----|------------|
| `--brand-light` | `--warm-50` | `#F9F8F6` | Cremiger Surface-Hintergrund (Light-Theme Card) |
| `--brand-dark` | `--warm-800` | `#3A3430` | Dunkle CTA-Buttons auf orangem Background, Footer, dunkle Akzente |
| `--brand-black` | `--warm-900` | `#231F1C` | Tiefster Brand-Neutral, Print-Schwarz, Hover-States für `--brand-dark` |

→ Vollständige Spezifikation: [Brand-Neutrals](/de/farben/neutrale)

## Text-Rollen

Hierarchie der Text-Sichtbarkeit. Alle Aliase sind WCAG-validiert auf Brand-White und Brand-Light.

| Alias | Verweist auf | HEX | Verwendung | WCAG auf Weiß |
|-------|--------------|-----|------------|---------------|
| `--text-primary` | `--warm-900` | `#231F1C` | Headlines, primärer Body-Text | AAA (16.6:1) |
| `--text-secondary` | `--warm-600` | `#6B635C` | Lead-Texte, sekundäre Beschreibungen | AA (5.9:1) |
| `--text-muted` | `--warm-500` | `#887F78` | Captions, Metadaten, Timestamps | AA Large (3.9:1) |
| `--text-disabled` | `--warm-400` | `#A69E97` | Deaktivierte Buttons, Placeholders | — (2.6:1, dekorativ) |

<div style="display:flex;flex-direction:column;gap:8px;background:white;padding:24px;border:1px solid #E0DBD6;border-radius:12px;margin:24px 0;">
  <div style="color:#231F1C;font-weight:700;font-size:1.5em;">Headline (text-primary)</div>
  <div style="color:#6B635C;font-size:1.05em;">Lead-Text mit etwas mehr Kontext (text-secondary).</div>
  <div style="color:#887F78;font-size:0.85em;">Caption mit Metadaten · 06.05.2026 · 3 Min Lesedauer (text-muted)</div>
  <div style="color:#A69E97;font-size:0.95em;">Deaktivierter Button-Text oder Placeholder (text-disabled)</div>
</div>

## Background-Rollen

| Alias | Verweist auf (Light) | Verweist auf (Dark) | Verwendung |
|-------|----------------------|---------------------|------------|
| `--bg-primary` | `#FFFFFF` | `--warm-900` | Page-Background |
| `--bg-subtle` | `--warm-50` | `--warm-800` | Card-Background, Hover-States |
| `--bg-muted` | `--warm-100` | `--warm-700` | Tertiäre Surfaces, Code-Block-Background |

<div style="border-radius:12px;overflow:hidden;border:1px solid #E0DBD6;margin:24px 0;">
  <div style="background:#FFFFFF;padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:#3A3430;font-weight:600;">bg-primary (#FFFFFF)</div>
    <div style="color:#6B635C;font-size:0.85em;">Standard Page-Background</div>
  </div>
  <div style="background:#F9F8F6;padding:20px;border-bottom:1px solid #E0DBD6;">
    <div style="color:#3A3430;font-weight:600;">bg-subtle (Warm 50)</div>
    <div style="color:#6B635C;font-size:0.85em;">Card-Background, Hover-States, sekundäre Sektionen</div>
  </div>
  <div style="background:#F0EDEA;padding:20px;">
    <div style="color:#3A3430;font-weight:600;">bg-muted (Warm 100)</div>
    <div style="color:#6B635C;font-size:0.85em;">Tertiäre Surfaces, Code-Blocks, eingedrückte Bereiche</div>
  </div>
</div>

## Border-Rollen

| Alias | Verweist auf (Light) | Verweist auf (Dark) | Verwendung |
|-------|----------------------|---------------------|------------|
| `--border` | `--warm-200` | `--warm-700` | Standard-Hairline (Cards, Tables, Form-Inputs) |
| `--border-strong` | `--warm-300` | `--warm-600` | Betonte Trennlinien, aktive Form-Inputs, Focus-Outlines |

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:200px;background:white;border:1px solid #E0DBD6;border-radius:8px;padding:20px;">
    <div style="color:#3A3430;font-weight:600;margin-bottom:6px;">Standard-Card</div>
    <div style="color:#6B635C;font-size:0.85em;">border (Warm 200) — die Standard-Hairline</div>
  </div>
  <div style="flex:1;min-width:200px;background:white;border:1.5px solid #C4BDB7;border-radius:8px;padding:20px;">
    <div style="color:#3A3430;font-weight:600;margin-bottom:6px;">Aktive Card</div>
    <div style="color:#6B635C;font-size:0.85em;">border-strong (Warm 300) — betonte Trennung</div>
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
         │  --brand-light     │   │  --text-primary    │
         │  --brand-dark      │   │  --bg-subtle       │
         │  --brand-black     │   │  --border          │
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
  --brand-light: var(--warm-50);
  --brand-dark:  var(--warm-800);
  --brand-black: var(--warm-900);

  /* Text-Rollen */
  --text-primary:   var(--warm-900);
  --text-secondary: var(--warm-600);
  --text-muted:     var(--warm-500);
  --text-disabled:  var(--warm-400);

  /* Background-Rollen — Light Theme */
  --bg-primary: #FFFFFF;
  --bg-subtle:  var(--warm-50);
  --bg-muted:   var(--warm-100);

  /* Border-Rollen */
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

## Anwendungsregeln

1. **Komponenten verwenden Aliase, niemals Skalen-Token direkt.**
   `color: var(--text-primary)` statt `color: var(--warm-900)`.
2. **Aliase sind Single-Source-of-Truth pro Rolle.**
   Eine Komponente sollte für "Body-Text" immer `--text-primary` verwenden, niemals zwischen `--warm-800` und `--warm-900` schwanken.
3. **Theme-Wechsel passiert nur am Alias.**
   Dark-Mode ändert das Mapping `--text-primary → warm-100`, nicht jede Komponente.
4. **Skalen-Token sind erlaubt für Spezialfälle**, in denen die semantische Rolle nicht klar ist (z. B. dekorative Verläufe, Datenvisualisierungen mit eigener Hierarchie).

::: warning Anti-Pattern

```css
/* FALSCH — koppelt Komponente direkt an die Skala */
.card-title { color: var(--warm-900); }

/* RICHTIG — verwendet die semantische Rolle */
.card-title { color: var(--text-primary); }
```

Beim Theme-Refactor muss der zweite Code nicht angefasst werden — beim ersten schon.
:::
