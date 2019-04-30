const passport = require('passport')
// const BasicStrategy = require('passport-http').BasicStrategy;
const localStrategy = require('passport-local').Strategy
const superAdmin = require('../config/configuration')
const findByName = require('../helpermethods')

const passportInit = () => {
  passport.serializeUser(function (user, done) {
    done(null, user.userName)
    // where is this user.id going? Are we supposed to access this anywhere?
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
