var express = require('express')
const todolists = require('./models/todolists')
const errorMessage = require('./constants')
var app = express()

// var myMw = function (req,res,next) {
//     res.send("This is a Customised Middleware");
// }

app.use(function (req, res, next) {
  console.log('route', req)
  console.log('route', req)
  console.log('route', req)
  console.log('route', req)
  next();
})
app.use('/todo-lists/:listId/', myMw)
app.listen(3000)
