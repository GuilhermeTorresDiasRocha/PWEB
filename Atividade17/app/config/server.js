const express = require("express");

const app = express();

app.set("view engine", "ejs");

//diretorio onde estao os arquivos
app.set("views", "./app/views");
module.exports = app;