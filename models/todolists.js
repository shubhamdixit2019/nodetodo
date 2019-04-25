'use strict'
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos')

const todolists = sequelize.define('todolists', {
  name: Sequelize.STRING
}, {})
todolists.associate = function (models) {
  // associations can be defined here
}
module.exports = todolists
