# Schutzzone & Mindestgrößen

## Schutzzone

Die Schutzzone definiert den Mindestabstand zwischen dem Logo und anderen grafischen Elementen. Sie stellt sicher, dass das Logo immer klar erkennbar ist.

**Maßeinheit X** = Höhe des „B"-Zeichens in der Bildmarke.

### Visualisierung

<div style="display:flex;justify-content:center;margin:32px 0;">
  <div style="position:relative;padding:48px;background:white;border-radius:16px;border:1.5px solid #E4E4E7;">
    <!-- Schutzzone Rahmen -->
    <div style="position:absolute;inset:0;border:2px dashed #FF8500;border-radius:16px;opacity:0.5;"></div>
    <!-- Maße oben -->
    <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Maße unten -->
    <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Maße links -->
    <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%) rotate(-90deg);">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Maße rechts -->
    <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%) rotate(90deg);">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Logo -->
    <img src="/logo-wide.svg" alt="Logo mit Schutzzone" style="max-width:320px;display:block;" />
  </div>
</div>

| Zone | Abstand | Beschreibung |
|------|---------|-------------|
| Oben | 1× X | Mindestabstand nach oben |
| Unten | 1× X | Mindestabstand nach unten |
| Links | 1× X | Mindestabstand nach links |
| Rechts | 1× X | Mindestabstand nach rechts |

::: danger Verbindlich
Die Schutzzone ist verbindlich. Kein anderes grafisches Element, kein Text und kein Seitenrand darf in die Schutzzone eindringen.
:::

### Richtig vs. Falsch

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:220px;border-radius:12px;border:2px solid #22C55E;padding:24px;text-align:center;">
    <div style="font-size:0.7rem;font-weight:700;color:#15803D;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">✓ Richtig</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:32px;">
      <img src="/logo-wide.svg" alt="Logo korrekt" style="max-width:200px;" />
    </div>
    <div style="font-size:0.8rem;color:#52525B;margin-top:8px;">Ausreichend Freiraum um das Logo</div>
  </div>
  <div style="flex:1;min-width:220px;border-radius:12px;border:2px solid #EF4444;padding:24px;text-align:center;">
    <div style="font-size:0.7rem;font-weight:700;color:#B91C1C;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">✗ Falsch</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:8px 4px;display:flex;align-items:center;gap:4px;">
      <img src="/logo-wide.svg" alt="Logo zu eng" style="max-width:120px;" />
      <span style="font-size:0.65rem;color:#52525B;font-weight:600;">Text zu nah am Logo</span>
    </div>
    <div style="font-size:0.8rem;color:#52525B;margin-top:8px;">Elemente dringen in die Schutzzone ein</div>
  </div>
</div>

## Mindestgrößen

Um die Lesbarkeit und Erkennbarkeit zu gewährleisten, gelten folgende Mindestgrößen:

### Wide Logo (Horizontal)

<div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end;margin:24px 0;">
  <div style="text-align:center;">
    <div style="background:#F4F4F5;border-radius:12px;padding:24px 32px;display:inline-block;">
      <img src="/logo-wide.svg" alt="Wide Logo Mindestgröße" style="width:160px;" />
    </div>
    <div style="font-size:0.75rem;color:#52525B;margin-top:8px;font-weight:600;">160px / 40mm <span style="background:#DCFCE7;color:#15803D;padding:1px 6px;border-radius:4px;font-size:0.7rem;">Min</span></div>
  </div>
</div>

| Medium | Mindestgröße |
|--------|-------------|
| Digital (Bildschirm) | **160px** Breite |
| Print (Druck) | **40mm** Breite |

### Square Logo (Bildmarke)

<div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end;margin:24px 0;">
  <div style="text-align:center;">
    <div style="background:#F4F4F5;border-radius:12px;padding:20px;display:inline-block;">
      <img src="/logo.svg" alt="Bildmarke Mindestgröße" style="width:40px;" />
    </div>
    <div style="font-size:0.75rem;color:#52525B;margin-top:8px;font-weight:600;">40px / 12mm <span style="background:#DCFCE7;color:#15803D;padding:1px 6px;border-radius:4px;font-size:0.7rem;">Min</span></div>
  </div>
</div>

| Medium | Mindestgröße |
|--------|-------------|
| Digital (Bildschirm) | **40px** Breite |
| Print (Druck) | **12mm** Breite |

::: warning Unter der Mindestgröße
Unterhalb der Mindestgröße verliert das Logo seine Lesbarkeit. In solchen Fällen ist ausschließlich die **Bildmarke** (Square) zu verwenden.
:::
