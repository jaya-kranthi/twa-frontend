---
id: ST-F02-01
title: "Welcome Card + KPI Tiles"
epic: F02
owner_role: FE
status: scaffolded
sprint: 2
size: M
kind: frontend
---

## Purpose
Renders a personalised welcome card and four KPI tiles (Datasets Available, Active Downloads, Subscription, API Calls Today) fetched in parallel on mount, with skeleton loaders during loading and a warning colour when quota exceeds 80%.

## Acceptance Criteria
- Given the dashboard mounts, When the page loads, Then GET /api/v1/me, GET /api/v1/usage, and GET /api/v1/subscriptions are called in parallel and skeleton loaders are visible until all three resolve
- Given all API calls succeed, When data is returned, Then each KPI tile displays the correct value from its respective response
- Given API Calls Today usage is greater than 80% of the plan quota, When the tile renders, Then it displays in warning colour (amber/orange)
- Given any single API call fails, When the tile renders, Then an inline error state is shown for that tile without affecting the others
- Given the page is viewed on mobile, When the viewport is < 768px, Then KPI tiles stack vertically in a single column

## Modules
```
src/modules/dashboard/WelcomeCard.tsx  (new)
src/modules/dashboard/KpiTile.tsx  (new)
src/modules/dashboard/index.tsx  (new)
src/mocks/handlers/dashboard.ts  (new)
```

## Dependencies
- ST-F01-04
