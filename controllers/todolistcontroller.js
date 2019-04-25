const todolists = require('../models/todolists')
const sequelize = require('../Sequelize')

module.exports = {
  create: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.create({
        name: req.body.name // will be passed from the frontend app
      })
      res.send('Todo-Lists Entry Created')
    } catch (err) {
      console.log(err)
    }
  },
  index: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.findAll({
        raw: true
      }).then(data => {
        res.json(data)
      })
    } catch (err) {
      console.log(err)
    }
  },
  show: async function (req, res) {
    try {
      console.log(req.params.id)
      await sequelize.sync()
      await todolists.findOne({
        where: {
          id: req.params.id
        }
      }).then(data => {
        res.json(data)
      })
    } catch (err) {
      console.log(err)
    }
  },
  destroy: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.destroy({
        where: {
          id: req.params.id
        },
        truncate: false
      })
      res.send('List Successfully Deleted')
    } catch (err) {
      console.log(err)
    }
  },
  update: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.update({
        name: req.body.name
      }, {
        where: { id: req.params.id, listId: req.params.id },
        returning: true,
        plain: true
      })
        .then(function (result) {
          console.log(result)
        })
      res.send('Record Updated')
    } catch (err) {
    }
  }
}
