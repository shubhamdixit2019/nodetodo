'use strict';
const todolists = require('./todolists');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos');

const todoitems = sequelize.define('todoitems', {
  name: Sequelize.STRING,
  listId: Sequelize.INTEGER,
  todoCompleted: Sequelize.BOOLEAN,
  completedAt: Sequelize.DATE,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {

  });
todoitems.associate = function (models) {

};

module.exports = todoitems;