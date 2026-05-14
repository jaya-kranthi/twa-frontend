---
id: SP-001
title: "Spike: Cognito JWT auth flow in React (no Amplify)"
epic: EP-F01
owner_role: FE
status: scaffolded
sprint: 1
size: S
kind: spike
---

## Purpose

Validate the custom Cognito auth implementation pattern before writing production code. No Amplify — raw `@aws-sdk/client-cognito-identity-provider` or direct Cognito hosted UI token exchange. Decide on: token storage strategy, refresh flow hook, and `useAuth` API surface.

## Outcome Required

A documented decision (in this file, section "Decision") covering:
1. Which Cognito SDK call pattern to use (InitiateAuth or hosted UI PKCE)
2. Token storage: `localStorage` via `auth.store.ts` (Zustand persist)
3. Refresh flow: interceptor in `shared/ApiClient.ts` vs. React Query `onError` callback
4. `useAuth()` hook API: `{ user, isLoading, login, logout, refreshSession }`

## Modules

```
src/shared/auth.ts              (new) — refreshSession(), token helpers
src/store/auth.store.ts         (new) — Zustand auth slice with localStorage persist
src/shared/ApiClient.ts         (new) — Axios instance with Bearer header injection
```

## Dependencies

- none

## Skills to invoke

- `/minfy:build` → `minfy-build-tdd` after spike is resolved
