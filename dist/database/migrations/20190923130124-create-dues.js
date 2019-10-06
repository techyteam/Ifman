"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('dues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'annual'
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      "for": {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('dues');
  }
};
//# sourceMappingURL=20190923130124-create-dues.js.map