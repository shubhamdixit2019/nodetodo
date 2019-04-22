const todolists = require('../models/todolists');
const sequelize = require('../Sequelize');

module.exports = {
  createList: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.create({
        name: req.params.name
      });
      res.send("List Entry Created");
    } catch (err) {
      console.log(err)
    }
  },
  displayAll: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.findAll({
        raw: true
      }).then(data => {
        res.json(data);
      })
      //res.send("Tables fetched");
    } catch (err) {
      console.log(err)
    }
  },
  findByName: async function (req, res) {
    try {
      console.log(req.params.listid);
      await sequelize.sync()
      await todolists.findOne({
        where: {
          name: req.params.name
        },
      }).then(data => {
        // console.log(data, req.params.listid);
        res.json(data);
      })
      res.send("RECORD FOUND", req.params.listid);
    } catch (err) {
      console.log(err)
    }
  },
  deleteList: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.destroy({
        where: {
          name: req.params.name
        },
        truncate: true /* this will ignore where and truncate the table instead */
      });
      res.send("List Entry Deleted");
    } catch (err) {
      console.log(err)
    }
  },
}