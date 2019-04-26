const express = require('express')
const todolistsRouter = require('./routes/todolistsrouter')
const myParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(myParser.json())
app.use(myParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  console.log('Body Parameters========>', req.body)
  console.log('URL Requested==========>', req.originalUrl)
  next()
})
app.use(function (req, res, next) {
  var timeNow = new Date()
  timeNow.getHours()
  timeNow.getMinutes()
  timeNow.getSeconds()
  console.log('Requested at : ', timeNow)
  next()
})
app.use('/todo-lists', todolistsRouter)
app.listen(9000, function (req, res) {
  console.log('Listening')
})
