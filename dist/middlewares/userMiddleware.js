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

var _userServices = _interopRequireDefault(require("../services/userServices"));

var _response = _interopRequireDefault(require("../utils/response"));

var resErr = _response["default"].resErr;
/**
 * User Middlewares Class
 */

var UserMiddlewares =
/*#__PURE__*/
function () {
  function UserMiddlewares() {
    (0, _classCallCheck2["default"])(this, UserMiddlewares);
  }

  (0, _createClass2["default"])(UserMiddlewares, null, [{
    key: "checkUserExists",

    /**
     * @name checkUserExists
     * @description Checks if a user exists in the database
     * @param {object} req The request object
     * @param {object} res The response object
     * @param {object} next The response object
     * @returns {object} The API response or next()
     */
    value: function () {
      var _checkUserExists = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var email, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                email = req.body.email;
                _context.next = 4;
                return _userServices["default"].getUserByEmail(email);

              case 4:
                data = _context.sent;

                if (data) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", next());

              case 7:
                return _context.abrupt("return", resErr(res, 409, 'Unsuccesful, user already exists, kindly use a different email.'));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", resErr(res, 500, _context.t0.message));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function checkUserExists(_x, _x2, _x3) {
        return _checkUserExists.apply(this, arguments);
      }

      return checkUserExists;
    }()
    /**
     * @name doesUserExist
     * @description Checks if a user exists in the database
     * @param {object} req The request object
     * @param {object} res The response object
     * @param {object} next The response object
     * @returns {object} The API response or next()
     */

  }, {
    key: "doesUserExist",
    value: function () {
      var _doesUserExist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var email, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                email = req.body.email;
                _context2.next = 4;
                return _userServices["default"].getUserByEmail(email);

              case 4:
                data = _context2.sent;

                if (!data) {
                  _context2.next = 8;
                  break;
                }

                req.user = data.dataValues;
                return _context2.abrupt("return", next());

              case 8:
                return _context2.abrupt("return", resErr(res, 404, 'Unsuccesful, User does not exist.'));

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", resErr(res, 500, _context2.t0.message));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function doesUserExist(_x4, _x5, _x6) {
        return _doesUserExist.apply(this, arguments);
      }

      return doesUserExist;
    }()
    /**
     * @name confirmUserExists
     * @description Checks if a user exists in the database
     * @param {object} req The request object
     * @param {object} res The response object
     * @param {object} next The response object
     * @returns {object} The API response or next()
     */

  }, {
    key: "confirmUserExists",
    value: function () {
      var _confirmUserExists = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res, next) {
        var user, data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                user = req.user;
                _context3.next = 4;
                return _userServices["default"].getUserByEmail(user.email);

              case 4:
                data = _context3.sent;

                if (!data) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", next());

              case 7:
                return _context3.abrupt("return", resErr(res, 409, 'Unsuccesful, User does not exist. Please contact Admin'));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", resErr(res, 500, _context3.t0.message));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function confirmUserExists(_x7, _x8, _x9) {
        return _confirmUserExists.apply(this, arguments);
      }

      return confirmUserExists;
    }()
    /**
     * @name userVerified
     * @description Checks if a user is verified in the database
     * @param {object} req The request object
     * @param {object} res The response object
     * @param {object} next The response object
     * @returns {object} The API response or next()
     */

  }, {
    key: "isUserVerified",
    value: function () {
      var _isUserVerified = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res, next) {
        var decoded, user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                decoded = _utils["default"].decodeToken(req.query.token);
                _context4.next = 4;
                return _userServices["default"].getUserByEmail(decoded.email);

              case 4:
                user = _context4.sent;

                if (user.isVerified) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", next());

              case 7:
                return _context4.abrupt("return", resErr(res, 400, 'Unsuccesful, Your account has already been Verified.'));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", resErr(res, 500, 'Link is Invalid or expired.'));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function isUserVerified(_x10, _x11, _x12) {
        return _isUserVerified.apply(this, arguments);
      }

      return isUserVerified;
    }()
  }]);
  return UserMiddlewares;
}();

exports["default"] = UserMiddlewares;
//# sourceMappingURL=userMiddleware.js.map