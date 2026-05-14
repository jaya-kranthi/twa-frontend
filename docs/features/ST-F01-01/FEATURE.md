---
id: ST-F01-01
title: "Login page — email + password + MFA prompt"
epic: EP-F01
owner_role: FE
status: scaffolded
sprint: 1
size: M
---

## Purpose

Implement the `/login` route with Cognito email+password authentication. On success store JWT in `auth.store.ts`. If the Cognito response includes `ChallengeName: SOFTWARE_TOKEN_MFA`, transition to the MFA challenge screen (ST-F01-02).

## Acceptance Criteria

- Given unauthenticated user visits /login, When they enter valid credentials and submit, Then Cognito JWT is stored in localStorage via auth.store.ts and they are redirected to /dashboard
- Given invalid credentials, When form is submitted, Then inline error is shown without exposing internal token details
- Given user with MFA enabled logs in, When password is accepted by Cognito, Then MFA challenge screen appears (ST-F01-02)
- Given form fields are empty, When submit is attempted, Then Yup validation fires before any API call

## API Contract

```yaml
paths:
  /auth/login:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                email: { type: string, format: email }
                password: { type: string }
      responses:
        200:
          content:
            application/json:
              schema:
                oneOf:
                  - properties:
                      access_token: { type: string }
                      refresh_token: { type: string }
                  - properties:
                      mfa_required: { type: boolean, enum: [true] }
                      session: { type: string }
        401:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
```

## Modules

```
src/pages/LoginPage.tsx              (new)
src/modules/auth/LoginForm.tsx       (new)
src/modules/auth/MfaChallengeModal.tsx (new — shell, implemented in ST-F01-02)
src/shared/auth.ts                   (new — from SP-001)
src/store/auth.store.ts              (new — from SP-001)
src/mocks/handlers/auth.ts           (new — from SP-002)
```

## Dependencies

- SP-001 (auth spike)
- SP-002 (MSW handler scaffold)

## NFRs

- Login form must be keyboard-navigable (Tab, Enter to submit)
- No sensitive data (tokens) logged to console

## Skills to invoke

- `/minfy:build` → `minfy-build-tdd` writes failing tests → implementation → `TK-test-F01-01`
