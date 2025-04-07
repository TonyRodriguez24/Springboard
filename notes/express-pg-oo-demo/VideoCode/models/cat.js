const db = require("../db");
const ExpressError = require("../expressError")


//for models make all static methods
class Cat {
  static async getAll() {
    const result = await db.query('SELECT id, name, age FROM cats;')
    return result.rows
  }

  static async getCatById(id) {
    const result = await db.query(`SELECT id, name, age FROM cat WHERE id =$1`, [id])
    if (result.rows.length === 0) throw new ExpressError('Cat not found', 404);
    return result.rows[0];
  }

  static async create(name, age) {
    if (!name || !age) throw new ExpressError('Missing required data', 400); //400 is bad request
    const result = await db.query(`INSERT INTO cats (name, age) VALUES ($1, $2) RETURNING id, name, age`, [name, age])
    return result.rows[0]
  }

  static async delete(id) {
    const result = await db.query(`DELETE from cats WHERE id = $1 RETURNING id`, [id]) // we only return the id here just to check if its empty or not in the following line
    if (result.rows.length === 0) throw new ExpressError('Cat not found', 404)
  }

  static async update(id, newName, newAge) {
    const result = await db.query(`UPDATE cats SET name = $1, age =$2 WHERE id = $3 RETURNING id, name, age`, [newName, newAge, id])
    if (result.rows.length === 0) throw new ExpressError('Cat not found', 404)
    return result.rows[0]
  }

  static async makeOlder(id) {
    const result = await db.query(`UPDATE cats SET age = age + 1 WHERE id = $1 RETURNING id, name, age`, [id])
    if (result.rows.length === 0) throw new ExpressError('Cat not found', 404)
    return result.rows[0]
  }

}
module.exports = Cat;

