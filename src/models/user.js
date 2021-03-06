

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    memberType: {
      allowNull: true,
      type: DataTypes.ENUM('non-member', 'corporate-member', 'individual-member', 'student'),
      defaultValue: 'non-member',
    },
    birthDate: {
      allowNull: true,
      type: DataTypes.DATEONLY,
    },
    gender: {
      allowNull: true,
      type: DataTypes.ENUM('male', 'female'),
    },
    isAdmin: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  }, {});
  User.associate = (models) => {
    User.hasMany(models.userCourses);
    User.hasMany(models.userDues);
    User.hasMany(models.payment);
  };
  return User;
};
