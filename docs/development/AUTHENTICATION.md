# Authentication and Authorization

## Authentication
- Registration must normalize email addresses and enforce uniqueness.
- Passwords must be hashed using a suitable password-hashing function.
- Login errors should not reveal whether an email address exists.
- Sessions must be protected with a strong secret key.
- Production cookies should use `Secure`, `HttpOnly` and an appropriate `SameSite` setting.
- Provide logout and session invalidation.

## Authorization
- Default role is customer.
- Admin privileges must never be assignable through public registration.
- Every protected route must check the current user and required role.
- Customer booking queries must be scoped to the authenticated user.
- Hiding a button in the frontend is not authorization.

## Additional protections
- Apply CSRF protection to state-changing browser requests.
- Rate-limit authentication endpoints where practical.
- Never commit secrets or log passwords.
