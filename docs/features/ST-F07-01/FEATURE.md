---
id: ST-F07-01
title: "Reports Placeholder Page"
epic: F07
owner_role: FE
status: scaffolded
sprint: 4
size: S
kind: frontend
---

## Purpose
Scaffolds the /reports route with date range and type filter controls above a "Reports coming soon" empty state, establishing the page shell for future reporting features.

## Acceptance Criteria
- Given the user navigates to /reports, When the page renders, Then the route resolves without error and the page title is "Reports"
- Given the page renders, When no reports are available, Then a ReportsPlaceholder component with a "Reports coming soon" message is displayed
- Given the page renders, When the date range and type filter controls are visible, Then they are present in the DOM but may be non-functional in this sprint
- Given an unauthenticated user navigates to /reports, When the route guard checks, Then they are redirected to /login

## Modules
```
src/pages/ReportsPage.tsx  (new)
src/modules/reports/ReportsPlaceholder.tsx  (new)
```

## Dependencies
- ST-F01-04
