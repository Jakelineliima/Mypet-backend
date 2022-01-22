const express = require("express");
const { sendfile } = require("express/lib/response");
const app = express();
const handlebars = require("express-handlebars");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const { application } = require("express");
const Ficha = require('./models/Ficha');
const Texto = require('./models/Texto');
// const port = 8080;


// CONFIGURAÇÃOES

// Templete engine handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    defaultLayout: "admin",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

//PUBLIC
app.use(express.static("views/public"));

// BODY-PARSE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROTAS

app.get("/", (req, res) => {
res.render("home", {layout: "main"});
})

app.get("/ficha", (req, res) => {
  res.render("ficha", { layout: "main" });
});


// Cadastro

app.post("/addficha", (req, res) => {
  Ficha.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    phone: req.body.phone,
    ruanumber: req.body.ruanumber,
    bairro: req.body.bairro,
    nomepet: req.body.nomepet,
    idade: req.body.idade,
    peso: req.body.peso,
    raca: req.body.raca,
    especie: req.body.especie,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro:  " + erro);
    });
});

// Delete

app.get("/deletar/:id", (req, res) => {
  Ficha.destroy({
    where: { 'id': req.params.id }
  }).then(function () {
    res.redirect('/lista');
  }).catch(function (erro) {
    res.send('Ocorreu um erro:  ' + erro)
  });
});

// ======== ROTAS ADMINISTRATIVA ========= //

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/lista", (req, res) => {
  Ficha.findAll().then(function (ficha) {
    res.render("lista", { ficha: ficha });
  });
});

app.get("/cronograma", (req, res) => {
  res.render("cronograma");
});

app.get("/duvidas", (req, res) => {
  res.render("duvidas");
});

app.get("/textos", (req, res) => {
  res.render("textos");
});

app.post("/textosadd", (req, res) => {
  Texto.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo, 
  })
    .then(function () {
      res.redirect("/admin");
    })
    .catch(function (erro) {
      res.send("Houve um erro:  " + erro);
    });
});



//  SERVIDOR

app.listen(8080, function () {
  console.log("O seu servidor esta rodando!!! :)");
});
