// async function getRandomDog() {
//     const res = await axios.get('https://dog.ceo/api/breeds/image/random')
//     console.log(res.data)
//     const img = document.querySelector("#dog")
//     img.src = res.data.message;
// }



// const { create } = require("domain")

// async function getDogByBreed(breed) {
//     try {
//         const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//         const res = await axios.get(url);
//         const img = document.querySelector("#dog");
//         img.src = res.data.message;
//     }
//     catch (e) {
//         alert("Breed not found. Please try again.")
//         getRandomDog();
//     }
// }

// async function getJoke(firstName, lastName){
//     let res = await axios.get(`http://api.icndb.com/jokes/random`, {params: {firstName, lastName}});
// }

//adding an object to the query string
// let params = {

//making a post request using axios

//axios.post(url, data, config)

//axios post practice

async function getUsers(){
   const res = await axios.get('https://reqres.in/api/users')
   console.log(res)
}

async function createUser(){
    const res = await axios.post('https://reqres.in/api/users', {username: "ButtersTheChicken", email: "butters@gmail.com", age : 3})
    console.log(res)
}

//201 means created

createUser()