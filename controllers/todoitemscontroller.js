const todoitems = require('../models/todoitems')
const errorMessage = require('../constants')

module.exports = {
  // THIS WILL CREATE THE TODOS
  create: async function (req, res) {
    try {
      await todoitems.create({
        name: req.body.name,
        listId: req.params.listId,
        todoCompleted: false
      })
      res.send('Entry successfully created')
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  // PARTICULAR TODOLIST AND PARTICULAR ID
  show: async function (req, res) {
    try {
      const data = await todoitems.findOne({
        where: {
          listId: req.params.listId,
          id: req.params.itemId
        }
      })
      res.json(data)
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  // THIS WILL FETCH BY LIST ID all the todoitems
  index: async function (req, res) {
    try {
      const data = await todoitems.findAll({
        where: {
          listId: req.params.listId
        }
      })
      res.json(data)
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  // THIS WILL DELETE THE PARTICULAR DATA
  destroy: async function (req, res) {
    try {
      await todoitems.destroy({
        where: {
          id: req.params.itemId,
          listId: req.params.listId
        },
        truncate: false
      })
      res.send('Items Entry Deleted')
    } catch (err) {
      console.log(errorMessage + err)
    }
  },

  update: async function (req, res) {
    try {
      await todoitems.update({
        name: req.body.name
      }, {
        where: { id: req.params.itemId, listId: req.params.listId },
        returning: true,
        plain: true
      })
      res.send('Record Updated')
    } catch (err) {
      console.log(errorMessage + err)
    }
  }
}
