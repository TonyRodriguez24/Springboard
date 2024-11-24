from flask import Flask, request, render_template, redirect, flash, session 
from models import db, connect_db, Pet

app = Flask(__name__)

#here is where we configure which database we are using after postgresql:///
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
app.config['SECRET_KEY'] = "fdsfsdf"
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def list_pets():
    """Shows list of all pets in our database"""
    pets = Pet.query.all()
    return render_template('list.html', pets = pets)

@app.route('/', methods = ['POST'])
def create_pets():
    #extract form data
    name = request.form['name']
    species = request.form['species']
    hunger = request.form['hunger']
    hunger = int(hunger) if hunger else None

    #add pet to db
    new_pet = Pet(name = name, species = species, hunger = hunger)
    db.session.add(new_pet)
    db.session.commit()

    return redirect(f"/{new_pet.id}")

@app.route('/<int:pet_id>')
def show_pet(pet_id):
    """Show details about a single pet"""
    pet = Pet.query.get_or_404(pet_id)
    return render_template("details.html", pet = pet)

@app.route('/species/<species_id>')
def show_pet_by_species(species_id):
    pets = Pet.get_by_species(species_id)
    return render_template("species.html", pets = pets, species = species_id)








# @app.route('/movies')
# def list_movies():
#     """Fetch and display all movies."""
#     result = db.session.execute(text("SELECT * FROM movies"))
#     movies = result.fetchall()  # Fetch all rows from the result
#     return render_template('movies.html', movies=movies)
