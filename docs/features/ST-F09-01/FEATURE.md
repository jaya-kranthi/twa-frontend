---
id: ST-F09-01
title: "User Management — List / Search / Deactivate / Change Role"
epic: F09
owner_role: FE
status: scaffolded
sprint: 5
size: M
kind: frontend
---

## Purpose
Admin-only page that lists all platform users with search, role-change dropdown, and deactivate controls, redirecting non-ADMIN users to /dashboard.

## Acceptance Criteria
- Given a non-ADMIN user navigates to /admin/users, When the route guard checks their role, Then they are redirected to /dashboard
- Given an ADMIN user opens the page, When GET /api/v1/admin/users is called, Then all users are displayed in AdminUserTable with name, email, role, and status columns
- Given the ADMIN user types in the search box, When the query changes, Then the table filters users by name or email
- Given the ADMIN clicks a RoleChangeDropdown for a user, When a new role is selected and confirmed, Then PATCH /api/v1/admin/users/:id is called with the new role
- Given the ADMIN clicks Deactivate on a user, When confirmed, Then PATCH /api/v1/admin/users/:id is called with status: INACTIVE and the row updates
- Given the ADMIN deactivates themselves, When the action is attempted, Then it is blocked with an error message

## Modules
```
src/modules/admin/AdminUserTable.tsx  (new)
src/modules/admin/DeactivateButton.tsx  (new)
src/modules/admin/RoleChangeDropdown.tsx  (new)
```

## Dependencies
- ST-F01-04
