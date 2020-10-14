import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';

import app from '../app';

// const expect = chai.expect;

chai.should();

chai.use(chaiHttp);

const apiEndPoint = '/api/v1/';
const userEndPoint = `${apiEndPoint}auth/`;

const user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const userWithNoEmail = {
  password: '1234',
  firstName: 'ade',
  lastName: 'wale',
};

const userEmailWithNoKeyValue = {
  email: '',
  password: '1234',
  firstName: 'ade',
  lastName: 'wale',
};

const userWithNoPassword = {
  email: 'ad@gmail.com',
  firstName: 'ade',
  lastName: 'wale',
};

describe('Signup User', () => {
  it('Should create a new user', (done) => {
    chai.request(app)
      .post(`${userEndPoint}signup`)
      .send(user)
      .end((err, res) => {
        console.log(err, 'ERROR RESPONSE');
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('tokens');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('email');
        done();
      });
  });
  it('Should return 409 if email already exists', (done) => {
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
  it('Should return 400 if password is omitted', (done) => {
    chai
      .request(app)
      .post(`${userEndPoint}signup`)
      .send(userWithNoPassword)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });

  it('Should return 400 if email is omitted', (done) => {
    chai
      .request(app)
      .post(`${userEndPoint}signup`)
      .send(userWithNoEmail)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });

  it('Should return 400 if email key is provided without value', (done) => {
    chai
      .request(app)
      .post(`${userEndPoint}signup`)
      .send(userEmailWithNoKeyValue)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});

describe('Signin', () => {
  it('Should login a user successfully', (done) => {
    chai.request(app)
      .post(`${userEndPoint}signin`)
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('tokens');
        done();
      });
  });
  it('Should deny access if wrong email is provided', (done) => {
    const login = {
      email: 'thisEmailDoesNotExist@gmail.com',
      password: 'pA55w0rd',
    };
    chai.request(app)
      .post(`${userEndPoint}signin`)
      .send(login)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
  it('Should deny access if wrong password is provided', (done) => {
    const login = {
      email: user.email,
      password: 'justarandominvalidpassword',
    };
    chai.request(app)
      .post(`${userEndPoint}signin`)
      .send(login)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
  it('Should return 400 if password is ommited', (done) => {
    const login = {
      email: user.email,
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
});
