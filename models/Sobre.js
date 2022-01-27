const db = require('./db');

// Criar tabelas

const Sobre = db.sequelize.define("sobre", {
  titulo: {
    type: db.Sequelize.TEXT,
  },

  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

module.exports = Sobre;

// Sobre.sync({ force: true });