"""Seed the file with sample data"""

from models import User, db
from app import app


# Ensure database operations happen within an app context
with app.app_context():

    #create all tables
    db.drop_all()
    db.create_all()

    #If table isn't empty, empty it
    User.query.delete()

    #Add sample User data
    tony = User(first_name = "Tony", last_name = "Rodriguez", image_url = "www.google.com")
    willy = User(first_name = "Will", last_name = "Cannon", image_url = "www.reddit.com")
    moore = User(first_name = "Nick", last_name = "Moore", image_url = "www.youtube.com")

    #add the new objects to session 
    db.session.add(tony)
    db.session.add(willy)
    db.session.add(moore)

    #Commit
    db.session.commit()

    print("seed file works")