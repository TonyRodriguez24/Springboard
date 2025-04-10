/** Routes for demonstrating authentication in Express. */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const jwt = require(`jsonwebtoken`)
const { ensureLoggedIn, ensureAdmin } = require('../middleware/auth')

router.get('/', (req, res, next) => {
  res.send("APP IS WORKING!!!")
})


router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new ExpressError(`Username and password required`, 400) //400 bad request
    //hash password and then save to database
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const results = await db.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username`, [username, hashedPassword])
    return res.json(results.rows[0])
  } catch (error) {
    if (error.code === '23505') return next(new ExpressError('Username taken, please pick another', 400)) //postgress error code is 23505 and we look for that
    return next(error)
  }
})

router.post('/login', async (req, res, next) => {
  //find user in db
  //take hashed pw in db and compare it to password in request body
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new ExpressError(`Username and password required`, 400) //400 bad request
    const results = await db.query(`SELECT username, password FROM users WHERE username=$1`, [username])
    const user = results.rows[0];
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        //user jwt.sign to create a json web token
        const token = jwt.sign({ username, type: "admin" }, SECRET_KEY) //signing username with a secret key, option of sending this data from one request to the next. Username is the payload
        return res.json({ message: 'Logged in ', token })
      }
    }
    throw new ExpressError(`Invalid username/password`, 400)
  } catch (error) {
    return next(error)
  }
})


//can pass in a middleware after the 
//ensure logged in is checking for a logged in user
router.get('/secret', ensureLoggedIn, (req, res, next) => {
  try {

    return res.json({
      msg: 'signed in: top secret'
    })

  } catch (error) {
    return next(error)
  }
})

router.get('/private', ensureLoggedIn, (req, res, next) => {
  try {
    return res.json({ msg: `Welcome to VIP ${req.user.username}` })
  } catch (error) {

  }
})


router.get('/admin-dashboard', ensureAdmin, (req, res, next) => {
  return res.json({msg: 'Welcome admin'})
} )


module.exports = router;

