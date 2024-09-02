const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', 
});

const User = require('./Clases/Users')(sequelize);
const Product = require('./Clases/Reviews')(sequelize);


module.exports = {
  sequelize,
  User,
  Product
};
