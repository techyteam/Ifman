"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      memberFees: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      nonMemberFees: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
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
    return queryInterface.dropTable('courses');
  }
};
//# sourceMappingURL=20190923115128-create-course.js.map