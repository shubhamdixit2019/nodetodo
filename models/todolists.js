'use strict';
//var Sequelize = requiree
//const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos');
module.exports = (sequelize, DataTypes) => {
  const todolists = sequelize.define('todolists', {
    name: DataTypes.STRING
  }, {});
  todolists.associate = function(models) {
    // associations can be defined here
  };
  return todolists;
};