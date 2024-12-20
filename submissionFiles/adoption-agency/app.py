from flask import Flask, render_template, redirect
from models import Pet, connect_db, db
from flask_debugtoolbar import DebugToolbarExtension
from forms import PetForm

#from forms import 
app = Flask(__name__)

#config db
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pets_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

#initialize toolbar
toolbar = DebugToolbarExtension(app)

#connect app
connect_db(app)

@app.route('/')
def home():
    """Home route where we will have list of pets and a link to details page for each pet"""
    pets = Pet.query.all()
    return render_template('home.jinja', pets = pets)

@app.route('/add', methods = ['GET', 'POST'])
def add_pet_form():
    """Displays the form for adding a pet redirects to home once finished"""
    form = PetForm()
    if form.validate_on_submit():
        new_pet = Pet(name = form.name.data, species = form.species.data, photo_url = form.photo_url.data, age = form.age.data, notes = form.notes.data)
        db.session.add(new_pet)
        db.session.commit()
        return redirect('/')
    else:
        return render_template('add_pet_form.jinja', form = form)
    
@app.route('/pets/<int:pet_id>')
def pet_details(pet_id):
    """Shows individual details for each pet"""
    pet = Pet.query.get_or_404(pet_id)

    return render_template('pet_details.jinja', pet = pet)

@app.route('/pets/<int:pet_id>/edit', methods = ['GET', 'POST'])
def edit_pet(pet_id):
    """Allows user to edit pet and save changes"""
    pet = Pet.query.get_or_404(pet_id)

    #initialize the form and populate it with data by passing obj = pet
    form = PetForm(obj = pet)

    if form.validate_on_submit():
        pet.name = form.name.data
        pet.species = form.species.data
        pet.photo_url = form.photo_url.data
        pet.age = form.age.data
        pet.notes = form.notes.data

        db.session.commit()
        return redirect(f'/pets/{pet_id}')
    else:
        return render_template('edit_pet_form.jinja', form = form, pet = pet)
    