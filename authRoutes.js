let express = require('express');
let authRouter = express.Router();
let authController = require('../controllers/authController.js');
const loggedInUser = require('../middleware/loggedInUser.js');

authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.post('/logout', loggedInUser.userExist, authController.logout);

module.exports = authRouter;
