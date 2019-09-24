module.exports = (sequelize, DataTypes) => {
  const userDues = sequelize.define('userDues', {
    paidOn: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    for: DataTypes.STRING,
    dueDate: DataTypes.STRING,
  }, {});
  userDues.associate = (models) => {
    userDues.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return userDues;
};
