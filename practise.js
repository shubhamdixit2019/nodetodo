var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('route', req)
  console.log('route', req)
  console.log('route', req)
  console.log('route', req)
  next()
})
//
app.listen(3000)
