const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.


//this function partially updates whatever is passed to it in a patch route
function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  //getting the keys which will be the column name to update
  const keys = Object.keys(dataToUpdate);
  //if nothing is passed to it then there is no need for update
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
    `"${jsToSql[colName] || colName}"=$${idx + 1}`, //first_name = $1
  );

  return { setCols: cols.join(", "), values: Object.values(dataToUpdate) };
}

module.exports = { sqlForPartialUpdate };
