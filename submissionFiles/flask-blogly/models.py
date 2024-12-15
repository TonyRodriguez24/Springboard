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

    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete = 'CASCADE')) # use table name for referencing key

    #create relationship
    user = db.relationship('User', backref = 'posts')

    tags = db.relationship('Tag', secondary = 'posts_tags', back_populates = 'posts')


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    name = db.Column(db.Text, unique = True)

    posts = db.relationship('Post', 
                           secondary = 'posts_tags',
                           back_populates= 'tags')

class PostTag(db.Model):

    __tablename__ = 'posts_tags'

    post_id = db.Column(db.Integer, db.ForeignKey('posts.id', ondelete = 'CASCADE'), primary_key = True)

    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id', ondelete = 'CASCADE'), primary_key = True)
