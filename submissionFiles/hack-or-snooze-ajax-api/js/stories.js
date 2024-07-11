"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

function putFavoritesListOnPage() {
  console.debug("putFavoritesListOnPage");

  //empty favorites list
  $favoritedStories.empty();

  //check to see if user has any favorites if they do then loop through them and generate HTML for them
  if (currentUser.favorites.length === 0) {
    $favoritedStories.append("<h5>No favorites added!</h5>");
  } else {
    // loop through all of users favorites and generate HTML for them
    for (let story of currentUser.favorites) {
      //the generate story markup function is used to generate the HTML after pulling the story data
      const $story = generateStoryMarkup(story);
      //then add that story to the favorites list
      $favoritedStories.append($story);
    }
  }

  $favoritedStories.show();
}


async function newStorySubmission(e){
  console.debug("newStorySubmission", e);
  e.preventDefault();

  //get the data from the form
  const title = $("#title").val();
  const author = $("#author").val();
  const url = $("#url").val();

  const username = currentUser.username;
  const storyData = {
    title,
    author,
    url,
    username
  };

  //we await the storyList.addStory function to add the story to the list of stories
  const story = await storyList.addstory(currentUser, storyData);

  //generate the story markup and then add it to the list of stories
  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  //hide the form and reset it
  //what do slow and reset do
  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");

  //slow is a parameter that can be passed to the slideUp function to make the form slide up slowly
  //reset is a function that resets the form to its default values
  }

$submitForm.on("submit", newStorySubmission);
