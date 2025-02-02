async function getStarWarsData() {
    try {
        const res = await axios.get("https://swapi.dev/api/films")
        console.log(res)
    }
    catch(e) {
        console.log('error')
    }

}

// function changeColor(element, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             element.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// changeColor(h1, 'red')
//     .then(() => changeColor(h1, 'orange'))
//     .then(() => changeColor(h1, 'green'))
//     .then(() => changeColor(h1, 'blue'))
//     .then(() => changeColor(h1, 'purple'))
//    .then(() => changeColor(h1, 'orange'))

// async function rainbow(element) {

//     await changeColor(element, 'purple')
//     await changeColor(element, 'red')
//     await changeColor(element, 'red')
//     await changeColor(element, 'red')
// }
