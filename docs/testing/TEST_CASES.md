# Test Cases

| ID | Scenario | Expected result |
|---|---|---|
| TC-001 | Register with valid details | Account created |
| TC-002 | Register with an existing email | Clear validation error |
| TC-003 | Login with correct credentials | Authenticated session |
| TC-004 | Login with incorrect credentials | Generic authentication error |
| TC-005 | Open protected booking page while signed out | Redirect or 401/403 |
| TC-006 | Create booking with check-out before check-in | Request rejected |
| TC-007 | Book above property guest capacity | Request rejected |
| TC-008 | Request another user's booking | Access denied |
| TC-009 | Simulate successful payment | Payment simulation and booking state updated |
| TC-010 | Attempt admin action as customer | Access denied |
| TC-011 | Open application at mobile viewport | Layout remains usable |
| TC-012 | Database unavailable | Graceful error; no secret leakage |

Record actual result, test date, environment and defect reference when executing each case.
