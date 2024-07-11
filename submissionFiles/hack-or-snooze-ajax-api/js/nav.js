"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

//this shows all the stories

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show story submit form when click on "submit" */
function navSubmitStoryClick(e){
  console.debug("navSubmitStoryClick", e);
  //confused about hiding the page components
  hidePageComponents();
  //show the story submit form
  $submitForm.show();
  $allStoriesList.show();
}

$navSubmitStory.on("click", navSubmitStoryClick);

//favorites
function navFavoritesClick(e){
  console.debug("navFavoritesClick", e);
  hidePageComponents();
  putFavoritesListOnPage();
}

//my stories

function navMyStoriesClick(e){
  console.debug("navMyStoriesClick", e);
  hidePageComponents();
  putUserStoriesOnPage();
}

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
