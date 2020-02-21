"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _courseServices = _interopRequireDefault(require("../services/courseServices"));

var _response = _interopRequireDefault(require("../utils/response"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var resLong = _response["default"].resLong,
    resErr = _response["default"].resErr;
/**
 * @class CourseController
 * @description Contains methods for each user related endpoint
 * @exports CourseController
 */

var CourseController =
/*#__PURE__*/
function () {
  function CourseController() {
    (0, _classCallCheck2["default"])(this, CourseController);
  }

  (0, _createClass2["default"])(CourseController, null, [{
    key: "CreateCourse",

    /**
      * @method CreateCourse
      * @description Adds a course to the database
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @returns {object} JSON API Response
      */
    value: function () {
      var _CreateCourse = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var newCourse;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _courseServices["default"].createCourse(req.body);

              case 3:
                newCourse = _context.sent;
                return _context.abrupt("return", resLong(res, 201, newCourse));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", resErr(res, 500, _context.t0.message));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function CreateCourse(_x, _x2) {
        return _CreateCourse.apply(this, arguments);
      }

      return CreateCourse;
    }()
    /**
      * @method GetCourses
      * @description Fetches all courses from the database
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @returns {object} JSON API Response
      */

  }, {
    key: "GetCourses",
    value: function () {
      var _GetCourses = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _courseServices["default"].getAllCourse();

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", resLong(res, 200, result));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", resErr(res, 400, _context2.t0.message));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function GetCourses(_x3, _x4) {
        return _GetCourses.apply(this, arguments);
      }

      return GetCourses;
    }()
    /**
      * @method takeCourse
      * @description Adds a users course details to the database
      * @param {object} req - The Request Object
      * @param {object} res - The Response Object
      * @returns {object} JSON API Response
      */

  }, {
    key: "takeCourse",
    value: function () {
      var _takeCourse = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var body, id, userCourse, newCourse, course;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                body = req.body, id = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _courseServices["default"].getCourseById(id);

              case 4:
                userCourse = _context3.sent;

                if (!userCourse) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", resErr(res, 400, 'You can\'t register for the same course twice'));

              case 7:
                _context3.next = 9;
                return _courseServices["default"].updateUserById({
                  id: id,
                  user: body.id
                });

              case 9:
                newCourse = _context3.sent;
                _context3.next = 12;
                return _courseServices["default"].getCourse(newCourse.userid, newCourse.courseid);

              case 12:
                course = _context3.sent;
                return _context3.abrupt("return", resLong(res, 201, _objectSpread({}, course)));

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", resErr(res, 400, _context3.t0.message));

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 16]]);
      }));

      function takeCourse(_x5, _x6) {
        return _takeCourse.apply(this, arguments);
      }

      return takeCourse;
    }()
  }]);
  return CourseController;
}();

var _default = CourseController;
exports["default"] = _default;
//# sourceMappingURL=coursesControllers.js.map