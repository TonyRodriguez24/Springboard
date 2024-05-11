const h1 = document.querySelector("h1")

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


const letters = document.querySelectorAll(".letter");

setInterval(function(){ for (let letter of letters) {
  letter.style.color = randomRGB();
}},1000)


const inpute = document.querySelector("input");
input.getAttribute("type"); // "text"

const imgs = document.querySelectorAll("img");
 for (let img of imgs) {
   img.src = "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
 }

 inpute.setAttribute("type", "password");

 inpute.setAttribute("type", "text");
 inpute.setAttribute("type", "color");

//class manipulation
const quote = document.querySelector("blockquote");
quote.setAttribute("class", "highlight");


const h2 = document.querySelector("h2");
h2.classList.add("highlight");
 
const formInput = document.querySelector("form input");
const range = document.querySelector("input[type='range']");
range.value = 100;
//get attribute and set attribute
//value is the most common attribute to get and set

//class manipu

//changing styles thorough class
const toDO = document.querySelector("li");
toDO.getAttribute("class"); // "todo"
toDO.classList.add("done");
toDO.classList.remove("done");
toDO.classList.toggle("done");
toDO.classList.contains("done");

const allToDos = document.querySelectorAll("li");
for (let li of allToDos){
  li.classList.toggle("done");
}


document.getElementById('container');
document.querySelector('#container');
document.getElementsByClassName('second');
document.querySelector('ol .third');
const container = document.getElementById('container')
container.innerText = 'Hello!'
const footer = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');
const newLi = document.createElement('li');
newLi.innerText = 'four';
ul.append(newLi);
const liInsideOl = document.querySelectorAll ('ol li');
for (let li of liInsideOl)
 {
 	 li.style.backgroundColor = 'green';
}
footer.remove();