"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var dues = sequelize.define('dues', {
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    "for": {
      allowNull: false,
      type: DataTypes.STRING
    },
    dueDate: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});

  dues.associate = function () {// associations can be defined here
  };

  return dues;
};

exports["default"] = _default;
//# sourceMappingURL=dues.js.map