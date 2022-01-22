const db = require('./db');

// Criar tabelas

const Texto = db.sequelize.define("texto", {
  titulo: {
    type: db.Sequelize.TEXT,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

module.exports = Texto;

// Texto.sync({ force: true });