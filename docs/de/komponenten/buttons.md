# Buttons

## Varianten

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:#FF8500;color:white;cursor:pointer;">Primary</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:#F4F4F5;color:#18181B;cursor:pointer;">Secondary</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:transparent;color:#C2570A;border:2px solid #FF8500;cursor:pointer;">Outline</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:transparent;color:#52525B;cursor:pointer;">Ghost</span>
</div>

| Variante | Hintergrund | Text | Anwendung |
|----------|------------|------|-----------|
| **Primary** | Orange 500 (#FF8500) | Weiß | Hauptaktionen, CTAs |
| **Secondary** | Gray 100 (#F4F4F5) | Gray 900 (#18181B) | Nebenaktionen |
| **Outline** | Transparent | Orange 700 (#C2570A) | Tertiäre Aktionen |
| **Ghost** | Transparent | Gray 600 (#52525B) | Subtile Aktionen |

## Größen

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:8px;font-weight:600;font-size:13px;background:#FF8500;color:white;">Small</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:14px;background:#FF8500;color:white;">Default</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:16px 32px;border-radius:12px;font-weight:600;font-size:16px;background:#FF8500;color:white;">Large</span>
</div>

| Größe | Padding | Font-Size | Border-Radius |
|-------|---------|-----------|---------------|
| **Small** | 8px 16px | 13px | 8px |
| **Default** | 12px 24px | 14px | 10px |
| **Large** | 16px 32px | 16px | 12px |

## Disabled State

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:#FED7AA;color:white;cursor:not-allowed;opacity:0.7;">Primary Disabled</span>
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;font-weight:600;font-size:0.875rem;background:#E4E4E7;color:#A1A1AA;cursor:not-allowed;">Secondary Disabled</span>
</div>

## CSS

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-body);
}

.btn-primary {
  background: #FF8500;
  color: white;
}

.btn-primary:hover {
  background: #EA6D00;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(255, 133, 0, 0.3);
}

.btn-secondary {
  background: #F4F4F5;
  color: #18181B;
}

.btn-outline {
  background: transparent;
  color: #C2570A;
  border: 2px solid #FF8500;
}
```

## Hover & Active States

| State | Primary | Secondary | Outline |
|-------|---------|-----------|---------|
| **Default** | #FF8500 | #F4F4F5 | transparent |
| **Hover** | #EA6D00 + Shadow | #E4E4E7 | #FFF7ED |
| **Active** | #C2570A | #D4D4D8 | #FFEDD5 |
| **Disabled** | #FED7AA | #E4E4E7 | #E4E4E7 |

::: warning Barrierefreiheit
Alle Button-Texte müssen ein Kontrastverhältnis von mindestens **4.5:1** zum Hintergrund haben. Weiß auf Orange 500 erreicht **4.7:1** — knapp AA konform.
:::
