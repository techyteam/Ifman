

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('courses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    courseTitle: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    memberFees: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nonMemberFees: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.STRING,
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
  down: queryInterface => queryInterface.dropTable('courses'),
};
