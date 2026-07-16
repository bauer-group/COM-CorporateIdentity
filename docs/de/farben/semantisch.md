# Semantische Farben

Semantische Farben kommunizieren Status und Bedeutung in der Benutzeroberfläche. Jede Farbe hat eine feste Bedeutung — konsistent über alle Komponenten.

## Statusfarben

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:var(--bg-success-500);height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Success</div>
      <div style="font-size:0.75rem;color:#71717A;">#22C55E</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:var(--bg-warning-500);height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Warning</div>
      <div style="font-size:0.75rem;color:#71717A;">#EAB308</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:var(--bg-error-500);height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Error</div>
      <div style="font-size:0.75rem;color:#71717A;">#EF4444</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:var(--bg-info-500);height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Info</div>
      <div style="font-size:0.75rem;color:#71717A;">#3B82F6</div>
    </div>
  </div>
</div>

| Status | Farbe | HEX | Hintergrund | Anwendung |
|--------|-------|-----|-------------|-----------|
| **Success** | <span style="display:inline-block;width:16px;height:16px;background:var(--bg-success-500);border-radius:3px;vertical-align:middle;"></span> Grün | `#22C55E` | `#DCFCE7` | Erfolgsmeldungen, Bestätigungen |
| **Warning** | <span style="display:inline-block;width:16px;height:16px;background:var(--bg-warning-500);border-radius:3px;vertical-align:middle;"></span> Gelb | `#EAB308` | `#FEF9C3` | Warnungen, Hinweise |
| **Error** | <span style="display:inline-block;width:16px;height:16px;background:var(--bg-error-500);border-radius:3px;vertical-align:middle;"></span> Rot | `#EF4444` | `#FEE2E2` | Fehler, kritische Meldungen |
| **Info** | <span style="display:inline-block;width:16px;height:16px;background:var(--bg-info-500);border-radius:3px;vertical-align:middle;"></span> Blau | `#3B82F6` | `#DBEAFE` | Informationen, Tipps |

## Die Triade `-100` / `-500` / `-700`

Jede Statusfarbe folgt einer **dreistufigen Token-Triade**, die den Standard-Anwendungsfall "leicht eingefärbter Hintergrund mit dunklem Text gleichen Hues" deckt — ohne dass Designer/Entwickler eigene Kombinationen raten müssen.

| Stufe | Rolle | Verwendung |
|-------|-------|------------|
| **`-100`** | Surface | Toast-Background, Callout-Body, Badge-Fill auf hellem Theme |
| **`-500`** | Primärfarbe | Icon, Status-Dot, Border, Ring, Fokus-Outline |
| **`-700`** | Lesbarer Text | AAA-konformer Text auf der `-100`-Surface |

### Vollständige Werte

| Token | HEX | OKLCH | Vorschau |
|-------|-----|-------|----------|
| `--success-100` | `#DCFCE7` | `oklch(94% 0.06 150)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-success-100);border-radius:4px;vertical-align:middle;"></span> |
| `--success-500` | `#22C55E` | `oklch(70% 0.16 150)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-success-500);border-radius:4px;vertical-align:middle;"></span> |
| `--success-700` | `#15803D` | `oklch(50% 0.14 150)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-success-700);border-radius:4px;vertical-align:middle;"></span> |
| `--warning-100` | `#FEF9C3` | `oklch(95% 0.07 90)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-warning-100);border-radius:4px;vertical-align:middle;"></span> |
| `--warning-500` | `#EAB308` | `oklch(78% 0.16 80)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-warning-500);border-radius:4px;vertical-align:middle;"></span> |
| `--warning-700` | `#A16207` | `oklch(58% 0.14 75)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-warning-700);border-radius:4px;vertical-align:middle;"></span> |
| `--error-100` | `#FEE2E2` | `oklch(94% 0.04 25)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-error-100);border-radius:4px;vertical-align:middle;"></span> |
| `--error-500` | `#EF4444` | `oklch(64% 0.22 25)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-error-500);border-radius:4px;vertical-align:middle;"></span> |
| `--error-700` | `#B91C1C` | `oklch(50% 0.20 25)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-error-700);border-radius:4px;vertical-align:middle;"></span> |
| `--info-100` | `#DBEAFE` | `oklch(94% 0.04 230)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-info-100);border-radius:4px;vertical-align:middle;"></span> |
| `--info-500` | `#3B82F6` | `oklch(70% 0.13 230)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-info-500);border-radius:4px;vertical-align:middle;"></span> |
| `--info-700` | `#1D4ED8` | `oklch(48% 0.16 255)` | <span style="display:inline-block;width:48px;height:24px;background:var(--bg-info-700);border-radius:4px;vertical-align:middle;"></span> |

