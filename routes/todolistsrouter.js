let express = require('express');
let todolistsRouter = express.Router();
let todolistController = require('../controllers/todolistontroller');

todolistsRouter.get('/createlists/:listname', todolistController.createlist);

module.exports = todolistsRouter;