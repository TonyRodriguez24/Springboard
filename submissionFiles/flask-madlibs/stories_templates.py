from stories import Story

adventure_story = Story(story_id="adventure",
                        story_title = "Adventure Story",
                        prompt_list = ["place", "adjective", "animal", "verb"],
                        story_template= "I went to {place} and saw a {adjective} {animal} and he likes to {verb}")

space_story = Story(
    story_id="space",
    story_title="A Space Journey",
    prompt_list=["planet", "noun", "verb", "adjective"],
    story_template="On my trip to {planet}, I found a {adjective} {noun} that could {verb}."
)

fairy_tale_story = Story(
    story_id="fairy_tale",
    story_title="A Fairy Tale",
    prompt_list=["character", "place", "adjective", "magic_thing"],
    story_template="Once upon a time, {character} lived in {place} with a {adjective} {magic_thing}."
)

stories = {
    "adventure":adventure_story,
    "space": space_story,
    "fairy_tale": fairy_tale_story
}