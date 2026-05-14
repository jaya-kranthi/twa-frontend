---
id: ST-F04-03
title: "Download Trigger + Request Access CTA"
epic: F04
owner_role: FE
status: scaffolded
sprint: 3
size: M
kind: frontend
---

## Purpose
Initiates a dataset download via job polling and presents entitled users with a download link on completion, while non-entitled users see a Request Access button; expired links show a restart prompt.

## Acceptance Criteria
- Given the user is entitled to the dataset, When they click the Download button, Then POST /api/v1/datasets/:id/download is called and the returned job_id is used to poll GET /api/v1/jobs/:id
- Given the job is PENDING or PROCESSING, When polling occurs, Then a progress indicator is shown and polling continues
- Given the job status becomes COMPLETE, When the poll resolves, Then a DownloadLinkCard is displayed with the download URL
- Given the download link has expired, When the card renders, Then a "restart download" message is shown with an option to re-trigger
- Given the user is not entitled to the dataset, When the page renders, Then a RequestAccessButton is shown instead of the Download button
- Given the user clicks Request Access, When the modal is submitted, Then an access request is sent and a confirmation message is displayed

## Modules
```
src/modules/dataset/DownloadButton.tsx  (new)
src/modules/dataset/RequestAccessButton.tsx  (new)
src/modules/dataset/DownloadLinkCard.tsx  (new)
```

## Dependencies
- ST-F04-01
