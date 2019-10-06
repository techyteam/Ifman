"use strict";

module.exports = function (sequelize, DataTypes) {
  var userDues = sequelize.define('userDues', {
    paidOn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'annual'
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    "for": {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});

  userDues.associate = function (models) {
    userDues.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return userDues;
};
//# sourceMappingURL=userdues.js.map