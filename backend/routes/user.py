from flask import Blueprint, request, jsonify
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, get_jwt_identity, get_jwt)
from database import User, UserSchema

user = Blueprint('user', __name__)
    
@user.route('/v1/user/register', methods=['POST'])
def user_register():
    if User.find_by_email(request.json['email']):
        return jsonify({'message': 'Email {} is already in use'.format(request.json['email'])}), 409

    new_user = User(email=request.json['email'], password=User.generate_hash(request.json['password']),
                    first_name=request.json['first_name'])
    try:
        new_user.save_to_db()
        access_token = create_access_token(identity=request.json['email'])
        refresh_token = create_refresh_token(identity=request.json['email'])
        return jsonify({'message': 'Account with email {} was created'.format(request.json['email']),
                        'access_token': access_token, 'refresh_token': refresh_token}), 201
    except:
        return jsonify({'message': 'Something went wrong'}), 500

@user.route('/v1/user/login', methods=['POST'])
def user_login():
    current_user = User.find_by_email(request.json['email'])
    if not current_user:
        return jsonify({'message': 'Wrong email or password, please try again.'}), 404

    if User.verify_hash(request.json['password'], current_user.password):
        access_token = create_access_token(identity=request.json['email'])
        refresh_token = create_refresh_token(identity=request.json['email'])

        return jsonify({'logged_in_as': current_user.email, 'display_name': current_user.first_name,
                        'access_token': access_token, 'refresh_token': refresh_token}), 201
    else:
        return jsonify({'message': 'Wrong username or password, please try again.'}), 401


@user.route('/v1/user/settings', methods=['GET'])
@jwt_required()
def get_users_settings():
    user_schema = UserSchema()
    user = User.query.filter_by(email=get_jwt_identity()).first()
    return user_schema.dump(user)