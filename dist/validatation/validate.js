"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var validate = function validate(object, schema, req, res, next) {
  var _Joi$validate = _joi["default"].validate(object, schema, {
    abortEarly: false
  }),
      error = _Joi$validate.error,
      value = _Joi$validate.value;

  if (error) {
    return res.status(400).send({
      status: 'error',
      error: error.details.map(function (detail) {
        return detail.message;
      })
    });
  }

  req.body = value;
  return next();
};

var _default = validate;
exports["default"] = _default;
//# sourceMappingURL=validate.js.map