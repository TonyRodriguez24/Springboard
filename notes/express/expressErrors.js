const express = require('express')
const ExpressError = require('./ErrorClass');

const app = express();


app.use(express.json());

function attemptToSaveToDB() {
    throw 'Connection error';
}

const USERS = [
    { username: 'StacysMom', city: 'Reno' },
    { username: 'Rosalia', city: 'R' }
]

app.get('/users/:username', function (req, res, next) {
    try {
        const user = USERS.find(u => u.username === req.params.username);
        if (!user) throw new ExpressError('invalid username', 404)
        return res.send({ user })

    } catch (e) {
        next(e)
    }

})

app.get('/secret', (req, res, next) => {
    try {
        if (req.query.password != 'popcorn') {
            throw new ExpressError('invalid password', 403)
        }
        return res.send('congrats you know the password')
    }
    catch (e) {
        next(e)
    }
}
)

app.get('/savetodb', (req, res) => {
    try {
        attemptToSaveToDB()
        res.send('SAVED TO DB')
    } catch (e) {
        return next(new ExpressError('Database Error'))
    }

})

//runs if none of the routes match
app.use((req, res, next) => {
    const e = new ExpressError('Page not found', 404)
    next(e)
})

//any time we pass next and call next it will go to this because it is the error handler
//this is an error handler because of the 4 parameters
app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message


    return res.status(error.status).json({ error: { message, status } })
})


app.listen(3000, () => {
    console.log('server running on 3000')
})