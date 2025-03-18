const express = require('express')
const ExpressError = require('../expressError')
const router = new express.Router()
const items = require('../fakeDB')

router.get('/', (req, res, next) => {
    try {
        res.json({ items })
    }
    catch (e) {
        next(e)
    }
})

router.post('/', (req, res, next) => {
    if(!req.body.name || !req.body.price) throw new ExpressError('Make sure information is filled out', 400)
    //make new item
    const newItem = {
        name: req.body.name,
        price: req.body.price
    }
    //push new item
    items.push(newItem);
    //return 201 created status code
    return res.status(201).json({ item: newItem })
})

router.get('/:name', (req, res, next) => {
    const foundItem = items.find(item => item.name === req.params.name) //items.find, then we pass in item as parameter and then we check if the item name is equal to the item in the request parameters
    if (foundItem === undefined) {
        throw new ExpressError('Item not found, double check name', 400)
    }

    return res.json({item: foundItem})
})


router.patch('/:name', (req, res, next) => {
    //find the item first
    const foundItem = items.find(item => item.name === req.params.name)
    if (foundItem === undefined) {
        throw new ExpressError('Item not found', 400)
    }
    foundItem.name = req.body.name;
    res.json({item: foundItem}).status(200)
})

router.delete('/:name', (req, res, next) => {
    const foundItem = items.find(item => item.name === req.params.name)
    if (foundItem === undefined) {
        throw new ExpressError('Item not found', 400)
    }
    items.splice(foundItem, 1)
    return res.json({
        message: 'Deleted'
    })
})





module.exports = router;