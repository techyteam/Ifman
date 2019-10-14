

module.exports = (sequelize, DataTypes) => {
  const userCourses = sequelize.define('userCourses', {
    registeredOn: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    courseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  userCourses.associate = (models) => {
    userCourses.belongsTo(models.User, { foreignKey: 'UserId', as: 'user' });
    userCourses.belongsTo(models.course, { foreignKey: 'courseId', as: 'course' });
  };
  return userCourses;
};
