let express = require('express')
let userListRouter = express.Router()
let userListController = require('../controllers/userListController')

userListRouter.get('/user-list', userListController.index)
userListRouter.delete('/user-list', userListController.destroy)
userListRouter.post('/user-list', userListController.create)
userListRouter.put('/user-list',userListController.update)

module.exports = userListRouter