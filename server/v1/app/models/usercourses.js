

module.exports = (sequelize, DataTypes) => {
  const userCourses = sequelize.define('userCourses', {
    registeredOn: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
  }, {});
  userCourses.associate = (models) => {
    userCourses.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    userCourses.belongsTo(models.course, { foreignKey: 'courseId', as: 'course' });
  };
  return userCourses;
};
