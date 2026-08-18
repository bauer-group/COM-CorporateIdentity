# Lockups

Neben Bildmarke und Wide-Logo gibt es **zwei erzeugte Lockups**. Beide **ergänzen** das bestehende Logosystem — Bildmarke und Wide-Logo bleiben unverändert gültig.

| Lockup | Aufbau | Anwendung |
|--------|--------|-----------|
| **Division-Lockup** | Bildmarke links, „BAUER GROUP" über der Zusatzbezeichnung rechts | Profit Center und Geschäftsbereiche: Website-Header, App-Bars, Signaturen, Briefbogen |
| **Tagline-Lockup** | Komplettes Wide-Logo, darunter eine Trennlinie und eine mittig gesetzte Tagline | Kampagnen, Titelfolien, Messestand, Anzeigen, Imagebroschüren |

::: danger Verbindlich
Es gibt genau **diese zwei** Lockups. Keine dritte Zeile, keine Kombination aus beiden, keine Rechtsform und kein Standort im Lockup.
:::

::: info Platzhalter in dieser Dokumentation
Die Abbildungen zeigen den neutralen Platzhalter **COMPLIANCE**. Er dient ausschließlich der Demonstration von Aufbau und Maßen und ist **kein realer Geschäftsbereich**.
:::

## Division-Lockup

<LockupPreview kind="divisions" />

Das Division-Lockup ist **genauso hoch und genauso breit** wie das Wide-Logo. Jedes Layout, das für das Wide-Logo ausgelegt ist, nimmt ein Division-Lockup ohne Änderung auf.

### Maße

Alle Werte als Vielfaches von **X** — der Höhe des „B" in der Bildmarke, wie in [Schutzzone & Größen](/de/logo/schutzzone) definiert.

| Maß | X-Verhältnis | Einheiten |
|-----|-------------|-----------|
| **Höhe der Bildmarke** | 2,2176 X | 59,720 |
| **Versalhöhe Wortmarke** | 0,6636 X | 17,871 |
| **Versalhöhe Zusatzzeile** | 0,45 X | 12,118 |
| **Abstand Bildmarke → Text** | 0,3583 X | 9,649 |
| **Grundlinie 1 → Versaloberkante 2** | 0,18 X | 4,847 |
| **Grundlinienabstand** | 0,63 X | 16,966 |
| **Laufweite** | 0,08 em | — |

### Ausrichtung

- Die Zusatzzeile steht **linksbündig zur Wortmarke**, nicht zur Bildmarke.
- Der zweizeilige Textblock ist optisch auf dem **„B" der Bildmarke** zentriert — nicht auf der Diamantmitte.
- Die Bildmarke bleibt unverändert; die Wortmarke rückt um 8,481 Einheiten nach oben, damit der Block mittig steht.

::: tip Warum das „B" und nicht der Diamant
Im Wide-Logo liegt die Mitte der Wortmarke bei 29,116 und die Mitte des „B" bei 29,117 — identisch auf ±0,0015 Einheiten. Das Logo war seit jeher am „B" ausgerichtet; das Lockup führt diese Regel für den zweizeiligen Block fort.
:::

::: warning Markenrechtlich zu klären
Die Zentrierung verschiebt die Wortmarke um **8,481 Einheiten** — 14,2 % der Höhe — gegenüber der Bildmarke. Kein Pfad wird verändert, die innere Geometrie der eingetragenen Marke aber schon. Das gehört vor die Markenverantwortung, bevor das Lockup nach außen geht.

Die Alternative liegt bereit: `compactAlignment` in `scripts/lockups.json` auf `wordmark-fixed` gestellt lässt die Wortmarke exakt an ihrer Position aus dem Wide-Logo. Der zweizeilige Block sitzt dann sichtbar tiefer und wirkt angesetzt — deshalb ist es nicht die Voreinstellung.
:::

::: warning Längenbegrenzung
Die Zusatzzeile darf **nie breiter als die Wortmarke** werden (200,559 Einheiten). Der Generator bricht sonst mit einer klaren Meldung ab. `COMPLIANCE` nutzt davon 61 %.
:::

## Tagline-Lockup

<LockupPreview kind="taglines" width="420px" />

Das Wide-Logo bleibt **vollständig unangetastet**. Darunter setzt eine dünne Trennlinie die Aussage optisch ab, die Tagline steht **mittig zur vollen Breite** des Lockups.

### Maße

