const express = require('express')
const app = express();
const itemsRoutes = require("./routes/items");
const ExpressError = require('./expressError')

module.exports = app;

app.use(express.json());
app.use('/items', itemsRoutes) //can prefix the routes and then second part is using the items routes

//404 handler 3 parameters
app.use((req, res, next) => {
    return new ExpressError('The page you are looking for was not found', 404);
})

//error handler 4 parameters
app.use((error, req, res, next) => {
    res.status(error.status || 500) //setting res.status to error.status in our error handler

    return res.json({error: error.message})
})