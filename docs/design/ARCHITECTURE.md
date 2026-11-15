# System Architecture

## High-level design

```text
Browser
  | HTTPS
  v
Flask application (Railway)
  |-- routes / blueprints
  |-- service and business-rule layer
  |-- SQLAlchemy models
  v
Supabase PostgreSQL
```

The browser renders HTML and uses CSS and JavaScript for interaction. It communicates with Flask routes. Flask validates requests, applies business rules and accesses PostgreSQL through SQLAlchemy.

## Architectural rules
- Keep route handlers focused on HTTP concerns.
- Put reusable business rules in service functions.
- Keep database access on the server.
- Never expose database credentials or secret keys to frontend code.
- Enforce authentication and authorization on every protected server route.
- Recalculate totals and re-check availability on the server at booking time.

## Suggested Flask package layout

```text
app/
  __init__.py
  config.py
  extensions.py
  models/
  blueprints/
  services/
  templates/
  static/
    css/
    js/
    images/
migrations/
tests/
```

Adapt the layout to the actual repository as implementation evolves.
