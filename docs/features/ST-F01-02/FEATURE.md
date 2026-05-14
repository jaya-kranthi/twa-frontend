---
id: ST-F01-02
title: "MFA challenge screen — TOTP verification"
epic: EP-F01
owner_role: FE
status: scaffolded
sprint: 1
size: M
---

## Purpose

After login succeeds with `mfa_required: true`, present the TOTP input screen. Submit the 6-digit code to `/auth/mfa/verify`. On success, establish the session (store tokens) and redirect to `/dashboard`.

## Acceptance Criteria

- Given MFA challenge is shown, When user enters valid 6-digit TOTP code, Then POST /auth/mfa/verify returns access_token, session is stored, user redirected to /dashboard
- Given invalid TOTP code, When submitted, Then 401 response shows inline error and form resets
- Given user has not entered 6 digits, When submit attempted, Then button stays disabled

## API Contract

```yaml
paths:
  /auth/mfa/verify:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                session: { type: string }
                totp_code: { type: string, pattern: '^[0-9]{6}$' }
      responses:
        200:
          content:
            application/json:
              schema:
                properties:
                  access_token: { type: string }
                  refresh_token: { type: string }
        401:
          $ref: '#/components/schemas/Error'
```

## Modules

```
src/modules/auth/MfaChallengeModal.tsx (extends shell from ST-F01-01)
src/modules/auth/TotpInput.tsx         (new)
src/mocks/handlers/auth.ts             (extend with mfa/verify handler)
```

## Dependencies

- ST-F01-01
