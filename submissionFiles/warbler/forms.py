from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField
from wtforms.validators import DataRequired, Email, Length


class MessageForm(FlaskForm):
    """Form for adding/editing messages."""

    text = TextAreaField('text', validators=[DataRequired()])


class UserAddForm(FlaskForm):
    """Form for adding users."""

    username = StringField('Username', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[Length(min=6)])
    image_url = StringField('(Optional) Image URL')


class LoginForm(FlaskForm):
    """Login form."""

    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])

class ProfileEditForm(FlaskForm):
    username = StringField('Change username', validators=[DataRequired()])
    email = StringField('Change Email', validators=[DataRequired(), Email()])
    image_url = StringField('Add an image by placing image URL here')
    password = PasswordField('Password', validators=[Length(min=6)])
    bio = TextAreaField('Enter your bio')
    location = StringField('Enter your location')