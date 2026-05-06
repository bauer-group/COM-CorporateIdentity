# WCAG 2.1 Conformance

BAUER GROUP is committed to compliance with the **Web Content Accessibility Guidelines (WCAG) 2.1** at Level AA for all digital products.

## Color Contrast Rules

### Minimum Contrast for Text

| WCAG Level | Normal Text | Large Text (≥18px bold / ≥24px) |
|------------|-------------|----------------------------------|
| **AA** | 4.5:1 | 3.0:1 |
| **AAA** | 7.0:1 | 4.5:1 |

### Our Colors on White

| Color | Contrast | Normal Text | Large Text |
|-------|----------|-------------|------------|
| Orange 500 (#FF8500) | 3.1:1 | <span class="contrast-fail">FAIL</span> | <span class="contrast-pass">AA</span> |
| Orange 700 (#C2570A) | 4.6:1 | <span class="contrast-pass">AA</span> | <span class="contrast-pass">AA</span> |
| Orange 800 (#9A4509) | 6.4:1 | <span class="contrast-pass">AA+</span> | <span class="contrast-pass">AAA</span> |
| Gray 600 (#52525B) | 7.1:1 | <span class="contrast-pass">AAA</span> | <span class="contrast-pass">AAA</span> |
| Gray 900 (#18181B) | 18.4:1 | <span class="contrast-pass">AAA</span> | <span class="contrast-pass">AAA</span> |

::: warning Important Rule
**Orange 500 (#FF8500) MUST NOT be used for normal text.** It is permitted exclusively for decorative elements, large UI surfaces, and buttons starting at 24px.

For text, use: **Orange 700** (#C2570A) or darker.
:::

## Additional Requirements

- **Focus indicators**: All interactive elements must have a visible focus state
- **Keyboard navigation**: All functions must be reachable via keyboard
- **Alternative text**: All images and icons require descriptive alt attributes
- **Semantic HTML**: Correct use of headings, landmarks, and ARIA roles
