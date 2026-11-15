# Technology Stack

| Layer | Technology | Responsibility |
|---|---|---|
| Frontend | HTML5 | Page structure |
| Styling | CSS3 | Responsive visual system |
| Client interaction | JavaScript | Search controls, form interaction and progressive enhancement |
| Backend | Python Flask | Routing, sessions and application logic |
| ORM | SQLAlchemy | Relational data access |
| Database | Supabase PostgreSQL | Persistent application data |
| Deployment | Railway | Hosting the Flask application |

## Constraints
- Keep secrets in environment variables.
- Use a supported PostgreSQL connection string.
- Pin or constrain dependencies in `requirements.txt`.
- Use migrations to evolve the schema.
- Do not treat simulated checkout as a real payment integration.
