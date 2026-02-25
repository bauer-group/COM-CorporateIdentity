# Semantische Farben

Semantische Farben kommunizieren Status und Bedeutung in der Benutzeroberfläche. Jede Farbe hat eine feste Bedeutung — konsistent über alle Komponenten.

## Statusfarben

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#22C55E;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Success</div>
      <div style="font-size:0.75rem;color:#71717A;">#22C55E</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#EAB308;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Warning</div>
      <div style="font-size:0.75rem;color:#71717A;">#EAB308</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#EF4444;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Error</div>
      <div style="font-size:0.75rem;color:#71717A;">#EF4444</div>
    </div>
  </div>
  <div style="flex:1;min-width:140px;border-radius:12px;overflow:hidden;border:1.5px solid #E4E4E7;">
    <div style="background:#3B82F6;height:48px;"></div>
    <div style="padding:12px;text-align:center;">
      <div style="font-weight:700;font-size:0.85rem;color:#18181B;">Info</div>
      <div style="font-size:0.75rem;color:#71717A;">#3B82F6</div>
    </div>
  </div>
</div>

| Status | Farbe | HEX | Hintergrund | Anwendung |
|--------|-------|-----|-------------|-----------|
| **Success** | <span style="display:inline-block;width:16px;height:16px;background:#22C55E;border-radius:3px;vertical-align:middle;"></span> Grün | `#22C55E` | `#DCFCE7` | Erfolgsmeldungen, Bestätigungen |
| **Warning** | <span style="display:inline-block;width:16px;height:16px;background:#EAB308;border-radius:3px;vertical-align:middle;"></span> Gelb | `#EAB308` | `#FEF9C3` | Warnungen, Hinweise |
| **Error** | <span style="display:inline-block;width:16px;height:16px;background:#EF4444;border-radius:3px;vertical-align:middle;"></span> Rot | `#EF4444` | `#FEE2E2` | Fehler, kritische Meldungen |
| **Info** | <span style="display:inline-block;width:16px;height:16px;background:#3B82F6;border-radius:3px;vertical-align:middle;"></span> Blau | `#3B82F6` | `#DBEAFE` | Informationen, Tipps |

## Anwendungsbeispiele

### Badges

Semantische Farben werden in Badges als Kombination aus **hellem Hintergrund + dunkler Textfarbe** der jeweiligen Farbe verwendet:

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DCFCE7;color:#15803D;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Erfolgreich</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEF9C3;color:#A16207;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Warnung</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEE2E2;color:#B91C1C;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Fehler</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DBEAFE;color:#1D4ED8;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Information</span>
</div>

### Hinweis-Boxen

<div style="display:flex;flex-direction:column;gap:16px;margin:24px 0;">
  <div style="border-left:4px solid #22C55E;background:rgba(34,197,94,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#15803D;margin-bottom:4px;">Erfolg</div>
    <div style="color:#18181B;font-size:0.9rem;">Dieser Vorgang wurde erfolgreich abgeschlossen.</div>
  </div>
  <div style="border-left:4px solid #EAB308;background:rgba(234,179,8,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#A16207;margin-bottom:4px;">Warnung</div>
    <div style="color:#18181B;font-size:0.9rem;">Bitte überprüfen Sie die eingegebenen Daten.</div>
  </div>
  <div style="border-left:4px solid #EF4444;background:rgba(239,68,68,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#B91C1C;margin-bottom:4px;">Fehler</div>
    <div style="color:#18181B;font-size:0.9rem;">Der Vorgang konnte nicht abgeschlossen werden.</div>
  </div>
  <div style="border-left:4px solid #3B82F6;background:rgba(59,130,246,0.08);border-radius:0 8px 8px 0;padding:16px 20px;">
    <div style="font-weight:700;color:#1D4ED8;margin-bottom:4px;">Information</div>
    <div style="color:#18181B;font-size:0.9rem;">Weitere Details finden Sie in der Dokumentation.</div>
  </div>
</div>

### Farbpaare (Hintergrund + Text)

| Status | Hintergrund | Textfarbe | Vorschau |
|--------|-------------|-----------|----------|
| **Success** | #DCFCE7 | #15803D | <span style="background:#DCFCE7;color:#15803D;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Aktiv</span> |
| **Warning** | #FEF9C3 | #A16207 | <span style="background:#FEF9C3;color:#A16207;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Ausstehend</span> |
| **Error** | #FEE2E2 | #B91C1C | <span style="background:#FEE2E2;color:#B91C1C;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Kritisch</span> |
| **Info** | #DBEAFE | #1D4ED8 | <span style="background:#DBEAFE;color:#1D4ED8;padding:4px 12px;border-radius:6px;font-weight:600;font-size:0.85em;">Standard</span> |

## CSS Custom Properties

```css
:root {
  --brand-success: #22C55E;
  --brand-warning: #EAB308;
  --brand-error: #EF4444;
  --brand-info: #3B82F6;

  --brand-success-bg: #DCFCE7;
  --brand-warning-bg: #FEF9C3;
  --brand-error-bg: #FEE2E2;
  --brand-info-bg: #DBEAFE;

  --brand-success-text: #15803D;
  --brand-warning-text: #A16207;
  --brand-error-text: #B91C1C;
  --brand-info-text: #1D4ED8;
}
```
