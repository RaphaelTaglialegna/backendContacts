/* eslint-disable camelcase */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('contacts',
    [
      {
        first_name: 'Leonardo',
        last_name: 'Silva',
        cpf: '00000000000',
      },
      {
        first_name: 'José',
        last_name: 'Marinho',
        cpf: '00000000001',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('contacts', null, {}),
};