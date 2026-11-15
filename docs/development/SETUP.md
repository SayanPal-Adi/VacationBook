# Local Development Setup

## Prerequisites
- Python 3.11 or a project-supported Python version
- Git
- A Supabase project with PostgreSQL enabled
- A terminal

## Setup
1. Clone the repository.
2. Create and activate a virtual environment.
3. Install dependencies from `requirements.txt`.
4. Create a local `.env` file based on `.env.example`.
5. Set the Flask secret and database connection string.
6. Apply database migrations.
7. Start the Flask development server.

Example commands (macOS/Linux):

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
cp .env.example .env
flask --app run.py db upgrade
flask --app run.py run --debug
```

The exact Flask CLI command depends on the repository's entry point and migration setup. Do not commit `.env`.

## Verification
- Open the local application URL.
- Check the health endpoint.
- Confirm database connectivity.
- Test registration and login with development-only accounts.
