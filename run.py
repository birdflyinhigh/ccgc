from server import creat_app


app = creat_app('dev')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=52000)
