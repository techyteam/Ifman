module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('dues', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
      defaultValue: 'annual',
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    for: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),
  down: queryInterface => queryInterface.dropTable('dues'),
};
