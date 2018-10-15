import functools

from flask import g, session, jsonify
from werkzeug.routing import BaseConverter
from config import RET


class RegexConverter(BaseConverter):
    # 正则转换器的配置
    def __init__(self, url_map, *args):
        super(RegexConverter, self).__init__(url_map)
        self.regex = args[0]


def login_required(f):
    """要求用户登录的验证装饰器"""

    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        user_id = session.get("user_id")
        if user_id is None:
            return jsonify(errno=RET.SESSIONERR, errmsg="用户未登录")
        else:
            g.user_id = user_id
            return f(*args, **kwargs)

    return wrapper
