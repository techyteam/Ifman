module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('userDues', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    paidOn: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      defaultValue: 'annual',
      allowNull: false,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    for: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
  down: queryInterface => queryInterface.dropTable('userDues'),
};
