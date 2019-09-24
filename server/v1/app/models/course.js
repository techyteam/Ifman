

module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    courseTitle: DataTypes.STRING,
    memberFees: DataTypes.STRING,
    nonMemberFees: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
  }, {});
  // course.associate = (models) => {
  //   // associations can be defined here
  // };
  return course;
};