| Maß | X-Verhältnis | Einheiten |
|-----|-------------|-----------|
| **Logoblock** | unverändert | 269,940 × 59,720 |
| **Abstand Logo → Trennlinie** | 0,22 X | 5,925 |
| **Stärke der Trennlinie** | 0,04 X | 1,077 |
| **Abstand Trennlinie → Tagline** | 0,22 X | 5,925 |
| **Versalhöhe Tagline** | 0,30 X | 8,079 |
| **Laufweite** | 0,10 em | — |
| **Gesamthöhe** | 3,0234 X | 81,419 |

::: tip Gleicher Abstand ober- und unterhalb
Die Trennlinie sitzt mit **0,22 X** symmetrisch zwischen Logo und Tagline. Sie liegt damit nicht näher an einem der beiden Elemente und wirkt als Trennung, nicht als Anhängsel.
:::

### Die Trennlinie

Die Linie läuft über die **volle Breite** des Lockups und trägt **BAUER Orange** `#FF8500` — in beiden Tonlagen identisch, genau wie die Bildmarke. Sie ist **verbindlich** und darf weder weggelassen noch umgefärbt werden.

Damit reiht sie sich in das ein, was die Marke ohnehin tut: Die E-Mail-Signatur führt eine 3 px starke Orange-Linie als [primäres Branding-Element](/de/digital/email), und jede Abschnittsüberschrift in diesem Guide trägt denselben Orange-Unterstrich. Eine dunkle Linie wäre das einzige Trennelement im System ohne Orange gewesen.

Ihre Stärke von 0,04 X ist nach unten durch die Mindestgrößen bestimmt, nicht frei gewählt: Bei 220 px Breite ergibt sie **0,88 px**, bei 60 mm **0,24 mm**. Eine feinere Linie — etwa 0,03 X — fiele im Druck auf 0,18 mm und liegt damit unter dem, was eine Druckmaschine zuverlässig hält. Wer sie feiner will, muss die Mindestgrößen anheben.

### Warum die Tagline die Farbe der Wortmarke trägt

Die Tagline ist mit 0,30 X die **kleinste Schrift im gesamten Logosystem**. Sie bekommt deshalb den höchsten Kontrast, nicht den niedrigsten: Sie übernimmt die Tinte der Wortmarke, wird also `#231F20` auf Hell und Weiß auf Dunkel.

| Hintergrund | Wortmarken-Tinte `#231F20` | Orange 800 `#9A4509` |
|-------------|---------------------------|---------------------|
| Weiß `#FFFFFF` | **16,30 ✅** | 6,50 ✅ |
| Grau 50 `#FAFAFA` | **15,62 ✅** | 6,23 ✅ |
| Grau 100 `#F4F4F5` | **14,83 ✅** | 5,92 ✅ |
| Warm 100 `#F0EDEA` | **13,98 ✅** | 5,58 ✅ |

Der Generator liest diese Farbe bei jedem Lauf **aus dem Master** aus, statt sie zu hinterlegen. Die Tagline kann dadurch nie von der Wortmarke abweichen — auch nicht nach einem Neuexport der Master.

::: warning Orange als Schrift bleibt der Zusatzbezeichnung vorbehalten
Ein ganzer Satz in Orange konkurriert mit der Bildmarke. Als **Schriftfarbe** markiert Orange im Lockup-System die Zusatzbezeichnung — also einen Namen — und nicht eine Aussage.

Die Trennlinie ist davon unberührt: Sie ist **weder Schrift noch Aussage, sondern ein dekorativer Akzent**, und genau dafür ist Orange 500 laut [Kontrastprüfung](/de/barrierefreiheit/kontrast) ausdrücklich vorgesehen.
:::

### Alle Taglines

Jede Tagline in [Markenwerte & Leitbild](/de/marke/) liegt als fertiges Lockup vor. Alle vier haben **exakt dieselbe Bounding-Box** (269,940 × 81,419), weil die Unterlänge des „Q" immer reserviert wird — sie sind damit gegeneinander austauschbar, ohne dass ein Layout nachjustiert werden muss.

<LockupGallery kind="taglines" lang="de" />

::: warning Längenbegrenzung
Die Tagline darf **nie breiter als das Wide-Logo** werden (269,940 Einheiten). Die längste aktuelle Tagline nutzt davon 97 % — für eine weitere Tagline ist damit kaum Reserve. Der Generator bricht ab, statt über die Kante zu laufen.
:::

## Schutzzone & Mindestgrößen

::: warning Ausnahme zur Schutzzonen-Regel
Ein Lockup ist **ein einziges Artwork**, nicht ein Logo mit einem Element daneben. Die Schutzzone von 1 × X wird deshalb ab der **Bounding-Box des Lockups** gemessen, nicht ab der des Wide-Logos.

