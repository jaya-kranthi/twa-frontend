---
id: ST-F09-03
title: "Audit Log Viewer"
epic: F09
owner_role: FE
status: scaffolded
sprint: 5
size: M
kind: frontend
---

## Purpose
Provides admins with a searchable, paginated audit log table that filters events by actor and action, fetching from GET /api/v1/admin/audit.

## Acceptance Criteria
- Given the admin navigates to /admin/audit, When GET /api/v1/admin/audit is called, Then audit events are displayed in AuditLogTable with timestamp, actor email, action, and resource columns
- Given the ADMIN types in the actor filter, When the query updates, Then the table filters to show only events matching that actor's email
- Given the ADMIN selects an action filter, When the action changes, Then only events of that action type are shown
- Given both actor and action filters are set, When both are active, Then the table shows only events matching both criteria
- Given the audit log is paginated, When the user navigates pages, Then active filters are preserved across page changes
- Given no events match the filter, When the filtered result is empty, Then an empty state message is displayed

## Modules
```
src/modules/admin/AuditLogTable.tsx  (new)
src/modules/admin/AuditLogFilter.tsx  (new)
```

## Dependencies
- ST-F09-01
