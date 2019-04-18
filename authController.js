const User = require('../models/user.js');

module.exports = {
	signup: async function(req, res) {
    console.log('inside signup------------------');
    try{
      let email = req.body.email;
      let password = req.body.password;
    	const user = await User.findOne({ email: req.body.email });
      if(user === null) {
        const createUser = await User.create({ email, password });
        res.send(createUser);   
      } else {
      	res.send("email already exist");       
      }
    } catch(err) {
      console.log(err)
    }  
  },

  login: async function(req, res) {
	  console.log('inside login------------------');
  	try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({ email });
      if (!user)
        res.send('We couldn\'t find an account matching the E-mail and password you entered. Please check your username and password and try again');
      if(user.password === password) {
        user.sessionToken = email + password;
        const loggedINUser = await User.findOneAndUpdate({ email },
          { '$set': { sessionToken: user.sessionToken } }, { 'new': true, strict: false });
        res.send(loggedINUser.sessionToken);
      } else {
        console.log('invalid password')
      }
    } catch(err) {
      console.log(err)
    }
  },

  logout: async function(req, res) {
	  console.log('inside logout------------------');
    try {
      const sessionToken = req.body.sessionToken;
      await User.findOneAndUpdate({ sessionToken },
          { '$set': { sessionToken: '' } }, { 'new': true, strict: false }).lean();
      res.send("successfully logged out");
    } catch(err) {
      res.send(err);
    }
  }
}
