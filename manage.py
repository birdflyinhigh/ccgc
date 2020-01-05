from flask import Flask
from server import creat_app, db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

app = creat_app('dev')



app.run(host='0.0.0.0', port=5000)

# Migrate(app, db)
# manager = Manager(app)
# manager.add_command("db", MigrateCommand)
#
# if __name__ == '__main__':
#     manager.run()
