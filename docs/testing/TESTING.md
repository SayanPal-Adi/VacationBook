# Testing Strategy

## Test levels
- **Unit tests:** business rules, pricing calculations, validation and service functions.
- **Integration tests:** Flask routes, database operations, authentication and booking transactions.
- **End-to-end/manual tests:** complete customer journeys in a browser.
- **Security checks:** authorization boundaries, CSRF, input validation and secret handling.

## Critical scenarios
1. Registration succeeds with valid data.
2. Duplicate email registration is rejected.
3. Invalid credentials are rejected.
4. A customer cannot view another customer's booking.
5. An unauthenticated visitor cannot create a booking.
6. Invalid dates and guest counts are rejected.
7. Unavailable properties cannot be booked.
8. Concurrent booking attempts do not create overlapping confirmed reservations.
9. Simulated payment success and failure produce correct states.
10. Admin routes reject non-admin users.

Run tests before merging changes and before deployment.
