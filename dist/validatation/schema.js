"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

/* eslint-disable no-param-reassign */

/**
 * @class Schema
 * @description Validates user input.
 * @exports Schema
 */
var Schema =
/*#__PURE__*/
function () {
  function Schema() {
    (0, _classCallCheck2["default"])(this, Schema);
  }

  (0, _createClass2["default"])(Schema, null, [{
    key: "createUserSchema",

    /**
      * @method createUserSchema
      * @description Validates the user object from a post request
      * @param {object} user - The user object to be validated
      * @returns {object} An object specifying weather the input was valid or not.
      */
    value: function createUserSchema() {
      var schema = {
        email: _joi["default"].string().trim().lowercase().email({
          minDomainSegments: 2
        }).required(),
        password: _joi["default"].string().min(8).required()
      };
      return schema;
    }
    /**
      * @method loginSchema
      * @description Validates the login details from a post request
      * @param {object} login - The login object to be validated
      * @returns {object} An object specifying weather the input was valid or not.
      */

  }, {
    key: "loginSchema",
    value: function loginSchema() {
      var schema = {
        email: _joi["default"].string().trim().lowercase().email({
          minDomainSegments: 2
        }).required(),
        password: _joi["default"].string().min(8).required()
      };
      return schema;
    }
    /**
    * @method createCourse
    * @description Validates the course details from a post request
    * @param {object} course - The account object to be validated
    * @returns {object} An object specifying weather the input was valid or not.
    */

  }, {
    key: "createCourse",
    value: function createCourse() {
      var schema = {
        courseTitle: _joi["default"].string().trim().lowercase().required(),
        memberFees: _joi["default"].number().min(2000).required(),
        nonMemberFees: _joi["default"].number().min(2000).required(),
        startDate: _joi["default"].date().format('YYYY-MM-DD').required(),
        endDate: _joi["default"].date().format('YYYY-MM-DD').required()
      };
      return schema;
    }
    /**
      * @method userProfileSchema
      * @description Validates the user object from a post request
      * @param {object} user - The user object to be validated
      * @returns {object} An object specifying weather the input was valid or not.
      */

  }, {
    key: "userProfileSchema",
    value: function userProfileSchema() {
      var schema = {
        firstName: _joi["default"].string().lowercase().trim().required().regex(/^[a-zA-Z]+$/).error(function (errors) {
          errors.forEach(function (err) {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'first_name can only contain letters';
                break;

              default:
                break;
            }
          });
          return errors;
        }),
        middleName: _joi["default"].string().lowercase().trim().required().regex(/^[a-zA-Z]+$/).error(function (errors) {
          errors.forEach(function (err) {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'last_name can only contain letters';
                break;

              default:
                break;
            }
          });
          return errors;
        }),
        lastName: _joi["default"].string().lowercase().trim().required().regex(/^[a-zA-Z]+$/).error(function (errors) {
          errors.forEach(function (err) {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'last_name can only contain letters';
                break;

              default:
                break;
            }
          });
          return errors;
        }),
        birthDate: _joi["default"].date().format('YYYY-MM-DD').required(),
        gender: _joi["default"].string().trim().lowercase().required(),
        phoneNumber: _joi["default"].string().phoneNumber({
          defaultCountry: 'BE',
          format: 'e164'
        }).validate('494322456')
      };
      return schema;
    }
  }]);
  return Schema;
}();

var _default = Schema;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map