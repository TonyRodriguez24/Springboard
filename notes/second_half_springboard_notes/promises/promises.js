// function wait3Seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000)
//     })


// }

// wait3Seconds()
//     .then(() => console.log('All Doone'))
//     .catch(() => console.log('Error'))

const h1 = document.querySelector('h1')



function changeColor(element, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.style.color = color;
            resolve()
        }, 1000)
    })
}

changeColor(h1, 'red')
    .then(() => changeColor(h1, 'orange'))
    .then(() => changeColor(h1, 'green'))
    .then(() => changeColor(h1, 'blue'))
    .then(() => changeColor(h1, 'black'))
    .then(() => changeColor(h1, 'gray'))
    .then(() => changeColor(h1, 'purple'))
    .then(() => changeColor(h1, 'orange'))


let mockAjaxRequest = new Promise(function (resolve, reject) {
    let probSuccess = .5;
    let requestTime = 1000;

    setTimeout(function () {
        let ranNum = Math.random()
        if (ranNum < probSuccess) {
            let data = 'heres data';
            resolve(data);
        } else {
            reject('sorry your request failed')
        }
    }, requestTime)


})



mockAjaxRequest
    .then((data) => console.log(data))
    .catch((err) => console.log(err))