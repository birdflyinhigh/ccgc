from . import api
from flask import jsonify




@api.route('/user/list', methods=['GET'])
def get_user_list():
    return jsonify(data='hello')