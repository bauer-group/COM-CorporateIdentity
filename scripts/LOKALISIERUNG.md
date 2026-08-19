# Lokalisierte Lockups — Untersuchung

**Status: zurückgestellt am 2026-08-19.** Kein Code geändert, keine Schriften gebündelt.
Dieses Dokument hält Messwerte, Blocker und die Umsetzungsskizze fest, damit die Frage
später nicht von vorn beginnt.

Anlass war die Frage, ob der Generator neben lateinischen auch lokalisierte Lockups
erzeugen kann. Beispiele: georgisch `შპს ბაუერ გრუფი`, thailändisch `บริษัท บาวเออร์ กรุ๊ป`.

---

## Ergebnis in einem Satz

Die Wortmarke zu **ersetzen** ist verworfen — markenrechtlich und gestalterisch.
Eine lokalisierte **Zeile unter** der Wortmarke ist tragfähig: Georgisch wäre sofort
umsetzbar, Thai erst mit einer echten Shaping-Engine.

---

## Variante A — lokalisierter Text ersetzt „BAUER GROUP"

**Verworfen.**

- **Markenrecht.** Der Generator kopiert Bildmarke und Wortmarke byteweise aus den
  Mastern und verifiziert das mit `assertArtworkIntact()`. Eine gesetzte Ersatzfassung
  wäre weder die eingetragene Marke noch eine gestaltete Alternative.
- **Gestaltung.** Die Wortmarke ist zweigewichtig — „BAUER" schwer, „GROUP" leicht.
  Dieser Rhythmus ist das Erkennungsmerkmal. Mit Noto Sans in 800/400 nachgebaut
  verschwindet der Kontrast fast vollständig, weil eine Textschrift ihre Gewichte
  anders staffelt als eine gezeichnete Wortmarke.
- **Charakter.** Die Bildmarke ist hart konstruiert und geometrisch; Noto Sans
  Georgian/Thai sind neutral-humanistisch. Nebeneinander liest sich das Ergebnis als
  Text neben einem Logo, nicht als Wortmarke.

Zwei Mockup-Durchgänge wurden gebaut: erst nach lateinischer Versalhöhe skaliert und auf
der Grundlinie gesetzt, dann nach optischer Tintenmasse skaliert und auf die Mitte des
„B" (CY = 29,1172) zentriert. Der zweite Durchgang sitzt sauber, trägt aber trotzdem nicht.

**Wenn es doch gebraucht wird:** ein Schriftgestalter zeichnet ein lokales Logotype, das
die DNA der Wortmarke überträgt. Das Ergebnis wird ein Master-SVG wie das lateinische,
der Generator kopiert es wieder byteweise. So lösen internationale Marken Thai und
Arabisch. Kein Font im Build, keine Shaping-Probleme, und das Ergebnis ist schützbar.

---

## Variante B — lokalisierte Zeile unter der Wortmarke

**Tragfähig.** Nutzt unverändert die Division-Geometrie: gleiche Bounding Box, gleiche
Ausrichtung auf das „B", Wortmarken-Versatz −8,481. Nur die zweite Zeile ist neu.

### Empfehlungen aus den Mockups

| Entscheidung | Empfehlung | Begründung |
|---|---|---|
| Farbe | Wortmarken-Tinte `#231F20`, **nicht** Orange | Orange markiert im System einen Geschäftsbereich. In Orange liest sich die lokalisierte Zeile als Division. Tinte ergibt zudem 16,30:1 und braucht keine Logotype-Ausnahme |
| Größe | `capRatio` je Schriftsystem: Georgisch ≈ 0,34, Thai ≈ 0,31–0,33 | Der Wert 0,45 X ist auf lateinische Versalhöhe geeicht |
| Rechtsform | weglassen — nur `ბაუერ გრუფი` / `บาวเออร์ กรุ๊ป` | `შპს` = GmbH, `บริษัท` = Company. Das Regelwerk verbietet Rechtsformen im Lockup |
| Laufweite | 0,08 em für Georgisch, **0** für Thai | Tracking nach Marken ohne Vorbreite reißt Löcher in den Thai-Satz |

