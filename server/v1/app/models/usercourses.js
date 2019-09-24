'use strict';
module.exports = (sequelize, DataTypes) => {
  const userCourses = sequelize.define('userCourses', {
    registeredOn: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {});
  userCourses.associate = function(models) {
    // associations can be defined here
  };
  return userCourses;
};