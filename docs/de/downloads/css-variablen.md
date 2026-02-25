# CSS Variablen

Vollständiges CSS Custom Properties Set für die Implementierung des BAUER GROUP Designsystems.

## Komplettes Token Set

```css
:root {
  /* ─── Primary: Orange ─── */
  --orange-50: #FFF7ED;
  --orange-100: #FFEDD5;
  --orange-200: #FED7AA;
  --orange-300: #FDBA74;
  --orange-400: #FB923C;
  --orange-500: #FF8500;  /* Brand Primary */
  --orange-600: #EA6D00;
  --orange-700: #C2570A;  /* Text AA */
  --orange-800: #9A4509;  /* Text AAA */
  --orange-900: #7C3A0A;

  /* ─── Neutrals: Grau ─── */
  --gray-50: #FAFAFA;
  --gray-100: #F4F4F5;
  --gray-200: #E4E4E7;
  --gray-300: #D4D4D8;
  --gray-400: #A1A1AA;
  --gray-500: #71717A;
  --gray-600: #52525B;   /* Body Text AAA */
  --gray-700: #3F3F46;
  --gray-800: #27272A;
  --gray-900: #18181B;   /* Headlines */

  /* ─── Semantisch ─── */
  --success-100: #DCFCE7;  --success-500: #22C55E;  --success-700: #15803D;
  --warning-100: #FEF9C3;  --warning-500: #EAB308;  --warning-700: #A16207;
  --error-100: #FEE2E2;    --error-500: #EF4444;    --error-700: #B91C1C;
  --info-100: #DBEAFE;     --info-500: #3B82F6;     --info-700: #1D4ED8;

  /* ─── Akzent ─── */
  --accent-teal: #0D9488;
  --accent-purple: #7C3AED;
  --accent-pink: #DB2777;
  --accent-indigo: #4F46E5;

  /* ─── Semantische Aliase ─── */
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-600);
  --text-muted: var(--gray-500);
  --text-disabled: var(--gray-400);

  --bg-primary: #FFFFFF;
  --bg-subtle: var(--gray-50);
  --bg-muted: var(--gray-100);

  --border: var(--gray-200);
  --border-strong: var(--gray-300);

  /* ─── Typography ─── */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code",
    "Segoe UI Mono", Consolas, monospace;
}
```

## Verwendung

```css
body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--bg-primary);
}

h1, h2, h3 {
  color: var(--gray-900);
}

a {
  color: var(--orange-700);  /* AA-konform */
}

.btn-primary {
  background: var(--orange-500);
  color: white;
}
```
