---
id: SP-002
title: "Spike: MSW handler scaffolding + extract-contract.ts design"
epic: ~
owner_role: FE
status: scaffolded
sprint: 1
size: S
kind: spike
---

## Purpose

Confirm MSW v2 handler organisation (one file per domain) and draft the `extract-contract.ts` script shape that will parse handlers into `docs/api-contract.openapi.yaml` during the UI lock step.

## Outcome Required

1. Domain handler files confirmed: `src/mocks/handlers/{auth,datasets,jobs,api-keys,org,admin,usage,subscriptions}.ts`
2. `scripts/extract-contract.ts` skeleton committed — reads handler files, emits OpenAPI paths
3. Health check handler already in place (`GET /api/v1/health`) — validate this works in vitest

## Modules

```
src/mocks/handlers/        (existing) — add domain files
scripts/extract-contract.ts (new)
```

## Dependencies

- none
