

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    middleName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    memberType: {
      allowNull: true,
      type: Sequelize.ENUM('non-member', 'corporate-member', 'individual-member', 'student'),
      defaultValue: 'non-member',
    },
    isAdmin: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    birthDate: {
      allowNull: true,
      type: Sequelize.DATEONLY,
    },
    gender: {
      allowNull: true,
      type: Sequelize.ENUM('male', 'female'),
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
  down: queryInterface => queryInterface.dropTable('Users'),
};
