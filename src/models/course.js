export default (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    courseTitle: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    memberFees: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    nonMemberFees: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  // course.associate = (models) => {
  //   // associations can be defined here
  // };
  return course;
};
