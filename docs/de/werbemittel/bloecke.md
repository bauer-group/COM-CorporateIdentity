# Schreibblöcke

Die BAUER GROUP Schreibblöcke sind in zwei Formaten verfügbar: **DIN A5** und **DIN A6**. Beide folgen einem einheitlichen Layout-System mit Logo, QR-Code, Rastergitter und Fußzeile.

## Vorschau

<div style="display:flex;gap:24px;flex-wrap:wrap;margin:24px 0;justify-content:center;">
  <div style="flex:0 1 auto;text-align:center;">
    <div style="background:var(--vp-c-bg-soft);border-radius:12px;padding:16px;display:inline-block;">
      <img src="/print/block-a5-preview.png" alt="Schreibblock A5" style="height:420px;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,0.12);">
    </div>
    <div style="margin-top:12px;font-weight:700;font-size:0.9em;">DIN A5</div>
    <div style="color:var(--vp-c-text-2);font-size:0.8em;">148 × 210 mm</div>
  </div>
  <div style="flex:0 1 auto;text-align:center;">
    <div style="background:var(--vp-c-bg-soft);border-radius:12px;padding:16px;display:inline-block;">
      <img src="/print/block-a6-preview.png" alt="Schreibblock A6" style="height:420px;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,0.12);">
    </div>
    <div style="margin-top:12px;font-weight:700;font-size:0.9em;">DIN A6</div>
    <div style="color:var(--vp-c-text-2);font-size:0.8em;">105 × 148 mm</div>
  </div>
</div>

## Formate & Spezifikationen

| Eigenschaft | A5 | A6 |
|-------------|-----|-----|
| **Endformat** | 148 × 210 mm | 105 × 148 mm |
| **Ausrichtung** | Hochformat | Hochformat |
| **Papier** | 80 g/m² Offsetpapier | 80 g/m² Offsetpapier |
| **Blatt** | 50 Blatt | 50 Blatt |
| **Bindung** | Leimung am Kopf | Leimung am Kopf |
| **Lochung** | Keine | Keine |
| **Bedruckung** | Vierfarbig (4/0) | Vierfarbig (4/0) |
| **Datencheck** | Ja | Ja |
| **Bestellmenge** | 1.000 Stück | 1.000 Stück |
| **Raster** | 5 mm Gitter | 5 mm Gitter |
| **Lineal** | Links, 0–20 cm | Links, 0–14 cm |
| **Version** | 2023-06-20 | 2023-06-20 |

## Layout-Aufbau

Beide Formate folgen exakt demselben Layout — skaliert auf die jeweilige Blattgröße.

### Kopfbereich

<div style="background:var(--vp-c-bg-soft);border-radius:12px;padding:8px;margin:16px 0;">
  <img src="/print/block-a5-header.png" alt="Kopfbereich Schreibblock" style="width:100%;border-radius:4px;">
</div>

| Element | Position | Details |
|---------|----------|---------|
| **Logo** | Oben links | Wide-Variante mit Bildmarke (orange Raute + "B"), vollfarbig auf Weiß |
| **QR-Code + C2A** | Oben rechts | QR-Code (Schwarz auf Weiß) mit Call-to-Action: Info-Icon (ℹ-Sprechblase + Pfeil-Icon in Orange) |
| **Lineal** | Linker Rand | Zentimeter-Skala (0–20 cm bei A5, 0–14 cm bei A6), Striche und Zahlen in BAUER Orange |

### Schreibfläche

| Element | Details |
|---------|---------|
| **Gitter** | Millimeterpapier-Druck: kariertes 5-mm-Raster leicht dunkler, mm-Linien heller (hellgrau). Beginnt unterhalb des Kopfbereichs |
| **Wasserzeichen** | "B"-Bildmarke, im unteren Drittel der Schreibfläche rechtsbündig, 5–10% Deckkraft (analog Briefbogen) |
| **Gitterbereich** | Erstreckt sich vom Kopfbereich bis zum Fußbereich, von der Lineal-Kante bis zum rechten Blattrand |

### Fußbereich

<div style="background:var(--vp-c-bg-soft);border-radius:12px;padding:8px;margin:16px 0;">
  <img src="/print/block-a5-footer.png" alt="Fußbereich Schreibblock" style="width:100%;border-radius:4px;">
