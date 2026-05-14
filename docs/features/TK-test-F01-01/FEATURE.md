---
id: TK-test-F01-01
title: "Tests for Login Page"
epic: F01
owner_role: FE
status: scaffolded
sprint: 2
size: S
kind: frontend-test
---

## Purpose
Unit and integration tests for the LoginForm component, covering valid credentials, validation errors, and API error states.

## Acceptance Criteria
- Given the login form is rendered, When required fields are empty and submitted, Then inline validation errors appear
- Given valid credentials, When the form is submitted, Then POST /api/v1/auth/login is called and the user is redirected
- Given the API returns 401, When the form is submitted, Then an error banner is displayed without clearing the email field
- Given the form is rendered, When the user toggles password visibility, Then the input type toggles between password and text

## Modules
```
src/modules/auth/LoginForm.tsx  (extend)
```

## Dependencies
- ST-F01-01
