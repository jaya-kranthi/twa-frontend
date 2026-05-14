---
id: ST-F02-03
title: "Notification Bell — New Datasets Matching Saved Interests"
epic: F02
owner_role: FE
status: scaffolded
sprint: 3
size: S
kind: frontend
---

## Purpose
Renders a notification bell in the nav bar that fetches unread notifications and shows a badge count, opening a dropdown list of new datasets matching the user's saved interests on click.

## Acceptance Criteria
- Given the user is logged in, When the nav bar renders, Then GET /api/v1/notifications is called and the unread count badge is displayed on the bell icon
- Given unread notifications exist, When the user clicks the bell icon, Then a dropdown list of notifications appears with dataset names and timestamps
- Given there are no unread notifications, When the user clicks the bell icon, Then the dropdown shows an empty state message
- Given the dropdown is open, When the user clicks a notification, Then they navigate to the relevant dataset and the notification is marked as read
- Given the badge count is zero, When rendered, Then no badge is shown on the bell icon

## Modules
```
src/modules/dashboard/NotificationBell.tsx  (new)
```

## Dependencies
- ST-F02-01
- ST-F11-03
