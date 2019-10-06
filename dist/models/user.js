"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    phoneNumber: {
      allowNull: true,
      type: DataTypes.STRING
    },
    isAdmin: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function (models) {
    User.hasMany(models.userCourses);
    User.hasMany(models.userDues);
  };

  return User;
};
//# sourceMappingURL=user.js.map