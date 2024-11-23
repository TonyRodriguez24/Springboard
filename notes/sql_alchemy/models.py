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

    #helps show us information about an instance of a class
    def __repr__(self):
        """Show information about the pet"""

        p = self
        return f"<Pet id = {p.id}, name = {p.name}, species = {p.species}, hunger = {p.hunger}>"


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
    
    def greet(self):
        return f"Hi, I am {self.name} the {self.species}"
    
    def feed(self, amount = 20):
        """Update hunger based off of amount"""
        self.hunger -= amount
        self.hunger = max(self.hunger, 0)


    #if you change table for now just drop table in postgres shell
