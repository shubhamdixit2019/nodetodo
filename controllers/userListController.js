const users = require('../models/users')
const sequelize = require('../Sequelize')

module.exports = {
  index: async function (req, res) {
    try {
      const data = await sequelize.query(
        'SELECT name,id FROM users',
        { type: sequelize.QueryTypes.SELECT })
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  create: async function (req, res) {
    try {
      await users.create({
        name: req.body.name,
        password: 'thjghu'
      })
      res.send('Todo-Lists Entry Created')
    } catch (err) {
      console.log(err)
    }
  },
  update: async function (req, res) {
    try {
      await users.update({
        name: req.body.name,        
      },
      {
        where: { id: req.body.id },
        returning: true,
        plain: true
      })
      res.send('Record Updated')
    } catch (err) {
      console.log(err)
    }
  },
  destroy: async function (req, res) {
    try {
      console.log('=============>', req.body.id)
      await users.destroy({
        where: {
          id: req.body.id
        },
        truncate: false
      })
      res.send('Items Entry Deleted')
    } catch (err) {
      console.log(err)
    }
  }
}
