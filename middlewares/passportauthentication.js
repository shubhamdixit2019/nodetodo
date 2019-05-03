const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const superAdmin = require('../config/configuration')

const passportInit = () => {
  passport.serializeUser(function (user, done) {
    done(null, user.userName)
  })

  passport.use(new localStrategy(function (username, password, done) {
    if (!username || !password) {
      console.log('Fields Empty')
      return done(false, false)
    } else if
    (username === superAdmin.userName && password === superAdmin.password) {
      console.log('Authenticated')
      return done(null, superAdmin)
    } else {
      console.log('Invalid Username or Password')
      return done(null, false)
    }
  }))
}

module.exports = passportInit