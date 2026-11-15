# Project Plan

## Phase 1 — Foundation
- Create the repository and virtual environment.
- Add Flask application factory and configuration.
- Configure environment variables.
- Connect SQLAlchemy to Supabase PostgreSQL.
- Add health-check route.
- Establish Git conventions.

## Phase 2 — Data model and authentication
- Define user, property, booking and simulated-payment models.
- Add migrations.
- Implement registration, login, logout and role checks.
- Test authorization boundaries.

## Phase 3 — Property discovery
- Build home, search/results and property detail pages.
- Add filters and server-side query validation.
- Seed development data.

## Phase 4 — Booking workflow
- Implement availability checks and booking creation.
- Prevent invalid date ranges and overlapping reservations.
- Add booking history and cancellation rules.

## Phase 5 — Simulated checkout
- Add a clearly labelled mock payment flow.
- Record payment simulation results.
- Generate booking confirmation and reference.

## Phase 6 — Administration
- Add protected property and booking management screens.
- Audit authorization and validation.

## Phase 7 — Quality and deployment
- Run unit, integration and manual tests.
- Review security and accessibility.
- Configure Railway deployment and production environment variables.
- Verify health checks, logs and database connectivity.

## Delivery rule
Do not mark a phase complete until its acceptance criteria and relevant tests pass.
