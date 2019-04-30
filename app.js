const express = require('express')
const todolistsRouter = require('./routes/todolistsrouter')
const userListRouter = require('./routes/users')
const myParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const passportInit = require('./middlewares/passportauthentication')
const app = express()

app.use(passport.initialize())
passportInit()
app.use(cors())
app.use(myParser.json())
app.use(myParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  console.log('Body Parameters========>', req.body)
  console.log('URL Requested==========>', req.originalUrl)
  next()
})

app.post('/login', (req, res, next) => {
  next()
},
passport.authenticate('local'),
function (req, res) {
  res.send('ABC')
})

app.use('/todo-lists', todolistsRouter)
app.use('/', userListRouter)

app.listen(9000, function (req, res) {
  console.log('Listening')
})
