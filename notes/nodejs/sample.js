const helpers = require('./helpers')

console.log('tony rodriguez')

const greet = () => {
    for (let i = 0; i < 10; i++){
        console.log(i)
    }
}

greet();


for (let arg of process.argv) {
    console.log(arg)
}

