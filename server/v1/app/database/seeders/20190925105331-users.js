

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      firstName: 'Romeo',
      lastName: 'Missen',
      email: 'rmissen0@adobe.com',
      password: 'Male',
      phoneNumber: '586-852-6862',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Roberta',
      lastName: 'Corten',
      email: 'rcorten1@odnoklassniki.ru',
      password: 'Female',
      phoneNumber: '629-490-1902',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Johannah',
      lastName: 'Cockman',
      email: 'jcockman2@parallels.com',
      password: 'Female',
      phoneNumber: '434-538-2990',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Munmro',
      lastName: 'Banbury',
      email: 'mbanbury3@noaa.gov',
      password: 'Male',
      phoneNumber: '224-803-6000',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Timofei',
      lastName: 'Farrell',
      email: 'tfarrell4@pbs.org',
      password: 'Male',
      phoneNumber: '638-685-1138',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Celene',
      lastName: 'Lankester',
      email: 'clankester5@abc.net.au',
      password: 'Female',
      phoneNumber: '348-524-6322',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
