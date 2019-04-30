let express = require('express')
let todolistsRouter = express.Router()
let todolistController = require('../controllers/todolistcontroller')
let todoItemsController = require('../controllers/todoitemscontroller')
let basicAuth = require('../middlewares/basicauthentication')
const passport = require('passport')

// todo-lists
todolistsRouter.get('/', todolistController.index)
todolistsRouter.post('/', todolistController.create)
todolistsRouter.get('/:listId', todolistController.show)
todolistsRouter.delete('/:listId', todolistController.destroy)
todolistsRouter.put('/:listId', todolistController.update)

// todo-items
todolistsRouter.get('/:listId/todo-items/', basicAuth, todoItemsController.index)
todolistsRouter.post('/:listId/todo-items/', todoItemsController.create)
todolistsRouter.get('/:listId/todo-items/:itemId', passport.authenticate('local'),
  todoItemsController.show)
todolistsRouter.delete('/:listId/todo-items/:itemId', todoItemsController.destroy)
todolistsRouter.put('/:listId/todo-items/:itemId', todoItemsController.update)

module.exports = todolistsRouter
