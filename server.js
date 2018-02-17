// DEPENDENCIES
// ================
const express = require('express');
const bodyParser = require('body-parser');
// ================

// Hosted on heroku for production
const port = process.env.PORT || 3000;

const app = express();

// MIDDLEWARE
// ================
// Parses http post requests into json
app.use(bodyParser.json());
// Simple algorithm for shallowparsing (false)
app.use(bodyParser.urlencoded({ extended: false }));
// ================

// ROUTES
// ================
require('./routes')(app);
// ================

// SERVER VALIDATION
app.listen(PORT, function() {
  console.log('Server runs on port: ' + PORT);
});
