"""Seed the file with sample data"""
from sqlalchemy import text
from models import User, db, Post, Tag
from app import app


# Ensure database operations happen within an app context
with app.app_context():

    db.session.execute(text("DROP TABLE IF EXISTS posts_tags CASCADE;"))  # Drop the association table
    db.session.execute(text("DROP TABLE IF EXISTS posts CASCADE;"))       # Drop the posts table
    db.session.execute(text("DROP TABLE IF EXISTS tags CASCADE;"))        # Drop the tags table
    db.session.execute(text("DROP TABLE IF EXISTS users CASCADE;"))  
    db.session.commit()

    db.create_all() 


    #If table isn't empty, empty it



    #Add sample User data
    tony = User(first_name = "Tony", last_name = "Rodriguez", image_url = "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww")
    willy = User(first_name = "Will", last_name = "Cannon", image_url = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*")
    moore = User(first_name = "Nick", last_name = "Moore", image_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fcow&psig=AOvVaw2HytTzsx8__vLvptyO5QBC&ust=1732648908130000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMizs6ea-IkDFQAAAAAdAAAAABAE")

    #add the new objects to session 
    db.session.add_all([tony, willy, moore])
    db.session.commit()

    posts = [
    Post(title = 'Post about cats', content = 'Cats are independent, agile, and curious creatures, known for their playful behavior and quiet companionship. They have been domesticated for thousands of years, often revered in ancient cultures for their grace and ability to control pests. Modern cats are beloved pets, appreciated for their soothing purrs, unique personalities, and ability to adapt to various living environments. Their low-maintenance nature makes them ideal for many households, whether in bustling cities or quiet countryside homes.', user_id = tony.id),
    Post(title = 'Chinchillas', content = 'Cats are independent, agile, and curious creatures, known for their playful behavior and quiet companionship. They have been domesticated for thousands of years, often revered in ancient cultures for their grace and ability to control pests. Modern cats are beloved pets, appreciated for their soothing purrs, unique personalities, and ability to adapt to various living environments. Their low-maintenance nature makes them ideal for many households, whether in bustling cities or quiet countryside homes.', user_id = tony.id),
    Post(title = 'Post about Porcupines', content = 'Cats are independent, agile, and curious creatures, known for their playful behavior and quiet companionship. They have been domesticated for thousands of years, often revered in ancient cultures for their grace and ability to control pests. Modern cats are beloved pets, appreciated for their soothing purrs, unique personalities, and ability to adapt to various living environments. Their low-maintenance nature makes them ideal for many households, whether in bustling cities or quiet countryside homes.', user_id = tony.id),
    Post(title = 'Dogs', content = 'Dogs are loyal, social, and highly trainable animals. They thrive on companionship, forming deep bonds with their human families. Dogs serve in various roles, from household pets to working animals, excelling as guide dogs, therapy animals, and protectors. Their energy and enthusiasm bring joy and activity to any household, while their unwavering devotion makes them cherished members of the family.', user_id = willy.id),
    Post(title = 'Dinosaurs', content = 'Dogs are loyal, social, and highly trainable animals. They thrive on companionship, forming deep bonds with their human families. Dogs serve in various roles, from household pets to working animals, excelling as guide dogs, therapy animals, and protectors. Their energy and enthusiasm bring joy and activity to any household, while their unwavering devotion makes them cherished members of the family.', user_id = willy.id),
    Post(title = 'Rabbits', content = 'Dogs are loyal, social, and highly trainable animals. They thrive on companionship, forming deep bonds with their human families. Dogs serve in various roles, from household pets to working animals, excelling as guide dogs, therapy animals, and protectors. Their energy and enthusiasm bring joy and activity to any household, while their unwavering devotion makes them cherished members of the family.', user_id = willy.id),
    Post(title = 'Cows', content = 'Cows are gentle and calm animals, playing an essential role in agriculture and rural economies. They are a primary source of milk, meat, and leather, supporting human nutrition and industry. Beyond their practical contributions, cows are often seen grazing peacefully in pastures, symbolizing the simplicity of rural life. Their importance extends to cultural and religious significance in many societies, highlighting their deep connection to human history and livelihood.', user_id = moore.id),
    Post(title = 'Hamsters', content = 'Cows are gentle and calm animals, playing an essential role in agriculture and rural economies. They are a primary source of milk, meat, and leather, supporting human nutrition and industry. Beyond their practical contributions, cows are often seen grazing peacefully in pastures, symbolizing the simplicity of rural life. Their importance extends to cultural and religious significance in many societies, highlighting their deep connection to human history and livelihood.', user_id = moore.id),
    Post(title = 'Owls', content = 'Cows are gentle and calm animals, playing an essential role in agriculture and rural economies. They are a primary source of milk, meat, and leather, supporting human nutrition and industry. Beyond their practical contributions, cows are often seen grazing peacefully in pastures, symbolizing the simplicity of rural life. Their importance extends to cultural and religious significance in many societies, highlighting their deep connection to human history and livelihood.', user_id = moore.id)
    ]

    db.session.add_all(posts)
    db.session.commit()

    tags = [Tag(id = 1, name = 'funny'),
            Tag(id = 2, name = 'silly'),
            Tag(id = 3, name = 'sad'),
            Tag(id = 4, name = 'animals')
    ]
    #add the new objects to session 
    db.session.add_all(tags)
    db.session.commit()

    print("seed file works")