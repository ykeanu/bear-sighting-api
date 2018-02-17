// EXPORT TO ../controllers/bear_sightings_controller
// ================
module.exports = (sequelize, DataTypes) => {
  const Bear = sequelize.define('bear', {
    bear_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_bears: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_sighted: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  // ================

  // Task.associate = function(models) {
  //   models.Task.belongsTo(models.User, {
  //     onDelete: 'CASCADE',
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // return Task;
};
