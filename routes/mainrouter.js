let express = require('express');
let mainrouter = express.Router();
let mainController = require('../controllers/main');

mainrouter.post('/create', mainController.create);
// mainrouter.post('/login', mainController.login);
// mainrouter.post('/logout', mainController.userExist, authController.logout);

module.exports = mainrouter;