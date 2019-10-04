"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./users"));

var _courses = _interopRequireDefault(require("./courses"));

var router = _express["default"].Router(); // Home


router.get('/', function (req, res) {
  return res.status(301).redirect('api/v1');
});
router.get('/v1', function (req, res) {
  return res.status(200).json({
    status: res.statusCode,
    message: 'Welcome to IFMAN API version 1'
  });
});
router.get('/', function (req, res) {
  res.status(200).json({
    message: 'welcome to version 1 of ifman API'
  });
}); // Routes

router.use('/v1/auth', _users["default"]);
router.use('/v1', _courses["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map