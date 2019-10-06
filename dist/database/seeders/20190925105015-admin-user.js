"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _utils = _interopRequireDefault(require("../../utils"));

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'super',
      lastName: 'admin',
      email: 'victorawotidebe@gmail.com',
      password: _utils["default"].hashPassword('Malepass'),
      phoneNumber: '586-852-6862',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//# sourceMappingURL=20190925105015-admin-user.js.map