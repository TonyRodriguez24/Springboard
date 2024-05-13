const form = document.querySelector("form");
const ul = document.querySelector("#list");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const addButton = ul.addEventListener("click", function (event) {
  const targetElement = event.target;

  //check if element is a button
  if (targetElement.tagName === "BUTTON") {
    //create LI element
    const newLi = document.createElement("li");
    newLi.classList.add("list-item");
    //create label for checkbox element
    const newCheckBoxLabel = document.createElement("label");
    newCheckBoxLabel.classList.add("visually-hidden");
    //create checkbox element
    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    //label for to do list item
    const newItemLabel = document.createElement("label");
    newItemLabel.classList.add("visually-hidden");
    //append checkbox to label
    const newTextBox = document.createElement("input");
    newTextBox.setAttribute("type", "text");

  
    //add all these to the li then add li to the ul
    newLi.appendChild(newCheckBoxLabel);
    newLi.appendChild(newCheckBox);
    newLi.appendChild(newItemLabel);
    newLi.appendChild(newTextBox);
    ul.appendChild(newLi);
  }
});

const removeButton = ul.addEventListener("click" , function(event){
  const targetElement = event.target;
  if(targetElement.tagName = "BUTTON" && targetElement.innerText === "Remove")
    {
     
  }
});
