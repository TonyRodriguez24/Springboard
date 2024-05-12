const ul = document.querySelector('ul');
ul.addEventListener("click", function(event) {
  console.log(event.target);
  console.log(event.target.getAttribute('data-year');
  console.log(event.target.dataset.year);
  e.target.dataset.sold = true;
});