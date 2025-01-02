from db import db
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = 'users'

    username = db.Column(db.String(20), primary_key = True, unique = True)
    password = db.Column(db.Text, nullable = False)
    email = db.Column(db.String(50), unique = True, nullable = False)
    first_name = db.Column(db.String(30), nullable = False)
    last_name = db.Column(db.String(50), nullable = False)

    #adding cascade
    feedback = db.relationship('Feedback', backref = 'user', cascade = 'all, delete-orphan')

    @classmethod
    def register(cls, username, password, email, first_name, last_name):
        """Register the user with the information passed through the form, hashing the password and returning user info"""

        hashed_password = bcrypt.generate_password_hash(password)

        #turn the byte string into a utf8 string
        hashed_password_utf8 = hashed_password.decode('utf8')

        #then return instance of class with hashed password
        return cls(username=username, password = hashed_password_utf8, email = email, first_name = first_name, last_name = last_name) # type: ignore
    
    @classmethod
    def authenticate_user(cls, username, password): #a class method because we are querying the entire database to find a user we are not interacting with an instance of the user class
        """Validating that the user exists and that the hashed passwords match"""

        #search the database for a user that has a matching username
        user = User.query.filter_by(username = username).first()

        if user and bcrypt.check_password_hash(user.password, password):
            #we return the user if the user exists and the check password method using bcrypt returns True
            return user
        else:
            return False
        

class Feedback(db.Model):
    __tablename__ = 'feedback'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    title = db.Column(db.String(100), nullable = False)
    content = db.Column(db.Text, nullable = False)
    username = db.Column(db.String(20), db.ForeignKey('users.username'))