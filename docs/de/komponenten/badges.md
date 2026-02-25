# Badges & Status

## Status Badges

Badges kommunizieren den Status eines Elements durch Farbcodierung.

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DCFCE7;color:#15803D;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Erfolgreich</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEF9C3;color:#A16207;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Warnung</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEE2E2;color:#B91C1C;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Fehler</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DBEAFE;color:#1D4ED8;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Information</span>
</div>

| Badge | Vorschau | Hintergrund | Textfarbe | Anwendung |
|-------|----------|------------|-----------|-----------|
| **Success** | <span style="background:#DCFCE7;color:#15803D;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Aktiv</span> | #DCFCE7 | #15803D | Erfolgreich, Bestätigt |
| **Warning** | <span style="background:#FEF9C3;color:#A16207;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Ausstehend</span> | #FEF9C3 | #A16207 | Warnung, In Bearbeitung |
| **Error** | <span style="background:#FEE2E2;color:#B91C1C;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Kritisch</span> | #FEE2E2 | #B91C1C | Fehler, Abgelehnt |
| **Info** | <span style="background:#DBEAFE;color:#1D4ED8;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Standard</span> | #DBEAFE | #1D4ED8 | Information, Neutral |

## CSS

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.badge-success { background: #DCFCE7; color: #15803D; }
.badge-warning { background: #FEF9C3; color: #A16207; }
.badge-error   { background: #FEE2E2; color: #B91C1C; }
.badge-info    { background: #DBEAFE; color: #1D4ED8; }
```

## Mit Punkt-Indikator

```css
.badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
```

## Anwendungsregeln

1. **Ein Badge pro Element** — nicht mehrere Status gleichzeitig
2. **Kurze Labels** — maximal 2 Wörter
3. **Konsistente Verwendung** — gleiche Bedeutung = gleiche Farbe
4. **Nicht als Buttons** — Badges sind informativ, nicht interaktiv
