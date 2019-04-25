const todoitems = require('../models/todoitems')
const sequelize = require('../Sequelize')

module.exports = {
  // THIS WILL CREATE THE TODOS
  create: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.create({
        name: req.body.name,
        listId: req.params.id,
        todoCompleted: false
      })
      res.send('Entry Successfully Created using new post method')
    } catch (err) {
      console.log(err)
    }
  },

  // PARTICULAR TODOLIST AND PARTICULAR ID
  show: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.findOne({
        where: {
          listId: req.params.id,
          id: req.params.itemid
        }
      }).then(data => {
        res.json(data)
      })
    } catch (err) {
      console.log(err)
    }
  },

  // THIS WILL FETCH BY LIST ID all the todoitems
  index: async function (req, res) {
    try {
      console.log(req.params.listid)
      await sequelize.sync()
      await todoitems.findAll({
        where: {
          listId: req.params.id
        }
      }).then(data => {
        res.json(data)
      })
      res.send('RECORD FOUND')
    } catch (err) {
      console.log(err)
    }
  },

  // THIS WILL DELETE THE PARTICULAR DATA
  destroy: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.destroy({
        where: {
          id: req.params.itemid,
          listId: req.params.id
        },
        truncate: false /* this will ignore where and truncate the table instead */
      })
      res.send('Items Entry Deleted')
    } catch (err) {
      console.log(err)
    }
  },

  update: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.update({
        name: req.body.name
      }, {
        where: { id: req.params.itemid, listId: req.params.id },
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
