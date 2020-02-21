"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = _interopRequireDefault(require("../utils"));

var _userServices = _interopRequireDefault(require("../services/userServices"));

var _response = _interopRequireDefault(require("../utils/response"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var resLong = _response["default"].resLong,
    resErr = _response["default"].resErr;
/**
 * @class UserController
 * @description Contains methods for each user related endpoint
 * @exports UserController
 */

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "signUp",

    /**
    * @method signUp
    * @description Adds a user to the database
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var email, password, hashedPassword, user, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                email = req.body.email;
                password = req.body.password;
                hashedPassword = _utils["default"].hashPassword(password);
                password = hashedPassword;
                _context.next = 7;
                return _userServices["default"].createUser({
                  email: email,
                  password: password
                });

              case 7:
                user = _context.sent;
                token = _utils["default"].generateToken({
                  email: email
                });
                res.set('Authorization', "Bearer ".concat(token));
                return _context.abrupt("return", resLong(res, 201, _objectSpread({}, user, {
                  token: token
                })));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", resErr(res, 500, _context.t0.message));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function signUp(_x, _x2) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
    /**
    * @method signIn
    * @description Logs in a user
    * @param {object} req - The Request Object
    * @param {object} res - The Response Object
    * @returns {object} JSON API Response
    */

  }, {
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, user, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context2.next = 4;
                return _userServices["default"].getUserByEmail(email);

              case 4:
                user = _context2.sent;

                if (!_utils["default"].comparePassword(password, user.password)) {
                  _context2.next = 9;
                  break;
                }

                delete user.password;
                token = _utils["default"].generateToken({
                  email: email
                });
                return _context2.abrupt("return", resLong(res, 200, {
                  user: user,
                  token: token
                }));

              case 9:
                return _context2.abrupt("return", resErr(res, 401, 'The email and password you entered does not exist! Please check and try again.'));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);

                if (!(_context2.t0.name === 'emailNull')) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return", resErr(res, 404, 'No user found for the provided email'));

              case 16:
                return _context2.abrupt("return", resErr(res, 500, _context2.t0.message));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      function signIn(_x3, _x4) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
    /**
    * @name updateUserInfo
    * @description Updates user profile to complete registration
    * @param {object} req The request object
    * @param {object} res The response object
    * @returns {object} The API response
    */

  }, {
    key: "updateUserInfo",
    value: function () {
      var _updateUserInfo = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var userData, user, data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                userData = _objectSpread({}, req.body);
                user = req.user;
                userData.password = _utils["default"].hashPassword(userData.password);
                _context3.next = 6;
                return _userServices["default"].updateUserInfoById(_objectSpread({}, userData), user.email);

              case 6:
                data = _context3.sent;
                return _context3.abrupt("return", resLong(res, 201, data));

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

      function updateUserInfo(_x5, _x6) {
        return _updateUserInfo.apply(this, arguments);
      }

      return updateUserInfo;
    }()
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=userControllers.js.map