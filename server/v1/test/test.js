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
          firstName: 'Kevin',
          lastName: 'Opara',
          email: 'kevin@gmail.com',
          password: 'password',
        };
        chai.request(app)
        .post(`${userEndPoint}signup`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('type');
          res.body.data.should.have.property('isAdmin');
          done();
        });
      });
      
      it('Should return 400 if firstname is ommited', (done) => {
        const user = {
          lastName: 'Opara',
          email: 'kevin@gmail.com',
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
          firstName: 'Kevin',
          email: 'kevin@gmail.com',
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
          firstname: 'kevin',
          lastName: 'Opara',
          password: 'pA55w0rd',
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
          firstName: 'kevin',
          lastName: 'Opara',
          password: 'password',
          email: '',
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
          lastName: 'Ngwobia',
          email: 'kevin@gmail.com',
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
          firstName: 'kevin',
          lastName: 'Opara',
          email: 'kevin@gmail.com',
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
});
