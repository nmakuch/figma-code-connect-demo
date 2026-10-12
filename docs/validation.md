# Starter validation

Validated locally on October 10, 2026, using Node 24.19.0 and Code Connect CLI 2.0.1.

- TypeScript checking and the Vite production build pass.
- The Code Connect CLI parses both maintained template files into connection documents.
- Local execution of the compiled templates passes all eight Button variant combinations and all four Link variant/Boolean combinations. Generated JSX preserves labels containing quotes, angle brackets, braces, ampersands, and newlines.
- Browser checks cover prop changes, labels, native disabled behavior, keyboard activation and visible focus, new-tab anchor attributes, and responsive layout at 1440px, 768px, and 390px widths.
- Desktop and mobile rendering were inspected. No runtime errors were observed during the browser checks.

The local template fixture runner supplies sample property values; it does not run inside Figma. The template URLs remain placeholders. Publication to a real Figma library and inspection of its mapped instances require your library URLs, eligible Figma access, and access token. Complete the observation table in experiment-plan.md before reporting end-to-end results.
