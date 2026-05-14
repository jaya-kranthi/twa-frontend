---
id: TK-SEC-01
title: "Security: RBAC route guards — redirect non-authorised roles"
epic: ~
owner_role: FE
status: scaffolded
sprint: 1
size: M
kind: security
owasp_refs: ["ASVS 4.1.1", "ASVS 4.1.3"]
---

## Purpose

Implement a `ProtectedRoute` wrapper that reads the user's role from the Cognito JWT `custom:role` claim (via `auth.store`) and redirects to `/dashboard` with a toast if the role is insufficient. Role is checked client-side for UX only — server enforces on every request.

## Acceptance Criteria

- Given SUBSCRIBER visits /admin, When route resolves, Then redirect to /dashboard with 403 toast
- Given SUBSCRIBER visits /org, When route resolves, Then redirect to /dashboard
- Given role is read from Cognito JWT custom:role claim (not from any mutable client state), When guard evaluates, Then redirect is correct
- Given unauthenticated user visits any protected route, When route resolves, Then redirect to /login

## Modules

```
src/components/ProtectedRoute.tsx   (new)
src/router/index.tsx                (extend — wrap routes with ProtectedRoute)
```

## Dependencies

- ST-F01-04
