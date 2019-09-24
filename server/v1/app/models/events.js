'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    paidOn: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    for: DataTypes.STRING,
    dueDate: DataTypes.STRING
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};