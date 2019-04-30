const superAdmin = require('./config/configuration')

module.exports = {
  encodeBase64: function (input) {
    return Buffer.from(input).toString('base64')
  },
  validate: function (credentialsEncoded, validation) {
    return (credentialsEncoded === validation)
  },
  findByName: function (username, callback) {
    if (!username || superAdmin.userName === username) {
      return callback(null, superAdmin)
    }
    return callback(null, null)
  }
}
