# AGENTS.md — twa-marketplace-fe

> Guidance for AI coding agents working in this repo.

## Verification gate

Every change **must** pass all four checks before being considered done:

```bash
npm run typecheck   # zero TypeScript errors
npm run lint        # zero ESLint errors
npm run test        # all Vitest tests green
npm run build       # production build succeeds
```

Run these in order. Fix failures before proceeding.

---

## File placement

| What | Where |
|---|---|
| Reusable UI primitive (Button, Badge, Card …) | `src/components/` |
| Feature logic + hooks + sub-components | `src/modules/<domain>/` |
| Route page (thin shell) | `src/pages/<Name>Page.tsx` |
| Axios client, auth, env, logger | `src/shared/` |
| Zustand store | `src/store/<name>.store.ts` |
| Global CSS / tokens | `src/styles/` |
| TypeScript interfaces / enums | `src/types/` |
| MSW request handlers | `src/mocks/handlers/` |
| Vitest test file | `tests/` (mirrors `src/` path) |

---

## Coding conventions

- Named exports only from `src/components/` and `src/modules/` (default exports only for `src/pages/`).
- No `any` — use `unknown` + type guards at API boundaries.
- No direct `localStorage` outside `store/auth.store.ts` and `shared/auth.ts`.
- All server data fetching through TanStack Query hooks — never `fetch`/`axios` directly in a component.
- Formik + Yup for every form. Schema lives next to the form component.
- shadcn/ui primitives preferred over bespoke components — check `src/components/ui/` before creating new.

---

## MSW mocking

- `VITE_USE_MOCK=true` activates the browser MSW worker in dev.
- Tests always use the node MSW server (`tests/setup.ts` wires it automatically).
- Add new handlers in `src/mocks/handlers/index.ts`.
- Never hard-code test data in components — use MSW handlers.

---

## Auth notes

- Do **not** install or import `aws-amplify`. Auth is custom Cognito only.
- MFA challenge (`SOFTWARE_TOKEN_MFA`) must be handled in the auth module, not in Zustand store.
- Token refresh: use `shared/auth.ts → refreshSession()` — store updated tokens via `useAuthStore.setTokens()`.

---

## What NOT to do

- Do not create files in `dist/` or `coverage/` — these are build artefacts.
- Do not edit `package-lock.json` by hand.
- Do not add `eslint-disable` comments without a comment explaining why.
- Do not commit `.env.local` or `.env`.
