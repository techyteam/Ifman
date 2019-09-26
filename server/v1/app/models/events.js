

module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, {});
  events.associate = () => {
    // associations can be defined here
  };
  return events;
};
