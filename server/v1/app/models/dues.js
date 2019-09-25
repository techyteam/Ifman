

module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    for: DataTypes.STRING,
    dueDate: DataTypes.STRING,
  }, {});
  dues.associate = () => {
    // associations can be defined here
  };
  return dues;
};
