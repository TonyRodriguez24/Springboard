"""Madlibs Stories."""


class Story:
    """Madlibs story.

    To  make a story, pass a list of prompts, and the text
    of the template.

        >>> s = Story(["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """


    # "I love to {verb} a good {noun}"


    def __init__(self, story_id, story_title, prompt_list, story_template):
        """Create story with words and template text."""

        self.story_id = story_id
        self.story_title = story_title
        self.prompt_list = prompt_list
        self.story_template = story_template




    def generate(self, answers):
        """Substitute answers into text."""
        #**answers unpacks dictionary into key-value pairs so str.format() can be used
        final_story = self.story_template.format(**answers)
        
        return final_story


# Here's a story to get you started

my_story = Story(
    story_id = "Simple Story",
    story_title="A Simple Story by Tony",
    prompt_list=["verb", "noun"],
    story_template="My name is Tony and I like to {verb} {noun}"
)