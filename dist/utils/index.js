"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * @description Utils controller Class
 */
var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }

  (0, _createClass2["default"])(Utils, null, [{
    key: "hashPassword",

    /**
     * hashPassword
     * @description hashes a password
     * @param { string } password
     * @returns { string } hashed password
     */
    value: function hashPassword(password) {
      return _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(8));
    }
    /**
     * comparePassword
     * @description compares two passwords
     * @param { String } password
     * @param { String } hashedPassword
     * @returns { Boolean } True or false
     */

  }, {
    key: "comparePassword",
    value: function comparePassword(password, hashedPassword) {
      return _bcryptjs["default"].compareSync(password, hashedPassword);
    }
    /**
     * generateToken
     * @description generates authentication token
     * @param { Object } payload - { id, email }
     * @returns { String } token
     */

  }, {
    key: "generateToken",
    value: function generateToken(payload) {
      return _jsonwebtoken["default"].sign(payload, process.env.SECRET, {
        expiresIn: '2h'
      });
    }
    /**
     * decodeToken
     * @description decodes the token and returns the corresponding payload
     * @param { String } token
     * @returns { Object } payload - { id, email, isAdmin }
     * @memberof Utils
     */

  }, {
    key: "decodeToken",
    value: function decodeToken(token) {
      return _jsonwebtoken["default"].verify(token, process.env.SECRET);
    }
  }]);
  return Utils;
}();

var _default = Utils;
exports["default"] = _default;
//# sourceMappingURL=index.js.map