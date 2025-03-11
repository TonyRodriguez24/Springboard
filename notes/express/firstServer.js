const express = require('express')


const app = express();
//send and understood as json, commonly for APIs
app.use(express.json());

//this is for receiving form data
app.use(express.urlencoded({extended: true}))

//app.listen receives a port and callback as parameter

//app.get() for a get request route

//request (req) object (query string, form data, url parameters/variables)
//response (res) object - sending a response (html, text, json, etc)
//express is passing both of them

app.get('/', (req, res) => {
    res.send('Home page')
})


app.get('/dogs', (req, res) => {
    res.send('Woof')
})

app.get('chickens', (req, res) => {
    res.send('hi from chicken')
})

app.post('/chickens', function createChicken(req, res) {
    res.send('created something')
})


const greetings = {
    en: 'hello',
    fr: 'bonjour',
    ic: 'hallo',
    js: 'konnichiwa'
}

app.get('/greet/:language', (req, res) => {
    const lang = req.params.language; //match what your passing in 
    const greeting = greetings[lang]
    res.send(greeting)
})

// '/search?term=pigs&sort=cute'
//req.query
//then destructure from req.query
app.get('/search', (req, res) => {
    const { term ='default value', sort } = req.query;
    return res.send(`term is ${term}, sort is ${sort}`)
})

app.get('/show-headers', (req, res) => {
    console.log(req.rawHeaders, req.headers)
    res.send(req.headers)
})

//headers example
app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language']
    res.send(`Your language is ${lang}`)
})

app.post('/register', (req, res) => {
    res.send(req.body);
})


//app.listen should always be at the bottom of the file
app.listen(3000, () => {
    console.log('Server running on port 3000')
})



