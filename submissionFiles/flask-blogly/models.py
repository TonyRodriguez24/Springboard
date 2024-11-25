from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)



"""Models for Blogly."""
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

    image_url = db.Column(db.String(400),
                          nullable = False,
                          unique = True)

