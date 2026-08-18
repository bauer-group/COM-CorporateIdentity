# Brand Lockup

Die Web-Ausprägung des [Geschäftsbereichs-Lockups](/de/logo/lockup). Bildmarke und Wortmarke bleiben Artwork; nur die Zusatzbezeichnung ist echter Text — dadurch ist sie selektierbar, übersetzbar und durchsuchbar, ohne dass die geschützte Wortmarke nachgesetzt wird.

## Vorschau

<div class="logo-stage light">
  <a class="bg-lockup" href="/de/" aria-label="BAUER GROUP Compliance — Startseite" style="--bg-lockup-size: 56px">
    <img class="mark" src="/brand/bauer-group-icon.svg" alt="" width="60" height="60" decoding="async">
    <span class="text">
      <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg" alt="" width="1003" height="91" decoding="async">
      <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg" alt="" width="1003" height="91" decoding="async">
      <span class="division">Compliance</span>
    </span>
  </a>
</div>

<div class="logo-stage dark">
  <a class="bg-lockup" href="/de/" aria-label="BAUER GROUP Compliance — Startseite" style="--bg-lockup-size: 56px">
    <img class="mark" src="/brand/bauer-group-icon.svg" alt="" width="60" height="60" decoding="async">
    <span class="text">
      <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg" alt="" width="1003" height="91" decoding="async">
      <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg" alt="" width="1003" height="91" decoding="async">
      <span class="division">Compliance</span>
    </span>
  </a>
</div>

## Spezifikation

| Eigenschaft | Wert | Herkunft |
|-------------|------|----------|
| **Stellknopf** | `--bg-lockup-size` | Höhe der Bildmarke, steuert alles Übrige |
| **Standardgröße** | `40px` | zugleich die Mindestgröße |
| **Abstand Marke → Text** | `0.1616 × size` | 0,3583 X |
| **Höhe der Wortmarke** | `0.3046 × size` | Ink-Höhe 18,191 / 59,72 |
| **Schriftgrad Zusatzzeile** | `0.29 × size` | ergibt 0,45 X Versalhöhe |
| **Zeilenabstand** | `0.0785 × size` | ab Unterkante der Wortmarken-Ink-Box |
| **Schutzzone** | `0.451 × size` | 1 × X, als `padding` erzwungen |

## HTML

```html
<a class="bg-lockup" href="/" aria-label="BAUER GROUP Compliance — Startseite">
  <img class="mark" src="/brand/bauer-group-icon.svg"
       alt="" width="60" height="60" decoding="async" fetchpriority="high">
  <span class="text">
    <img class="wordmark wordmark-light" src="/brand/bauer-group-wordmark.svg"
         alt="" width="1003" height="91" decoding="async" fetchpriority="high">
    <img class="wordmark wordmark-dark" src="/brand/bauer-group-wordmark-white.svg"
         alt="" width="1003" height="91" decoding="async">
    <span class="division">Compliance</span>
  </span>
</a>
```

Der barrierefreie Name steht als `aria-label` auf dem Link, alle Bilder tragen `alt=""`. Das ist hier die richtige Wahl, weil zwischen heller und dunkler Wortmarke umgeschaltet wird — ein `alt` auf beiden würde je nach Theme doppelt oder gar nicht vorgelesen. Der sichtbare Text ist im Label enthalten (WCAG 2.5.3).

## CSS

```css
.bg-lockup {
  --bg-lockup-size: 40px;              /* einziger Stellknopf: Höhe der Bildmarke */
  display: inline-flex;
  align-items: center;
  gap: calc(var(--bg-lockup-size) * 0.1616);
  padding: calc(var(--bg-lockup-size) * 0.451);   /* Schutzzone = 1 × X */
  text-decoration: none;
  color: inherit;
}

.bg-lockup .mark {
  inline-size: var(--bg-lockup-size);
  block-size: var(--bg-lockup-size);
  min-block-size: 40px;                /* Mindestgröße, hart */
  flex: none;
}

.bg-lockup .text {
  display: flex;
  flex-direction: column;
  gap: calc(var(--bg-lockup-size) * 0.0785);
}

.bg-lockup .wordmark {
  block-size: calc(var(--bg-lockup-size) * 0.3046);
  inline-size: auto;
}

.bg-lockup .division {
  font-family: var(--bg-font-body);
  font-size: calc(var(--bg-lockup-size) * 0.29);
  font-size-adjust: cap-height 0.7;    /* fixiert die Versalhöhe plattformübergreifend */
  font-synthesis: none;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  color: var(--bg-orange-600);
}

@supports (text-box: trim-both cap alphabetic) {
  .bg-lockup .division { text-box: trim-both cap alphabetic; }
}

.bg-lockup .wordmark-dark { display: none; }
.dark .bg-lockup .wordmark-light { display: none; }
.dark .bg-lockup .wordmark-dark { display: block; }
/* Die Zusatzzeile behält im Dark Mode dieselbe Tinte — wie die Bildmarke. */

.bg-lockup:focus-visible {
  outline: 3px solid var(--bg-orange-500);
  outline-offset: 2px;
  border-radius: 8px;
}

@media (forced-colors: active) {
  .bg-lockup:focus-visible { outline-color: CanvasText; }
}

@media print {
  .bg-lockup { padding: 0; }
  .bg-lockup .mark { block-size: 12mm; inline-size: 12mm; }
  .bg-lockup .division { color: #000; print-color-adjust: exact; }
}
```

