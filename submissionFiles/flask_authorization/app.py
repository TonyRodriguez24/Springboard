from flask import Flask, redirect, render_template, flash, session
from models import User, Feedback
from db import db, connect_db
from forms import RegisterUserForm, LoginUserForm, FeedbackForm

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret_keythony'
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///login_register"

connect_db(app)

@app.route('/')
def home():
    return render_template('home.jinja')

@app.route('/register', methods = ['GET', 'POST'])
def register_user():
    form = RegisterUserForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        #implement this as a class method in my user model, try to create new user
        new_user = User.register(username = username, password = password, email = email, first_name = first_name, last_name = last_name)
        db.session.add(new_user)
        db.session.commit()

        session['user_username'] = new_user.username
        flash('User successfully created', 'success')
        return redirect(f'users/{new_user.username}')
    else:
        return render_template('register.jinja', form = form)
    
@app.route('/login', methods = ['GET', 'POST'])
def login_user():
    form = LoginUserForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate_user(username=username, password = password)
        #if this returns true then we welcome the user and then add user id to the session
        if user:
            flash(f'Welcome back {user.username}!', 'success')
            session['user_username'] = user.username
            return redirect(f'/users/{user.username}')
        else:
            flash('Invalid username or password', 'danger')
            return redirect('/login')
    
    return render_template('login.jinja', form = form)

@app.route('/users/<username>')
def secret_route(username):
    if 'user_username' not in session or session['user_username'] != username:
        flash('Access denied', 'danger')
        return redirect('/')
    
    user = User.query.get(username)
    feedback = Feedback.query.filter_by(username=username).all()

    return render_template('secret.jinja', user = user, feedback = feedback)

@app.route('/users/<username>/delete', methods = ['POST'])
def delete_user(username):
    if session.get('user_username') != username:
        flash('You do not have permission to do that', 'danger')
        return redirect('/login')
    
    user = User.query.get(username)
    if not user:
        flash('User not found')
        return redirect('/')

    db.session.delete(user)
    db.session.commit()
    
    session.pop('user_username')
    flash('Account successfully deleted' , 'success')
        
    
    return redirect('/')


@app.route('/users/<username>/add', methods = ['GET', 'POST'])
def add_feedback(username):
    if session.get('user_username') != username:
        flash('You do not have permission to view this', 'danger')
        return redirect('/')
    
    form = FeedbackForm()
    user = User.query.get(username)
    


    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        username = form.username.data

        new_feedback = Feedback(title = title, content = content, username = username) # type: ignore
        db.session.add(new_feedback)
        db.session.commit()

        flash('Feedback has successfully been added', 'success')
        return redirect(f'/users/{username}')
    
    return render_template('feedback.jinja', form = form, user = user)

    











@app.route('/logout')
def logout():
    session.pop('user_username')
    flash('User has successfully been logged out', 'primary')
    return redirect('/')
