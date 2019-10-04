"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var course = sequelize.define('course', {
    courseTitle: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    memberFees: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    nonMemberFees: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {}); // course.associate = (models) => {
  //   // associations can be defined here
  // };

  return course;
};

exports["default"] = _default;
//# sourceMappingURL=course.js.map