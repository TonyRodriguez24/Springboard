"""Seed file from sample data"""

from models import Department, Employee, db
from app import app

#create tables
with app.app_context():
    db.drop_all()
    db.create_all()

    d1 = Department(dept_code = 'mktg', dept_name = 'marketing', phone = '2433244')
    d2 = Department(dept_code = 'acct', dept_name = 'accounting', phone = '3232322')
    river = Employee(name = "River Bottom", state = "NY", dept_code = 'mktg')
    tony = Employee(name = "Tony Rodriguez", state = "NY", dept_code = 'acct')
    summer = Employee(name = "Nick Moore", state = "FL", dept_code = 'mktg')
    summer = Employee(name = "Will Cannon", state = "OR", dept_code = 'mktg')
    summer = Employee(name = "summer", state = "OR", dept_code = 'mktg')


    db.session.add_all([d1,d2])
    db.session.commit()
    db.session.add_all([river, summer, tony])

    db.session.commit()
    print('database creation successful')