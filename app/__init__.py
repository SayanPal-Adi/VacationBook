from flask import Flask, jsonify
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.config import Config
from app.extensions import db, migrate


def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Application health check
    @app.route("/")
    def home():
        return jsonify({
            "application": "VacationBook",
            "message": "Welcome to VacationBook!",
            "status": "running"
        })

    # Database health check
    @app.route("/health/db")
    def database_health():

        try:
            db.session.execute(text("SELECT 1"))

            return jsonify({
                "database": "connected",
                "status": "healthy"
            }), 200

        except SQLAlchemyError:
            db.session.rollback()

            return jsonify({
                "database": "disconnected",
                "status": "unhealthy"
            }), 503

    return app