const express = require("express");
const app = express();
// biblioteca que vai capturar os dados enviados pelo formulário
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
//estáticos
app.use(express.static("public"));

//linhas de configuração do bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas
app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta",(req,res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

res.send("Formulário recebido! titulo " + titulo + " " + "descricao" + " " + descricao);
});

app.listen(8080, () => {
  console.log("Aplicação rodando!");
});
