---
id: TK-test-F01-03
title: "Tests for Forgot / Reset Password"
epic: F01
owner_role: FE
status: scaffolded
sprint: 2
size: S
kind: frontend-test
---

## Purpose
Unit and integration tests for the forgot password request and reset password confirmation flows.

## Acceptance Criteria
- Given the forgot-password form, When a valid email is submitted, Then POST /api/v1/auth/forgot-password is called and a confirmation message is shown
- Given an invalid email, When submitted, Then an inline validation error appears
- Given the reset-password form with a valid token, When matching passwords are submitted, Then the password is updated and the user is redirected to /login
- Given the reset-password form, When passwords do not match, Then a validation error is shown without calling the API
- Given an expired or invalid reset token, When the page loads, Then an error state is displayed with a link to re-request

## Modules
```
src/modules/auth/ForgotPasswordForm.tsx  (extend)
src/modules/auth/ResetPasswordForm.tsx  (extend)
```

## Dependencies
- ST-F01-03
