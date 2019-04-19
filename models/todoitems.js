'use strict';
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos');

  const todoitems = sequelize.define('todoitems', {
    name: Sequelize.STRING,
    listid: Sequelize.INTEGER,
    todocompeted: Sequelize.BOOLEAN,
    completedat: Sequelize.DATE,
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE
  }, {
    
  });
  todoitems.associate = function(models) {
    // associations can be defined here
  };
  
module.exports = todoitems;
