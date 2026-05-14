---
id: ST-F03-02
title: "Dataset Card Grid/List + Sort + Pagination"
epic: F03
owner_role: FE
status: scaffolded
sprint: 2
size: M
kind: frontend
---

## Purpose
Displays catalog search results as toggleable grid or list cards, with a sort dropdown and page-based pagination that preserves active filters across page changes.

## Acceptance Criteria
- Given the catalog page loads, When results are returned, Then datasets are shown as DatasetCard components in the last-used layout (grid or list)
- Given the user toggles between grid and list view, When the toggle is clicked, Then the preference is saved in ui.store and the layout switches immediately
- Given a sort option is selected, When the sort dropdown changes, Then the sort param is appended to the query and the list refetches from page 1
- Given results span multiple pages, When the user navigates to a different page, Then the active filters and sort order are preserved in the URL
- Given data is loading after a filter or page change, When the request is in flight, Then skeleton card placeholders are shown

## Modules
```
src/modules/catalog/DatasetCard.tsx  (new)
src/modules/catalog/ViewToggle.tsx  (new)
src/modules/catalog/SortDropdown.tsx  (new)
src/modules/catalog/Pagination.tsx  (new)
```

## Dependencies
- ST-F03-01
