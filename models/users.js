'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../Sequelize')

const users = sequelize.define('users', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {})
users.associate = function (models) {
  // associations can be defined here
}
module.exports = users
