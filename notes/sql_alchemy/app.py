from flask import Flask, request, render_template, redirect, flash, session 
from sqlalchemy import text
from models import db, connect_db, Pet

app = Flask(__name__)

#here is where we configure which database we are using after postgresql:///
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
app.config['SECRET_KEY'] = "fdsfsdf"
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def home_page():
    """Shows home page"""
    return render_template('home.html')

@app.route('/movies')
def list_movies():
    """Fetch and display all movies."""
    result = db.session.execute(text("SELECT * FROM movies"))
    movies = result.fetchall()  # Fetch all rows from the result
    return render_template('movies.html', movies=movies)
