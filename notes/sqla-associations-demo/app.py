from flask import Flask, render_template, redirect
from models import Employee, Department, db, connect_db, get_directory_join2
from VideoDemo.forms import AddSnackForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
# app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"

connect_db(app)

@app.route('/')
def home_page():
    return render_template('home.jinja')

@app.route('/phones')
def list_phones():
    employees = Employee.query.all()
    return render_template('phones.jinja', employees = employees)


@app.route('/snacks/new', methods = ['GET', 'POST'])
def add_snack():
    form = AddSnackForm()

    #checking for CSRF token
    if form.validate_on_submit():
        print(form.name.data)
        print(form.price.data)
        #is this a post request AND is the token valid
        return redirect('/phones')
    else:
        return render_template('add_snack_form.jinja', form = form)