const express = require("express");
const router = new express.Router();
const Dog = require("../models/dog");


router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.getAll();
    dogs.forEach(d => d.speak())
    return res.json(dogs)
  } catch (error) {
    return next(error)
  }

})

router.get('/:id', async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id);
    return res.json(dog)
  } catch (error) {
    return next(error)
  }

})

router.post('/', async (req, res, next) => {
  try {
    const { name, age } = req.body
    const dog = await Dog.create(name, age)
    return res.json(dog)
  } catch (error) {
    return next(error)
  }

})


router.delete('/:id', async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id)
    await dog.remove()
    return res.json({
      message: 'Dog deleted'
    })
  } catch (error) {
    return next(error)
  }

})

router.patch('/:id/age', async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id)
    dog.age += 1;
    await dog.save()
    return res.json(dog)
  } catch (error) {
    return next(error)
  }

})

router.patch('/:id/rename', async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id)
    dog.name = req.body.name;
    await dog.save()
    return res.json(dog)
  } catch (error) {
    return next(error)
  }

})












module.exports = router;