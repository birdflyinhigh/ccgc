"""
ccgc配置信息, 包含测试环境和线上环境

"""

import redis


class Config():
    # 配置secret key
    SECRET_KEY = 'DIGHIU34T89SDIOG3894TWET09238SIDHG0U3049'
    # 基础配置信息
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 8000

    # 数据库配置信息
    SQLALCHEMY_DATABASE_URI = 'mysql://root:mysql@127.0.0.1:3306/ccgc'
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_ECHO = True

    # 配置session信息，保存到redis中
    SESSION_TYPE = 'redis'
    SESSION_USE_SIGNER = True
    PERMANENT_SESSION_LIFETIME = 86400
    # 指定主机常量
    REDIS_HOST = '127.0.0.1'
    REDIS_PORT = 6379
    # 制定session用的redis
    SESSION_REDIS = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT)


class DevelopementConfig(Config):
    pass


class ProductionConfig():
    DEBUG = False


# 创建一个变量, 用来切换不同的配置
config = {
    'development': DevelopementConfig,
    'ProductionConfig': ProductionConfig,
}
