// basic Authentication Middle Ware

let superAdmin = require('../config/configuration')
let { encodeBase64, validate } = require('../helpermethods')

const basicAuth = function (req, res, next) {
  const credentialsEncoded =
    encodeBase64(superAdmin.userName + ':' + superAdmin.password)
  if (
    !credentialsEncoded || !req.headers.authorization || !validate
    (credentialsEncoded, req.headers.authorization.split(' ')[1])) {
    res.end('Access Denied')
  } else {
    console.log('Access Granted')
  }
  next()
}

module.exports = basicAuth
