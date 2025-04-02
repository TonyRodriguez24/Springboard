const express = require('express')
const router = express.Router()
const ExpressError = require('../expressError')
const db = require('../db')

//get all invoices
router.get('/', async (req, res, next) => {
    try {
        const result = await db.query(`SELECT * FROM invoices`)
        return res.json({invoices: result.rows})
    } catch (error) {
        return next(error)
    }
    
})

//get invoice by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await db.query(`SELECT * FROM invoices WHERE id=$1`, [id])
        return res.json({invoice: result.rows[0]})
    } catch (error) {
        return next(error)
    }
})

//add an invoice
router.post('/', async (req, res, next) => {
    try {
        //destructure the values from the response body
        const { comp_code, amt, paid, add_date, paid_date } = req.body;
        const result = await db.query(`INSERT INTO invoices (comp_code, amt, paid, add_date, paid_date) VALUES ($1,$2,$3,$4,$5) RETURNING *`, [comp_code, amt, paid, add_date, paid_date])
        return res.status(201).json({ invoice: result.rows[0] })
    } catch (error) {
        return next(error)
    }
})

//updates an invoice
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { amt, paid, add_date, paid_date } = req.body;
        const result = await db.query(`UPDATE invoices SET amt=$1, paid=$2, add_date=$3, paid_date=$4 WHERE id=$5 RETURNING * `, [amt, paid, add_date, paid_date, id])
        return res.json(result.rows[0])
    } catch (error) {
        return next(error)
    }
})

//deletes an invoice
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM invoices WHERE id=$1', [id])
        return res.json({message: 'Invoice successfully deleted'})
    } catch (error) {
        return next(error)
    }
})




module.exports = router;