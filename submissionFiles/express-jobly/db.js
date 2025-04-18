"use strict";
/** Database setup for jobly. */
const { Client } = require("pg"); //standar way to connect to a postgreSQL database in nodeJS
//client better for one tiem scripts pool is better when actually building a web application
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  });
}

db.connect();

module.exports = db;