const ExpressError = require('./Errors')

const express = require('express')

const app = express();

app.use(express.json())

app.get('/mean', (req, res, next) => {
    try {
        const nums = req.query.nums; //1,2,3,4,5

        if (nums === '') {
            throw new ExpressError('make sure array is populated', 400)
        }

        const numsArr = nums.split(',').map(n => parseInt(n)).sort((a, b) => a - b) //javascript is weird

        

        for (let i of numsArr) {
            if (isNaN(i)) {
                throw new ExpressError('not a number', 403)
            }
        }

        const total = numsArr.reduce((acc, sum) => {
            return sum + acc;
        }, 0)

        const average = (total / numsArr.length);

        res.json({
            response: {
                operation: `mean`,
                array: numsArr,
                result: `${average} (${total} / ${numsArr.length})`
            }
        })

    } catch (e) {
        next(e);
    }
    

    

})


app.get('/median', (req, res, next) => {
    const nums = req.query.nums; //1,2,3,4,5

    if (nums === '') {
        throw new ExpressError('make sure array is populated', 400)
    }

    
    const numsArr = nums.split(',').map(n => parseInt(n)).sort((a, b) => a - b) //javascript is weird

    if (numsArr.length === 0){
        throw new ExpressError('array is empty', 400)
    }
    
    for (let i of numsArr) {
        if (isNaN(i)) {
            throw new ExpressError('not a number', 403)
        }
    }


    let median;

    if (numsArr.length % 2 === 1) {
        median = numsArr[Math.floor(numsArr.length / 2)]
    }
    else {
        let midpoint1 = numsArr[(numsArr.length / 2)]
        let midpoint2 = numsArr[(numsArr.length / 2) - 1]
        median = (midpoint1 + midpoint2) / 2;
    }

    res.json({
        response: {
            operation: `median`,
            array: numsArr,
            result: `${median}`
        }
    })

}) //midpoint



app.get('/mode', (req, res) => {
    const nums = req.query.nums; //1,2,3,4,5
    const numsArr = nums.split(',').map(n => parseInt(n)).sort((a, b) => a - b) //javascript is weird

    for (let i of numsArr) {
        if (isNaN(i)) {
            throw new ExpressError('not a number', 403)
        }
    }

    const result = {}

    for (let i of numsArr) {
        if (!result[i]) {
            result[i] = 1;
        }
        else {
            result[i] += 1
        }
    }

    //first find the max frequency

    let maxFrequency = 0;
    for (let frequency of Object.values(result)) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
        }
    }
    
    let modes = [];
    for (let number in result) {
        if (result[number] === maxFrequency) {
            modes.push(number)
        }
    }

    res.json({
        values: numsArr,
        modes: modes,
        frequency: maxFrequency
    })

}) //most frequent


app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message || 'something went wrong';

    return res.status(status).json({error: {message, status}})
})



app.listen(3000, () => {
    console.log('running on 3000')
})