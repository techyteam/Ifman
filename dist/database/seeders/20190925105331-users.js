"use strict";

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Romeo',
      middleName: 'doe',
      lastName: 'Missen',
      email: 'rmissen0@adobe.com',
      password: 'Malepass',
      phoneNumber: '586-852-6862',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Roberta',
      middleName: 'doe',
      lastName: 'Corten',
      email: 'rcorten1@odnoklassniki.ru',
      password: 'Femalepass',
      phoneNumber: '629-490-1902',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Johannah',
      middleName: 'doe',
      lastName: 'Cockman',
      email: 'jcockman2@parallels.com',
      password: 'Femalepass',
      phoneNumber: '434-538-2990',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Munmro',
      middleName: 'doe',
      lastName: 'Banbury',
      email: 'mbanbury3@noaa.gov',
      password: 'Malepass',
      phoneNumber: '224-803-6000',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Timofei',
      middleName: 'doe',
      lastName: 'Farrell',
      email: 'tfarrell4@pbs.org',
      password: 'Malepass',
      phoneNumber: '638-685-1138',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Celene',
      middleName: 'doe',
      lastName: 'Lankester',
      email: 'clankester5@abc.net.au',
      password: 'Femalepass',
      phoneNumber: '348-524-6322',
      isAdmin: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//# sourceMappingURL=20190925105331-users.js.map