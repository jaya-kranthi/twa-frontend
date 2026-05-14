---
id: ST-F01-03
title: "Forgot password + first-time password reset flow"
epic: EP-F01
owner_role: FE
status: scaffolded
sprint: 1
size: M
---

## Purpose

Two-step flow: (1) user enters email → Cognito sends reset email; (2) user follows link with reset code → enters new password. Both handled on the frontend; Cognito's `ForgotPassword` + `ConfirmForgotPassword` calls proxied through the backend.

## Acceptance Criteria

- Given user clicks 'Forgot password' on /login, When they enter email and submit, Then confirmation message shown: 'Check your email for a reset link'
- Given user follows reset link (/reset-password?code=&email=), When they enter new password meeting strength requirements and confirm, Then password updated and redirected to /login with success toast
- Given passwords don't match in reset form, When submitted, Then Yup validation error shown

## API Contract

```yaml
paths:
  /auth/forgot-password:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                email: { type: string, format: email }
      responses:
        200:
          description: Reset email sent
  /auth/reset-password:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                email: { type: string }
                code: { type: string }
                new_password: { type: string }
      responses:
        200:
          description: Password reset complete
        400:
          $ref: '#/components/schemas/Error'
```

## Modules

```
src/modules/auth/ForgotPasswordForm.tsx (new)
src/modules/auth/ResetPasswordForm.tsx  (new)
src/pages/ResetPasswordPage.tsx         (new)
src/mocks/handlers/auth.ts              (extend)
```

## Dependencies

- SP-001
- SP-002
