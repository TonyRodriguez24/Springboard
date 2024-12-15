"""Blogly application."""

from flask import Flask, render_template, request, redirect
from models import db, connect_db, User, Post, Tag

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/') # Redirect to list of users. (fix this in a later step).
def home(): 
   users = User.query.all()
   tags = Tag.query.all()
   posts = Post.query.all()

   return render_template('home.jinja2', users = users, tags = tags, posts = posts)

@app.route('/users') # Show all users. Make these links to view the detail page for the user. Have a link here to the add-user form.
def show_users():
    users = User.query.all()
    return render_template('home.jinja2', users = users)

@app.route('/users/new', methods = ['GET']) #Show an add form for users
def add_user_form():
    return render_template('user_form.jinja2')

@app.route('/users/new', methods = ['POST']) #Process the add form, adding a new user and going back to /users
def add_user():
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    image_url = request.form.get('image_url')

    new_user = User(first_name = first_name, last_name = last_name, image_url = image_url)

    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>') #Show information about the given user. Have a button to get to their edit page, and to delete the user.
def user_details(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('/user_details.jinja2', user = user)

@app.route('/users/<user_id>/edit') #Show the edit page for a user. Have a cancel button that returns to the detail page for a user, and a save button that updates the user.
def edit_user_form(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('/edit_user.jinja2', user = user)

@app.route('/users/<int:user_id>/edit', methods = ['POST']) #Process the edit form, returning the user to the /users page.
def edit_user(user_id):
    user = User.query.get_or_404(user_id)

    user.first_name = request.form.get('first_name')
    user.last_name = request.form.get('last_name')
    user.image_url = request.form.get('image_url')

    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>/delete', methods = ['POST']) #Delete the user
def delete_user(user_id):
    user = User.query.get_or_404(user_id)

    db.session.delete(user)
    db.session.commit()

    return redirect('/users')


#all posts stuff
@app.route('/users/<int:user_id>/posts/new')
def posts_form(user_id):
    user = User.query.get_or_404(user_id)
    posts = Post.query.filter(Post.user_id == user_id).all()
    print(posts)
    return render_template('posts_form.jinja2', posts = posts, user = user)

@app.route('/users/<int:user_id>/posts/new', methods = ['POST'])
def add_post(user_id):
    title = request.form.get('title')
    content = request.form.get('content')

    new_post = Post(title = title, content = content, user_id = user_id)

    db.session.add(new_post)
    db.session.commit()
    return redirect(f'/users/{user_id}')

@app.route('/posts/<int:post_id>')
def show_post(post_id):
    post = Post.query.get(post_id)
    return render_template('show_post.jinja2', post = post)


@app.route('/posts/<int:post_id>/edit')
def show_edit_post_form(post_id):
    post = Post.query.get(post_id)
    return render_template('edit_post.jinja2', post = post)



@app.route('/posts/<int:post_id>/edit', methods = ['POST'])
def edit_post(post_id):
    post = Post.query.get(post_id)
    post.title = request.form.get('title')
    post.content = request.form.get('content')

    db.session.commit()
    return redirect(f"/posts/{post_id}")

@app.route('/tags') # Lists all tags, with links to the tag detail page.
def list_tags():
    tags = Tag.query.all()
    return render_template('list_tags.jinja2', tags = tags)

@app.route('/tags/<int:tag_id>') # Show detail about a tag. Have links to edit form and to delete.
def tag_details(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('tags_details.jinja2', tag = tag)

@app.route('/tags/new') # Shows a form to add a new tag.
def show_tag_form():
    return render_template('tags_form.jinja2')


@app.route('/tags/new', methods = ['POST']) #Process add form, adds tag, and redirect to tag list.
def add_tag():
    name = request.form.get('name')
    new_tag = Tag(name = name)

    db.session.add(new_tag)
    db.session.commit()

    return redirect('/tags')


@app.route('/tags/<tag_id>/edit') #Show edit form for a tag.
def edit_tag_form(tag_id):
    tag = Tag.query.get(tag_id)
    return render_template('edit_tag.jinja2', tag = tag)

@app.route('/tags/<tag_id>/edit', methods = ['POST']) #Process edit form, edit tag, and redirects to the tags list.
def edit_tag(tag_id):

    tag = Tag.query.get(tag_id)
    tag.name = request.form.get('name')

    db.session.commit()

    return redirect('/tags')

    
# @app.route('/tags/<tag_id>/delete', methods = ['POST']) #Delete a tag.