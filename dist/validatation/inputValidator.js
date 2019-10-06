"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _schema = _interopRequireDefault(require("./schema"));

var _validate = _interopRequireDefault(require("./validate"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @class InputValidator
 * @description Validates all user inputs
 * @exports InputValidator
 */
var InputValidator =
/*#__PURE__*/
function () {
  function InputValidator() {
    (0, _classCallCheck2["default"])(this, InputValidator);
  }

  (0, _createClass2["default"])(InputValidator, null, [{
    key: "validateUser",

    /**
        * @method validateUser
        * @description Validates the user object passed in from the request body
        * @param {object} req - The Request Object
        * @param {object} res - The Response Object
        * @param {function} next - The next function to point to the next middleware
        * @returns {function} next() - The next function
        */
    value: function validateUser(req, res, next) {
      var user = _objectSpread({}, req.body);

      return (0, _validate["default"])(user, _schema["default"].createUserSchema(), req, res, next);
    }
    /**
    * @method validateLogin
    * @description Validates the login details passed in from the request body
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @param {function} next - The next function to point to the next middleware
    * @returns {function} next() - The next function
    */

  }, {
    key: "validateLogin",
    value: function validateLogin(req, res, next) {
      var login = _objectSpread({}, req.body);

      return (0, _validate["default"])(login, _schema["default"].loginSchema(), req, res, next);
    }
    /**
      * @method validateCourse
      * @description Validates the course details passed in from the request body
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @param {function} next - The next function to point to the next middleware
      * @returns {function} next() - The next function
      */

  }, {
    key: "validateCourse",
    value: function validateCourse(req, res, next) {
      var type = _objectSpread({}, req.body);

      return (0, _validate["default"])(type, _schema["default"].createCourse(), req, res, next);
    }
    /**
      * @method validateUserProfile
      * @description Validates the user details passed in from the request body
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @param {function} next - The next function to point to the next middleware
      * @returns {function} next() - The next function
      */

  }, {
    key: "validateUserProfile",
    value: function validateUserProfile(req, res, next) {
      var type = _objectSpread({}, req.body);

      return this.validateUserProfile(type, _schema["default"].createCourse(), req, res, next);
    }
  }]);
  return InputValidator;
}();

var _default = InputValidator;
exports["default"] = _default;
//# sourceMappingURL=inputValidator.js.map