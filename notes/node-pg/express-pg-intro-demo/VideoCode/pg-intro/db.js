const { Client } = require('pg') //destructuring client from pg
let DB_URI;

//test db if in test but regular database
if (process.env.NODE_ENV === 'test') {
  DB_URI = 'postgresql:///usersdb_test'
}
else {
  DB_URI = 'postgresql:///usersdb'
}

let db = new Client({ connectionString: DB_URI })

db.connect();

module.exports = db;