const express = require('express')


const app = express();
//send and understood as json, commonly for APIs
app.use(express.json());

// '/candies' gets list of all candies

const CANDIES = [
    { name: 'snickers', qty: 43, price: 1.50 },
    { name: 'skittle', qty: 43, price: .99 }
]

app.get('/candies', (req, res) => {
    res.json(CANDIES) //res.send guesses what the content type is
})

app.post('/candies', (req, res) => {
    if (req.body.name.toLowerCase() === 'circus peanuts') {
        res.status(403).json({
            msg: 'horrible choice'
        })
    }
    CANDIES.push(req.body);
    res.status(201).json(CANDIES); //need to call .send or .json after setting status code to send back to user
})

app.listen(3000, function () {
    console.log('running on 3000')
})

//res.json guarantees your info will be json

//res.status to set a different status code