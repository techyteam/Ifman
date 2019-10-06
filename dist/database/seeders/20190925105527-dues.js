"use strict";

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('dues', [{
      dueDate: '5/25/2019',
      amount: 322119.01,
      "for": 2012,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      dueDate: '1/15/2019',
      amount: 40320.91,
      "for": 2006,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      dueDate: '2/5/2019',
      amount: 179086.82,
      "for": 1998,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      dueDate: '11/13/2018',
      amount: '170615.98',
      "for": 2009,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      dueDate: '2/5/2019',
      amount: 420058.87,
      "for": 2001,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      dueDate: '2/19/2019',
      amount: 76169.32,
      "for": 2003,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('dues', null, {});
  }
};
//# sourceMappingURL=20190925105527-dues.js.map