# twa-frontend — TWA Weather Data Marketplace

Frontend SPA for the TWA Weather Data Marketplace — B2B platform for discovering, licencing, and accessing weather datasets.

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · shadcn/ui · TanStack Query · Zustand · Formik/Yup · Cognito auth · MSW · Vitest

**Deploy:** GitHub Pages → `https://jaya-kranthi.github.io/twa-frontend/`

---

## Quick start

```bash
cp .env.example .env.local   # fill in Cognito + API values
npm install
npm run dev                  # http://localhost:5173
```

Set `VITE_USE_MOCK=true` in `.env.local` to use MSW instead of a real backend.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build → `dist/` |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (CI mode) |
| `npm run test:watch` | Vitest (watch) |
| `npm run test:coverage` | Coverage report |

## Project structure

```
src/
  components/   shared UI primitives
  modules/      feature modules (auth, catalog, dashboard …)
  pages/        route-level pages (thin shells)
  shared/       ApiClient, auth, env, logger
  store/        Zustand stores
  styles/       globals.css (Tailwind entry)
  types/        shared TypeScript types
  mocks/        MSW handlers + browser/server setup
tests/          Vitest test files
```

See [CLAUDE.md](CLAUDE.md) for full conventions and [AGENTS.md](AGENTS.md) for AI agent guidance.
