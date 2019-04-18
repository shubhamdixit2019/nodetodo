'use strict';
module.exports = (sequelize, DataTypes) => {
  const todolists = sequelize.define('todolists', {
    name: DataTypes.STRING,
    id: DataTypes.INTEGER,
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    underscored: true
  });
  todolists.associate = function(models) {
    // associations can be defined here
  };
  return todolists;
};