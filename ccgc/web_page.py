from flask import Blueprint, make_response, current_app
from flask_wtf import csrf


html = Blueprint('html', __name__)


@html.route("/<regex('.*'):file_name>")
def static_html(file_name):
    if not file_name:
        file_name = 'index.html'
    if file_name != 'favicon.ico':
        file_name =  'html/'+file_name
    csrf_token = csrf.generate_csrf()
    response = make_response(current_app.send_static_file(file_name))
    response.set_cookie('csrf_token', csrf_token)
    return response