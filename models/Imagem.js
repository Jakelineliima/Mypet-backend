const db = require('./db');

//  Criar tabela

const Imagem = db.sequelize.define("imagem", {
  imagem: {
    type: db.Sequelize.BLOB,
  },
});

module.exports = Imagem;

// Imagem.sync({ force: true });