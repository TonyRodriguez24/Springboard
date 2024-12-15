from flask import Flask, render_template
from models import Employee, Department, db, connect_db, get_directory_join2

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
# app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"

connect_db(app)


@app.route('/phones')
def list_phones():
    employees = Employee.query.all()
    return render_template('phones.html', employees = employees)