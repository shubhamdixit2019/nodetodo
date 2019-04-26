let express = require('express')
let todolistsRouter = express.Router()
var auth = require('basic-auth')
let todolistController = require('../controllers/todolistcontroller')
let todoItemsController = require('../controllers/todoitemscontroller')

todolistsRouter.use('/:listId/todo-items/', function (req, res, next) {
  var credentials = auth(req)
  if (!credentials || !validate(credentials.name, credentials.pass)) {
    res.end('Access Denied')
  } else {
    console.log('Access Granted')
  }
  next()
})
function validate (name, pass) {
  const check = true
  check = (name === 'admin') && check
  check = (pass === 'password') && check
  return check
}

// todo-lists
todolistsRouter.get('/', todolistController.index)
todolistsRouter.post('/', todolistController.create)
todolistsRouter.get('/:listId', todolistController.show)
todolistsRouter.delete('/:listId', todolistController.destroy)
todolistsRouter.put('/:listId', todolistController.update)

// todo-items
todolistsRouter.get('/:listId/todo-items/', todoItemsController.index)
todolistsRouter.post('/:listId/todo-items/', todoItemsController.create)
todolistsRouter.get('/:listId/todo-items/:itemId', todoItemsController.show)
todolistsRouter.delete('/:listId/todo-items/:itemId', todoItemsController.destroy)
todolistsRouter.put('/:listId/todo-items/:itemId', todoItemsController.update)

module.exports = todolistsRouter