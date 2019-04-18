const todolists = require('../models/todolists');

module.exports = {
	create: async function(req, res) {    
    try {
        // todolists.sync().then(() => {
        //     // Now the `users` table in the database corresponds to the model definition
        //     return todolists.create({
        //         name: "DEF"
        //     });
        //   });
       //insertingData();
        res.send("CONNECTED TO DATABASE CONTROLLER and data INSERTED");
    } catch(err) {
      console.log(err)
    }  
  }
}

function insertingData()
{
    todolists.sync().then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return todolists.create({
        name: "xyz"
    });
  });
}
