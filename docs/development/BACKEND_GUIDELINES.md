# Backend Guidelines

- Use the Flask application factory pattern.
- Separate blueprints by domain (auth, properties, bookings, admin).
- Keep business rules in service functions rather than duplicating them in routes.
- Use SQLAlchemy models and migrations for schema management.
- Validate and normalize input on the server.
- Enforce ownership and role checks for protected resources.
- Use transactions for multi-step booking operations.
- Hash passwords with a modern password-hashing utility.
- Configure secure cookies and CSRF protection where applicable.
- Log useful operational context without logging credentials or sensitive tokens.
- Return generic client errors; keep diagnostic details in server logs.
