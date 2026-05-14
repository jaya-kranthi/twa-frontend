---
id: ST-F06-02
title: "Usage Graph 7d/30d"
epic: F06
owner_role: FE
status: scaffolded
sprint: 4
size: M
kind: frontend
---

## Purpose
Renders a bar chart of daily API call counts for either a 7-day or 30-day window, toggleable via a WindowToggle control that refetches usage data from GET /api/v1/usage.

## Acceptance Criteria
- Given the API access page loads, When the UsageGraph mounts, Then GET /api/v1/usage?window=7d is called by default and a bar chart of daily call counts is rendered
- Given the user clicks the 30d toggle, When the window changes, Then GET /api/v1/usage?window=30d is called and the chart updates to display 30 daily bars
- Given the user switches back to 7d, When the window changes, Then GET /api/v1/usage?window=7d is called and the chart reverts
- Given usage data is loading, When the request is in flight, Then a skeleton placeholder is shown in place of the chart
- Given the API returns zero calls for all days, When the chart renders, Then empty bars or a "No API calls in this period" message is displayed

## Modules
```
src/modules/api-access/UsageGraph.tsx  (new)
src/modules/api-access/WindowToggle.tsx  (new)
```

## Dependencies
- ST-F06-01