### Warum `font-size-adjust` nicht optional ist

Systemschriften unterscheiden sich stark in der Versalhöhe pro Schriftgrad. Ohne Korrektur läuft die Zusatzzeile je nach Betriebssystem um bis zu **13 %** auseinander:

| Schrift | Versalhöhe je em |
|---------|-----------------|
| Segoe UI (Windows) | 0,7002 |
| Arial | 0,7163 |
| Calibri | 0,6318 |

`font-size-adjust: cap-height 0.7` skaliert jede Schrift so, dass ihre Versalhöhe exakt 0,7 × Schriftgrad beträgt — damit ist die Zeile überall gleich hoch. Unterstützt ab Chrome 127, Firefox 92 und Safari 17.

`text-box: trim-both cap alphabetic` trimmt zusätzlich die Zeilenbox exakt auf Versaloberkante und Grundlinie und bringt den Restversatz auf null. Verfügbar ab Chrome 133 und Safari 18.2; ohne Unterstützung bleibt eine Abweichung von unter einem Pixel.

## Astro-Komponente

```astro
---
interface Props {
  division?: string
  href?: string | null
  size?: string
  label?: string
  base?: string
}
const {
  division,
  href = '/',
  size,
  label = division ? `BAUER GROUP ${division}` : 'BAUER GROUP',
  base = '/brand',
} = Astro.props

const Tag = href ? 'a' : 'span'
const attrs = href ? { href } : { role: 'img' }
const style = size ? `--bg-lockup-size: ${size}` : undefined
---

<Tag class="bg-lockup" aria-label={label} style={style} {...attrs}>
  <img class="mark" src={`${base}/bauer-group-icon.svg`}
       alt="" width="60" height="60" decoding="async" fetchpriority="high" />
  <span class="text">
    <img class="wordmark wordmark-light" src={`${base}/bauer-group-wordmark.svg`}
         alt="" width="1003" height="91" decoding="async" fetchpriority="high" />
    <img class="wordmark wordmark-dark" src={`${base}/bauer-group-wordmark-white.svg`}
         alt="" width="1003" height="91" decoding="async" />
    {division && <span class="division">{division}</span>}
  </span>
</Tag>
```

Ohne `division` rendert die Komponente das reine Wortmarken-Lockup — eine Seite kann sie also übernehmen, bevor ihr Geschäftsbereich feststeht. Mit `href={null}` wird statt des Links ein `<span role="img">` ausgegeben, etwa für Fußzeilen und PDF-Exporte.

::: warning Kein Default-Slot
Die Komponente hat bewusst keinen Default-Slot. Fremdinhalt im Inneren würde in die Schutzzone geraten. Zusätzliche Elemente gehören **neben** das Lockup, nicht hinein.
:::

## Zustände

| Zustand | Verhalten |
|---------|-----------|
| **Standard** | Wortmarke dunkel, Zusatzzeile Orange 600 |
| **Dark Mode** | Wortmarke weiß, Zusatzzeile Orange 600 — unverändert |
| **Hover** | keine Änderung — das Logo ist kein Button |
| **Focus** | 3 px Ring in Orange 500, 2 px Abstand |
| **Forced Colors** | Ring in `CanvasText` |
| **Print** | Schutzzone entfällt, Bildmarke 12 mm, Zusatzzeile schwarz |
| **Unter 40 px** | `min-block-size` bricht das Layout sichtbar auf |

::: tip Die Mindestgröße bricht absichtlich
`min-block-size: 40px` überschreibt einen zu kleinen `--bg-lockup-size`. Das Layout verrutscht dann sichtbar — gewollt: lieber ein auffälliger Fehler in der Entwicklung als eine unterlizenzierte Marke in Produktion.
:::

::: warning Barrierefreiheit
`aria-label` auf dem Link, `alt=""` auf allen Bildern. Die Zusatzzeile trägt in beiden Tonwerten Orange 600: auf Dunkel sind das 5,21–6,69:1 und damit WCAG 2.1 AA, auf Hell 2,69–3,14:1 — dort greift die [Logotype-Ausnahme](/de/logo/lockup#farbe-der-zusatzbezeichnung) nach WCAG 2.1 SC 1.4.3. Als Textfarbe im Interface bleibt Orange 600 ausgeschlossen, siehe [Kontrastprüfung](/de/barrierefreiheit/kontrast).
:::
