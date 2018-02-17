const Sequelize = require('sequelize');
// const config    = require(__dirname + '/../config/config.js')[env];
// const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Creating sequelize instance, connect to postgresql
const sequelize = new Sequelize('bearsightings', 'postgres', 'postgres');

const models = {
  Bear: sequelize.import('./bears')
};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
