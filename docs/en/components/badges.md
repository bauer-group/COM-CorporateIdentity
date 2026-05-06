# Badges & Status

## Status Badges

Badges communicate the status of an element through color coding.

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:24px 0;">
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DCFCE7;color:#15803D;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Successful</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEF9C3;color:#A16207;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Warning</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#FEE2E2;color:#B91C1C;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Error</span>
  <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;font-size:0.8125rem;font-weight:600;background:#DBEAFE;color:#1D4ED8;"><span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span> Information</span>
</div>

| Badge | Preview | Background | Text color | Use case |
|-------|---------|------------|------------|----------|
| **Success** | <span style="background:#DCFCE7;color:#15803D;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Active</span> | #DCFCE7 | #15803D | Successful, confirmed |
| **Warning** | <span style="background:#FEF9C3;color:#A16207;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Pending</span> | #FEF9C3 | #A16207 | Warning, in progress |
| **Error** | <span style="background:#FEE2E2;color:#B91C1C;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Critical</span> | #FEE2E2 | #B91C1C | Error, rejected |
| **Info** | <span style="background:#DBEAFE;color:#1D4ED8;padding:2px 10px;border-radius:8px;font-size:0.85em;font-weight:600">Default</span> | #DBEAFE | #1D4ED8 | Information, neutral |

## CSS

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.badge-success { background: #DCFCE7; color: #15803D; }
.badge-warning { background: #FEF9C3; color: #A16207; }
.badge-error   { background: #FEE2E2; color: #B91C1C; }
.badge-info    { background: #DBEAFE; color: #1D4ED8; }
```

## With Dot Indicator

```css
.badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
```

## Usage Rules

1. **One badge per element** — no multiple statuses at the same time
2. **Short labels** — maximum 2 words
3. **Consistent usage** — same meaning = same color
4. **Not as buttons** — badges are informational, not interactive
