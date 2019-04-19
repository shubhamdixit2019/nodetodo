let express = require('express');
let todolistsRouter = require('./routes/todolistsrouter')
let todoItemsRouter = require('./routes/todoitemsrouter')
let app = express();

//app.use('/create', todolistController.create);

app.use('/todoitems',todoItemsRouter);
app.use('/todolists',todolistsRouter)

app.listen(3000,function(req,res){
    console.log("Listening");
});