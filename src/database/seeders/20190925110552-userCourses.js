

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('userCourses', [
    {
      registeredOn: '5/19/2019',
      UserId: 1,
      courseId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      registeredOn: '9/24/2019',
      UserId: 2,
      courseId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      registeredOn: '2/25/2019',
      UserId: 3,
      courseId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      registeredOn: '3/1/2019',
      UserId: 4,
      courseId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      registeredOn: '4/22/2019',
      UserId: 5,
      courseId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      registeredOn: '12/1/2018',
      UserId: 6,
      courseId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('userCourses', null, {}),
};
