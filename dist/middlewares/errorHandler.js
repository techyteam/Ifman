"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @exports ErrorHandler
 * @class ErrorHandler
 */
var ErrorHandler =
/*#__PURE__*/
function () {
  function ErrorHandler() {
    (0, _classCallCheck2["default"])(this, ErrorHandler);
  }

  (0, _createClass2["default"])(ErrorHandler, null, [{
    key: "sendError",

    /**
     * @description Handles  uncaught erros in the app
     * @method sendError
     * @param {object} err
     * @param {object} req
     * @param {object} res
     * @param {function} next
     * @returns {(function|object)} Function next() or JSON API response
     */
    value: function sendError(err, req, res, next) {
      if (res.headersSent) {
        return next(err);
      }

      return res.status(err.status || 500).json({
        status: res.statusCode,
        error: err.message
      });
    }
  }]);
  return ErrorHandler;
}();

var _default = ErrorHandler;
exports["default"] = _default;
//# sourceMappingURL=errorHandler.js.map