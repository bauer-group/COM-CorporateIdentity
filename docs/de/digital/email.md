# E-Mail-Signatur

::: tip Signaturen erstellen — automatisch im Portal
Persönliche, markenkonforme Signaturen werden **automatisch** über das Mitarbeiter-Portal erzeugt:
**[mail-signature.app.bauer-group.com](https://mail-signature.app.bauer-group.com/)**

Diese Seite dokumentiert den verbindlichen **Aufbau und Standard** der Signatur (Referenz) — sie muss **nicht** von Hand nachgebaut werden.
:::

## Aufbau

Die E-Mail-Signatur folgt einem einheitlichen, tabellenbasierten HTML-Layout mit folgenden Bereichen:

```text
Mit freundlichen Grüßen / Best regards
Vorname Nachname

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← 3 px Orange (#FF8500)
┌──────┐
│ Foto │  Vorname DE | Vorname EN
│50×50 │  Position DE | Position EN
└──────┘
  📞 +49 9971 20098-199
  📱 +49 170 1234567
  📠 +49 9971 20098-4199
  ✉️  vorname.nachname@bauer-group.com
  💬 Teams Chat

  📆 Terminbuchung / Appointment booking

  🔗 Social-Media-Icons (20×20 px)
──────────────────────────────  ← 1 px Trennlinie
  BAUER GROUP IT GmbH
  Janahof 30 · 93413 Cham · Deutschland
  Telefon · Telefax · E-Mail · Web
  Handelsregister · Geschäftsführer · USt-IdNr
──────────────────────────────  ← 1 px Trennlinie
  Vertraulichkeitshinweis (DE + EN)
  Sicherheitswarnung (DE + EN)
  🔒 Datenschutz-Link
```

## Bereiche im Detail

### 1. Grußformel

Oberhalb der Signatur-Tabelle steht die Grußformel als normaler Absatz. Bei mehrsprachigen Signaturen werden die Sprachen mit ` / ` getrennt.

| Sprache | Grußformel |
|---------|-----------|
| DE | Mit freundlichen Grüßen |
| EN | Best regards |

Der Name des Absenders folgt darunter mit etwas Abstand.

### 2. Orange Akzentlinie

Die Signatur-Tabelle beginnt mit einer **3 px starken Linie** in BAUER Orange (`#FF8500`). Diese Linie ist das primäre Branding-Element und darf nicht verändert werden.

### 3. Mitarbeiter-Bereich

| Element | Spezifikation |
|---------|--------------|
| **Foto** | 50 × 50 px, rund (`border-radius: 50%`), `object-fit: cover` |
| **Name** | 15 px, fett, Farbe `#18181B` |
| **Position** | 12 px, Farbe `#52525B` |

Bei mehrsprachigen Signaturen werden Name und Position mit `|` getrennt dargestellt:
> **Maxi DE | Max EN**
> Esel | Donkey

### 4. Kontaktdaten

Kontaktdaten werden unterhalb des Fotos mit Emoji-Icons aufgelistet:

| Icon | Kanal | Verhalten |
|------|-------|-----------|
| 📞 | Telefon | `tel:`-Link |
| 📱 | Mobil | `tel:`-Link |
| 📠 | Fax | Nur Text |
| ✉️ | E-Mail | `mailto:`-Link, Farbe `#C2570A` |
| 💬 | Teams Chat | Externer Link, Farbe `#C2570A` |

- Schriftgröße: 12 px, Farbe `#3F3F46`
- Icon-Spalte: 18 px breit, Farbe `#A1A1AA`
- Alle Kanäle sind optional und pro Unternehmen konfigurierbar

### 5. Terminbuchung

Optional kann ein Buchungslink angezeigt werden:

> 📆 **Terminbuchung** / Appointment booking

- Farbe: `#C2570A`, fett für die Primärsprache
- Unterstützt Microsoft Bookings und HubSpot

### 6. Social-Media-Icons

Social-Media-Profile werden als **20 × 20 px Icons** in BAUER Orange dargestellt. Alle Icons sind verlinkt und öffnen im neuen Tab.

**Unterstützte Netzwerke:**

| Professionell | Social | Messaging | Bewertungen |
|--------------|--------|-----------|-------------|
| LinkedIn | Facebook | WhatsApp | Google Reviews |
| Xing | Instagram | Telegram | Glassdoor |
| GitHub | YouTube | Viber | Trustpilot |
| Medium | X (Twitter) | LINE | Clutch |
| | TikTok | Zalo | kununu |
| | Threads | WeChat | |
| | Weibo | KakaoTalk | |
| | VK | | |

- Icons sind pro Mitarbeiter konfigurierbar
- Reihenfolge ist festgelegt (professionell → social → messaging → bewertungen)

### 7. Unternehmensblock

Unterhalb einer dünnen Trennlinie (`1 px solid #E4E4E7`) folgt der Unternehmensblock:

| Element | Format |
|---------|--------|
| **Firmenname** | 11 px, fett, Farbe `#3F3F46` |
| **Adresse** | Straße · PLZ Ort · Land |
| **Kontakt** | Telefon · Telefax · E-Mail · Web |
| **Web-Link** | Farbe `#C2570A` |

Die Angaben sind pro Unternehmen und Sprache konfigurierbar.

### 8. Rechtliche Angaben

Unterhalb der Kontaktdaten folgen die gesetzlich vorgeschriebenen Angaben. Diese variieren je nach Jurisdiktion:

| Land | Pflichtangaben |
|------|---------------|
| **Deutschland** (HGB §37a) | Handelsregister, Geschäftsführer, USt-IdNr |
| **Thailand** (Revenue Code) | Tax ID, Authorized Director |
| **Singapur** (Companies Act §144) | UEN |
| **USA** | Keine gesetzliche Pflicht |

- Schriftgröße: 10 px, Farbe `#A1A1AA`

### 9. Disclaimer

Der Disclaimer enthält vier Abschnitte in zwei Sprachen:

1. **Vertraulichkeitshinweis** (DE)
2. **Sicherheitswarnung** (DE)
3. **Confidentiality note** (EN)
4. **Safety warning** (EN)

- Schriftgröße: 9 px, Farbe `#A1A1AA`
- Überschriften fett
- Disclaimer-Texte sind pro Unternehmen konfigurierbar

### 10. Datenschutz-Link

Am Ende der Signatur steht ein Link zur Datenschutzerklärung:

> 🔒 Unsere Informationen zum Datenschutz / Privacy Policy

- Schriftgröße: 9 px, unterstrichen

## Technische Spezifikationen

| Eigenschaft | Wert |
|-------------|------|
| **Max. Breite** | 600 px |
| **Schriftart** | `'Segoe UI', Arial, sans-serif` |
| **Layout** | HTML-Tabelle (`cellpadding="0" cellspacing="0"`) |
| **CSS** | Ausschließlich Inline-Styles |
| **Bilder** | Base64-eingebettet oder externe URL (S3) |
| **Links** | `tel:`, `mailto:`, `https://` |

## Regeln

- Die **Orange Akzentlinie** (`#FF8500`) ist Pflicht und darf nicht verändert werden
- **Keine externen Stylesheets** — nur Inline-CSS
- **Keine JavaScript-Handler** in der Signatur
- Alle **Links müssen HTTPS** verwenden (außer `tel:` und `mailto:`)
- **Mitarbeiterfoto** ist optional, aber empfohlen
- **Social-Media-Icons** werden nur angezeigt, wenn ein Profil hinterlegt ist
- Die Signatur muss in **Outlook, Gmail, Apple Mail und Thunderbird** korrekt dargestellt werden

## Mehrsprachigkeit

Die Signatur unterstützt mehrere Sprachzonen, die unabhängig voneinander konfiguriert werden:

| Zone | Inhalt | Beispielsprachen |
|------|--------|-----------------|
| **Mitarbeiter** | Grußformel, Name, Position | DE, EN |
| **Unternehmen** | Adresse, Kontakt, Rechtsangaben | DE, EN, TH, KA |
| **Disclaimer** | Vertraulichkeitshinweis, Sicherheitswarnung | DE, EN, AR (RTL) |

Für Arabisch wird automatisch die Textrichtung `direction: rtl` gesetzt.

## Farbpalette

| Verwendung | Farbe | Hex |
|------------|-------|-----|
| Akzentlinie | <span style="color:var(--bg-orange-500)">■</span> BAUER Orange | `#FF8500` |
| Links (E-Mail, Web, Booking) | <span style="color:var(--bg-orange-700)">■</span> Dunkel-Orange | `#C2570A` |
| Name | <span style="color:#18181B">■</span> Fast-Schwarz | `#18181B` |
| Position, Kontaktdaten | <span style="color:#3F3F46">■</span> Dunkelgrau | `#3F3F46` |
| Unternehmensblock | <span style="color:#71717A">■</span> Mittelgrau | `#71717A` |
| Icons, Trennzeichen | <span style="color:#A1A1AA">■</span> Hellgrau | `#A1A1AA` |
| Trennlinien | <span style="color:#E4E4E7">■</span> Sehr hell | `#E4E4E7` |
| Sprachtrennzeichen (`\|`) | <span style="color:#D4D4D8">■</span> Silber | `#D4D4D8` |
