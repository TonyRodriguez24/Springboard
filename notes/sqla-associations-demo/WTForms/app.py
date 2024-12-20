from flask import Flask, render_template, redirect
from models import Employee, Department, db, connect_db
from forms import AddSnackForm, EmployeeForm, states

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
    
@app.route('/employees/new', methods = ['GET', 'POST']) 
def add_employee():
    form = EmployeeForm()
    depts = db.session.query(Department.dept_code, Department.dept_name).all() #specify what we want not the entire model
    form.dept_code.choices = [(dept_code, dept_name) for dept_code, dept_name in depts]
    form.state.choices = states

    if form.validate_on_submit(): #for post request
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        employee = Employee(name = name, state = state, dept_code = dept_code)
        db.session.add(employee)
        db.session.commit()

        return redirect('/phones')
    else: #for get request
        return render_template('add_employee_form.jinja', form = form)

@app.route('/employees/<int:id>/edit', methods = ['GET', 'POST'])
def edit_employee(id):
    employee = Employee.query.get_or_404(id)
    form = EmployeeForm(obj = employee) #needs to have matching attribute to model
    depts = db.session.query(Department.dept_code, Department.dept_name).all() #specify what we want not the entire model
    form.dept_code.choices = [(dept_code, dept_name) for dept_code, dept_name in depts]
    form.state.choices = states

    if form.validate_on_submit():
        employee.name = form.name.data
        employee.state = form.state.data
        employee.dept_code = form.dept_code.data

        db.session.commit()

        return redirect('/phones')
    else:
        return render_template('edit_employee_form.jinja', form = form)