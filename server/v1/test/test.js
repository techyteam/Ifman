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
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('registered');
          res.body.data.should.have.property('isAdmin');
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
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
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
});
