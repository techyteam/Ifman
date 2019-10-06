"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userControllers = _interopRequireDefault(require("../controllers/userControllers"));

var _userMiddleware = _interopRequireDefault(require("../middlewares/userMiddleware"));

var _inputValidator = _interopRequireDefault(require("../validatation/inputValidator"));

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var signUp = _userControllers["default"].signUp,
    signIn = _userControllers["default"].signIn,
    updateUserInfo = _userControllers["default"].updateUserInfo;
var validateUser = _inputValidator["default"].validateUser,
    validateLogin = _inputValidator["default"].validateLogin;
var checkUserExists = _userMiddleware["default"].checkUserExists,
    doesUserExist = _userMiddleware["default"].doesUserExist,
    confirmUserExists = _userMiddleware["default"].confirmUserExists;
var verifyToken = _authenticate["default"].verifyToken;

var userRoutes = _express["default"].Router();

userRoutes.post('/signup', validateUser, checkUserExists, signUp);
userRoutes.post('/signin', validateLogin, doesUserExist, signIn);
userRoutes.patch('/user/update-profile', verifyToken, confirmUserExists, updateUserInfo);
var _default = userRoutes;
exports["default"] = _default;
//# sourceMappingURL=users.js.map