from flask_sqlalchemy import SQLAlchemy 

#connected app to db
db = SQLAlchemy()

def connect_db(app):
    db.app = app 
    db.init_app(app)

# MODELS GO BELOW!
# where we define our schema essentially

#Example Model
class Pet(db.Model):
    """Pet"""

    __tablename__ = 'pets'

    id = db.Column( db.Integer,
                   primary_key=True,
                   autoincrement=True
                   )
    
    name = db.Column(db.String(50),
                     nullable=False, # can not be null
                     unique=True) # must be unique
    
    species = db.Column(db.String(30),
                       nullable=True)
    
    breed = db.Column(db.String(30))

    hunger = db.Column(db.Integer,
                       nullable=False,
                       default = 20)
    
    #if you change table for now just drop table in postgres shell
