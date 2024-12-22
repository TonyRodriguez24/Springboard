"""Flask app for Cupcakes"""
from models import db, connect_db, Cupcake
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

#configure database

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '12345'

connect_db(app)

@app.route('/')
def index():
    cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return render_template('index.jinja', cupcakes = cupcakes)

@app.route('/api/cupcakes')
def list_cupcakes():
    cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=cupcakes)
    

@app.route('/api/cupcakes/<int:id>')
def get_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes', methods = ['POST'])
def add_cupcake():
    flavor = request.json['flavor']
    size = request.json['size']
    rating = request.json['rating']
    image = request.json.get('image', 'https://default.com/cupcake.jpg')
    new_cupcake = Cupcake(flavor = flavor, size = size, rating = rating, image = image)

    db.session.add(new_cupcake)
    db.session.commit()
    return jsonify(cupcake=new_cupcake.serialize()), 201