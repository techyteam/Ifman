"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = require("../models");

/**
 * User service Class
 */
var UserServices =
/*#__PURE__*/
function () {
  function UserServices() {
    (0, _classCallCheck2["default"])(this, UserServices);
  }

  (0, _createClass2["default"])(UserServices, null, [{
    key: "createUser",

    /**
     * @name CreateUser
     * @description Interacts with model to create a new user
     * @param { string } userData the user's data
     * @returns {object} return the updated field
     */
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(userData) {
        var _ref, dataValues;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _models.User.create(userData);

              case 2:
                _ref = _context.sent;
                dataValues = _ref.dataValues;
                delete dataValues.password; // remove sensitive data from returned object

                return _context.abrupt("return", dataValues);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createUser(_x) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
    /**
     * @name GetUserByEmail
     * @description Interacts with model to find a single user
     * @param { string } email the user's email
     * @returns {object} return the user's data
     */

  }, {
    key: "getUserByEmail",
    value: function () {
      var _getUserByEmail = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(email) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models.User.findOne({
                  where: {
                    email: email
                  }
                });

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getUserByEmail(_x2) {
        return _getUserByEmail.apply(this, arguments);
      }

      return getUserByEmail;
    }()
    /**
     * @name updateUserById
     * @description Interacts with model to find a single user
     * @param { object } attribute the user attribute to update
     * @param { string } id the user's id
     * @returns {object} return the user's data
     */

  }, {
    key: "updateUserById",
    value: function () {
      var _updateUserById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(attribute, id) {
        var name, value, userDetails;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = attribute.name, value = attribute.value;
                _context3.next = 3;
                return _models.User.update((0, _defineProperty2["default"])({}, name, value), {
                  where: {
                    id: id
                  }
                }, {
                  returning: true
                });

              case 3:
                userDetails = _context3.sent;
                return _context3.abrupt("return", userDetails);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateUserById(_x3, _x4) {
        return _updateUserById.apply(this, arguments);
      }

      return updateUserById;
    }()
    /**
    * @name updateUserInfoById
    * @description Interacts with model to find a single user
    * @param { object } attribute the user attribute to update
    * @param { string } email the user's email
    * @returns {object} return the user's data
    */

  }, {
    key: "updateUserInfoById",
    value: function () {
      var _updateUserInfoById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(attribute, email) {
        var firstName, middleName, lastName, birthDate, Address, gender, phoneNumber, userDetails, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                firstName = attribute.firstName, middleName = attribute.middleName, lastName = attribute.lastName, birthDate = attribute.birthDate, Address = attribute.Address, gender = attribute.gender, phoneNumber = attribute.phoneNumber;
                _context4.next = 3;
                return _models.User.update({
                  firstName: firstName,
                  middleName: middleName,
                  lastName: lastName,
                  birthDate: birthDate,
                  gender: gender,
                  Address: Address,
                  phoneNumber: phoneNumber
                }, {
                  where: {
                    email: email
                  },
                  returning: true,
                  plain: true
                });

              case 3:
                userDetails = _context4.sent;
                result = userDetails[1].dataValues;
                delete result.password;
                return _context4.abrupt("return", result);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateUserInfoById(_x5, _x6) {
        return _updateUserInfoById.apply(this, arguments);
      }

      return updateUserInfoById;
    }()
  }]);
  return UserServices;
}();

exports["default"] = UserServices;
//# sourceMappingURL=userServices.js.map