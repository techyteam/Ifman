import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Utils from '../utils';

chai.should();

chai.use(chaiHttp);

const apiEndPoint = '/api/v1/';
const adminEmail = 'victorawotidebe@gmail.com';
const notAdminEmail = 'rmissen0@adobe.com';
const token = Utils.generateToken({ email: adminEmail });
const nonAdminToken = Utils.generateToken({ email: notAdminEmail });

// const courseData = {
//   courseTitle: 'Facility Management',
//   memberFees: 105000,
//   nonMemberFees: 115000,
//   startDate: 10,
//   endDate: 13,
//   duration: '10 weeks',
//   venue: 'illupeju',
// };

describe('Create Courses Tests', () => {
  it('Should return 403 if user is not an admin', (done) => {
    const course = {
      CourseTitle: 'Facility Management',
      memberFees: 105000,
      nonmemberFee: 115000,
      startDate: 10,
      endDate: 13,
    };

    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${nonAdminToken}`)
      .send(course)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(403);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Title One', () => {
  it('Should return 401 if token is not provided', (done) => {
    const course = {
      courseTitle: 'Facility Management',
      memberFees: 105000,
      nonMemberFees: 115000,
      startDate: 10,
      endDate: 13,
    };
    chai
      .request(app)
      .post(`${apiEndPoint}courses`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Title 2', () => {
  it('Should return 400 if courseTitle isn\'t specified', (done) => {
    const course = {
      memberFees: 105000,
      nonmemberFee: 115000,
      startDate: 10,
      endDate: 13,
    };

    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${token}`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('Should return 400 if memberFees isn\'t specified', (done) => {
    const course = {
      CourseTitle: 'Facility Management',
      nonmemberFee: 115000,
      startDate: 10,
      endDate: 13,
    };
    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${token}`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('Should return 400 if nonmemberFee isn\'t specified', (done) => {
    const course = {
      CourseTitle: 'Facility Management',
      memberFees: 105000,
      startDate: 10,
      endDate: 13,
    };
    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${token}`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('Should return 400 if endDate isn\'t specified', (done) => {
    const course = {
      CourseTitle: 'Facility Management',
      memberFees: 105000,
      nonmemberFee: 115000,
      startDate: 10,
    };
    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${token}`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('Should return 400 if startDate isn\'t specified', (done) => {
    const course = {
      CourseTitle: 'Facility Management',
      memberFees: 105000,
      nonmemberFee: 115000,
      endDate: 13,
    };
    chai.request(app)
      .post(`${apiEndPoint}courses`)
      .set('Authorization', `Bearer ${token}`)
      .send(course)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('Should register a user for a course', (done) => {
    chai.request(app)
      .post(`${apiEndPoint}courses/2/register`)
      .set('Authorization', `Bearer ${token}`)
      .send(token)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.data.should.be.an('object');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('UserId');
        res.body.data.should.have.property('courseId');
        res.body.data.should.have.property('registeredOn');
        done();
      });
  });
});
describe('Create Courses Tests', () => {
  it('should return 200 and get all courses', (done) => {
    chai.request(app)
      .get(`${apiEndPoint}course`)
      .set('Authorization', `Bearer ${token}`)
      .send(token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('courseTitle');
        res.body.data[0].should.have.property('memberFees');
        res.body.data[0].should.have.property('nonMemberFees');
        res.body.data[0].should.have.property('startDate');
        res.body.data[0].should.have.property('endDate');
        done();
      });
  });
});


// describe('Create Courses Tests', () => {

// });

// describe('Get requests for both user and admin', () => {

// });

// describe('Register a courses', () => {

// });

// it('Should Successfully Create a Course', (done) => {
//   const course = {
//     courseTitle: 'Facility Management',
//     memberFees: 105000,
//     nonMemberFees: 115000,
//     startDate: 10,
//     endDate: 13,
//     duration: '10 weeks',
//     venue: 'illupeju',
//   };
//   chai.request(app)
//     .post(`${apiEndPoint}courses`)
//     .set('Authorization', `Bearer ${token}`)
//     .send(course)
//     .end((err, res) => {
//       if (err) done(err);
//       res.should.have.status(201);
//       res.body.should.be.a('object');
//       res.body.should.have.property('status');
//       res.body.should.have.property('data');
//       res.body.data.should.be.a('object');
//       res.body.data.should.have.property('id');
//       res.body.data.should.have.property('courseTitle');
//       res.body.data.should.have.property('memberFees');
//       res.body.data.should.have.property('duration');
//       res.body.data.should.have.property('venue');
//       res.body.data.should.have.property('nonMemberFees');
//       res.body.data.should.have.property('startDate');
//       res.body.data.should.have.property('endDate');
//       done();
//     });
// });
