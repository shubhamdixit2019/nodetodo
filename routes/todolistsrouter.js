let express = require('express')
let todolistsRouter = express.Router()
let todolistController = require('../controllers/todolistcontroller')
let todoItemsController = require('../controllers/todoitemscontroller')

// todo-lists
todolistsRouter.get('/', todolistController.index)
todolistsRouter.post('/', todolistController.create)
todolistsRouter.get('/:id', todolistController.show)
todolistsRouter.delete('/:id', todolistController.destroy)
todolistsRouter.put('/:id', todolistController.update)

// todo-items
todolistsRouter.get('/:id/todo-items/', todoItemsController.index)
todolistsRouter.post('/:id/todo-items/', todoItemsController.create)
todolistsRouter.get('/:id/todo-items/:itemid', todoItemsController.show)
todolistsRouter.delete('/:id/todo-items/:itemid', todoItemsController.destroy)
todolistsRouter.put('/:id/todo-items/:itemid', todoItemsController.update)

module.exports = todolistsRouter
