/** Routes for users of pg-relationships-demo. */

const db = require("../db");
const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();

/** Get users: [user, user, user] */

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(
          `SELECT id, name, type FROM users`);

    return res.json(results.rows);
  }

  catch (err) {
    return next(err);
  }
});

//get user and messages by id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    //get user
    const users = await db.query('SELECT name, type FROM users WHERE id=$1', [id])
    //get messages
    const messages = await db.query('SELECT id, msg FROM messages WHERE user_id=$1', [id])
    if (user.results.rows.length === 0) {
      throw 'bad error very bad'
    }
    //adding a messages property to user and then returning users
    const user = users.rows[0];
    user.messages = messages.rows;

    return res.send(user)


  } catch (error) {
    return next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const results = await db.query(`UPDATE messages set msg=$1 WHERE id=$2 RETURNING id, user_id, msg`, [req.body.msg, req.params.id])
    if (results.rows.length === 0) {
      throw new ExpressError('error', 404)
    }
    return res.json(results.rows[0])
  } catch (error) {
    return next(error)
  }
})



module.exports = router;