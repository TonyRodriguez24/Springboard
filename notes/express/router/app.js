const express = require('express')
const middleware = require('./middleware')
const app = express();
const userRoutes = require('./userRoutes')
const morgan = require('morgan')

app.use(express.json())
// app.use(middleware.logger)
app.use(morgan('dev'))
app.use('/users', userRoutes)

app.get('/secret', middleware.checkPassword, (req, res, next) => {
    return res.send('love you ')
})

app.get('/private', middleware.checkPassword, (req, res, next) => {
    return res.send('you have reached the private page')
})


app.listen(3000, () => {
    console.log('running on 3000')
})