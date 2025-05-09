"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(
      `SELECT handle
           FROM companies
           WHERE handle = $1`,
      [handle]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`);

    const result = await db.query(
      `INSERT INTO companies
           (handle, name, description, num_employees, logo_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
      [
        handle,
        name,
        description,
        numEmployees,
        logoUrl,
      ],
    );
    const company = result.rows[0];

    return company;
  }

  /** Find all companies.
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  static async findAll(filters = {}) {
    console.log("FILTERS RECEIVED:", filters);

    let { name, minEmployees, maxEmployees } = filters;
    // Parse min/max into numbers so comparisons work correctly
    minEmployees = minEmployees !== undefined ? parseInt(minEmployees) : null;
    maxEmployees = maxEmployees !== undefined ? parseInt(maxEmployees) : null;

    if (minEmployees !== null && maxEmployees !== null && minEmployees > maxEmployees) {
      throw new BadRequestError("Minimum number of employees cannot exceed maximum number of employees");
    }

    if ((minEmployees !== null && minEmployees < 0) || (maxEmployees !== null && maxEmployees < 0)) {
      throw new BadRequestError("Double check values");
    }

    let baseQuery = `
                    SELECT handle, 
                            name, 
                          description, 
                          num_employees AS "numEmployees", 
                          logo_url AS "logoUrl" 
                    FROM companies `;


    let whereClauses = [];
    let values = [];
    let i = 1;

    if (name) {
      whereClauses.push(`name ILIKE $${i}`); //whereClauses array accepts the $1, $2 etc
      values.push(`%${name}%`);
      i++;
    }

    if (minEmployees !== null) {
      whereClauses.push(`num_employees >= $${i}`)
      values.push(minEmployees);
      i++;
    }

    if (maxEmployees !== null) {
      whereClauses.push(`num_employees <= $${i}`);
      values.push(maxEmployees);
      i++;
    }

    if (whereClauses.length > 0) {
      baseQuery += " WHERE " + whereClauses.join(" AND ");
    }

    baseQuery += " ORDER BY name";
    const results = await db.query(baseQuery, values)

    return results.rows;
  }




  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
      `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
      [handle]);

    const company = companyRes.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    const { setCols, values } = sqlForPartialUpdate(data, { numEmployees: "num_employees", logoUrl: "logo_url" });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
      `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
      [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }
}


module.exports = Company;
