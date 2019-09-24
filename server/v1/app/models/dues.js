'use strict';
module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    paidOn: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    for: DataTypes.STRING,
    dueDate: DataTypes.STRING
  }, {});
  dues.associate = function(models) {
    // associations can be defined here
  };
  return dues;
};