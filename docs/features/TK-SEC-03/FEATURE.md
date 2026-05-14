---
id: TK-SEC-03
title: "Security: No sensitive data in URL params (tokens, keys)"
epic: ~
owner_role: FE
status: scaffolded
sprint: 1
size: S
kind: security
owasp_refs: ["ASVS 3.5.2"]
---

## Purpose

Audit and enforce that JWT tokens, API keys, and raw credentials never appear in the browser URL bar (query params or hash). Download job IDs (non-sensitive UUIDs) in paths are acceptable.

## Acceptance Criteria

- Given auth tokens or API keys exist in auth.store, When any navigation occurs, Then they never appear in the URL bar (verified by router integration test)
- Given reset password flow uses a code from email link, When the page loads, Then code is consumed and removed from URL immediately after use
- Given download job ID in /jobs/:id, When URL is inspected, Then only the UUID appears (no presigned URL fragments)

## Modules

```
src/pages/ResetPasswordPage.tsx  (extend — consume and clear code param)
src/router/index.tsx             (audit — no token params in route definitions)
```

## Dependencies

- ST-F01-04
