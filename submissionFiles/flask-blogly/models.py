from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)



"""User Model """
class User(db.Model):
    __tablename__ = "users"

    def toString(self):
        return f"{self.first_name} {self.last_name}"


    id = db.Column(db.Integer,
                   primary_key = True,
                   autoincrement = True)

    first_name = db.Column(db.String(30),
                           nullable = False # this can't be null      
    )

    last_name = db.Column(db.String(30),
                          nullable = False
    )

    image_url = db.Column(db.String(600),
                          nullable = False,
                          unique = True)
    


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, autoincrement = True, primary_key = True)

    title = db.Column(db.String(50), nullable = False, unique = True)

    content = db.Column(db.String(2000), nullable = False)

    created_at = db.Column(db.DateTime, nullable = False, default = db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) # use table name for referencing key


    #create relationship
    user = db.relationship('User', backref = 'posts')