const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'bearsighting'
});

// const connection = require('../models');

// EXPORT TO ../routes/bearSightingRoutes
// ================


module.exports.postBearSighting = async (req, res) => {
  // object on request body
  const bearSighting = req.body;

  try {
    let newBearSighting = await connection.query("SELECT * FROM bears", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(newBearSighting);
      connection.end();
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getBearSightingsByQuery = async (req, res) => {
  // sighting/search?search=<USERQUERY>
  const userQuery = req.query;
  
  try {
    let newBearSighting = await connection.query("SELECT * FROM bears", function(err, response) {
      if (err) throw err;
      // Log all results of the SELECT statement
      // console.log(res);
      res.send(response);
    });
    

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getBearSightingsById = async (req, res) => {
  // sighting/search/:id
  const bearSightingId = req.params.id;
  try {

  } catch (error) {
    res.status(500).send(error);
  }
};

// module.exports.postBearSighting = async (req, res) => {
//   const bearSighting = req.body;

//   try {
//     const Bear = sequelize.define('bear', {}); // timestamps is false by default
//   } catch (error) {
//     res.status(500).send(error);
//   }

  // db.Trip.findAll({
  //   where: {
  //     UserId: req.user.id
  //   }
  // }).then(function(dbTrip) {
  //   console.log(dbTrip);
  //   res.render('trips/trips', {
  //     layout: 'main-trips',
  //     trip: dbTrip
  //   });
  // });
// };

// module.exports.getByStartDate = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };

// module.exports.getByEndDate = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };

// module.exports.getByBearType = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };

// module.exports.getByZipCode = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };

// module.exports.sort = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };

// module.exports.getUniqueBearSighting = async (req, res) => {
//   const bearSightingId = req.params.id;

//   try {
//   } catch (error) {
//     res.status(500).send(error);
//   }
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;

  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
// };
// ================
