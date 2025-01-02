from flask import Flask, render_template, redirect, session, flash
from models import connect_db, db, User, Tweet
from forms import TweetForm, UserForm
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///auth_demo"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "abc123"


connect_db(app)

@app.route('/')
def home_page():
    return render_template('index.jinja')

@app.route('/tweets', methods = ['GET', 'POST'])
def show_tweets():
    if 'user_id' not in session:
        flash('Please login first', 'danger')
        return redirect('/')
    
    form = TweetForm()
    all_tweets = Tweet.query.all()

    if form.validate_on_submit():
        text = form.text.data
        new_tweet = Tweet(text=text, user_id=session['user_id'])
        db.session.add(new_tweet)
        db.session.commit()
        flash('Tweet created', 'success')
        return redirect('/tweets')

    return render_template('tweets.jinja', form = form, tweets=all_tweets)


@app.route('/tweets/<int:id>', methods = ['POST'])
def delete_tweet(id):
    """Delete tweet"""
    if 'user_id' not in session:
        flash('Please login first')
        return redirect('/')

    tweet = Tweet.query.get_or_404(id)
    if tweet.user_id == session['user_id']:
        db.session.delete(tweet)
        db.session.commit()

        flash('Tweet successfully deleted', 'success')
        return redirect('/tweets')
    
    flash("You don't have permission to do that", 'error')
    return redirect('/tweets')

@app.route('/register', methods = ['GET', 'POST'])
def register_user():
    form = UserForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        new_user = User.register(username, password)

        db.session.add(new_user)
        try:
            db.session.commit()
        except IntegrityError:
            form.username.errors.append('Username taken. Please chose another')
            return render_template('register.jinja', form = form)

        session['user_id'] = new_user.id
        flash('Successfully created your account!', 'success')

        return redirect('/tweets')
    else:
        return render_template('register.jinja', form = form)

@app.route('/login', methods = ['GET', 'POST'])
def login_user():
    form = UserForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password) 
        if user:
            flash(f"Welcome back {user.username}", 'success')
            session['user_id'] = user.id
            return redirect('/tweets')
        else:
            form.username.errors = ['Invalid username/password']

    return render_template('login.jinja', form = form)

@app.route('/logout')
def logout_user():
    session.pop('user_id')
    flash('Goodbye!', 'success')
    return redirect('/')

