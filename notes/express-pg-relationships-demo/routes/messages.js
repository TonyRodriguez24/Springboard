/** Routes for users of pg-relationships-demo. */

const db = require("../db");
const express = require("express");
const router = express.Router();
const ExpressError = require('../expressError')

router.get('/:id', async (req, res, next) => {
  try {
    const results = await db.query('SELECT m.id, m.msg, t.tag FROM messages as m LEFT JOIN messages_tags as mt ON m.id = mt.message_id LEFT JOIN tags as t ON mt.tag_code = t.code WHERE m.id =$1', [req.params.id])
    if (results.rows.length === 0) {
      throw new ExpressError('Message not found', 404)
    }
    const { id, msg } = results.rows[0]
    const tags = results.rows.map(r=>r.tag  )
    return res.send({id, msg, tags})
  } catch (error) {
    return next(error)
  }
})


module.exports = router;