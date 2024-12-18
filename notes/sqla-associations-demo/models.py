"""Sample file demonstrating SQLAlchemy joins & relationships."""

from flask_sqlalchemy import SQLAlchemy

# This is the connection to the database; we're getting this through
# the Flask-SQLAlchemy helper library. On this, we can find the `session`
# object, where we do most of our interactions (like committing, etc.)

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)



##############################################################################
# Model definitions


class Department(db.Model):
    """One department has many employees"""

    __tablename__ = "departments"

    dept_code = db.Column(db.Text, primary_key = True)
    dept_name = db.Column(db.Text, nullable = False, unique = True)
    phone = db.Column(db.Text)

    def __repr__(self):
        return f"<Department {self.dept_code} {self.dept_name} {self.phone}"


class Employee(db.Model):
    """Employee Model"""

    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    name = db.Column(db.Text, nullable = False, unique = True)
    state = db.Column(db.Text, nullable = False, default = "NY")
    #setting up foreign key

    dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code')) #table name then column

    dept = db.relationship('Department', backref = 'employees')  # name of model is passed for relationship and for backref, name is variable you want
    #sets up the relationship both ways instead of writing it twice

    def __repr__(self):
        return f"<Employee {self.name} {self.state} {self.dept_code}"
    




#this uses the relationship, this is inefficient. Making joins are better    
def get_directory():
    employees = Employee.query.all()

    for employee in employees:
        if employee.dept is not None:
            print(employee.name, employee.dept.dept_name, employee.dept.phone)
        else:
            print(employee.name)

#joining
def get_directory_join():
    """Show employees with a join"""
    directory = db.session.query(Employee.name, Department.dept_name, Department.phone).join(Department).all()

    #unpacking a tuple
    for name, dept, phone in directory:
        print(name, dept, phone)

def get_directory_join2():
    """Show employees with a join"""
    directory = db.session.query(Employee, Department).join(Department).all()

    #unpacking a tuple
    for emp, dept in directory:
        print(emp.name, dept.dept_name, dept.phone)

def get_directory_all_join():
    """Show employees with a join"""
    directory = db.session.query(Employee.name, Department.dept_name, Department.phone).outerjoin(Department).all()

    #unpacking a tuple
    for name, dept, phone in directory:
        print(name, dept, phone)

#many to many using sql alchemy
#movies, actors, roles(movies_actors
#employees, projects, employees_projects