---

## Messwerte

### Schriftabdeckung

Inter SemiBold deckt **keines** der beiden Schriftsysteme ab. Der Generator bricht
sauber ab (Zeichen-Prüfung in `makeTypesetter`) — kein stiller Murks.

| String | Zeichen | ohne Glyphe in Inter |
|---|---|---|
| `AEROSPACE` | 9 | 0 |
| `შპს ბაუერ გრუფი` | 13 | 13 |
| `บริษัท บาวเออร์ กรุ๊ป` | 19 | 19 |

### Optische Größe der Zusatzzeile

Gemessene Tintenhöhe bei unverändertem `divisionCapRatio: 0.45`, in Logo-Einheiten
(Gesamthöhe 59,72):

| Zeile | Tintenhöhe | gegenüber Latein |
|---|---|---|
| `AEROSPACE` | 12,39 | Referenz |
| `ბაუერ გრუფი` | 17,27 | **+39 %** |
| `บาวเออร์ กรุ๊ป` | 18,71 | **+51 %** |

Ursache: 0,45 X meint die lateinische Versalhöhe. Georgisch bringt Ober- und
Unterlängen mit, Thai zusätzlich Marken oberhalb und unterhalb. Angeglichen wirken
0,34 (Georgisch) und 0,31 (Thai).

### Zeilenbreite (Maximum ist die Wortmarke, 200,559 Einheiten)

| Zeile | Breite | Auslastung |
|---|---|---|
| `ბაუერ გრუფი` | 131,69 | 66 % |
| `შპს ბაუერ გრუფი` | 172,95 | 86 % |
| `บาวเออร์ กรุ๊ป` | 109,52 | 55 % |
| `บริษัท บาวเออร์ กรุ๊ป` | 164,57 | 82 % |

### Thai: kombinierende Marken

5 der 19 Zeichen in `บริษัท บาวเออร์ กรุ๊ป` haben **advanceWidth 0**: `ิ ั ์ ุ ๊`.
Georgisch hat keine solchen Zeichen.

---

## Technische Blocker

1. **Thai-Shaping.** Der Generator setzt zeichenweise mit einem Pen-Walk und kann keine
   Marken positionieren. Einfache Fälle überleben, weil Noto Sans Thai die Marken über
   negative Vorbreiten platziert — `บริษัท บาวเออร์ กรุ๊ป` sieht deshalb passabel aus.
   **Gestapelte Marken brechen**: bei `กิ่ง เนื้อ ที่ ผู้ ปี๊บ` — Alltagsthai — landen
   Tonzeichen auf dem Vokal statt darüber. Die Gegenprobe im Browser (HarfBuzz) zeigt
   den Unterschied deutlich. Lösung: `harfbuzzjs`, das zugleich Arabisch, Hebräisch und
   Devanagari mit abdeckt.

2. **opentype.js verliert Zustand zwischen zwei `parse()`-Aufrufen.** Wird nach der
   georgischen Schrift die thailändische geladen, meldet sie 182 statt 130 Glyphen und
   findet kein einziges Thai-Zeichen mehr. `delete require.cache[...]` und erneutes
   `require` helfen **nicht**. Konsequenz: pro Schrift ein eigener Generator-Lauf
   (Prozess-Isolation) — oder Wechsel auf `fontkit`. Der heutige Generator lädt nur eine
   Schrift und ist deshalb nie darauf gestoßen.

3. **Latin-Sonde.** `makeTypesetter` misst den Overshoot mit `outline('OQ')`. Schriften
   ohne lateinische Glyphen — etwa der Georgisch-Subset von Fontsource — lassen den
   Generator dort abbrechen. Die Sonde muss pro Schriftsystem konfigurierbar werden.