</div>

| Element | Position | Details |
|---------|----------|---------|
| **Website** | Unten links | `www.bauer-group.com` — kursiv, Schwarz |
| **E-Mail** | Unten rechts | `info@bauer-group.com` — kursiv, Schwarz |
| **Akzentbalken** | Unterkante, volle Breite | BAUER Orange (#FF8500) mit grauem Abschluss rechts, ~3 mm Höhe |

## QR-Codes

Jeder Schreibblock hat einen individuellen QR-Code mit produktspezifischer URL über den BAUER GROUP URL-Shortener.

| Produkt | QR-Code URL | Shortlink-ID |
|---------|-------------|--------------|
| **Schreibblock A5** | `https://go.bauer-group.com/p-pada5` | `p-pada5` |
| **Schreibblock A6** | `https://go.bauer-group.com/p-pada6` | `p-pada6` |

| Eigenschaft | Wert |
|-------------|------|
| **URL-Shortener** | `go.bauer-group.com` |
| **Namensschema** | `p-pad{format}` (p = Print, pad = Schreibblock) |
| **Größe A5** | ca. 15 × 15 mm |
| **Größe A6** | ca. 12 × 12 mm |
| **Position** | Oben rechts, bündig mit Logo-Oberkante |
| **Farbe** | Schwarz auf Weiß |

::: tip URL-Shortener Vorteil
Der Shortener `go.bauer-group.com` entkoppelt das Druckprodukt von der Ziel-URL. Die Weiterleitung kann jederzeit serverseitig geändert werden — ohne Nachdruck. Jedes Produkt erhält eine eigene, trackbare Shortlink-ID.
:::

### QR-Code-Regeln (alle Printmaterialien)

1. **Mindestgröße**: 10 × 10 mm (für zuverlässiges Scannen)
2. **Ruhezone**: Mindestens 2 mm weißer Rand um den QR-Code
3. **Farbe**: Schwarz auf Weiß — kein Orange, kein invertierter Hintergrund
4. **Fehlerkorrektur**: Level M (15%) oder höher
5. **Icon-Begleitung**: Immer mit Info- oder Scan-Icon versehen
6. **URL**: Immer `go.bauer-group.com/...` verwenden, keine direkten Lang-URLs

## Druckspezifikation

| Eigenschaft | Wert |
|-------------|------|
| **Farbmodus** | CMYK |
| **Orange (Logo, Lineal, Balken)** | C0 M48 Y100 K0 / PMS 144 C |
| **Schwarz (Text, QR-Code)** | C0 M0 Y0 K100 |
| **Grau (Raster)** | C0 M2 Y4 K12 |
| **Beschnitt** | 3 mm umlaufend |
| **Auflösung** | Mind. 300 dpi |

Weitere Druckhinweise: [Print & CMYK](/de/print/) · [Papierempfehlungen](/de/print/papier)

## Downloads

<div class="download-grid">
  <div class="download-card">
    <div class="preview"><img src="/print/block-a5-preview.png" alt="Schreibblock A5" /></div>
    <div class="body">
      <div class="title">Schreibblock A5</div>
      <div class="note">Version 2023-06-20 · PDF 102 KB · PNG 898 × 1264 px</div>
      <div class="links">
        <a href="/print/BAUER%20GROUP,%20Schreibblock%20A5,%20Version%202023-06-20.pdf" download>PDF</a>
        <a href="/print/block-a5-preview.png" download>PNG</a>
      </div>
    </div>
  </div>
  <div class="download-card">
    <div class="preview"><img src="/print/block-a6-preview.png" alt="Schreibblock A6" /></div>
    <div class="body">
      <div class="title">Schreibblock A6</div>
      <div class="note">Version 2023-06-20 · PDF 67 KB · PNG 644 × 898 px</div>
      <div class="links">
        <a href="/print/BAUER%20GROUP,%20Schreibblock%20A6,%20Version%202023-06-20.pdf" download>PDF</a>
        <a href="/print/block-a6-preview.png" download>PNG</a>
      </div>
    </div>
  </div>
</div>

::: warning Versionshinweis
Aktuelle Version: **2023-06-20**. Bei Nachbestellungen immer die neueste Version aus dem Vorlagenverzeichnis verwenden.
:::
