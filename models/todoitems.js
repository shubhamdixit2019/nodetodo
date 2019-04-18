'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoitems = sequelize.define('todoitems', {
    name: DataTypes.STRING,
    listid: DataTypes.INTEGER,
    todocompeted: DataTypes.BOOLEAN,
    completedat: DataTypes.DATE,
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    underscored: true
  });
  todoitems.associate = function(models) {
    // associations can be defined here
  };
  return todoitems;
};