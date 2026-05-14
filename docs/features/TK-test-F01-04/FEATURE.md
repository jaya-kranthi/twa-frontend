---
id: TK-test-F01-04
title: "Tests for JWT Session Management"
epic: F01
owner_role: FE
status: scaffolded
sprint: 2
size: S
kind: frontend-test
---

## Purpose
Unit tests for JWT storage, silent token refresh, idle timeout detection, and protected route guard logic.

## Acceptance Criteria
- Given a valid access token near expiry, When a request is made, Then the refresh endpoint is called silently and the new token is stored
- Given the refresh token is expired, When a refresh attempt fails, Then the user is logged out and redirected to /login
- Given the user is idle for the configured timeout, When the timer fires, Then the session is cleared and the idle-logout modal is shown
- Given an unauthenticated user, When they navigate to a protected route, Then they are redirected to /login with a returnTo param
- Given a logged-in user, When they navigate to /login, Then they are redirected to /dashboard

## Modules
```
src/modules/auth/session.ts  (extend)
src/modules/auth/ProtectedRoute.tsx  (extend)
```

## Dependencies
- ST-F01-04
