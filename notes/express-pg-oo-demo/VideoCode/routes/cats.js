const express = require("express");
const Cat = require("../models/cat");

const router = new express.Router();


/** get all cats: [{id, name, age}, ...] */
router.get('/', async (req, res, next) => {
  try {
    const cats = await Cat.getAll();
    return res.json(cats)
  } catch (error) {
    return next(error)
  }

})

//have to await it because it returns a promise
router.get('/:id', async (req, res, next) => {
  try {
    const cat = await Cat.getCatById(req.params.id);
    return res.json(cat)
  } catch (error) {
    return next(error)
  }

})



router.post('/', async (req, res, next) => {
  try {
    const { name, age } = req.body
    const newCat = await Cat.create(name, age)
    return res.json(newCat)
  } catch (error) {
    return next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const {name, age} = req.body
    const cat = await Cat.update(req.params.id, name, age)
    return res.json(cat)
  } catch (error) {
    return next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Cat.delete(req.params.id)
    return res.json({ message: 'Deleted'})
  } catch (error) {
    return next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const cat = await Cat.makeOlder(req.params.id)
    return res.json(cat)
  } catch (error) {
    return next(error)
  }
})


module.exports = router;

