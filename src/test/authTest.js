import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.should();

chai.use(chaiHttp);

const apiEndPoint = '/api/v1/';
const userEndPoint = `${apiEndPoint}auth/`;

describe('Signup Error', () => {
  it('Should return 400 if password is omitted', (done) => {
    const user = {
      email: 'temi@testmail.com',
    };
    chai
      .request(app)
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

describe('Signup Error', () => {
  it('Should return 400 if email is omitted', (done) => {
    const user = {
      password: 'password',
    };
    chai
      .request(app)
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

describe('Signup Error', () => {
  it('Should return 400 if email key is provided without value', (done) => {
    const user = {
      firstName: 'temi',
      lastName: 'otokurfor',
      email: ' ',
      password: 'password',
    };
    chai
      .request(app)
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

// describe(`POST ${userEndPoint}signup`, () => {
//   it('Should create a new user', (done) => {
//     const user = {
//       email: 'temi@testmail.com',
//       password: 'password',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signup`)
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.body.should.be.a('object');
//         res.body.should.have.property('data');
//         res.body.data.should.be.a('object');
//         res.body.data.should.have.property('tokens');
//         res.body.data.should.have.property('id');
//         res.body.data.should.have.property('email');
//         done();
//       });
//   });
// });

// describe('Signup Error', () => {
//   it('Should return 409 if email already exists', (done) => {
//     const user = {
//       email: 'temi@testmail.com',
//       password: 'password',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signup`)
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(409);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

// describe('Signin Error', () => {
//   it('Should deny access if wrong email is provided', (done) => {
//     const login = {
//       email: 'kcmykirl@gmail.com',
//       password: 'pA55w0rd',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signin`)
//       .send(login)
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

// describe('Signin Error', () => {
//   it('Should deny access if wrong password is provided', (done) => {
//     const login = {
//       email: 'temi@testmail.com',
//       password: 'passweod',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signin`)
//       .send(login)
//       .end((err, res) => {
//         res.should.have.status(401);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

// describe('Signin Errror', () => {
//   it('Should return 400 if email is not provided', (done) => {
//     const login = {
//       password: 'password',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signin`)
//       .send(login)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

// describe('Signin Error', () => {
//   it('Should return 400 if password is ommited', (done) => {
//     const login = {
//       email: 'temi@testmail.com',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signin`)
//       .send(login)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

// describe('User Login tests', () => {
//   it('Should login a user successfully', (done) => {
//     const login = {
//       email: 'temi@testmail.com',
//       password: 'password',
//     };
//     chai.request(app)
//       .post(`${userEndPoint}signin`)
//       .send(login)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.should.have.property('data');
//         res.body.data.should.be.a('object');
//         res.body.data.should.have.property('tokens');
//         done();
//       });
//   });
// });
