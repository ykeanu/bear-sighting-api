// DEPENDENCIES
// ================
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// ================

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// ================
// Allows express app to handle data parsing
// Parses http post requests into json
app.use(bodyParser.json());
// Simple algorithm for shallowparsing (false)
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static directory
app.use(express.static('public'));

// ================

// DATABASE
// ================
// Sequelize
// var db = require('./models');

// MySQL
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'bearsighting'
});

// ================

// ROUTES
// ================
require('./routes')(app);
// require("./routes/api-routes.js")(app);
// ================

// SERVER VALIDATION
app.listen(PORT, function() {
  console.log('Server runs on port: ' + PORT);
});

// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log('App listening on PORT ' + PORT);
//   });
// });
