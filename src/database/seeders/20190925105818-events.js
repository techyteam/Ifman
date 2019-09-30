module.exports = {
  up: queryInterface => queryInterface.bulkInsert('events', [
    {
      title: 'Administrative Assistant IV',
      imageUrl: 'http://dummyimage.com/233x194.png/dddddd/000000',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Analyst Programmer',
      imageUrl: 'http://dummyimage.com/138x175.jpg/dddddd/000000',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Developer II',
      imageUrl: 'http://dummyimage.com/115x140.png/cc0000/ffffff',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Associate Professor',
      imageUrl: 'http://dummyimage.com/119x177.png/cc0000/ffffff',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Occupational Therapist',
      imageUrl: 'http://dummyimage.com/248x215.jpg/cc0000/ffffff',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Social Worker',
      imageUrl: 'http://dummyimage.com/234x157.jpg/ff4444/ffffff',
      time: '02:00',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('People', null, {}),
};
