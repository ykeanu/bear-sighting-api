const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'bearsighting'
});

module.exports = connection;

// // 'use strict';

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(__filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = {};


// var sequelize = new Sequelize(config.database, config.username, config.password, {dialect: 'mysql'});

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// ========= REFACTORED =======

// const Sequelize = require('sequelize');
// const config    = require(__dirname + '/../config/config.js')[env];
// const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Creating sequelize instance, connect to postgresql
// const sequelize = new Sequelize(config.database, config.username, config.password, config)

// const models = {
//   Bear: sequelize.import('./bear')
// };

// // if (config.use_env_variable) {
// //   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// // } else {
// //   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// // }

// // Object.keys(models).forEach(modelName => {
// //   if (models[modelName]) {
// //     models[modelName].associate(models);
// //   }
// // });

// // console.log(models);

// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

// // module.exports = models;
