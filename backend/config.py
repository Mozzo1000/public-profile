class Config(object):
    # Flask
    FLASK_ENV = 'development'

    # Database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///public-profile.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    #JWT token
    JWT_SECRET_KEY = "change-this-not-so-secret-key-later"
    JWT_BLACKLIST_ENABLED = False # Change this later to True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']
    JWT_ACCESS_TOKEN_EXPIRES = False