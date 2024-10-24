from flask import Flask, request, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)

#pip install flask-debugtoolbar
app.config["SECRET_KEY"] = "Chickensarecool"
app.congif["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)

@app.route("/")
def home_page():
        return render_template("base.html")

#redirects
@app.route("/old-home-page")
def redirect_to_home():
    """redirects to new home page"""
    return redirect("/")

@app.route("/lucky")
def lucky_number():
    num = randint(1,20)
    return render_template("lucky.html", lucky_num = num)

compliments = ["cool", "tenacious", "nice", "warm", "thankful"]


#this page shows us the form
@app.route("/form")
def show_form():
    return render_template("form.html")


@app.route("/form2")
def show_form2():
    return render_template("form_2.html")

@app.route("/greet2")
def get_greeting2():
    username = request.args["username"]
    wants = request.args.get("wants_compliments")
    nice_things = sample(compliments, 3)
    return render_template("greet2.html", username = username, wants_compliments = wants, compliments=nice_things)

@app.route("/spell/<word>")
def spell_word(word):
    return render_template("spell_word.html", word = word)




@app.route("/greeting")
def get_greeting():
    username = request.args["username"]
    nice_thing = choice(compliments)
    return render_template("greeting.html", username = username, compliment = nice_thing)


@app.route("/hello")
def say_hello():
    return render_template("hello.html")

@app.route("/goodbye")
def say_bye():
    return "Goodbye"


@app.route("/search")
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    # use term to find db data that matches the term
    return f"<h1>Search results for: {term} {sort}</h1>"



"""
GET AND POST REQUESTS IN FLASk
"""

#@app.route("/myroute", methods = ["POST"])

@app.route("/post", methods = ["POST"])
def post_demo():
    return "YOU MADE A POST REQUEST"

#most commonly send a post request through a form, ajax, or curl

# curl -X POST

#form example

@app.route("/add-comment")
def add_comment_form():
    return """
    <form method ="POST">
    <input type = "text" placeholder = "comment" name = "comment"/>
    <input type = "text" placeholder = "username" name = "username"/>
    <button>Submit</button>
    </form>
"""

@app.route("/add-comment", methods = ["POST"])
def save_comment():
    comment = request.form["comment"]
    username = request.form["username"]

    return f"""
        <h1>Saved your comment</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Comment: {comment}</li>
        </ul>
            """

#request.form

#seeing a lot of request.form and request.args
#writing dynamic html in files is next based on requests or data from a database
#adding docstrings to functions too



"/r/SUBREDDIT_NAME"

#wrap the variable in the path into < brackets >

@app.route("/r/<subreddit>")
def show_subreddit(subreddit):
    return         f"<h1>Browsing the {subreddit} subreddit</h1>"

#whatever variable name is you need a matching parameter
#keyword argument func(person = "fdsafdsaf")

@app.route("/r/<subreddit>/comments/<int:post_id>")
def show_comments(subreddit,post_id):
    return f"Viewing comments for post {post_id} from {subreddit} subreddit"


POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo",
    3: "double rainbow",
    4: "YOLO"
}


@app.route("/posts/<int:id>") #have to include int because it defaults to a string value
def find_post(id):
    post = POSTS.get(id, "Post not found") #.get method you can provide a default value if it is not found
    return f"<p>{post}</p>"

#can have multiple variables in path names

#Query params vs URL Params

# URL parameter
# /shop/<toy>
# feels more like the subject of the home_page

# Query parameter
# /shop?toy=elmo
# Feels more like extra information about the page
# Often used when coming from form

# /r/<subreddit>/comments/

#query string is additional info