from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

user_pwd = 'dfasdfasd'

h = bcrypt.generate_password_hash(user_pwd)

print(bcrypt.check_password_hash(h, 'asdfasdf'))


