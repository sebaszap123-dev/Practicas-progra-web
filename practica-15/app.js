const { application } = require("express");
var express = require("express");
var app = express();
// const bp = require("body-parser");
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

var port = process.env.PORT || 3000;
// insetar codigo app.use
app.use("/assets", express.static(__dirname + "/public"));
/* Sirve para especificarle a express que carpeta se usara como assets en el local */

/* Sirve para parsear las peticiones del body también*/
app.use(express.urlencoded({ extended: false }));

app.use("/", function (req, res, next) {
  console.log("Request  Url" + req.url);
  next();
});
/* Este codigo ayuda a realizar console logs al cambiar de raíz */
// En este caso el codigo ta en index para facilitar la lectura de los documentos
// Implementación de otras practicas
app.get("/", function (req, res) {
  res.render("home");
});
// Modifique la ruta raíz para recibir un style del archivo style.css de la carpeta public

// var html = {
//   first: "<html><head></head><body><h1>Person: ",
//   second: "</h1></body></html>",
// };

// Ya la tenia desde la practica 10 esta ruta
// cambio, adicción de QRST para recibir el query
app.get("/person/:id", function (req, res) {
  res.render("person", {
    ID: req.params.id,
    SMS: req.query.message,
    TIME: req.query.time,
  });
});

app.get("/api", function (req, res) {
  res.json({
    firstName: "Sebastián",
    lastName: "Frausto",
  });
});

app.get("/student", function (req, res) {
  res.render("index");
});

app.post("/student", function (req, res) {
  res.send(`First name es: ${req.body.fname} Last name es: ${req.body.lname}`);
  console.log(req.body);
});

app.listen(port);
/*Ejecute la app mediante npx nodemon por ello cambie el nombre del app.js -> index.js*/

/* En resumen de esta practica puedo notar como usar estilos mediante el app.use de expressions
  Bastante util para generalizar funciones y llamarlas a mandar cuando una nueva dirección es requerida
  Lo unico que me daría curiosidad y falta por ver es como lograr ese cambio de raíz desde la pagína principal
  Mientras tanto el uso de styles.css para darle estilo a todo tu html es un buen comienzo
*/
