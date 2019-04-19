let Sequelize = require('sequelize')
let sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos')

module.exports = sequelize;
