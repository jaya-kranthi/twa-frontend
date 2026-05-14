---
id: ST-F09-02
title: "Dataset Moderation — Approve / Reject"
epic: F09
owner_role: FE
status: scaffolded
sprint: 5
size: M
kind: frontend
---

## Purpose
Presents admins with a moderation queue of DRAFT datasets where they can approve a dataset to ACTIVE status or reject it with a mandatory rejection reason via a modal.

## Acceptance Criteria
- Given the admin navigates to the moderation queue, When GET /api/v1/admin/datasets?status=DRAFT is called, Then all pending datasets are listed in ModerationQueue with title, provider, and submitted date
- Given the ADMIN clicks Approve on a dataset, When confirmed, Then PATCH /api/v1/admin/datasets/:id is called with status: ACTIVE and the row is removed from the queue
- Given the ADMIN clicks Reject on a dataset, When the RejectModal opens, Then a reason text area is required before submission
- Given the reject reason is submitted, When PATCH /api/v1/admin/datasets/:id is called with status: REJECTED and the reason, Then the row is removed from the queue and a success toast is shown
- Given the moderation queue is empty, When the page renders, Then an empty state message "No datasets pending review" is shown

## Modules
```
src/modules/admin/ModerationQueue.tsx  (new)
src/modules/admin/RejectModal.tsx  (new)
```

## Dependencies
- ST-F09-01
