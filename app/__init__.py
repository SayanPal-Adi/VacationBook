
from flask import Flask, jsonify
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.config import Config
from app.extensions import db, migrate


def create_app():
    """Create and configure the VacationBook Flask application."""

    app = Flask(__name__)

    # Load application configuration
    app.config.from_object(Config)

    # Initialize Flask extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # ------------------------------------------
    # HOME ROUTE
    # ------------------------------------------
    @app.route("/", methods=["GET"])
    def home():
        return jsonify({
            "application": "VacationBook",
            "message": "Welcome to VacationBook!",
            "status": "running"
        }), 200

    # ------------------------------------------
    # DATABASE HEALTH CHECK
    # ------------------------------------------
    @app.route("/health/db", methods=["GET"])
    def database_health():
        try:
            db.session.execute(text("SELECT 1"))

            return jsonify({
                "application": "VacationBook",
                "database": "connected",
                "status": "healthy"
            }), 200

        except SQLAlchemyError:
            app.logger.exception("Database connection failed")
            db.session.rollback()

            return jsonify({
                "application": "VacationBook",
                "database": "disconnected",
                "status": "unhealthy"
            }), 503

    return app
