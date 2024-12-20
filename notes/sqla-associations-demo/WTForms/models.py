from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Function to connect the app to the database
def connect_db(app):
    db.app = app
    db.init_app(app)


# MODELS

class Department(db.Model):
    """Department Model"""

    __tablename__ = "departments"

    dept_code = db.Column(db.Text, primary_key=True)
    dept_name = db.Column(db.Text, nullable=False, unique=True)
    phone = db.Column(db.Text)

    # Relationship to Employee
    employees = db.relationship('Employee', back_populates='dept')

    def __repr__(self):
        return f"<Department {self.dept_code} {self.dept_name} {self.phone}>"


class Employee(db.Model):
    """Employee Model"""

    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    state = db.Column(db.Text, nullable=False, default='CA')
    dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code'))

    # Relationship to Department
    dept = db.relationship('Department', back_populates='employees')

    # Many-to-Many Relationship with Project
    projects = db.relationship('Project', secondary='employees_projects', back_populates='employees')

    def __repr__(self):
        return f"<Employee {self.name} {self.state} {self.dept_code}>"


class Project(db.Model):
    """Project Model"""

    __tablename__ = 'projects'

    proj_code = db.Column(db.Text, primary_key=True)
    proj_name = db.Column(db.Text, nullable=False, unique=True)

    # Many-to-Many Relationship with Employee
    employees = db.relationship(
        'Employee',
        secondary='employees_projects',
        back_populates='projects'
    )

    def __repr__(self):
        return f"<Project {self.proj_code} {self.proj_name}>"


class EmployeeProject(db.Model):
    """Association Table for Employee and Project"""

    __tablename__ = 'employees_projects'

    emp_id = db.Column(db.Integer, db.ForeignKey('employees.id'), primary_key=True)
    proj_code = db.Column(db.Text, db.ForeignKey('projects.proj_code'), primary_key=True)
    role = db.Column(db.Text)

    def __repr__(self):
        return f"<EmployeeProject Employee ID: {self.emp_id}, Project Code: {self.proj_code}, Role: {self.role}>"


# QUERY FUNCTIONS

def get_directory():
    """Fetch all employees and their departments (if any)."""
    all_emps = Employee.query.all()

    for emp in all_emps:
        if emp.dept:
            print(emp.name, emp.dept.dept_name, emp.dept.phone)
        else:
            print(emp.name, "No Department")


def get_directory_join():
    """Fetch employee name, department name, and phone using an INNER JOIN."""
    directory = db.session.query(
        Employee.name, Department.dept_name, Department.phone
    ).join(Department).all()

    for name, dept, phone in directory:
        print(name, dept, phone)


def get_directory_join_class():
    """Fetch employee and department objects using an INNER JOIN."""
    directory = db.session.query(Employee, Department).join(Department).all()

    for emp, dept in directory:
        print(emp.name, dept.dept_name, dept.phone)


def get_directory_all_join():
    """Fetch all employees with their department details, using an OUTER JOIN."""
    directory = db.session.query(
        Employee.name, Department.dept_name, Department.phone
    ).outerjoin(Department).all()

    for name, dept, phone in directory:
        print(name, dept if dept else "No Department", phone if phone else "No Phone")
