---
id: ST-F04-02
title: "Map Preview (Bounding Box) + Sample Data Table"
epic: F04
owner_role: FE
status: scaffolded
sprint: 3
size: M
kind: frontend
---

## Purpose
Displays a spatial bounding-box map thumbnail and a tabular sample data preview for a dataset, falling back to a "Preview not available" message when no preview data exists.

## Acceptance Criteria
- Given the dataset detail page loads, When GET /api/v1/datasets/:id/preview is called, Then a skeleton is shown until the response arrives
- Given the preview response contains spatial data, When the map thumbnail renders, Then MapPreviewThumbnail displays the bounding box on a base map tile
- Given the preview response contains CSV/tabular data, When the table renders, Then SampleDataTable displays column headers and the first rows of sample data
- Given the preview response is empty or the API returns 404, When the section renders, Then a "Preview not available" message is shown
- Given the API call fails, When an error occurs, Then an inline error state is shown within the preview section without affecting other page sections

## Modules
```
src/modules/dataset/MapPreviewThumbnail.tsx  (new)
src/modules/dataset/SampleDataTable.tsx  (new)
```

## Dependencies
- ST-F04-01
