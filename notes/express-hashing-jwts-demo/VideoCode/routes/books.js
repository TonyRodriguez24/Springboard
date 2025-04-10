const express = require('express')
const router = new express.Router()
const ExpressError = require('../expressError')
const jsonschema = require('jsonschema')
const bookSchema = require('../schemas/bookSchema.josn')

router.post('/books', (req, res, next) => {
    const result = jsonschema.validate(req.body, bookSchema)
    if (!result.valid) {
        console.log(result)
        return res.json('Invalid data')
    } else {
        return res.json('Valid data')
    }

    //use jsonschema.net to created json schema

})