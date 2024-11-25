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
    tony = User(first_name = "Tony", last_name = "Rodriguez", image_url = "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww")
    willy = User(first_name = "Will", last_name = "Cannon", image_url = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*")
    moore = User(first_name = "Nick", last_name = "Moore", image_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fcow&psig=AOvVaw2HytTzsx8__vLvptyO5QBC&ust=1732648908130000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMizs6ea-IkDFQAAAAAdAAAAABAE")

    #add the new objects to session 
    db.session.add(tony)
    db.session.add(willy)
    db.session.add(moore)

    #Commit
    db.session.commit()

    print("seed file works")