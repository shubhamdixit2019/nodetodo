const todolists = require('../models/todolists');
const sequelize = require('../Sequelize');

module.exports = {
  createlist: async function (req, res) {
    try {
      await sequelize.sync()
      await todolists.create({
        name: req.params.listname
      });
      res.send("List Entry Created");
    } catch (err) {
      console.log(err)
    }
  },  
}