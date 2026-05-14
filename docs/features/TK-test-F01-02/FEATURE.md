---
id: TK-test-F01-02
title: "Tests for MFA Challenge"
epic: F01
owner_role: FE
status: scaffolded
sprint: 2
size: S
kind: frontend-test
---

## Purpose
Unit and integration tests for the MFA challenge component, covering TOTP code submission, invalid code handling, and bypass guard for non-MFA users.

## Acceptance Criteria
- Given MFA is required, When the user submits a valid 6-digit TOTP code, Then the session is established and navigation to /dashboard occurs
- Given MFA is required, When an invalid code is submitted, Then an error message is shown and the input is cleared
- Given MFA is required, When the code field is left empty and submitted, Then a validation error is shown
- Given the user does not have MFA enabled, When they land on the MFA route, Then they are redirected to /dashboard

## Modules
```
src/modules/auth/MfaChallenge.tsx  (extend)
```

## Dependencies
- ST-F01-02
