const express = require('express')
const todolistsRouter = require('./routes/todolistsrouter')
const myParser = require('body-parser')
const cors = require('cors'
)
let app = express()

app.use(cors())
app.use(myParser.json())
app.use(myParser.urlencoded({ extended: true }))
// app.use('/todo-items', todoItemsRouter);
app.use('/todo-lists', todolistsRouter)
app.listen(9000, function (req, res) {
  console.log('Listening')
})