Zusatzbezeichnung und Tagline sind die **einzigen** Elemente, die jemals innerhalb der Logo-Schutzzone stehen dürfen — und nur in den zwei hier definierten Positionen. Alles andere bleibt ausgeschlossen.
:::

| Lockup | Digital | Print |
|--------|---------|-------|
| **Division-Lockup** | 40 px Höhe | 12 mm Höhe |
| **Tagline-Lockup** | 220 px Breite | 60 mm Breite |

Das Division-Lockup erbt exakt die Mindestgröße der Bildmarke — es gibt keine neue Zahl zu merken. Das Tagline-Lockup braucht mehr, weil seine Tagline mit 0,30 X die kleinste Schrift im System ist: Bei 220 px Breite steht sie auf 6,6 px Versalhöhe, bei 60 mm auf 1,8 mm.

::: danger Unter der Mindestgröße
Unterhalb dieser Größen werden Zusatzbezeichnung und Tagline unleserlich. Dann gilt die bestehende Regel: **nur die Bildmarke** oder **nur das Wide-Logo**, ohne Zusatz.
:::

## Assets

Zwei Dateien je Eintrag, benannt nach dem bestehenden Schema:

```text
bauer-group-lockup-<slug>.svg           Division, hell
bauer-group-lockup-<slug>-white.svg     Division, dunkel
bauer-group-tagline-<slug>.svg          Tagline, hell
bauer-group-tagline-<slug>-white.svg    Tagline, dunkel
```

Dazu automatisch PNGs in 960, 1440 und 2048 px Breite unter `/downloads/png/`. Alle Dateien werden **bei jedem Build neu erzeugt** — sie liegen nicht im Repository.

<LockupGallery kind="divisions" lang="de" />

## Neuen Eintrag anlegen

Lockups werden erzeugt, nicht gezeichnet. Ein neuer Geschäftsbereich oder eine neue Tagline ist **eine Zeile** in `scripts/lockups.json`:

```json
{ "divisions": [{ "slug": "compliance", "name": "Compliance", "nameEn": "Compliance" }],
  "taglines":  [{ "slug": "today-tomorrow-together", "text": "Today. Tomorrow. Together." }] }
```

Danach:

```bash
npm run generate
```

Mehr ist nicht zu tun: SVGs, PNGs, Vorschauen und Download-Karten auf dieser Seite und unter [Downloads](/de/downloads/) entstehen daraus automatisch. Der Build ruft `npm run generate` ohnehin vor jedem `docs:build` auf — jeder Deploy enthält damit den vollständigen, aktuellen Satz.

Der Generator übernimmt Bildmarke und Wortmarke **byte-identisch** aus den Mastern und prüft das bei jedem Lauf. Die Zusatzzeile wird aus einer mitgelieferten Schrift in Pfade umgewandelt — die fertigen SVGs enthalten keinerlei Schriftabhängigkeit und lassen sich in Illustrator, Canva oder InDesign ohne Schriftersetzung öffnen.

::: tip Nicht nachbauen
Lockups niemals von Hand zusammensetzen. Weicht ein Master ab, bricht der Generator mit einer klaren Meldung ab — von Hand gebaute Dateien haben diese Sicherung nicht.
:::

## Regeln

::: danger Verboten

- Die Wortmarke **nicht nachsetzen** — Lockups kommen ausschließlich aus dem Generator
- Zusatzbezeichnung **nicht in Orange 500** und in keiner anderen Farbe als Orange 800 / Orange 400
- Tagline **nicht einfärben** — sie trägt immer die Tinte der Wortmarke
- **Keine Trennlinie**, kein Rahmen, kein Balken zwischen Logo und Tagline
- **Keine dritte Zeile**, keine Rechtsform, kein Standort im Lockup
- Zusatzbezeichnung und Tagline **nicht kombinieren** — ein Lockup trägt genau eine Zusatzzeile
- Division-Lockup **nicht unter 40 px / 12 mm**, Tagline-Lockup nicht unter 220 px / 60 mm
- Zusatzzeile **nicht zentrieren** — sie steht immer linksbündig
:::

Zusätzlich gelten unverändert alle [Falschanwendungen](/de/logo/donts) des Basislogos.

::: info Bekannte Abweichungen im Bestand
Die Doku nennt für die Wortmarke „BAUER" `#231F1F` und für „GROUP" ein Grau `#52525B`. Im Artwork tragen jedoch **alle zehn Buchstabenpfade dieselbe Farbe** `#231F20`, und das Orange der SVG-Master ist `#F57E13` statt des Token-Werts `#FF8500`. Das Lockup übernimmt die Master unverändert und verstärkt die Abweichung nicht. Die Bereinigung ist ein eigenes Thema.
:::
