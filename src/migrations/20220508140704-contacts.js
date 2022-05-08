module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'first_name',

      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name',

      },
      cpf: {
        type: Sequelize.STRING,
      },

    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('contacts');
  },
};