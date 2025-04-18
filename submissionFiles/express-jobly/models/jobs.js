"use strict";

const db = require('../db')
const { BadRequestError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sql');

class Jobs {
    static async getAllJobs(filters = {}) {
        let { id, title, minSalary, hasEquity } = filters;
        let query = ' SELECT id, title, salary, equity, company_handle AS "companyHandle" FROM jobs';
        let i = 1;
        let whereClauses = [];
        let values = [];

        //SELECT id, name, title FROM jobs WHERE id=$1, name =$2, title=$3, [id, name, title]

        if (id) {
            whereClauses.push(`id = $${i}`);
            values.push(id)
            i++
        }
        if (title) {
            whereClauses.push(`title ILIKE $${i}`);
            values.push(`%${title}%`)
            i++
        }

        if (minSalary) {
            whereClauses.push(`salary >= $${i}`);
            values.push(minSalary);
            i++;
        }

        if (hasEquity === true) {
            whereClauses.push(`equity > 0`);
            values.push(hasEquity);
            i++;
        }

        if (whereClauses.length > 0) {
            query += " WHERE " + whereClauses.join(" AND ")
        }

        query += " ORDER BY title";
        const results = await db.query(query, values)

        return results.rows;
    }

    static async create({ title, salary, equity, companyHandle }) {
        const validCompany = await db.query(`SELECT handle FROM companies WHERE handle =$1`, [companyHandle])
        const duplicateCheck = await db.query(
            `SELECT title
           FROM jobs
           WHERE title = $1 AND company_handle = $2`,
            [title, companyHandle]);

        if (!validCompany.rows[0]) throw new BadRequestError(`Make sure you choose a valid company`);

        if (duplicateCheck.rows[0]) throw new BadRequestError(`Duplicate job title: ${title}`);

        const results = await db.query(`INSERT INTO jobs (title, salary, equity, company_handle) VALUES ($1,$2,$3,$4) RETURNING id, title, salary, equity, company_handle as companyHandle`, [title, salary, equity, companyHandle])
        const job = results.rows[0]
        return job;
    }

     static async getByHandle(companyHandle) {
        const results = await db.query(`
            SELECT id, title, salary, equity, company_handle
            FROM jobs
            WHERE company_handle = $1`, [companyHandle])
         return results.rows;
     }
    
    static async update(id, data) {
        const { setCols, values } = sqlForPartialUpdate(data, { company_handle: 'company_handle' })
        const index = "$" + (values.length + 1)
        const query = `UPDATE jobs SET ${setCols} WHERE id = ${index} RETURNING id, title, salary, equity, company_handle as companyHandle`
        const results = await db.query(query, [...values, id])
        return results.rows[0];
    }

}

module.exports = Jobs;