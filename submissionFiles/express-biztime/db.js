/** Database setup for BizTime. */
const { Client } = require('pg') //destructure Client from pg

let DB_URI = 'postgres:///biztime'

let db = new Client({ connectionString: DB_URI })
db.connect();

module.exports = db;