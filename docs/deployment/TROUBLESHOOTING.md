# Troubleshooting

## Application does not start
- Check Railway runtime logs or local terminal output.
- Confirm the start command points to the correct Flask entry point.
- Confirm dependencies are installed.

## Database connection fails
- Verify `DATABASE_URL` is set in the active environment.
- Check the Supabase host, port, database name, username and password.
- Confirm the chosen connection method and SSL requirements.
- Check network restrictions and connection limits.
- Never paste credentials into issue reports.

## Session or login problems
- Confirm `SECRET_KEY` is stable across application restarts.
- Check cookie and HTTPS settings.
- Confirm password hashing and verification use the same scheme.

## Static files are missing
- Check template references and paths under `static/`.
- Confirm filename casing matches exactly; production filesystems may be case-sensitive.
