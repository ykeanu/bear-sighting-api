const Bears = require('../models');

// EXPORT TO ../routes/bearSightingRoutes
// ================
module.exports.postBearSighting = async (req, res) => {
  const bearSighting = req.body;

  try {
    const User = sequelize.define('bear', {}); // timestamps is false by default
  } catch (error) {
    res.status(500).send(error);
  }

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
};

module.exports.getByStartDate = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

module.exports.getByEndDate = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

module.exports.getByBearType = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

module.exports.getByZipCode = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

module.exports.sort = function(req, res) {
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;
  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

module.exports.getUniqueBearSighting = async (req, res) => {
  const bearSightingId = req.params.id;

  try {
  } catch (error) {
    res.status(500).send(error);
  }
  // Add id from User onto req.body
  // req.body.UserId = req.user.id;

  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};
// ================
