'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
        {
        email: 'demo@user.io',
        name: faker.name.firstName() + faker.name.lastName(),
        username: 'Demo',
        birthday: faker.date.past(),
        hashedPassword: bcrypt.hashSync('password'),
        },
        {
        email: faker.internet.email(),
        name: faker.name.firstName() + faker.name.lastName(),
        username: faker.internet.userName(),
        birthday: faker.date.past(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
        email: faker.internet.email(),
        name: faker.name.firstName() + faker.name.lastName(),
        username: faker.internet.userName(),
        birthday: faker.date.past(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
        email: 'private@user.io',
        name: faker.name.firstName() + faker.name.lastName(),
        username: 'Private',
        birthday: faker.date.past(),
        hashedPassword: bcrypt.hashSync('password'),
        },
    ], {});
    },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};