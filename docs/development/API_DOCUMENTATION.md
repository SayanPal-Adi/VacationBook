# API Documentation

This is a proposed API contract. Adjust paths and payloads to match the implemented routes.

## Conventions
- Use JSON for API request and response bodies unless a route explicitly uses HTML forms.
- Return appropriate HTTP status codes.
- Validate all input on the server.
- Require authentication for customer-specific resources.
- Require an admin role for administrative operations.

## Candidate endpoints

| Method | Path | Purpose | Access |
|---|---|---|---|
| GET | `/health` | Application health | Public |
| GET | `/api/properties` | List/search published properties | Public |
| GET | `/api/properties/<id>` | Property details | Public |
| POST | `/api/auth/register` | Register | Public |
| POST | `/api/auth/login` | Sign in | Public |
| POST | `/api/auth/logout` | Sign out | Authenticated |
| GET | `/api/bookings` | Current user's bookings | Authenticated |
| POST | `/api/bookings` | Create booking | Authenticated |
| GET | `/api/bookings/<id>` | Booking details | Owner/admin |
| POST | `/api/bookings/<id>/cancel` | Request cancellation | Owner/admin |
| POST | `/api/bookings/<id>/simulate-payment` | Simulate payment | Owner |

## Error format
Use a consistent response shape, for example:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Check-out must be after check-in."
  }
}
```

Never return stack traces, secrets or internal database details to clients.
