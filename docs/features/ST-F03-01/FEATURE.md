---
id: ST-F03-01
title: "Search Bar + Filter Sidebar"
epic: F03
owner_role: FE
status: scaffolded
sprint: 2
size: L
kind: frontend
---

## Purpose
Provides a debounced full-text search bar and a filter sidebar (Region, Type, Date Range, Variable, Licence) whose combined state is reflected in the URL for shareability and reset via a Clear button.

## Acceptance Criteria
- Given the catalog page loads, When the user types in the search bar, Then the query is debounced 300ms before firing GET /api/v1/datasets with the q param
- Given filters are applied, When the page URL is copied and opened in a new tab, Then the same filters and search term are pre-applied
- Given one or more filters are active, When the user clicks the Clear button, Then all filters and the search term are reset and the URL is updated
- Given the Region, Type, Date Range, Variable, or Licence filter changes, When a new value is selected, Then the URL query params update immediately and the dataset list refetches
- Given the page is viewed on mobile, When the viewport is < 768px, Then the filter sidebar collapses into a drawer opened by a Filter button
- Given the filter sidebar is rendered, When a filter chip is active, Then a FilterChip component shows the active value with a dismiss control

## Modules
```
src/modules/catalog/SearchBar.tsx  (new)
src/modules/catalog/FilterSidebar.tsx  (new)
src/modules/catalog/FilterChip.tsx  (new)
```

## Dependencies
- ST-F01-04