4. **`case: "upper"` verändert Georgisch.** `toUpperCase()` bildet Mkhedruli auf
   **Mtavruli** ab (Unicode 11): `შპს` wird zu `ᲨᲞᲡ`. Das ist die korrekte Versalform,
   aber eine Gestaltungsentscheidung, keine Automatik. Noto Sans Georgian enthält
   Mtavruli vollständig. Thai kennt keine Groß- und Kleinschreibung — `toUpperCase()`
   ist dort wirkungslos. Das vorhandene Feld `label` umgeht die Umwandlung bereits.

5. **Schriftformate.** Fontsource liefert ausschließlich `woff`/`woff2`. opentype.js
   parst **woff**, aber kein woff2. Der Umweg über `npm pack` und Auspacken der
   `.woff`-Datei funktioniert; für ein Bündel im Repo wäre die unsubsettete TTF von
   notofonts.org sauberer — die enthält auch Latein und löst Blocker 3 nebenbei.

6. **Ausgabeverzeichnis.** Der Generator leert `docs/public/brand/lockups/` bei **jedem**
   Lauf. Wer mehrere Läufe hintereinander macht, muss Zwischenergebnisse sichern, sonst
   überschreibt der zweite Lauf den ersten.

---

## Regelkonflikt

Beide Ausgangsbeispiele enthalten die Rechtsform: `შპს` (GmbH) und `บริษัท` (Company).
Die Lockup-Regeln verbieten das ausdrücklich („keine Rechtsform, kein Standort im
Lockup", siehe `docs/de/logo/lockup.md`). Entweder wird die Zeile auf den Markennamen
gekürzt, oder die Regel bekommt eine begründete Ausnahme für Märkte, in denen die
Rechtsform zur Firmierung gehört. Das ist eine Marken-, keine Technikentscheidung.

---

## Umsetzungsskizze

Falls wieder aufgenommen:

1. **Eigene Familie** `locales` in `lockups.json`, parallel zu `divisions` und
   `taglines` — die Zeile ist kein Geschäftsbereich und darf nicht in dessen Galerie
   auftauchen. Felder je Eintrag: `slug`, `label`, `font`, `capRatio`, `trackingEm`.
2. **Schriften bündeln** wie Inter: OFL-Datei plus Lizenztext unter `scripts/fonts/`,
   Herkunft und Version in `meta.font` dokumentiert.
3. **Ein Generator-Lauf pro Schrift** wegen Blocker 2, Ergebnisse zwischen den Läufen
   sichern wegen Blocker 6.
4. **Sonde parametrisieren** (Blocker 3) und `case` pro Eintrag steuerbar machen.
5. **Thai nur mit `harfbuzzjs`** — oder bis dahin jede Zeile einzeln visuell abnehmen.
6. **Dokumentation** in `docs/de/logo/lockup.md` und der englischen Entsprechung: eigener
   Abschnitt, Farbregel (Tinte statt Orange) und die Abgrenzung zur Zusatzbezeichnung.

---

## Reproduktion

Alle Messungen liefen über temporäre Kopien; das Repository blieb unverändert.

```bash
# Schriften beschaffen (Fontsource liefert nur woff/woff2)
npm pack @fontsource/noto-sans-georgian
tar -xzf fontsource-noto-sans-georgian-5.3.0.tgz --strip-components=2 \
    package/files/noto-sans-georgian-georgian-600-normal.woff

# Generator mit fremder Schrift: Sonde muss überschreibbar sein, dafür in
# makeTypesetter temporär   const o = outline(process.env.BG_PROBE || 'OQ').bbox
BG_PROBE='ოქ' node scripts/generate-lockups.mjs --only=<slug>
```

Der Gegentest für Thai-Shaping bestand darin, dieselbe Zeichenfolge einmal durch den
Generator und einmal im Browser mit derselben Schrift zu setzen und beide Ergebnisse
übereinanderzulegen.

---

## Offene Entscheidungen

- Welche Sprachen werden tatsächlich gebraucht?
- Thai mit `harfbuzzjs` — oder vorerst weglassen?
- Rechtsform: Zeile kürzen oder Ausnahme dokumentieren?
- Farbe endgültig: Wortmarken-Tinte (Empfehlung) oder Orange?
