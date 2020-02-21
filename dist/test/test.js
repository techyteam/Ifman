"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../app"));

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var apiEndPoint = '/api/v1/';
var userEndPoint = "".concat(apiEndPoint, "auth/");
describe('Authentication Tests', function () {
  describe('User Sign Up Tests', function () {
    describe("POST ".concat(userEndPoint, "signup"), function () {
      it('Should create a new user', function (done) {
        var user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: 'temi@testmail.com',
          password: 'password',
          phoneNumber: 123345622
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('firstname');
          res.body.data.should.have.property('lastname');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('phonenumber');
          res.body.data.should.have.property('isadmin');
          done();
        });
      });
      it('Should return 400 if firstname is ommited', function (done) {
        var user = {
          lastName: 'otokurfor',
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if lastname is ommited', function (done) {
        var user = {
          firstName: 'temi',
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if email is ommited', function (done) {
        var user = {
          firstname: 'temi',
          lastName: 'otokurfor',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if email key is provided without value', function (done) {
        var user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: ' ',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 409 if email already exists', function (done) {
        var user = {
          firstName: 'jasmin',
          lastName: 'abdul',
          email: 'jas.abdul@gmail.com',
          password: 'password',
          phoneNumber: 123456781
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if password is ommited', function (done) {
        var user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: 'temi@testmail.com'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signup")).send(user).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
    });
  });
  describe('User Login tests', function () {
    describe("POST ".concat(userEndPoint, "signin"), function () {
      it('Should login a user successfully', function (done) {
        var login = {
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('firstname');
          res.body.data.should.have.property('lastname');
          res.body.data.should.have.property('email');
          done();
        });
      });
      it('Should deny access if wrong email is provided', function (done) {
        var login = {
          email: 'kcmykirl@gmail.com',
          password: 'pA55w0rd'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (err, res) {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should deny access if wrong password is provided', function (done) {
        var login = {
          email: 'temi@testmail.com',
          password: 'passweod'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (err, res) {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if email is not provided', function (done) {
        var login = {
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      it('Should return 400 if password is ommited', function (done) {
        var login = {
          email: 'temi@testmail.com'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
    });
  });
  describe('Create Courses Tests', function () {
    describe('POST requests to admin protected routes', function () {
      it('Should return 403 if token is for user', function (done) {
        var login = {
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should Successfully Create a Course', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.data.should.be.a('object');
            res.body.data.should.have.property('id');
            res.body.data.should.have.property('coursetitle');
            res.body.data.should.have.property('memberfees');
            res.body.data.should.have.property('nonmemberfee');
            res.body.data.should.have.property('startdate');
            res.body.data.should.have.property('enddate');
            done();
          });
        });
      });
      it('Should return 404 if isadmin token is empty', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', '').send(course).end(function (err, res) {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if courseTitle isn\'t specified', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if memberFees isn\'t specified', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if nonmemberFee isn\'t specified', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            startDate: 10,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if endDate isn\'t specified', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if startDate isn\'t specified', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);
          var course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            endDate: 13
          };

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses")).set('Authorization', token).send(course).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
    });
  });
  describe('Get All Courses Test', function () {
    describe('Get requests for both user and admin', function () {
      it('should return 200 and get all trips', function (done) {
        var login = {
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).get("".concat(apiEndPoint, "courses")).set('Authorization', token).send(token).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('coursetitle');
            res.body.data[0].should.have.property('memberfees');
            res.body.data[0].should.have.property('nonmemberfee');
            res.body.data[0].should.have.property('startdate');
            res.body.data[0].should.have.property('enddate');
            done();
          });
        });
      });
      it('should return 200 and get all trips', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).get("".concat(apiEndPoint, "courses")).set('Authorization', token).send(token).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('coursetitle');
            res.body.data[0].should.have.property('memberfees');
            res.body.data[0].should.have.property('nonmemberfee');
            res.body.data[0].should.have.property('startdate');
            res.body.data[0].should.have.property('enddate');
            done();
          });
        });
      });
      it('should return 400 if token is invalid', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).get("".concat(apiEndPoint, "courses")).set('Authorization', '').send(token).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
    });
  });
  describe('Register for Courses Test', function () {
    describe('Post requests for both users', function () {
      it('should return 200 and register a course', function (done) {
        var login = {
          email: 'temi@testmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).post("".concat(apiEndPoint, "courses/:id/register")).set('Authorization', token).send(token).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('coursetitle');
            res.body.data[0].should.have.property('memberfees');
            res.body.data[0].should.have.property('nonmemberfee');
            res.body.data[0].should.have.property('startdate');
            res.body.data[0].should.have.property('enddate');
            done();
          });
        });
      });
      it('should return 200 and get all trips', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).get("".concat(apiEndPoint, "courses")).set('Authorization', token).send(token).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('coursetitle');
            res.body.data[0].should.have.property('memberfees');
            res.body.data[0].should.have.property('nonmemberfee');
            res.body.data[0].should.have.property('startdate');
            res.body.data[0].should.have.property('enddate');
            done();
          });
        });
      });
      it('should return 400 if token is invalid', function (done) {
        var login = {
          email: 'dassyakolo@gmail.com',
          password: 'password'
        };

        _chai["default"].request(_app["default"]).post("".concat(userEndPoint, "signin")).send(login).end(function (loginErr, loginRes) {
          var token = "Bearer ".concat(loginRes.body.data.token);

          _chai["default"].request(_app["default"]).get("".concat(apiEndPoint, "courses")).set('Authorization', '').send(token).end(function (err, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
    });
  });
});
//# sourceMappingURL=test.js.map