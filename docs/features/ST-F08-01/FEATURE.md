---
id: ST-F08-01
title: "Plan Card + Comparison Table + Upgrade CTA"
epic: F08
owner_role: FE
status: scaffolded
sprint: 4
size: M
kind: frontend
---

## Purpose
Displays the user's current subscription plan details alongside a FREE/PRO/ENTERPRISE comparison table, with an Upgrade button that posts a plan-change request and requires confirmation.

## Acceptance Criteria
- Given the subscription page loads, When GET /api/v1/subscriptions succeeds, Then the PlanCard shows the current plan name, renewal date, quota, and price
- Given the page loads, When the comparison table renders, Then FREE, PRO, and ENTERPRISE columns are displayed with feature rows comparing quotas and capabilities
- Given the user is on FREE or PRO, When they click Upgrade, Then a confirmation dialog summarises the new plan and cost
- Given the confirmation is accepted, When POST /api/v1/subscriptions is called and succeeds, Then the PlanCard updates to reflect the new plan and a success toast is shown
- Given the API call fails, When the upgrade is attempted, Then an error message is shown and the user remains on their current plan
- Given the user is already on ENTERPRISE, When the page renders, Then the Upgrade button is hidden or disabled

## Modules
```
src/modules/subscription/PlanCard.tsx  (new)
src/modules/subscription/PlanComparisonTable.tsx  (new)
```

## Dependencies
- ST-F01-04
