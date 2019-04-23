let express = require('express');
let todolistsRouter = express.Router();
let todolistController = require('../controllers/todolistcontroller');

todolistsRouter.post('/name/:name', todolistController.createList);   //CREATE LISTS
todolistsRouter.get('/', todolistController.displayAll);
todolistsRouter.get('/name/:name', todolistController.findByName);
todolistsRouter.delete('/name/:name', todolistController.deleteList);

module.exports = todolistsRouter;