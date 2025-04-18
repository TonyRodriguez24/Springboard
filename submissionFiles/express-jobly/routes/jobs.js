const jsonschema = require("jsonschema")

const express = require('express');
const Jobs = require("../models/jobs");
const router = express.Router();
const { BadRequestError } = require('../expressError')
const jobNewSchema = require('../schemas/jobNew.json')
const jobUpdateSchema = require('../schemas/jobUpdate.json')


router.get('/', async (req, res, next) => {
    try {
        const { title, minSalary, hasEquity } = req.query;
        const jobs = await Jobs.getAllJobs({ title, minSalary, hasEquity });
        return res.json({ jobs })
    } catch (error) {
        return next(error)
    }
})

//only admins can add, update, or delete jobs.
// adding a job
router.post('/', async (req, res, next) => {
    try {
        const validator = jsonschema.validate(req.body, jobNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const job = await Jobs.create(req.body);
        return res.status(201).json({ job })
    } catch (error) {
        return next(error)
    }
})

//get jobs by company handle, may return multiple jobs
router.get('/:handle', async (req, res, next) => {
    try {
        const { handle } = req.params;
        const jobs = await Jobs.getByHandle(handle);
        return res.json({jobs})
    } catch (error) {
        return next(error)
    }
})



// //updating a job
router.patch('/:id', async (req, res, next) => {
    try {
        const validator = jsonschema.validate(req.body, jobUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { id } = req.params;
        const job = await Jobs.update(id, req.body)
        return res.json({job})
    } catch (error) {
return next(error)
    }
})


module.exports = router;