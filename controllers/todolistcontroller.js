const todolists = require('../models/todolists')
// const sequelize = require('../Sequelize')
const errorMessage = require('../constants')

module.exports = {
  create: async function (req, res) {
    try {
      await todolists.create({
        name: req.body.name
      })
      res.send('Todo-Lists Entry Created')
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  index: async function (req, res) {
    try {
      const data = await todolists.findAll({})
      res.json(data)
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  show: async function (req, res) {
    try {
      const data = await todolists.findAll({
        where: {
          id: req.params.listId
        }
      })
      res.json(data)
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  destroy: async function (req, res) {
    try {
      await todolists.destroy({
        where: {
          id: req.params.listId
        },
        truncate: false
      })
      res.send('List Successfully Deleted')
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  update: async function (req, res) {
    try {
      await todolists.update({
        name: req.body.name
      },
      {
        where: { id: req.params.listId },
        returning: true,
        plain: true
      })
      res.send('Record Updated')
    } catch (err) {
      console.log(errorMessage + err)
    }
  }
}
