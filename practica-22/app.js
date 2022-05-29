const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./src/routes/router");
const homeRouter = require("./src/routes/home.js");
var app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "../public"));
var port = 3000;
// insetar codigo app.use
/* Sirve para especificarle a express que carpeta se usara como assets en el local */

/* Sirve para parsear las peticiones del body también*/
app.use(personsRoutes);
app.use(homeRouter);

app.use("/", function (req, res, next) {
  console.log("Request  Url" + req.url);
  next();
});
console.log(port);
app.listen(port);
/*Ejecute la app mediante npx nodemon por ello cambie el nombre del app.js -> index.js*/

/* En resumen de esta practica puedo notar como usar estilos mediante el app.use de expressions
  Bastante util para generalizar funciones y llamarlas a mandar cuando una nueva dirección es requerida
  Lo unico que me daría curiosidad y falta por ver es como lograr ese cambio de raíz desde la pagína principal
  Mientras tanto el uso de styles.css para darle estilo a todo tu html es un buen comienzo
*/
