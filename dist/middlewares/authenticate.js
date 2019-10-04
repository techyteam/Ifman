"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = _interopRequireDefault(require("../utils"));

var _response = _interopRequireDefault(require("../utils/response"));

var _userServices = _interopRequireDefault(require("../services/userServices"));

/* eslint-disable prefer-destructuring */
var resErr = _response["default"].resErr;
/**
 * @class AuthenticateUser
 * @description Contains methods for user authentication
 * @exports AuthenticateUser
 */

var AuthenticateUser =
/*#__PURE__*/
function () {
  function AuthenticateUser() {
    (0, _classCallCheck2["default"])(this, AuthenticateUser);
  }

  (0, _createClass2["default"])(AuthenticateUser, null, [{
    key: "verifyToken",

    /**
     * @method verifyToken
     * @description Verifies if token is valid
     * @param  {object} req - The user request object
     * @param  {object} res - The user res response object
     * @param  {function} next - The next() Function
     * @returns {object} req.user - The payload object
     */
    value: function () {
      var _verifyToken = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var token, decoded, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = req.headers.authorization;

                if (token) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", resErr(res, 400, 'No token Provided'));

              case 3:
                token = token.split(' ')[1];
                _context.prev = 4;
                decoded = _utils["default"].decodeToken(token);
                _context.next = 8;
                return _userServices["default"].getUserByEmail(decoded.email);

              case 8:
                user = _context.sent;

                if (user) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", resErr(res, 400, 'Invalid Token'));

              case 11:
                req.user = user;
                return _context.abrupt("return", next());

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", resErr(res, 500, _context.t0.message));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 15]]);
      }));

      function verifyToken(_x, _x2, _x3) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
    /**
     * @method verifyAdmin
     * @description verifies the user token to determine if the user is admin or not
     * @param {object} req - The Request Object
     * @param {object} res - The Response Object
     * @param {object} next - The next Object
     * @returns {object} JSON API Response
     */

  }, {
    key: "verifyAdmin",
    value: function verifyAdmin(req, res, next) {
      if (!req.user.isAdmin) {
        return resErr(res, 403, 'Unauthorized Access');
      }

      return next();
    }
  }]);
  return AuthenticateUser;
}();

var _default = AuthenticateUser;
exports["default"] = _default;
//# sourceMappingURL=authenticate.js.map