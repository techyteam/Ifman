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

var _models = require("../models");

var Course = _models.course;
/**
 * Course service Class
 */

var CourseServices =
/*#__PURE__*/
function () {
  function CourseServices() {
    (0, _classCallCheck2["default"])(this, CourseServices);
  }

  (0, _createClass2["default"])(CourseServices, null, [{
    key: "createCourse",

    /**
     * @name CreateCourse
     * @description Interacts with model to create a new Course
     * @param { string } CourseData the Course's data
     * @returns {object} return the updated field
     */
    value: function () {
      var _createCourse = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(CourseData) {
        var _ref, dataValues;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Course.create(CourseData);

              case 2:
                _ref = _context.sent;
                dataValues = _ref.dataValues;
                return _context.abrupt("return", dataValues);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createCourse(_x) {
        return _createCourse.apply(this, arguments);
      }

      return createCourse;
    }()
    /**
     * @name GetCourseById
     * @description Interacts with model to find a single Course
     * @param { string } id the Course's id
     * @returns {object} return the Course's data
     */

  }, {
    key: "getCourseById",
    value: function () {
      var _getCourseById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var CourseDetails;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Course.findOne({
                  where: {
                    id: id
                  }
                });

              case 2:
                CourseDetails = _context2.sent;
                return _context2.abrupt("return", CourseDetails);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCourseById(_x2) {
        return _getCourseById.apply(this, arguments);
      }

      return getCourseById;
    }()
    /**
     * @name GetAllCourse
     * @description Interacts with model to find a single Course
     * @param { string } id the Course's id
     * @returns {object} return the Course's data
     */

  }, {
    key: "getAllCourse",
    value: function () {
      var _getAllCourse = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var CourseDetails;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Course.findAll();

              case 2:
                CourseDetails = _context3.sent;
                return _context3.abrupt("return", CourseDetails);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAllCourse() {
        return _getAllCourse.apply(this, arguments);
      }

      return getAllCourse;
    }()
    /**
     * @name updateCourseById
     * @description Interacts with model to find a single Course
     * @param { object } attribute the Course attribute to update
     * @param { string } id the Course's id
     * @returns {object} return the Course's data
     */

  }, {
    key: "updateCourseById",
    value: function () {
      var _updateCourseById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(attribute, id) {
        var name, value, CourseDetails;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = attribute.name, value = attribute.value;
                _context4.next = 3;
                return Course.update((0, _defineProperty2["default"])({}, name, value), {
                  where: {
                    id: id
                  }
                }, {
                  returning: true
                });

              case 3:
                CourseDetails = _context4.sent;
                return _context4.abrupt("return", CourseDetails);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateCourseById(_x3, _x4) {
        return _updateCourseById.apply(this, arguments);
      }

      return updateCourseById;
    }()
  }]);
  return CourseServices;
}();

exports["default"] = CourseServices;
//# sourceMappingURL=courseServices.js.map