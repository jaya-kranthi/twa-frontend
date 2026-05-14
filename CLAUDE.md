# CLAUDE.md — twa-marketplace-fe

> Scaffolded by minfy-project-scaffolder · kind=frontend · 2026-05-14

## Project

**TWA Weather Data Marketplace** — B2B SaaS platform for discovering, licencing, and accessing weather datasets.
Repo: `jaya-kranthi/twa-marketplace-fe` · Deploy: GitHub Pages

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 8 SPA |
| Language | TypeScript 6 (strict) |
| Styles | Tailwind CSS 4 + shadcn/ui |
| Server state | TanStack Query v5 |
| UI state | Zustand v5 |
| Forms | Formik + Yup |
| Auth | Custom Cognito (direct user pool, no Amplify) |
| Tests | Vitest 2 + React Testing Library |
| Mocks | MSW 2 |

---

## Commands

```bash
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run test         # vitest run (CI mode)
npm run test:watch   # vitest (watch mode)
npm run test:coverage
```

---

## Project Structure

```
src/
  components/   # shared presentational components (no business logic)
  modules/      # feature modules — one dir per domain (auth, catalog, dashboard …)
  pages/        # route-level page components (thin; delegate to modules)
  shared/       # ApiClient, auth helpers, env, logger
  store/        # Zustand stores
  styles/       # globals.css (Tailwind entry point)
  types/        # shared TypeScript types
  mocks/        # MSW handlers + browser/server setup
tests/          # Vitest test files (mirrors src/ structure)
infra/          # thin override slice (env vars, CDN config)
```

---

## Auth

- Cognito User Pool — direct `InitiateAuth` calls (no Amplify).
- Tokens stored in `localStorage` (`access_token`, `refresh_token`, `id_token`).
- `ApiClient.ts` injects `Authorization: Bearer <access_token>` on every request.
- 401 response → clear tokens → redirect `/login`.
- TOTP MFA must be handled via `SOFTWARE_TOKEN_MFA` challenge in the auth flow.

## API

- Base URL from `VITE_API_URL` (default `http://localhost:3000/api/v1`).
- Set `VITE_USE_MOCK=true` to intercept all requests with MSW instead of hitting the real backend.
- Server-side pagination required for dataset catalog (hundreds of rows).
- Download jobs poll `GET /jobs/:id` until `status === 'completed'` — use `refetchInterval`.

---

## Rules (minfy: do-not-regenerate)

- **No default exports from modules/components** — named exports only (except page components).
- **No `any` types** — use `unknown` + type guards at boundaries.
- **No direct `localStorage` access outside `store/auth.store.ts` and `shared/auth.ts`**.
- **No API calls in components** — all fetching through TanStack Query hooks in `modules/`.
- Coverage thresholds start at 0; raised to ≥90% by `frontend-test-engine` after UI sign-off.
- Do not add Amplify — auth uses the custom Cognito integration only.

---

## Environment Variables

See `.env.example`. Copy to `.env.local` for local development.
