// DEPENDENCIES
// ================
const express = require('express');
const bodyParser = require('body-parser');
// ================

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
// ================
// Allows express app to handle data parsing
// Parses http post requests into json
app.use(bodyParser.json());
// Simple algorithm for shallowparsing (false)
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Static directory
app.use(express.static("public"));

// ================

// DATABASE
// ================
var db = require('./models');
// ================

// ROUTES
// ================
require('./routes')(app);
// ================

// SERVER VALIDATION
// app.listen(PORT, function() {
//   console.log('Server runs on port: ' + PORT);
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});