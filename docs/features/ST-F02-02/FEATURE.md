---
id: ST-F02-02
title: "Recent Datasets Table + Quick-Access Links"
epic: F02
owner_role: FE
status: scaffolded
sprint: 2
size: S
kind: frontend
---

## Purpose
Displays the five most recently updated datasets in a table on the dashboard, with row clicks navigating to the full dataset detail page.

## Acceptance Criteria
- Given the dashboard mounts, When the component loads, Then GET /api/v1/datasets?sort=updated_at&limit=5 is called and the five results are displayed in the table
- Given the data is loading, When the request is in flight, Then skeleton rows are shown in place of real data
- Given the table is populated, When the user clicks a row, Then the user navigates to /catalog/:id for that dataset
- Given no datasets exist, When the response is empty, Then an empty state message is shown
- Given a dataset row, When rendered, Then the dataset name, type, and last-updated date are visible

## Modules
```
src/modules/dashboard/RecentDatasetsTable.tsx  (new)
```

## Dependencies
- ST-F02-01
