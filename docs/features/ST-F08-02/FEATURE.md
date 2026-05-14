---
id: ST-F08-02
title: "Invoice History"
epic: F08
owner_role: FE
status: scaffolded
sprint: 4
size: S
kind: frontend
---

## Purpose
Renders a paginated invoice history table fetched from GET /api/v1/invoices, showing date, amount, status, and a PDF download link per row, with an empty state for accounts with no invoices.

## Acceptance Criteria
- Given the subscription page loads, When GET /api/v1/invoices is called and returns results, Then each row displays invoice date, amount, payment status, and a PDF link
- Given invoices are loading, When the request is in flight, Then skeleton rows are shown
- Given the account has no invoices, When the response is empty, Then an empty state message is displayed
- Given an invoice row renders, When the user clicks the PDF link, Then the invoice PDF opens in a new browser tab
- Given the API returns an error, When the call fails, Then an inline error message is shown with a retry option

## Modules
```
src/modules/subscription/InvoiceTable.tsx  (new)
```

## Dependencies
- ST-F08-01
