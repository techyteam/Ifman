
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    for: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  payment.associate = (models) => {
    payment.belongsTo(models.User, { foreignKey: 'UserId', as: 'user' });
  };
  return payment;
};
