---
id: ST-F04-01
title: "Full Metadata Display"
epic: F04
owner_role: FE
status: scaffolded
sprint: 3
size: M
kind: frontend
---

## Purpose
Renders a comprehensive metadata panel for a dataset detail page, displaying all catalogue fields fetched from GET /api/v1/datasets/:id with skeleton loaders during data fetch.

## Acceptance Criteria
- Given the dataset detail page mounts, When the component loads, Then GET /api/v1/datasets/:id is called and a skeleton loader is shown until the response arrives
- Given the API responds successfully, When the data renders, Then description, variables, temporal coverage, spatial resolution, CRS, file size, format, licence, and provider are all visible
- Given the dataset ID does not exist, When the API returns 404, Then a "Dataset not found" error state is shown with a link back to the catalog
- Given the API call fails with a network error, When the error occurs, Then an error message with a retry option is displayed
- Given the user is on mobile, When the metadata panel renders, Then all fields are readable without horizontal scrolling

## Modules
```
src/modules/dataset/DatasetMetaPanel.tsx  (new)
```

## Dependencies
- ST-F03-02
