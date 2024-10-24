from flask import Flask, render_template, request
from stories_templates import stories

app = Flask(__name__)

app.config["SECRET_KEY"] = "secret"

@app.route("/")
def story_list():
    """We display the stories to choose from"""

    return render_template("select_story.html", stories = stories)


@app.route("/story/<story_id>/form", methods = ["GET"])
def show_prompts(story_id):
    """Display the form chosen from the list for specific story"""

    prompts = stories.get(story_id).prompt_list

    return render_template("story_form.html", prompts = prompts, story_id = story_id)



@app.route("/story/<story_id>", methods = ["POST"])
def finished_story(story_id):
    data = request.form.to_dict()

    story = stories.get(story_id)
    generated_story = story.generate(data)

    return render_template("finished_story.html", story_id = story_id.capitalize(), story = generated_story)

