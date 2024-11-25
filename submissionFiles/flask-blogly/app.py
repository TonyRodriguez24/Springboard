"""Blogly application."""

from flask import Flask, render_template, request, redirect
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/') # Redirect to list of users. (fix this in a later step).
def home(): 
    users = User.query.all()
    return render_template('home.html', users = users)

@app.route('/users') # Show all users. Make these links to view the detail page for the user. Have a link here to the add-user form.

@app.route('/users/new') #Show an add form for users
def add_user():
    return render_template('user_form.html')

# @app.route('/users/new', methods = ['POST']) #Process the add form, adding a new user and going back to /users
#     # return redirect('/users')

# @app.route('/users/<user_id') #Show information about the given user. Have a button to get to their edit page, and to delete the user.

# @app.route('/users/<user_id>/edit') #Show the edit page for a user. Have a cancel button that returns to the detail page for a user, and a save button that updates the user.

# @app.route('/users/<user_id>/edit', methods = ['POST']) #Process the edit form, returning the user to the /users page.

# @app.route('/users/<user_id>/delete', methods = ['POST']) #Delete the user
