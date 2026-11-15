
from flask import Flask, jsonify, render_template, request
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.config import Config
from app.extensions import db, migrate


def create_app():
    """Create and configure the VacationBook Flask application."""

    app = Flask(__name__)

    # ------------------------------------------
    # APPLICATION CONFIGURATION
    # ------------------------------------------
    app.config.from_object(Config)

    # ------------------------------------------
    # INITIALIZE EXTENSIONS
    # ------------------------------------------
    db.init_app(app)
    migrate.init_app(app, db)

    # ------------------------------------------
    # HOMEPAGE
    # ------------------------------------------
    @app.route("/", methods=["GET"])
    def home():
        return render_template("index.html")

    # ------------------------------------------
    # HOTEL SEARCH PAGE
    # ------------------------------------------
    @app.route("/search", methods=["GET"])
    def search_hotels():
        return render_template(
            "hotels.html",
            destination=request.args.get("destination", ""),
            checkin=request.args.get("checkin", ""),
            checkout=request.args.get("checkout", ""),
            guests=request.args.get("guests", 2)
        )

    # ------------------------------------------
    # APPLICATION HEALTH CHECK
    # ------------------------------------------
    @app.route("/health", methods=["GET"])
    def application_health():
        return jsonify({
            "application": "VacationBook",
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
