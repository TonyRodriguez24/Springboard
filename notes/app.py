from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home_page():
    return "Welcome to my simple application"

print("hi")

@app.route("/hello")
def say_hello():
    html ="""
    <html>
        <body>
            <h1>Hello</h1>
        </body>
    </html>
    """
    return html

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