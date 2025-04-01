const express = require('express')
const router = express.Router()
const db = require('../db')
const ExpressError = require('../expressError')

router.get('/', async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM companies')
        return res.json({ companies: result.rows})
    } catch (e) {
        return next(e)
    }
})

//get company by code
router.get('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const result = await db.query(`SELECT * FROM companies where code=$1`, [code])
        return res.json({company: result.rows[0]})
    } catch (e) {
        return next(e)
    }
})

//add a company
router.post('/', async (req, res, next) => {
    try {
        //destructure code name and description from req.body
        const { code, name, description } = req.body;
        const result = await db.query(`INSERT INTO companies (code, name, description) VALUES ($1,$2,$3) RETURNING *`, [code, name, description])
        //return 201 status code and return json
        return res.status(201).json({company: result.rows[0]})
        
    } catch (e) {
        return next(e)
    }
})

//edit an existing company and return 404 if not found
router.put('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const { name, description } = req.body;
        const result = await db.query(`UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING *`, [name, description, code])
        return res.json({ company: result.rows[0] })
        
    } catch (e) {
        return next(e)
    }
})

//delete company
router.delete('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const result = await db.query(`DELETE FROM companies WHERE code=$1`, [code])
        return res.json({message: 'Company successfully deleted'})
    } catch (e) {
        return next(e)
    }
})

module.exports = router;