// DEPENDENCIES
// ================
const bearSightingRoutes = require('./bearSightingRoutes');
// ================

// EXPORT TO ./server.js
module.exports = function(app) {
  app.use('/', bearSightingRoutes);
};
