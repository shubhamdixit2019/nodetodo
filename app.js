let express = require('express');
let todolistsRouter = require('./routes/todolistsrouter')
let todoItemsRouter = require('./routes/todoitemsrouter')
let app = express();

//app.use('/create', todolistController.create);

app.use('/todo-items', todoItemsRouter);
app.use('/todo-lists', todolistsRouter)

app.listen(3000, function (req, res) {
    console.log("Listening");
});