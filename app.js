var http = require("http");
app.use(express.static("public"));
http
  .createServer(function (req, res) {
    res.end("Ola terraquio");
  })
  .listen(8080);

console.log("servidor Rodando");

