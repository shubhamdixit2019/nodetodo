let express = require('express')
let userListRouter = express.Router()
let userListController = require('../controllers/userListController')

userListRouter.get('/user-list', userListController.index);
userListRouter.delete('/user-list', userListController.destroy);
userListRouter.post('/create-user',userListController.create);


module.exports = userListRouter;