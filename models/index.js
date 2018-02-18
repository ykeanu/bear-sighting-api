'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

if (config.use_env_variable) {
  const sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// ========= REFACTORED =======

// const Sequelize = require('sequelize');
// // const config    = require(__dirname + '/../config/config.js')[env];
// // const sequelize = new Sequelize(config.database, config.username, config.password, config);

// // Creating sequelize instance, connect to postgresql
// const sequelize = new Sequelize('bearsightings', 'postgres', 'postgres');

// const models = {
//   Bear: sequelize.import('./bears')
// };

// // if (config.use_env_variable) {
// //   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// // } else {
// //   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// // }

// Object.keys(models).forEach(modelName => {
//   if ('associate' in models[modelName]) {
//     models[modelName].associate(models);
//   }
// });

// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

// module.exports = models;