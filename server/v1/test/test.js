import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.should();

chai.use(chaiHttp);

const apiEndPoint = '/api/v1/';
const userEndPoint = `${apiEndPoint}auth/`;

describe('Authentication Tests', () => {
  describe('User Sign Up Tests', () => {
    describe(`POST ${userEndPoint}signup`, () => {
      it('Should create a new user', (done) => {
        const user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: 'temi@testmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('firstname');
          res.body.data.should.have.property('lastname');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('registered');
          res.body.data.should.have.property('isadmin');
          done();
        });
      });
      
      it('Should return 400 if firstname is ommited', (done) => {
        const user = {
          lastName: 'otokurfor',
          email: 'temi@testmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      it('Should return 400 if lastname is ommited', (done) => {
        const user = {
          firstName: 'temi',
          email: 'temi@testmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      it('Should return 400 if email is ommited', (done) => {
        const user = {
          firstname: 'temi',
          lastName: 'otokurfor',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      it('Should return 400 if email key is provided without value', (done) => {
        const user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: ' ',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      it('Should return 409 if email already exists', (done) => {
        const user = {
          firstName: 'jasmin',
          lastName: 'abdul',
          email: 'jas.abdul@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      
      it('Should return 400 if password is ommited', (done) => {
        const user = {
          firstName: 'temi',
          lastName: 'otokurfor',
          email: 'temi@testmail.com',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
    });
  });

  describe('User Login tests', () => {
    describe(`POST ${userEndPoint}signin`, () => {
      it('Should login a user successfully', (done) => {
        const login = {
          email: 'temi@testmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((err, res) => {
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
      
      it('Should deny access if wrong email is provided', (done) => {
        const login = {
          email: 'kcmykirl@gmail.com',
          password: 'pA55w0rd',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.equal('The email and password you entered does not exist! Please check and try again.');
          done();
        });
      });
      
      it('Should deny access if wrong password is provided', (done) => {
        const login = {
          email: 'temi@testmail.com',
          password: 'passweod',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.equal('The email and password you entered does not exist! Please check and try again.');
          done();
        });
      });
      
      it('Should return 400 if email is not provided', (done) => {
        const login = {
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
      
      it('Should return 400 if password is ommited', (done) => {
        const login = {
          email: 'temi@testmail.com',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
    });
  }); 
  describe('Create Courses Tests', () => {
    describe('POST requests to admin protected routes', () => {
      it('Should return 403 if token is for user', (done) => {
        const login = {
          email: 'temi@testmail.com',
          password: 'password',
        };
        
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13,
          };
          
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should Successfully Create a Course', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13,
          };

          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
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
      it('Should return 404 if isadmin token is empty', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13,
          }; 
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', '')
          .send(course)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      it('Should return 400 if courseTitle isn\'t specified', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13,
          };
          
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      
      it('Should return 400 if memberFees isn\'t specified', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            nonmemberFee: 115000,
            startDate: 10,
            endDate: 13,
          };
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      
      it('Should return 400 if nonmemberFee isn\'t specified', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            startDate: 10,
            endDate: 13,
          }; 
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });

      it('Should return 400 if endDate isn\'t specified', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            startDate: 10,
          }; 
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });
      });
      
      it('Should return 400 if startDate isn\'t specified', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          const course = {
            CourseTitle: 'Facility Management',
            memberFees: 105000,
            nonmemberFee: 115000,
            endDate: 13,
          }; 
          chai.request(app)
          .post(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(course)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
          });
        });  
      });
    });
  });
  describe('Get All Courses Test', () => {
    describe('Get requests for both user and admin', () => {
      it('should return 200 and get all trips', (done) => {
        const login = {
          email: 'temi@testmail.com',
          password: 'password',
        };
        
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          
          chai.request(app)
          .get(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(token)
          .end((err, res) => {
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
            
      it('should return 200 and get all trips', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          
          chai.request(app)
          .get(`${apiEndPoint}courses`)
          .set('Authorization', token)
          .send(token)
          .end((err, res) => {
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
      it('should return 400 if token is invalid', (done) => {
        const login = {
          email: 'dassyakolo@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signin`)
        .send(login)
        .end((loginErr, loginRes) => {
          const token = `Bearer ${loginRes.body.data.token}`;
          
          chai.request(app)
          .get(`${apiEndPoint}courses`)
          .set('Authorization', '')
          .send(token)
          .end((err, res) => {
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
