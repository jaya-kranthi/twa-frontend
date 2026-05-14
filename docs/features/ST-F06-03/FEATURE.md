---
id: ST-F06-03
title: "Embedded API Explorer"
epic: F06
owner_role: FE
status: scaffolded
sprint: 4
size: S
kind: frontend
---

## Purpose
Embeds the Redoc API reference within the API Access page with the user's Bearer token pre-populated so they can explore and try endpoints without leaving the app.

## Acceptance Criteria
- Given the API access page loads, When the ApiExplorerEmbed mounts, Then the Redoc iframe/embed renders the OpenAPI specification
- Given the user has an active API key, When the explorer loads, Then the Bearer token field is pre-populated with the user's most recently used key
- Given the embed renders, When the user interacts with an endpoint in Redoc, Then the try-it-out requests include the pre-populated Authorization header
- Given the API spec URL is unreachable, When the embed fails to load, Then a fallback message with a link to the external docs is displayed

## Modules
```
src/modules/api-access/ApiExplorerEmbed.tsx  (new)
```

## Dependencies
- ST-F06-01
