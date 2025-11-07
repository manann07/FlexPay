from flask import Flask
from flask_cors import CORS
from models.user import db
import pymysql
pymysql.install_as_MySQLdb()

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:manan12345@localhost/flexpay"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    with app.app_context():
        db.create_all()

    from routes.user_routes import user_bp
    app.register_blueprint(user_bp)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
