# Environment Variables

Maintain a `.env.example` containing placeholder values only. Never commit a real `.env` file.

| Variable | Required | Description |
|---|---|---|
| `FLASK_ENV` | No | Environment label; follow the Flask version's configuration conventions |
| `SECRET_KEY` | Yes | Strong random Flask session secret |
| `DATABASE_URL` | Yes | PostgreSQL connection URL |
| `FLASK_DEBUG` | Local only | Enables development debugging; must be off in production |
| `PORT` | Platform-dependent | Port supplied by the deployment platform, if applicable |

## Rules
- Keep production values in Railway's environment-variable settings.
- Never put secrets in source code, documentation, screenshots or frontend bundles.
- Use separate credentials for development and production.
- Rotate any secret that has been exposed.
- Confirm the database URL format and SSL requirements for the selected Supabase connection method.
