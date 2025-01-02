from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy import Nullable

db = SQLAlchemy()

bcrypt = Bcrypt()


def connect_db(app):
    """Connect to database."""
    db.init_app(app)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

    username = db.Column(db.Text, nullable = False, unique = True)

    password = db.Column(db.Text, nullable = False)

    

    

    @classmethod #called on the user class because it is going to create a new user doesnt belong to an instance of the user model
    def register(cls, username, pwd):
        """Register user with a hashed password using bcrypt and then return that user"""

        hashed = bcrypt.generate_password_hash(pwd)

        #turn bytestring (b'afdsaf') into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        #return instance of user with usernmae and hashed password
        return cls(username=username, password=hashed_utf8) # type: ignore

    @classmethod
    def authenticate(cls, username, pwd):
        """Validate that the user exists and that the password is correct
        
        Return user if valid, else return False
        """

        user = User.query.filter_by(username=username).first()

        if user and bcrypt.check_password_hash(user.password, pwd):
            #return the instance of user
            return user
        else:
            return False
        
class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key= True, autoincrement = True)
    text = db.Column(db.Text, nullable = False)
    user_id =db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', backref = "tweets")

