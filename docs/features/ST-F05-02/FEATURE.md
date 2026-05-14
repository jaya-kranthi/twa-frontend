---
id: ST-F05-02
title: "Download Link Display + Expiry + Retry"
epic: F05
owner_role: FE
status: scaffolded
sprint: 3
size: S
kind: frontend
---

## Purpose
Renders an active download link with 24-hour expiry notice for completed jobs, a Retry button for failed jobs, and a "restart download" message for expired links.

## Acceptance Criteria
- Given a job has status COMPLETE and the link is valid, When the row renders, Then DownloadLinkCell shows an active download link labelled with "Expires in 24h" or remaining time
- Given a job has status FAILED, When the row renders, Then a Retry button is shown that triggers POST /api/v1/datasets/:id/download to create a new job
- Given a COMPLETE job whose download link has expired, When the row renders, Then the link is replaced with a "restart download" message and a re-trigger option
- Given the Retry button is clicked, When the new job is created, Then the row updates to PENDING status and polling resumes

## Modules
```
src/modules/downloads/DownloadLinkCell.tsx  (new)
src/modules/downloads/RetryButton.tsx  (new)
```

## Dependencies
- ST-F05-01
