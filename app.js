var express = require('express');
const mainrouter = require('./routes/mainrouter')
let mainController = require('./controllers/main');
var app = express();

app.use('/create', mainController.create);

app.listen(3000);