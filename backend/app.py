import flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
from routes.user import user
from config import Config
from database import db, ma

app = flask.Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
with app.app_context():
    db.create_all()
ma.init_app(app)
jwt = JWTManager(app)

app.register_blueprint(user)

@app.route('/', methods=['GET'])
def index():
    return "<h1>Hello world!</h1>"


if __name__ == '__main__':
    app.run()