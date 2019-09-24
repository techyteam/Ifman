'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userDues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paidOn: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      for: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userDues');
  }
};