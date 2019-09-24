

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.NUMBER,
    isAdmin: DataTypes.BOOLEAN,
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
