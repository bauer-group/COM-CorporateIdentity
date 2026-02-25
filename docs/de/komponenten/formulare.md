# Formulare

## Eingabefelder

### Vorschau

<div style="max-width:400px;margin:24px 0;">
  <label style="font-size:0.75rem;font-weight:600;color:#52525B;margin-bottom:6px;display:block;">E-Mail-Adresse</label>
  <div style="padding:12px 16px;border:1.5px solid #E4E4E7;border-radius:10px;font-size:0.875rem;background:white;color:#A1A1AA;">name@bauer-group.com</div>
</div>

<div style="max-width:400px;margin:24px 0;">
  <label style="font-size:0.75rem;font-weight:600;color:#52525B;margin-bottom:6px;display:block;">Fokussiertes Feld</label>
  <div style="padding:12px 16px;border:1.5px solid #FF8500;border-radius:10px;font-size:0.875rem;background:white;color:#18181B;box-shadow:0 0 0 3px rgba(255,133,0,0.12);">Karl Bauer</div>
</div>

### Validierung — Vorschau

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:180px;">
    <label style="font-size:0.75rem;font-weight:600;color:#52525B;margin-bottom:6px;display:block;">Valide</label>
    <div style="padding:12px 16px;border:1.5px solid #22C55E;border-radius:10px;font-size:0.875rem;background:white;color:#18181B;">karl@bauer-group.com</div>
  </div>
  <div style="flex:1;min-width:180px;">
    <label style="font-size:0.75rem;font-weight:600;color:#52525B;margin-bottom:6px;display:block;">Fehlerhaft</label>
    <div style="padding:12px 16px;border:1.5px solid #EF4444;border-radius:10px;font-size:0.875rem;background:white;color:#18181B;">ungültige-email</div>
    <span style="font-size:12px;color:#EF4444;margin-top:4px;display:block;">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
  </div>
</div>

### Spezifikation

| Eigenschaft | Wert |
|------------|------|
| **Padding** | 12px 16px |
| **Border** | 1.5px solid #E4E4E7 |
| **Border-Radius** | 10px |
| **Font-Size** | 14px |
| **Focus-Border** | <span style="display:inline-block;width:12px;height:12px;background:#FF8500;border-radius:2px;vertical-align:middle;"></span> #FF8500 |
| **Focus-Shadow** | 0 0 0 3px rgba(255, 133, 0, 0.12) |

### CSS

```css
.input {
  padding: 12px 16px;
  border: 1.5px solid #E4E4E7;
  border-radius: 10px;
  font-size: 0.875rem;
  font-family: var(--font-body);
  background: white;
  color: #18181B;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}

.input:focus {
  border-color: #FF8500;
  box-shadow: 0 0 0 3px rgba(255, 133, 0, 0.12);
}

.input::placeholder {
  color: #A1A1AA;
}
```

## Labels

```css
.label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #52525B;
  margin-bottom: 6px;
  display: block;
}
```

## Validierung

| Status | Border-Farbe | Vorschau | Anwendung |
|--------|-------------|----------|-----------|
| **Default** | #E4E4E7 | <span style="display:inline-block;width:48px;height:4px;background:#E4E4E7;border-radius:2px;vertical-align:middle;"></span> | Standardzustand |
| **Focus** | #FF8500 | <span style="display:inline-block;width:48px;height:4px;background:#FF8500;border-radius:2px;vertical-align:middle;"></span> | Aktives Feld |
| **Success** | #22C55E | <span style="display:inline-block;width:48px;height:4px;background:#22C55E;border-radius:2px;vertical-align:middle;"></span> | Valide Eingabe |
| **Error** | #EF4444 | <span style="display:inline-block;width:48px;height:4px;background:#EF4444;border-radius:2px;vertical-align:middle;"></span> | Fehlerhafte Eingabe |

::: info Fehlermeldungen
Fehlermeldungen werden unterhalb des Feldes in <span style="color:#EF4444;font-weight:600;">Error-Rot (#EF4444)</span> mit 12px Schriftgröße angezeigt.
:::
