"""Seed file to make sample data for db."""

from models import Department, Employee, Project, EmployeeProject, db
from app import app

# Create all tables
with app.app_context():
    db.drop_all()
    db.create_all()

    # Clear tables for a fresh seed
    EmployeeProject.query.delete()
    Employee.query.delete()
    Department.query.delete()
    Project.query.delete()

    # Add sample departments
    df = Department(dept_code='fin', dept_name='Finance', phone='555-1000')
    dl = Department(dept_code='legal', dept_name='Legal', phone='555-2222')
    dm = Department(dept_code='mktg', dept_name='Marketing', phone='555-9999')

    db.session.add_all([df, dl, dm])
    db.session.commit()

    # Add sample employees
    leonard = Employee(name='Leonard', dept=dl)
    liz = Employee(name='Liz', dept=dl)
    maggie = Employee(name='Maggie', state='DC', dept=dm)
    nadine = Employee(name='Nadine')  # Employee with no department

    db.session.add_all([leonard, liz, maggie, nadine])
    db.session.commit()

    # Add sample projects and associate employees
    pc = Project(proj_code='car', proj_name='Design Car')
    ps = Project(proj_code='server', proj_name='Deploy Server')

    db.session.add_all([pc, ps])
    db.session.commit()

    # Add EmployeeProject associations (linking employees and projects)
    ep1 = EmployeeProject(emp_id=liz.id, proj_code=pc.proj_code, role='Chair')
    ep2 = EmployeeProject(emp_id=maggie.id, proj_code=pc.proj_code)
    ep3 = EmployeeProject(emp_id=liz.id, proj_code=ps.proj_code)
    ep4 = EmployeeProject(emp_id=leonard.id, proj_code=ps.proj_code, role='Auditor')

    db.session.add_all([ep1, ep2, ep3, ep4])
    db.session.commit()

    print('Database creation successful')
