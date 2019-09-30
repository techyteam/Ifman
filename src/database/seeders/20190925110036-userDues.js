

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('userDues', [
    {
      paidOn: '5/25/2019',
      amount: 322119.01,
      userId: 1,
      for: 2012,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      paidOn: '1/15/2019',
      amount: 40320.91,
      userId: 2,
      for: 2006,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      paidOn: '2/5/2019',
      amount: 179086.82,
      userId: 3,
      for: 1998,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      paidOn: '11/13/2018',
      amount: 170615.98,
      userId: 4,
      for: 2006,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      paidOn: '2/5/2019',
      amount: 420058.87,
      userId: 5,
      for: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      paidOn: '2/19/2019',
      amount: 76169.32,
      userId: 6,
      for: 2006,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('userDues', null, {}),
};
