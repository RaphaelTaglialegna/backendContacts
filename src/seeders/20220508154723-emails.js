/* eslint-disable camelcase */

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('emails',
    [
      {
        contact_id: 1,
        email: 'leandro@gmail.com',
      },
      {
        contact_id: 2,
        email: 'jose@gmail.com',
      },
      {
        contact_id: 2,
        email: 'jojo@gmail.com',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('emails', null, {}),
};