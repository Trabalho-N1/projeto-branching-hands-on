
const express = require("express");
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("Servidor rodando! 🚀");
});

app.get("/saudacao/:nome", (req, res) => {
  res.send(`Olá, ${req.params.nome}!`);
});

app.listen(porta, () => {
  console.log(`Servidor iniciado em http://localhost:${porta}`);
});