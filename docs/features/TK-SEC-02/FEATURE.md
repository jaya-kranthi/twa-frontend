---
id: TK-SEC-02
title: "Security: Input validation — Yup schemas on all forms"
epic: ~
owner_role: FE
status: scaffolded
sprint: 1
size: S
kind: security
owasp_refs: ["ASVS 5.1.3"]
---

## Purpose

Define shared Yup validation schemas for all forms. Schemas live in `src/modules/<domain>/schemas/`. All form submissions must run validation before any API call fires.

## Acceptance Criteria

- Given any form in the app, When submitted with invalid data, Then Yup validation fires before any API call
- Given an XSS payload (<script>alert(1)</script>) in a text field, When submitted, Then Yup string().trim() rejects or sanitizes it
- Given all forms, When schema is applied via Formik validationSchema, Then no form bypasses validation

## Modules

```
src/modules/auth/schemas/login.schema.ts      (new)
src/modules/auth/schemas/reset.schema.ts      (new)
src/modules/catalog/schemas/search.schema.ts  (new)
src/modules/org/schemas/invite.schema.ts      (new)
src/modules/api-access/schemas/key.schema.ts  (new)
```

## Dependencies

- ST-F01-01
