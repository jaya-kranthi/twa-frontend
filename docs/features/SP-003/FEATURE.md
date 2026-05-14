---
id: SP-003
title: "Spike: TanStack Query patterns for polling + optimistic updates"
epic: ~
owner_role: FE
status: scaffolded
sprint: 1
size: S
kind: spike
---

## Purpose

Confirm TanStack Query v5 patterns for: (1) `refetchInterval` polling for download jobs, and (2) optimistic updates for org member invites. Produce reusable patterns that later stories can copy.

## Outcome Required

1. `useDownloadJob(jobId)` hook pattern — `refetchInterval: (query) => query.data?.status === 'completed' ? false : 5000`
2. Optimistic invite pattern — `onMutate` / `onError` rollback / `onSettled` invalidate

## Modules

```
src/modules/downloads/hooks/useDownloadJob.ts   (new — pattern only)
src/modules/org/hooks/useInviteMember.ts        (new — pattern only)
```

## Dependencies

- SP-001
