'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('contacts',
    [
      {
        firstName: 'Leonardo',
        lastName: 'Silva',
        cpf:'00000000000'
      },
      {
        firstName: 'José',
        lastName: 'Marinho',
        cpf:'00000000001'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('contacts', null, {}),
};