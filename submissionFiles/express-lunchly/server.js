/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, function() {
  console.log("listening on http://localhost:3000");
});
