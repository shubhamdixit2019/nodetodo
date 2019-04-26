
module.exports = {
  validate: function (name, pass) {
    check = true
    check = (name === 'admin') && check
    check = (pass === 'password') && check
    return check
  }
}

//   function getUnauthorizedResponse(req){
//        return req.auth
//        ?(console.log('Acess Denied)):
//        console.log(('Credentials not supplied'));
//   }