::: tip Warum genau diese drei Stufen?
Mit `-100`-Background und `-700`-Text deckt eine Triade in der Praxis ~80 % aller Status-Komponenten ab: Badges, Toasts, Callouts, Form-Validierungs-Inline-Hints, Status-Cells in Tabellen. `-500` liefert die Mittel-Helligkeit für Icons, Status-Dots und Borders. Weitere Zwischenstufen sind selten nötig — wenn doch, lassen sie sich aus der OKLCH-Skalen-Methodik ableiten ([Methodik](/de/farben/methodik)).
:::

## Anwendungsbeispiele

### Badges

Semantische Farben werden in Badges als Kombination aus **hellem Hintergrund + dunkler Textfarbe** der jeweiligen Farbe verwendet:

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:var(--bg-success-100);color:var(--bg-success-700);"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Erfolgreich</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:var(--bg-warning-100);color:var(--bg-warning-700);"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Warnung</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:var(--bg-error-100);color:var(--bg-error-700);"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Fehler</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:var(--bg-info-100);color:var(--bg-info-700);"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Information</span>
</div>

### Hinweis-Boxen

<div style="display:flex;flex-direction:column;gap:16px;margin:24px 0;">
  <div style="border-left:4px solid #22C55E;background:rgba(34,197,94,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:var(--bg-success-700);margin-bottom:4px;">Erfolg</div>
    <div style="color:#18181B;font-size:0.9rem;">Dieser Vorgang wurde erfolgreich abgeschlossen.</div>
  </div>
  <div style="border-left:4px solid #EAB308;background:rgba(234,179,8,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:var(--bg-warning-700);margin-bottom:4px;">Warnung</div>
    <div style="color:#18181B;font-size:0.9rem;">Bitte überprüfen Sie die eingegebenen Daten.</div>
  </div>
  <div style="border-left:4px solid #EF4444;background:rgba(239,68,68,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:var(--bg-error-700);margin-bottom:4px;">Fehler</div>
    <div style="color:#18181B;font-size:0.9rem;">Der Vorgang konnte nicht abgeschlossen werden.</div>
  </div>
  <div style="border-left:4px solid #3B82F6;background:rgba(59,130,246,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:var(--bg-info-700);margin-bottom:4px;">Information</div>
    <div style="color:#18181B;font-size:0.9rem;">Weitere Details finden Sie in der Dokumentation.</div>
  </div>
</div>

### Farbpaare (Hintergrund + Text)

| Status | Hintergrund | Textfarbe | Vorschau |
|--------|-------------|-----------|----------|
| **Success** | #DCFCE7 | #15803D | <span style="background:var(--bg-success-100);color:var(--bg-success-700);padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Aktiv</span> |
| **Warning** | #FEF9C3 | #A16207 | <span style="background:var(--bg-warning-100);color:var(--bg-warning-700);padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Ausstehend</span> |
| **Error** | #FEE2E2 | #B91C1C | <span style="background:var(--bg-error-100);color:var(--bg-error-700);padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Kritisch</span> |
| **Info** | #DBEAFE | #1D4ED8 | <span style="background:var(--bg-info-100);color:var(--bg-info-700);padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Standard</span> |

## CSS Custom Properties

### Triade-Tokens (HEX)

Die kanonischen Tokens folgen dem `<status>-<step>`-Schema und sind direkt verwendbar in jeder modernen UI-Komponente.

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

### Triade-Tokens (OKLCH-Parallele)

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

### Legacy-Aliase (Abwärtskompatibilität)

Bestehende Komponenten verwenden teilweise die älteren `--brand-*`-Aliase. Diese bleiben für Abwärtskompatibilität verfügbar und mappen auf die kanonische Triade:

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

::: info Empfehlung für neue Komponenten
Verwenden Sie die kanonische Triade (`--success-100/-500/-700` etc.) — sie ist die Single Source of Truth und lässt sich in OKLCH-Notation ohne Alias-Indirektion beziehen. Die `--brand-*`-Aliase bleiben für Bestand erhalten, sollten aber in Neuentwicklung nicht mehr direkt referenziert werden.
:::
