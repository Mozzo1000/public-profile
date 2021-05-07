from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()
ma = Marshmallow()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    profile_picture = db.Column(db.String, nullable=True)
    banner_image = db.Column(db.String, nullable=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=True)
    date_of_birth = db.Column(db.Date, nullable=True)
    place_of_birth = db.Column(db.String, nullable=True)
    gender = db.Column(db.String, nullable=True)
    nationality = db.Column(db.String, nullable=True)
    #social
    #contact_info

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @staticmethod
    def generate_hash(password):
        return generate_password_hash(password)

    @staticmethod
    def verify_hash(password, hash):
        return check_password_hash(hash, password)

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User

    email = ma.auto_field()
    first_name = ma.auto_field()
    last_name = ma.auto_field()
    date_of_birth = ma.auto_field()
    place_of_birth = ma.auto_field()
    gender = ma.auto_field()
    nationality = ma.auto_field()
    