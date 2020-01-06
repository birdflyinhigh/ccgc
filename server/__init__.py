"""
App初始化

"""
import redis
import logging

import pymysql

pymysql.install_as_MySQLdb()

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config, Config
from flask_wtf import CSRFProtect
from logging.handlers import RotatingFileHandler
from utils import RegexConverter
from flask_session import Session

# 创建数据库对象
db = SQLAlchemy()
# 创建redis对象
redis_store = redis.StrictRedis(host=Config.REDIS_HOST, port=Config.REDIS_PORT)

# 使用wtf的csrf保护机制
csrf = CSRFProtect()

# 设置日志等级
# logging.basicConfig(level=logging.DEBUG)
# # 创建日志记录起,限定保存路径,文件最大大小, 日志文件个数上限
# file_log_handler = RotatingFileHandler('./logs/server.log', maxBytes=1024 * 1024 * 100, backupCount=10)
# # 创建日志格式
# formatter = logging.Formatter('%(levelname)s %(filename)s:%(lineno)d %(message)s')
# # 设置日志格式
# file_log_handler.setFormatter(formatter)


# 使用工厂模式创建app
def creat_app(env):
    """创建flask应用app对象"""
    # 创建app配置信息
    app = Flask(__name__)
    # 添加配置信息
    app.config.from_object(config[env])
    # 为app添加url正则表达式匹配
    app.url_map.converters["regex"] = RegexConverter
    # 初始化数据库
    db.init_app(app)
    # app添加csrf保护
    csrf.init_app(app)

    # 使用flask session, 用redis保存app的session数据
    Session(app)

    # 添加api蓝图
    from server.views import api
    app.register_blueprint(api, url_prefix='/quiz')

    # # app添加静态页面蓝图应用
    # from .web_page import html as html_blueprint
    # app.register_blueprint(html_blueprint)

    return app


# 导入模型类

from .models import *
