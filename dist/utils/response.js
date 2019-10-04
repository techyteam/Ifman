"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ResponseMsg =
/*#__PURE__*/
function () {
  function ResponseMsg() {
    (0, _classCallCheck2["default"])(this, ResponseMsg);
  }

  (0, _createClass2["default"])(ResponseMsg, null, [{
    key: "resErr",

    /**
       * @static responseErr
       * @param { Object } res
       * @param { Number } status
       * @param { Object } message
       * @returns respsonse body
       * @description ddefines the standard response format in the case of an error
       * @memberof ResponseMsg
       */
    value: function resErr(res, status, message) {
      return res.status(status).json({
        status: 'error',
        error: message
      });
    }
    /**
       * @static response
       * @param { Object } res
       * @param { Number } status
       * @param { Object } message
       * @returns respsonse body
       * @description ddefines the standard response format when a data object is to be returned
       * @memberof ResponseMsg
       */

  }, {
    key: "resLong",
    value: function resLong(res, status, data) {
      return res.status(status).json({
        status: 'success',
        data: data
      });
    }
    /**
       *
       *
       * @static
       * @param {*} res
       * @param {*} status
       * @param {*} message
       * @returns response body
       * @memberof ResponseMsg
       */

  }, {
    key: "resShort",
    value: function resShort(res, status, message) {
      return res.status(status).json({
        status: 'success',
        data: {
          message: message
        }
      });
    }
  }]);
  return ResponseMsg;
}();

var _default = ResponseMsg;
exports["default"] = _default;
//# sourceMappingURL=response.js.map