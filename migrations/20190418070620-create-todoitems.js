'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todoitems', {
      name: {
        type: Sequelize.STRING
      },
      listid: {
        type: Sequelize.INTEGER
      },
      todocompeted: {
        type: Sequelize.BOOLEAN
      },
      completedat: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todoitems');
  }
};