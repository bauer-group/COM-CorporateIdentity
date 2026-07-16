# Email Signature

::: tip Create signatures — automatically in the portal
Personal, on-brand signatures are generated **automatically** via the employee portal:
**[mail-signature.app.bauer-group.com](https://mail-signature.app.bauer-group.com/)**

This page documents the binding **structure and standard** of the signature (reference) — it does **not** need to be rebuilt by hand.
:::

## Structure

The email signature follows a consistent, table-based HTML layout with the following sections:

```text
Mit freundlichen Grüßen / Best regards
First Last

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← 3 px Orange (#FF8500)
┌──────┐
│ Photo│  First DE | First EN
│50×50 │  Position DE | Position EN
└──────┘
  📞 +49 9971 20098-199
  📱 +49 170 1234567
  📠 +49 9971 20098-4199
  ✉️  first.last@bauer-group.com
  💬 Teams Chat

  📆 Terminbuchung / Appointment booking

  🔗 Social media icons (20×20 px)
──────────────────────────────  ← 1 px separator
  BAUER GROUP IT GmbH
  Janahof 30 · 93413 Cham · Germany
  Phone · Fax · Email · Web
  Commercial register · Managing Director · VAT ID
──────────────────────────────  ← 1 px separator
  Confidentiality note (DE + EN)
  Safety warning (DE + EN)
  🔒 Privacy policy link
```

## Sections in Detail

### 1. Greeting Formula

Above the signature table, the greeting formula appears as a regular paragraph. For multilingual signatures, languages are separated with ` / `.

| Language | Greeting |
|----------|---------|
| DE | Mit freundlichen Grüßen |
| EN | Best regards |

The sender's name follows below with some spacing.

### 2. Orange Accent Line

The signature table starts with a **3 px solid line** in BAUER Orange (`#FF8500`). This line is the primary branding element and must not be altered.

### 3. Employee Section

| Element | Specification |
|---------|--------------|
| **Photo** | 50 × 50 px, round (`border-radius: 50%`), `object-fit: cover` |
| **Name** | 15 px, bold, color `#18181B` |
| **Position** | 12 px, color `#52525B` |

For multilingual signatures, name and position are displayed separated by `|`:
> **Maxi DE | Max EN**
> Esel | Donkey

### 4. Contact Details

Contact details are listed below the photo using emoji icons:

| Icon | Channel | Behavior |
|------|---------|----------|
| 📞 | Phone | `tel:` link |
| 📱 | Mobile | `tel:` link |
| 📠 | Fax | Text only |
| ✉️ | Email | `mailto:` link, color `#C2570A` |
| 💬 | Teams Chat | External link, color `#C2570A` |

- Font size: 12 px, color `#3F3F46`
- Icon column: 18 px wide, color `#A1A1AA`
- All channels are optional and configurable per company

### 5. Appointment Booking

An optional booking link can be displayed:

> 📆 **Terminbuchung** / Appointment booking

- Color: `#C2570A`, bold for the primary language
- Supports Microsoft Bookings and HubSpot

### 6. Social Media Icons

Social media profiles are displayed as **20 × 20 px icons** in BAUER Orange. All icons are linked and open in a new tab.

**Supported Networks:**

| Professional | Social | Messaging | Reviews |
|-------------|--------|-----------|---------|
| LinkedIn | Facebook | WhatsApp | Google Reviews |
| Xing | Instagram | Telegram | Glassdoor |
| GitHub | YouTube | Viber | Trustpilot |
| Medium | X (Twitter) | LINE | Clutch |
| | TikTok | Zalo | kununu |
| | Threads | WeChat | |
| | Weibo | KakaoTalk | |
| | VK | | |

- Icons are configurable per employee
- Order is fixed (professional → social → messaging → reviews)

### 7. Company Block

Below a thin separator line (`1 px solid #E4E4E7`), the company block follows:

| Element | Format |
|---------|--------|
| **Company name** | 11 px, bold, color `#3F3F46` |
| **Address** | Street · ZIP City · Country |
| **Contact** | Phone · Fax · Email · Web |
| **Web link** | Color `#C2570A` |

Details are configurable per company and language.

### 8. Legal Information

Below the contact details, legally required information follows. These vary by jurisdiction:

| Country | Required Information |
|---------|---------------------|
| **Germany** (HGB §37a) | Commercial register, Managing Director, VAT ID |
| **Thailand** (Revenue Code) | Tax ID, Authorized Director |
| **Singapore** (Companies Act §144) | UEN |
| **USA** | No legal requirement |

- Font size: 10 px, color `#A1A1AA`

### 9. Disclaimer

The disclaimer contains four sections in two languages:

1. **Vertraulichkeitshinweis** (Confidentiality note, DE)
2. **Sicherheitswarnung** (Safety warning, DE)
3. **Confidentiality note** (EN)
4. **Safety warning** (EN)

- Font size: 9 px, color `#A1A1AA`
- Headings in bold
- Disclaimer texts are configurable per company

### 10. Privacy Policy Link

At the bottom of the signature, a link to the privacy policy is displayed:

> 🔒 Unsere Informationen zum Datenschutz / Privacy Policy

- Font size: 9 px, underlined

## Technical Specifications

| Property | Value |
|----------|-------|
| **Max width** | 600 px |
| **Font family** | `'Segoe UI', Arial, sans-serif` |
| **Layout** | HTML table (`cellpadding="0" cellspacing="0"`) |
| **CSS** | Inline styles only |
| **Images** | Base64-embedded or external URL (S3) |
| **Links** | `tel:`, `mailto:`, `https://` |

## Rules

- The **Orange accent line** (`#FF8500`) is mandatory and must not be altered
- **No external stylesheets** — inline CSS only
- **No JavaScript handlers** in the signature
- All **links must use HTTPS** (except `tel:` and `mailto:`)
- **Employee photo** is optional but recommended
- **Social media icons** are only shown when a profile is configured
- The signature must render correctly in **Outlook, Gmail, Apple Mail, and Thunderbird**

## Multilingual Support

The signature supports multiple language zones that are configured independently:

| Zone | Content | Example Languages |
|------|---------|------------------|
| **Employee** | Greeting, name, position | DE, EN |
| **Company** | Address, contact, legal info | DE, EN, TH, KA |
| **Disclaimer** | Confidentiality note, safety warning | DE, EN, AR (RTL) |

For Arabic, text direction `direction: rtl` is applied automatically.

## Color Palette

| Usage | Color | Hex |
|-------|-------|-----|
| Accent line | <span style="color:#FF8500">■</span> BAUER Orange | `#FF8500` |
| Links (email, web, booking) | <span style="color:#C2570A">■</span> Dark Orange | `#C2570A` |
| Name | <span style="color:#18181B">■</span> Near-Black | `#18181B` |
| Position, contact details | <span style="color:#3F3F46">■</span> Dark Gray | `#3F3F46` |
| Company block | <span style="color:#71717A">■</span> Medium Gray | `#71717A` |
| Icons, separators | <span style="color:#A1A1AA">■</span> Light Gray | `#A1A1AA` |
| Separator lines | <span style="color:#E4E4E7">■</span> Very Light | `#E4E4E7` |
| Language separator (`\|`) | <span style="color:#D4D4D8">■</span> Silver | `#D4D4D8` |
