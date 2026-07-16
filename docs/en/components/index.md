# UI Components

Reusable interface elements in the BAUER GROUP design system for consistent digital products.

## Design Principles

| Principle | Description |
|-----------|-------------|
| **Consistency** | Identical elements look the same everywhere |
| **Accessibility** | All components are WCAG 2.1 AA compliant |
| **Responsiveness** | Components adapt to every screen size |
| **Reusability** | Defined once, applicable everywhere |

## Overview

- **[Buttons](./buttons)** — primary, secondary and outline variants in three sizes
- **[Badges & Status](./badges)** — semantic status indicators with color coding
- **[Forms](./forms)** — input fields, labels and validation

## CSS Foundation

All components are based on the BAUER GROUP CSS custom properties:

```css
:root {
  --bg-orange-500: #FF8500;  /* Primary Actions */
  --bg-neutral-100: #F4F4F5;    /* Secondary Actions */
  --bg-neutral-900: #18181B;    /* Text */
  --bg-neutral-200: #E4E4E7;    /* Borders */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```
