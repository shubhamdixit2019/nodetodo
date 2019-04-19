const todolists = require('../models/todoitems');
const sequelize = require('../Sequelize');

module.exports = {
  //THIS WILL CREATE THE TODOS
  create: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.create({
        name: req.params.name,
        listid: req.params.listid,
        todocompeted: 0
      });
      res.send("Tables Created");
    } catch (err) {
      console.log(err)
    }
  },
  fetchData: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.findAll({
        raw: true
      }).then(data => {
        console.log(data);
      })
      res.send("Tables fetched");
    } catch (err) {
      console.log(err)
    }
  },
  findbyid: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.findByPk(req.params.id).then(data => {
        console.log(data.toJSON());
      })
      res.send("Element Found");
    } catch (err) {
      console.log(err)
    }
  },
  findbylistid: async function (req, res) {
    try {
      console.log(req.params.listid);
      await sequelize.sync()
      await todolists.findOne({
        where: {
          listid: req.params.listid
        },
      }).then(data => {
        console.log(data, req.params.listid);
      })
      res.send("RECORD FOUND", listid);
    } catch (err) {
      console.log(err)
    }
  }
}