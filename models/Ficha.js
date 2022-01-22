const db = require('./db');

// Criar tabelas

const Ficha = db.sequelize.define("ficha", {
  nome: {
    type: db.Sequelize.TEXT,
  },
  cpf: {
    type: db.Sequelize.TEXT,
  },
  email: {
    type: db.Sequelize.TEXT,
  },
  phone: {
    type: db.Sequelize.TEXT,
  },
  ruanumber: {
    type: db.Sequelize.TEXT,
  },
  bairro: {
    type: db.Sequelize.TEXT,
  },

  nomepet: {
    type: db.Sequelize.TEXT,
  },
  idade: {
    type: db.Sequelize.TEXT,
  },
  peso: {
    type: db.Sequelize.TEXT,
  },
  raca: {
    type: db.Sequelize.TEXT,
  },
  especie: {
    type: db.Sequelize.TEXT,
  },
});

module.exports = Ficha;

//Ficha.sync({ force: true });