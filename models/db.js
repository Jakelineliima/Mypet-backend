const Sequelize = require("sequelize");

// Conexão com Banco de dados

const sequelize = new Sequelize("mypet", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}