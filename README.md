# Digital_Market_35

Landing de la agencia de IA Digital_Market_35 — React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

- `npm run build` — build de producción.
- `npm run lint` — oxlint sobre `src/`.

## Estructura

- `src/sections/` — secciones de la landing (`/`).
- `src/pages/` — páginas ruteadas (`/`, `/noticias`, `/noticias/:slug`).
- `content/news/` — artículos de la sección Noticias, un `.md` por artículo (frontmatter + cuerpo).
- `scripts/generate-news.mjs` — genera un artículo nuevo a partir de feeds RSS reales de IA/tech (ver abajo).

## Noticias — generación automática semanal

Cada lunes, un workflow de GitHub Actions (`.github/workflows/weekly-news.yml`) corre `scripts/generate-news.mjs`, que:

1. Busca titulares reales en feeds RSS de IA/tech (TechCrunch, The Verge, VentureBeat, MIT Technology Review, Ars Technica).
2. Descarta los que ya están cubiertos en `content/news/`.
3. Le pide a Claude que escriba un artículo corto en español a partir del fragmento real (nunca le pide la URL — eso lo agrega el script desde el feed).
4. Valida el resultado y, si todo está bien, commitea el nuevo `.md` directo a `main` (push automático, sin revisión humana — así se decidió para este proyecto).

Requiere el secret `ANTHROPIC_API_KEY` configurado en GitHub → Settings → Secrets and variables → Actions. Se puede correr a mano desde la pestaña Actions del repo ("Run workflow"), o localmente con:

```bash
ANTHROPIC_API_KEY=... npm run generate:news
```

## Deploy

Pensado para desplegarse en Vercel conectado a este repo (auto-deploy en cada push a `main`). `vercel.json` incluye el rewrite necesario para que las rutas de React Router no den 404 al refrescar.
