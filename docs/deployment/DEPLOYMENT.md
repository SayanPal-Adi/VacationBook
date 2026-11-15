# Deployment — Railway

## Pre-deployment checklist
- Tests pass.
- Debug mode is disabled.
- Production `SECRET_KEY` is strong and unique.
- Production `DATABASE_URL` is configured securely.
- Database migrations are current.
- No `.env` file or secrets are committed.
- Static assets and templates are included in the deployment.
- Health-check route is available.

## Railway deployment outline
1. Push the application to the intended Git repository.
2. Create or select a Railway project.
3. Connect the repository.
4. Configure the build and start commands for the actual app entry point.
5. Add required environment variables in Railway.
6. Deploy and inspect build/runtime logs.
7. Apply migrations using a controlled release procedure.
8. Verify the public health endpoint and critical user journeys.

Do not assume a deployment is healthy merely because the build succeeds. Verify database connectivity and application behavior after deployment.
