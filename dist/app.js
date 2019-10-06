"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

var _routes = _interopRequireDefault(require("./routes"));

var isProduction = process.env.NODE_ENV === 'production'; // Create global app object

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

if (!isProduction) {
  app.use((0, _errorhandler["default"])());
}

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  return res.status(301).redirect('/api');
});
app.use('/api', _routes["default"]);
app.use('*', function (req, res) {
  return res.status(404).json({
    status: res.statusCode,
    error: 'Sorry!!, the page you are looking for cannot be found'
  });
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map