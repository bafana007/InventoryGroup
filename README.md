# Inventory — React migration

This project recreates the original Inventory web app using the same architectural style as the supplied StayEase React app: `src/pages`, `src/components`, `src/context`, `src/hooks`, `src/services`, `src/utils`, and `src/styles`.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

Demo accounts:
- admin / admin123
- employee / employee123
- user / user123

The app preserves the original black-and-white UI and local-first data model. Inventory data is stored in browser localStorage.

## Production

```bash
npm run build
npm run preview
```

For Render Static Site:
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Rewrite: `/*` → `/index.html`
