'use strict';
module.exports = (sequelize, DataTypes) => {
  const userDues = sequelize.define('userDues', {
    paidOn: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    for: DataTypes.STRING,
    dueDate: DataTypes.STRING
  }, {});
  userDues.associate = function(models) {
    // associations can be defined here
  };
  return userDues;
};