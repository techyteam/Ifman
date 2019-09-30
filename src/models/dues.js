export default (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    for: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dueDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  dues.associate = () => {
    // associations can be defined here
  };
  return dues;
};
