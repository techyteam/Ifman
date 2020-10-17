import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import app from '../app';

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

let request = chai.request(app).keepOpen();
// let token;

const apiEndPoint = '/api/v1/';
const userEndPoint = `${apiEndPoint}auth/`;

const userData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const userWithNoPassword = {
  email: 'ad@gmail.com',
};


describe('AUTH', () => {
  before(async () => {
    request = chai.request(app).keepOpen();
  });

  afterEach(async () => {
    sinon.restore();
  });

  describe('SignUp a user', () => {
    it('should sign up user', async () => {
      const response = await request.post(`${userEndPoint}signup`).send(userData);
      expect(response.status).to.equal(201);
      expect(response.body).to.be.a('object');
    });
  });
  describe('Bad Request', () => {
    it('Should return 400 Bad Request', async () => {
      const response = await request.post(`${userEndPoint}signup`).send(userWithNoPassword);
      expect(response.status).to.equal(400);
    });
  });
  describe('User already exist', () => {
    it('should throw USER already exist error', async () => {
      const response = await request.post(`${userEndPoint}signup`).send(userData);
      expect(response.status).to.equal(409);
    });
  });
});
