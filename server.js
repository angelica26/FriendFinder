// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")


// Setting up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Setting up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Requiring the routes.............................

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);
//..................................................
// Starting the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});