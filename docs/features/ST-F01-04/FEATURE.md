---
id: ST-F01-04
title: "JWT session management — auto-refresh + idle timeout warning"
epic: EP-F01
owner_role: FE
status: scaffolded
sprint: 1
size: M
---

## Purpose

Transparent token refresh: `ApiClient.ts` intercepts 401 responses, calls `refreshSession()`, retries the original request. Idle timeout: a background timer fires a warning modal at 14 min; auto-logout at 15 min. On any user interaction the timer resets.

## Acceptance Criteria

- Given access token is within 2 min of expiry, When any API call is made, Then refreshSession() is called transparently before the request
- Given user is idle for 14 min, When timer fires, Then IdleTimeoutModal appears with 'Stay logged in' / 'Log out'
- Given user ignores warning, When 15th min starts, Then tokens cleared and user redirected to /login
- Given 401 from refresh endpoint, When interceptor catches it, Then tokens cleared and redirect to /login

## API Contract

```yaml
paths:
  /auth/refresh:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                refresh_token: { type: string }
      responses:
        200:
          content:
            application/json:
              schema:
                properties:
                  access_token: { type: string }
        401:
          $ref: '#/components/schemas/Error'
```

## Modules

```
src/shared/ApiClient.ts              (new — Axios + interceptor)
src/shared/auth.ts                   (extend — refreshSession)
src/modules/auth/IdleTimeoutModal.tsx (new)
src/mocks/handlers/auth.ts           (extend — refresh handler)
```

## Dependencies

- SP-001
- ST-F01-01

## NFRs

- Refresh must be transparent — user sees no interruption for in-flight requests
- Idle timer must reset on: mousemove, keydown, click, scroll
