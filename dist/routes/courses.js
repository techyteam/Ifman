"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _inputValidator = _interopRequireDefault(require("../validatation/inputValidator"));

var _coursesControllers = _interopRequireDefault(require("../controllers/coursesControllers"));

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var verifyAdmin = _authenticate["default"].verifyAdmin,
    verifyToken = _authenticate["default"].verifyToken;
var validateCourse = _inputValidator["default"].validateCourse;
var CreateCourse = _coursesControllers["default"].CreateCourse,
    GetCourses = _coursesControllers["default"].GetCourses,
    takeCourse = _coursesControllers["default"].takeCourse;

var courseRoutes = _express["default"].Router();

courseRoutes.post('/courses', verifyToken, verifyAdmin, validateCourse, CreateCourse);
courseRoutes.get('/courses', GetCourses);
courseRoutes.post('/courses/:id/register', verifyToken, takeCourse);
var _default = courseRoutes;
exports["default"] = _default;
//# sourceMappingURL=courses.js.map