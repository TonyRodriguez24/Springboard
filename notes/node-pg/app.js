const express = require('express')
const app = express();
const ExpressError = require('./expressError')

app.use(express.json())

const userRoutes = require('./routes/users')
app.use('/users', userRoutes)