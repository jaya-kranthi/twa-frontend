---
id: ST-F06-01
title: "API Key List + Create + Revoke"
epic: F06
owner_role: FE
status: scaffolded
sprint: 3
size: M
kind: frontend
---

## Purpose
Provides a full API key management interface where users can view existing keys, create new ones with the raw key shown once in a copy widget, and revoke keys with a confirmation dialog.

## Acceptance Criteria
- Given the API access page loads, When the component mounts, Then GET /api/v1/api-keys is called and all existing keys are listed in ApiKeyTable with name, description, created date, and last-used date
- Given the user clicks "Create API Key", When the modal opens, Then a name field and optional description field are presented
- Given the Create form is submitted, When POST /api/v1/api-keys succeeds, Then the raw key is displayed once in a RawKeyDisplay copy widget and the modal confirms the key cannot be shown again
- Given the user closes the RawKeyDisplay modal, When it is dismissed, Then the new key appears in the table without the raw value
- Given the user clicks Revoke on a key, When the confirmation dialog is accepted, Then DELETE /api/v1/api-keys/:id is called and the key is removed from the list
- Given the revoke confirmation dialog is dismissed, When cancelled, Then no deletion occurs

## Modules
```
src/modules/api-access/ApiKeyTable.tsx  (new)
src/modules/api-access/CreateKeyModal.tsx  (new)
src/modules/api-access/RawKeyDisplay.tsx  (new)
```

## Dependencies
- ST-F01-04
