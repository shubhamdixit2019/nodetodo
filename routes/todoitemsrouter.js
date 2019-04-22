let express = require('express');
let todoItemsRouter = express.Router();
let todoItemsController = require('../controllers/todoitemscontroller');

todoItemsRouter.post('/list-id/:listid/name/:name/', todoItemsController.createItems);
todoItemsRouter.get('/', todoItemsController.displayAll)
todoItemsRouter.get('/list-id/:listid/name/:name/', todoItemsController.findByListId);
todoItemsRouter.delete('/list-id/:listid/name/:name/', todoItemsController.deleteItems);

module.exports = todoItemsRouter;