---
id: ST-F05-01
title: "Download Jobs Table — Status Polling"
epic: F05
owner_role: FE
status: scaffolded
sprint: 3
size: M
kind: frontend
---

## Purpose
Displays the user's download job history in a table with live status polling every 5 seconds while any job is in a non-terminal state, stopping automatically once all jobs are terminal.

## Acceptance Criteria
- Given the downloads page mounts, When the component loads, Then GET /api/v1/jobs is called and results are displayed in a table showing file name, size, status badge, requested_at, and completed_at
- Given one or more jobs have status PENDING or PROCESSING, When the table is visible, Then the list refetches every 5 seconds
- Given all jobs reach a terminal status (COMPLETE or FAILED), When the last terminal state is received, Then polling stops
- Given the job list is empty, When the page renders, Then an empty state message is displayed
- Given a status badge renders, When the job status is PENDING, PROCESSING, COMPLETE, or FAILED, Then the badge colour distinguishes each state

## Modules
```
src/modules/downloads/DownloadsTable.tsx  (new)
src/modules/downloads/StatusBadge.tsx  (new)
```

## Dependencies
- ST-F04-03
