"use strict";

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('courses', [{
      courseTitle: 'Cost Accountant',
      memberFees: 388781.43,
      nonMemberFees: 388781.43,
      startDate: '7/15/2019',
      endDate: '11/4/2018',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      courseTitle: 'Junior Executive',
      memberFees: 69183.95,
      nonMemberFees: 388781.43,
      startDate: '9/19/2019',
      endDate: '1/28/2019',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      courseTitle: 'Administrative Assistant IV',
      memberFees: 370019.64,
      nonMemberFees: 388781.43,
      startDate: '2/25/2019',
      endDate: '3/17/2019',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      courseTitle: 'Recruiter',
      memberFees: 206668.74,
      nonMemberFees: 388781.43,
      startDate: '11/10/2018',
      endDate: '3/22/2019',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      courseTitle: 'Programmer Analyst I',
      memberFees: 76561.08,
      nonMemberFees: 388781.43,
      startDate: '5/11/2019',
      endDate: '1/5/2019',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      courseTitle: 'Environmental Tech',
      memberFees: 147746.39,
      nonMemberFees: 388781.43,
      startDate: '9/20/2019',
      endDate: '8/29/2019',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
//# sourceMappingURL=20190925110541-courses.js.map