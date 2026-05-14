---
id: ST-F04-04
title: "Version History Panel"
epic: F04
owner_role: FE
status: scaffolded
sprint: 4
size: S
kind: frontend
---

## Purpose
Provides an expandable panel on the dataset detail page listing all prior versions with their release dates and changelogs, or a "No prior versions" message for single-version datasets.

## Acceptance Criteria
- Given the dataset detail page loads, When the Version History panel is collapsed, Then only the panel header and current version are visible
- Given the user clicks the panel header to expand it, When the panel opens, Then all prior versions are listed with release date and changelog text
- Given the dataset has only one version, When the panel is expanded, Then a "No prior versions" message is displayed
- Given multiple versions exist, When the list renders, Then versions are ordered with the most recent first
- Given a changelog entry is long, When rendered, Then the text wraps correctly without overflowing the panel

## Modules
```
src/modules/dataset/VersionHistoryPanel.tsx  (new)
```

## Dependencies
- ST-F04-01
