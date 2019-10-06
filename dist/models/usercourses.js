"use strict";

module.exports = function (sequelize, DataTypes) {
  var userCourses = sequelize.define('userCourses', {
    registeredOn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    courseId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});

  userCourses.associate = function (models) {
    userCourses.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
    userCourses.belongsTo(models.course, {
      foreignKey: 'courseId',
      as: 'course'
    });
  };

  return userCourses;
};
//# sourceMappingURL=usercourses.js.map