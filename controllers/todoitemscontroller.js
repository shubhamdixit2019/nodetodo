const todoitems = require('../models/todoitems');
const sequelize = require('../Sequelize');

module.exports = {
  //THIS WILL CREATE THE TODOS
  createItems: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.create({
        name: req.params.name,
        listId: req.params.listid,
        todoCompleted: false
      });
      res.send("Entry Created");
    } catch (err) {
      console.log(err)
    }
  },

  //THIS WILL FETCH ALL TABLES
  displayAll: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.findAll({
        raw: true
      }).then(data => {
        res.json(data);
      })
    } catch (err) {
      console.log(err)
    }
  },

  //THIS WILL FETCH BY LISID
  findByListId: async function (req, res) {
    try {
      console.log(req.params.listid);
      await sequelize.sync()
      await todoitems.findOne({
        where: {
          listId: req.params.listid,
          name: req.params.name
        },
      }).then(data => {
        // console.log(data, req.params.listid);
        res.json(data);
      })
      res.send("RECORD FOUND");
    } catch (err) {
      console.log(err)
    }
  },

  //THIS WILL DELETE THE PARTICULAR DATA
  deleteItems: async function (req, res) {
    try {
      await sequelize.sync()
      await todoitems.destroy({
        where: {
          name: req.params.name,
          listId: req.params.listid
        },
        truncate: false /* this will ignore where and truncate the table instead */
      });
      res.send("Items Entry Deleted");
    } catch (err) {
      console.log(err)
    }
  },
}