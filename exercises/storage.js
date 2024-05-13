// //local storage is a way of stroing data in the browser. It is a key value pair storage system.

// //sessionStorage
// //localstorage has no expiration time but sessionStorage has expiration time.

// //mofifying local storage
// //all the keys must be strings

// localStorage.setItem('Tony' , 'Stark');
// localStorage.setItem('Steve' , 'Rogers');

// localStorage.getItem('Tony');
// localStorage.getItem('Steve');

// localStorage.removeItem('Tony');
// localStorage.clear();

// //parseInt to convert string to number
// //parseFloat to convert string to decimal number

// //adding objects to local storage
// const preferences = {
//     theme: 'dark',
//     fontSize: 14
// }

// localStorage.setITem('preferences', JSON.stringify(preferences));

// //javascript object notation
// //way of sending information across the internet
// //standardized way of sending data
// //taking data and truning it into a string

// //comes up quite a bit with APIs

// JSON.parse(localStorage.getItem('preferences'));

// //stringify takes javascript object and turns it into a string
// localStorage.getItem('preferences');
// JSON.parse(localStorage.getItem('preferences'));

// const favColor = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;

// //what to use local storage for
// //local storage is useful for storing information in the browser
// //JSON.stringify and JSON.parse are useful for storing objects in local storage
// //
const toggleSwitch = document.querySelector("#switch");

if (localStorage.getItem("darkEnabled")) {
  document.body.className = "dark";
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("click", function (event) {
  const { checked } = toggleSwitch;
  if (checked) {
    localStorage.setItem("darkEnabled", true);
  } else {
    localStorage.removeItem("darkEnabled");
  }
  document.body.className = checked ? "dark" : "";
});
