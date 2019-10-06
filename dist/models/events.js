"use strict";

module.exports = function (sequelize, DataTypes) {
  var events = sequelize.define('events', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    time: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});

  events.associate = function () {// associations can be defined here
  };

  return events;
};
//# sourceMappingURL=events.js.map