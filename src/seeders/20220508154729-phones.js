/* eslint-disable camelcase */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('phones',
    [
      {
        contactid: 1,
        phone: '19912345678',
      },
      {
        contact_id: 2,
        phone: '19912345622',
      },
      {
        contact_id: 2,
        phone: '19912345672',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('phones', null, {}),
};