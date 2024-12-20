from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, URLField, TextAreaField
from wtforms.validators import InputRequired

class PetForm(FlaskForm):

    name = StringField('Name', validators=[InputRequired()])
    species = StringField('Species', validators=[InputRequired()])
    photo_url = URLField('Insert URL', validators=[InputRequired()])
    age = IntegerField('Age', validators=[InputRequired()])
    notes = TextAreaField('Any notes about your pet!')
