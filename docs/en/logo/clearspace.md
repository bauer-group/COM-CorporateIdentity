# Clear space & minimum sizes

## Clear space

The clear space defines the minimum distance between the logo and other graphic elements. It ensures that the logo is always clearly recognizable.

**Unit X** = height of the "B" character in the icon.

### Visualization

<div style="display:flex;justify-content:center;margin:32px 0;">
  <div style="position:relative;padding:48px;background:white;border-radius:16px;border:1.5px solid #E4E4E7;">
    <!-- Clear space frame -->
    <div style="position:absolute;inset:0;border:2px dashed #FF8500;border-radius:16px;opacity:0.5;"></div>
    <!-- Measurement top -->
    <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Measurement bottom -->
    <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Measurement left -->
    <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%) rotate(-90deg);">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Measurement right -->
    <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%) rotate(90deg);">
      <span style="font-size:0.65rem;font-weight:700;color:#FF8500;background:rgba(255,133,0,0.1);padding:2px 8px;border-radius:4px;">1× X</span>
    </div>
    <!-- Logo -->
    <img src="/brand/bauer-group-logo-wide.svg" alt="Logo with clear space" style="max-width:320px;display:block;" />
  </div>
</div>

| Zone | Distance | Description |
|------|----------|-------------|
| Top | 1× X | Minimum distance at the top |
| Bottom | 1× X | Minimum distance at the bottom |
| Left | 1× X | Minimum distance to the left |
| Right | 1× X | Minimum distance to the right |

::: danger Mandatory
The clear space is mandatory. No other graphic element, no text and no page edge may intrude into the clear space.
:::

### Correct vs. incorrect

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:220px;border-radius:12px;border:2px solid #22C55E;padding:24px;text-align:center;">
    <div style="font-size:0.7rem;font-weight:700;color:#15803D;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">✓ Correct</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:32px;">
      <img src="/brand/bauer-group-logo-wide.svg" alt="Logo correct" style="max-width:200px;" />
    </div>
    <div style="font-size:0.8rem;color:#52525B;margin-top:8px;">Sufficient free space around the logo</div>
  </div>
  <div style="flex:1;min-width:220px;border-radius:12px;border:2px solid #EF4444;padding:24px;text-align:center;">
    <div style="font-size:0.7rem;font-weight:700;color:#B91C1C;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">✗ Incorrect</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:8px 4px;display:flex;align-items:center;gap:4px;">
      <img src="/brand/bauer-group-logo-wide.svg" alt="Logo too tight" style="max-width:120px;" />
      <span style="font-size:0.65rem;color:#52525B;font-weight:600;">Text too close to the logo</span>
    </div>
    <div style="font-size:0.8rem;color:#52525B;margin-top:8px;">Elements intrude into the clear space</div>
  </div>
</div>

## Minimum sizes

To ensure legibility and recognizability, the following minimum sizes apply:

### Wide logo (Horizontal)

<div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end;margin:24px 0;">
  <div style="text-align:center;">
    <div style="background:#F4F4F5;border-radius:12px;padding:24px 32px;display:inline-block;">
      <img src="/brand/bauer-group-logo-wide.svg" alt="Wide logo minimum size" style="width:160px;" />
    </div>
    <div style="font-size:0.75rem;color:#52525B;margin-top:8px;font-weight:600;">160px / 40mm <span style="background:#DCFCE7;color:#15803D;padding:1px 6px;border-radius:4px;font-size:0.7rem;">Min</span></div>
  </div>
</div>

| Medium | Minimum size |
|--------|--------------|
| Digital (screen) | **160px** width |
| Print | **40mm** width |

### Square logo (Icon)

<div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end;margin:24px 0;">
  <div style="text-align:center;">
    <div style="background:#F4F4F5;border-radius:12px;padding:20px;display:inline-block;">
      <img src="/brand/bauer-group-icon.svg" alt="Icon minimum size" style="width:40px;" />
    </div>
    <div style="font-size:0.75rem;color:#52525B;margin-top:8px;font-weight:600;">40px / 12mm <span style="background:#DCFCE7;color:#15803D;padding:1px 6px;border-radius:4px;font-size:0.7rem;">Min</span></div>
  </div>
</div>

| Medium | Minimum size |
|--------|--------------|
| Digital (screen) | **40px** width |
| Print | **12mm** width |

::: warning Below the minimum size
Below the minimum size, the logo loses its legibility. In such cases, only the **icon** (Square) must be used.
:::
