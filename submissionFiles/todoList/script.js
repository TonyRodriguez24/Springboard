//select form
const form = document.querySelector("form");
//select ul
const ul = document.querySelector("#list");

//prevent default behavior of form which is to refresh page

//add event listener to form for addition
form.addEventListener("click", function (event) {
  //get target element
  event.preventDefault();
  const targetElement = event.target;

  //check if element is a button and has text of Add
  if (targetElement.tagName === "BUTTON" && targetElement.innerText === "Add") {
    //create LI element
    const newLi = document.createElement("li");
    newLi.classList.add("list-item");
    //create label for checkbox element
    const newCheckBoxLabel = document.createElement("label");
    newCheckBoxLabel.classList.add("visually-hidden");
    //create checkbox element
    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");

    //get input text value
    const userInput = document.querySelector("#todo-item").value;

    //create span element for the text adn set the text to the input value
    const inputText = document.createElement("span");
    inputText.innerText = userInput;

    //clear input field
    document.querySelector("#todo-item").value = "";
    document.querySelector("#todo-item").focus();

    //create remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.type = "button";
    removeButton.innerText = "X";

    //add all these to the li then add li to the ul and if empty alert user
    newLi.appendChild(newCheckBoxLabel);
    newLi.appendChild(newCheckBox);
    newLi.appendChild(inputText);
    newLi.appendChild(removeButton);

    // Check if the user input is not empty
    if (userInput.trim() !== "") {
      ul.appendChild(newLi);
    } else {
      // alert if empty
      alert("Please enter a to-do item.");
    }
  }
});



//adding line if checkbox checked and removing line if unchecked
ul.addEventListener("change", function (event) {
  const targetElement = event.target;
  const textField = targetElement.nextElementSibling;
  if (targetElement.type === "checkbox") {
    if (targetElement.checked) {
      textField.style.textDecoration = "line-through";
    } else {
      textField.style.textDecoration = "none";
    }
  }
});

//remove list item if remove clicked
ul.addEventListener("click", function (event) {
  const targetElement = event.target;
  if (targetElement.tagName === "BUTTON" && targetElement.innerText === "X") {
    targetElement.parentElement.remove();
  }
});
