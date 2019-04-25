'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/sms', function (req, res) {
  res.send('2323')
  // res.send(html);
})

// Route that receives a POST request to /sms
app.post('/sms', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${req.body.id} to Express`)
})

// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
