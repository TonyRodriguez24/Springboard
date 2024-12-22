from flask import Flask, request, jsonify, render_template

from models import db, connect_db, Todo

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "oh-so-secret"

connect_db(app)

#RESTful
# GET
# POST
# PATCH
# DELETE

@app.route('/')
def index():
    todos = Todo.query.all()
    return render_template('index.jinja', todos = todos)


@app.route('/api/todos')
def list_todos():
    all_todos = [todo.serialize() for todo in Todo.query.all()]
    return jsonify(todos=all_todos)
    
@app.route('/api/todos/<int:id>')
def get_todo(id):
    todo = Todo.query.get_or_404(id)
    return jsonify(todo=todo.serialize())

#creating a todo
@app.route('/api/todos', methods = ['POST'])
def create_todo():
    new_todo = Todo(title = request.json['title'])
    db.session.add(new_todo)
    db.commit()
    reponse_json = jsonify(todo=new_todo.serialize())
    return (reponse_json, 201) #turns it into a dictionary that jsonify can use

#updating a single to-do, not entire thing
@app.route('/api/todos/<int:id>', methods = ['PATCH'])
def update_to_do(id):
    todo = Todo.query.get_or_404(id)
    todo.title = request.json.get('title', todo.title)
    todo.done = request.json.get('done', todo.done)
    db.session.commit()
    return jsonify(todo=todo.serialize())

@app.route('/api/todos/<int:id>', methods = ['DELETE'])
def delete_to_do(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return jsonify(message='deleted')


