from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, RadioField, SelectField
from wtforms.validators import InputRequired, Email, Optional


states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]


class AddSnackForm(FlaskForm):
    """Form for adding snacks"""
    email = StringField('Email', validators=[Optional(), Email()])
    name = StringField("Snack Name", validators=[InputRequired()])
    price = FloatField("Price in USD")
    is_healthy = BooleanField("This is a healthy snack")

    category = RadioField("Category", choices = [
        ('IC','Ice Cream'),
        ('chips', 'potato chips')
        ])
    
    priority = SelectField('Priority Code', choices = [
        (1,'High'),
        (2, 'Low')],
        coerce=int)

class EmployeeForm(FlaskForm):
    name = StringField("Employee Name", validators = [InputRequired(message="Name can not be blank")])
    state = SelectField("State")
    dept_code = SelectField("Department Code")
    