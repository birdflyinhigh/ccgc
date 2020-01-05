from . import api
from flask import jsonify, render_template




@api.route('/user/list', methods=['GET'])
def get_user_list():
    return jsonify(data='hello')


@api.route('/')
def index():
    return render_template('index.html')