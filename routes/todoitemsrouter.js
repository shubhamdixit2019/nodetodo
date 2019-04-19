let express = require('express');
let todoItemsRouter = express.Router();
let todoItemsController = require('../controllers/todoitemscontroller');

todoItemsRouter.get('/create/name/:name/listid/:listid/', todoItemsController.create);
todoItemsRouter.get('/', todoItemsController.fetchData)
todoItemsRouter.get('/:id', todoItemsController.findbyid) 
todoItemsRouter.get('/listid/:listid', todoItemsController.findbylistid)

module.exports = todoItemsRouter;