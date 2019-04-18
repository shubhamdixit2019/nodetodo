//const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos');
var Sequelize = require ('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todos');

  const todolists = sequelize.define('todolists', {
    name: Sequelize.STRING
  }, {});
  todolists.associate = function(models) {
    // associations can be defined here
  }; 

todolists.sync().then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return todolists.create({
        name: "DEF"
    });
  });